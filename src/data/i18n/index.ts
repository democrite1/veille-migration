import { PARTIES_EN } from './en/parties';
import { ELECTIONS_EN } from './en/elections';
import { LEGISLATION_EN } from './en/legislation';
import { NEWS_EN } from './en/news';
import { SOURCE_NAMES_EN } from './en/sourceNames';

/**
 * English version of the content (decision 2 of the October 2026 audit:
 * translate everything). The French text in src/data stays the single
 * source of truth; each file in ./en pairs a French string with its English
 * translation. Lookup is by the exact French text, so a French edit leaves
 * the old pair unused and the new text untranslated: `npm run audit` then
 * fails until the translation is updated, and the two versions cannot drift
 * silently. Until then the page shows the French text.
 */
export type Pair = readonly [fr: string, en: string];

const EN = new Map<string, string>([...PARTIES_EN, ...ELECTIONS_EN, ...LEGISLATION_EN, ...NEWS_EN]);

/** Keys whose strings are identifiers, codes, URLs, dates or proper names, never translated. */
export const UNTRANSLATED = new Set([
  'id', 'slug', 'url', 'officialWebsite', 'date', 'accessedOn', 'countryCode', 'countryOrLevel',
  'countries', 'tag', 'status', 'level', 'electoralStatus', 'platform', 'leader', 'name',
]);

// A source's title is mostly the article's own title, in its own language;
// only the parts the site wrote in French are translated, when a pair exists.
const SOURCE_NAMES = new Map<string, string>(SOURCE_NAMES_EN);

function translate(v: unknown, key?: string): unknown {
  if (typeof v === 'string') return key && UNTRANSLATED.has(key) ? v : (EN.get(v) ?? v);
  if (Array.isArray(v)) return v.map((x) => translate(x, key));
  if (v && typeof v === 'object') {
    const isSource = 'url' in v;
    return Object.fromEntries(
      Object.entries(v).map(([k, x]) => [
        k,
        isSource && k === 'name' && typeof x === 'string' ? (SOURCE_NAMES.get(x) ?? x) : translate(x, k),
      ]),
    );
  }
  return v;
}

/** The value with its French text replaced by the English translation when `locale` is 'en'. */
export function localize<T>(value: T, locale: string): T {
  return locale === 'en' ? (translate(value) as T) : value;
}

/** Every translatable French string inside `value` (used by the audit). */
export function translatable(value: unknown, key?: string, out: string[] = []): string[] {
  if (typeof value === 'string') {
    if (!(key && UNTRANSLATED.has(key)) && value.trim()) out.push(value);
  } else if (Array.isArray(value)) value.forEach((x) => translatable(x, key, out));
  else if (value && typeof value === 'object') for (const [k, x] of Object.entries(value)) translatable(x, k, out);
  return out;
}

export const hasEnglish = (fr: string) => EN.has(fr);
export const englishPairs = (): Pair[] => [...PARTIES_EN, ...ELECTIONS_EN, ...LEGISLATION_EN, ...NEWS_EN];
export const sourceNamePairs = (): Pair[] => SOURCE_NAMES_EN;
