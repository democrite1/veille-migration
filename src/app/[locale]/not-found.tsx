import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="space-y-4">
      <h1 className="font-serif text-3xl font-semibold tracking-tight">{t('title')}</h1>
      <p className="text-muted">{t('text')}</p>
      <p>
        <Link href="/" className="text-accent underline">
          {t('home')}
        </Link>
      </p>
    </div>
  );
}
