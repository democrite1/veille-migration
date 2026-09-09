/**
 * Converts an ISO 3166-1 alpha-2 country code to its flag emoji by mapping
 * each letter to its Unicode regional indicator symbol (A -> 🇦, B -> 🇧, ...).
 * No data to maintain — works for any two-letter code.
 */
export function countryFlag(code: string): string {
  if (!/^[A-Za-z]{2}$/.test(code)) return '';
  const base = 0x1f1e6; // regional indicator symbol letter A
  const chars = code
    .toUpperCase()
    .split('')
    .map((c) => String.fromCodePoint(base + (c.charCodeAt(0) - 65)));
  return chars.join('');
}
