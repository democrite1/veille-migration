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
      <header className="space-y-3">
        <p className="text-sm text-muted">{COUNTRY_LABELS[party.countryCode] ?? party.countryCode}</p>
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
