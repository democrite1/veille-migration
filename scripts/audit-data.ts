/**
 * Data integrity audit for src/data/*.ts.
 *
 * Catches the class of small errors that creep in when facts are entered by
 * hand from news coverage: seats above an assembly's size, elections still
 * flagged "upcoming" after polling day, two fiches disagreeing on the size of
 * the same chamber, citations pointing at a bare domain instead of the page
 * that actually carries the fact.
 *
 * Run: npx tsx scripts/audit-data.ts
 * Exits non-zero if any ERROR-level finding is present, so it can gate a build.
 */
import { parties } from '../src/data/parties';
import { elections } from '../src/data/elections';
import { legislation } from '../src/data/legislation';
import { news } from '../src/data/news';
import { corrections } from '../src/data/corrections';
import { PUBLISHER } from '../src/lib/publisher';
import type { Source } from '../src/data/types';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const TODAY = new Date().toISOString().slice(0, 10);

type Level = 'ERROR' | 'WARN';
const findings: { level: Level; where: string; msg: string }[] = [];
const err = (where: string, msg: string) => findings.push({ level: 'ERROR', where, msg });
const warn = (where: string, msg: string) => findings.push({ level: 'WARN', where, msg });

const isIsoDate = (d: string) => /^\d{4}-\d{2}-\d{2}$/.test(d) && !Number.isNaN(Date.parse(d));

// ---------------------------------------------------------------- duplicates
function checkDuplicates<T>(items: T[], key: (t: T) => string, label: string) {
  const seen = new Map<string, number>();
  for (const it of items) {
    const k = key(it);
    seen.set(k, (seen.get(k) ?? 0) + 1);
  }
  for (const [k, n] of seen) if (n > 1) err(label, `identifiant en double (${n}x) : ${k}`);
}
checkDuplicates(parties, (p) => p.slug, 'parties');
checkDuplicates(elections, (e) => e.id, 'elections');
checkDuplicates(legislation, (l) => l.id, 'legislation');
checkDuplicates(news, (n) => n.id, 'news');

// ------------------------------------------------------------------- sources
/**
 * `onBare` says what a bare domain means for this citation. A figure (a seat
 * count, a vote share) or a classification must point at the page or dataset
 * entry that states it: a home page leaves the reader nothing to check, so it
 * is an error for classifications and intentions and a warning for figures.
 * An institution's homepage cited for "this party has passed no law" is still
 * tolerated with a warning until each fiche names the register consulted.
 */
function checkSource(where: string, s: Source | undefined, onBare: 'ok' | 'warn' | 'err' = 'ok') {
  if (!s) return;
  if (!s.name?.trim()) err(where, 'source sans nom');
  if (!s.url?.trim()) {
    err(where, 'source sans URL');
    return;
  }
  let u: URL | undefined;
  try {
    u = new URL(s.url);
  } catch {
    err(where, `URL invalide : ${s.url}`);
    return;
  }
  const path = u.pathname.replace(/\/+$/, '');
  if (onBare !== 'ok' && (path === '' || path === '/')) {
    (onBare === 'err' ? err : warn)(where, `source sur un domaine nu, non vérifiable en l'état : ${s.url}`);
  }
  // Live blogs and exit polls carry election-night estimates that are routinely
  // revised. A Fidesz seat count taken from one was wrong by three seats.
  if (/live-blog|\/live\/|ultima-hora|-directo-|exit-poll/i.test(s.url)) {
    warn(where, `citation vers un direct / une estimation de soir de scrutin : ${s.url}`);
  }
  // Every source carries either the date it was checked or the reason it could not be.
  if (s.unverified !== undefined) {
    if (!s.unverified.trim()) err(where, 'source non vérifiée sans raison indiquée');
    else warn(where, `source non vérifiée : ${s.unverified}`);
  } else if (!s.accessedOn) err(where, 'source sans date de consultation');
  else if (!isIsoDate(s.accessedOn)) err(where, `accessedOn mal formé : ${s.accessedOn}`);
  else if (s.accessedOn > TODAY) err(where, `accessedOn dans le futur : ${s.accessedOn}`);
}

