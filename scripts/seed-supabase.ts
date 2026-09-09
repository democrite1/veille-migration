import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { createClient } from '@supabase/supabase-js';
import { parties } from '../src/data/parties';
import { elections } from '../src/data/elections';
import { legislation } from '../src/data/legislation';
import { news } from '../src/data/news';
import type { Source } from '../src/data/types';

// Minimal .env.local loader (this is a standalone script, not the Next.js runtime).
const envPath = resolve(__dirname, '..', '.env.local');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local');
}

const supabase = createClient(url, serviceKey, {
  auth: { persistSession: false },
});

const COUNTRY_NAMES: Record<string, { fr: string; en: string }> = {
  FR: { fr: 'France', en: 'France' },
  DE: { fr: 'Allemagne', en: 'Germany' },
  GB: { fr: 'Royaume-Uni', en: 'United Kingdom' },
  IT: { fr: 'Italie', en: 'Italy' },
  NL: { fr: 'Pays-Bas', en: 'Netherlands' },
  US: { fr: 'États-Unis', en: 'United States' },
  SE: { fr: 'Suède', en: 'Sweden' },
  AT: { fr: 'Autriche', en: 'Austria' },
  ES: { fr: 'Espagne', en: 'Spain' },
  HU: { fr: 'Hongrie', en: 'Hungary' },
  FI: { fr: 'Finlande', en: 'Finland' },
  BE: { fr: 'Belgique', en: 'Belgium' },
  CH: { fr: 'Suisse', en: 'Switzerland' },
  PT: { fr: 'Portugal', en: 'Portugal' },
  PL: { fr: 'Pologne', en: 'Poland' },
  NO: { fr: 'Norvège', en: 'Norway' },
  CZ: { fr: 'République tchèque', en: 'Czech Republic' },
  GR: { fr: 'Grèce', en: 'Greece' },
  RO: { fr: 'Roumanie', en: 'Romania' },
  SK: { fr: 'Slovaquie', en: 'Slovakia' },
  DK: { fr: 'Danemark', en: 'Denmark' },
  AU: { fr: 'Australie', en: 'Australia' },
  CA: { fr: 'Canada', en: 'Canada' },
  HR: { fr: 'Croatie', en: 'Croatia' },
  SI: { fr: 'Slovénie', en: 'Slovenia' },
  BG: { fr: 'Bulgarie', en: 'Bulgaria' },
  NZ: { fr: 'Nouvelle-Zélande', en: 'New Zealand' },
  AR: { fr: 'Argentine', en: 'Argentina' },
  EE: { fr: 'Estonie', en: 'Estonia' },
  LV: { fr: 'Lettonie', en: 'Latvia' },
  LU: { fr: 'Luxembourg', en: 'Luxembourg' },
  CY: { fr: 'Chypre', en: 'Cyprus' },
};

// Every run inserts fresh source rows rather than updating in place (simplest
// way to keep each fact's citation in sync with src/data/*.ts). That means
// old rows from previous runs are orphaned unless cleaned up — left
// unchecked, the table grows unbounded and PostgREST's default 1000-row cap
// on unbounded `select('*')` queries starts silently truncating results,
// which once broke party pages in production. insertedSourceIds tracks every
// id created in *this* run so main() can delete everything else at the end.
const insertedSourceIds = new Set<string>();

async function insertSource(source: Source): Promise<string> {
  const { data, error } = await supabase
    .from('sources')
    .insert({
      name: source.name,
      url: source.url,
      accessed_on: source.accessedOn ?? null,
      note: source.note ?? null,
    })
    .select('id')
    .single();
  if (error) throw new Error(`insert source "${source.name}": ${error.message}`);
  insertedSourceIds.add(data.id);
  return data.id;
}

