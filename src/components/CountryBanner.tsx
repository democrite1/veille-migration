/**
 * Country label above a party fiche. Deliberately bare since the October
 * 2026 audit (decision 4): no editorial tagline, no decorative motifs, no
 * colour wash, not sticky. Lot 3's graphic charter will restyle it.
 */
export default function CountryBanner({ countryLabel }: { countryLabel: string }) {
  return (
    <p className="border-b border-line pb-3 text-sm font-medium uppercase tracking-widest text-muted">
      {countryLabel}
    </p>
  );
}
