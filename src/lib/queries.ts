import { cache } from 'react';
import { getSupabaseClient } from './supabase';
import type {
  Party,
  Election,
  Legislation,
  NewsItem,
  Source,
  Classification,
  StatusHistoryEntry,
  ElectoralResult,
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

/**
 * Fetches rows from `sources` by id, in batches. A single `.in('id', ids)`
 * call with hundreds of UUIDs produces a query string tens of kilobytes long,
 * which intermittently triggers 500s somewhere along the Vercel/Supabase
 * request path (URL-length limits on an intermediary). Chunking keeps every
 * individual request small regardless of how many parties/sources exist.
 */
async function fetchSourcesByIds(supabase: ReturnType<typeof getSupabaseClient>, ids: string[]) {
  const chunkSize = 80;
  const chunks: string[][] = [];
  for (let i = 0; i < ids.length; i += chunkSize) chunks.push(ids.slice(i, i + chunkSize));

  const results = await Promise.all(
    chunks.map((chunk) => supabase.from('sources').select('*').in('id', chunk)),
  );
  for (const r of results) {
    if (r.error) throw new Error(`fetchSourcesByIds: ${r.error.message}`);
  }
  return results.flatMap((r) => r.data ?? []);
}

/**
 * Cached per request/build with React's `cache()`: `getPartyBySlug` (called
 * once per static party page) and `generateStaticParams` both call this with
 * the same (no) arguments, so without dedup a 43-party build fired off ~44
 * redundant full fetches concurrently — wasteful, and the likely source of
 * an intermittent "Cannot read properties of undefined" crash when two of
 * those concurrent fetches interleaved.
 */
export const getParties = cache(async function getParties(countryCode?: string): Promise<Party[]> {
  const supabase = getSupabaseClient();

  let query = supabase.from('parties').select('*').order('name');
  if (countryCode) query = query.eq('country_code', countryCode);
  const { data: partyRows, error: partyErr } = await query;
  if (partyErr) throw new Error(`getParties: ${partyErr.message}`);
  if (!partyRows || partyRows.length === 0) return [];

  const partyIds = partyRows.map((p) => p.id);

  const [
    { data: classifications, error: classErr },
    { data: socials, error: socErr },
    { data: history, error: histErr },
    { data: electoralHistory, error: ehErr },
  ] = await Promise.all([
    supabase.from('party_classifications').select('*').in('party_id', partyIds),
    supabase.from('party_social_accounts').select('*').in('party_id', partyIds),
    supabase.from('party_status_history').select('*').in('party_id', partyIds),
    supabase.from('party_electoral_history').select('*').in('party_id', partyIds).order('date', { ascending: false }),
  ]);
  if (classErr) throw new Error(`getParties classifications: ${classErr.message}`);
  if (socErr) throw new Error(`getParties socials: ${socErr.message}`);
  if (histErr) throw new Error(`getParties history: ${histErr.message}`);
  if (ehErr) throw new Error(`getParties electoral history: ${ehErr.message}`);

  // Fetch only the sources actually referenced (never the whole table — it
  // grows with every seed run and PostgREST silently caps unbounded
  // `select('*')` queries at 1000 rows, which orphaned real references once
  // the table passed that size).
  const sourceIds = Array.from(
    new Set(
      [
        ...partyRows.map((p) => p.electoral_status_source_id),
        ...partyRows.map((p) => p.classification_source_id),
        ...partyRows.map((p) => p.meps_source_id),
        ...partyRows.map((p) => p.local_implantation_source_id),
        ...(classifications ?? []).map((c) => c.source_id),
        ...(history ?? []).map((h) => h.source_id),
        ...(electoralHistory ?? []).map((e) => e.source_id),
      ].filter(Boolean),
    ),
  );
  const sourcesAll = await fetchSourcesByIds(supabase, sourceIds);

  const sourceMap = new Map(sourcesAll.map((s) => [s.id, s]));

  return partyRows.map((row): Party => {
    const intentionRow = classifications?.find((c) => c.party_id === row.id && c.axis === 'intention');
    const actionRow = classifications?.find((c) => c.party_id === row.id && c.axis === 'action_status');
    const partySocials = (socials ?? []).filter((s) => s.party_id === row.id);
    const partyHistory = (history ?? []).filter((h) => h.party_id === row.id);
    const partyElectoralHistory = (electoralHistory ?? []).filter((e) => e.party_id === row.id);

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
      electoralHistory: partyElectoralHistory.length
        ? partyElectoralHistory.map(
            (e): ElectoralResult => ({
              label: e.label,
              chamber: e.chamber ?? undefined,
              date: e.date,
              seats: e.seats,
              totalSeats: e.total_seats,
              votePercent: e.vote_percent ?? undefined,
              source: toSource(sourceMap.get(e.source_id)),
            }),
          )
        : undefined,
      europeanRepresentation:
        row.meps_count != null
          ? {
              meps: row.meps_count,
              totalCountryMeps: row.meps_total_country ?? undefined,
              europeanGroup: row.meps_group ?? undefined,
              source: toSource(sourceMap.get(row.meps_source_id)),
            }
          : undefined,
      localImplantation: row.local_implantation_summary
        ? {
            summary: row.local_implantation_summary,
            mayors: row.local_implantation_mayors ?? undefined,
            regionalCouncillors: row.local_implantation_regional_councillors ?? undefined,
            source: toSource(sourceMap.get(row.local_implantation_source_id)),
          }
        : undefined,
      founded: row.founded ?? undefined,
      description: row.description,
    };
  });
});

export async function getPartyBySlug(slug: string): Promise<Party | undefined> {
  const all = await getParties();
  return all.find((p) => p.slug === slug);
}

export async function getElections(): Promise<Election[]> {
  const supabase = getSupabaseClient();
  const { data: rows, error } = await supabase.from('elections').select('*').order('date', { ascending: false });
  if (error) throw new Error(`getElections: ${error.message}`);
  const sourceIds = Array.from(new Set((rows ?? []).map((r) => r.source_id).filter(Boolean)));
  const sources = await fetchSourcesByIds(supabase, sourceIds);
  const sourceMap = new Map(sources.map((s) => [s.id, s]));

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
      totalSeats: row.total_seats ?? undefined,
      source: toSource(sourceMap.get(row.source_id)),
    }),
  );
}

export async function getLegislation(): Promise<Legislation[]> {
  const supabase = getSupabaseClient();
  const { data: rows, error } = await supabase.from('legislation').select('*').order('date', { ascending: false });
  if (error) throw new Error(`getLegislation: ${error.message}`);
  const sourceIds = Array.from(new Set((rows ?? []).map((r) => r.source_id).filter(Boolean)));
  const sources = await fetchSourcesByIds(supabase, sourceIds);
  const sourceMap = new Map(sources.map((s) => [s.id, s]));

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
  const sources = await fetchSourcesByIds(supabase, sourceIds);
  const sourceMap = new Map(sources.map((s) => [s.id, s]));

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
