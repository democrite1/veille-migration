/**
 * Daily fetch: surface candidate signals of a party's status changing
 * (entering/leaving government, election results, coalition shifts) by
 * searching Google News RSS for "<party name> gouvernement/coalition/
 * opposition" in that party's own country and language. This does NOT
 * reconcile against Manifesto Project / ParlGov / PopuList — those don't
 * offer a free, keyless, automatable API — so classification tags
 * (intention / action status) still require manual verification, exactly
 * as every entry in src/data/parties.ts was built this session. What this
 * script *is* good for: this project has twice discovered a governing
 * party had actually lost power (Hungary, Slovenia) only by manually
 * re-checking — this surfaces the news that would have caught that sooner.
 *
 * Output: scripts/fetch/output/parties-candidates.json (git-ignored) +
 * a console summary. Nothing is written to Supabase; a human reviews the
 * output and updates src/data/parties.ts + reruns scripts/seed-supabase.ts.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { parties } from '../../src/data/parties';
import { fetchGoogleNewsRss, type NewsCandidate } from './lib/googleNewsRss';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const COUNTRY_LANG: Record<string, string> = {
  FR: 'fr', DE: 'de', GB: 'en', IT: 'it', NL: 'nl', US: 'en', SE: 'sv',
  AT: 'de', ES: 'es', HU: 'hu', FI: 'fi', BE: 'fr', CH: 'de', PT: 'pt',
  PL: 'pl', NO: 'no', CZ: 'cs', GR: 'el', RO: 'ro', SK: 'sk', DK: 'da',
  AU: 'en', CA: 'fr', HR: 'hr', SI: 'sl', BG: 'bg', NZ: 'en', AR: 'es',
};

const GOVERNMENT_WORD: Record<string, string> = {
  fr: 'gouvernement OR coalition OR opposition',
  de: 'Regierung OR Koalition OR Opposition',
  en: 'government OR coalition OR opposition',
  it: 'governo OR coalizione OR opposizione',
  nl: 'regering OR coalitie OR oppositie',
  sv: 'regering OR koalition OR opposition',
  es: 'gobierno OR coalición OR oposición',
  hu: 'kormány OR koalíció OR ellenzék',
  fi: 'hallitus OR koalitio OR oppositio',
  pt: 'governo OR coligação OR oposição',
  pl: 'rząd OR koalicja OR opozycja',
  no: 'regjering OR koalisjon OR opposisjon',
  cs: 'vláda OR koalice OR opozice',
  el: 'κυβέρνηση OR συνασπισμός OR αντιπολίτευση',
  ro: 'guvern OR coaliție OR opoziție',
  sk: 'vláda OR koalícia OR opozícia',
  da: 'regering OR koalition OR opposition',
  hr: 'vlada OR koalicija OR oporba',
  sl: 'vlada OR koalicija OR opozicija',
  bg: 'правителство OR коалиция OR опозиция',
};

async function main() {
  const results: Record<string, NewsCandidate[]> = {};

  for (const party of parties) {
    const lang = COUNTRY_LANG[party.countryCode] ?? 'en';
    const govWord = GOVERNMENT_WORD[lang] ?? GOVERNMENT_WORD.en;
    try {
      const candidates = await fetchGoogleNewsRss(`"${party.name}" ${govWord}`, {
        limit: 5,
        lang,
        country: party.countryCode,
      });
      results[party.slug] = candidates;
      console.log(`[fetch:parties] ${party.name} (${party.countryCode}): ${candidates.length} article(s)`);
      if (candidates[0]) console.log(`    → ${candidates[0].title} (${candidates[0].source})`);
    } catch (err) {
      console.error(`[fetch:parties] failed for ${party.name}:`, (err as Error).message);
    }
    await sleep(1200);
  }

  const outDir = join(__dirname, 'output');
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'parties-candidates.json'), JSON.stringify(results, null, 2));
  console.log(`[fetch:parties] Done. ${Object.keys(results).length} parties checked — review scripts/fetch/output/parties-candidates.json for anything that changed since the fiche was last written.`);
}

main();
