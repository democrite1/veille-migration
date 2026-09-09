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
  {
    id: 'afrikaner-refugee-resettlement',
    title: "Réfugiés afrikaners : Washington accueille des milliers de Blancs sud-africains, malgré le refus des organisations qui les représentent",
    countries: ['US', 'ZA'],
    date: '2026-05-10',
    summary:
      "Le décret présidentiel « Addressing Egregious Actions of the Republic of South Africa », signé le 7 février 2025 par Donald Trump, suspend l'aide américaine à l'Afrique du Sud et instaure une voie de réfugié prioritaire pour les Afrikaners qui s'estiment victimes de « discrimination raciale sanctionnée par l'État », notamment via la loi sud-africaine sur l'expropriation foncière. Les deux principales organisations afrikaners, AfriForum et Solidarity, ont publiquement refusé l'offre (« nous ne voulons pas partir ailleurs », a déclaré le président d'AfriForum Kallie Kriel), mais le programme s'est poursuivi sans elles : 59 premiers réfugiés arrivés le 12 mai 2025, puis plus de 4 500 admis entre octobre 2025 et avril 2026 — l'écrasante majorité des 6 069 réfugiés admis aux États-Unis sur cette période, dans un contexte de plafond national des admissions humanitaires ramené à son niveau le plus bas de l'histoire (7 500 places pour l'année budgétaire 2026). Environ 8 200 Afrikaners avaient manifesté un intérêt indépendant pour le programme.",
    legalStatus:
      "Programme fédéral américain en vigueur, mis en œuvre par le Département d'État et le DHS ; contesté politiquement par le gouvernement sud-africain (« ironique de réserver un statut de réfugié à un groupe qui reste parmi les plus favorisés économiquement du pays », a réagi le ministère sud-africain des Affaires étrangères) mais non soumis à un contentieux judiciaire connu à ce jour. Des données de suivi début 2026 indiquent que 63% des Afrikaners admis depuis octobre 2025 restaient sans emploi six mois après leur arrivée.",
    source: {
      name: 'PassBlue — Cracks Are Showing in Trump\'s Special "Refugee" Program for Afrikaners',
      url: 'https://passblue.com/2026/05/10/cracks-are-showing-in-trumps-special-refugee-program-for-afrikaners/',
      accessedOn: '2026-09-09',
    },
  },
  {
    id: 'compact-magazine-allemagne',
    title: "Allemagne : la justice fédérale annule l'interdiction du magazine d'extrême droite Compact, malgré ses liens documentés avec le concept de « remigration »",
    countries: ['DE'],
    date: '2025-06-24',
    summary:
      "Le magazine Compact, dirigé par Jürgen Elsässer et régulièrement décrit par les autorités allemandes comme un « porte-voix central de l'extrémisme de droite », avait été interdit avec effet immédiat le 16 juillet 2024 par la ministre fédérale de l'Intérieur Nancy Faeser, en vertu de la loi sur les associations. La Cour administrative fédérale (Bundesverwaltungsgericht) a suspendu l'interdiction dès août 2024 le temps de la procédure, avant de l'annuler définitivement le 24 juin 2025. Les juges ont reconnu que les contenus de Compact — dont la description des personnes migrantes comme citoyens de seconde zone — portaient atteinte à la dignité humaine et aux principes démocratiques, et que la ligne éditoriale du magazine rejoignait étroitement le concept de « remigration » porté par l'activiste identitaire autrichien Martin Sellner ; ils ont toutefois jugé l'interdiction totale disproportionnée au regard de la liberté d'expression et de la presse garantie par l'article 5 de la Loi fondamentale, y compris pour des publications jugées hostiles à l'ordre libéral.",
    legalStatus:
      "Interdiction annulée définitivement par la Cour administrative fédérale le 24 juin 2025 ; le magazine Compact peut de nouveau être publié et diffusé légalement en Allemagne.",
    source: {
      name: 'JURIST — Germany federal court lifts ban on right-wing Compact magazine',
      url: 'https://www.jurist.org/news/2025/06/germany-federal-court-lifts-ban-on-right-wing-compact-magazine/',
      accessedOn: '2026-09-09',
    },
  },
  {
    id: 'uk-hotels-asile-protestations',
    title: "Royaume-Uni : la vague de manifestations contre les hôtels accueillant des demandeurs d'asile s'étend à tout le pays",
    countries: ['GB'],
    date: '2026-08-28',
    summary:
      "Déclenchée par une série de rassemblements à Epping (Essex) à partir du 13 juillet 2025 — après qu'un demandeur d'asile hébergé dans un hôtel local a été inculpé d'agression sexuelle sur une adolescente de 14 ans —, la contestation contre l'hébergement de demandeurs d'asile en hôtel s'est étendue à l'ensemble du Royaume-Uni. L'organisation antiraciste HOPE not hate a recensé au moins 251 rassemblements dans 77 localités entre juin et décembre 2025, en Angleterre, en Écosse, au pays de Galles et en Irlande du Nord, avec des points chauds à Londres, Epping, Norwich, Altrincham et sur la côte sud. Ces manifestations, parfois marquées par des débordements et des arrestations, ont été relayées ou organisées par divers acteurs — dont des sections locales de Reform UK, Britain First, UKIP, Homeland Party et Patriotic Alternative — sans qu'aucune organisation unique ne pilote le mouvement dans son ensemble.",
    legalStatus:
      "Plusieurs autorités locales ont engagé des procédures judiciaires pour faire cesser l'hébergement de demandeurs d'asile dans des hôtels contestés (dont Epping) ; une décision de justice favorable en ce sens a été obtenue puis annulée en appel par le gouvernement britannique fin août 2025. Situation juridique évolutive, hôtel par hôtel.",
    source: {
      name: 'HOPE not hate — State of Hate 2026: A Year of Anti-Migrant Protests',
      url: 'https://hopenothate.org.uk/state-of-hate-2026-anti-migrant-protests/',
      accessedOn: '2026-09-09',
    },
  },
  {
    id: 'afd-saxe-anhalt-record',
    title: "Allemagne : l'AfD remporte largement l'élection régionale de Saxe-Anhalt et prend une avance inédite dans les sondages nationaux",
    countries: ['DE'],
    date: '2026-09-06',
    summary:
      "L'AfD arrive en tête de l'élection régionale de Saxe-Anhalt du 6 septembre 2026 avec 44,4% des voix, contre 18,3% pour les conservateurs du chancelier Friedrich Merz (CDU/CSU) — un parti d'extrême droite au bord du pouvoir régional pour la première fois depuis la Seconde Guerre mondiale. Ce résultat confirme une tendance nationale : plusieurs instituts de sondage (dont INSA) placent désormais l'AfD en tête des intentions de vote au niveau fédéral avec environ 28% des voix, un écart inédit avec la CDU/CSU (20-21%), les instituts anticipant que le parti pourrait arriver en tête des prochaines élections fédérales prévues en 2029.",
    legalStatus:
      "Résultat électoral légal et définitif ; la formation d'un gouvernement régional en Saxe-Anhalt reste bloquée par le refus de tous les autres partis de gouverner avec l'AfD (« Brandmauer »), malgré son score.",
    source: {
      name: 'CNBC — Germany\'s far-right AfD seeks landmark state victory',
      url: 'https://www.cnbc.com/2026/09/06/germanys-far-right-afd-seeks-landmark-state-victory.html',
      accessedOn: '2026-09-09',
    },
  },
  {
    id: 'suisse-referendum-10-millions',
    title: "Suisse : le peuple rejette de justesse l'initiative de l'UDC plafonnant la population à 10 millions d'habitants",
    countries: ['CH'],
    date: '2026-06-14',
    summary:
      "Portée par l'UDC (SVP) sous le nom « Stop à la surpopulation ! (Initiative pour la durabilité) », l'initiative populaire proposait d'inscrire dans la Constitution suisse l'obligation de ne pas dépasser 10 millions de résidents permanents avant 2050 — la population du pays étant passée de 7,3 millions en 2002 (date de l'accord de libre circulation avec l'UE) à plus de 9 millions en 2025. Son adoption aurait potentiellement contraint le gouvernement à dénoncer cet accord. Soumise au vote le 14 juin 2026 dans le cadre du système de démocratie directe suisse, l'initiative a été rejetée avec 55% de « non » contre 45% de « oui », le clivage villes/campagnes et linguistique étant très marqué : le « oui » l'a emporté dans les zones rurales alémaniques (jusqu'à 65,9% dans le canton d'Appenzell Rhodes-Intérieures), le « non » dominant dans les villes romandes.",
    legalStatus:
      "Initiative rejetée par le peuple suisse le 14 juin 2026 ; sans suite constitutionnelle. L'accord de libre circulation UE-Suisse reste inchangé.",
    source: {
      name: 'SWI swissinfo.ch — Swiss voters reject proposal to cap population at ten million',
      url: 'https://www.swissinfo.ch/eng/votes/swiss-voters-reject-proposal-to-cap-population-at-ten-million/91548146',
      accessedOn: '2026-09-09',
    },
  },
  {
    id: 'remigration-summit-portugal',
    title: '« Remigration Summit » : 500 militants identitaires venus d\'Europe et d\'Amérique du Nord se réunissent au Portugal',
    countries: ['PT'],
    date: '2026-05-30',
    summary:
      "Le 30 mai 2026, l'activiste identitaire autrichien Martin Sellner a organisé à Figueira da Foz (Portugal) la deuxième édition du « Remigration Summit », rassemblant environ 500 à 600 participants venus de toute l'Europe ainsi que des États-Unis et du Canada — militants de partis d'extrême droite, figures du mouvement identitaire et sympathisants du concept de « remigration ». La présence remarquée de Gregory Bovino, ancien haut responsable de la patrouille frontalière américaine (US Border Patrol) sous l'administration Trump, a suscité une controverse particulière aux États-Unis, où plusieurs médias ont interrogé la nature de ses liens avec le mouvement identitaire européen.",
    legalStatus:
      "Événement privé tenu légalement au Portugal ; aucune procédure judiciaire connue à son encontre à ce jour, contrairement à la réunion de Potsdam de novembre 2023 qui avait suscité une intense controverse politique en Allemagne.",
    source: {
      name: 'NPR — What was Gregory Bovino doing at a \'remigration\' conference in Portugal?',
      url: 'https://www.npr.org/2026/06/05/nx-s1-5844714/gregory-bovino-attended-remigration-conference-2026',
      accessedOn: '2026-09-09',
    },
  },
];
