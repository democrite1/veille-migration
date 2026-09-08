import { getSupabaseClient } from './supabase';
import type {
  Party,
  Election,
  Legislation,
  NewsItem,
  Source,
  Classification,
  StatusHistoryEntry,
  CountryCode,
} from '@/data/types';

function toSource(row: any): Source {
  return {
    name: row.name,
    url: row.url,
    accessedOn: row.accessed_on ?? undefined,
    note: row.note ?? undefined,
  };
}

export async function getParties(countryCode?: string): Promise<Party[]> {
  const supabase = getSupabaseClient();

  let query = supabase.from('parties').select('*').order('name');
  if (countryCode) query = query.eq('country_code', countryCode);
  const { data: partyRows, error: partyErr } = await query;
  if (partyErr) throw new Error(`getParties: ${partyErr.message}`);
  if (!partyRows || partyRows.length === 0) return [];

  const partyIds = partyRows.map((p) => p.id);

  const [{ data: classifications, error: classErr }, { data: socials, error: socErr }, { data: history, error: histErr }] =
    await Promise.all([
      supabase.from('party_classifications').select('*').in('party_id', partyIds),
      supabase.from('party_social_accounts').select('*').in('party_id', partyIds),
      supabase.from('party_status_history').select('*').in('party_id', partyIds),
    ]);
  if (classErr) throw new Error(`getParties classifications: ${classErr.message}`);
  if (socErr) throw new Error(`getParties socials: ${socErr.message}`);
  if (histErr) throw new Error(`getParties history: ${histErr.message}`);

  // Fetch only the sources actually referenced (never the whole table — it
  // grows with every seed run and PostgREST silently caps unbounded
  // `select('*')` queries at 1000 rows, which orphaned real references once
  // the table passed that size).
  const sourceIds = Array.from(
    new Set(
      [
        ...partyRows.map((p) => p.electoral_status_source_id),
        ...partyRows.map((p) => p.classification_source_id),
        ...(classifications ?? []).map((c) => c.source_id),
        ...(history ?? []).map((h) => h.source_id),
      ].filter(Boolean),
    ),
  );
  const { data: sourcesAll, error: srcErr } = await supabase.from('sources').select('*').in('id', sourceIds);
  if (srcErr) throw new Error(`getParties sources: ${srcErr.message}`);

  const sourceMap = new Map((sourcesAll ?? []).map((s) => [s.id, s]));

  return partyRows.map((row): Party => {
    const intentionRow = classifications?.find((c) => c.party_id === row.id && c.axis === 'intention');
    const actionRow = classifications?.find((c) => c.party_id === row.id && c.axis === 'action_status');
    const partySocials = (socials ?? []).filter((s) => s.party_id === row.id);
    const partyHistory = (history ?? []).filter((h) => h.party_id === row.id);

    const buildClassification = (r: any): Classification => ({
      tag: r.tag,
      note: r.note ?? undefined,
      source: toSource(sourceMap.get(r.source_id)),
    });

    return {
      slug: row.slug,
      name: row.name,
      countryCode: row.country_code as CountryCode,
      positioning: row.positioning,
      electoralStatus: row.electoral_status,
      electoralStatusDetail: row.electoral_status_detail,
      electoralStatusSource: toSource(sourceMap.get(row.electoral_status_source_id)),
      officialWebsite: row.official_website,
      socialAccounts: partySocials.map((s) => ({ platform: s.platform, url: s.url })),
      classificationSource: toSource(sourceMap.get(row.classification_source_id)),
      intention: buildClassification(intentionRow),
      actionStatus: buildClassification(actionRow),
      actionStatusHistory: partyHistory.length
        ? partyHistory.map(
            (h): StatusHistoryEntry => ({
              date: h.date,
              tag: h.tag,
              note: h.note,
              source: h.source_id ? toSource(sourceMap.get(h.source_id)) : undefined,
            }),
          )
        : undefined,
      founded: row.founded ?? undefined,
      description: row.description,
    };
  });
}

export async function getPartyBySlug(slug: string): Promise<Party | undefined> {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase.from('parties').select('id').eq('slug', slug).maybeSingle();
  if (error) throw new Error(`getPartyBySlug: ${error.message}`);
  if (!data) return undefined;
  const all = await getParties();
  return all.find((p) => p.slug === slug);
}

export async function getElections(): Promise<Election[]> {
  const supabase = getSupabaseClient();
  const { data: rows, error } = await supabase.from('elections').select('*').order('date', { ascending: false });
  if (error) throw new Error(`getElections: ${error.message}`);
  const sourceIds = Array.from(new Set((rows ?? []).map((r) => r.source_id).filter(Boolean)));
  const { data: sources, error: srcErr } = await supabase.from('sources').select('*').in('id', sourceIds);
  if (srcErr) throw new Error(`getElections sources: ${srcErr.message}`);
  const sourceMap = new Map((sources ?? []).map((s) => [s.id, s]));

  return (rows ?? []).map(
    (row): Election => ({
      id: row.id,
      countryCode: row.country_code,
      level: row.level,
      scopeName: row.scope_name,
      mandateDuration: row.mandate_duration,
      powers: row.powers,
      date: row.date,
      status: row.status,
      result: row.result ?? undefined,
      source: toSource(sourceMap.get(row.source_id)),
    }),
  );
}

export async function getLegislation(): Promise<Legislation[]> {
  const supabase = getSupabaseClient();
  const { data: rows, error } = await supabase.from('legislation').select('*').order('date', { ascending: false });
  if (error) throw new Error(`getLegislation: ${error.message}`);
  const sourceIds = Array.from(new Set((rows ?? []).map((r) => r.source_id).filter(Boolean)));
  const { data: sources, error: srcErr } = await supabase.from('sources').select('*').in('id', sourceIds);
  if (srcErr) throw new Error(`getLegislation sources: ${srcErr.message}`);
  const sourceMap = new Map((sources ?? []).map((s) => [s.id, s]));

  return (rows ?? []).map(
    (row): Legislation => ({
      id: row.id,
      countryOrLevel: row.country_or_level,
      title: row.title,
      status: row.status,
      date: row.date,
      description: row.description,
      source: toSource(sourceMap.get(row.source_id)),
    }),
  );
}

export async function getNews(): Promise<NewsItem[]> {
  const supabase = getSupabaseClient();
  const { data: rows, error } = await supabase.from('news_items').select('*').order('date', { ascending: false });
  if (error) throw new Error(`getNews: ${error.message}`);
  const sourceIds = Array.from(new Set((rows ?? []).map((r) => r.source_id).filter(Boolean)));
  const { data: sources, error: srcErr } = await supabase.from('sources').select('*').in('id', sourceIds);
  if (srcErr) throw new Error(`getNews sources: ${srcErr.message}`);
  const sourceMap = new Map((sources ?? []).map((s) => [s.id, s]));

  return (rows ?? []).map(
    (row): NewsItem => ({
      id: row.id,
      title: row.title,
      countries: row.countries ?? [],
      date: row.date,
      summary: row.summary,
      legalStatus: row.legal_status,
      source: toSource(sourceMap.get(row.source_id)),
    }),
  );
}
