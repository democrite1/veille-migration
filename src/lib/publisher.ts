/**
 * Legal identity of the site (LCEN, loi n° 2004-575 du 21 juin 2004).
 *
 * The publisher edits the site on a non-professional basis and keeps their
 * identity private, as the law allows, on condition that the host (Vercel)
 * holds their identification details. Only the host and a contact address
 * are published. Keeping this status assumes the site is not monetised.
 *
 * `email` must be a dedicated address, not a personal one. `npm run audit`
 * fails while it is null, so the notice cannot be merged incomplete.
 */
export const PUBLISHER: { email: string | null } = {
  email: null,
};

/** Source: Vercel privacy notice, contact block (opened 2026-10-20). Vercel publishes no phone number. */
export const HOST = {
  name: 'Vercel Inc.',
  address: '440 N Barranca Avenue #4133, Covina, CA 91723',
  source: 'https://vercel.com/legal/privacy-policy',
};
