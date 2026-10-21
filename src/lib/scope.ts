/**
 * Countries in scope (decision 5 of the October 2026 audit): pluralist
 * democracies where parties or governments pursue policies to reduce
 * immigration. The criterion is political, not geographic, which is what
 * brings in Japan; a country meeting it can be added here.
 */
export const EU27 = [
  'AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GR', 'HR', 'HU',
  'IE', 'IT', 'LT', 'LU', 'LV', 'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK',
] as const;
export const SCOPE: readonly string[] = [...EU27, 'GB', 'NO', 'CH', 'IS', 'US', 'CA', 'AU', 'NZ', 'AR', 'JP'];

/** Country name in the reader's language, from the ISO code. */
export function countryName(code: string, locale: string): string {
  return new Intl.DisplayNames([locale], { type: 'region' }).of(code) ?? code;
}
