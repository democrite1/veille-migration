'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const other = locale === 'fr' ? 'en' : 'fr';

  // The query (the directory's ?country= filter) is read at click time and
  // kept, which avoids useSearchParams and the Suspense boundary it requires
  // on statically rendered pages.
  const switchLocale = () => {
    const query = Object.fromEntries(new URLSearchParams(window.location.search));
    router.replace({ pathname, query }, { locale: other });
  };

  return (
    <button
      onClick={switchLocale}
      className="rounded border border-line px-2 py-1 text-xs uppercase tracking-wide hover:border-accent hover:text-accent"
      aria-label="Switch language"
    >
      {other}
    </button>
  );
}
