'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = useTranslations('error');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="space-y-4">
      <h1 className="font-serif text-3xl font-semibold tracking-tight">{t('title')}</h1>
      <p className="text-muted">{t('text')}</p>
      <div className="flex flex-wrap gap-4">
        <button type="button" onClick={reset} className="text-accent underline">
          {t('retry')}
        </button>
        <Link href="/contact" className="text-accent underline">
          {t('report')}
        </Link>
      </div>
    </div>
  );
}
