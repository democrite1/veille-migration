import { useTranslations } from 'next-intl';
import type { Source } from '@/data/types';

export default function SourceCite({ source, label }: { source: Source; label?: string }) {
  const t = useTranslations('parties');

  return (
    <p className="source-cite">
      {label ?? t('source')} :{' '}
      <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">
        {source.name}
      </a>
      {source.accessedOn ? ` (vérifié le ${source.accessedOn})` : ''}
      {source.note ? <span className="block italic">{source.note}</span> : null}
    </p>
  );
}
