import { useFormatter, useLocale, useTranslations } from 'next-intl';
import { getLegislation } from '@/lib/queries';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { pageMetadata } from '@/lib/metadata';
import SourceCite from '@/components/SourceCite';
import { isoDay } from '@/lib/freshness';
import { countryName } from '@/lib/scope';

// A struck-down or repealed text must never read as being in force.
const STATUS_STYLES: Record<string, string> = {
  promulguee: 'badge-mesures',
  en_discussion: 'badge-programme',
  invalidee: 'badge-mesures-abrogee',
  abrogee: 'badge-mesures-abrogee',
  caduque: 'badge-mesures-abrogee',
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legislation' });
  return pageMetadata({ locale, path: '/legislation', title: t('title'), description: t('intro') });
}

export default async function LegislationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const sorted = await getLegislation(locale);
  return <LegislationPageInner sorted={sorted} />;
}

function LegislationPageInner({ sorted }: { sorted: Awaited<ReturnType<typeof getLegislation>> }) {
  const t = useTranslations('legislation');
  const format = useFormatter();
  const locale = useLocale();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">{t('title')}</h1>
        <p className="mt-2 max-w-2xl text-muted">{t('intro')}</p>
      </div>

      <ul className="space-y-4">
        {sorted.map((l) => (
          <li key={l.id} className="card space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-serif text-lg font-semibold">{l.title}</h2>
              <div className="flex gap-2">
                <span className="badge badge-programme">{countryName(l.countryOrLevel, locale)}</span>
                <span className={`badge ${STATUS_STYLES[l.status] ?? 'badge-programme'}`}>
                  {t(`status.${l.status}`)}
                </span>
              </div>
            </div>
            <p className="text-sm text-muted">
              <time dateTime={l.date}>{format.dateTime(isoDay(l.date), { dateStyle: 'long' })}</time>
            </p>
            <p className="text-sm">{l.description}</p>
            <SourceCite source={l.source} />
          </li>
        ))}
      </ul>
    </div>
  );
}
