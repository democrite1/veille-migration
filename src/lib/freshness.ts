/**
 * Dates readers see to judge how current the content is (audit D9): there is
 * no separate edit log, so "updated" means the most recent day a source was
 * checked or a correction was logged.
 */
import { parties } from '@/data/parties';
import { elections } from '@/data/elections';
import { legislation } from '@/data/legislation';
import { news } from '@/data/news';
import { corrections } from '@/data/corrections';

/** Latest `accessedOn` anywhere inside `value`, or null. ISO dates compare as strings. */
export function lastChecked(value: unknown): string | null {
  let max: string | null = null;
  const walk = (v: unknown) => {
    if (!v || typeof v !== 'object') return;
    if (Array.isArray(v)) return v.forEach(walk);
    for (const [k, x] of Object.entries(v)) {
      if (k === 'accessedOn' && typeof x === 'string') max = !max || x > max ? x : max;
      else walk(x);
    }
  };
  walk(value);
  return max;
}

/** Most recent source check or correction across the whole site. */
export const CONTENT_UPDATED: string = [
  lastChecked([parties, elections, legislation, news]),
  ...corrections.map((c) => c.date),
].reduce<string>((max, d) => (d && d > max ? d : max), '');

/** Noon UTC, so the formatted day is the same in every time zone. */
export const isoDay = (d: string) => new Date(`${d}T12:00:00Z`);