async function main() {
  console.log('Seeding countries...');
  for (const code of Object.keys(COUNTRY_NAMES)) {
    const { error } = await supabase
      .from('countries')
      .upsert({ code, name_fr: COUNTRY_NAMES[code].fr, name_en: COUNTRY_NAMES[code].en });
    if (error) throw new Error(`upsert country ${code}: ${error.message}`);
  }

  console.log('Seeding parties...');
  for (const party of parties) {
    const electoralStatusSourceId = await insertSource(party.electoralStatusSource);
    const classificationSourceId = await insertSource(party.classificationSource);
    const mepsSourceId = party.europeanRepresentation ? await insertSource(party.europeanRepresentation.source) : null;
    const localSourceId = party.localImplantation ? await insertSource(party.localImplantation.source) : null;

    const { data: partyRow, error: partyError } = await supabase
      .from('parties')
      .upsert(
        {
          slug: party.slug,
          name: party.name,
          country_code: party.countryCode,
          positioning: party.positioning,
          electoral_status: party.electoralStatus,
          electoral_status_detail: party.electoralStatusDetail,
          electoral_status_source_id: electoralStatusSourceId,
          official_website: party.officialWebsite,
          classification_source_id: classificationSourceId,
          founded: party.founded ?? null,
          description: party.description,
          meps_count: party.europeanRepresentation?.meps ?? null,
          meps_total_country: party.europeanRepresentation?.totalCountryMeps ?? null,
          meps_group: party.europeanRepresentation?.europeanGroup ?? null,
          meps_source_id: mepsSourceId,
          local_implantation_summary: party.localImplantation?.summary ?? null,
          local_implantation_mayors: party.localImplantation?.mayors ?? null,
          local_implantation_regional_councillors: party.localImplantation?.regionalCouncillors ?? null,
          local_implantation_source_id: localSourceId,
        },
        { onConflict: 'slug' },
      )
      .select('id')
      .single();
    if (partyError) throw new Error(`upsert party ${party.slug}: ${partyError.message}`);
    const partyId = partyRow.id;

    await supabase.from('party_social_accounts').delete().eq('party_id', partyId);
    if (party.socialAccounts.length > 0) {
      const { error } = await supabase.from('party_social_accounts').insert(
        party.socialAccounts.map((s) => ({ party_id: partyId, platform: s.platform, url: s.url })),
      );
      if (error) throw new Error(`insert social accounts for ${party.slug}: ${error.message}`);
    }

    for (const [axis, classification] of [
      ['intention', party.intention],
      ['action_status', party.actionStatus],
    ] as const) {
      const sourceId = await insertSource(classification.source);
      const { error } = await supabase.from('party_classifications').upsert(
        {
          party_id: partyId,
          axis,
          tag: classification.tag,
          note: classification.note ?? null,
          source_id: sourceId,
        },
        { onConflict: 'party_id,axis' },
      );
      if (error) throw new Error(`upsert classification ${axis} for ${party.slug}: ${error.message}`);
    }

    if (party.actionStatusHistory) {
      await supabase.from('party_status_history').delete().eq('party_id', partyId);
      for (const entry of party.actionStatusHistory) {
        const sourceId = entry.source ? await insertSource(entry.source) : null;
        const { error } = await supabase.from('party_status_history').insert({
          party_id: partyId,
          date: entry.date,
          tag: entry.tag,
          note: entry.note,
          source_id: sourceId,
        });
        if (error) throw new Error(`insert history for ${party.slug}: ${error.message}`);
      }
    }

    if (party.electoralHistory) {
      await supabase.from('party_electoral_history').delete().eq('party_id', partyId);
      for (const result of party.electoralHistory) {
        const sourceId = await insertSource(result.source);
        const { error } = await supabase.from('party_electoral_history').insert({
          party_id: partyId,
          label: result.label,
          chamber: result.chamber ?? null,
          date: result.date,
          seats: result.seats,
          total_seats: result.totalSeats,
          vote_percent: result.votePercent ?? null,
          source_id: sourceId,
        });
        if (error) throw new Error(`insert electoral history for ${party.slug}: ${error.message}`);
      }
    }

    console.log(`  ok: ${party.name}`);
  }

  console.log('Seeding elections...');
  await supabase.from('elections').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  for (const e of elections) {
    const sourceId = await insertSource(e.source);
    const { error } = await supabase.from('elections').insert({
      country_code: e.countryCode,
      level: e.level,
      scope_name: e.scopeName,
      mandate_duration: e.mandateDuration,
      powers: e.powers,
      date: e.date,
      status: e.status,
      result: e.result ?? null,
      total_seats: e.totalSeats ?? null,
      source_id: sourceId,
    });
    if (error) throw new Error(`insert election ${e.id}: ${error.message}`);
  }
  console.log(`  ok: ${elections.length} elections`);

  console.log('Seeding legislation...');
  await supabase.from('legislation').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  for (const l of legislation) {
    const sourceId = await insertSource(l.source);
    const { error } = await supabase.from('legislation').insert({
      country_or_level: l.countryOrLevel,
      title: l.title,
      status: l.status,
      date: l.date,
      description: l.description,
      source_id: sourceId,
    });
    if (error) throw new Error(`insert legislation ${l.id}: ${error.message}`);
  }
  console.log(`  ok: ${legislation.length} legislation items`);

  console.log('Seeding news...');
  await supabase.from('news_items').delete().neq('id', '00000000-0000-0000-0000-000000000000');
  for (const n of news) {
    const sourceId = await insertSource(n.source);
    const { error } = await supabase.from('news_items').insert({
      title: n.title,
      countries: n.countries,
      date: n.date,
      summary: n.summary,
      legal_status: n.legalStatus,
      source_id: sourceId,
    });
    if (error) throw new Error(`insert news ${n.id}: ${error.message}`);
  }
  console.log(`  ok: ${news.length} news items`);

  console.log('Cleaning up orphaned sources from previous runs...');
  const idList = Array.from(insertedSourceIds).join(',');
  const { error: cleanupErr, count } = await supabase
    .from('sources')
    .delete({ count: 'exact' })
    .not('id', 'in', `(${idList})`);
  if (cleanupErr) throw new Error(`sources cleanup: ${cleanupErr.message}`);
  console.log(`  ok: removed ${count ?? 0} orphaned source row(s), ${insertedSourceIds.size} current sources kept`);

  console.log('Done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
