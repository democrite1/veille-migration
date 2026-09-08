/**
 * Daily fetch: surface candidate press coverage of anti-immigration
 * initiatives (not tied to a single party — see src/data/news.ts for the
 * three initiatives already covered: Save Europe Act, Return to the Land,
 * Orania) via Google News RSS. GDELT's DOC 2.0 API would be the more
 * structured source the original brief named, but its free tier enforces
 * a strict 1-request/5s per-IP limit that shared cloud egress IPs — this
 * includes GitHub Actions runners — routinely trip; it returned nothing
 * but rate-limit notices when tested from this project's own sandbox.
 * Google News RSS has no such issue and needs no API key or registration.
 *
 * Output: scripts/fetch/output/news-candidates.json (git-ignored) + a
 * console summary. Nothing is written to Supabase directly — a human
 * still writes the journalistic summary, legal status and source that
 * every entry in src/data/news.ts carries.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fetchGoogleNewsRss, type NewsCandidate } from './lib/googleNewsRss';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const QUERIES: { topic: string; query: string; lang?: string; country?: string }[] = [
  { topic: 'remigration (terme)', query: '"remigration" OR "remigración" OR "Remigration"' },
  { topic: 'Save Europe Act / ICE remigration', query: '"Save Europe Act" migration' },
  { topic: 'Return to the Land', query: '"Return to the Land" Arkansas whites-only' },
  { topic: 'Orania', query: 'Orania Afrikaner South Africa' },
  { topic: 'communautés ethniquement exclusives (général)', query: 'whites-only community ethnostate' },
];

async function main() {
  const results: Record<string, NewsCandidate[]> = {};

  for (const { topic, query, lang, country } of QUERIES) {
    try {
      const candidates = await fetchGoogleNewsRss(query, { limit: 8, lang: lang ?? 'en', country: country ?? 'US' });
      results[topic] = candidates;
      console.log(`[fetch:news] ${topic}: ${candidates.length} article(s)`);
      if (candidates[0]) console.log(`    → ${candidates[0].title} (${candidates[0].source})`);
    } catch (err) {
      console.error(`[fetch:news] failed for "${topic}":`, (err as Error).message);
    }
    await sleep(1200);
  }

  const outDir = join(__dirname, 'output');
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, 'news-candidates.json'), JSON.stringify(results, null, 2));
  console.log(`[fetch:news] Done. ${QUERIES.length} topics checked — review scripts/fetch/output/news-candidates.json for developments worth adding to src/data/news.ts.`);
}

main();
