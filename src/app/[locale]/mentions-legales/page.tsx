import { getTranslations, setRequestLocale } from 'next-intl/server';
import { pageMetadata } from '@/lib/metadata';
import { HOST, PUBLISHER, isNamed } from '@/lib/publisher';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  return pageMetadata({ locale, path: '/mentions-legales', title: t('title'), description: t('lawText') });
}

export default async function LegalNoticePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('legal');

  return (
    <div className="space-y-8">
      <h1 className="font-serif text-3xl font-semibold tracking-tight">{t('title')}</h1>

      <section className="card space-y-2">
        <h2 className="font-serif text-lg font-semibold">{t('publisherHeading')}</h2>
        <p className="text-sm">
          {isNamed()
            ? t('publisherNamed', { name: PUBLISHER.name!, address: PUBLISHER.address!, phone: PUBLISHER.phone! })
            : t('publisherText')}
        </p>
      </section>

      <section className="card space-y-2">
        <h2 className="font-serif text-lg font-semibold">{t('contactHeading')}</h2>
        <p className="text-sm">
          {PUBLISHER.email ? (
            <a href={`mailto:${PUBLISHER.email}`} className="text-accent underline">
              {PUBLISHER.email}
            </a>
          ) : (
            <span className="font-medium text-accent">{t('missing')}</span>
          )}
        </p>
      </section>

      <section className="card space-y-2">
        <h2 className="font-serif text-lg font-semibold">{t('hostHeading')}</h2>
        <p className="text-sm">{t('hostText', { name: HOST.name, address: HOST.address })}</p>
      </section>

      <p className="text-sm text-muted">{t('lawText')}</p>
    </div>
  );
}
