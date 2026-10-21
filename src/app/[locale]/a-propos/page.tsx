import type { ReactNode } from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { pageMetadata } from '@/lib/metadata';
import { PUBLISHER, donationUrl, isNamed } from '@/lib/publisher';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return pageMetadata({ locale, path: '/a-propos', title: t('title'), description: t('intro') });
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="card space-y-2">
      <h2 className="font-serif text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

// Who publishes the site, how it is funded and what inclusion means (audit E12).
export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');
  const donate = donationUrl();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">{t('title')}</h1>
        <p className="mt-3 max-w-2xl text-muted">{t('intro')}</p>
      </div>

      <Section title={t('publisherTitle')}>
        <p className="text-sm">{isNamed() ? t('publisherNamed', { name: PUBLISHER.name! }) : t('publisherAnonymous')}</p>
        <Link href="/mentions-legales" className="text-sm hover:text-accent">
          {t('legalLink')}
        </Link>
      </Section>

      <Section title={t('fundingTitle')}>
        <p className="text-sm">{donate ? t('fundingDonations') : t('fundingNone')}</p>
        {donate ? (
          <a href={donate} className="inline-block text-sm font-medium text-accent hover:underline">
            {t('donate')}
          </a>
        ) : null}
      </Section>

      <Section title={t('independenceTitle')}>
        <p className="text-sm">{t('independence')}</p>
      </Section>

      <Section title={t('inclusionTitle')}>
        <p className="text-sm">{t('inclusion')}</p>
        <Link href="/methodologie" className="text-sm hover:text-accent">
          {t('methodologyLink')}
        </Link>
      </Section>

      <Section title={t('correctionsTitle')}>
        <p className="text-sm">{t('corrections')}</p>
        <p className="flex flex-wrap gap-x-6 text-sm">
          <Link href="/corrections" className="hover:text-accent">
            {t('correctionsLink')}
          </Link>
          <Link href="/contact" className="hover:text-accent">
            {t('contactLink')}
          </Link>
        </p>
      </Section>
    </div>
  );
}
