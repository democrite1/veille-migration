import { useFormatter, useTranslations } from 'next-intl';
import { getNews } from '@/lib/queries';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { pageMetadata } from '@/lib/metadata';
import SourceCite from '@/components/SourceCite';
import FlagIcon from '@/components/FlagIcon';
import { isoDay } from '@/lib/freshness';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'news' });
  return pageMetadata({ locale, path: '/actualites', title: t('title'), description: t('intro') });
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const sorted = await getNews(locale);
  return <NewsPageInner sorted={sorted} />;
}

function NewsPageInner({ sorted }: { sorted: Awaited<ReturnType<typeof getNews>> }) {
  const t = useTranslations('news');
  const tc = useTranslations('common');
  const format = useFormatter();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">{t('title')}</h1>
        <p className="mt-2 max-w-2xl text-muted">{t('intro')}</p>
      </div>

      <ul className="space-y-6">
        {sorted.map((n) => (
          <li key={n.id} className="card space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="flex flex-wrap items-center gap-2 font-serif text-lg font-semibold">
                {n.countries.length > 0 && (
                  <span className="inline-flex gap-1">
                    {n.countries.map((c) => (
                      <FlagIcon key={c} countryCode={c} className="h-4 w-auto rounded-[1px]" />
                    ))}
                  </span>
                )}
                {n.title}
              </h2>
              <time dateTime={n.date} className="text-sm text-muted">
                {format.dateTime(isoDay(n.date), { dateStyle: 'long' })}
              </time>
            </div>
            <p className="text-sm">{n.summary}</p>
            <p className="text-sm">
              <span className="font-medium">{tc('field', { label: t('legalStatus') })}</span>
              {n.legalStatus}
            </p>
            <SourceCite source={n.source} />
          </li>
        ))}
      </ul>
    </div>
  );
}
