import type { Party, Source } from '@/data/types';
import { parties } from '@/data/parties';
import { elections } from '@/data/elections';
import { legislation } from '@/data/legislation';
import { news } from '@/data/news';

/**
 * What the methodology page says about sources is computed from the data
 * (audit E9): the page used to announce IPU Parline and EUR-Lex while most
 * citations were Wikipedia and the press.
 */
export type SourceKind = 'official' | 'dataset' | 'wikipedia' | 'press' | 'party';
export const SOURCE_KINDS: SourceKind[] = ['official', 'dataset', 'wikipedia', 'press', 'party'];

// Parliaments, governments, electoral administrations, EU and international bodies.
const OFFICIAL =
  /(^|\.)(gov|europa\.eu|ipu\.org|ft\.dk|sejm\.gov\.pl|kiesraad\.nl|hellenicparliament\.gr|tweedekamer\.nl|eerstekamer\.nl|assemblee-nationale\.fr|senat\.fr|bundestag\.de|bundeswahlleiterin\.de|wahlen\.rlp\.de|baden-wuerttemberg\.de|admin\.ch|vaalit\.fi|migri\.fi|normattiva\.it|governo\.it|camera\.it|senato\.it|regione\.veneto\.it|migrationsverket\.se|regeringen\.se|val\.se|parliament\.uk|gov\.uk|congreso\.es|slov-lex\.sk|nrsr\.sk|ssb\.no|lovdata\.no|stortinget\.no|go\.jp|gv\.at|rijksoverheid\.nl|riigikogu\.ee|parliament\.bg|gouv\.fr|sabor\.hr|cdep\.ro|govt\.nz|aph\.gov\.au|althingi\.is|parlament\.hu|psp\.cz)$/;
// Academic datasets and publications.
const DATASET = /(^|\.)(popu-list\.github\.io|parlgov\.fly\.dev|manifesto-project\.wzb\.eu|link\.springer\.com|uni-tuebingen\.de|swissvotes\.ch)$/;
// Party documents hosted elsewhere (the GOP platform in the American Presidency Project archive).
const PARTY_DOCS = /(^|\.)(presidency\.ucsb\.edu|nationbuilder\.com|x\.com|instagram\.com|youtube\.com)$/;

const host = (url: string) => new URL(url).hostname.replace(/^www\./, '');
const partyHosts = new Set(parties.flatMap((p) => (p.officialWebsite ? [host(p.officialWebsite)] : [])));

export function sourceKind(url: string): SourceKind {
  const h = host(url);
  if (/(^|\.)wikipedia\.org$/.test(h)) return 'wikipedia';
  if (OFFICIAL.test(h)) return 'official';
  if (DATASET.test(h)) return 'dataset';
  if (PARTY_DOCS.test(h) || partyHosts.has(h)) return 'party';
  return 'press';
}

const isSource = (v: unknown): v is Source =>
  !!v && typeof v === 'object' && 'url' in v && 'name' in v && ('accessedOn' in v || 'unverified' in v);

function collect(v: unknown, out: Source[]) {
  if (isSource(v)) out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => collect(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => collect(x, out));
}

/** Every source cited on the site (party fiches, elections, laws, news). */
export function allSources(): Source[] {
  const out: Source[] = [];
  collect([parties, elections, legislation, news], out);
  return out;
}

export function sourceBreakdown() {
  const sources = allSources();
  const counts = Object.fromEntries(SOURCE_KINDS.map((k) => [k, 0])) as Record<SourceKind, number>;
  for (const s of sources) counts[sourceKind(s.url)]++;
  return { total: sources.length, counts, unverified: sources.filter((s) => s.unverified !== undefined).length };
}

/** What a party's classification rests on, read from its classification source. */
export type ClassificationBasis = 'popuList' | 'parlGov' | 'secondary' | 'programme';
export function classificationBasis(p: Party): ClassificationBasis {
  const kind = sourceKind(p.classificationSource.url);
  if (/popu-list/.test(p.classificationSource.url)) return 'popuList';
  if (/parlgov/.test(p.classificationSource.url)) return 'parlGov';
  if (kind === 'party') return 'programme';
  return 'secondary';
}
