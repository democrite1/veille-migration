import { useTranslations } from 'next-intl';
import type { Source } from '@/data/types';

/** Wayback Machine copy closest to the day the source was checked (scripts/archive-sources.ts keeps them). */
const archiveUrl = (url: string, date: string) => `https://web.archive.org/web/${date.replace(/-/g, '')}/${url}`;

export default function SourceCite({ source, label }: { source: Source; label?: string }) {
  const t = useTranslations('parties');

  return (
    <p className="source-cite">
      {label ?? t('source')} :{' '}
      <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
        {source.name}
      </a>
      {source.accessedOn ? (
        <>
          {` (${t('verifiedOn', { date: source.accessedOn })} · `}
          <a href={archiveUrl(source.url, source.accessedOn)} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
            {t('archive')}
          </a>
          )
        </>
      ) : (
        ` (${t('unverified', { reason: source.unverified ?? '' })})`
      )}
      {source.note ? <span className="block italic">{source.note}</span> : null}
    </p>
  );
}
