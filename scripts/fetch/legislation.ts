/**
 * Daily fetch: surface candidate news about new or advancing immigration
 * legislation, per country + at EU level, via Google News RSS. EUR-Lex has
 * no simple keyless RSS-by-keyword endpoint (its RSS feeds are generated
 * per saved search from an authenticated session), so this substitutes
 * press coverage as the review queue: a human still turns a real bill or
 * law into a dated, sourced entry in src/data/legislation.ts, linking the
 * official text (Légifrance, EUR-Lex, national parliament site, etc.).
 *
 * Output: scripts/fetch/output/legislation-candidates.json (git-ignored) +
 * a console summary. Nothing is written to Supabase directly.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fetchGoogleNewsRss, type NewsCandidate } from './lib/googleNewsRss';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const TARGETS: { code: string; query: string; lang: string; country: string }[] = [
  { code: 'EU', query: 'Union européenne loi immigration asile règlement directive', lang: 'fr', country: 'FR' },
  { code: 'FR', query: 'loi immigration asile Assemblée nationale', lang: 'fr', country: 'FR' },
  { code: 'DE', query: 'Migrationsgesetz Abschiebung Bundestag', lang: 'de', country: 'DE' },
  { code: 'GB', query: 'immigration asylum bill Parliament', lang: 'en', country: 'GB' },
  { code: 'IT', query: 'decreto immigrazione asilo', lang: 'it', country: 'IT' },
  { code: 'NL', query: 'asielwet immigratie Tweede Kamer', lang: 'nl', country: 'NL' },
  { code: 'US', query: 'immigration executive order Congress', lang: 'en', country: 'US' },
  { code: 'SE', query: 'migration lag återvandring', lang: 'sv', country: 'SE' },
  { code: 'AT', query: 'Asylgesetz Migration Nationalrat', lang: 'de', country: 'AT' },
  { code: 'ES', query: 'ley inmigración asilo Congreso', lang: 'es', country: 'ES' },
  { code: 'HU', query: 'migráció törvény bevándorlás', lang: 'hu', country: 'HU' },
  { code: 'FI', query: 'maahanmuuttolaki turvapaikka', lang: 'fi', country: 'FI' },
  { code: 'BE', query: 'loi immigration asile', lang: 'fr', country: 'BE' },
  { code: 'CH', query: 'Asylgesetz Zuwanderung Bundesrat', lang: 'de', country: 'CH' },
  { code: 'PT', query: 'lei imigração asilo Assembleia', lang: 'pt', country: 'PT' },
  { code: 'PL', query: 'ustawa migracja azyl Sejm', lang: 'pl', country: 'PL' },
  { code: 'NO', query: 'utlendingslov innvandring Stortinget', lang: 'no', country: 'NO' },
  { code: 'CZ', query: 'zákon migrace azyl Sněmovna', lang: 'cs', country: 'CZ' },
  { code: 'GR', query: 'νόμος μετανάστευση άσυλο Βουλή', lang: 'el', country: 'GR' },
  { code: 'RO', query: 'lege migrație azil Parlament', lang: 'ro', country: 'RO' },
  { code: 'SK', query: 'zákon migrácia azyl parlament', lang: 'sk', country: 'SK' },
  { code: 'DK', query: 'udlændingelov Folketinget', lang: 'da', country: 'DK' },
  { code: 'AU', query: 'immigration bill Parliament asylum', lang: 'en', country: 'AU' },
  { code: 'CA', query: 'loi immigration Parlement', lang: 'fr', country: 'CA' },
  { code: 'HR', query: 'zakon o strancima migracija Sabor', lang: 'hr', country: 'HR' },
  { code: 'SI', query: 'zakon o tujcih migracije', lang: 'sl', country: 'SI' },
  { code: 'BG', query: 'закон миграция убежище парламент', lang: 'bg', country: 'BG' },
  { code: 'NZ', query: 'immigration bill Parliament', lang: 'en', country: 'NZ' },
  { code: 'AR', query: 'ley migraciones decreto', lang: 'es', country: 'AR' },
];

async function main() {
  const results: Record<string, NewsCandidate[]> = {};

  for (const { code, query, lang, country } of TARGETS) {
    try {
      const candidates = await fetchGoogleNewsRss(query, { limit: 5, lang, country });
      results[code] = candidates;
      console.log(`[fetch:legislation] ${code}: ${candidates.length} article(s)`);
      if (candidates[0]) console.log(`    → ${candidates[0].title} (${candidates[0].source})`);
    } catch (err) {
      console.error(`[fetch:legislation] failed for ${code}:`, (err as Error).message);
    }
    await sleep(1200);
  }

  const outDir = join(__dirname, 'output');
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'legislation-candidates.json'), JSON.stringify(results, null, 2));
  console.log(`[fetch:legislation] Done. ${TARGETS.length} targets checked — review scripts/fetch/output/legislation-candidates.json for new bills or laws.`);
}

main();
