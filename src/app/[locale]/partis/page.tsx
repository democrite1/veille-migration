import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { getParties } from '@/lib/queries';
import {
  ActionStatusBadge,
  ElectoralStatusBadge,
  IntentionBadge,
} from '@/components/ClassificationBadges';

const COUNTRY_LABELS: Record<string, string> = {
  FR: 'France',
  DE: 'Allemagne',
  GB: 'Royaume-Uni',
  IT: 'Italie',
  NL: 'Pays-Bas',
  US: 'États-Unis',
  SE: 'Suède',
  AT: 'Autriche',
  ES: 'Espagne',
  HU: 'Hongrie',
  FI: 'Finlande',
  BE: 'Belgique',
  CH: 'Suisse',
  PT: 'Portugal',
  PL: 'Pologne',
  NO: 'Norvège',
  CZ: 'République tchèque',
  GR: 'Grèce',
  RO: 'Roumanie',
  SK: 'Slovaquie',
  DK: 'Danemark',
  AU: 'Australie',
  CA: 'Canada',
  HR: 'Croatie',
  SI: 'Slovénie',
  BG: 'Bulgarie',
  NZ: 'Nouvelle-Zélande',
  AR: 'Argentine',
};

export default async function PartiesPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const { country } = await searchParams;
  const [allParties, filtered] = await Promise.all([getParties(), getParties(country)]);
  return <PartiesPageInner country={country} allParties={allParties} filtered={filtered} />;
}

function PartiesPageInner({
  country,
  allParties,
  filtered,
}: {
  country?: string;
  allParties: Awaited<ReturnType<typeof getParties>>;
  filtered: Awaited<ReturnType<typeof getParties>>;
}) {
  const t = useTranslations('parties');
  const countries = Array.from(new Set(allParties.map((p) => p.countryCode)));

  return (
    <div className="space-y-8">
      <h1 className="font-serif text-3xl font-semibold tracking-tight">{t('title')}</h1>

      <nav className="flex flex-wrap gap-2 text-sm">
        <Link
          href="/partis"
          className={`badge ${!country ? 'badge-mesures' : 'badge-programme'}`}
        >
          {t('filterAll')}
        </Link>
        {countries.map((c) => (
          <Link
            key={c}
            href={{ pathname: '/partis', query: { country: c } }}
            className={`badge ${country === c ? 'badge-mesures' : 'badge-programme'}`}
          >
            {COUNTRY_LABELS[c] ?? c}
          </Link>
        ))}
      </nav>

      <ul className="grid gap-4 sm:grid-cols-2">
        {filtered.map((party) => (
          <li key={party.slug} className="card flex flex-col gap-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <Link href={`/partis/${party.slug}`} className="font-serif text-lg font-semibold hover:text-accent">
                  {party.name}
                </Link>
                <p className="text-xs text-muted">
                  {COUNTRY_LABELS[party.countryCode] ?? party.countryCode} — {party.positioning}
                </p>
              </div>
              <ElectoralStatusBadge status={party.electoralStatus} />
            </div>
            <div className="flex flex-wrap gap-2">
              <IntentionBadge classification={party.intention} />
              <ActionStatusBadge classification={party.actionStatus} />
            </div>
            <Link href={`/partis/${party.slug}`} className="text-sm text-accent hover:underline">
              Voir la fiche →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
