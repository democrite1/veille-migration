import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { getParties } from '@/lib/queries';
import {
  ActionStatusBadge,
  ElectoralStatusBadge,
  IntentionBadge,
} from '@/components/ClassificationBadges';
import FlagIcon from '@/components/FlagIcon';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { pageMetadata } from '@/lib/metadata';
import { countryName } from '@/lib/scope';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return pageMetadata({ locale, path: '/partis', title: t('partiesTitle'), description: t('partiesDescription') });
}

export default async function PartiesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ country?: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const { country } = await searchParams;
  const allParties = await getParties(locale);
  const filtered = country ? allParties.filter((p) => p.countryCode === country) : allParties;
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
  const locale = useLocale();
  const countries = Array.from(new Set(allParties.map((p) => p.countryCode))).sort((a, b) =>
    countryName(a, locale).localeCompare(countryName(b, locale), locale),
  );

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
            <FlagIcon countryCode={c} className="h-3.5 w-auto rounded-[1px]" /> {countryName(c, locale)}
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
                <p className="flex items-center gap-1.5 text-sm text-muted">
                  <FlagIcon countryCode={party.countryCode} className="h-3.5 w-auto rounded-[1px]" />
                  {countryName(party.countryCode, locale)} — {party.positioning}
                </p>
              </div>
              <ElectoralStatusBadge status={party.electoralStatus} />
            </div>
            <div className="flex flex-wrap gap-2">
              <IntentionBadge classification={party.intention} />
              <ActionStatusBadge classification={party.actionStatus} />
            </div>
            <Link href={`/partis/${party.slug}`} className="text-sm text-accent hover:underline">
              {t('viewProfile')}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
