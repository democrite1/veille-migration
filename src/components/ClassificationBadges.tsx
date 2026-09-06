import { useTranslations } from 'next-intl';
import type { Classification } from '@/data/types';

export function IntentionBadge({ classification }: { classification: Classification }) {
  const t = useTranslations('parties');
  const isRemigration = classification.tag === 'remigration';

  return (
    <span
      className={`badge ${isRemigration ? 'badge-remigration' : 'badge-reduction'}`}
      title={classification.note}
    >
      {isRemigration ? t('intentionRemigration') : t('intentionReduction')}
    </span>
  );
}

export function ActionStatusBadge({ classification }: { classification: Classification }) {
  const t = useTranslations('parties');

  const label =
    classification.tag === 'mesures_concretes'
      ? t('actionMeasures')
      : classification.tag === 'mesures_concretes_abrogee'
        ? t('actionMeasuresRepealed')
        : t('actionProgramme');

  const style =
    classification.tag === 'mesures_concretes'
      ? 'badge-mesures'
      : classification.tag === 'mesures_concretes_abrogee'
        ? 'badge-mesures-abrogee'
        : 'badge-programme';

  return (
    <span className={`badge ${style}`} title={classification.note}>
      {label}
    </span>
  );
}

export function ElectoralStatusBadge({ status }: { status: 'pouvoir' | 'opposition' | 'extra-parlementaire' }) {
  const t = useTranslations('parties');
  const label =
    status === 'pouvoir'
      ? t('electoralStatusPower')
      : status === 'opposition'
        ? t('electoralStatusOpposition')
        : t('electoralStatusExtra');

  return <span className="badge badge-programme">{label}</span>;
}