// ------------------------------------------------- chamber size cross-checks
// Two fiches citing the same chamber on the same date must agree on its size.
const chamberSizes = new Map<string, { total: number; who: string[] }>();

for (const p of parties) {
  const w = `parti ${p.slug}`;
  if (p.founded != null && (p.founded < 1800 || p.founded > Number(TODAY.slice(0, 4))))
    err(w, `année de fondation invraisemblable : ${p.founded}`);

  checkSource(`${w} / electoralStatusSource`, p.electoralStatusSource);
  checkSource(`${w} / classificationSource`, p.classificationSource, 'err');
  checkSource(`${w} / intention`, p.intention?.source, 'err');
  checkSource(`${w} / actionStatus`, p.actionStatus?.source, 'warn');
  for (const h of p.actionStatusHistory ?? []) {
    if (!isIsoDate(h.date)) err(w, `actionStatusHistory : date mal formée ${h.date}`);
    checkSource(`${w} / actionStatusHistory ${h.date}`, h.source);
  }
  checkSource(`${w} / europeanRepresentation`, p.europeanRepresentation?.source);
  checkSource(`${w} / localImplantation`, p.localImplantation?.source);

  const eu = p.europeanRepresentation;
  if (eu) {
    if (eu.meps < 0) err(w, `nombre d'eurodéputés négatif : ${eu.meps}`);
    if (eu.totalCountryMeps != null && eu.meps > eu.totalCountryMeps)
      err(w, `${eu.meps} eurodéputés pour un pays qui n'en compte que ${eu.totalCountryMeps}`);
  }

  const seenResults = new Set<string>();
  for (const r of p.electoralHistory ?? []) {
    const rw = `${w} / « ${r.label} »`;
    if (!isIsoDate(r.date)) err(rw, `date mal formée : ${r.date}`);
    else if (r.date > TODAY) err(rw, `résultat daté du futur : ${r.date}`);
    if (r.seats < 0) err(rw, `sièges négatifs : ${r.seats}`);
    if (r.totalSeats <= 0) err(rw, `taille d'assemblée invalide : ${r.totalSeats}`);
    if (r.seats > r.totalSeats) err(rw, `${r.seats} sièges sur une assemblée de ${r.totalSeats}`);
    if (r.votePercent != null && (r.votePercent < 0 || r.votePercent > 100))
      err(rw, `pourcentage hors bornes : ${r.votePercent}`);
    checkSource(rw, r.source, 'warn');

    const dupKey = `${r.label}|${r.date}`;
    if (seenResults.has(dupKey)) err(rw, 'entrée dupliquée dans electoralHistory');
    seenResults.add(dupKey);

    if (r.chamber) {
      const key = `${p.countryCode}|${r.chamber}|${r.date}`;
      const prev = chamberSizes.get(key);
      if (prev && prev.total !== r.totalSeats) {
        err(
          'cohérence inter-fiches',
          `« ${r.chamber} » au ${r.date} : ${prev.total} sièges selon ${prev.who.join(', ')} mais ${r.totalSeats} selon ${p.slug}`,
        );
      } else if (prev) prev.who.push(p.slug);
      else chamberSizes.set(key, { total: r.totalSeats, who: [p.slug] });
    }
  }
}

