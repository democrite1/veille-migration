# Observatoire des politiques migratoires

Site de veille des partis, lois, élections et initiatives liés aux politiques
migratoires dans les démocraties occidentales (UE27, Royaume-Uni, Norvège,
Suisse, Islande, États-Unis, Canada, Australie, Nouvelle-Zélande, Argentine).

**En ligne : https://veille-migration.vercel.app**

Voir [/methodologie](src/app/[locale]/methodologie/page.tsx) pour les règles
de classification et de sourçage.

## État actuel

- **Stack** : Next.js 15 (App Router) + React 19 + TypeScript + Tailwind +
  next-intl 4 (FR/EN), déployé sur Vercel, dépôt GitHub
  `democrite1/veille-migration`.
- **Données** : `src/data/*.ts` est la source de vérité éditoriale et la
  seule source lue par le site, au moment du build (`src/lib/queries.ts`).
  Aucune base de données sur le chemin des requêtes.
- **Supabase** (facultatif) : une copie des données peut y être poussée par
  `scripts/seed-supabase.ts`, mais le site ne la lit plus depuis octobre
  2026 : la mise en pause du projet gratuit pour inactivité avait mis
  l'annuaire des partis en erreur 500. Pour recréer la base, exécuter les
  migrations de `supabase/migrations` dans l'ordre ; la dernière
  (`0004_access_rules.sql`) active la sécurité au niveau des lignes sur
  toutes les tables (lecture publique, écriture réservée à la clé
  `service_role`) et crée la fonction `exec_sql` utilisée par
  `scripts/run-sql.ts`.
- **28 pays couverts** : France, Allemagne, Royaume-Uni, Italie, Pays-Bas,
  États-Unis, Suède, Autriche, Espagne, Hongrie, Finlande, Belgique, Suisse,
  Portugal, Pologne, Norvège, République tchèque, Grèce, Roumanie, Slovaquie,
  Danemark, Australie, Canada, Croatie, Slovénie, Bulgarie, Nouvelle-Zélande,
  Argentine.
- **29 partis documentés**, chacun avec ses deux axes de classification
  sourcés (intention, statut d'action) et historique daté quand pertinent
  (ex. invalidation par la Cour suprême américaine de l'Executive Order
  14160 sur le droit du sol ; retour au pouvoir du SDS en Slovénie ;
  défaite du Fidesz en Hongrie).
- **Suivi électoral** : 12 élections. **Suivi législatif** : 14 lois/décrets,
  par pays + niveau UE.
- **Sections** : annuaire des partis, suivi électoral, suivi législatif,
  actualités des initiatives, méthodologie.
## Démarrer en local

```bash
npm install
npm run dev
```

Le site tourne sur http://localhost:3000 et redirige vers `/fr`.

## Mettre à jour les données

Éditer `src/data/{parties,elections,legislation,news,corrections}.ts`
(chaque fait doit rester sourcé, avec sa date de consultation). Tout texte
français modifié ou ajouté doit recevoir sa traduction anglaise dans
`src/data/i18n/en/` : l'audit échoue sinon. Un nouveau pays demande aussi son drapeau :
`npm run flags` le copie dans `public/flags` depuis le paquet `flag-icons`
(licence MIT), les drapeaux étant servis par le site lui-même. Puis vérifier :

```bash
npm run audit
npm run lint
npm run build
```

Le push déclenche un redéploiement automatique sur Vercel, qui embarque les
données modifiées.

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
scripts ne touchent pas Supabase. Un script sort en erreur quand plus de
la moitié de ses requêtes échouent, ce qui fait échouer le workflow.
Chaque lundi, `.github/workflows/weekly-digest.yml` relance la collecte
et publie les pistes de la semaine dans un ticket GitHub (étiquette
`veille`, `scripts/fetch/digest.ts`), et `weekly-links.yml` contrôle les
liens de toutes les sources et les archive dans la Wayback Machine
(étiquette `liens` en cas de lien cassé).

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
