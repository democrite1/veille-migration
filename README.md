# Observatoire des politiques migratoires

Site de veille des partis, lois, élections et initiatives liés aux politiques
migratoires dans les démocraties occidentales (UE27, Royaume-Uni, Norvège,
Suisse, Islande, États-Unis, Canada, Australie, Nouvelle-Zélande, Argentine).

**En ligne : https://veille-migration.vercel.app**

Voir [/methodologie](src/app/[locale]/methodologie/page.tsx) pour les règles
de classification et de sourçage.

## État actuel

- **Stack** : Next.js 14 (App Router) + TypeScript + Tailwind + next-intl
  (FR/EN), déployé sur Vercel, dépôt GitHub `democrite1/veille-migration`.
- **Supabase** : connecté à un vrai projet (région Ireland). Schéma appliqué
  (`supabase/migrations/0001_init.sql`), RLS activée avec policies de lecture
  publique. Toutes les pages (`src/lib/queries.ts`) lisent en direct depuis
  Supabase via la clé anon.
- **`src/data/*.ts`** : source de vérité éditoriale. C'est le fichier qu'on
  édite pour ajouter/corriger un fait sourcé ; `scripts/seed-supabase.ts`
  pousse ensuite tout vers Supabase avec la clé `service_role`.
- **28 pays couverts** : France, Allemagne, Royaume-Uni, Italie, Pays-Bas,
  États-Unis, Suède, Autriche, Espagne, Hongrie, Finlande, Belgique, Suisse,
  Portugal, Pologne, Norvège, République tchèque, Grèce, Roumanie, Slovaquie,
  Danemark, Australie, Canada, Croatie, Slovénie, Bulgarie, Nouvelle-Zélande,
  Argentine.
- **29 partis documentés**, chacun avec ses deux axes de classification
  sourcés (intention, statut d'action) et historique daté quand pertinent
  (ex. invalidation par la Cour suprême américaine de l'Executive Order
  14160 sur le droit du sol ; retour au pouvoir du SDS en Slovénie ;
  défaite historique du Fidesz en Hongrie).
- **Suivi électoral** : 12 élections. **Suivi législatif** : 14 lois/décrets,
  par pays + niveau UE.
- **Sections** : annuaire des partis, suivi électoral, suivi législatif,
  actualités des initiatives, méthodologie.
- **⚠️ Piège plan gratuit Supabase** : un projet Supabase gratuit se met en
  pause après une semaine d'inactivité (aucune requête). Si le site renvoie
  des erreurs de connexion après une pause, ouvrir le dashboard Supabase et
  cliquer sur « Resume project » (gratuit, restaure les données telles
  qu'au moment de la pause). Le cron GitHub Actions quotidien (voir plus
  bas) touche Supabase indirectement via le déploiement, ce qui limite le
  risque une fois le pipeline pleinement rodé.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site tourne sur http://localhost:3000 et redirige vers `/fr`.

## Mettre à jour les données

Éditer `src/data/{parties,elections,legislation,news}.ts` (chaque fait doit
rester sourcé), vérifier que le build passe, puis :

```bash
npx tsx scripts/seed-supabase.ts
git add -A && git commit -m "..." && git push
```

Le push déclenche un redéploiement automatique sur Vercel (webhook GitHub
déjà connecté).

## Scripts de fetch (`scripts/fetch/*.ts`)

Implémentés et fonctionnels, mais avec un principe important : **ils ne
publient rien automatiquement sur le site**. Ils surfacent des *candidats*
à vérifier (articles de presse pertinents par pays/parti/thème), qu'un
humain (ou Claude, dans une session future) doit lire et transformer en
entrée sourcée dans `src/data/*.ts` — exactement le processus suivi pour
construire les 29 fiches actuelles.

Pourquoi pas d'automatisation complète ? Aucune source gratuite et sans clé
ne couvre de façon fiable ~28 pays :
- **Manifesto Project / ParlGov / PopuList** : pas d'API keyless pour de la
  reconciliation de classification en continu.
- **EUR-Lex** : pas de flux RSS par mot-clé accessible sans recherche
  sauvegardée authentifiée.
- **GDELT** (mentionné dans le brief initial) : testé et rejeté — sa limite
  de 1 requête/5s par IP est systématiquement déclenchée depuis des IP
  cloud partagées (dont les runners GitHub Actions).

À la place, les 4 scripts utilisent **Google News RSS** (gratuit, sans
clé, sans limite de débit rencontrée), avec des requêtes dans la langue
native de chaque pays/parti pour de meilleurs résultats :

- `fetch:parties` — recherche `"<nom du parti>" gouvernement/coalition/
  opposition` par parti, pour détecter un changement de statut électoral.
  C'est ce qui aurait permis de repérer plus tôt que le Fidesz avait perdu
  le pouvoir en Hongrie ou que le SDS l'avait repris en Slovénie.
- `fetch:elections` — recherche les résultats électoraux récents par pays.
- `fetch:legislation` — recherche les développements législatifs sur
  l'immigration par pays + niveau UE.
- `fetch:news` — recherche les développements sur les initiatives déjà
  suivies (Save Europe Act, Return to the Land, Orania) + termes génériques.

Chaque script écrit un résumé console + `scripts/fetch/output/*.json`
(non commité). Le workflow `.github/workflows/daily-update.yml` tourne
quotidiennement (cron 05:00 UTC) et upload ces JSON comme artefact
GitHub Actions consultable pendant 14 jours — aucun secret requis, ces
scripts ne touchent pas Supabase.

Tester en local :
```bash
npx tsx scripts/fetch/news.ts
npx tsx scripts/fetch/legislation.ts
npx tsx scripts/fetch/elections.ts
npx tsx scripts/fetch/parties.ts
```

## Prochaines étapes possibles

1. **Derniers petits pays du périmètre** : Irlande, Islande, Luxembourg,
   Malte, Chypre, Estonie, Lettonie, Lituanie — mouvements anti-immigration
   structurés plus marginaux ou inexistants à ce jour.
2. **Enrichir la section actualités des initiatives** (`src/data/news.ts`,
   actuellement 3 entrées) à partir des candidats surfacés par
   `fetch:news`.
3. **Monétisation** : dons (Stripe/Liberapay/Ko-fi) à intégrer en pied de
   page ; éviter AdSense (cf. brief).
4. **i18n complète** : les libellés de pays (`COUNTRY_LABELS`) et le
   contenu de la page méthodologie restent en français même en version EN.
