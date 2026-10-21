import { parties } from '@/data/parties';
import { elections } from '@/data/elections';
import { legislation } from '@/data/legislation';
import { news } from '@/data/news';

/** Lower-case codes of every flag the pages can show (public/flags/<code>.svg). */
export function usedFlagCodes(): string[] {
  const codes = new Set<string>([
    ...parties.map((p) => p.countryCode),
    ...elections.map((e) => e.countryCode),
    ...legislation.map((l) => l.countryOrLevel),
    ...news.flatMap((n) => n.countries),
  ]);
  return [...codes].map((c) => c.toLowerCase()).sort();
}