// A text updated without its source: the Sweden Democrats' status described
// the election of 13 September 2026 while citing a source consulted in
// August. Flag any party whose status text names a date later than the day
// its source was consulted, and any result whose source predates the vote.
const MONTHS: Record<string, string> = {
  janvier: '01', février: '02', fevrier: '02', mars: '03', avril: '04', mai: '05', juin: '06',
  juillet: '07', août: '08', aout: '08', septembre: '09', octobre: '10', novembre: '11', décembre: '12', decembre: '12',
};
function latestDateIn(text: string): string | null {
  let latest: string | null = null;
  for (const m of text.matchAll(/(?:(\d{1,2})(?:er)?\s+)?(janvier|février|fevrier|mars|avril|mai|juin|juillet|août|aout|septembre|octobre|novembre|décembre|decembre)\s+(20\d{2})/gi)) {
    const day = m[1] ? m[1].padStart(2, '0') : '01';
    const iso = `${m[3]}-${MONTHS[m[2].toLowerCase()]}-${day}`;
    if (!latest || iso > latest) latest = iso;
  }
  return latest;
}
for (const p of parties) {
  const consulted = p.electoralStatusSource.accessedOn;
  const mentioned = latestDateIn(p.electoralStatusDetail);
  if (consulted && mentioned && mentioned <= TODAY && mentioned > consulted) {
    warn(`parti ${p.slug} / electoralStatusSource`, `le texte cite un fait du ${mentioned} mais la source a été consultée le ${consulted}`);
  }
  for (const r of p.electoralHistory ?? []) {
    if (r.source.accessedOn && r.source.accessedOn < r.date) {
      err(`parti ${p.slug} / « ${r.label} »`, `source consultée le ${r.source.accessedOn}, avant le scrutin du ${r.date}`);
    }
  }
}

// MEP totals per country must not exceed the national allocation.
const mepsByCountry = new Map<string, { sum: number; total?: number }>();
for (const p of parties) {
  const eu = p.europeanRepresentation;
  if (!eu) continue;
  const cur = mepsByCountry.get(p.countryCode) ?? { sum: 0, total: eu.totalCountryMeps };
  cur.sum += eu.meps;
  if (eu.totalCountryMeps != null) cur.total = eu.totalCountryMeps;
  mepsByCountry.set(p.countryCode, cur);
}
for (const [cc, { sum, total }] of mepsByCountry) {
  if (total != null && sum > total)
    err('cohérence inter-fiches', `${cc} : les fiches totalisent ${sum} eurodéputés pour ${total} sièges`);
}

// ----------------------------------------------------------------- elections
for (const e of elections) {
  const w = `élection ${e.id}`;
  if (!isIsoDate(e.date)) err(w, `date mal formée : ${e.date}`);
  else {
    if (e.status === 'a_venir' && e.date < TODAY)
      err(w, `encore marquée « à venir » alors que le scrutin a eu lieu le ${e.date}`);
    if (e.status === 'resultat_connu' && e.date > TODAY)
      err(w, `marquée « résultat connu » pour un scrutin du ${e.date}, à venir`);
  }
  if (e.status === 'resultat_connu' && !e.result?.trim())
    warn(w, 'marquée « résultat connu » mais sans texte de résultat');
  if (e.status === 'a_venir' && e.result) warn(w, 'un résultat est renseigné pour un scrutin à venir');
  if (e.totalSeats != null && e.totalSeats <= 0) err(w, `totalSeats invalide : ${e.totalSeats}`);
  if (e.seatsContested != null && e.totalSeats != null && e.seatsContested > e.totalSeats)
    err(w, `${e.seatsContested} sièges à pourvoir sur une assemblée de ${e.totalSeats}`);
  // A by-election fills one seat: without seatsContested the page would
  // present the whole chamber as up for election.
  if (e.level === 'partial' && e.seatsContested == null) err(w, 'élection partielle sans seatsContested');
  checkSource(w, e.source, e.status === 'resultat_connu' ? 'warn' : 'ok');
}

