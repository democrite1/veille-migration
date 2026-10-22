/**
 * Link check for every URL cited in src/data (audit D7).
 *
 * Four outcomes per URL:
 *   ok          — 2xx after redirects
 *   blocked     — 400/401/403/406/429: the page probably exists but refuses
 *                 automated clients, so a human must open it
 *   unreachable — timeout or 5xx: may be temporary, check again next week
 *   broken      — 404/410, unknown domain, refused connection, bad certificate
 *
 * Writes a Markdown report (default scripts/links-report.md, or the path given
 * as first argument) and exits 1 when anything is broken, so the weekly
 * workflow shows red and files an issue.
 */
import { writeFileSync } from 'node:fs';
import { collectLinks, type LinkRef } from './links';

// A browser user agent: several sites (x.com among them) answer 404 to unknown clients.
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const TIMEOUT_MS = 20_000;
const CONCURRENCY = 8;

type Status = 'ok' | 'blocked' | 'unreachable' | 'broken';
type Outcome = { ref: LinkRef; status: Status; detail: string };

const BLOCKED = new Set([400, 401, 403, 406, 429]);
const BROKEN_CAUSES = /ENOTFOUND|ECONNREFUSED|CERT|SSL|TLS|EAI_AGAIN/;

async function probe(url: string): Promise<{ status: Status; detail: string }> {
  for (const method of ['HEAD', 'GET'] as const) {
    try {
      const res = await fetch(url, { method, redirect: 'follow', signal: AbortSignal.timeout(TIMEOUT_MS), headers: { 'user-agent': UA, accept: 'text/html,*/*' } });
      // Many servers mishandle HEAD; only GET is conclusive for them.
      if (method === 'HEAD' && !res.ok) continue;
      if (res.ok) return { status: 'ok', detail: String(res.status) };
      if (BLOCKED.has(res.status)) return { status: 'blocked', detail: String(res.status) };
      if (res.status >= 500) return { status: 'unreachable', detail: String(res.status) };
      return { status: 'broken', detail: String(res.status) };
    } catch (e) {
      if (method === 'HEAD') continue;
      const cause = (e as { cause?: { code?: string } }).cause?.code ?? (e as Error).name;
      return { status: BROKEN_CAUSES.test(cause) ? 'broken' : 'unreachable', detail: cause };
    }
  }
  return { status: 'unreachable', detail: 'no response' };
}

async function main() {
  const refs = collectLinks();
  const out: Outcome[] = [];
  let next = 0;
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
    while (next < refs.length) {
      const ref = refs[next++];
      out.push({ ref, ...(await probe(ref.url)) });
    }
  }));
  // A dead link already shown to readers as "non vérifié" is known: listed, but it does not fail the run.
  const known = out.filter((o) => o.status !== 'ok' && o.ref.flagged);
  const by = (s: Status) => out.filter((o) => o.status === s && !o.ref.flagged).sort((a, b) => a.ref.url.localeCompare(b.ref.url));
  const line = (o: Outcome) => `- \`${o.detail}\` ${o.ref.url} — ${o.ref.where.join(' ; ')}`;
  const section = (title: string, list: Outcome[]) => [`## ${title}`, ...(list.length ? list.map(line) : ['Aucune.']), ''];
  const broken = by('broken');
  const report = [
    `# Contrôle des liens — ${new Date().toISOString().slice(0, 10)}`,
    '',
    `${out.length} URL : ${out.filter((o) => o.status === 'ok').length} répondent, ${by('blocked').length} refusent les robots, ${by('unreachable').length} injoignables, ${broken.length} cassées, ${known.length} déjà signalées « non vérifié » sur le site.`,
    '',
    ...section('Cassées (à corriger)', broken),
    ...section('Injoignables (à revoir la semaine suivante)', by('unreachable')),
    ...section('Refusées aux robots (à ouvrir à la main)', by('blocked')),
    ...section('Déjà signalées « non vérifié » sur le site', known),
  ].join('\n');
  writeFileSync(process.argv[2] ?? 'scripts/links-report.md', report);
  console.log(report.split('\n').slice(0, 3).join('\n'));
  for (const o of broken) console.log(line(o));
  process.exit(broken.length ? 1 : 0);
}

main();
