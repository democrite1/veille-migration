import { useTranslations } from 'next-intl';
import { getLegislation } from '@/lib/queries';
import SourceCite from '@/components/SourceCite';

const LEVEL_LABELS: Record<string, string> = {
  FR: 'France',
  DE: 'Allemagne',
  GB: 'Royaume-Uni',
  EU: 'Union européenne',
  CH: 'Suisse',
  IT: 'Italie',
  NL: 'Pays-Bas',
  SE: 'Suède',
  HU: 'Hongrie',
  PL: 'Pologne',
  PT: 'Portugal',
  US: 'États-Unis',
  AR: 'Argentine',
};

export default async function LegislationPage() {
  const legislation = await getLegislation();
  const sorted = [...legislation].sort((a, b) => b.date.localeCompare(a.date));
  return <LegislationPageInner sorted={sorted} />;
}

function LegislationPageInner({ sorted }: { sorted: Awaited<ReturnType<typeof getLegislation>> }) {
  const t = useTranslations('legislation');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">{t('title')}</h1>
        <p className="mt-2 max-w-2xl text-muted">{t('intro')}</p>
      </div>

      <ul className="space-y-4">
        {sorted.map((l) => (
          <li key={l.id} className="card space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-serif text-lg font-semibold">{l.title}</h2>
              <div className="flex gap-2">
                <span className="badge badge-programme">{LEVEL_LABELS[l.countryOrLevel] ?? l.countryOrLevel}</span>
                <span className={`badge ${l.status === 'promulguee' ? 'badge-mesures' : 'badge-reduction'}`}>
                  {l.status === 'promulguee' ? 'Promulguée' : 'En discussion'}
                </span>
              </div>
            </div>
            <p className="text-sm text-muted">{l.date}</p>
            <p className="text-sm">{l.description}</p>
            <SourceCite source={l.source} />
          </li>
        ))}
      </ul>
    </div>
  );
}
