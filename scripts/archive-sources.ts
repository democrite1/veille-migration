/**
 * Ask the Wayback Machine to keep a copy of every URL cited in src/data
 * (audit D7), so a source that disappears can still be read.
 *
 * For each URL, the availability API says whether a snapshot already exists
 * from the last ARCHIVE_MAX_AGE_DAYS; if not, Save Page Now is asked for one.
 * The site links each checked source to the snapshot closest to its
 * consultation date (see SourceCite), so nothing has to be stored here.
 *
 * Archive.org rate-limits anonymous use, so requests are spaced and capped
 * per run; the weekly workflow catches up over a few weeks.
 */
import { collectLinks } from './links';

const ARCHIVE_MAX_AGE_DAYS = 365;
const MAX_SAVES = Number(process.env.ARCHIVE_MAX_SAVES ?? 60);
const PAUSE_MS = 12_000;
const UA = 'ObservatoireMigration/1.0 (+https://veille-migration.vercel.app)';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const stamp = (d: Date) => d.toISOString().slice(0, 10).replace(/-/g, '');

async function hasRecentSnapshot(url: string): Promise<boolean | null> {
  const res = await fetch(`https://archive.org/wayback/available?url=${encodeURIComponent(url)}&timestamp=${stamp(new Date())}`, {
    headers: { 'user-agent': UA },
    signal: AbortSignal.timeout(30_000),
  });
  if (!res.ok) return null;
  const j = (await res.json()) as { archived_snapshots?: { closest?: { available?: boolean; timestamp?: string } } };
  const ts = j.archived_snapshots?.closest?.available ? j.archived_snapshots.closest.timestamp : undefined;
  if (!ts) return false;
  const taken = new Date(`${ts.slice(0, 4)}-${ts.slice(4, 6)}-${ts.slice(6, 8)}`);
  return Date.now() - taken.getTime() < ARCHIVE_MAX_AGE_DAYS * 86_400_000;
}

async function main() {
  const all = collectLinks().filter((l) => !l.flagged).map((l) => l.url);
  const urls = process.env.ARCHIVE_MAX_CHECKS ? all.slice(0, Number(process.env.ARCHIVE_MAX_CHECKS)) : all;
  let saved = 0;
  let already = 0;
  const failed: string[] = [];
  for (const url of urls) {
    if (saved >= MAX_SAVES) break;
    try {
      const recent = await hasRecentSnapshot(url);
      await sleep(1_000);
      if (recent) {
        already++;
        continue;
      }
      if (recent === null) {
        failed.push(`${url} (disponibilité inconnue)`);
        continue;
      }
      const res = await fetch(`https://web.archive.org/save/${url}`, { headers: { 'user-agent': UA }, signal: AbortSignal.timeout(120_000) });
      if (res.ok) saved++;
      else failed.push(`${url} (${res.status})`);
      await sleep(PAUSE_MS);
    } catch (e) {
      failed.push(`${url} (${(e as Error).name})`);
    }
  }
  console.log(`${urls.length} URL : ${already} déjà archivées, ${saved} archivées maintenant, ${failed.length} échecs (limite : ${MAX_SAVES} par exécution).`);
  for (const f of failed) console.log(`- ${f}`);
}

main();
