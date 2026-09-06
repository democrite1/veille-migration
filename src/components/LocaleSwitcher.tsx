'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const other = locale === 'fr' ? 'en' : 'fr';

  return (
    <button
      onClick={() => router.replace(pathname, { locale: other })}
      className="rounded border border-line px-2 py-1 text-xs uppercase tracking-wide hover:border-accent hover:text-accent"
      aria-label="Switch language"
    >
      {other}
    </button>
  );
}
