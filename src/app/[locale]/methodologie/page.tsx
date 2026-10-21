import { useFormatter, useLocale, useTranslations } from 'next-intl';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { ReactNode } from 'react';
import { Link } from '@/i18n/navigation';
import { pageMetadata } from '@/lib/metadata';
import { parties } from '@/data/parties';
import { SCOPE, countryName } from '@/lib/scope';
import { SOURCE_KINDS, classificationBasis, sourceBreakdown, type ClassificationBasis } from '@/lib/sourceStats';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'methodology' });
  return pageMetadata({ locale, path: '/methodologie', title: t('title'), description: t('intro') });
}

export default async function MethodologyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <MethodologyPageInner />;
}

const BASES: ClassificationBasis[] = ['popuList', 'parlGov', 'secondary', 'programme'];

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="card space-y-2">
      <h2 className="font-serif text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

// Everything below that counts something is computed from src/data at build
// time, so the page describes what the site actually does (audit E9).
function MethodologyPageInner() {
  const t = useTranslations('methodology');
  const format = useFormatter();
  const locale = useLocale();
  const strong = (chunks: ReactNode) => <strong>{chunks}</strong>;

  const covered = new Set<string>(parties.map((p) => p.countryCode));
  const missing = SCOPE.filter((c) => !covered.has(c))
    .map((c) => countryName(c, locale))
    .sort((a, b) => a.localeCompare(b, locale));

  const byBasis = new Map<ClassificationBasis, string[]>(BASES.map((b) => [b, []]));
  for (const p of parties) byBasis.get(classificationBasis(p))!.push(p.name);

  const sources = sourceBreakdown();

  return (
    <div className="prose prose-neutral max-w-none space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">{t('title')}</h1>
        <p className="mt-3 max-w-2xl text-muted">{t('intro')}</p>
      </div>

      <Section title={t('scope.title')}>
        <p className="text-sm">{t('scope.text')}</p>
        <p className="text-sm">
          {t('scope.covered', { count: SCOPE.filter((c) => covered.has(c)).length, missing: format.list(missing) })}
        </p>
      </Section>

      <Section title={t('directory.title')}>
        <p className="text-sm">{t('directory.criteria')}</p>
        <p className="text-sm">{t('directory.notJudgment')}</p>
        <p className="text-sm">{t('directory.basesIntro', { count: parties.length })}</p>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {BASES.filter((b) => byBasis.get(b)!.length).map((b) => {
            const names = byBasis.get(b)!;
            return <li key={b}>{t(`directory.basis.${b}`, { count: names.length, names: format.list(names) })}</li>;
          })}
        </ul>
      </Section>

      <Section title={t('grid.title')}>
        <p className="text-sm font-medium">{t('grid.axis1Title')}</p>
        <p className="text-sm">{t.rich('grid.axis1', { strong })}</p>
        <p className="text-sm font-medium">{t('grid.axis2Title')}</p>
        <p className="text-sm">{t.rich('grid.axis2', { strong })}</p>
        <p className="text-sm">{t('grid.registers')}</p>
      </Section>

      <Section title={t('sources.title')}>
        <p className="text-sm">{t('sources.preference')}</p>
        <p className="text-sm">{t('sources.breakdownIntro', { total: sources.total })}</p>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {SOURCE_KINDS.map((k) => (
            <li key={k}>
              {t('sources.kindLine', {
                label: t(`sources.kind.${k}`),
                count: sources.counts[k],
                percent: format.number(sources.counts[k] / sources.total, { style: 'percent' }),
              })}
            </li>
          ))}
        </ul>
        <p className="text-sm">{t('sources.dates', { count: sources.unverified })}</p>
      </Section>

      <Section title={t('corrections.title')}>
        <p className="text-sm">{t('corrections.text')}</p>
        <p className="text-sm">{t('corrections.report')}</p>
        <p className="flex flex-wrap gap-x-6 text-sm">
          <Link href="/corrections">{t('corrections.log')}</Link>
          <Link href="/contact">{t('corrections.contact')}</Link>
        </p>
      </Section>

      <Section title={t('charter.title')}>
        <p className="text-sm">{t('charter.intro')}</p>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          {(['r1', 'r2', 'r3', 'r4', 'r5'] as const).map((k) => (
            <li key={k}>{t(`charter.${k}`)}</li>
          ))}
        </ul>
        <p className="text-sm text-muted">{t('charter.check')}</p>
      </Section>

      <Section title={t('notDone.title')}>
        <p className="text-sm">{t('notDone.text')}</p>
      </Section>
    </div>
  );
}
