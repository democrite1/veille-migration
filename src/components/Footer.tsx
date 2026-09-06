import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="mt-16 border-t border-line py-8">
      <div className="mx-auto max-w-5xl px-4 text-xs text-muted">
        <p>{t('sources')}</p>
        <p className="mt-2">
          Contenu à but journalistique et documentaire. Aucune donnée personnelle
          n'est collectée à des fins de ciblage. Toute classification est sourcée
          et vérifiable — voir la méthodologie.
        </p>
      </div>
    </footer>
  );
}
