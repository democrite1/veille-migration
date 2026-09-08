import { useTranslations } from 'next-intl';
import { getElections } from '@/lib/queries';
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
  SI: 'Slovénie',
  BG: 'Bulgarie',
  NZ: 'Nouvelle-Zélande',
  AR: 'Argentine',
};

const LEVEL_LABELS: Record<string, string> = {
  national: 'National',
  regional: 'Régional',
  local: 'Local',
  partial: 'Partielle',
};

export default async function ElectionsPage() {
  const elections = await getElections();
  const sorted = [...elections].sort((a, b) => b.date.localeCompare(a.date));
  return <ElectionsPageInner sorted={sorted} />;
}

function ElectionsPageInner({ sorted }: { sorted: Awaited<ReturnType<typeof getElections>> }) {
  const t = useTranslations('elections');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">{t('title')}</h1>
        <p className="mt-2 max-w-2xl text-muted">{t('intro')}</p>
      </div>

      <ul className="space-y-4">
        {sorted.map((e) => (
          <li key={e.id} className="card space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-serif text-lg font-semibold">{e.scopeName}</h2>
              <div className="flex gap-2">
                <span className="badge badge-programme">{COUNTRY_LABELS[e.countryCode] ?? e.countryCode}</span>
                <span className="badge badge-programme">{LEVEL_LABELS[e.level]}</span>
                <span className={`badge ${e.status === 'resultat_connu' ? 'badge-mesures' : 'badge-reduction'}`}>
                  {e.status === 'resultat_connu' ? 'Résultat connu' : 'À venir'}
                </span>
              </div>
            </div>
            <p className="text-sm text-muted">{e.date} — mandat : {e.mandateDuration}</p>
            <p className="text-sm"><span className="font-medium">Pouvoirs : </span>{e.powers}</p>
            {e.result ? (
              <p className="text-sm"><span className="font-medium">Résultat : </span>{e.result}</p>
            ) : null}
            <SourceCite source={e.source} />
          </li>
        ))}
      </ul>
    </div>
  );
}
