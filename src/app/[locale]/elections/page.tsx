import { useFormatter, useLocale, useTranslations } from 'next-intl';
import { getElections } from '@/lib/queries';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { pageMetadata } from '@/lib/metadata';
import SourceCite from '@/components/SourceCite';
import FlagIcon from '@/components/FlagIcon';
import { isoDay } from '@/lib/freshness';
import { countryName } from '@/lib/scope';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'elections' });
  return pageMetadata({ locale, path: '/elections', title: t('title'), description: t('intro') });
}

export default async function ElectionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const sorted = await getElections(locale);
  return <ElectionsPageInner sorted={sorted} />;
}

function ElectionsPageInner({ sorted }: { sorted: Awaited<ReturnType<typeof getElections>> }) {
  const t = useTranslations('elections');
  const tc = useTranslations('common');
  const format = useFormatter();
  const locale = useLocale();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">{t('title')}</h1>
        <p className="mt-2 max-w-2xl text-muted">{t('intro')}</p>
      </div>

      <ul className="space-y-4">
        {sorted.map((e) => (
          <li key={e.id} className="card space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="flex items-center gap-2 font-serif text-lg font-semibold">
                <FlagIcon countryCode={e.countryCode} className="h-4 w-auto rounded-[1px]" />
                {e.scopeName}
              </h2>
              <div className="flex gap-2">
                <span className="badge badge-programme">{countryName(e.countryCode, locale)}</span>
                <span className="badge badge-programme">{t(`level.${e.level}`)}</span>
                <span className={`badge ${e.status === 'resultat_connu' ? 'badge-mesures' : 'badge-reduction'}`}>
                  {e.status === 'resultat_connu' ? t('statusKnown') : t('statusUpcoming')}
                </span>
              </div>
            </div>
            <p className="text-sm text-muted">
              <time dateTime={e.date}>{format.dateTime(isoDay(e.date), { dateStyle: 'long' })}</time>
              {' — '}
              {t('mandate', { duration: e.mandateDuration })}
              {e.seatsContested && e.totalSeats
                ? ` — ${t('seatsContested', { count: e.seatsContested, total: e.totalSeats })}`
                : e.totalSeats
                  ? ` — ${t('assembly', { total: e.totalSeats })}`
                  : ''}
            </p>
            <p className="text-sm"><span className="font-medium">{tc('field', { label: t('powers') })}</span>{e.powers}</p>
            {e.result ? (
              <p className="text-sm"><span className="font-medium">{tc('field', { label: t('result') })}</span>{e.result}</p>
            ) : null}
            <SourceCite source={e.source} />
          </li>
        ))}
      </ul>
    </div>
  );
}
