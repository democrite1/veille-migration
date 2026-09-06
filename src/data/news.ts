import type { NewsItem } from './types';

/**
 * Journalistic coverage only — no directory listing, no membership/contact links,
 * per the site's editorial rule for this section.
 */
export const news: NewsItem[] = [
  {
    id: 'save-europe-act',
    title: "« Save Europe Act » : la Commission européenne bloque l'initiative citoyenne pour la remigration",
    countries: ['EU'],
    date: '2026-07-22',
    summary:
      "Initiative citoyenne européenne (ICE) lancée par la commentatrice néerlandaise Eva Vlaardingerbroek et soutenue par Viktor Orbán, réclamant un arrêt total de l'immigration non-européenne (légale et illégale) et un cadre de remigration à l'échelle de l'UE : suspension des visas étudiants et de regroupement familial pour les non-Européens, restriction de l'asile pour les migrants économiques et les ressortissants de pays sûrs. Plus de 580 000 signatures revendiquées par les organisateurs.",
    legalStatus:
      "Refusée à l'enregistrement par la Commission européenne le 22 juillet 2026, au motif que le moratoire proposé est discriminatoire sur des critères raciaux et ethniques et contraire aux valeurs de l'UE. Les organisateurs ont annoncé un recours juridique contre cette décision.",
    source: {
      name: 'Hungarian Conservative / rmx.news',
      url: 'https://www.hungarianconservative.com/articles/current/save-europe-act-remigration-eu-commission-blocked/',
      accessedOn: '2026-08-18',
    },
  },
  {
    id: 'return-to-the-land',
    title: 'Return to the Land : extension d\'un réseau de communautés « réservées aux Blancs » aux États-Unis',
    countries: ['US'],
    date: '2026-05-20',
    summary:
      "Fondée en septembre 2023 par Eric Orwoll dans l'Arkansas, Return to the Land (RTTL) est une organisation privée qui réserve l'installation sur ses terrains aux personnes vetted comme d'ascendance européenne et partageant ses vues séparatistes ; les personnes juives en sont explicitement exclues. Le mouvement a ouvert une deuxième implantation en 2025 et prévoit quatre nouveaux sites (Ozarks, Appalaches). Une conférence internationale rassemblant des figures de l'extrême droite de France, d'Allemagne, d'Afrique du Sud, de Suède, du Royaume-Uni et des États-Unis s'est tenue le 7 février 2026 pour coordonner ce type d'initiatives à l'échelle mondiale.",
    legalStatus:
      "Poursuivie en justice pour discrimination en 2026 après le refus de vendre un terrain à une candidate d'ascendance juive. Le procureur général de l'Arkansas a indiqué n'avoir identifié aucune infraction à la loi de l'État à ce stade.",
    source: {
      name: 'CNN / Arkansas Advocate',
      url: 'https://www.cnn.com/2026/05/20/us/arkansas-return-to-the-land-discrimination-lawsuit',
      accessedOn: '2026-08-18',
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
