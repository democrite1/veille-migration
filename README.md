# Observatoire des politiques migratoires

Site de veille des partis, lois, élections et initiatives liés aux politiques
migratoires dans les démocraties occidentales (UE27, Royaume-Uni, Norvège,
Suisse, Islande, États-Unis, Canada, Australie, Nouvelle-Zélande, Argentine).

Voir [/methodologie](src/app/[locale]/methodologie/page.tsx) pour les règles
de classification et de sourçage.

## État actuel

- **Stack** : Next.js 14 (App Router) + TypeScript + Tailwind + next-intl (FR/EN)
- **Supabase** : connecté à un vrai projet (région Ireland). Schéma appliqué
  (`supabase/migrations/0001_init.sql`), RLS activée avec policies de lecture
  publique. Toutes les pages (`src/lib/queries.ts`) lisent en direct depuis
  Supabase via la clé anon — plus aucune page ne lit `src/data/*.ts`.
  `.env.local` contient les clés (non commité).
- **`src/data/*.ts`** : conservé uniquement comme source de vérité éditoriale
  pour le script de seed (`scripts/seed-supabase.ts`) — c'est là qu'on ajoute/
  corrige un fait sourcé, puis on relance le script pour pousser vers Supabase.
- **Pays couverts pour l'instant** : France, Allemagne, Royaume-Uni, Italie,
  Pays-Bas, États-Unis, Suède, Autriche, Espagne (9 pays).
- **Partis documentés (10)** : Rassemblement National, Reconquête (FR), AfD
  (DE), Reform UK (GB), Fratelli d'Italia (IT), PVV (NL), Parti républicain/
  administration Trump (US), Sverigedemokraterna (SE), FPÖ (AT), Vox (ES) —
  chacun avec ses deux axes de classification sourcés, y compris historique
  daté quand pertinent (ex. invalidation par la Cour suprême de l'Executive
  Order 14160 sur le droit du sol).
- **Sections** : annuaire des partis, suivi électoral, suivi législatif,
  actualités des initiatives, méthodologie.
- **⚠️ Piège plan gratuit Supabase** : un projet Supabase gratuit se met en
  pause après une semaine d'inactivité (aucune requête). Si le site renvoie
  des erreurs de connexion après une pause, ouvrir le dashboard Supabase et
  cliquer sur « Resume project » (gratuit, restaure les données telles
  qu'au moment de la pause). Une fois le cron GitHub Actions quotidien actif
  (voir plus bas), ce problème disparaît de lui-même.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site tourne sur http://localhost:3000 et redirige vers `/fr`.

## Mettre à jour les données

Éditer `src/data/{parties,elections,legislation,news}.ts` (chaque fait doit
rester sourcé), puis :

```bash
npx tsx scripts/seed-supabase.ts
```

Ce script upsert tout dans Supabase avec la clé `service_role` (bypass RLS).

## Prochaines étapes

1. **Implémenter les scripts de fetch** (`scripts/fetch/*.ts`) : actuellement
   des stubs. Chacun doit interroger sa source (Manifesto Project/ParlGov/
   PopuList, IPU Parline, EUR-Lex, GDELT/NewsAPI) et upserter dans Supabase,
   en s'inspirant de `scripts/seed-supabase.ts`.
2. **Étendre la couverture pays** : ajouter les pays restants du périmètre
   (UE27 restant, Norvège, Suisse, Islande, Canada, Australie, Nouvelle-
   Zélande, Argentine) en suivant le même modèle de fiche sourcée. Pour
   ajouter un pays : étendre `CountryCode` dans `src/data/types.ts`, ajouter
   les libellés FR dans les `COUNTRY_LABELS` de chaque page + `COUNTRY_NAMES`
   dans `scripts/seed-supabase.ts`, puis ajouter la/les fiches parti.
   Déjà fait : FR, DE, GB, IT, NL, US, SE, AT, ES.
3. **Déploiement** : le workflow `.github/workflows/daily-update.yml` est
   prêt (cron quotidien) ; il suppose un déploiement Vercel connecté au repo
   GitHub, avec les secrets `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY`
   configurés côté GitHub Actions.
4. **Monétisation** : dons (Stripe/Liberapay/Ko-fi) à intégrer en pied de
   page une fois le site en ligne ; éviter AdSense (cf. brief).
