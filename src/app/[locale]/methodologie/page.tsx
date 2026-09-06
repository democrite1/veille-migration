import { useTranslations } from 'next-intl';

export default function MethodologyPage() {
  const t = useTranslations('methodology');

  return (
    <div className="prose prose-neutral max-w-none space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">{t('title')}</h1>
        <p className="mt-3 max-w-2xl text-muted">{t('intro')}</p>
      </div>

      <section className="card space-y-2">
        <h2 className="font-serif text-lg font-semibold">Périmètre géographique</h2>
        <p className="text-sm">
          UE27, Royaume-Uni, Norvège, Suisse, Islande, États-Unis, Canada, Australie,
          Nouvelle-Zélande, Argentine. La sélection des pays repose sur un critère
          politique — démocraties occidentales où des mouvements anti-immigration sont
          politiquement actifs — et non sur un critère ethnique.
        </p>
      </section>

      <section className="card space-y-2">
        <h2 className="font-serif text-lg font-semibold">Annuaire des partis</h2>
        <p className="text-sm">
          Un parti est inclus si (a) son programme officiel se revendique explicitement
          de la réduction ou de l'arrêt de l'immigration / de la remigration, ou (b) une
          source tierce académique reconnue (Manifesto Project, ParlGov, PopuList, CHES)
          le classe dans la famille populiste radicale de droite / nationaliste avec
          positionnement anti-immigration. Chaque fiche cite sa source de classification.
        </p>
      </section>

      <section className="card space-y-2">
        <h2 className="font-serif text-lg font-semibold">Grille de classification</h2>
        <p className="text-sm font-medium">Axe 1 — Intention</p>
        <p className="text-sm">
          <strong>Stop / réduction immigration</strong> vs <strong>Remigration</strong>.
          Le tag « remigration » est appliqué si le terme est utilisé explicitement par
          le parti ou ses dirigeants, OU si la politique décrite est équivalente sur le
          fond (retour « volontaire » massif incité financièrement, objectifs chiffrés de
          retours). Toujours sourcé — y compris lorsque le parti conteste ou rejette
          explicitement le terme.
        </p>
        <p className="text-sm font-medium">Axe 2 — Statut d'action</p>
        <p className="text-sm">
          <strong>Programme</strong> (engagement électoral, rien de déposé formellement)
          vs <strong>Mesures concrètes</strong> (dès qu'un texte formel existe :
          proposition de loi déposée même non votée, décret, mesure administrative, loi
          votée). Le tag « mesures concrètes » reste actif tant que la mesure est en
          vigueur, indépendamment du parti au pouvoir ou non. Si la mesure est abrogée ou
          son application arrêtée → « mesures concrètes (historique, abrogée le [date]) »,
          avec un historique daté conservé sur la fiche.
        </p>
      </section>

      <section className="card space-y-2">
        <h2 className="font-serif text-lg font-semibold">Sources de données</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm">
          <li>Classification des partis : Manifesto Project, ParlGov, PopuList, Wikipedia (source de repli)</li>
          <li>Calendrier électoral : commissions électorales nationales, IPU Parline, Wikipedia</li>
          <li>Législation : EUR-Lex, sites des parlements nationaux</li>
          <li>Actualité des initiatives : presse généraliste et spécialisée, flux RSS</li>
        </ul>
      </section>

      <section className="card space-y-2">
        <h2 className="font-serif text-lg font-semibold">Ce que ce site ne fait pas</h2>
        <p className="text-sm">
          Pas de mise en avant séparée des structures jeunesse des partis. Pour les
          initiatives non partisanes (section actualités), traitement journalistique
          uniquement : nature, développements, statut légal, couverture presse — jamais
          de fiche-annuaire ni de liens de contact ou d'adhésion.
        </p>
      </section>
    </div>
  );
}