// Elections and party fiches must agree on the size of the body being elected —
// but several countries elect two different bodies on the same day (Senedd and
// Holyrood on 7 May 2026; Sejm and Senate; House and Senate). Comparing on
// country+date alone produced four false positives, so the two descriptions
// must actually refer to the same chamber before their sizes are compared.
const STOPWORDS = new Set([
  'election', 'elections', 'generale', 'generales', 'general', 'legislative', 'legislatives',
  'parlement', 'parliament', 'parlementaires', 'parlamentarne', 'wybory', 'wahl', 'valet',
  'nationale', 'national', 'regionale', 'regionales', 'municipales', 'anticipees', 'partielle',
  'de', 'du', 'des', 'la', 'le', 'les', 'et', 'aux', 'au', 'a', 'of', 'the', 'to',
]);
const tokens = (s: string) =>
  new Set(
    s
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((t) => t.length > 2 && !STOPWORDS.has(t) && !/^\d+$/.test(t)),
  );
const sameBody = (a: string, b: string) => {
  const ta = tokens(a);
  for (const t of tokens(b)) if (ta.has(t)) return true;
  return false;
};

for (const e of elections) {
  if (e.totalSeats == null) continue;
  for (const p of parties) {
    if (p.countryCode !== e.countryCode) continue;
    for (const r of p.electoralHistory ?? []) {
      if (r.date !== e.date || !r.chamber) continue;
      if (!sameBody(e.scopeName, r.chamber)) continue;
      if (r.totalSeats !== e.totalSeats) {
        warn(
          'élections vs fiches',
          `${e.id} annonce ${e.totalSeats} sièges, mais « ${r.label} » (${p.slug}) en annonce ${r.totalSeats} pour le même organe à la même date`,
        );
      }
    }
  }
}

// --------------------------------------------------------- legislation, news
for (const l of legislation) {
  const w = `législation ${l.id}`;
  if (!isIsoDate(l.date)) err(w, `date mal formée : ${l.date}`);
  else if (l.date > TODAY) err(w, `datée du futur : ${l.date}`);
  checkSource(w, l.source);
}
for (const n of news) {
  const w = `actualité ${n.id}`;
  if (!isIsoDate(n.date)) err(w, `date mal formée : ${n.date}`);
  else if (n.date > TODAY) err(w, `datée du futur : ${n.date}`);
  if (!n.countries?.length) warn(w, 'aucun pays associé');
  checkSource(w, n.source);
}

// ---------------------------------------------------------------- vocabulary
// Vocabulary charter (E7, methodology page): words that dramatise a result
// instead of stating it. Quoted words are someone else's and may stay, as may
// the status label "mesures concrètes (historique, abrogée le …)". URLs,
// identifiers and source titles are not the site's own wording and are skipped.
// The corrections log quotes earlier wordings by design and is not checked.
const BANNED = {
  fr: /(?<!\p{L})(percées?|spectaculaires?|séismes?|écrasante?s?|inédite?s?|effondr\p{L}*|historiques?|records?)(?!\p{L})/giu,
  en: /(?<!\p{L})(breakthroughs?|spectacular|earthquakes?|landslides?|crushing|unprecedented|collaps\p{L}*|historic|record-breaking)(?!\p{L})/giu,
};
const SKIP_KEYS = new Set(['id', 'slug', 'url', 'officialWebsite', 'name', 'handle']);
const unquoted = (s: string) =>
  s.replace(/«[^»]*»|“[^”]*”|"[^"]*"/g, ' ').replace(/\(historique, abrog/g, '(');
function checkWording(where: string, v: unknown, lang: 'fr' | 'en' = 'fr') {
  if (typeof v === 'string') {
    for (const m of unquoted(v).matchAll(BANNED[lang])) err(where, `charte de vocabulaire : « ${m[1]} » hors citation`);
  } else if (Array.isArray(v)) {
    for (const x of v) checkWording(where, x, lang);
  } else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) {
      if (!SKIP_KEYS.has(k)) checkWording(where, x, k === 'en' ? 'en' : k === 'fr' ? 'fr' : lang);
    }
  }
}
for (const p of parties) checkWording(`parti ${p.slug}`, p);
for (const e of elections) checkWording(`élection ${e.id}`, e);
for (const l of legislation) checkWording(`législation ${l.id}`, l);
for (const n of news) checkWording(`actualité ${n.id}`, n);

