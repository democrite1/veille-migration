/**
 * Daily fetch: surface candidate news about upcoming/recent elections in
 * the countries this site tracks, via Google News RSS. National electoral
 * commission sites and IPU Parline don't offer one uniform, keyless,
 * automatable feed across ~28 very different countries, so this is a
 * signal-surfacing pass, not a structured calendar sync: a human still
 * turns a real result into a dated, sourced entry in src/data/elections.ts.
 *
 * Output: scripts/fetch/output/elections-candidates.json (git-ignored) +
 * a console summary. Nothing is written to Supabase directly.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fetchGoogleNewsRss, type NewsCandidate } from './lib/googleNewsRss';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const TARGETS: { code: string; name: string; query: string; lang: string }[] = [
  { code: 'FR', name: 'France', query: 'élection résultat législative anticipée', lang: 'fr' },
  { code: 'DE', name: 'Allemagne', query: 'Wahl Ergebnis Bundestag', lang: 'de' },
  { code: 'GB', name: 'Royaume-Uni', query: 'election result general', lang: 'en' },
  { code: 'IT', name: 'Italie', query: 'elezioni risultato', lang: 'it' },
  { code: 'NL', name: 'Pays-Bas', query: 'verkiezingen uitslag Tweede Kamer', lang: 'nl' },
  { code: 'US', name: 'États-Unis', query: 'election results midterm', lang: 'en' },
  { code: 'SE', name: 'Suède', query: 'val resultat riksdagsval', lang: 'sv' },
  { code: 'AT', name: 'Autriche', query: 'Wahl Ergebnis Nationalrat', lang: 'de' },
  { code: 'ES', name: 'Espagne', query: 'elecciones resultado', lang: 'es' },
  { code: 'HU', name: 'Hongrie', query: 'választás eredmény', lang: 'hu' },
  { code: 'FI', name: 'Finlande', query: 'vaalit tulos eduskuntavaalit', lang: 'fi' },
  { code: 'BE', name: 'Belgique', query: 'élections résultat fédérales', lang: 'fr' },
  { code: 'CH', name: 'Suisse', query: 'élections résultat Conseil fédéral', lang: 'fr' },
  { code: 'PT', name: 'Portugal', query: 'eleições resultado legislativas', lang: 'pt' },
  { code: 'PL', name: 'Pologne', query: 'wybory wyniki Sejm', lang: 'pl' },
  { code: 'NO', name: 'Norvège', query: 'valg resultat Stortinget', lang: 'no' },
  { code: 'CZ', name: 'République tchèque', query: 'volby výsledky Sněmovna', lang: 'cs' },
  { code: 'GR', name: 'Grèce', query: 'εκλογές αποτελέσματα Βουλή', lang: 'el' },
  { code: 'RO', name: 'Roumanie', query: 'alegeri rezultate Parlament', lang: 'ro' },
  { code: 'SK', name: 'Slovaquie', query: 'voľby výsledky parlament', lang: 'sk' },
  { code: 'DK', name: 'Danemark', query: 'valg resultat Folketinget', lang: 'da' },
  { code: 'AU', name: 'Australie', query: 'election result federal', lang: 'en' },
  { code: 'CA', name: 'Canada', query: 'élections résultat fédérales', lang: 'fr' },
  { code: 'HR', name: 'Croatie', query: 'izbori rezultati Sabor', lang: 'hr' },
  { code: 'SI', name: 'Slovénie', query: 'volitve rezultati Državni zbor', lang: 'sl' },
  { code: 'BG', name: 'Bulgarie', query: 'избори резултати парламент', lang: 'bg' },
  { code: 'NZ', name: 'Nouvelle-Zélande', query: 'election result general', lang: 'en' },
  { code: 'AR', name: 'Argentine', query: 'elecciones resultado', lang: 'es' },
];

async function main() {
  const results: Record<string, NewsCandidate[]> = {};

  for (const { code, name, query, lang } of TARGETS) {
    try {
      const candidates = await fetchGoogleNewsRss(query, { limit: 5, lang, country: code });
      results[code] = candidates;
      console.log(`[fetch:elections] ${name}: ${candidates.length} article(s)`);
      if (candidates[0]) console.log(`    → ${candidates[0].title} (${candidates[0].source})`);
    } catch (err) {
      console.error(`[fetch:elections] failed for ${name}:`, (err as Error).message);
    }
    await sleep(1200);
  }

  const outDir = join(__dirname, 'output');
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'elections-candidates.json'), JSON.stringify(results, null, 2));
  console.log(`[fetch:elections] Done. ${TARGETS.length} countries checked — review scripts/fetch/output/elections-candidates.json for new results or newly-called elections.`);
}

main();
