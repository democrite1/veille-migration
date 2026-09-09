import { useTranslations } from 'next-intl';
import { getNews } from '@/lib/queries';
import SourceCite from '@/components/SourceCite';
import FlagIcon from '@/components/FlagIcon';

export default async function NewsPage() {
  const news = await getNews();
  const sorted = [...news].sort((a, b) => b.date.localeCompare(a.date));
  return <NewsPageInner sorted={sorted} />;
}

function NewsPageInner({ sorted }: { sorted: Awaited<ReturnType<typeof getNews>> }) {
  const t = useTranslations('news');

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
              <span className="text-sm text-muted">{n.date}</span>
            </div>
            <p className="text-sm">{n.summary}</p>
            <p className="text-sm">
              <span className="font-medium">Statut légal : </span>
              {n.legalStatus}
            </p>
            <SourceCite source={n.source} />
          </li>
        ))}
      </ul>
    </div>
  );
}
