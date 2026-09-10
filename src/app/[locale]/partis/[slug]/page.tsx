import { notFound } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getPartyBySlug, getParties } from '@/lib/queries';
import type { Party } from '@/data/types';
import {
  ActionStatusBadge,
  ElectoralStatusBadge,
  IntentionBadge,
} from '@/components/ClassificationBadges';
import SourceCite from '@/components/SourceCite';
import CountryBanner from '@/components/CountryBanner';

const COUNTRY_LABELS: Record<string, string> = {
  FR: 'France',
  DE: 'Allemagne',
  GB: 'Royaume-Uni',
  IT: 'Italie',
  NL: 'Pays-Bas',
  US: 'États-Unis',
  SE: 'Suède',
  AT: 'Autriche',
  ES: 'Espagne',
  HU: 'Hongrie',
  FI: 'Finlande',
  BE: 'Belgique',
  CH: 'Suisse',
  PT: 'Portugal',
  PL: 'Pologne',
  NO: 'Norvège',
  CZ: 'République tchèque',
  GR: 'Grèce',
  RO: 'Roumanie',
  SK: 'Slovaquie',
  DK: 'Danemark',
  AU: 'Australie',
  CA: 'Canada',
  HR: 'Croatie',
  SI: 'Slovénie',
  BG: 'Bulgarie',
  NZ: 'Nouvelle-Zélande',
  AR: 'Argentine',
  EE: 'Estonie',
  LV: 'Lettonie',
  LU: 'Luxembourg',
  CY: 'Chypre',
  IE: 'Irlande',
  IS: 'Islande',
};

export async function generateStaticParams() {
  const parties = await getParties();
  return parties.map((p) => ({ slug: p.slug }));
}

export default async function PartyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const party = await getPartyBySlug(slug);
  if (!party) notFound();

  return <PartyPageInner party={party} />;
}

function PartyPageInner({ party }: { party: Party }) {
  const t = useTranslations('parties');

  return (
    <article className="space-y-8">
      <CountryBanner countryCode={party.countryCode} countryLabel={COUNTRY_LABELS[party.countryCode] ?? party.countryCode} />

      <header className="space-y-3">
        <h1 className="font-serif text-3xl font-semibold tracking-tight">{party.name}</h1>
        <p className="text-muted">{party.positioning}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          <ElectoralStatusBadge status={party.electoralStatus} />
          <IntentionBadge classification={party.intention} />
          <ActionStatusBadge classification={party.actionStatus} />
        </div>
      </header>

      <section className="card space-y-2">
        <h2 className="font-serif text-lg font-semibold">Statut électoral</h2>
        <p className="text-sm">{party.electoralStatusDetail}</p>
        <SourceCite source={party.electoralStatusSource} />
      </section>

      {party.electoralHistory && party.electoralHistory.length > 0 ? (
        <section className="card space-y-4">
          <h2 className="font-serif text-lg font-semibold">Historique électoral</h2>
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
                    <span className="text-muted">{r.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-black/[0.06]">
                      <div className="h-full rounded-full bg-accent/70" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="whitespace-nowrap text-xs text-muted">
                      {r.seats} / {r.totalSeats} sièges{r.votePercent != null ? ` — ${r.votePercent}%` : ''}
                    </span>
                  </div>
                  <SourceCite source={r.source} />
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}

      {party.europeanRepresentation || party.localImplantation ? (
        <section className="card space-y-4">
          <h2 className="font-serif text-lg font-semibold">Implantation</h2>
          {party.europeanRepresentation ? (
            <div className="space-y-1">
              <p className="text-sm">
                <span className="font-medium">Parlement européen : </span>
                {party.europeanRepresentation.meps} député
                {party.europeanRepresentation.meps > 1 ? 's' : ''} européen
                {party.europeanRepresentation.meps > 1 ? 's' : ''}
                {party.europeanRepresentation.totalCountryMeps
                  ? ` sur ${party.europeanRepresentation.totalCountryMeps} pour le pays`
                  : ''}
                {party.europeanRepresentation.europeanGroup
                  ? ` — groupe ${party.europeanRepresentation.europeanGroup}`
                  : ''}
              </p>
              <SourceCite source={party.europeanRepresentation.source} />
            </div>
          ) : null}
          {party.localImplantation ? (
            <div className="space-y-1">
              <p className="text-sm">
                <span className="font-medium">Maillage local : </span>
                {party.localImplantation.summary}
                {party.localImplantation.mayors != null
                  ? ` (${party.localImplantation.mayors} maire${party.localImplantation.mayors > 1 ? 's' : ''})`
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
                <p className="font-medium">{h.date} — {h.note}</p>
                {h.source ? <SourceCite source={h.source} /> : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="card space-y-3">
        <h2 className="font-serif text-lg font-semibold">Fiche</h2>
        <p className="text-sm">{party.description}</p>
        <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm">
          <dt className="text-muted">{t('officialSite')}</dt>
          <dd>
            <a href={party.officialWebsite} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              {party.officialWebsite}
            </a>
          </dd>
          <dt className="text-muted">{t('socialAccounts')}</dt>
          <dd className="flex flex-wrap gap-3">
            {party.socialAccounts.map((s) => (
              <a
                key={s.url}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {s.platform}
              </a>
            ))}
          </dd>
          {party.founded ? (
            <>
              <dt className="text-muted">Fondation</dt>
              <dd>{party.founded}</dd>
            </>
          ) : null}
        </dl>
        <SourceCite source={party.classificationSource} label={t('classificationSource')} />
      </section>
    </article>
  );
}
