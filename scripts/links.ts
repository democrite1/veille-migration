/**
 * Every outbound URL in src/data, collected once so the link check and the
 * Wayback archiving walk the same list. URLs quoted inside notes count too:
 * several facts rest on a second source cited in the note.
 */
import { parties } from '../src/data/parties';
import { elections } from '../src/data/elections';
import { legislation } from '../src/data/legislation';
import { news } from '../src/data/news';
import { corrections } from '../src/data/corrections';

export interface LinkRef {
  url: string;
  /** Where the URL appears, e.g. "parti afd / intention". */
  where: string[];
  /** Cited by a source already marked `unverified`: readers are told, so a dead link is known. */
  flagged: boolean;
}

// URLs quoted in prose: balanced parentheses stay inside (Wikipedia titles),
// a closing parenthesis or trailing punctuation that ends the sentence does not.
const URL_IN_TEXT = /https?:\/\/(?:\([^\s()]*\)|[^\s()»"',])+(?:\([^\s()]*\)|[^\s()»"',.;:])/g;
/** Fields whose whole value is a URL. */
const URL_FIELDS = new Set(['url', 'officialWebsite']);

export function collectLinks(): LinkRef[] {
  const found = new Map<string, Set<string>>();
  // A URL counts as flagged only if every citation of it is an unverified source.
  const unverifiedUse = new Set<string>();
  const checkedUse = new Set<string>();
  const add = (url: string, where: string, unverified: boolean) => {
    if (!found.has(url)) found.set(url, new Set());
    found.get(url)!.add(where);
    (unverified ? unverifiedUse : checkedUse).add(url);
  };
  const walk = (where: string, value: unknown, key = '', unverified = false) => {
    if (typeof value === 'string') {
      if (URL_FIELDS.has(key)) add(value, where, unverified);
      else for (const m of value.match(URL_IN_TEXT) ?? []) add(m, where, false);
      return;
    }
    if (!value || typeof value !== 'object') return;
    if (Array.isArray(value)) return value.forEach((v) => walk(where, v, key));
    const obj = value as Record<string, unknown>;
    const flaggedSource = typeof obj.unverified === 'string';
    for (const [k, v] of Object.entries(obj)) {
      walk(k === 'source' || URL_FIELDS.has(k) ? where : `${where} / ${k}`, v, k, flaggedSource && k === 'url');
    }
  };
  for (const p of parties) walk(`parti ${p.slug}`, p);
  for (const e of elections) walk(`élection ${e.id}`, e);
  for (const l of legislation) walk(`texte ${l.id}`, l);
  for (const n of news) walk(`actualité ${n.id}`, n);
  for (const c of corrections) walk(`correction ${c.id}`, c);
  return [...found]
    .map(([url, where]) => ({ url, where: [...where], flagged: unverifiedUse.has(url) && !checkedUse.has(url) }))
    .sort((a, b) => a.url.localeCompare(b.url));
}
