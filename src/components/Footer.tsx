import { useFormatter, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { CONTENT_UPDATED, isoDay } from '@/lib/freshness';
import { donationUrl } from '@/lib/publisher';

export default function Footer() {
  const t = useTranslations('footer');
  const format = useFormatter();
  const donate = donationUrl();

  return (
    <footer className="mt-16 border-t border-line py-8">
      <div className="mx-auto max-w-5xl space-y-3 px-4 text-xs text-muted">
        <nav aria-label={t('legal')} className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
          <Link href="/a-propos" className="hover:text-accent">
            {t('about')}
          </Link>
          <Link href="/mentions-legales" className="hover:text-accent">
            {t('legal')}
          </Link>
          <Link href="/confidentialite" className="hover:text-accent">
            {t('privacy')}
          </Link>
          <Link href="/contact" className="hover:text-accent">
            {t('contact')}
          </Link>
          <Link href="/corrections" className="hover:text-accent">
            {t('corrections')}
          </Link>
          {donate ? (
            <a href={donate} className="hover:text-accent">
              {t('donate')}
            </a>
          ) : null}
        </nav>
        <p>{t('updated', { date: format.dateTime(isoDay(CONTENT_UPDATED), { dateStyle: 'long' }) })}</p>
        <p>{t('sources')}</p>
        <p>{t('notice')}</p>
      </div>
    </footer>
  );
}
