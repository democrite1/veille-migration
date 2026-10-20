import { getFormatter, getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { pageMetadata } from '@/lib/metadata';
import { corrections } from '@/data/corrections';
import SourceCite from '@/components/SourceCite';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'corrections' });
  return pageMetadata({ locale, path: '/corrections', title: t('title'), description: t('intro') });
}

export default async function CorrectionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('corrections');
  const format = await getFormatter();
  const lang = locale === 'en' ? 'en' : 'fr';
  const sorted = [...corrections].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">{t('title')}</h1>
        <p className="mt-3 max-w-2xl text-muted">{t('intro')}</p>
      </div>

      <ol className="space-y-4">
        {sorted.map((c) => (
          <li key={c.id} className="card space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
              <span className="badge badge-programme">{t(`kind_${c.kind}`)}</span>
              <time dateTime={c.date} className="text-muted">
                {format.dateTime(new Date(`${c.date}T12:00:00Z`), { dateStyle: 'long' })}
              </time>
            </div>
            <p className="text-sm">{c.summary[lang]}</p>
            <p className="text-sm">
              <span className="text-muted">{t('page')} : </span>
              <Link href={c.page} className="text-accent underline">
                {c.page}
              </Link>
            </p>
            {c.source ? <SourceCite source={c.source} /> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
