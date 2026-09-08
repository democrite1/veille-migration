import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { getParties } from '@/lib/queries';

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
};

export default async function HomePage() {
  const parties = await getParties();
  return <HomePageInner countries={Array.from(new Set(parties.map((p) => p.countryCode)))} />;
}

function HomePageInner({ countries }: { countries: string[] }) {
  const t = useTranslations('home');

  return (
    <div className="space-y-12">
      <section>
        <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
          {t('title')}
        </h1>
        <p className="mt-3 max-w-2xl text-muted">{t('subtitle')}</p>
      </section>

      <section className="card">
        <h2 className="font-serif text-lg font-semibold">{t('scopeTitle')}</h2>
        <p className="mt-2 text-sm text-muted">{t('scopeText')}</p>
      </section>

      <section>
        <h2 className="font-serif text-lg font-semibold">{t('countriesLive')}</h2>
        <ul className="mt-3 flex flex-wrap gap-3">
          {countries.map((c) => (
            <li key={c} className="badge badge-programme">
              {COUNTRY_LABELS[c] ?? c}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-2 text-sm">
        <Link href="/partis" className="font-medium hover:text-accent">
          {t('explorePartiesLink')}
        </Link>
        <Link href="/methodologie" className="font-medium hover:text-accent">
          {t('readMethodology')}
        </Link>
      </section>
    </div>
  );
}
