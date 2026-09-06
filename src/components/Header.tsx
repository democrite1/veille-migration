import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LocaleSwitcher from './LocaleSwitcher';

export default function Header() {
  const t = useTranslations('nav');

  return (
    <header className="border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="font-serif text-lg font-semibold tracking-tight">
          Observatoire Migration
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <Link href="/partis" className="hover:text-accent">
            {t('parties')}
          </Link>
          <Link href="/elections" className="hover:text-accent">
            {t('elections')}
          </Link>
          <Link href="/legislation" className="hover:text-accent">
            {t('legislation')}
          </Link>
          <Link href="/actualites" className="hover:text-accent">
            {t('news')}
          </Link>
          <Link href="/methodologie" className="hover:text-accent">
            {t('methodology')}
          </Link>
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  );
}
