import { notFound } from 'next/navigation';
import { useFormatter, useLocale, useTranslations } from 'next-intl';
import { getPartyBySlug, getParties } from '@/lib/queries';
import type { Party } from '@/data/types';
import {
  ActionStatusBadge,
  ElectoralStatusBadge,
  IntentionBadge,
} from '@/components/ClassificationBadges';
import SourceCite from '@/components/SourceCite';
import CountryBanner from '@/components/CountryBanner';
import { setRequestLocale } from 'next-intl/server';
import { pageMetadata } from '@/lib/metadata';
import { isoDay, lastChecked } from '@/lib/freshness';
import { countryName } from '@/lib/scope';

export async function generateStaticParams() {
  const parties = await getParties();
  return parties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const party = await getPartyBySlug(slug, locale);
  if (!party) return {};
  return pageMetadata({
    locale,
    path: `/partis/${slug}`,
    title: party.name,
    description: `${countryName(party.countryCode, locale)} — ${party.positioning}`,
  });
}

export default async function PartyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const party = await getPartyBySlug(slug, locale);
  if (!party) notFound();

  return <PartyPageInner party={party} />;
}

function PartyPageInner({ party }: { party: Party }) {
  const t = useTranslations('parties');
  const tc = useTranslations('common');
  const format = useFormatter();
  const locale = useLocale();
  const checked = lastChecked(party);
  const day = (d: string) => (
    <time dateTime={d}>{format.dateTime(isoDay(d), { dateStyle: 'long' })}</time>
  );
  const eu = party.europeanRepresentation;

  return (
    <article className="space-y-8">
      <CountryBanner countryLabel={countryName(party.countryCode, locale)} />

      <header className="space-y-3">
        <h1 className="font-serif text-3xl font-semibold tracking-tight">{party.name}</h1>
        <p className="text-muted">{party.positioning}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          <ElectoralStatusBadge status={party.electoralStatus} />
          <IntentionBadge classification={party.intention} />
          <ActionStatusBadge classification={party.actionStatus} />
        </div>
        {checked ? (
          <p className="text-xs text-muted">{t('lastChecked', { date: format.dateTime(isoDay(checked), { dateStyle: 'long' }) })}</p>
        ) : null}
      </header>

      <section className="card space-y-2">
        <h2 className="font-serif text-lg font-semibold">{t('sectionElectoral')}</h2>
        <p className="text-sm">{party.electoralStatusDetail}</p>
        <SourceCite source={party.electoralStatusSource} />
      </section>

      {party.electoralHistory && party.electoralHistory.length > 0 ? (
        <section className="card space-y-4">
          <h2 className="font-serif text-lg font-semibold">{t('sectionHistory')}</h2>
          <ul className="space-y-3">
            {party.electoralHistory.map((r, i) => {
              const pct = Math.min(100, Math.round((r.seats / r.totalSeats) * 100));
              return (
                <li key={i} className="space-y-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 text-sm">
                    <span className="font-medium">
                      {r.label}
                      {r.chamber ? ` (${r.chamber})` : ''}
                    </span>
                    <span className="text-muted">{day(r.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-black/[0.06]">
                      <div className="h-full rounded-full bg-accent/70" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="whitespace-nowrap text-xs text-muted">
                      {t('seats', { seats: r.seats, total: r.totalSeats })}
                      {r.votePercent != null ? ` — ${format.number(r.votePercent / 100, { style: 'percent', maximumFractionDigits: 2 })}` : ''}
                    </span>
                  </div>
                  <SourceCite source={r.source} />
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {eu || party.localImplantation ? (
        <section className="card space-y-4">
          <h2 className="font-serif text-lg font-semibold">{t('sectionPresence')}</h2>
          {eu ? (
            <div className="space-y-1">
              <p className="text-sm">
                <span className="font-medium">{tc('field', { label: t('europeanParliament') })}</span>
                {eu.totalCountryMeps
                  ? t('mepsOfTotal', { count: eu.meps, total: eu.totalCountryMeps })
                  : t('meps', { count: eu.meps })}
                {eu.europeanGroup ? ` — ${t('europeanGroup', { group: eu.europeanGroup })}` : ''}
              </p>
              <SourceCite source={eu.source} />
            </div>
          ) : null}
          {party.localImplantation ? (
            <div className="space-y-1">
              <p className="text-sm">
                <span className="font-medium">{tc('field', { label: t('localPresence') })}</span>
                {party.localImplantation.summary}
                {party.localImplantation.mayors != null
                  ? ` (${t('mayors', { count: party.localImplantation.mayors })})`
                  : ''}
              </p>
              <SourceCite source={party.localImplantation.source} />
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="card space-y-2">
        <h2 className="font-serif text-lg font-semibold">{t('intention')}</h2>
        <SourceCite source={party.intention.source} />
      </section>

      <section className="card space-y-2">
        <h2 className="font-serif text-lg font-semibold">{t('actionStatus')}</h2>
        <SourceCite source={party.actionStatus.source} />
      </section>

      {party.actionStatusHistory && party.actionStatusHistory.length > 0 ? (
        <section className="card space-y-3">
          <h2 className="font-serif text-lg font-semibold">{t('history')}</h2>
          <ul className="space-y-2 text-sm">
            {party.actionStatusHistory.map((h, i) => (
              <li key={i} className="border-l-2 border-line pl-3">
                <p className="font-medium">{day(h.date)} — {h.note}</p>
                {h.source ? <SourceCite source={h.source} /> : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="card space-y-3">
        <h2 className="font-serif text-lg font-semibold">{t('sectionProfile')}</h2>
        <p className="text-sm">{party.description}</p>
        <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
          <dt className="text-muted">{t('officialSite')}</dt>
          <dd>
            <a href={party.officialWebsite} target="_blank" rel="nofollow noopener noreferrer" className="text-accent hover:underline">
              {party.officialWebsite}
            </a>
          </dd>
          {party.socialAccounts.length ? (
            <>
              <dt className="text-muted">{t('socialAccounts')}</dt>
              <dd className="flex flex-wrap gap-x-4 gap-y-1">
                {party.socialAccounts.map((s) => (
                  <span key={s.url}>
                    <a href={s.url} target="_blank" rel="nofollow noopener noreferrer" className="text-accent hover:underline">
                      {s.platform}
                    </a>
                    {s.leader ? <span className="text-muted"> · {t('leaderAccount', { name: s.leader })}</span> : null}
                  </span>
                ))}
              </dd>
            </>
          ) : null}
          {party.founded ? (
            <>
              <dt className="text-muted">{t('founded')}</dt>
              <dd>{party.founded}</dd>
            </>
          ) : null}
        </dl>
        <SourceCite source={party.classificationSource} label={t('classificationSource')} />
      </section>
    </article>
  );
}