// A news item about an election must not quote different figures from the
// election entry: the AfD Saxony-Anhalt item said 44.4% (election-night
// article) while the election and the party fiche said 43.8%.
const percents = (text: string) =>
  new Set([...text.matchAll(/(\d{1,2}(?:[.,]\d{1,2})?)\s?%/g)].map((m) => m[1].replace(',', '.')));
for (const n of news) {
  for (const e of elections) {
    if (e.date !== n.date || !n.countries.includes(e.countryCode) || !e.result) continue;
    const inElection = percents(e.result);
    for (const p of percents(`${n.title} ${n.summary}`)) {
      if (!inElection.has(p)) {
        warn(`actualité ${n.id}`, `cite ${p.replace('.', ',')} % ; ce chiffre n'apparaît pas dans le résultat de l'élection ${e.id} du même jour`);
      }
    }
  }
}

// ------------------------------------------------- corrections log, legal notice
checkDuplicates(corrections, (c) => c.id, 'corrections');
for (const c of corrections) {
  const w = `correction ${c.id}`;
  if (!isIsoDate(c.date)) err(w, `date mal formée : ${c.date}`);
  else if (c.date > TODAY) err(w, `datée du futur : ${c.date}`);
  if (!c.summary.fr?.trim() || !c.summary.en?.trim()) err(w, 'résumé FR ou EN manquant');
  if (!c.page.startsWith('/')) err(w, `chemin de page invalide : ${c.page}`);
  // A withdrawn fiche must not leave the journal pointing at a 404.
  const fiche = /^\/partis\/([^/]+)$/.exec(c.page)?.[1];
  if (fiche && !parties.some((p) => p.slug === fiche)) err(w, `la fiche ${c.page} n'existe pas`);
  checkSource(w, c.source);
}
// An incomplete legal notice must never reach main (LCEN, decision 3).
if (!PUBLISHER.email?.trim()) err('mentions légales', 'adresse de contact non renseignée (src/lib/publisher.ts)');

// ------------------------------------------------- country labels across UI
const usedCodes = new Set<string>([...parties.map((p) => p.countryCode), ...elections.map((e) => e.countryCode)]);
const labelFiles = [
  'src/app/[locale]/page.tsx',
  'src/app/[locale]/partis/page.tsx',
  'src/app/[locale]/partis/[slug]/page.tsx',
  'src/app/[locale]/elections/page.tsx',
  'scripts/seed-supabase.ts',
];
for (const f of labelFiles) {
  let src = '';
  try {
    src = readFileSync(resolve(__dirname, '..', f), 'utf8');
  } catch {
    warn('labels', `fichier introuvable : ${f}`);
    continue;
  }
  for (const cc of usedCodes) {
    if (!new RegExp(`\\b${cc}:\\s`).test(src)) err('labels', `${cc} absent de ${f}`);
  }
}

// -------------------------------------------------------------------- report
const errors = findings.filter((f) => f.level === 'ERROR');
const warns = findings.filter((f) => f.level === 'WARN');

const print = (list: typeof findings, title: string) => {
  if (!list.length) return;
  console.log(`\n${title} (${list.length})`);
  for (const f of list) console.log(`  [${f.where}] ${f.msg}`);
};

console.log(`Audit des données — ${parties.length} partis, ${elections.length} élections, ${legislation.length} textes, ${news.length} actualités`);
print(errors, 'ERREURS');
print(warns, 'AVERTISSEMENTS');
if (!findings.length) console.log('\nAucune anomalie détectée.');
else console.log(`\n${errors.length} erreur(s), ${warns.length} avertissement(s).`);

process.exit(errors.length ? 1 : 0);
