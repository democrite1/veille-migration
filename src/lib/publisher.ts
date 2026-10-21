/**
 * Legal identity of the site (LCEN, loi n° 2004-575 du 21 juin 2004).
 *
 * The publisher chose on 2026-10-21 to be named, so that the site can take
 * donations (Liberapay). A non-professional publisher who is named publishes
 * their name, home address and phone number (art. 6, III, 1). Until those
 * three fields are filled in, the legal notice and the About page keep the
 * anonymous wording, which the law allows only if the host holds the
 * publisher's identity, and donations stay off: `npm run audit` fails if
 * `liberapay` is set while the publisher is not fully named.
 *
 * `email` is the publisher's contact address, chosen by them on 2026-10-21;
 * the audit also fails while it is null.
 */
export interface Publisher {
  name: string | null;
  address: string | null;
  phone: string | null;
  email: string | null;
  /** Liberapay page, e.g. https://liberapay.com/<account>. */
  liberapay: string | null;
}

export const PUBLISHER: Publisher = {
  name: null,
  address: null,
  phone: null,
  email: 'blancdemocrate@protonmail.com',
  liberapay: null,
};

export const isNamed = (p: Publisher = PUBLISHER) => Boolean(p.name && p.address && p.phone);

/** Donations are shown only with a named publisher and a Liberapay page. */
export const donationUrl = (p: Publisher = PUBLISHER) => (isNamed(p) && p.liberapay ? p.liberapay : null);

/** Source: Vercel privacy notice, contact block (opened 2026-10-20). Vercel publishes no phone number. */
export const HOST = {
  name: 'Vercel Inc.',
  address: '440 N Barranca Avenue #4133, Covina, CA 91723',
  source: 'https://vercel.com/legal/privacy-policy',
};
