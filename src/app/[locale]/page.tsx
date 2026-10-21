import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { getParties } from '@/lib/queries';
import { setRequestLocale } from 'next-intl/server';
import { pageMetadata } from '@/lib/metadata';
import { countryName } from '@/lib/scope';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return pageMetadata({ locale, path: '' });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const parties = await getParties();
  return <HomePageInner countries={Array.from(new Set(parties.map((p) => p.countryCode)))} />;
}

function HomePageInner({ countries }: { countries: string[] }) {
  const t = useTranslations('home');
  const locale = useLocale();

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
          {[...countries]
            .sort((a, b) => countryName(a, locale).localeCompare(countryName(b, locale), locale))
            .map((c) => (
            <li key={c} className="badge badge-programme">
              {countryName(c, locale)}
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
