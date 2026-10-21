import type { ReactNode } from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { pageMetadata } from '@/lib/metadata';
import { HOST, donationUrl } from '@/lib/publisher';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });
  return pageMetadata({ locale, path: '/confidentialite', title: t('title'), description: t('intro') });
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="card space-y-2">
      <h2 className="font-serif text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

// What a visit processes (audit J3): host logs, the session language cookie,
// and nothing sent to third parties since the flags are served locally.
export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('privacy');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">{t('title')}</h1>
        <p className="mt-3 max-w-2xl text-muted">{t('intro')}</p>
      </div>

      <Section title={t('hostTitle')}>
        <p className="text-sm">{t('host', { host: HOST.name })}</p>
        <a href={HOST.source} target="_blank" rel="nofollow noopener noreferrer" className="text-sm text-accent hover:underline">
          {t('hostLink')}
        </a>
      </Section>

      <Section title={t('cookieTitle')}>
        <p className="text-sm">{t('cookie')}</p>
      </Section>

      <Section title={t('thirdTitle')}>
        <p className="text-sm">{t('third')}</p>
      </Section>

      <Section title={t('contactTitle')}>
        <p className="text-sm">{t('contact')}</p>
        {donationUrl() ? <p className="text-sm">{t('donations')}</p> : null}
        <Link href="/contact" className="text-sm hover:text-accent">
          {t('contactLink')}
        </Link>
      </Section>
    </div>
  );
}
