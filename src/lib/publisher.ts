/**
 * Legal identity of the site (LCEN, loi n° 2004-575 du 21 juin 2004).
 *
 * Decision 3 of the October 2026 audit: named publisher. `director` and
 * `email` must both be filled in before merging to main — `npm run audit`
 * fails while either is null, so an incomplete legal notice cannot ship.
 */
export const PUBLISHER: { director: string | null; email: string | null } = {
  director: null,
  email: null,
};

/** Source: Vercel privacy notice, contact block (opened 2026-10-20). Vercel publishes no phone number. */
export const HOST = {
  name: 'Vercel Inc.',
  address: '440 N Barranca Avenue #4133, Covina, CA 91723',
  source: 'https://vercel.com/legal/privacy-policy',
};

export const DATABASE_PROVIDER = 'Supabase Inc.';
