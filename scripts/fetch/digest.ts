/**
 * Weekly digest of the fetch candidates (audit T6). The daily artifacts
 * expire after 14 days and nothing showed they were read; this turns the
 * latest candidates into one Markdown checklist that the weekly workflow
 * posts as a GitHub issue, so leads are reviewed and ticked off in one place.
 *
 * Usage: npx tsx scripts/fetch/digest.ts [output.md]
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { NewsCandidate } from './lib/googleNewsRss';

const FILES: [string, string][] = [
  ['parties-candidates.json', 'Partis — changements de statut possibles'],
  ['elections-candidates.json', 'Élections'],
  ['legislation-candidates.json', 'Législation'],
  ['news-candidates.json', 'Actualités'],
];
const PER_TOPIC = 3;
const MAX_AGE_DAYS = 8;

const outDir = join(__dirname, 'output');
const recent = (c: NewsCandidate) => {
  const t = Date.parse(c.pubDate);
  return Number.isNaN(t) || Date.now() - t < MAX_AGE_DAYS * 86_400_000;
};

const lines = [
  `# Veille de la semaine du ${new Date().toISOString().slice(0, 10)}`,
  '',
  "Pistes repérées automatiquement dans Google News au cours des huit derniers jours. Ce sont des pistes, pas des faits : chaque information publiée sur le site doit être vérifiée et sourcée à la main dans `src/data`. Cocher une piste une fois traitée ou écartée.",
  '',
];
let total = 0;
for (const [file, title] of FILES) {
  const path = join(outDir, file);
  lines.push(`## ${title}`, '');
  if (!existsSync(path)) {
    lines.push('_Fichier absent : la collecte a échoué._', '');
    continue;
  }
  const data = JSON.parse(readFileSync(path, 'utf8')) as Record<string, NewsCandidate[]>;
  let shown = 0;
  for (const [topic, items] of Object.entries(data)) {
    const fresh = items.filter(recent).slice(0, PER_TOPIC);
    if (!fresh.length) continue;
    lines.push(`**${topic}**`);
    for (const c of fresh) lines.push(`- [ ] [${c.title.replace(/[[\]]/g, '')}](${c.url}) — ${c.source}`);
    lines.push('');
    shown += fresh.length;
  }
  if (!shown) lines.push('_Rien de nouveau._', '');
  total += shown;
}
lines.splice(4, 0, `${total} piste(s) au total.`, '');
writeFileSync(process.argv[2] ?? join(outDir, 'digest.md'), lines.join('\n'));
console.log(`[fetch:digest] ${total} piste(s).`);
