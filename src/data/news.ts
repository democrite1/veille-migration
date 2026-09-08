import type { NewsItem } from './types';

/**
 * Journalistic coverage only — no directory listing, no membership/contact links,
 * per the site's editorial rule for this section.
 */
export const news: NewsItem[] = [
  {
    id: 'save-europe-act',
    title: "« Save Europe Act » : la Commission européenne bloque l'initiative citoyenne pour la remigration, l'affaire portée devant la CJUE",
    countries: ['EU'],
    date: '2026-08-22',
    summary:
      "Initiative citoyenne européenne (ICE) lancée le 31 mai 2026 par la commentatrice néerlandaise Eva Vlaardingerbroek et l'activiste identitaire autrichien Martin Sellner, réclamant un moratoire sur les nouvelles voies d'immigration non-occidentale, un durcissement des frontières extérieures, des procédures de retour accélérées et un cadre européen de remigration incitée financièrement. Rejetée à l'enregistrement par la Commission européenne le 22 juillet 2026 (discrimination raciale/ethnique alléguée), l'initiative a néanmoins continué de recueillir des signatures : plus de 700 000 en moins de trois mois, avec un objectif affiché d'un million.",
    legalStatus:
      "Les organisateurs ont porté l'affaire devant la Cour de justice de l'Union européenne (CJUE) pour contester le refus d'enregistrement de la Commission, tout en poursuivant la collecte de signatures vers l'objectif d'un million.",
    source: {
      name: 'Hungarian Conservative',
      url: 'https://www.hungarianconservative.com/articles/current/save-europe-act-hits-700000-signatures-as-organizers-prepare-eu-court-fight/',
      accessedOn: '2026-09-08',
    },
  },
  {
    id: 'return-to-the-land',
    title: 'Return to the Land : le réseau de communautés « réservées aux Blancs » contre-attaque en justice contre le DOJ et la presse',
    countries: ['US'],
    date: '2026-08-24',
    summary:
      "Fondée en septembre 2023 par Eric Orwoll dans l'Arkansas, Return to the Land (RTTL) est une organisation privée qui réserve l'installation sur ses terrains aux personnes vetted comme d'ascendance européenne et partageant ses vues séparatistes ; les personnes juives en sont explicitement exclues. Le mouvement a ouvert une deuxième implantation en 2025 et prévoit quatre nouveaux sites (Ozarks, Appalaches). Une conférence internationale rassemblant des figures de l'extrême droite de France, d'Allemagne, d'Afrique du Sud, de Suède, du Royaume-Uni et des États-Unis s'est tenue le 7 février 2026 pour coordonner ce type d'initiatives à l'échelle mondiale.",
    legalStatus:
      "Poursuivie en justice pour discrimination depuis mai 2026 après le refus de vendre un terrain à une candidate d'ascendance juive. Les cofondateurs (Eric Orwoll, Peter Csere) ont depuis contre-attaqué : plainte déposée le 24 août 2026 contre le ministère de la Justice américain, le régulateur des valeurs mobilières de l'Arkansas et le procureur général de l'État pour faire cesser les enquêtes à leur encontre ; plainte distincte en diffamation déposée le 28 juillet 2026 contre Sky News (Royaume-Uni) au sujet d'un documentaire de 2025, réclamant 1,2 million de dollars de dommages compensatoires et 1,5 million de dommages punitifs.",
    source: {
      name: 'Arkansas Advocate / Arkansas Times',
      url: 'https://arkansasadvocate.com/2026/08/25/group-behind-whites-only-community-sues-arkansas-federal-agencies/',
      accessedOn: '2026-09-08',
    },
  },
  {
    id: 'orania-croissance',
    title: 'Orania : la ville autonome afrikaner enregistre son taux de natalité le plus élevé depuis sa fondation',
    countries: ['ZA'],
    date: '2026-02-20',
    summary:
      "Fondée en 1991 après la fin de l'apartheid, Orania (Afrique du Sud, environ 3 000 habitants en 2026) est une ville privée autogérée réservée aux Afrikaners, dotée de ses propres institutions locales et d'une monnaie complémentaire, l'Ora. Le conseil municipal a confirmé le 20 février 2026 un record de 36 naissances sur l'année 2025, le chiffre le plus élevé depuis la création de la colonie, dans un contexte d'installation croissante de jeunes Afrikaners attirés par un nouveau collège et un sentiment d'appartenance communautaire.",
    legalStatus:
      "Statut légal inchangé : structure fondée sur la propriété privée actionnariale (via la société Vluytjeskraal Aandeleblok), permise par le droit sud-africain de la propriété privée ; ne fait pas l'objet de procédure judiciaire connue.",
    source: {
      name: 'France 24',
      url: 'https://www.france24.com/en/live-news/20260604-south-africa-s-closed-white-enclave-attracting-afrikaner-youth',
      accessedOn: '2026-08-18',
    },
  },
];
