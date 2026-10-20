import type { ReactNode } from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { pageMetadata } from '@/lib/metadata';
import { PUBLISHER } from '@/lib/publisher';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return pageMetadata({ locale, path: '/contact', title: t('title'), description: t('intro') });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('contact');
  const tLegal = await getTranslations('legal');
  const missing = tLegal('missing');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">{t('title')}</h1>
        <p className="mt-3 max-w-2xl text-muted">{t('intro')}</p>
      </div>

      <section className="card space-y-2">
        <h2 className="font-serif text-lg font-semibold">{t('reportHeading')}</h2>
        <p className="text-sm">
          {t.rich('reportText', {
            email: PUBLISHER.email ?? missing,
            mail: (chunks: ReactNode) =>
              PUBLISHER.email ? (
                <a href={`mailto:${PUBLISHER.email}`} className="text-accent underline">
                  {chunks}
                </a>
              ) : (
                <span className="font-medium text-accent">{chunks}</span>
              ),
          })}
        </p>
      </section>

      <section className="card space-y-2">
        <h2 className="font-serif text-lg font-semibold">{t('replyHeading')}</h2>
        <p className="text-sm">{t('replyText')}</p>
      </section>

      <Link href="/corrections" className="text-sm font-medium hover:text-accent">
        {t('journalLink')}
      </Link>
    </div>
  );
}
