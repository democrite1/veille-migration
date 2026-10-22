import type { Party } from './types';

/**
 * Seed data. Each fact carries its own source per the site's editorial rule:
 * no unsourced classification. Verified against sources on 2026-08-18.
 * This file is the local stand-in for the `parties` + `classifications` Supabase
 * tables until the daily fetch pipeline (see /scripts/fetch) is connected to a
 * live project.
 */
export const parties: Party[] = [
  {
    slug: 'rassemblement-national',
    name: 'Rassemblement National (RN)',
    countryCode: 'FR',
    positioning: 'National-populiste, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Premier groupe d'opposition à l'Assemblée nationale (17e législature) : 126 députés sur 577 (le plus grand nombre de députés de son histoire), en hausse de 37 sièges par rapport à 2022.",
    electoralStatusSource: {
      name: 'Touteleurope.eu — résultats définitifs 2024',
      url: 'https://www.touteleurope.eu/vie-politique-des-etats-membres/resultats-des-elections-legislatives-2024-le-rassemblement-national-en-echec-l-assemblee-nationale-partagee-en-trois-blocs/',
      accessedOn: '2026-09-09',
    },
    officialWebsite: 'https://rassemblementnational.fr',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/RNational_off' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Front National / Rassemblement National » (France)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: "LCP — Législatives 2024 : le programme du Rassemblement national en matière d'immigration à l'épreuve de la Constitution",
        url: 'https://lcp.fr/actualites/legislatives-2024-le-programme-du-rassemblement-national-en-matiere-d-immigration-a-l',
        accessedOn: '2026-10-20',
        note: "Programme des législatives de 2024 présenté par Jordan Bardella (article du 28 juin 2024) : suppression du droit du sol, durcissement du regroupement familial, « priorité nationale », allocations familiales réservées aux Français, rétablissement du délit de séjour irrégulier, remplacement de l'aide médicale d'État par une aide d'urgence vitale. Le compte rendu ne fait état d'aucune mesure de remigration. En janvier 2024, Marine Le Pen s'est déclarée en total désaccord avec le projet d'expulsions massives discuté à Potsdam sous ce nom (AFP, via The Times of Israel, 30 janvier 2024 : https://www.timesofisrael.com/germanys-afd-sets-up-talks-with-frances-le-pen-to-clarify-immigrant-expulsion-spat/).",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Assemblée nationale — données ouvertes, dossiers législatifs de la XVIIe législature",
        url: 'https://data.assemblee-nationale.fr/static/openData/repository/17/loi/dossiers_legislatifs/Dossiers_Legislatifs.json.zip',
        accessedOn: '2026-10-20',
        note: "Groupe d'opposition. Aucune des propositions de loi déposées par des députés RN depuis juillet 2024 n'a été promulguée, dont deux visant à rétablir le délit de séjour irrégulier (19 décembre 2024 et 16 septembre 2025) et une visant à abroger le titre de séjour pour soins (26 mai 2026). Le 30 octobre 2025, l'Assemblée a adopté une résolution non contraignante du député RN Guillaume Bigot appelant à dénoncer les accords franco-algériens de 1968 (https://www.assemblee-nationale.fr/dyn/17/dossiers/denoncer_accords_franco_algeriens_27_decembre_1968).",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2024',
        chamber: 'Assemblée nationale',
        date: '2024-07-07',
        seats: 126,
        totalSeats: 577,
        votePercent: 37.1,
        source: {
          name: 'Touteleurope.eu',
          url: 'https://www.touteleurope.eu/vie-politique-des-etats-membres/resultats-des-elections-legislatives-2024-le-rassemblement-national-en-echec-l-assemblee-nationale-partagee-en-trois-blocs/',
          accessedOn: '2026-09-09',
        },
      },
      {
        label: 'Élections législatives 2022',
        chamber: 'Assemblée nationale',
        date: '2022-06-19',
        seats: 89,
        totalSeats: 577,
        source: {
          name: 'Touteleurope.eu',
          url: 'https://www.touteleurope.eu/vie-politique-des-etats-membres/resultats-des-elections-legislatives-2024-le-rassemblement-national-en-echec-l-assemblee-nationale-partagee-en-trois-blocs/',
          accessedOn: '2026-09-09',
        },
      },
    ],
    europeanRepresentation: {
      meps: 30,
      totalCountryMeps: 81,
      europeanGroup: "Patriotes pour l'Europe (PfE)",
      source: {
        name: "Parlement européen — résultats des élections européennes 2024, France",
        url: "https://results.elections.europa.eu/en/national-results/france/2024-2029/",
        accessedOn: '2026-10-21',

      },
    },
    localImplantation: {
      summary:
        "62 communes dirigées après les municipales de mars 2026 (contre 17 en 2020), dont Nice avec son allié Éric Ciotti — plus forte implantation locale de l'histoire du parti, bien que concentrée dans ses zones de force traditionnelles et encore rare dans les grandes villes.",
      mayors: 62,
      source: {
        name: 'Vert / Sciences Po Cevipof',
        url: 'https://vert.eco/chaleurs-actuelles/resultats-des-elections-municipales-2026-le-rassemblement-national-espere-lemporter-a-nice-toulon-marseille-et-carcassonne/',
        accessedOn: '2026-09-09',
      },
    },
    founded: 1972,
    description:
      "Fondé en 1972 sous le nom de Front National, renommé Rassemblement National en 2018. Dirigé par Jordan Bardella (président) ; Marine Le Pen reste la figure présidentielle du parti, sous le coup d'une procédure judiciaire affectant son éligibilité, en appel.",
  },
  {
    slug: 'reconquete',
    name: 'Reconquête !',
    countryCode: 'FR',
    positioning: 'Droite radicale, national-conservateur',
    electoralStatus: 'extra-parlementaire',
    electoralStatusDetail:
      "Aucun député à l'Assemblée nationale (0,75% des voix au 1er tour, législatives du 30 juin 2024). Une eurodéputée (Sarah Knafo) au Parlement européen.",
    electoralStatusSource: {
      name: 'France info',
      url: 'https://www.franceinfo.fr/politique/parti-reconquete/',
      accessedOn: '2026-08-18',
    },
    officialWebsite: 'https://parti-reconquete.fr',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/Reconquete_off' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Reconquete » (France)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'remigration',
      source: {
        name: "Public Sénat — Présidentielle 2022 : Éric Zemmour détaille son programme et assume le terme « remigration »",
        url: 'https://www.publicsenat.fr/actualites/non-classe/presidentielle-2022-eric-zemmour-detaille-son-programme-et-assume-le-terme',
        accessedOn: '2026-10-05',
        note: "Le 23 mars 2022, Éric Zemmour, fondateur et président du parti, a déclaré : « Nous créerons un grand ministère de la remigration doté de tous les moyens humains et matériels pour mettre en œuvre cette nouvelle politique migratoire », en assumant explicitement le terme. Usage direct du terme par le dirigeant du parti — critère central de la méthodologie de ce site.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Wikipedia — Reconquête (political party)",
        url: "https://en.wikipedia.org/wiki/Reconqu%C3%AAte_(political_party)",
        accessedOn: '2026-10-21',
        note: "Aucun député à l'Assemblée nationale (0 siège sur 577 depuis les élections législatives de 2024) : aucun texte déposé au niveau national.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2024',
        chamber: 'Assemblée nationale',
        date: '2024-06-30',
        seats: 0,
        totalSeats: 577,
        votePercent: 0.75,
        source: {
          name: 'France info',
          url: 'https://www.franceinfo.fr/politique/parti-reconquete/',
          accessedOn: '2026-09-09',
        },
      },
      {
        label: 'Élections européennes 2024 (liste « La France fière »)',
        chamber: 'Parlement européen',
        date: '2024-06-09',
        seats: 5,
        totalSeats: 81,
        votePercent: 5.47,
        source: {
          name: 'Touteleurope.eu',
          url: 'https://www.touteleurope.eu/vie-politique-des-etats-membres/reconquete-le-parti-d-eric-zemmour-annonce-rejoindre-le-groupe-ecr-au-parlement-europeen/',
          accessedOn: '2026-09-09',
        },
      },
    ],
    europeanRepresentation: {
      meps: 1,
      totalCountryMeps: 81,
      europeanGroup: 'Europe des nations souveraines (ENS) — Sarah Knafo, vice-présidente du groupe',
      source: {
        name: 'Wikipedia — Sarah Knafo',
        url: 'https://en.wikipedia.org/wiki/Sarah_Knafo',
        accessedOn: '2026-09-09',
        note: "5 élus sur la liste Reconquête en juin 2024, mais 4 exclus du parti dès le 12 juin 2024 ; seule Sarah Knafo reste eurodéputée du parti.",
      },
    },
    founded: 2021,
    description:
      "Fondé par Éric Zemmour en décembre 2021. Après les élections européennes de 2024, le bureau exécutif s'est resserré autour d'Éric Zemmour, Sarah Knafo et Stanislas Rigault.",
  },
  {
    slug: 'udr',
    name: 'Union des droites pour la République (UDR)',
    countryCode: 'FR',
    positioning: "Droite nationale et identitaire, classée union de l'extrême droite (UXD) par le ministère de l'Intérieur",
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Dix-sept députés sur 577 — de quoi constituer son propre groupe à l'Assemblée nationale —, un sénateur sur 348 et un eurodéputé. Le parti a franchi un seuil aux municipales de mars 2026 en enlevant Nice, cinquième ville de France, où Éric Ciotti a été élu maire, ainsi que Montauban et une dizaine de mairies au total. Particularité notable : le parti n'a jamais disputé d'élection nationale sous son propre nom, ayant été fondé sept semaines après les législatives de juillet 2024 dont ses députés sont issus.",
    electoralStatusSource: {
      name: 'Wikipédia — Union des droites pour la République',
      url: 'https://fr.wikipedia.org/wiki/Union_des_droites_pour_la_R%C3%A9publique',
      accessedOn: '2026-09-15',
    },
    officialWebsite: 'https://www.udr.fr',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/ECiotti', leader: 'Éric Ciotti' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Union des droites pour la République » (France)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite (cas limite). Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026. Pour les municipales de 2026, la circulaire du ministère de l'Intérieur du 2 février 2026 range l'UDR dans le bloc « extrême droite » ; le Conseil d'État a rejeté le recours de l'UDR et d'Éric Ciotti contre ce classement le 27 février 2026 (n° 512694 et autres ; Le Monde du droit, 3 mars 2026 : https://www.lemondedudroit.fr/public/282-droit-public-general/103261-municipales-lfi-a-l-extreme-gauche-udr-a-l-extreme-droite.html, consulté le 2026-10-20).",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: "Assemblée nationale — données ouvertes, dossiers législatifs de la XVIIe législature",
        url: "https://data.assemblee-nationale.fr/static/openData/repository/17/loi/dossiers_legislatifs/Dossiers_Legislatifs.json.zip",
        accessedOn: '2026-10-20',
        note: "Propositions de loi déposées par ses députés : interdiction du mariage des personnes visées par une mesure d'éloignement (11 mars 2025), « priorité nationale et locale » (proposition de loi constitutionnelle, 11 décembre 2025), suspension du regroupement familial des étrangers bénéficiaires de la protection subsidiaire (12 mai 2026), exigence de résidence effective en France pour acquérir la nationalité (20 octobre 2026).",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Assemblée nationale — données ouvertes, dossiers législatifs de la XVIIe législature",
        url: 'https://data.assemblee-nationale.fr/static/openData/repository/17/loi/dossiers_legislatifs/Dossiers_Legislatifs.json.zip',
        accessedOn: '2026-10-20',
        note: "Groupe d'opposition. Aucune des propositions de loi déposées par ses députés depuis 2024 n'a été promulguée, dont une proposition de loi constitutionnelle « relative à la priorité nationale et locale » (11 décembre 2025) et une proposition visant à suspendre le regroupement familial des étrangers bénéficiaires de la protection subsidiaire (12 mai 2026). Le parti dispose en revanche, depuis mars 2026, d'un pouvoir exécutif local à Nice et Montauban.",
      },
    },
    europeanRepresentation: {
      meps: 1,
      totalCountryMeps: 81,
      europeanGroup: "Patriotes pour l'Europe (PfE)",
      source: {
        name: 'Wikipédia — Union des droites pour la République',
        url: 'https://fr.wikipedia.org/wiki/Union_des_droites_pour_la_R%C3%A9publique',
        accessedOn: '2026-09-15',
      },
    },
    localImplantation: {
      summary:
        "Une dizaine de mairies au lendemain des municipales de mars 2026, dont deux prises majeures : Nice — cinquième commune de France, dont Éric Ciotti est devenu maire — et Montauban. Le parti revendiquait plus de 13 000 adhérents fin 2024. Son implantation se confond largement avec celle de son allié le Rassemblement national, avec lequel il a conclu des accords de désistement réciproque.",
      mayors: 10,
      source: {
        name: 'CNews — Municipales 2026 : les principales villes conquises par le RN au second tour',
        url: 'https://www.cnews.fr/france/2026-03-23/municipales-2026-nice-carcassonne-montargis-menton-les-principales-villes',
        accessedOn: '2026-09-15',
      },
    },
    founded: 2024,
    description:
      "Né le 31 août 2024 de la rupture d'Éric Ciotti avec Les Républicains, dont il présidait le parti, après son ralliement au Rassemblement national pour les législatives anticipées de juillet 2024 — décision qui avait provoqué sa tentative d'exclusion puis la scission du parti. Prolonge une structure créée en 2012 sous le nom d'Association des Amis d'Éric Ciotti. C'est aujourd'hui la charnière entre la droite parlementaire classique et le RN.",
  },
  {
    slug: 'afd',
    name: 'Alternative für Deutschland (AfD)',
    countryCode: 'DE',
    positioning: 'Droite radicale, national-conservateur',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Deuxième force politique du Bundestag depuis les élections fédérales du 23 février 2025 (20,8% des voix, 152 sièges). Coprésidence de groupe : Alice Weidel et Tino Chrupalla. Aucun parti n'accepte de coalition avec l'AfD au niveau fédéral (« Brandmauer »). En 2026, le parti est arrivé en tête de deux élections régionales, en Saxe-Anhalt (43,8 %) et en Mecklembourg-Poméranie-Occidentale (38,2 %), sans accéder au pouvoir dans aucun Land.",
    electoralStatusSource: {
      name: 'Die Bundeswahlleiterin — résultat définitif Bundestagswahl 2025',
      url: 'https://www.bundeswahlleiterin.de/info/presse/mitteilungen/bundestagswahl-2025/29_25_endgueltiges-ergebnis.html',
      accessedOn: '2026-08-18',
    },
    officialWebsite: 'https://www.afd.de',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/AfD' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Alternative für Deutschland » (Allemagne)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite depuis 2015. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'remigration',
      source: {
        name: "nd-aktuell — Bundestagswahl : AfD verabschiedet extrem rechtes Wahlprogramm",
        url: 'https://www.nd-aktuell.de/artikel/1188160.bundestagswahl-remigration-afd-verabschiedet-extrem-rechtes-wahlprogramm.html',
        accessedOn: '2026-10-05',
        note: "Le congrès de Riesa du 12 janvier 2025 a inscrit la « Remigration » au programme pour les élections fédérales, à une large majorité, après qu'Alice Weidel a déclaré : « Wenn es dann Remigration heißen soll, dann heißt es eben Remigration » (« Si cela doit s'appeler remigration, alors cela s'appellera remigration »). Usage explicite du terme par le parti et sa dirigeante — critère central de la méthodologie de ce site. Une version antérieure de cette fiche affirmait à tort que le parti n'employait pas officiellement le terme.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Deutscher Bundestag',
        url: 'https://www.bundestag.de/parlament/fraktionen/afd/afd-inhalt-527374',
        unverified: "registre DIP et page du groupe au Bundestag inaccessibles le 2026-10-20",
        note: "Groupe d'opposition au Bundestag, tenu à l'écart de toute coalition. Statut à vérifier : le registre DIP du Bundestag n'a pas pu être consulté le 20 octobre 2026 (accès automatisé refusé).",
      },
    },
    electoralHistory: [
      {
        label: "Élection régionale de Mecklembourg-Poméranie-Occidentale 2026",
        chamber: "Landtag de Mecklembourg-Poméranie-Occidentale",
        date: '2026-09-20',
        seats: 32,
        totalSeats: 71,
        votePercent: 38.2,
        source: {
          name: "Wikipedia — Landtagswahl in Mecklenburg-Vorpommern 2026",
          url: 'https://de.wikipedia.org/wiki/Landtagswahl_in_Mecklenburg-Vorpommern_2026',
          accessedOn: '2026-10-05',
          note: "Le parti arrive en tête devant le SPD (35,5 %) ; la CDU échoue sous le seuil de 5 %. Tenu à l'écart de toute coalition par les autres partis.",
        },
      },
      {
        label: "Élection au Parlement de Berlin 2026",
        chamber: "Abgeordnetenhaus de Berlin",
        date: '2026-09-20',
        seats: 29,
        totalSeats: 158,
        votePercent: 16.3,
        source: {
          name: "Wikipedia — Wahl zum Abgeordnetenhaus von Berlin 2026",
          url: 'https://de.wikipedia.org/wiki/Wahl_zum_Abgeordnetenhaus_von_Berlin_2026',
          accessedOn: '2026-10-05',
          note: "Troisième force, derrière Die Linke et la CDU.",
        },
      },
      {
        label: 'Élection régionale de Saxe-Anhalt 2026',
        chamber: 'Landtag de Saxe-Anhalt',
        date: '2026-09-06',
        seats: 39,
        totalSeats: 83,
        votePercent: 43.8,
        source: {
          name: 'ZDFheute — Wahl in Sachsen-Anhalt: AfD liegt klar vor CDU',
          url: 'https://www.zdfheute.de/politik/deutschland/landtagswahl-sachsen-anhalt-wahlergebnisse-cdu-afd-schulze-siegmund-100.html',
          accessedOn: '2026-09-10',
          note: "Meilleur score régional de l'histoire du parti ; à 3 sièges seulement de la majorité absolue (42), mais toujours écartée du pouvoir par le refus de tout autre parti de gouverner avec elle.",
        },
      },
      {
        label: 'Élection régionale de Rhénanie-Palatinat 2026',
        chamber: 'Landtag de Rhénanie-Palatinat',
        date: '2026-03-22',
        seats: 24,
        totalSeats: 105,
        votePercent: 19.5,
        source: {
          name: 'Landeswahlleiter Rheinland-Pfalz',
          url: 'https://www.wahlen.rlp.de/nachrichten/nachichtendetailseite/endgueltiges-ergebnis-der-landtagswahl-2026-steht-fest',
          accessedOn: '2026-09-10',
          note: "Meilleur résultat du parti dans un Land d'Allemagne de l'Ouest à ce jour.",
        },
      },
      {
        label: 'Élection régionale du Bade-Wurtemberg 2026',
        chamber: 'Landtag du Bade-Wurtemberg',
        date: '2026-03-08',
        seats: 35,
        totalSeats: 157,
        votePercent: 18.8,
        source: {
          name: "Ministerium des Inneren Baden-Württemberg — Endgültiges Landesergebnis der Landtagswahl 2026 festgestellt",
          url: 'https://im.baden-wuerttemberg.de/de/service/presse-und-oeffentlichkeitsarbeit/pressemitteilung/pid/endgueltiges-landesergebnis-der-landtagswahl-2026-festgestellt',
          accessedOn: '2026-09-10',
          note: "Quasi-doublement du score de 2021 (+9,1 points), troisième place derrière les Verts et la CDU.",
        },
      },
      {
        label: 'Élections fédérales 2025',
        chamber: 'Bundestag',
        date: '2025-02-23',
        seats: 152,
        totalSeats: 630,
        votePercent: 20.8,
        source: {
          name: 'Deutscher Bundestag',
          url: 'https://www.bundestag.de/dokumente/textarchiv/2025/kw09-wahlergebnis-1049580',
          accessedOn: '2026-09-09',
        },
      },
      {
        label: 'Élections fédérales 2021',
        chamber: 'Bundestag',
        date: '2021-09-26',
        seats: 83,
        totalSeats: 736,
        votePercent: 10.3,
        source: {
          name: 'Universität Tübingen',
          url: 'https://uni-tuebingen.de/fakultaeten/wirtschafts-und-sozialwissenschaftliche-fakultaet/faecher/fachbereich-sozialwissenschaften/rechtsextremismusforschung/newsfullview/article/ein-blick-zurueck-die-afd-bei-den-bundestagswahlen-2021/',
          accessedOn: '2026-09-09',
        },
      },
    ],
    europeanRepresentation: {
      meps: 15,
      totalCountryMeps: 96,
      europeanGroup: "Europe des nations souveraines (ENS), groupe fondé par l'AfD en juillet 2024",
      source: {
        name: 'de.wikipedia.org — Europa der Souveränen Nationen',
        url: 'https://de.wikipedia.org/wiki/Europa_der_Souver%C3%A4nen_Nationen',
        accessedOn: '2026-09-09',
        note: "15 élus sur la liste AfD ; 14 siègent effectivement au sein du groupe ENS, Maximilian Krah (tête de liste) ayant été exclu de la délégation du parti après l'élection en raison de propos controversés.",
      },
    },
    localImplantation: {
      summary:
        "Robert Sesselmann, premier Landrat (administrateur de district) issu du parti, est en fonction à Sonneberg (Thuringe) depuis le 3 juillet 2023 ; Hannes Loth, élu en juillet 2023 à Raguhn-Jeßnitz (Saxe-Anhalt), est le premier maire AfD élu à plein temps. Aux élections municipales de Hesse de mars 2026, le parti obtient 14,8 % des voix selon le résultat provisoire, contre 6,8 % en 2021.",
      source: {
        name: 'hessenschau — Vorläufiges Landesergebnis der Kommunalwahl sieht CDU vor SPD und AfD',
        url: 'https://www.hessenschau.de/politik/kommunalwahlen/vorlaeufiges-landesergebnis-der-kommunalwahl-sieht-cdu-vor-spd-und-afd-v6,vorlaeufiges-ergebnis-kom-hessen-100.html',
        accessedOn: '2026-10-21',
        note: "Article du 20 mars 2026. Robert Sesselmann : https://en.wikipedia.org/wiki/Robert_Sesselmann ; Hannes Loth : https://de.wikipedia.org/wiki/Hannes_Loth (consultés le 2026-10-21).",
      },
    },
    founded: 2013,
    description:
      "Fondé en 2013, d'abord sur une ligne anti-euro avant de se recentrer sur l'immigration et l'identité nationale à partir de 2015. Depuis les élections fédérales de 2025, deuxième force politique du Bundestag.",
  },
  {
    slug: 'bsw',
    name: 'Bündnis Sahra Wagenknecht (BSW)',
    countryCode: 'DE',
    positioning: 'Populiste de gauche, national-conservateur sur l\'immigration',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Absent du Bundestag, le parti ayant manqué le seuil des 5% de seulement 0,03 point lors des élections fédérales de février 2025 (4,981%). A depuis contesté plusieurs élections régionales en 2026 avec des résultats contrastés : échec à franchir le seuil au Bade-Wurtemberg en mars 2026, puis entrée réussie au Landtag de Saxe-Anhalt en septembre 2026 (5 sièges). Aucune participation gouvernementale.",
    electoralStatusSource: {
      name: 'Springer Nature — The Sahra Wagenknecht Alliance (BSW) and the 2025 Federal Election: So Near, Yet So Far',
      url: 'https://link.springer.com/chapter/10.1007/978-3-032-20555-1_20',
      accessedOn: '2026-09-10',
    },
    officialWebsite: 'https://bsw-vg.de',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/BSWbund' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Bündnis Sahra Wagenknecht » (Allemagne)",
      url: "https://popu-list.github.io/Data/The%20PopuList%204.0.csv",
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême gauche ; non codé d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026. Inclusion au titre du critère (a) de la méthodologie : son programme de 2025 demande de mettre fin à l'immigration irrégulière (voir « Intention »).",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'InfoMigrants — German elections: What does the BSW say about migration in its manifesto?',
        url: 'https://www.infomigrants.net/en/post/62871/german-elections-what-does-the-bsw-say-about-migration-in-its-manifesto',
        accessedOn: '2026-10-20',
        note: "Programme des élections fédérales de 2025 : mettre fin à l'immigration irrégulière, expulser les personnes sans droit au séjour, refuser le séjour à celles déjà passées par un pays tiers sûr. L'argument principal est la préservation de l'État social (« un État social fort ne peut fonctionner que si tout le monde n'est pas autorisé à entrer »), à côté d'arguments de sécurité. InfoMigrants relève « certaines similarités » avec le programme de l'AfD.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Bundestag — registre DIP",
        url: "https://dip.bundestag.de/suche",
        unverified: "registre DIP du Bundestag inaccessible le 2026-10-20",
        note: "Absent du Bundestag depuis les élections de 2025. Statut à vérifier : le registre DIP du Bundestag n'a pas pu être consulté le 20 octobre 2026 (accès automatisé refusé). Les mesures adoptées au niveau des Länder n'ont pas été examinées.",
      },
    },
    electoralHistory: [
      {
        label: "Élection régionale de Mecklembourg-Poméranie-Occidentale 2026",
        chamber: "Landtag de Mecklembourg-Poméranie-Occidentale",
        date: '2026-09-20',
        seats: 0,
        totalSeats: 71,
        votePercent: 4.8,
        source: {
          name: "Wikipedia — Landtagswahl in Mecklenburg-Vorpommern 2026",
          url: 'https://de.wikipedia.org/wiki/Landtagswahl_in_Mecklenburg-Vorpommern_2026',
          accessedOn: '2026-10-05',
          note: "Sous le seuil de 5 %.",
        },
      },
      {
        label: "Élection au Parlement de Berlin 2026",
        chamber: "Abgeordnetenhaus de Berlin",
        date: '2026-09-20',
        seats: 0,
        totalSeats: 158,
        votePercent: 4.7,
        source: {
          name: "Wikipedia — Wahl zum Abgeordnetenhaus von Berlin 2026",
          url: 'https://de.wikipedia.org/wiki/Wahl_zum_Abgeordnetenhaus_von_Berlin_2026',
          accessedOn: '2026-10-05',
          note: "Sous le seuil de 5 %.",
        },
      },
      {
        label: 'Élection régionale de Saxe-Anhalt 2026',
        chamber: 'Landtag de Saxe-Anhalt',
        date: '2026-09-06',
        seats: 5,
        totalSeats: 83,
        votePercent: 5.3,
        source: {
          name: 'Politpro — Saxony-Anhalt State Election',
          url: 'https://politpro.eu/en/saxony-anhalt/election/parliament/2026',
          accessedOn: '2026-09-10',
        },
      },
      {
        label: 'Élections fédérales 2025',
        chamber: 'Bundestag',
        date: '2025-02-23',
        seats: 0,
        totalSeats: 630,
        votePercent: 4.981,
        source: {
          name: 'Springer Nature',
          url: 'https://link.springer.com/chapter/10.1007/978-3-032-20555-1_20',
          accessedOn: '2026-09-10',
          note: "Meilleur score jamais obtenu par un nouveau parti allemand sans siège — à 0,03 point du seuil de représentation.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 5,
      totalCountryMeps: 96,
      europeanGroup: 'Non-inscrits',
      source: {
        name: 'Wikipedia — Sahra Wagenknecht Alliance',
        url: 'https://en.wikipedia.org/wiki/Sahra_Wagenknecht_Alliance',
        accessedOn: '2026-09-10',
        note: "Une tentative de constituer un groupe européen propre autour du BSW en 2024 n'a pas abouti faute d'un nombre suffisant de partis partenaires dans assez de pays.",
      },
    },
    founded: 2024,
    description:
      "Fondé en janvier 2024 par Sahra Wagenknecht, ancienne figure de proue de Die Linke, après sa rupture avec ce parti. Combine positions économiques de gauche (hausse du salaire minimum, des retraites, plafonnement des loyers) et ligne restrictive sur l'immigration et l'octroi de l'asile.",
  },
  {
    slug: 'reform-uk',
    name: 'Reform UK',
    countryCode: 'GB',
    positioning: 'National-populiste, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "8 députés à la Chambre des Communes : Nigel Farage (Clacton), Lee Anderson (Ashfield), Richard Tice (Boston and Skegness), Sarah Pochin (Runcorn and Helsby), Danny Kruger (East Wiltshire), Robert Jenrick (Newark), Andrew Rosindell (Romford) et Suella Braverman (Fareham and Waterlooville) — plusieurs issus de défections conservatrices. Le 7 mai 2026, entrée simultanée au Senedd gallois (34 sièges, deuxième force) et au Parlement écossais (17 sièges, deuxième force ex æquo avec le Labour), en plus du contrôle de nombreux conseils locaux anglais.",
    electoralStatusSource: {
      name: 'UK Parliament — members.parliament.uk',
      url: 'https://members.parliament.uk/member/5091/career',
      accessedOn: '2026-08-18',
    },
    officialWebsite: 'https://www.reformparty.uk',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/reformparty_uk' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Brexit Party / Reform » (Royaume-Uni)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: "Reform UK — Our Contract with You (programme des élections générales de 2024)",
        url: 'https://assets.nationbuilder.com/reformuk/pages/253/attachments/original/1718625371/Reform_UK_Our_Contract_with_You.pdf',
        accessedOn: '2026-10-20',
        note: "Premier des cinq engagements : gel de toute immigration « non essentielle », les compétences essentielles, surtout dans la santé, faisant exception. Détention et expulsion des migrants arrivés illégalement, renvoi des embarcations vers la France si nécessaire, sortie de la Convention européenne des droits de l'homme. Le document n'emploie pas le terme « remigration ».",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "UK Parliament — Bills : Universal Credit (British Citizens) Bill",
        url: 'https://bills.parliament.uk/bills/4056',
        accessedOn: '2026-10-20',
        note: "Huit députés sur 650. Aucun projet de loi déposé par ses députés n'est devenu loi depuis les élections de 2024, dont le Universal Credit (British Citizens) Bill de Richard Tice (première lecture le 6 janvier 2026) et le Deprivation of Citizenship (Promotion of Terrorism or Violence) Bill de Sarah Pochin (7 janvier 2026). Parmi ses députés actuels, Suella Braverman avait porté l'Illegal Migration Act 2023 comme ministre de l'Intérieur d'un gouvernement conservateur.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections du Senedd gallois 2026',
        chamber: 'Senedd (Parlement gallois)',
        date: '2026-05-07',
        seats: 34,
        totalSeats: 96,
        votePercent: 29.3,
        source: {
          name: 'Swansea Bay News — Senedd Election 2026',
          url: 'https://swanseabaynews.com/senedd-election-2026-plaid-cymru-largest-party-reform-uk-historic-breakthrough-welsh-labour-reduced-to-nine-seats-the-new-political-map-of-wales/',
          accessedOn: '2026-09-10',
          note: "Première entrée du parti au Senedd (élargi à 96 sièges pour ce scrutin), devenant la deuxième force politique du pays derrière Plaid Cymru, très loin devant le Labour gallois (9 sièges seulement) qui dirigeait le pays depuis la dévolution.",
        },
      },
      {
        label: 'Élections du Parlement écossais (Holyrood) 2026',
        chamber: 'Scottish Parliament',
        date: '2026-05-07',
        seats: 17,
        totalSeats: 129,
        votePercent: 18.5,
        source: {
          name: 'YouGov — How Scotland voted at the 2026 Holyrood election',
          url: 'https://yougov.com/en-gb/articles/54908-how-scotland-voted-in-the-2026-holyrood-election',
          accessedOn: '2026-09-10',
          note: "Première entrée au Parlement écossais, à égalité de sièges avec le Labour (17 chacun) pour la deuxième place, très loin derrière le SNP qui reste le premier parti sans majorité absolue.",
        },
      },
      {
        label: 'Élections générales 2024',
        chamber: 'Chambre des Communes',
        date: '2024-07-04',
        seats: 5,
        totalSeats: 650,
        votePercent: 14.3,
        source: {
          name: 'BBC News — 2024 UK general election results',
          url: 'https://www.bbc.com/news/election/2024/uk/results',
          accessedOn: '2026-09-09',
          note: "5 sièges obtenus le soir de l'élection ; le groupe parlementaire est passé à 8 depuis, par ralliement de députés élus sous étiquette conservatrice.",
        },
      },
    ],
    localImplantation: {
      summary:
        "Aux élections locales du 1er mai 2025, le parti gagne 677 sièges de conseillers, prend le contrôle de dix conseils (dont le Kent, le Lincolnshire et le comté de Durham) et remporte les deux mairies élues au suffrage direct de Greater Lincolnshire et de Hull and East Yorkshire. Aux élections locales de mai 2026, il gagne 1 451 sièges ; il entre la même année au Senedd et au Parlement écossais (voir le calendrier électoral).",
      source: {
        name: 'Wikipedia — 2025 United Kingdom local elections',
        url: 'https://en.wikipedia.org/wiki/2025_United_Kingdom_local_elections',
        accessedOn: '2026-10-21',
      },
    },
    founded: 2018,
    description:
      "Fondé en 2018 sous le nom Brexit Party, renommé Reform UK en 2021. Dirigé par Nigel Farage depuis septembre 2024.",
  },
  {
    slug: 'restore-britain',
    name: 'Restore Britain',
    countryCode: 'GB',
    positioning: 'Ethno-nationaliste, extrême droite',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Un député sur 650 à la Chambre des communes : son fondateur Rupert Lowe, élu de Great Yarmouth en 2024 sous l'étiquette Reform UK avant d'en être suspendu en mars 2025. Le parti revendique 130 000 adhérents cotisants en juin 2026 — davantage que la plupart des partis établis britanniques — et 37 conseillers locaux au 10 août 2026, dont sept élus du Kent ralliés en bloc. Les intentions de vote nationales oscillaient entre 7 et 9% au printemps 2026. Advance UK, parti rival fondé le même jour par un autre ancien de Reform UK, Ben Habib, a été dissous le 10 juillet 2026 pour ne pas diviser cet espace politique.",
    electoralStatusSource: {
      name: 'Wikipedia — Restore Britain',
      url: 'https://en.wikipedia.org/wiki/Restore_Britain',
      accessedOn: '2026-09-13',
      note: "Dissolution d'Advance UK documentée par Left Foot Forward (https://leftfootforward.org/2026/06/ben-habib-winds-up-advance-uk-to-clear-the-way-for-restore-britain/).",
    },
    officialWebsite: 'https://www.restorebritain.org.uk',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/RestoreBritain' },
      { platform: 'X', url: 'https://x.com/RupertLowe10', leader: 'Rupert Lowe' },
    ],
    classificationSource: {
      name: 'Wikipedia — Restore Britain',
      url: 'https://en.wikipedia.org/wiki/Restore_Britain',
      accessedOn: '2026-10-20',
      note: "Décrit par l'article comme « ouvertement ethno-nationaliste » et classé à l'extrême droite. L'article rapporte que le Financial Times y voit une forme de nativisme dur rarement observée depuis la disparition de fait du BNP, que HOPE not hate le range dans une « re-racialisation plus large de l'extrême droite britannique », et que The Critic le situe plus à droite que Reform. Absent de The PopuList 4.0.",
    },
    intention: {
      tag: 'remigration',
      source: {
        name: 'Wikipedia — Restore Britain',
        url: 'https://en.wikipedia.org/wiki/Restore_Britain',
        accessedOn: '2026-10-20',
        note: "Critère (b) de la méthodologie : départs massifs visant aussi des personnes en séjour régulier. Le parti vise une immigration nette négative et Rupert Lowe a publié un document de 133 pages consacré aux « expulsions de masse » (Wikipédia). Rupert Lowe veut non seulement arrêter l'immigration mais l'« inverser », sous le mot d'ordre « millions must go » (Sunder Katwala, The New World, 18 mars 2026 : https://www.thenewworld.co.uk/sunder-katwala-rupert-lowe-the-most-right-wing-mp-since-1945/), et Harrison Pitt a promis de faire de 2026 « l'année des déchéances de nationalité de masse » (UnHerd, février 2026 : https://unherd.com/2026/02/rupert-lowes-powellite-revolution/). L'emploi du mot « remigration » par les dirigeants du parti n'a pas été retrouvé dans ces sources.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "UK Parliament — Rupert Lowe, fiche de député",
        url: 'https://members.parliament.uk/member/5158/career',
        accessedOn: '2026-10-20',
        note: "Un seul député, Rupert Lowe. Son seul projet de loi depuis 2024, le Quantitative Easing (Prohibition) Bill, ne porte pas sur l'immigration ; aucun texte du parti n'a été adopté (registre des projets de loi du Parlement britannique).",
      },
    },
    electoralHistory: [
      {
        label: 'Élection partielle à la mairie du Grand Manchester 2026',
        chamber: 'Maire de la Greater Manchester Combined Authority',
        date: '2026-07-30',
        seats: 0,
        totalSeats: 1,
        votePercent: 8.7,
        source: {
          name: 'Wikipedia — 2026 Greater Manchester mayoral by-election',
          url: 'https://en.wikipedia.org/wiki/2026_Greater_Manchester_mayoral_by-election',
          accessedOn: '2026-09-13',
          note: "Meilleur total de voix du parti à ce jour : 46 289 bulletins pour Marlon West, quatrième sur sept candidats. Scrutin uninominal remporté par la travailliste Bev Craig. La partielle découle du départ d'Andy Burnham, qui avait quitté la mairie pour se faire élire député à Makerfield six semaines plus tôt.",
        },
      },
      {
        label: 'Élection législative partielle de Makerfield 2026',
        chamber: 'Chambre des communes',
        date: '2026-06-18',
        seats: 0,
        totalSeats: 650,
        votePercent: 6.84,
        source: {
          name: 'Wikipedia — 2026 Makerfield by-election',
          url: 'https://en.wikipedia.org/wiki/2026_Makerfield_by-election',
          accessedOn: '2026-09-13',
          note: "Première candidature du parti à une législative partielle : Rebecca Shepherd obtient 3 111 voix (6,84%), troisième sur quatorze candidats, derrière le Labour (Andy Burnham, 54,8%) et Reform UK (34,5%).",
        },
      },
    ],
    localImplantation: {
      summary:
        "37 conseillers locaux au 10 août 2026, répartis sur dix-sept collectivités anglaises, galloises et écossaises — un maillage constitué pour l'essentiel par ralliements d'élus en cours de mandat plutôt que par conquête électorale. Seule exception : aux élections locales anglaises du 7 mai 2026, sa structure affiliée Great Yarmouth First a remporté la totalité des dix sièges qu'elle briguait (neuf au conseil du comté de Norfolk, un au conseil d'arrondissement de Great Yarmouth), dans le fief parlementaire de Rupert Lowe.",
      regionalCouncillors: 37,
      source: {
        name: 'Wikipedia — Restore Britain',
        url: 'https://en.wikipedia.org/wiki/Restore_Britain',
        accessedOn: '2026-09-13',
      },
    },
    founded: 2026,
    description:
      "Lancé le 30 juin 2025 comme simple groupe de pression par Rupert Lowe, député de Great Yarmouth exclu de Reform UK trois mois plus tôt, puis converti en parti politique le 13 février 2026 et enregistré auprès de l'Electoral Commission le 20 mars. Le parti le plus jeune de ce répertoire. Il a disputé trois scrutins durant son premier semestre d'existence.",
  },
  {
    slug: 'fratelli-italia',
    name: "Fratelli d'Italia (FdI)",
    countryCode: 'IT',
    positioning: 'National-conservateur, post-néofasciste, droite radicale',
    electoralStatus: 'pouvoir',
    electoralStatusDetail:
      "Au pouvoir depuis octobre 2022. Giorgia Meloni est présidente du Conseil, à la tête d'une coalition avec la Lega et Forza Italia.",
    electoralStatusSource: {
      name: 'Governo Italiano',
      url: 'https://www.governo.it',
      accessedOn: '2026-08-18',
    },
    officialWebsite: 'https://www.fratelli-italia.it',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/FratellidItalia' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Fratelli d'Italia » (Italie)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Secolo d\'Italia — bilan gouvernemental',
        url: 'https://www.secoloditalia.it/2026/06/stop-allimmigrazione-irregolare-fdi-presenta-i-numeri-del-governo-meloni-su-rimpatri-e-sbarchi/',
        accessedOn: '2026-10-20',
        note: "Le parti met en avant « moins de débarquements, plus de rapatriements » : selon ses propres chiffres présentés le 3 juin 2026, 57 % d'arrivées en moins en 2024-2025 par rapport à 2023, et 43 % de moins sur les cinq premiers mois de 2026 par rapport à la même période quatre ans plus tôt.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: "Normattiva — legge 21 febbraio 2024, n. 14 (protocole Italie-Albanie)",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2024-02-21;14",
        accessedOn: '2026-10-21',
        note: "Textes adoptés par le gouvernement Meloni, que le parti dirige, et en vigueur : loi du 21 février 2024 n° 14 ratifiant le protocole Italie-Albanie sur la coopération migratoire (en vigueur depuis le 23 février 2024) ; décret-loi du 10 mars 2023 n° 20 sur les flux d'entrée et la lutte contre l'immigration irrégulière, converti par la loi du 5 mai 2023 n° 50 (Normattiva : https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2023-03-10;20).",
      },
    },
    electoralHistory: [
      {
        label: 'Élections générales 2022',
        chamber: 'Camera dei Deputati',
        date: '2022-09-25',
        seats: 119,
        totalSeats: 400,
        votePercent: 25.99,
        source: {
          name: "Wikipedia — 2022 Italian general election",
          url: 'https://en.wikipedia.org/wiki/2022_Italian_general_election',
          accessedOn: '2026-09-15',
          note: "Attention à la lecture de cette source : les 237 sièges affichés en tête d'article sont ceux de la coalition de centre-droit menée par Giorgia Meloni, pas de Fratelli d'Italia seul, qui en obtient 119 avec 25,99% des voix.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 24,
      totalCountryMeps: 76,
      europeanGroup: "Conservateurs et réformistes européens (ECR)",
      source: {
        name: "Parlement européen — résultats des élections européennes 2024, Italie",
        url: "https://results.elections.europa.eu/en/national-results/italy/2024-2029/",
        accessedOn: '2026-10-21',

      },
    },
    localImplantation: {
      summary:
        "Premier parti dans la majorité des régions italiennes lors des scrutins régionaux tenus depuis 2022 (dont les Marches, l'Ombrie et l'Abruzzes), avec plusieurs présidences de région remportées en coalition avec la Lega et Forza Italia.",
      source: {
        name: 'Il Sole 24 Ore — elezioni regionali',
        url: 'https://www.ilsole24ore.com/',
        accessedOn: '2026-09-09',
      },
    },
    founded: 2012,
    description:
      "Fondé en 2012 par Giorgia Meloni et d'autres dissidents du Peuple de la Liberté, dans la continuité de l'Alleanza Nazionale et, plus loin, du MSI néofasciste. Premier parti italien depuis les élections de septembre 2022.",
  },
  {
    slug: 'lega',
    name: 'Lega',
    countryCode: 'IT',
    positioning: 'National-populiste, régionaliste puis nationaliste, droite radicale',
    electoralStatus: 'pouvoir',
    electoralStatusDetail:
      "Partenaire de la coalition gouvernementale de Giorgia Meloni depuis octobre 2022, aux côtés de Fratelli d'Italia et Forza Italia. Matteo Salvini, président du parti, est vice-président du Conseil et ministre des Infrastructures et des Transports ; il avait auparavant été ministre de l'Intérieur de juin 2018 à septembre 2019, période de la politique dite des « ports fermés » aux navires humanitaires en Méditerranée.",
    electoralStatusSource: {
      name: 'Governo Italiano',
      url: 'https://www.governo.it',
      accessedOn: '2026-09-09',
    },
    officialWebsite: 'https://www.legaonline.it',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/LegaSalvini' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Lega (Nord) » (Italie)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'remigration',
      source: {
        name: "Il Giornale — « Della Lega la proposta per la remigrazione »",
        url: 'https://www.ilgiornale.it/news/politica/della-lega-la-proposta-per-la-remigrazione/',
        accessedOn: '2026-10-20',
        note: "Le groupe de la Lega au conseil régional de Lombardie a présenté une motion sur la « remigrazione » visant les détenus étrangers (article du 9 août 2026), son chef de groupe Alessandro Corbetta revendiquant le terme pour le parti. Une proposition de loi nationale sur la remigration avait été annoncée en février 2026 par le député Rossano Sasso, qui a quitté la Lega pour Futuro Nazionale quelques jours plus tard. Usage explicite du terme par le parti — critère central de la méthodologie de ce site.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: "Normattiva — legge 21 febbraio 2024, n. 14 (protocole Italie-Albanie)",
        url: "https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:legge:2024-02-21;14",
        accessedOn: '2026-10-21',
        note: "Membre de la coalition du gouvernement Meloni, qui a adopté les textes suivants, en vigueur : loi du 21 février 2024 n° 14 ratifiant le protocole Italie-Albanie sur la coopération migratoire ; décret-loi du 10 mars 2023 n° 20 sur les flux d'entrée et la lutte contre l'immigration irrégulière, converti par la loi du 5 mai 2023 n° 50 (Normattiva : https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legge:2023-03-10;20).",
      },
    },
    electoralHistory: [
      {
        label: 'Élections générales 2022',
        chamber: 'Camera dei Deputati',
        date: '2022-09-25',
        seats: 65,
        totalSeats: 400,
        votePercent: 8.8,
        source: {
          name: 'Groupe d\'études géopolitiques — Parliamentary election in Italy, 25 September 2022',
          url: 'https://geopolitique.eu/en/articles/parliamentary-election-in-italy-25-september-2022/',
          accessedOn: '2026-09-09',
          note: "Recul marqué par rapport à 2018 (-8,5 points), le parti étant supplanté par Fratelli d'Italia comme force dominante de la coalition de droite.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 7,
      totalCountryMeps: 76,
      europeanGroup: "Patriotes pour l'Europe (PfE)",
      source: {
        name: "Parlement européen — résultats des élections européennes 2024, Italie",
        url: "https://results.elections.europa.eu/en/national-results/italy/2024-2029/",
        accessedOn: '2026-10-21',
        note: "8 élus en 2024 sur la liste de la Lega. Roberto Vannacci, parti fonder Futuro Nazionale, siège depuis 2026 au groupe ENS (Parlement européen, données ouvertes : https://data.europarl.europa.eu/api/v2/meps/show-current, consultées le 2026-10-21).",

      },
    },
    localImplantation: {
      summary:
        "Implantation ancienne et forte dans le nord de l'Italie (Vénétie, Lombardie), où le parti détient plusieurs présidences de région depuis les années 1990, dont la Vénétie sans interruption depuis 2010.",
      source: {
        name: 'Regione del Veneto',
        url: 'https://www.regione.veneto.it',
        accessedOn: '2026-09-09',
      },
    },
    founded: 1989,
    description:
      "Fondé en 1989 sous le nom de Lega Nord, mouvement régionaliste et autonomiste du nord de l'Italie. Recentré sur l'immigration et le nationalisme italien à l'échelle du pays sous la direction de Matteo Salvini, qui préside le parti depuis 2013 et l'a renommé Lega en 2018.",
  },
  {
    slug: 'futuro-nazionale',
    name: 'Futuro Nazionale (FN)',
    countryCode: 'IT',
    positioning: 'Extrême droite, national-conservatrice et souverainiste',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Huit députés sur 400 à la Chambre, aucun sénateur, un eurodéputé — son fondateur Roberto Vannacci — et sept conseillers régionaux, sept mois après sa création. Le parti revendique environ 140 000 adhérents. Expulsé du groupe Patriotes pour l'Europe au Parlement européen à la suite du départ de Vannacci de la Lega, il a rejoint le 24 février 2026 le groupe Europe des nations souveraines (ESN), fondé par l'AfD. Le 31 mars 2026, ses députés ont voté contre la confiance au gouvernement Meloni, se plaçant dans l'opposition à la coalition de centre-droit dont le parti se présentait pourtant comme « l'allié naturel ». Comme l'UDR française, il n'a jamais disputé d'élection nationale sous son propre nom : tous ses parlementaires ont été élus sous l'étiquette de la Lega.",
    electoralStatusSource: {
      name: 'Wikipedia — National Future (Futuro Nazionale)',
      url: 'https://en.wikipedia.org/wiki/National_Future',
      accessedOn: '2026-09-15',
    },
    officialWebsite: 'https://www.futuronazionale.it',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/RoVannacci', leader: 'Roberto Vannacci' },
      { platform: 'Instagram', url: 'https://www.instagram.com/futuro_nazionale_ufficiale/' },
    ],
    classificationSource: {
      name: 'Wikipedia — National Future (Futuro Nazionale)',
      url: 'https://en.wikipedia.org/wiki/National_Future',
      accessedOn: '2026-10-20',
      note: "Décrit comme un parti d'extrême droite, nationaliste, national-conservateur et populiste de droite. Absent de The PopuList 4.0 (consulté le 2026-10-20).",
    },
    intention: {
      tag: 'remigration',
      source: {
        name: 'Wikipedia — National Future (Futuro Nazionale)',
        url: 'https://en.wikipedia.org/wiki/National_Future',
        accessedOn: '2026-10-20',
        note: "Selon l'article, le parti adopte une ligne fortement anti-immigration et promeut des « politiques de remigration » visant les personnes qui ne s'assimilent pas aux normes et valeurs culturelles italiennes. Critère (a) de la méthodologie : terme employé par le parti.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Camera dei Deputati — données ouvertes (dati.camera.it), actes de la XIXe législature",
        url: "https://dati.camera.it/sparql",
        accessedOn: '2026-10-20',
        note: "Composante du groupe mixte de la Chambre depuis le 27 mai 2026, avec quatre députés. Aucune des propositions de loi qu'ils ont déposées en premier signataire depuis février 2026 ne porte sur l'immigration.",
      },
    },
    europeanRepresentation: {
      meps: 1,
      totalCountryMeps: 76,
      europeanGroup: 'Europe des nations souveraines (ESN)',
      source: {
        name: "ANSA — Vannacci lascia il Gruppo dei Patrioti per l'Europa al Parlamento europeo",
        url: 'https://www.ansa.it/europa/notizie/europarlamento/news/2026/02/03/vannacci-lascia-il-gruppo-dei-patrioti-per-leuropa-al-parlamento-europeo_d4b1c292-491d-4a9f-964a-52b810651abf.html',
        accessedOn: '2026-09-15',
        note: "Vannacci avait été élu en 2024 sur les listes de la Lega avec plus de 500 000 voix de préférence. Expulsé des Patriotes pour l'Europe après sa rupture avec la Lega, il a rejoint le groupe ESN le 24 février 2026.",
      },
    },
    localImplantation: {
      summary:
        "Implantation locale embryonnaire : sept conseillers régionaux, issus eux aussi de ralliements plutôt que d'élections. Première candidature sous son propre nom aux municipales de Vigevano (Lombardie) le 24 mai 2026, où le candidat soutenu par le parti obtient 14,21% au premier tour sans se qualifier pour le second.",
      regionalCouncillors: 7,
      source: {
        name: 'Wikipedia — National Future (Futuro Nazionale)',
        url: 'https://en.wikipedia.org/wiki/National_Future',
        accessedOn: '2026-09-15',
      },
    },
    founded: 2026,
    description:
      "Fondé le 6 février 2026 par Roberto Vannacci, général de division à la retraite devenu eurodéputé, trois jours après sa rupture avec la Lega dont il était vice-secrétaire — l'aboutissement de mois de tensions internes sur ses positions. Révélé au grand public par son livre « Il mondo al contrario » (2023), qui lui avait valu une sanction disciplinaire de l'armée italienne. Avec environ 140 000 adhérents revendiqués, c'est l'un des partis les plus jeunes et les mieux dotés en militants de cet annuaire.",
  },
  {
    slug: 'pvv',
    name: 'Partij voor de Vrijheid (PVV)',
    countryCode: 'NL',
    positioning: 'National-populiste, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Trajectoire récente : membre de la coalition gouvernementale (cabinet Schoof) de juillet 2024 à juin 2025, avant que Geert Wilders ne retire le PVV du gouvernement faute d'accord sur un durcissement supplémentaire de la politique d'asile. Arrivé à égalité de sièges avec D66 (26 sièges chacun) aux élections anticipées du 29 octobre 2025, le PVV a ensuite été exclu des négociations de coalition : le cabinet Jetten (D66-VVD-CDA, gouvernement minoritaire) a prêté serment le 23 février 2026. Le PVV est redevenu le principal parti d'opposition.",
    electoralStatusSource: {
      name: 'NOS / Kiesraad',
      url: 'https://nos.nl/collectie/14006/liveblog/2588474-nog-altijd-onzeker-wie-de-grootste-partij-is-d66-of-pvv-aanwijzen-verkenner-uitgesteld-tot-dinsdag',
      accessedOn: '2026-08-18',
    },
    officialWebsite: 'https://www.pvv.nl',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/geertwilderspvv', leader: 'Geert Wilders' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Partij voor de Vrijheid » (Pays-Bas)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'remigration',
      source: {
        name: 'Follow the Money',
        url: 'https://www.ftm.nl/artikelen/vier-partijen-hebben-deportatie-van-migranten-in-hun-verkiezingsprogramma-staan',
        accessedOn: '2026-10-20',
        note: "Selon Follow the Money (10 octobre 2025), le programme électoral du PVV plaide pour la « remigration » de personnes issues de l'immigration, avec un dispositif de départ volontaire (« Wie dit land wil verlaten, krijgt die kans ») ; en janvier 2021, le parti réclamait déjà un ministère consacré à la remigration. Critère (a) de la méthodologie.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: "Eerste Kamer — Wet invoering tweestatusstelsel (36.703)",
        url: 'https://www.eerstekamer.nl/wetsvoorstel/36703_wet_invoering',
        accessedOn: '2026-10-20',
        note: "Loi instaurant un double statut d'asile et durcissant le regroupement familial, déposée le 7 mars 2025 par la ministre de l'Asile et des Migrations Marjolein Faber (PVV), adoptée par le Sénat le 21 avril 2026 (41 voix contre 34) et publiée le 9 juin 2026 ; son entrée en vigueur est fixée par décret royal. La loi de mesures d'urgence sur l'asile (Asielnoodmaatregelenwet, 36.704), déposée le même jour, a été rejetée par le Sénat le 21 avril 2026 (44 voix contre 31).",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives anticipées 2025',
        chamber: 'Tweede Kamer',
        date: '2025-10-29',
        seats: 26,
        totalSeats: 150,
        votePercent: 15.3,
        source: {
          name: 'Kiesraad — uitslag Tweede Kamerverkiezing 2025',
          url: 'https://www.kiesraad.nl/verkiezingen/tweede-kamer',
          accessedOn: '2026-09-09',
          note: "Arrivé à égalité de sièges avec D66, qui a finalement été désigné premier parti sur la base du nombre de voix et a formé le gouvernement sans le PVV.",
        },
      },
      {
        label: 'Élections législatives 2023',
        chamber: 'Tweede Kamer',
        date: '2023-11-22',
        seats: 37,
        totalSeats: 150,
        votePercent: 23.5,
        source: {
          name: 'Kiesraad — uitslag Tweede Kamerverkiezing 2023',
          url: 'https://www.kiesraad.nl/verkiezingen/tweede-kamer',
          accessedOn: '2026-09-09',
        },
      },
    ],
    europeanRepresentation: {
      meps: 6,
      totalCountryMeps: 31,
      europeanGroup: 'Patriotes pour l\'Europe (PfE)',
      source: {
        name: "Parlement européen — résultats des élections européennes 2024, Pays-Bas",
        url: "https://results.elections.europa.eu/en/national-results/netherlands/2024-2029/",
        accessedOn: '2026-10-21',

      },
    },
    localImplantation: {
      summary:
        "Implantation locale historiquement très faible : le PVV n'a présenté des listes que dans une minorité de communes lors des élections municipales de mars 2026, cohérent avec sa structure de parti centré sur la seule figure de Wilders plutôt que sur un maillage d'élus locaux.",
      source: {
        name: 'NOS — gemeenteraadsverkiezingen 2026',
        url: 'https://nos.nl/',
        accessedOn: '2026-09-09',
      },
    },
    founded: 2006,
    description:
      'Fondé par Geert Wilders en 2006. Parti à adhérent unique (Wilders en est le seul membre officiel), structure atypique parmi les partis néerlandais.',
  },
  {
    slug: 'ja21',
    name: 'JA21',
    countryCode: 'NL',
    positioning: 'National-conservateur, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Neuf sièges à la Tweede Kamer après les élections anticipées du 29 octobre 2025 (+8 par rapport à 2023), portés notamment par le ralliement d'une ancienne secrétaire d'État issue du PVV. Parti d'opposition, non associé au gouvernement minoritaire Jetten (D66-VVD-CDA) formé en février 2026.",
    electoralStatusSource: {
      name: 'NL Times — Former PVV State Sec.\'s switch to JA21 wins party seats in polls',
      url: 'https://nltimes.nl/2025/06/24/former-pvv-state-secs-switch-ja21-wins-party-7-seats-polls',
      accessedOn: '2026-09-09',
    },
    officialWebsite: 'https://ja21.nl',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/JuisteAntwoord' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Juiste Antwoord 21 » (Pays-Bas)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: "Tweede Kamer — initiative de loi 2026Z11062 (registre officiel, données ouvertes)",
        url: "https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Zaak?$filter=Nummer%20eq%20%272026Z11062%27",
        accessedOn: '2026-10-20',
        note: "Ses députés ont cosigné en 2026 deux initiatives de loi : l'abrogation de la loi sur la répartition de l'accueil des demandeurs d'asile entre communes (« Spreidingswet ») et la fin de la priorité au logement pour les réfugiés statutaires.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Tweede Kamer — initiative de loi 2026Z11062 (registre officiel, données ouvertes)",
        url: 'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Zaak?$filter=Nummer%20eq%20%272026Z11062%27',
        accessedOn: '2026-10-20',
        note: "Parti d'opposition. Des députés JA21 ont cosigné deux initiatives de loi encore pendantes : l'abrogation de la loi sur la répartition de l'accueil des demandeurs d'asile entre communes (« Spreidingswet », déposée le 27 mai 2026 avec FvD et BBB) et l'interdiction de la priorité au logement pour les réfugiés statutaires (23 avril 2026). Aucune n'a été adoptée.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives anticipées 2025',
        chamber: 'Tweede Kamer',
        date: '2025-10-29',
        seats: 9,
        totalSeats: 150,
        votePercent: 5.95,
        source: {
          name: 'Wikipedia — 2025 Dutch general election',
          url: 'https://en.wikipedia.org/wiki/2025_Dutch_general_election',
          accessedOn: '2026-09-09',
        },
      },
      {
        label: 'Élections législatives 2023',
        chamber: 'Tweede Kamer',
        date: '2023-11-22',
        seats: 1,
        totalSeats: 150,
        votePercent: 0.68,
        source: {
          name: 'Wikipedia — 2023 Dutch general election',
          url: 'https://en.wikipedia.org/wiki/2023_Dutch_general_election',
          accessedOn: '2026-09-09',
          note: "Recul marqué par rapport à 2021 (3 sièges), avant le fort rebond de 2025.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 0,
      totalCountryMeps: 31,
      source: {
        name: 'Wikipedia — 2024 European Parliament election in the Netherlands',
        url: 'https://en.wikipedia.org/wiki/2024_European_Parliament_election_in_the_Netherlands',
        accessedOn: '2026-09-09',
        note: "Aucun siège obtenu aux élections européennes de 2024.",
      },
    },
    founded: 2020,
    description:
      "Fondé en 2020 par Joost Eerdmans et Annabel Nanninga, dissidents de Forum voor Democratie (FvD). Dirigé par Joost Eerdmans.",
  },
  {
    slug: 'fvd',
    name: 'Forum voor Democratie (FvD)',
    countryCode: 'NL',
    positioning: 'National-populiste, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Sept sièges à la Tweede Kamer après les élections anticipées du 29 octobre 2025, plus que doublant sa représentation (3 sièges auparavant). Aux élections municipales de mars 2026 : 299 sièges de conseillers municipaux, contre 55 avant le scrutin — la plus forte progression de tous les partis. Parti d'opposition, non associé au gouvernement Jetten.",
    electoralStatusSource: {
      name: 'AlleCijfers.nl — Verkiezingsuitslagen voor FvD',
      url: 'https://allecijfers.nl/politieke-partij/fvd/',
      accessedOn: '2026-09-09',
    },
    officialWebsite: 'https://fvd.nl',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/fvdemocratie' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Forum voor Democratie » (Pays-Bas)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'remigration',
      source: {
        name: 'nl.wikipedia.org — Forum voor Democratie',
        url: 'https://nl.wikipedia.org/wiki/Forum_voor_Democratie',
        accessedOn: '2026-10-20',
        note: "Selon l'article de Wikipédia en néerlandais, le parti défend, outre la réduction de l'immigration, la « remigratie door middel van financiële prikkels » (remigration au moyen d'incitations financières). Critère (a) de la méthodologie : terme employé par le parti.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Tweede Kamer — initiative de loi 2026Z11062 (registre officiel, données ouvertes)",
        url: 'https://gegevensmagazijn.tweedekamer.nl/OData/v4/2.0/Zaak?$filter=Nummer%20eq%20%272026Z11062%27',
        accessedOn: '2026-10-20',
        note: "Parti d'opposition. Un député FvD a cosigné le 27 mai 2026 une initiative de loi abrogeant la loi sur la répartition de l'accueil des demandeurs d'asile entre communes (« Spreidingswet ») ; elle n'a pas été adoptée à ce jour.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives anticipées 2025',
        chamber: 'Tweede Kamer',
        date: '2025-10-29',
        seats: 7,
        totalSeats: 150,
        source: {
          name: 'AlleCijfers.nl',
          url: 'https://allecijfers.nl/politieke-partij/fvd/',
          accessedOn: '2026-09-09',
          note: 'Plus du double du nombre de sièges obtenus en 2023 (3 sièges).',
        },
      },
      {
        label: 'Élections législatives 2023',
        chamber: 'Tweede Kamer',
        date: '2023-11-22',
        seats: 3,
        totalSeats: 150,
        source: {
          name: 'DutchNews.nl',
          url: 'https://www.dutchnews.nl/2025/01/sixth-mp-for-forum-voor-democratie-the-party-with-three-seats/',
          accessedOn: '2026-09-09',
        },
      },
    ],
    europeanRepresentation: {
      meps: 0,
      totalCountryMeps: 31,
      source: {
        name: 'nl.wikipedia.org — Verkiezingen voor het Europees Parlement 2024',
        url: 'https://nl.wikipedia.org/wiki/Verkiezingen_voor_het_Europees_Parlement_2024/Kandidatenlijst/Forum_voor_Democratie',
        accessedOn: '2026-09-09',
        note: "1,9% des voix, sous le seuil de représentation : le parti disparaît du Parlement européen en 2024 après y avoir compté 3 élus depuis 2019. Reste affilié à l'échelle européenne au parti Europe des nations souveraines (ESN).",
      },
    },
    localImplantation: {
      summary:
        "En mars 2026 : 299 conseillers municipaux (contre 55 avant le scrutin), le parti passant de 3,6% à 8,4% de moyenne dans les communes où il se présentait déjà, avec ses meilleurs scores dans le nord du pays (Drenthe, Groningue, Frise).",
      source: {
        name: 'StukRoodVlees — Waarom deed Forum het zo goed bij de Raadsverkiezingen?',
        url: 'https://stukroodvlees.nl/waarom-deed-forum-het-zo-goed-bij-de-raadsverkiezingen/',
        accessedOn: '2026-09-09',
      },
    },
    founded: 2016,
    description:
      "Fondé en 2016 par Thierry Baudet et Henk Otten sur une ligne eurosceptique et conservatrice, réorientée vers un populisme plus radical à partir de 2020. Baudet en reste le président malgré plusieurs scissions internes.",
  },
  {
    slug: 'gop-trump',
    name: 'Parti républicain (GOP) — administration Trump',
    countryCode: 'US',
    positioning: 'Coalition de droite ; aile national-populiste dominante depuis 2024',
    electoralStatus: 'pouvoir',
    electoralStatusDetail:
      "Contrôle la présidence (Donald Trump depuis le 20 janvier 2025) ainsi que la Chambre des représentants et le Sénat (119e Congrès, 2025-2027).",
    electoralStatusSource: {
      name: 'Congress.gov',
      url: 'https://www.congress.gov',
      accessedOn: '2026-08-18',
    },
    officialWebsite: 'https://www.gop.com',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/GOP' },
    ],
    classificationSource: {
      name: "The American Presidency Project (UC Santa Barbara) — 2024 Republican Party Platform",
      url: 'https://www.presidency.ucsb.edu/documents/2024-republican-party-platform',
      accessedOn: '2026-10-20',
      note: "Aucun des jeux de données de référence ne couvre les États-Unis (The PopuList se limite à l'Europe, ParlGov n'inclut pas les États-Unis). Inclusion sur autodéclaration : les deux premiers des vingt engagements du programme adopté le 15 juillet 2024 sont « Seal the border, and stop the migrant invasion » et « Carry out the largest deportation operation in American history ».",
    },
    intention: {
      tag: 'remigration',
      source: {
        name: "NPR — 'Remigration,' once a fringe idea, becomes a mantra for the Trump administration",
        url: 'https://www.npr.org/2025/12/09/nx-s1-5630505/remigration-once-a-fringe-idea-becomes-a-mantra-for-the-trump-administration',
        accessedOn: '2026-10-20',
        note: "Usage du terme par l'administration du parti : le plan de réorganisation du département d'État présenté en mai 2025 crée un « Office of Remigration », et le département de la Sécurité intérieure (DHS) a appelé à la « remigration » sur ses réseaux sociaux ; le 27 novembre 2025, Donald Trump a écrit que seule une « reverse migration » pourrait remédier à la situation (article du 9 décembre 2025). Critère (a) de la méthodologie : terme employé par le parti ou ses dirigeants.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: "ABC7 — DHS increasing self-deportation stipend from $1,000 to $2,600",
        url: "https://abc7news.com/18444117",
        accessedOn: '2026-10-21',
        note: "Mesures administratives en vigueur, sans vote du Congrès : programme de départ volontaire par l'application CBP Home, dont l'aide au départ a été portée de 1 000 à 2 600 dollars en janvier 2026. Le DHS revendique 2,2 millions de départs « volontaires » depuis janvier 2025 et 675 000 expulsions la première année ; la Brookings Institution estime les expulsions de 2025 entre 310 000 et 315 000 (article du 21 janvier 2026).",
      },
    },
    actionStatusHistory: [
      {
        date: '2026-06-30',
        tag: 'mesures_concretes_abrogee',
        note: "Le décret présidentiel 14160 (20 janvier 2025), qui visait à mettre fin au droit du sol pour les enfants de parents sans statut légal ou en séjour temporaire, a été invalidé par la Cour suprême le 30 juin 2026 (Trump v. Barbara) au titre de la clause de citoyenneté du 14e amendement.",
        source: {
          name: "National Law Review — Supreme Court Strikes Down Birthright Citizenship Executive Order",
          url: "https://natlawreview.com/article/supreme-court-upholds-birthright-citizenship-rejecting-executive-order",
          accessedOn: '2026-10-21',
        },
      },
    ],
    electoralHistory: [
      {
        label: 'Élections au Congrès 2024 — Chambre des représentants',
        chamber: 'Chambre des représentants',
        date: '2024-11-05',
        seats: 220,
        totalSeats: 435,
        source: {
          name: 'Ballotpedia — Election results, 2024: U.S. Congress',
          url: 'https://ballotpedia.org/Election_results,_2024:_U.S._Congress',
          accessedOn: '2026-09-09',
        },
      },
      {
        label: 'Élections au Congrès 2024 — Sénat',
        chamber: 'Sénat',
        date: '2024-11-05',
        seats: 53,
        totalSeats: 100,
        source: {
          name: 'Ballotpedia',
          url: 'https://ballotpedia.org/Election_results,_2024:_U.S._Congress',
          accessedOn: '2026-09-09',
        },
      },
    ],
    localImplantation: {
      summary:
        "27 gouverneurs d'État sur 50 au lendemain de l'élection de 2024, ramenés à 26 après les élections de novembre 2025 (la Virginie et le New Jersey étant repassés démocrates) — le parti reste toutefois majoritaire au niveau des exécutifs étatiques.",
      source: {
        name: 'MultiState — 2025 Governors',
        url: 'https://www.multistate.us/resources/2025-governors',
        accessedOn: '2026-09-09',
      },
    },
    founded: 1854,
    description:
      "Contrairement aux autres fiches de cet annuaire, le Parti républicain est une coalition large et non un parti anti-immigration mono-thématique. Son inclusion reflète les priorités explicitement affichées dans son programme officiel 2024 et les mesures prises depuis par l'administration Trump, pas une classification de l'ensemble du parti sur toute son histoire.",
  },
  {
    slug: 'sverigedemokraterna',
    name: 'Sverigedemokraterna (SD)',
    countryCode: 'SE',
    positioning: 'National-conservateur, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Premier revers électoral du parti depuis son entrée au Riksdag en 2010 : aux élections du 13 septembre 2026, SD recule à 17,48 % et 62 sièges sur 349 (contre 20,5% et 73 sièges en 2022) et perd sa deuxième place au profit des Modérés. Le bloc Tidö est battu de trois sièges (173 contre 176), ce qui fait tomber la perspective — annoncée le 1er avril 2026 par les quatre partis du bloc — d'une première entrée de SD au gouvernement avec des ministres. Le parti soutenait sans y participer la coalition Kristersson via l'accord de Tidö (octobre 2022), avec une influence directe sur la politique migratoire.",
    electoralStatusSource: {
      name: 'Wikipedia — 2026 Swedish general election',
      url: 'https://en.wikipedia.org/wiki/2026_Swedish_general_election',
      accessedOn: '2026-10-05',
    },
    officialWebsite: 'https://sd.se',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/sdriks' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Sverigedemokraterna » (Suède)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste depuis 2001 et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'remigration',
      source: {
        name: "Migrationsverket — Återvandringsbidraget höjs den 1 januari 2026",
        url: "https://www.migrationsverket.se/nyhetsarkiv/nyhetsarkiv/2025-10-31-atervandringsbidraget-hojs-den-1-januari-2026.html",
        accessedOn: '2026-10-20',
        note: "L'aide au retour (återvandringsbidrag) passe le 1er janvier 2026 à 350 000 couronnes par adulte, 25 000 par enfant, 500 000 par couple et 600 000 par foyer, pour les personnes ayant obtenu au plus tard le 12 septembre 2024 un titre de séjour au titre de la protection. Incitation financière au départ de personnes en séjour régulier : critère (b) de la méthodologie.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: "Migrationsverket — Återvandringsbidraget höjs den 1 januari 2026",
        url: "https://www.migrationsverket.se/nyhetsarkiv/nyhetsarkiv/2025-10-31-atervandringsbidraget-hojs-den-1-januari-2026.html",
        accessedOn: '2026-10-21',
        note: "Aide au retour relevée, en vigueur depuis le 1er janvier 2026 (Migrationsverket). La réforme a été lancée par la directive du 26 octobre 2023 (Dir. 2023:151 : https://www.regeringen.se/contentassets/73ed5c84dbda4bba89289e467ff31632/oversyn-av-incitamentsstrukturerna-for-frivillig-atervandring-dir.-2023151.pdf), qui s'inscrit dans l'accord de Tidö conclu entre les partis du gouvernement et SD : accord de soutien écrit au sens de la méthodologie.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2026',
        chamber: 'Riksdag',
        date: '2026-09-13',
        seats: 62,
        totalSeats: 349,
        votePercent: 17.48,
        source: {
          name: 'Wikipedia — 2026 Swedish general election',
          url: 'https://en.wikipedia.org/wiki/2026_Swedish_general_election',
          accessedOn: '2026-09-15',
          note: "Perte de 11 sièges, retour au niveau de 2018 et rétrogradation à la troisième place derrière les Modérés (19,85 %, 70 sièges). Participation : 84,9 %. Résultat définitif certifié le 17 septembre 2026.",
        },
      },
      {
        label: 'Élections législatives 2022',
        chamber: 'Riksdag',
        date: '2022-09-11',
        seats: 73,
        totalSeats: 349,
        votePercent: 20.5,
        source: {
          name: 'Valmyndigheten (Autorité électorale suédoise)',
          url: 'https://www.val.se/english/election-results/elections-to-the-riksdag-and-regional-and-municipal-councils/election-results-2022',
          accessedOn: '2026-09-09',
          note: "Devient le deuxième parti du pays, dépassant les Modérés pour la première fois de son histoire.",
        },
      },
      {
        label: 'Élections législatives 2018',
        chamber: 'Riksdag',
        date: '2018-09-09',
        seats: 62,
        totalSeats: 349,
        votePercent: 17.53,
        source: {
          name: "Wikipedia — 2018 Swedish general election",
          url: 'https://en.wikipedia.org/wiki/2018_Swedish_general_election',
          accessedOn: '2026-09-15',
        },
      },
    ],
    europeanRepresentation: {
      meps: 3,
      totalCountryMeps: 21,
      europeanGroup: 'Conservateurs et réformistes européens (ECR)',
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Suède',
        url: 'https://results.elections.europa.eu/en/national-results/sweden/2024-2029/',
        accessedOn: '2026-09-09',
      },
    },
    localImplantation: {
      summary:
        "Présent dans la quasi-totalité des 290 conseils municipaux suédois depuis 2022, avec plusieurs centaines d'élus locaux à l'échelle du pays — mais sans détenir la présidence (kommunstyrelsens ordförande) d'aucune grande municipalité, en raison de coalitions formées pour l'en exclure.",
      source: {
        name: 'Sveriges Television (SVT)',
        url: 'https://www.svt.se',
        accessedOn: '2026-09-09',
      },
    },
    founded: 1988,
    description:
      "Fondé en 1988, avec des origines documentées dans des mouvements d'extrême droite et néonazis suédois dont le parti a formellement rompu au tournant des années 2010. Dirigé par Jimmie Åkesson depuis 2005.",
  },
  {
    slug: 'fpo',
    name: 'Freiheitliche Partei Österreichs (FPÖ)',
    countryCode: 'AT',
    positioning: 'National-populiste, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Premier parti aux élections législatives de septembre 2024 — une première — mais resté dans l'opposition : les négociations de coalition avec l'ÖVP menées par Herbert Kickl ont échoué début 2025. Le gouvernement Stocker (ÖVP-SPÖ-NEOS, première coalition tripartite du pays) a prêté serment le 3 mars 2025. Herbert Kickl dirige l'opposition au Conseil national (Nationalrat).",
    electoralStatusSource: {
      name: 'Euronews / t-online',
      url: 'https://www.euronews.com/2025/03/03/centre-right-ovps-christian-stocker-sworn-in-as-new-austrian-chancellor',
      accessedOn: '2026-08-18',
    },
    officialWebsite: 'https://www.fpoe.at',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/fpoe_at' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Freiheitliche Partei Österreichs » (Autriche)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'remigration',
      source: {
        name: 'NZZ / 20 Minuten',
        url: 'https://www.20min.ch/story/wahlen-oesterreich-remigration-und-asylstopp-was-will-fpoe-chef-herbert-kickl-103192636',
        accessedOn: '2026-10-20',
        note: "Le terme « Remigration » fait partie du vocabulaire habituel de Herbert Kickl, qui l'emploie pour désigner le retour « de toutes les personnes immigrées » (20 Minuten, 29 septembre 2024). Critère (a) de la méthodologie. Le programme électoral de 2024 prévoyait de suspendre le droit d'asile par une loi d'urgence.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: "RIS — BFA-Verfahrensgesetz § 39 « Sicherstellen von Beweismitteln und Bargeld », texte consolidé",
        url: "https://www.ris.bka.gv.at/eli/bgbl/i/2012/87/P39/NOR40278170",
        accessedOn: '2026-10-20',
        note: "Loi de 2018 sur le droit des étrangers (FrÄG 2018, BGBl. I Nr. 56/2018), projet du gouvernement ÖVP-FPÖ dont le ministère de l'Intérieur était tenu par Herbert Kickl (FPÖ), adoptée en juillet 2018 : saisie de l'argent liquide des demandeurs d'asile jusqu'à 840 €, lecture de leurs téléphones en cas de doute sur leur identité ou leur itinéraire, délai minimal de naturalisation des réfugiés porté de six à dix ans (Parlement autrichien : https://www.parlament.gv.at/aktuelles/pk/jahr_2018/pk0870). Les articles 39 et 39a de la loi BFA-VG qui en sont issus figurent toujours dans le texte consolidé, modifié en dernier lieu en 2026. Le parti est dans l'opposition depuis 2019 ; son programme de 2024 prévoit la fin des demandes d'asile en Autriche.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2024',
        chamber: 'Nationalrat',
        date: '2024-09-29',
        seats: 57,
        totalSeats: 183,
        votePercent: 28.85,
        source: {
          name: "Wikipedia — 2024 Austrian legislative election",
          url: 'https://en.wikipedia.org/wiki/2024_Austrian_legislative_election',
          accessedOn: '2026-09-15',
          note: "Meilleur résultat de l'histoire du parti, en hausse de 26 sièges par rapport à 2019.",
        },
      },
      {
        label: 'Élections législatives 2019',
        chamber: 'Nationalrat',
        date: '2019-09-29',
        seats: 31,
        totalSeats: 183,
        votePercent: 16.17,
        source: {
          name: "Wikipedia — 2019 Austrian legislative election",
          url: 'https://en.wikipedia.org/wiki/2019_Austrian_legislative_election',
          accessedOn: '2026-09-15',
          note: "Une version antérieure de cette fiche indiquait 30 sièges : le FPÖ en a obtenu 31, chiffre confirmé par l'article sur le scrutin de 2024, qui décrit un gain de 26 sièges pour atteindre 57. Chute de près de dix points après l'affaire d'Ibiza.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 6,
      totalCountryMeps: 20,
      europeanGroup: 'Patriotes pour l\'Europe (PfE)',
      source: {
        name: "Parlement européen — résultats des élections européennes 2024, Autriche",
        url: "https://results.elections.europa.eu/en/national-results/austria/2024-2029/",
        accessedOn: '2026-10-21',

      },
    },
    localImplantation: {
      summary:
        "Partenaire de coalitions régionales en Basse-Autriche et à Salzbourg depuis 2023, mais sans détenir la présidence d'aucun Land — contrairement aux années 2000, où le parti dirigeait la Carinthie sous Jörg Haider.",
      source: {
        name: 'Der Standard',
        url: 'https://www.derstandard.at',
        accessedOn: '2026-09-09',
      },
    },
    founded: 1956,
    description:
      'Fondé en 1956, en partie par d\'anciens membres du parti nazi et du VdU. Dirigé par Herbert Kickl depuis 2021.',
  },
  {
    slug: 'vox',
    name: 'Vox',
    countryCode: 'ES',
    positioning: 'National-conservateur, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "33 députés sur 350 au Congreso de los Diputados, quatrième force politique du pays, dans l'opposition depuis sa création au niveau national. A rompu ses pactes de gouvernement régionaux avec le Parti populaire (PP) en juillet 2024 sur la question de l'accueil des mineurs étrangers non accompagnés, mais a depuis progressé dans quatre scrutins régionaux successifs (Estrémadure, Aragon, Castille-et-León, Andalousie, décembre 2025 - mai 2026), redevenant l'arbitre de plusieurs gouvernements régionaux du PP.",
    electoralStatusSource: {
      name: 'Congreso de los Diputados',
      url: 'https://en.wikipedia.org/wiki/Vox_(political_party)',
      accessedOn: '2026-08-18',
    },
    officialWebsite: 'https://www.voxespana.es',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/vox_es' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Vox » (Espagne)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'remigration',
      source: {
        name: "Euronews — Vox propone deportar de manera masiva a millones de inmigrantes",
        url: 'https://es.euronews.com/my-europe/2025/07/08/vox-propone-de-manera-abierta-deportar-de-manera-masiva-a-millones-de-inmigrantes',
        accessedOn: '2026-10-05',
        note: "Le 8 juillet 2025, les députés Rocío de Meer et Samuel Vázquez ont présenté en conférence de presse du parti un projet de « remigración » visant « plus de sept millions » de personnes, descendants nés en Espagne compris. Santiago Abascal a ensuite contesté ce chiffre et restreint la proposition aux personnes en situation irrégulière, aux délinquants et à ceux qui « veulent imposer une religion étrangère ». Tag appliqué selon la règle de la méthodologie (terme employé par le parti ou ses dirigeants), le désaveu partiel du président du parti étant mentionné ici.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Congreso de los Diputados — données ouvertes, propositions de loi de la XVe législature",
        url: "https://www.congreso.es/es/opendata/iniciativas",
        accessedOn: '2026-10-20',
        note: "Parti d'opposition au niveau national. Aucune des 48 propositions de loi de son groupe au Congreso depuis 2023 n'a abouti : elles ont été rejetées ou sont devenues caduques, dont une réforme de la nationalité (rejetée le 15 octobre 2024) et une modification de la loi sur les étrangers pour restreindre la régularisation (rejetée le 16 septembre 2025). En avril 2026, il a déposé une motion « Prioridad nacional », texte non contraignant.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections générales 2023',
        chamber: 'Congreso de los Diputados',
        date: '2023-07-23',
        seats: 33,
        totalSeats: 350,
        votePercent: 12.4,
        source: {
          name: "Wikipedia — 2023 Spanish general election",
          url: 'https://en.wikipedia.org/wiki/2023_Spanish_general_election',
          accessedOn: '2026-09-15',
        },
      },
      {
        label: 'Élections générales de novembre 2019',
        chamber: 'Congreso de los Diputados',
        date: '2019-11-10',
        seats: 52,
        totalSeats: 350,
        votePercent: 15.1,
        source: {
          name: "Wikipedia — November 2019 Spanish general election",
          url: 'https://en.wikipedia.org/wiki/November_2019_Spanish_general_election',
          accessedOn: '2026-09-15',
          note: "Gain de 28 sièges par rapport au scrutin d’avril de la même année.",
        },
      },
      {
        label: 'Élections régionales d\'Andalousie 2026',
        chamber: 'Parlamento de Andalucía',
        date: '2026-05-17',
        seats: 15,
        totalSeats: 109,
        votePercent: 13.8,
        source: {
          name: 'Wikipedia — 2026 Andalusian regional election',
          url: 'https://en.wikipedia.org/wiki/2026_Andalusian_regional_election',
          accessedOn: '2026-09-10',
          note: "Le PP conserve la présidence de la région (Juanma Moreno) mais perd sa majorité absolue et dépend désormais de Vox pour gouverner.",
        },
      },
      {
        label: 'Élections régionales de Castille-et-León 2026',
        chamber: 'Cortes de Castilla y León',
        date: '2026-03-15',
        seats: 14,
        totalSeats: 82,
        votePercent: 18.89,
        source: {
          name: 'Wikipedia — 2026 Castilian-Leonese regional election',
          url: 'https://en.wikipedia.org/wiki/2026_Castilian-Leonese_regional_election',
          accessedOn: '2026-09-10',
        },
      },
      {
        label: 'Élections régionales d\'Aragon 2026',
        chamber: 'Cortes de Aragón',
        date: '2026-02-08',
        seats: 14,
        totalSeats: 67,
        votePercent: 17.85,
        source: {
          name: 'Wikipedia — 2026 Aragonese regional election',
          url: 'https://en.wikipedia.org/wiki/2026_Aragonese_regional_election',
          accessedOn: '2026-09-10',
        },
      },
      {
        label: 'Élections régionales d\'Estrémadure 2025',
        chamber: 'Asamblea de Extremadura',
        date: '2025-12-21',
        seats: 11,
        totalSeats: 65,
        votePercent: 16.9,
        source: {
          name: 'Wikipedia — 2025 Extremaduran regional election',
          url: 'https://en.wikipedia.org/wiki/2025_Extremaduran_regional_election',
          accessedOn: '2026-09-10',
          note: "Gain de 6 sièges, ouvrant la série de scrutins régionaux qui ont marqué le début de l'année 2026 en Espagne.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 6,
      totalCountryMeps: 61,
      europeanGroup: 'Patriotes pour l\'Europe (PfE)',
      source: {
        name: "Parlement européen — résultats des élections européennes 2024, Espagne",
        url: "https://results.elections.europa.eu/en/national-results/spain/2024-2029/",
        accessedOn: '2026-10-21',

      },
    },
    localImplantation: {
      summary:
        "Sans présidence régionale propre, Vox a obtenu des postes ministériels (« consejerías ») au sein de gouvernements régionaux de coalition avec le PP, dont la Castille-et-León depuis 2022 et, jusqu'à leur rupture de juillet 2024, plusieurs autres communautés autonomes sur la question de l'accueil des mineurs étrangers non accompagnés.",
      source: {
        name: 'El País',
        url: 'https://elpais.com',
        accessedOn: '2026-09-09',
      },
    },
    founded: 2013,
    description:
      "Fondé en 2013 par des dissidents du Parti populaire (PP), dont Santiago Abascal, qui préside le parti depuis sa création.",
  },
  {
    slug: 'se-acabo-la-fiesta',
    name: 'Se Acabó La Fiesta (SALF)',
    countryCode: 'ES',
    positioning: 'National-populiste, droite radicale',
    electoralStatus: 'extra-parlementaire',
    electoralStatusDetail:
      "Créé en 2024 par la personnalité des réseaux sociaux Luis « Alvise » Pérez comme simple groupement électoral pour les européennes de juin 2024, où il obtient 3 sièges. Formellement enregistré comme parti politique le 31 janvier 2025 puis officiellement lancé comme force nationale le 12 octobre 2025 ; ne s'est pas encore présenté à des élections législatives espagnoles et ne siège donc pas au Congreso de los Diputados.",
    electoralStatusSource: {
      name: 'France 24 — Spanish social media star launches new far-right party',
      url: 'https://www.france24.com/en/live-news/20251012-spanish-social-media-star-launches-new-far-right-party',
      accessedOn: '2026-09-09',
    },
    officialWebsite: 'https://www.seacabolafiesta.com',
    socialAccounts: [
    ],
    classificationSource: {
      name: 'Wikipedia / presse espagnole',
      url: 'https://en.wikipedia.org/wiki/Se_Acab%C3%B3_La_Fiesta',
      accessedOn: '2026-10-20',
      note: "Décrit comme un parti de droite à extrême droite ; idéologie : nationalisme espagnol, populisme de droite, euroscepticisme. Le parti se présente comme anti-corruption et anti-establishment. Absent de The PopuList 4.0.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Euronews — Alvise Pérez, the Spanish outsider',
        url: 'https://www.euronews.com/2024/05/29/alvise-perez-the-spanish-outsider-wanting-to-capture-discontent-in-the-european-elections',
        unverified: "la source citée (Euronews, 29 mai 2024) ne mentionne pas le plan d'expulsion attribué au parti",
        note: "Position migratoire à documenter.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Congreso de los Diputados — données ouvertes, propositions de loi de la XVe législature",
        url: "https://www.congreso.es/es/opendata/iniciativas",
        accessedOn: '2026-10-20',
        note: "Parti sans député au Congreso : aucune proposition de loi à son nom dans le registre de la législature ouverte en 2023.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections européennes 2024',
        chamber: 'Parlement européen (liste espagnole)',
        date: '2024-06-09',
        seats: 3,
        totalSeats: 61,
        votePercent: 4.6,
        source: {
          name: 'Wikipedia — 2024 European Parliament election in Spain',
          url: 'https://en.wikipedia.org/wiki/2024_European_Parliament_election_in_Spain',
          accessedOn: '2026-09-09',
          note: "Groupement électoral créé quelques semaines avant le scrutin, sixième force du pays.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 1,
      totalCountryMeps: 61,
      source: {
        name: 'Wikipedia — Alvise Pérez',
        url: 'https://en.wikipedia.org/wiki/Alvise_P%C3%A9rez',
        accessedOn: '2026-09-09',
        note: "Sur les 3 élus initiaux, 2 (Nora Junco et Diego Solier) ont quitté le parti en 2025 après un conflit avec Alvise Pérez pour rejoindre le groupe ECR ; Alvise Pérez lui-même siège comme non-inscrit, le groupe ECR ayant quitté celui auquel le parti était initialement rattaché.",
      },
    },
    founded: 2024,
    description:
      "Fondé en 2024 par Luis « Alvise » Pérez, personnalité des réseaux sociaux, d'abord comme simple liste électorale pour les européennes avant de se structurer en parti politique national en 2025.",
  },
  {
    slug: 'fidesz',
    name: 'Fidesz – Magyar Polgári Szövetség',
    countryCode: 'HU',
    positioning: 'National-conservateur, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Défaite aux élections législatives du 12 avril 2026 : après 16 ans au pouvoir et quatre victoires consécutives à la majorité des deux tiers, l'alliance Fidesz-KDNP de Viktor Orbán tombe à 52 sièges sur 199 (38,61% des voix de liste) face au parti Tisza de Péter Magyar, qui en obtient 141 (53,18%) — soit à son tour une majorité des deux tiers, suffisante pour réviser la Constitution. Orbán a concédé sa défaite le soir même. Participation de 78,99%, la plus forte depuis la transition démocratique de 1990. Fidesz est désormais dans l'opposition.",
    electoralStatusSource: {
      name: 'Wikipedia — 2026 Hungarian parliamentary election',
      url: 'https://en.wikipedia.org/wiki/2026_Hungarian_parliamentary_election',
      accessedOn: '2026-09-15',
      note: "Chiffres définitifs. Une version antérieure de cette fiche indiquait 55 sièges et 37%, estimations de soir de scrutin reprises d'un direct de presse et corrigées depuis.",
    },
    officialWebsite: 'https://fidesz.hu',
    socialAccounts: [
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Fidesz » (Hongrie)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste depuis 2002 et d'extrême droite depuis 2010. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'HVG',
        url: 'https://hvg.hu/itthon/20260110_a-biztos-valasztas-ez-lett-orbanek-valasztasi-jelszava-eloben-a-fidesz-jeloltbemutato-kongresszusarol',
        unverified: "lien mort le 2026-10-20",
        note: "Position migratoire à documenter par une source accessible.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: 'mfor.hu',
        url: 'https://mfor.hu/cikkek/kozelet/dontott-a-kormany-a-hetfon-lejaro-migracios-valsaghelyzetrol.html',
        accessedOn: '2026-10-20',
        note: "L'état de crise lié à l'immigration de masse instauré sous les gouvernements Orbán reste en vigueur : le gouvernement Tisza l'a prolongé jusqu'au 31 décembre 2026 (mfor.hu, 5 septembre 2026).",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2026',
        chamber: 'Országgyűlés (Assemblée nationale)',
        date: '2026-04-12',
        seats: 52,
        totalSeats: 199,
        votePercent: 38.61,
        source: {
          name: 'Wikipedia — 2026 Hungarian parliamentary election',
          url: 'https://en.wikipedia.org/wiki/2026_Hungarian_parliamentary_election',
          accessedOn: '2026-09-15',
          note: "Perte de plus de 80 sièges par rapport à 2022. Le parti progresse pourtant en pourcentage de voix de liste : c'est la coalition d'opposition unifiée autour de Tisza qui fait basculer la quasi-totalité des circonscriptions uninominales.",
        },
      },
      {
        label: 'Élections législatives 2022',
        chamber: 'Országgyűlés (Assemblée nationale)',
        date: '2022-04-03',
        seats: 135,
        totalSeats: 199,
        votePercent: 54.13,
        source: {
          name: "Wikipedia — 2022 Hungarian parliamentary election",
          url: 'https://en.wikipedia.org/wiki/2022_Hungarian_parliamentary_election',
          accessedOn: '2026-09-15',
          note: "Part de voix la plus élevée obtenue par un parti hongrois depuis 1989.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 11,
      totalCountryMeps: 21,
      europeanGroup: "Patriotes pour l'Europe (PfE)",
      source: {
        name: "Parlement européen — résultats des élections européennes 2024, Hongrie",
        url: "https://results.elections.europa.eu/en/national-results/hungary/2024-2029/",
        accessedOn: '2026-10-21',
        note: "Sièges de la liste commune Fidesz-KDNP.",

      },
    },
    localImplantation: {
      summary:
        "Longtemps dominant dans la quasi-totalité des municipalités hongroises, le Fidesz a perdu Budapest dès 2019 puis l'a reperdue en 2024 face à l'opposition ; son maillage local reste toutefois le plus dense du pays en zone rurale.",
      source: {
        name: 'HVG',
        url: 'https://hvg.hu',
        accessedOn: '2026-09-09',
      },
    },
    founded: 1988,
    description:
      "Fondé en 1988 comme mouvement libéral anti-communiste, réorienté vers le national-conservatisme sous la direction de Viktor Orbán à partir des années 1990. Premier ministre de 2010 à 2026.",
  },
  {
    slug: 'mi-hazank',
    name: 'Mi Hazánk Mozgalom (Notre Patrie)',
    countryCode: 'HU',
    positioning: 'Extrême droite, ultranationaliste',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Six sièges à l'Országgyűlés, un score stable entre les élections de 2022 et celles d'avril 2026 (5,6 à 5,9 % des voix selon le mode de scrutin). Décrit par les observateurs comme le parti le plus radical à entrer au Parlement hongrois depuis la Seconde Guerre mondiale. Troisième force parlementaire depuis 2026, loin derrière Tisza (141 sièges) et le Fidesz (52 sièges), sans participation gouvernementale.",
    electoralStatusSource: {
      name: 'Wikipedia — 2026 Hungarian parliamentary election',
      url: 'https://en.wikipedia.org/wiki/2026_Hungarian_parliamentary_election',
      accessedOn: '2026-10-21',
    },
    officialWebsite: 'https://mihazank.hu',
    socialAccounts: [
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Mi Hazánk Mozgalom » (Hongrie)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé d'extrême droite ; non codé populiste. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Budapest Times — Migration clash erupts over EU pact in parliament',
        url: 'https://www.budapesttimes.hu/hungary/migration-clash-erupts-over-eu-pact-in-parliament/',
        accessedOn: '2026-10-20',
        note: "Son président László Toroczkai a attaqué au Parlement la politique migratoire du gouvernement Tisza (Budapest Times, 31 mai 2026). Le programme migratoire du parti reste à documenter.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Országgyűlés — recherche dans les documents parlementaires (irományok)",
        url: "https://www.parlament.hu/web/guest/iromanyok-egyszerusitett-lekerdezese",
        unverified: "registre de l'Országgyűlés non exploitable (recherche par formulaire) le 2026-10-20",
        note: "Parti d'opposition sans participation gouvernementale. Statut à vérifier : le registre de l'Országgyűlés, qui ne s'interroge que par formulaire, n'a pas pu être exploité le 20 octobre 2026.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2026',
        chamber: 'Országgyűlés',
        date: '2026-04-12',
        seats: 6,
        totalSeats: 199,
        votePercent: 5.63,
        source: {
          name: 'Wikipedia — 2026 Hungarian parliamentary election',
          url: 'https://en.wikipedia.org/wiki/2026_Hungarian_parliamentary_election',
          accessedOn: '2026-09-10',
        },
      },
      {
        label: 'Élections législatives 2022',
        chamber: 'Országgyűlés',
        date: '2022-04-03',
        seats: 6,
        totalSeats: 199,
        votePercent: 5.88,
        source: {
          name: 'Wikipedia — 2022 Hungarian parliamentary election',
          url: 'https://en.wikipedia.org/wiki/2022_Hungarian_parliamentary_election',
          accessedOn: '2026-10-21',
          note: 'Première entrée au Parlement : 6 sièges et 5,88 % des voix de liste, troisième force derrière le Fidesz-KDNP et l\'alliance d\'opposition.',
        },
      },
    ],
    europeanRepresentation: {
      meps: 1,
      totalCountryMeps: 21,
      europeanGroup: 'Europe des nations souveraines (ESN)',
      source: {
        name: 'Wikipedia — 2024 European Parliament election in Hungary',
        url: 'https://en.wikipedia.org/wiki/2024_European_Parliament_election_in_Hungary',
        accessedOn: '2026-09-10',
        note: "Première entrée du parti au Parlement européen, László Toroczkai ayant lui-même été élu.",
      },
    },
    founded: 2018,
    description:
      "Fondé en 2018 par László Toroczkai, maire d'Ásotthalom et ancien vice-président du Jobbik, après sa rupture avec ce dernier qu'il jugeait en voie de normalisation. Réunit d'anciens cadres du Jobbik et de la Garde hongroise (Magyar Gárda), milice paramilitaire dissoute par la justice en 2009.",
  },
  {
    slug: 'perussuomalaiset',
    name: 'Perussuomalaiset (Finns Party / PS)',
    countryCode: 'FI',
    positioning: 'National-conservateur, droite radicale',
    electoralStatus: 'pouvoir',
    electoralStatusDetail:
      "Membre de la coalition gouvernementale du Premier ministre Petteri Orpo depuis 2023. La présidente du parti, Riikka Purra, est vice-Première ministre et ministre des Finances. 46 sièges sur 200 à l'Eduskunta.",
    electoralStatusSource: {
      name: 'Eduskunta',
      url: 'https://fi.wikipedia.org/wiki/Perussuomalaiset',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://www.perussuomalaiset.fi',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/persut' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Suomen Maaseudun Puolue | Perussuomalaiset » (Finlande)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite (cas limite avant 2017). Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Perussuomalaiset.fi',
        url: 'https://www.perussuomalaiset.fi/maahanmuuttopolitiikka/',
        accessedOn: '2026-10-20',
        note: "Le parti revendique le passage d'une politique migratoire « naïve » à une ligne « restrictive » : durcissement des conditions du regroupement familial, frais de scolarité complets pour les étudiants hors UE/EEE, éloignement plus efficace des personnes sans droit au séjour.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: "Migri — Longer period of residence required for citizenship as of 1 October 2024",
        url: "https://migri.fi/en/-/longer-period-of-residence-required-for-citizenship-as-of-1-october-2024",
        accessedOn: '2026-10-21',
        note: "Réforme de la loi sur la nationalité adoptée sous le gouvernement Orpo, dont le parti est membre : durée de résidence requise portée à huit ans en règle générale à partir du 1er octobre 2024. Les étapes suivantes de la réforme sont en cours.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2023',
        chamber: 'Eduskunta',
        date: '2023-04-02',
        seats: 46,
        totalSeats: 200,
        votePercent: 20.1,
        source: {
          name: 'Ministère de la Justice finlandais — vaalit.fi',
          url: 'https://tulospalvelu.vaalit.fi/EKV-2023/',
          accessedOn: '2026-09-09',
        },
      },
      {
        label: 'Élections législatives 2019',
        chamber: 'Eduskunta',
        date: '2019-04-14',
        seats: 39,
        totalSeats: 200,
        votePercent: 17.48,
        source: {
          name: "Wikipedia — 2019 Finnish parliamentary election",
          url: 'https://en.wikipedia.org/wiki/2019_Finnish_parliamentary_election',
          accessedOn: '2026-09-15',
        },
      },
    ],
    europeanRepresentation: {
      meps: 1,
      totalCountryMeps: 15,
      europeanGroup: 'Conservateurs et réformistes européens (ECR)',
      source: {
        name: "Parlement européen — résultats des élections européennes 2024, Finlande",
        url: "https://results.elections.europa.eu/en/national-results/finland/2024-2029/",
        accessedOn: '2026-10-21',

      },
    },
    localImplantation: {
      summary:
        "Devenu, lors des élections municipales de 2021, le premier ou deuxième parti dans de nombreuses communes d'Ostrobotnie et de la région d'Helsinki, avec plusieurs centaines de conseillers municipaux élus à l'échelle du pays.",
      source: {
        name: 'Yle',
        url: 'https://yle.fi',
        accessedOn: '2026-09-09',
      },
    },
    founded: 1995,
    description:
      "Fondé en 1995 dans la continuité du Parti rural finlandais. Dirigé par Riikka Purra depuis 2021.",
  },
  {
    slug: 'vlaams-belang',
    name: 'Vlaams Belang',
    countryCode: 'BE',
    positioning: 'National-populiste, droite radicale, indépendantiste flamand',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Deuxième parti de Belgique en sièges mais maintenu dans l'opposition au niveau fédéral par le « cordon sanitaire » (refus de coalition de tous les autres partis). Influence indirecte forte sur l'orientation des politiques migratoires des gouvernements successifs.",
    electoralStatusSource: {
      name: 'Sampol.be',
      url: 'https://www.sampol.be/2024/06/naar-een-nieuw-normaal-over-migratie-onder-invloed-van-vlaams-belang',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://www.vlaamsbelang.org',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/vlbelang' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Vlaams Belang » (Belgique)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'remigration',
      source: {
        name: "Wikipedia — Vlaams Belang",
        url: 'https://en.wikipedia.org/wiki/Vlaams_Belang',
        accessedOn: '2026-10-05',
        note: "Le parti a réclamé en 2021 la création d'une « Agence pour la remigration ». Usage explicite du terme par le parti — critère central de la méthodologie de ce site. Son programme courant met l'accent sur une « stratégie de retour massive » des personnes en situation irrégulière.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Vlaams Belang",
        url: 'https://www.vlaamsbelang.org/nieuws/vlaams-belang-lanceert-resolutie-voor-een-massale-terugkeerstrategie-van-illegale-migranten',
        unverified: "site du parti et registre de la Chambre inaccessibles le 2026-10-20",
        note: "Le parti est tenu à l'écart des coalitions par le « cordon sanitaire ». La résolution pour une stratégie de retour, déposée au Parlement européen et citée jusqu'ici, n'a pas pu être revérifiée.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections fédérales 2024',
        chamber: 'Chambre des représentants',
        date: '2024-06-09',
        seats: 20,
        totalSeats: 150,
        votePercent: 13.77,
        source: {
          name: "Wikipedia — 2024 Belgian federal election",
          url: 'https://en.wikipedia.org/wiki/2024_Belgian_federal_election',
          accessedOn: '2026-09-15',
        },
      },
      {
        label: 'Élections fédérales 2019',
        chamber: 'Chambre des représentants',
        date: '2019-05-26',
        seats: 18,
        totalSeats: 150,
        votePercent: 11.95,
        source: {
          name: "Wikipedia — 2019 Belgian federal election",
          url: 'https://en.wikipedia.org/wiki/2019_Belgian_federal_election',
          accessedOn: '2026-09-15',
          note: "Gain de 15 sièges par rapport à 2014, avec 19,05% des voix côté flamand.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 3,
      totalCountryMeps: 22,
      europeanGroup: "Patriotes pour l'Europe (PfE)",
      source: {
        name: "Parlement européen — résultats des élections européennes 2024, Belgique",
        url: "https://results.elections.europa.eu/en/national-results/belgium/2024-2029/",
        accessedOn: '2026-10-21',

      },
    },
    localImplantation: {
      summary:
        "Premier ou deuxième parti dans plusieurs grandes villes flamandes dont Anvers, mais sans détenir un seul mandat de bourgmestre : le cordon sanitaire exclut systématiquement le parti de toute coalition communale, quel que soit son score.",
      source: {
        name: 'VRT NWS',
        url: 'https://www.vrt.be/vrtnws/',
        accessedOn: '2026-09-09',
      },
    },
    founded: 2004,
    description:
      "Fondé en 2004 en remplacement du Vlaams Blok, dissous par la justice belge pour infraction aux lois anti-racisme. Dirigé par Tom Van Grieken depuis 2014.",
  },
  {
    slug: 'udc-svp',
    name: 'Union démocratique du centre (UDC / SVP)',
    countryCode: 'CH',
    positioning: 'National-conservateur, droite radicale',
    electoralStatus: 'pouvoir',
    electoralStatusDetail:
      "Premier parti de Suisse en sièges à l'Assemblée fédérale. Détient 2 des 7 sièges du Conseil fédéral (gouvernement collégial permanent réparti entre partis selon la « formule magique ») : Guy Parmelin (président de la Confédération en 2026) et Albert Rösti. Contrairement aux autres pays de ce site, la Suisse ne connaît pas d'alternance gouvernement/opposition classique : les grands partis siègent en permanence à l'exécutif.",
    electoralStatusSource: {
      name: 'Conseil fédéral — admin.ch',
      url: 'https://www.admin.ch/de/bundesrat-mitglieder',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://www.svp.ch',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/SVPch' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Schweizerische Volkspartei » (Suisse)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: "UDC/SVP — Parteiprogramm 2023 bis 2027, chapitre « Ausländerpolitik »",
        url: 'https://www.svp.ch/wp-content/uploads/230523_Parteiprogramm.pdf',
        accessedOn: '2026-10-20',
        note: "Le programme demande l'application conséquente de l'article constitutionnel issu de l'initiative contre l'immigration de masse, pour que la Suisse décide elle-même qui peut immigrer et en quel nombre, et juge démesurée l'arrivée de 1,5 million d'immigrés en vingt ans. Le terme « Remigration » n'y figure pas.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: "Swissvotes (Université de Berne) — votation n° 580, initiative populaire « Contre l'immigration de masse »",
        url: 'https://swissvotes.ch/vote/580.00',
        accessedOn: '2026-10-20',
        note: "Initiative lancée par l'UDC, acceptée le 9 février 2014 par 50,3 % des votants et une majorité de cantons. Elle inscrit à l'article 121a de la Constitution des plafonds et contingents annuels d'immigration. Le Parlement l'a mise en œuvre en décembre 2016 sans contingents, par l'obligation d'annoncer les postes vacants aux offices de l'emploi dans les secteurs à fort chômage (swissinfo, 16 juin 2017 : https://www.swissinfo.ch/eng/politics/domestic-and-foreign-labour_cabinet-sets-details-for-hiring-preference-rules/43258282).",
      },
    },
    electoralHistory: [
      {
        label: 'Élections fédérales 2023',
        chamber: 'Conseil national',
        date: '2023-10-22',
        seats: 62,
        totalSeats: 200,
        votePercent: 27.9,
        source: {
          name: 'Wikipedia — 2023 Swiss federal election',
          url: 'https://en.wikipedia.org/wiki/2023_Swiss_federal_election',
          accessedOn: '2026-10-21',
          note: "En hausse par rapport à 2019 (25,6 %).",
        },
      },
      {
        label: 'Élections fédérales 2019',
        chamber: 'Conseil national',
        date: '2019-10-20',
        seats: 53,
        totalSeats: 200,
        votePercent: 25.59,
        source: {
          name: "Wikipedia — 2019 Swiss federal election",
          url: 'https://en.wikipedia.org/wiki/2019_Swiss_federal_election',
          accessedOn: '2026-09-15',
          note: "Recul de 12 sièges par rapport à 2015, le parti restant néanmoins le premier du Conseil national.",
        },
      },
    ],
    localImplantation: {
      summary:
        "Premier parti dans la plupart des gouvernements cantonaux (Regierungsrat/Staatsrat), avec une représentation particulièrement forte en Suisse alémanique ; siège en permanence au Conseil fédéral depuis 1929 (2 sièges sur 7 depuis 2003).",
      source: {
        name: 'Chancellerie fédérale — admin.ch',
        url: 'https://www.admin.ch',
        accessedOn: '2026-09-09',
      },
    },
    founded: 1971,
    description:
      "Fondé en 1971 par fusion de partis agrariens et bourgeois cantonaux, réorienté vers le national-conservatisme à partir des années 1990 sous l'impulsion de Christoph Blocher.",
  },
  {
    slug: 'chega',
    name: 'Chega',
    countryCode: 'PT',
    positioning: 'National-populiste, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Deuxième force politique du pays, devançant le Parti socialiste (PS) après les élections législatives anticipées de mai 2025 consécutives à la chute du gouvernement. André Ventura est chef de l'opposition depuis le 3 juin 2025. Le gouvernement est dirigé par l'Alliance Démocratique (AD, centre-droit) de Luís Montenegro. En 2026, Ventura a porté Chega au second tour de l'élection présidentielle — une première pour l'extrême droite portugaise depuis la Révolution des Œillets : 23,5% le 18 janvier, puis 33,16% le 8 février face au socialiste António José Seguro (66,84%), qui devient le candidat le plus voté de l'histoire électorale portugaise.",
    electoralStatusSource: {
      name: 'Al Jazeera — Portugal votes in first presidential run-off in 40 years',
      url: 'https://www.aljazeera.com/news/2026/2/8/polls-open-in-second-round-of-portugal-presidential-election',
      accessedOn: '2026-09-13',
      note: "Statut de chef de l'opposition documenté par le Diário de Notícias (https://www.dn.pt). Deuxième second tour présidentiel seulement de l'histoire portugaise, après celui de 1986.",
    },
    officialWebsite: 'https://partidochega.pt',
    socialAccounts: [
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Chega » (Portugal)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'remigration',
      source: {
        name: "Diário de Notícias — Aproximação do Chega ao grupo Reconquista leva tema da remigração ao Parlamento",
        url: 'https://www.dn.pt/sociedade/aproximao-do-chega-ao-grupo-reconquista-leva-tema-da-remigrao-ao-parlamento',
        accessedOn: '2026-10-20',
        note: "Chega a inscrit un « Programme national de remigration » (Programa Nacional de Remigração), prévoyant une unité nationale d'exécution forcée, parmi ses propositions pour le budget de l'État 2026 (article du 21 novembre 2025). Le député Ricardo Reis a défendu la remigration au Parlement le 7 novembre 2025. Usage explicite du terme par le parti — critère central de la méthodologie de ce site.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Diário da Cidadania',
        url: 'https://diariodacidadania.com/2025/04/24/com-foco-em-imigracao-chega-apresenta-propostas-polemicas-para-residencia-e-nacionalidade/',
        accessedOn: '2026-10-20',
        note: "Programme présenté le 23 avril 2025 : abrogation de l'accord de mobilité de la CPLP, accès à la nationalité réservé aux personnes ayant un lien réel avec le Portugal, contrat de travail exigé à l'entrée, cinq ans de résidence légale pour certaines prestations, expulsion des immigrés incapables de subvenir à leurs besoins, délit de séjour irrégulier. Statut à vérifier : le registre de l'Assemblée de la République n'a pas pu être consulté le 20 octobre 2026.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives anticipées 2025',
        chamber: 'Assembleia da República',
        date: '2025-05-18',
        seats: 60,
        totalSeats: 230,
        votePercent: 22.8,
        source: {
          name: 'CNN — Portugal ruling alliance wins election, far-right makes record gains',
          url: 'https://www.cnn.com/2025/05/19/europe/portugals-ruling-center-right-alliance-wins-election-intl',
          accessedOn: '2026-09-09',
          note: "Devance le Parti socialiste (58 sièges) grâce au système électoral, malgré un nombre de voix inférieur à celui du PS dans le décompte national.",
        },
      },
      {
        label: 'Élections législatives 2024',
        chamber: 'Assembleia da República',
        date: '2024-03-10',
        seats: 50,
        totalSeats: 230,
        votePercent: 18.1,
        source: {
          name: "Wikipedia — 2024 Portuguese legislative election",
          url: 'https://en.wikipedia.org/wiki/2024_Portuguese_legislative_election',
          accessedOn: '2026-09-15',
          note: "Le parti plus que quadruple son nombre de sièges et devient la troisième force du Parlement.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 2,
      totalCountryMeps: 21,
      europeanGroup: "Patriotes pour l'Europe (PfE)",
      source: {
        name: "Parlement européen — résultats des élections européennes 2024, Portugal",
        url: "https://results.elections.europa.eu/en/national-results/portugal/2024-2029/",
        accessedOn: '2026-10-21',

      },
    },
    localImplantation: {
      summary:
        "Implantation locale encore limitée : le parti n'a remporté aucune mairie lors des élections municipales de 2025, mais a fait élire plusieurs centaines d'élus locaux et progresse rapidement dans les grandes agglomérations.",
      source: {
        name: 'Diário de Notícias',
        url: 'https://www.dn.pt',
        accessedOn: '2026-09-09',
      },
    },
    founded: 2019,
    description:
      "Fondé en 2019 par André Ventura, ancien commentateur sportif et membre du PSD. Quatrième, puis deuxième force politique du pays en l'espace de six ans.",
  },
  {
    slug: 'pis',
    name: 'Prawo i Sprawiedliwość (PiS — Droit et Justice)',
    countryCode: 'PL',
    positioning: 'National-conservateur, populiste de droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Premier parti d'opposition avec 194 sièges sur 460 à la Diète (Sejm), après huit années de pouvoir ininterrompu (2015-2023) closes par la victoire de la coalition de Donald Tusk. Le parti conserve un levier institutionnel majeur : Karol Nawrocki, élu président de la République en juin 2025 avec son soutien, oppose son veto aux textes du gouvernement.",
    electoralStatusSource: {
      name: 'Wikipedia — 2023 Polish parliamentary election',
      url: 'https://en.wikipedia.org/wiki/2023_Polish_parliamentary_election',
      accessedOn: '2026-09-13',
    },
    officialWebsite: 'https://pis.org.pl',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/pisorgpl' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Prawo i Sprawiedliwosc » (Pologne)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste depuis 2005 (cas limite avant 2015) et d'extrême droite depuis 2005 (cas limite avant 2015). Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Wikipedia — 2023 Polish referendum',
        url: 'https://en.wikipedia.org/wiki/2023_Polish_referendum',
        accessedOn: '2026-10-20',
        note: "Le gouvernement PiS a organisé le 15 octobre 2023 un référendum demandant notamment : « Soutenez-vous l'admission de milliers d'immigrés illégaux du Moyen-Orient et d'Afrique […] ? »",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: "Sejm — ustawa z dnia 29 października 2021 r. o budowie zabezpieczenia granicy państwowej (registre ELI)",
        url: "https://api.sejm.gov.pl/eli/acts/DU/2021/1992",
        accessedOn: '2026-10-21',
        note: "Loi du 29 octobre 2021, adoptée sous le gouvernement PiS, sur la construction de la barrière à la frontière biélorusse, toujours en vigueur selon le registre ELI du Sejm. Le mur de 186 km et 5,5 m de haut a été achevé le 30 juin 2022 (Euronews : https://www.euronews.com/2022/06/30/poland-completes-186-kilometre-border-wall-with-belarus-after-migration-dispute).",
      },
    },
    actionStatusHistory: [
      {
        date: '2023-10-15',
        tag: 'mesures_concretes',
        note: "Référendum sur la relocalisation des migrants organisé le jour des législatives : invalidé faute de quorum (40,91% de participation contre les 50% requis), l'opposition ayant appelé au boycott.",
        source: {
          name: 'Wikipedia — 2023 Polish referendum',
          url: 'https://en.wikipedia.org/wiki/2023_Polish_referendum',
          accessedOn: '2026-09-13',
        },
      },
      {
        date: '2022-06-30',
        tag: 'mesures_concretes',
        note: "Achèvement du mur frontalier avec la Biélorussie (186 km).",
        source: {
          name: 'Euronews',
          url: 'https://www.euronews.com/2022/06/30/poland-completes-186-kilometre-border-wall-with-belarus-after-migration-dispute',
          accessedOn: '2026-09-13',
        },
      },
    ],
    electoralHistory: [
      {
        label: 'Élections législatives 2023',
        chamber: 'Sejm',
        date: '2023-10-15',
        seats: 194,
        totalSeats: 460,
        votePercent: 35.38,
        source: {
          name: 'Wikipedia — 2023 Polish parliamentary election',
          url: 'https://en.wikipedia.org/wiki/2023_Polish_parliamentary_election',
          accessedOn: '2026-09-13',
          note: "Premier parti en sièges et en voix, mais privé de majorité : les trois listes d'opposition réunies forment le gouvernement Tusk. Participation : 72,9 %.",
        },
      },
      {
        label: 'Élections sénatoriales 2023',
        chamber: 'Sénat',
        date: '2023-10-15',
        seats: 34,
        totalSeats: 100,
        votePercent: 34.81,
        source: {
          name: 'Wikipedia — 2023 Polish parliamentary election',
          url: 'https://en.wikipedia.org/wiki/2023_Polish_parliamentary_election',
          accessedOn: '2026-09-13',
          note: 'Recul de 46 à 34 sièges par rapport à 2019.',
        },
      },
      {
        label: 'Élections législatives 2019',
        chamber: 'Sejm',
        date: '2019-10-13',
        seats: 235,
        totalSeats: 460,
        votePercent: 43.6,
        source: {
          name: 'Wikipedia — 2023 Polish parliamentary election',
          url: 'https://en.wikipedia.org/wiki/2023_Polish_parliamentary_election',
          accessedOn: '2026-09-13',
          note: 'Deuxième majorité absolue consécutive, après celle de 2015.',
        },
      },
    ],
    europeanRepresentation: {
      meps: 20,
      totalCountryMeps: 53,
      europeanGroup: 'Conservateurs et réformistes européens (ECR)',
      source: {
        name: 'Wikipedia — Law and Justice',
        url: 'https://en.wikipedia.org/wiki/Law_and_Justice',
        accessedOn: '2026-09-13',
        note: "Première délégation nationale du groupe ECR, qu'il co-dirige avec Fratelli d'Italia.",
      },
    },
    localImplantation: {
      summary:
        "Maillage territorial de premier plan : 239 sièges sur les 552 des assemblées régionales (sejmiks) aux élections locales d'avril 2024, avec 34,27% des voix au niveau national et la première place dans sept régions sur seize, principalement à l'est et au sud-est du pays. Le parti a toutefois perdu le contrôle de la plupart des exécutifs régionaux, faute d'alliés.",
      regionalCouncillors: 239,
      source: {
        name: 'TVP World — Regional assembly results in the Polish local elections of 2024',
        url: 'https://tvpworld.com/76871385/detailed-outline-of-regional-assembly-results-in-the-polish-local-elections-of-2024',
        accessedOn: '2026-09-13',
      },
    },
    founded: 2001,
    description:
      "Fondé le 13 juin 2001 par les frères Jarosław et Lech Kaczyński, et dirigé par Jarosław Kaczyński depuis 2003. Au pouvoir de 2015 à 2023, il a fait du refus des quotas européens de relocalisation puis de la fermeture de la frontière biélorusse l'un des axes centraux de son action, tout en ouvrant parallèlement le pays à une immigration de travail ukrainienne et asiatique de grande ampleur — une tension que ses concurrents de la Konfederacja lui reprochent régulièrement.",
  },
  {
    slug: 'konfederacja',
    name: 'Konfederacja',
    countryCode: 'PL',
    positioning: 'National-libertarien, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Groupe parlementaire à la Diète (Sejm) depuis 2019 (16 députés dans la législature ouverte en novembre 2023), dans l'opposition à la coalition gouvernementale menée par Donald Tusk (Koalicja Obywatelska) depuis octobre 2023. Krzysztof Bosak, coprésident du parti, est vice-maréchal (vice-président) de la Diète.",
    electoralStatusSource: {
      name: 'Sejm RP — Klub Poselski Konfederacja (10e législature), données ouvertes',
      url: 'https://api.sejm.gov.pl/sejm/term10/clubs/Konfederacja',
      accessedOn: '2026-10-21',
      note: 'Seize membres, dont Krzysztof Bosak. Fonction de vice-maréchal de la Diète : Wikipédia, https://en.wikipedia.org/wiki/Krzysztof_Bosak (consulté le 2026-10-21).',
    },
    officialWebsite: 'https://konfederacja.pl',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/KONFEDERACJA_' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Konfederacja Wolność i Niepodległość » (Pologne)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé d'extrême droite ; non codé populiste. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: "Sejm — impression n° 1043 (Xe législature)",
        url: "https://api.sejm.gov.pl/sejm/term10/prints/1043/1043.pdf",
        accessedOn: '2026-10-20',
        note: "Ses députés ont déposé le 6 février 2025 un projet de résolution contre la mise en œuvre du pacte européen sur la migration et l'asile.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Sejm — impression n° 1043 (Xe législature) : projet de résolution sur la non-mise en œuvre du pacte sur la migration et l'asile",
        url: 'https://api.sejm.gov.pl/sejm/term10/prints/1043/1043.pdf',
        accessedOn: '2026-10-20',
        note: "Projet de résolution déposé le 6 février 2025 par les députés de Konfederacja contre la mise en œuvre du pacte européen sur la migration et l'asile. Examiné avec deux autres projets, il a abouti le 9 juillet 2025 à une résolution non contraignante du Sejm « sur la politique migratoire et la protection de la frontière orientale » (M.P. 2025 poz. 683). Aucune proposition de loi migratoire déposée par des députés n'a été adoptée au cours de la législature ouverte en novembre 2023 (registre du Sejm : https://api.sejm.gov.pl/sejm/term10/processes?limit=5000).",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2023',
        chamber: 'Sejm',
        date: '2023-10-15',
        seats: 18,
        totalSeats: 460,
        votePercent: 7.16,
        source: {
          name: "Wikipedia — 2023 Polish parliamentary election",
          url: 'https://en.wikipedia.org/wiki/2023_Polish_parliamentary_election',
          accessedOn: '2026-09-15',
        },
      },
      {
        label: 'Élections législatives 2019',
        chamber: 'Sejm',
        date: '2019-10-13',
        seats: 11,
        totalSeats: 460,
        votePercent: 6.81,
        source: {
          name: "Wikipedia — 2019 Polish parliamentary election",
          url: 'https://en.wikipedia.org/wiki/2019_Polish_parliamentary_election',
          accessedOn: '2026-09-15',
          note: "Gain de 8 sièges par rapport au scrutin précédent.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 5,
      totalCountryMeps: 53,
      europeanGroup: "Éclatés entre plusieurs groupes : Europe des nations souveraines (ESN), Patriotes pour l'Europe (PfE) et non-inscrits, reflet des divisions internes du mouvement",
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Pologne',
        url: 'https://results.elections.europa.eu/en/national-results/poland/2024-2029/',
        accessedOn: '2026-09-09',
        note: "6 élus lors du scrutin de 2024 ; Grzegorz Braun, exclu de la Konfederacja début 2025, siège désormais séparément (voir fiche Konfederacja Korony Polskiej).",
      },
    },
    localImplantation: {
      summary:
        "Implantation locale encore modeste comparée à son poids national, avec des élus dans plusieurs assemblées régionales (sejmiki) depuis 2024 mais aucune présidence de voïvodie ni de grande ville.",
      source: {
        name: 'Polskie Radio',
        url: 'https://www.polskieradio.pl',
        accessedOn: '2026-09-09',
      },
    },
    founded: 2018,
    description:
      "Coalition électorale fondée en 2018, transformée en parti en 2023, réunissant des courants nationalistes (Ruch Narodowy) et libertariens (Nowa Nadzieja). Coprésidée par Krzysztof Bosak et Sławomir Mentzen.",
  },
  {
    slug: 'konfederacja-korony-polskiej',
    name: 'Konfederacja Korony Polskiej (KKP)',
    countryCode: 'PL',
    positioning: 'National-catholique, ultranationaliste, extrême droite',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Trois députés à la Diète depuis juin 2025 (dont un ancien député du PiS ayant fait défection en juin 2025), suffisant pour former un groupe parlementaire (koło) autonome — sans avoir remporté de siège lors d'une élection dédiée. Grzegorz Braun, président du parti, a terminé quatrième à l'élection présidentielle de mai 2025 avec 6,3% des voix, avant d'être exclu de la Konfederacja pour avoir maintenu sa candidature contre la ligne officielle du mouvement.",
    electoralStatusSource: {
      name: 'Notes from Poland — Polish far-right leader Braun again stripped of legal immunity',
      url: 'https://notesfrompoland.com/2025/11/13/polish-far-right-leader-braun-again-stripped-of-legal-immunity-by-european-parliament/',
      accessedOn: '2026-09-09',
    },
    officialWebsite: 'https://konfederacjakoronypolskiej.pl',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/GrzegorzBraun_', leader: 'Grzegorz Braun' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Konfederacja Korony Polskiej » (Pologne)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé d'extrême droite ; non codé populiste. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Wikipedia — Grzegorz Braun',
        url: 'https://en.wikipedia.org/wiki/Grzegorz_Braun',
        accessedOn: '2026-10-20',
        note: "Son président Grzegorz Braun prône la sortie de la Pologne de l'UE et la fin de « toute nouvelle immigration ukrainienne » ; il a mené une campagne « Stop à l'ukrainisation de la Pologne ».",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Sejm — registre des procédures législatives de la Xe législature (API officielle)",
        url: 'https://api.sejm.gov.pl/sejm/term10/processes?limit=5000',
        accessedOn: '2026-10-20',
        note: "Parti d'opposition sans participation gouvernementale. Aucune proposition de loi migratoire déposée par des députés n'a été adoptée au cours de la législature ouverte en novembre 2023.",
      },
    },
    europeanRepresentation: {
      meps: 1,
      totalCountryMeps: 53,
      europeanGroup: 'Non-inscrit',
      source: {
        name: 'Wikipedia — Grzegorz Braun',
        url: 'https://en.wikipedia.org/wiki/Grzegorz_Braun',
        accessedOn: '2026-09-09',
        note: "Grzegorz Braun a été élu député européen en 2024 sur la liste Konfederacja, avant sa rupture avec le parti début 2025. Aucun des trois groupes de droite du Parlement européen n'a accepté de l'accueillir : il y siège comme non-inscrit.",
      },
    },
    founded: 2019,
    description:
      "Fondé en 2019 par Grzegorz Braun, réalisateur et homme politique, sur une ligne national-catholique et ultranationaliste. D'abord allié électoral de la Konfederacja, dont il a rompu début 2025.",
  },
  {
    slug: 'fremskrittspartiet',
    name: 'Fremskrittspartiet (FrP)',
    countryCode: 'NO',
    positioning: 'National-populiste, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Meilleur résultat électoral de son histoire aux élections législatives de septembre 2025 (23,8% des voix, 47 sièges sur 169). Le bloc rouge-vert emmené par le Parti travailliste conserve toutefois sa majorité, avec une marge plus étroite qu'en 2021. Le FrP reste dans l'opposition au Storting.",
    electoralStatusSource: {
      name: 'NRK',
      url: 'https://www.nrk.no/norge/ny-valgstudie_-ideologisk-skifte-mot-hoyre-1.17991477',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://www.frp.no',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/Fremskrittsp' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Fremskrittspartiet » (Norvège)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite (cas limite). Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'FrP — partiprogram 2025-2029',
        url: 'https://www.frp.no/files/Program/2025/FrP-Partiprogram-2025-2029.pdf',
        accessedOn: '2026-10-20',
        note: "Programme 2025-2029 : rendre impossible l'obtention d'un titre de séjour par une demande d'asile à la frontière, traitement des demandes dans des centres hors d'Europe, arrêt de principe de l'accueil des réfugiés réinstallés, « contrat d'intégration » pour les immigrés non occidentaux. Le rythme de l'immigration y est jugé « non soutenable » pour le modèle social.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: "Lovdata — utlendingsloven § 41 a (24-årskrav for familieetablering), texte consolidé",
        url: "https://lovdata.no/dokument/NL/lov/2008-05-15-35/KAPITTEL_6",
        accessedOn: '2026-10-20',
        note: "Exigence d'âge de 24 ans pour l'installation en Norvège d'un conjoint ou concubin (article 41 a de la loi sur les étrangers), introduite par la loi du 17 juin 2016 n° 58 « innstramninger II » (Prop. 90 L (2015-2016)), projet du gouvernement Solberg dont le FrP était membre, en vigueur depuis le 1er janvier 2017 et toujours présente dans le texte consolidé (Lovdata : https://lovdata.no/dokument/LTI/lov/2016-06-17-58). Le parti est dans l'opposition depuis 2020.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2025',
        chamber: 'Storting',
        date: '2025-09-08',
        seats: 47,
        totalSeats: 169,
        votePercent: 23.8,
        source: {
          name: 'NRK',
          url: 'https://www.nrk.no/norge/ny-valgstudie_-ideologisk-skifte-mot-hoyre-1.17991477',
          accessedOn: '2026-09-09',
          note: 'Meilleur résultat du parti à une élection législative.',
        },
      },
      {
        label: 'Élections législatives 2021',
        chamber: 'Storting',
        date: '2021-09-13',
        seats: 21,
        totalSeats: 169,
        votePercent: 11.61,
        source: {
          name: "Wikipedia — 2021 Norwegian parliamentary election",
          url: 'https://en.wikipedia.org/wiki/2021_Norwegian_parliamentary_election',
          accessedOn: '2026-09-15',
          note: "Recul de 6 sièges et de 3,58 points par rapport à 2017.",
        },
      },
    ],
    localImplantation: {
      summary:
        "Troisième parti aux élections locales de septembre 2023 avec 11,3% des voix (+3,1 points), en nette progression dans les conseils municipaux et de comté à l'échelle du pays.",
      source: {
        name: 'Statistisk sentralbyrå (SSB) — Municipal elections 2023',
        url: 'https://www.ssb.no/en/valg/kommunestyre-og-fylkestingsvalg/artikler/municipal-elections-2023-and-2019',
        accessedOn: '2026-09-09',
      },
    },
    founded: 1973,
    description:
      "Fondé en 1973 comme parti anti-impôts (Anders Langes Parti), réorienté vers un profil national-populiste centré sur l'immigration à partir des années 1980-1990. A participé au gouvernement Solberg de 2013 à 2020.",
  },
  {
    slug: 'spd-cz',
    name: 'Svoboda a přímá demokracie (SPD)',
    countryCode: 'CZ',
    positioning: 'National-populiste, droite radicale',
    electoralStatus: 'pouvoir',
    electoralStatusDetail:
      "Entré au gouvernement après les élections législatives d'octobre 2025, en coalition avec ANO d'Andrej Babiš. Tomio Okamura, président du parti, est devenu président de la Chambre des députés. Le SPD dispose de plusieurs portefeuilles ministériels (défense, transports, agriculture) au sein du gouvernement Babiš.",
    electoralStatusSource: {
      name: 'iRozhlas',
      url: 'https://www.irozhlas.cz/zpravy-domov/tomio-okamura-byl-ano-spd-a-motoristy-nominovan-do-cela-snemovny-program-koalice_2510291414_cen',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://www.spd.cz',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/SPD_CZ' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Svoboda a prímá demokracie » (Tchéquie)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: "ČTK (České noviny) — Program SPD se soustředí na zlevnění energií či potravin, bydlení či bezpečnost",
        url: 'https://www.ceskenoviny.cz/zpravy/2718106',
        accessedOn: '2026-10-20',
        note: "Programme des législatives de 2025 (dépêche du 8 septembre 2025) : rejet de la migration et du pacte européen sur la migration et l'asile, révision des titres de séjour de tous les migrants. Le député Jaroslav Foldyna a promis le renvoi de tous les migrants en situation irrégulière.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'iRozhlas',
        url: 'https://www.irozhlas.cz/zpravy-domov/okamura-chce-aby-se-spd-podilelo-na-vlade-s-ano-zminil-ministerstva-vnitra_2510051407_job',
        unverified: "article d'iRozhlas et registre de la Chambre des députés inaccessibles le 2026-10-20",
        note: "Au gouvernement depuis fin 2025, sans le ministère de l'Intérieur. Statut à vérifier : le registre de la Chambre des députés (psp.cz) n'a pas pu être consulté le 20 octobre 2026 (accès automatisé refusé). Les textes migratoires adoptés depuis son entrée au gouvernement n'ont pas été examinés.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections sénatoriales 2026',
        chamber: 'Sénat',
        date: '2026-10-09',
        seats: 0,
        totalSeats: 81,
        votePercent: 4.96,
        source: {
          name: 'Wikipedia — 2026 Czech Senate election',
          url: 'https://en.wikipedia.org/wiki/2026_Czech_Senate_election',
          accessedOn: '2026-10-20',
          note: 'Pourcentage du premier tour ; 27 sièges sur 81 étaient renouvelés et aucun candidat du parti ne s’est qualifié pour le second tour.',
        },
      },
      {
        label: 'Élections législatives 2025',
        chamber: 'Chambre des députés',
        date: '2025-10-03',
        seats: 15,
        totalSeats: 200,
        votePercent: 7.77,
        source: {
          name: 'IPU Parline — Czechia Chamber of Deputies October 2025 Election',
          url: 'https://data.ipu.org/parliament/CZ/CZ-LC01/election/CZ-LC01-E20251003/',
          accessedOn: '2026-09-09',
        },
      },
      {
        label: 'Élections législatives 2021',
        chamber: 'Chambre des députés',
        date: '2021-10-09',
        seats: 20,
        totalSeats: 200,
        votePercent: 9.56,
        source: {
          name: "Wikipedia — 2021 Czech parliamentary election",
          url: 'https://en.wikipedia.org/wiki/2021_Czech_parliamentary_election',
          accessedOn: '2026-09-15',
        },
      },
    ],
    europeanRepresentation: {
      meps: 1,
      totalCountryMeps: 21,
      europeanGroup: "Non-inscrits",
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Tchéquie',
        url: 'https://results.elections.europa.eu/en/national-results/czechia/2024-2029/',
        accessedOn: '2026-09-09',
      },
    },
    founded: 2015,
    description:
      "Fondé en 2015 par Tomio Okamura après sa rupture avec le parti Aube de la démocratie directe. Okamura en est le président depuis la fondation.",
  },
  {
    slug: 'elliniki-lisi',
    name: 'Ελληνική Λύση (Solution grecque)',
    countryCode: 'GR',
    positioning: 'National-conservateur, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Douze députés à la Vouli (Parlement hellénique), sur 300 sièges. Kyriakos Velopoulos, fondateur et président du parti, siège dans l'opposition ; le pays est dirigé par le gouvernement de la Nouvelle Démocratie (ND) de Kyriakos Mitsotakis.",
    electoralStatusSource: {
      name: 'Hellenic Parliament',
      url: 'https://www.hellenicparliament.gr/vouleftes/ana-koinovouleftiki-omada/?partyId=c69150dd-3ea9-4abb-a756-aa8d00a2f334',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://elliniki-lisi.gr',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/kvelopoulos', leader: 'Kyriakos Velopoulos' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Elliniki Lisi » (Grèce)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Enikos.gr',
        url: 'https://www.enikos.gr/politics/velopoulos-i-ellada-den-antechei-alles-metanasteftikes-roes-entoni-kritiki-gia-ton-kyvernitiko-anaschimatismo/2595253/',
        accessedOn: '2026-10-20',
        note: "Son président Kyriakos Velopoulos a déclaré le 9 juin 2026, lors du débat sur la loi de mise en œuvre du pacte européen, que « la Grèce et les Grecs ne supportent plus d'autres flux » et que les frontières doivent être gardées.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Newsit.gr',
        url: 'https://www.newsit.gr/politikh/vouli-me-tis-psifous-tis-nd-perase-apo-tin-epitropi-to-nomosxedio-gia-to-asylo-kai-ti-metanasteysi/4694513/',
        accessedOn: '2026-10-20',
        note: "Parti d'opposition sans participation gouvernementale : a voté contre, sur le principe, le projet de loi sur l'asile et la migration du gouvernement ND en commission (4 juin 2026). Statut à vérifier : le registre du Parlement grec n'a pas pu être consulté le 20 octobre 2026.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives de juin 2023',
        chamber: 'Vouli ton Ellinon',
        date: '2023-06-25',
        seats: 12,
        totalSeats: 300,
        votePercent: 4.44,
        source: {
          name: 'Wikipedia — June 2023 Greek parliamentary election',
          url: 'https://en.wikipedia.org/wiki/June_2023_Greek_parliamentary_election',
          accessedOn: '2026-09-09',
        },
      },
      {
        label: 'Élections législatives de mai 2023',
        chamber: 'Vouli ton Ellinon',
        date: '2023-05-21',
        seats: 16,
        totalSeats: 300,
        votePercent: 4.45,
        source: {
          name: 'Wikipedia — May 2023 Greek parliamentary election',
          url: 'https://en.wikipedia.org/wiki/May_2023_Greek_parliamentary_election',
          accessedOn: '2026-09-09',
          note: "Scrutin sans prime majoritaire ; le second tour de juin 2023, avec prime au premier parti, a réduit le nombre de sièges de la plupart des petits partis dont Elliniki Lisi.",
        },
      },
    ],
    localImplantation: {
      summary:
        "Implantation locale restée modeste : quelques dizaines d'élus municipaux et régionaux, sans mairie ni présidence de région, le parti restant centré sur la personnalité de son fondateur et son activité parlementaire nationale.",
      source: {
        name: 'Kathimerini',
        url: 'https://www.kathimerini.gr',
        accessedOn: '2026-09-09',
      },
    },
    founded: 2016,
    description:
      'Fondé le 28 juin 2016 par Kyriakos Velopoulos, ancien député de Nouvelle Démocratie et animateur de télévision, qui en est resté le président et fondateur.',
  },
  {
    slug: 'niki-grece',
    name: 'Νίκη (Victoire / NIKI)',
    countryCode: 'GR',
    positioning: 'Ultra-conservateur, orthodoxe-nationaliste, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Dix députés à la Vouli (Parlement hellénique), entrés pour la première fois lors des élections de mai-juin 2023. Parti largement inconnu avant la campagne, centré sur la primauté de l'Église orthodoxe sur l'État et les thématiques de « guerre culturelle » (opposition à l'avortement, à l'immigration et au mariage homosexuel). Dans l'opposition face au gouvernement de la Nouvelle Démocratie.",
    electoralStatusSource: {
      name: 'Al Jazeera — Very worrying: Three far-right parties enter Greek parliament',
      url: 'https://www.aljazeera.com/news/2023/6/30/very-worrying-three-far-right-parties-enter-greek-parliament',
      accessedOn: '2026-09-09',
    },
    officialWebsite: 'https://nikh.gr',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/NIKI_official_' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Δημοκρατικό Πατριωτικό Κίνημα \"ΝΙΚΗ\" » (Grèce)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Al Jazeera',
        url: 'https://www.aljazeera.com/news/2023/6/30/very-worrying-three-far-right-parties-enter-greek-parliament',
        accessedOn: '2026-10-20',
        note: "Parti chrétien orthodoxe que l'analyste Georgios Samaras décrit comme le premier en Grèce à « investir autant dans les guerres culturelles » (Al Jazeera, 30 juin 2023). Sa position migratoire reste à documenter.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Parlement hellénique — projets et propositions de loi déposés",
        url: "https://www.hellenicparliament.gr/Nomothetiko-Ergo/Katatethenta-Nomosxedia",
        unverified: "registre du Parlement grec inaccessible le 2026-10-20",
        note: "Parti d'opposition sans participation gouvernementale. Statut à vérifier : le registre du Parlement grec n'a pas pu être consulté le 20 octobre 2026 (accès automatisé refusé).",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives de juin 2023',
        chamber: 'Vouli ton Ellinon',
        date: '2023-06-25',
        seats: 10,
        totalSeats: 300,
        votePercent: 3.7,
        source: {
          name: 'IPU Parline — Greece Hellenic Parliament June 2023 Election',
          url: 'https://data.ipu.org/parliament/GR/GR-LC01/election/GR-LC01-E20230625/',
          accessedOn: '2026-09-09',
          note: "Première entrée au Parlement, un an après sa fondation.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 1,
      totalCountryMeps: 21,
      europeanGroup: 'Non-inscrits',
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Grèce',
        url: 'https://results.elections.europa.eu/en/national-results/greece/2024-2029/',
        accessedOn: '2026-09-09',
        note: "Première entrée du parti au Parlement européen, avec l'acteur et mannequin Nikos Anadiotis comme élu.",
      },
    },
    founded: 2019,
    description:
      "Fondé en 2019 par Dimitris Natsios, théologien orthodoxe. Parti resté marginal jusqu'à son entrée au Parlement aux élections législatives de 2023.",
  },
  {
    slug: 'spartiates',
    name: 'Σπαρτιάτες (Spartiates / Spartans)',
    countryCode: 'GR',
    positioning: 'Extrême droite, ultranationaliste',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Douze députés à la Vouli, entrés au Parlement dès leur première élection en juin 2023 — un résultat largement attribué au soutien affiché d'Ilias Kasidiaris, ancien député d'Aube dorée condamné pour appartenance à une organisation criminelle, dont le propre parti (Ethniko Komma – Ellines) avait été disqualifié par la justice grecque juste avant le scrutin. Dans l'opposition face au gouvernement de la Nouvelle Démocratie.",
    electoralStatusSource: {
      name: 'NBC News — Greece election far right Spartans',
      url: 'https://www.nbcnews.com/news/world/election-greece-right-wing-spartans-trend-europe-italy-lepen-vox-rcna91094',
      accessedOn: '2026-09-09',
    },
    officialWebsite: 'https://spartiates.gr',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/spartiates_PO' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Σπαρτιάτες » (Grèce)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste (cas limite) et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'NBC News',
        url: 'https://www.nbcnews.com/news/world/election-greece-right-wing-spartans-trend-europe-italy-lepen-vox-rcna91094',
        accessedOn: '2026-10-20',
        note: "Décrit comme « un groupe nativiste d'extrême droite », largement considéré comme le descendant direct d'Aube dorée (NBC News, 27 juin 2023).",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Parlement hellénique — projets et propositions de loi déposés",
        url: "https://www.hellenicparliament.gr/Nomothetiko-Ergo/Katatethenta-Nomosxedia",
        unverified: "registre du Parlement grec inaccessible le 2026-10-20",
        note: "Parti d'opposition sans participation gouvernementale. Statut à vérifier : le registre du Parlement grec n'a pas pu être consulté le 20 octobre 2026 (accès automatisé refusé).",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives de juin 2023',
        chamber: 'Vouli ton Ellinon',
        date: '2023-06-25',
        seats: 12,
        totalSeats: 300,
        votePercent: 4.68,
        source: {
          name: 'NBC News',
          url: 'https://www.nbcnews.com/news/world/election-greece-right-wing-spartans-trend-europe-italy-lepen-vox-rcna91094',
          accessedOn: '2026-09-09',
        },
      },
    ],
    europeanRepresentation: {
      meps: 0,
      totalCountryMeps: 21,
      source: {
        name: 'Wikipedia — 2024 European Parliament election in Greece',
        url: 'https://en.wikipedia.org/wiki/2024_European_Parliament_election_in_Greece',
        accessedOn: '2026-09-09',
        note: "Le parti a été exclu des élections européennes de 2024 par décision de la Cour suprême grecque (Aréopage), en raison de ses liens avec Aube dorée, organisation jugée criminelle — décision soutenue par l'ensemble des grands partis grecs (Nouvelle Démocratie, PASOK, Syriza, Nouvelle Gauche).",
      },
    },
    founded: 2023,
    description:
      "Fondé en 2023 en vue des élections législatives par d'anciens cadres et sympathisants d'Aube dorée, dans le contexte de l'interdiction judiciaire d'un parti concurrent porté par Ilias Kasidiaris.",
  },
  {
    slug: 'aur',
    name: 'Alianța pentru Unirea Românilor (AUR)',
    countryCode: 'RO',
    positioning: 'National-souverainiste, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Parti d'opposition. Son président George Simion a perdu le second tour de l'élection présidentielle de mai 2025 face à Nicușor Dan et n'a pas participé aux négociations de la coalition gouvernementale qui a suivi. Le parti conteste devant la Cour constitutionnelle la loi de finances 2026 votée par la coalition au pouvoir.",
    electoralStatusSource: {
      name: 'Euronews România',
      url: 'https://www.euronews.ro/articole/george-simion-nu-suntem-in-alianta-cu-psd-nici-cu-pnl',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://partidulaur.ro',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/partidulaur' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Alianța pentru Unirea Românilor » (Roumanie)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'remigration',
      source: {
        name: "Realitatea — George Simion : Pentru milioane de europeni, remigrația a devenit o politică necesară",
        url: 'https://www.realitatea.net/stiri/politica/george-simion-pentru-milioane-de-europeni-remigratia-a-devenit-o-politica-necesara-snhudo',
        accessedOn: '2026-10-20',
        note: "Le 20 juin 2026, lors d'une conférence coorganisée par le parti au Parlement roumain, le président de l'AUR George Simion a déclaré que « pour des millions d'Européens, la remigration est devenue une politique nécessaire », en la définissant comme le retour des personnes en situation irrégulière. Usage explicite du terme par le dirigeant du parti — critère central de la méthodologie de ce site.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Digi24',
        url: 'https://www.digi24.ro/video/george-simion-dupa-votul-din-parlament-pe-bugetul-2026-opozitie-totala-aur-contesta-legea-la-ccr-3687189',
        accessedOn: '2026-10-20',
        note: "Parti d'opposition : son président George Simion a annoncé une « opposition totale » et contesté la loi de budget 2026 devant la Cour constitutionnelle (Digi24, 20 mars 2026). Statut à vérifier : le registre de la Chambre des députés roumaine n'a pas pu être consulté le 20 octobre 2026.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2024',
        chamber: 'Chambre des députés',
        date: '2024-12-01',
        seats: 63,
        totalSeats: 331,
        votePercent: 18.01,
        source: {
          name: 'IPU Parline — Romania Chamber of Deputies December 2024 Election',
          url: 'https://data.ipu.org/parliament/RO/RO-LC01/election/RO-LC01-E20241201/',
          accessedOn: '2026-09-09',
          note: "Deuxième force politique du pays, avec un gain de 30 sièges par rapport à 2020 ; a également remporté 28 sièges sur 136 au Sénat.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 6,
      totalCountryMeps: 33,
      europeanGroup: 'Conservateurs et réformistes européens (ECR)',
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Roumanie',
        url: 'https://results.elections.europa.eu/en/national-results/romania/2024-2029/',
        accessedOn: '2026-09-09',
      },
    },
    founded: 2019,
    description:
      'Fondé en 2019 par George Simion et Claudiu Târziu sur une ligne unioniste (rattachement de la Moldavie), souverainiste et traditionaliste.',
  },
  {
    slug: 'sos-romania',
    name: 'S.O.S. România',
    countryCode: 'RO',
    positioning: 'National-souverainiste, ultra-conservateur, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Entré au Parlement pour la première fois lors des élections du 1er décembre 2024 : 28 sièges à la Chambre des députés et 12 sièges au Sénat. Sa présidente Diana Șoșoacă, ancienne sénatrice AUR exclue du parti en 2021, s'est vu refuser sa candidature à l'élection présidentielle de 2025 par la Cour constitutionnelle en raison de positions jugées anticonstitutionnelles.",
    electoralStatusSource: {
      name: 'RFE/RL — The Far-Right Firebrand Too Dangerous To Run For Romania\'s Presidency',
      url: 'https://www.rferl.org/a/sosoaca-romania-far-right-presidential-election/33209702.html',
      accessedOn: '2026-09-09',
    },
    officialWebsite: 'https://sosro.ro',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/sosoacadiana', leader: 'Diana Șoșoacă' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « S.O.S Romǎnia » (Roumanie)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'ECPS — Charting Populist Pathways',
        url: 'https://www.populismstudies.org/charting-populist-pathways-romanian-populisms-journey-to-the-european-parliament/',
        accessedOn: '2026-10-20',
        note: "Le European Center for Populism Studies qualifie les messages de Diana Șoșoacă d'« ultranationalistes, xénophobes et anti-européens », relève une dimension « nativiste » et son appel au « Ro-exit ».",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Camera Deputaților — registre des propositions législatives",
        url: "https://www.cdep.ro/pls/proiecte/upl_pck2015.home",
        unverified: "registre de la Chambre des députés roumaine inaccessible le 2026-10-20",
        note: "Parti d'opposition entré au Parlement fin 2024. Statut à vérifier : le registre de la Chambre des députés roumaine n'a pas pu être consulté le 20 octobre 2026 (accès automatisé refusé).",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2024',
        chamber: 'Chambre des députés',
        date: '2024-12-01',
        seats: 28,
        totalSeats: 331,
        votePercent: 7.36,
        source: {
          name: 'RFE/RL',
          url: 'https://www.rferl.org/a/sosoaca-romania-far-right-presidential-election/33209702.html',
          accessedOn: '2026-09-09',
          note: "Entrée au Parlement pour la première fois ; a également remporté 12 sièges sur 136 au Sénat le même jour.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 1,
      totalCountryMeps: 33,
      source: {
        name: 'Balkan Insight — European Parliament Lifts Romanian Far-Right MEP\'s Immunity',
        url: 'https://balkaninsight.com/2026/04/28/european-parliament-lifts-romanian-far-right-meps-immunity/bi/',
        accessedOn: '2026-09-09',
        note: "Le parti avait remporté 2 sièges lors des élections européennes de juin 2024 (5,03% des voix) ; Diana Șoșoacă, non-inscrite, en restait la seule élue en avril 2026, date à laquelle le Parlement européen a levé son immunité.",
      },
    },
    founded: 2021,
    description:
      "Fondé en 2021 par Diana Șoșoacă après son exclusion du parti AUR, sur une ligne souverainiste et anti-européenne radicale, marquée par des controverses régulières liées à des propos jugés antisémites et à un comportement perturbateur au Parlement européen.",
  },
  {
    slug: 'sns',
    name: 'Slovenská národná strana (SNS)',
    countryCode: 'SK',
    positioning: 'National-conservateur, ultra-nationaliste, droite radicale',
    electoralStatus: 'pouvoir',
    electoralStatusDetail:
      "Partenaire de la coalition gouvernementale de Robert Fico (SMER-SD, Hlas-SD, SNS) depuis le 25 octobre 2023. Le président du parti, Andrej Danko, ancien président du Conseil national, siège comme ministre au sein du gouvernement Fico IV.",
    electoralStatusSource: {
      name: 'Wikipedia — Fico\'s Fourth Cabinet',
      url: 'https://en.wikipedia.org/wiki/Fico%27s_Fourth_Cabinet',
      accessedOn: '2026-09-09',
    },
    officialWebsite: 'https://www.sns.sk',
    socialAccounts: [
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Slovenská Národná Strana » (Slovaquie)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'SNS.sk — campagne 2023',
        url: 'https://www.sns.sk/kto-voli-progresivne-slovensko-ten-hlasuje-za-migrantov-na-slovensku/',
        unverified: "la page citée ne contient plus le slogan rapporté (consultée le 2026-10-20)",
        note: "Position migratoire à documenter.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: "Slov-Lex — zákon č. 69/2026 Z. z. o medzinárodnej ochrane",
        url: "https://static.slov-lex.sk/pdf/SK/ZZ/2026/69/ZZ_2026_69_20260612.pdf",
        accessedOn: '2026-10-21',
        note: "Membre de la coalition du gouvernement Fico depuis 2023. Ce gouvernement a fait adopter la loi du 14 avril 2026 sur la protection internationale (n° 69/2026, en vigueur depuis le 12 juin 2026), qui remplace la loi sur l'asile, introduit une procédure d'asile à la frontière et met en œuvre la réforme européenne de l'asile.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2023',
        chamber: 'Národná rada (Conseil national)',
        date: '2023-09-30',
        seats: 10,
        totalSeats: 150,
        votePercent: 5.6,
        source: {
          name: 'IPU Parline — Slovakia National Council September 2023 Election',
          url: 'https://data.ipu.org/parliament/SK/SK-LC01/election/SK-LC01-E20230930/',
          accessedOn: '2026-09-09',
        },
      },
    ],
    europeanRepresentation: {
      meps: 0,
      totalCountryMeps: 15,
      source: {
        name: 'The Slovak Spectator — 2024 Slovak European elections: Official results',
        url: 'https://spectator.sme.sk/politics-and-society/c/2024-slovakia-european-elections-official-results',
        accessedOn: '2026-09-09',
        note: "Échec total aux élections européennes de juin 2024 : sous le seuil de représentation, le parti perd son siège au Parlement européen.",
      },
    },
    founded: 1990,
    description:
      "Fondé en 1990, plus ancien parti nationaliste slovaque encore actif. A participé à plusieurs gouvernements de coalition depuis les années 1990, dont deux précédents gouvernements Fico. Dirigé par Andrej Danko depuis 2012.",
  },
  {
    slug: 'republika-sk',
    name: 'Republika',
    countryCode: 'SK',
    positioning: 'National-conservateur, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Parti d'opposition en progression constante dans les sondages (11-13%), sans participation au gouvernement de coalition dirigé par Robert Fico (SMER) depuis octobre 2023. Les politologues slovaques évoquent la possibilité que Republika devienne un partenaire de coalition à l'avenir.",
    electoralStatusSource: {
      name: 'StartitUp.sk',
      url: 'https://www.startitup.sk/republika-moze-byt-vo-vlade-politolog-vysvetluje-preco-rastie-a-co-by-sa-od-nej-mohla-ucit-opozicia/',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://www.hnutie-republika.sk',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/hnutierepublika' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Republika » (Slovaquie)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste (cas limite) et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: "Wikipedia — Republic Movement",
        url: "https://en.wikipedia.org/wiki/Republic_Movement",
        accessedOn: '2026-10-20',
        note: "Le parti demande l'arrêt de toute immigration illégale, « même contre les institutions de l'UE ». L'emploi du terme « remigration » par ses dirigeants, cité jusqu'ici, n'a pas pu être vérifié : la source précédente est inaccessible.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Národná rada — registre des projets de loi",
        url: "https://www.nrsr.sk/web/?sid=zakony/zakony",
        unverified: "registre du Conseil national slovaque inaccessible le 2026-10-20",
        note: "Parti d'opposition sans participation gouvernementale. Statut à vérifier : le registre du Conseil national slovaque n'a pas pu être consulté le 20 octobre 2026 (accès automatisé refusé).",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2023',
        chamber: 'Národná rada (Conseil national)',
        date: '2023-09-30',
        seats: 0,
        totalSeats: 150,
        votePercent: 4.75,
        source: {
          name: 'SITA — Výsledky predčasných volieb na Slovensku 2023',
          url: 'https://sita.sk/vysledky-predcasnych-volieb-na-slovensku-2023-zvoleni-poslanci-a-ucast-online/',
          accessedOn: '2026-09-09',
          note: "Sous le seuil des 5% requis pour entrer au Parlement, de justesse (4,75%) — d'où l'absence de député malgré une progression continue dans les sondages depuis.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 1,
      totalCountryMeps: 15,
      europeanGroup: "Europe des nations souveraines (ESN)",
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Slovaquie',
        url: 'https://results.elections.europa.eu/en/national-results/slovakia/2024-2029/',
        accessedOn: '2026-09-09',
        note: "Milan Uhrík, président du parti, a été réélu député européen en 2024 malgré l'échec du parti au niveau national l'année précédente.",
      },
    },
    founded: 2021,
    description:
      "Fondé en 2021 par une scission du parti Kotlebovci – Ľudová strana Naše Slovensko (ĽSNS, dissous par la justice slovaque en 2024), sous la direction de Milan Uhrík.",
  },
  {
    slug: 'danmarksdemokraterne',
    name: 'Danmarksdemokraterne',
    countryCode: 'DK',
    positioning: 'National-conservateur, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Troisième force politique du Folketing après les élections de 2022, en recul aux élections législatives du 24 mars 2026 (10 sièges) et non conviée aux réunions de coalition du nouveau gouvernement qui en est issu. La présidente Inger Støjberg dénonce une politique migratoire quasi absente du programme du nouveau gouvernement.",
    electoralStatusSource: {
      name: 'Kristeligt Dagblad',
      url: 'https://www.kristeligt-dagblad.dk/danmark/stoejberg-skoser-regerings-udlaendingepolitik-et-svigt-af-danmark',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://danmarksdemokraterne.dk',
    socialAccounts: [
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Danmarksdemokraterne » (Danemark)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: "Folketinget — B (2025-26) « Om at gennemføre en håndfast hjemsendelsespolitik » (registre officiel, données ouvertes)",
        url: "https://oda.ft.dk/api/Sag(103780)?$format=json",
        accessedOn: '2026-10-20',
        note: "Ses députés ont déposé au Folketing des propositions de résolution pour une politique de retour « ferme », la suppression de l'asile spontané au profit d'un centre d'accueil dans un pays tiers et le durcissement de la naturalisation.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Folketinget — B (2025-26) « Om at gennemføre en håndfast hjemsendelsespolitik » (registre officiel, données ouvertes)",
        url: "https://oda.ft.dk/api/Sag(103780)?$format=json",
        accessedOn: '2026-10-20',
        note: "Depuis 2022, ses députés ont déposé au Folketing plusieurs propositions de résolution sur l'immigration (politique de retour « ferme », suppression de l'asile spontané au profit d'un centre d'accueil dans un pays tiers, durcissement de la naturalisation) ; aucune n'a été adoptée, l'une a fait l'objet d'un rapport de commission et une autre est pendante.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2026',
        chamber: 'Folketing',
        date: '2026-03-24',
        seats: 10,
        totalSeats: 179,
        votePercent: 5.75,
        source: {
          name: 'Wikipedia — 2026 Danish general election',
          url: 'https://en.wikipedia.org/wiki/2026_Danish_general_election',
          accessedOn: '2026-09-09',
        },
      },
      {
        label: 'Élections législatives 2022',
        chamber: 'Folketing',
        date: '2022-11-01',
        seats: 14,
        totalSeats: 179,
        votePercent: 8.08,
        source: {
          name: 'Wikipedia — 2022 Danish general election',
          url: 'https://en.wikipedia.org/wiki/2022_Danish_general_election',
          accessedOn: '2026-09-09',
          note: 'Premier scrutin du parti, fondé quelques mois plus tôt la même année.',
        },
      },
    ],
    europeanRepresentation: {
      meps: 1,
      totalCountryMeps: 15,
      europeanGroup: 'Conservateurs et réformistes européens (ECR)',
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Danemark',
        url: 'https://results.elections.europa.eu/en/national-results/denmark/2024-2029/',
        accessedOn: '2026-09-09',
        note: 'Première entrée du parti au Parlement européen, avec Kristoffer Hjort Storm comme élu.',
      },
    },
    founded: 2022,
    description:
      "Fondé en 2022 par Inger Støjberg, ancienne ministre de l'Immigration et de l'Intégration, après son exclusion du parti libéral Venstre.",
  },
  {
    slug: 'dansk-folkeparti',
    name: 'Dansk Folkeparti (DF)',
    countryCode: 'DK',
    positioning: 'National-conservateur, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Aux élections du 24 mars 2026, le parti fait plus que tripler son score (9,1 % des voix contre 2,6 % en 2022) et passe de 5 à 16 sièges. Dans l'opposition au troisième gouvernement de Mette Frederiksen (sociaux-démocrates, Parti populaire socialiste, Modérés, Parti social-libéral).",
    electoralStatusSource: {
      name: 'Wikipedia — 2026 Danish general election',
      url: 'https://en.wikipedia.org/wiki/2026_Danish_general_election',
      accessedOn: '2026-10-21',
    },
    officialWebsite: 'https://danskfolkeparti.dk',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/MrMesserschmidt', leader: 'Morten Messerschmidt' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Dansk Folkeparti » (Danemark)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'remigration',
      source: {
        name: 'Altinget — Når Dansk Folkeparti taler om remigration, henter de ordene fra kontroversiel højreradikal bevægelse',
        url: 'https://www.altinget.dk/artikel/naar-dansk-folkeparti-taler-om-remigration-henter-de-ordene-fra-kontroversiel-hoejreradikal-bevaegelse',
        accessedOn: '2026-10-20',
        note: "Son président Morten Messerschmidt parle de « remigration » pendant la campagne de 2026, et les publications du parti sur le sujet reprennent le slogan « Remigration nu » (Altinget, tribune du 9 mars 2026). Critère (a) de la méthodologie.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: "Folketinget — L 140 (2018-19), loi dite du « changement de paradigme »",
        url: "https://oda.ft.dk/api/Sag(78454)?$format=json",
        accessedOn: '2026-10-20',
        note: "Loi promulguée après son adoption le 21 février 2019. Elle met en œuvre le volet migratoire de l'accord budgétaire pour 2019 conclu le 30 novembre 2018 entre le gouvernement et le DF : titres de séjour des réfugiés délivrés en vue d'un séjour temporaire et retirés dès que possible, plafond pour le regroupement familial des réfugiés. Aucune abrogation n'a été relevée à la date de consultation. Depuis 2022, les propositions de résolution migratoires de ses députés ont toutes été rejetées ou sont devenues caduques, deux restant pendantes.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2026',
        chamber: 'Folketing',
        date: '2026-03-24',
        seats: 16,
        totalSeats: 179,
        votePercent: 9.1,
        source: {
          name: 'Wikipedia — 2026 Danish general election',
          url: 'https://en.wikipedia.org/wiki/2026_Danish_general_election',
          accessedOn: '2026-10-21',
          note: 'Le parti fait plus que tripler son nombre de sièges par rapport à 2022.',
        },
      },
      {
        label: 'Élections législatives 2022',
        chamber: 'Folketing',
        date: '2022-11-01',
        seats: 5,
        totalSeats: 179,
        votePercent: 2.64,
        source: {
          name: 'Wikipedia — 2022 Danish general election',
          url: 'https://en.wikipedia.org/wiki/2022_Danish_general_election',
          accessedOn: '2026-09-09',
          note: "Recul à 5 sièges, en grande partie au profit du Danmarksdemokraterne, alors nouvellement fondé.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 1,
      totalCountryMeps: 15,
      europeanGroup: "Patriotes pour l'Europe (PfE)",
      source: {
        name: 'Wikipedia — Anders Vistisen',
        url: 'https://en.wikipedia.org/wiki/Anders_Vistisen',
        accessedOn: '2026-09-09',
      },
    },
    founded: 1995,
    description:
      "Fondé en 1995 par Pia Kjærsgaard, dissidente du Parti du progrès. A soutenu ou participé à plusieurs gouvernements danois entre 2001 et 2019, période durant laquelle le pays a adopté l'une des politiques migratoires les plus restrictives d'Europe du Nord. Dirigé par Morten Messerschmidt depuis janvier 2022.",
  },
  {
    slug: 'borgernes-parti',
    name: 'Borgernes Parti (Lars Boje Mathiesen)',
    countryCode: 'DK',
    positioning: 'National-conservateur, libertarien, extrême droite',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Quatre élus lors de sa toute première élection, celle du 24 mars 2026 (2,1% des voix). Trois des quatre députés (Jacob Harris, Nadia Natalie Isaksen, Emilie Schytte) sont devenus non-inscrits dès mai 2026 à la suite de dissensions internes, ne laissant que le président-fondateur Lars Boje Mathiesen comme unique élu du parti au Folketing.",
    electoralStatusSource: {
      name: 'TV 2 — Borgernes Parti kommer i Folketinget',
      url: 'https://nyheder.tv2.dk/politik/2026-03-24-borgernes-parti-kommer-i-folketinget',
      accessedOn: '2026-09-10',
    },
    officialWebsite: 'https://borgernesparti.dk',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/borgernesparti' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Borgernes Parti » (Danemark)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Politpro — Borgernes Parti',
        url: 'https://politpro.eu/en/denmark/political-parties/borgernes-parti',
        accessedOn: '2026-10-20',
        note: "Décrit comme combinant une politique d'immigration stricte et une politique « robuste » d'expulsion et de protection des frontières. L'appel à la « remigration » attribué jusqu'ici à son programme n'a été retrouvé dans aucune source.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Folketinget — B (2024-25) « Om at fjerne udgifterne til ikkevestlige udlændinge og efterkommere » (registre officiel, données ouvertes)",
        url: "https://oda.ft.dk/api/Sag(101135)?$format=json",
        accessedOn: '2026-10-20',
        note: "Parti entré au Parlement en mars 2026. Sa seule proposition sur l'immigration, une résolution de Lars Boje Mathiesen visant à supprimer les dépenses publiques liées aux immigrés non occidentaux et à leurs descendants (session 2024-25), a été rejetée.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2026',
        chamber: 'Folketing',
        date: '2026-03-24',
        seats: 4,
        totalSeats: 179,
        votePercent: 2.1,
        source: {
          name: 'TV 2',
          url: 'https://nyheder.tv2.dk/politik/2026-03-24-borgernes-parti-kommer-i-folketinget',
          accessedOn: '2026-09-10',
          note: "Première élection du parti, fondé un an et demi plus tôt seulement.",
        },
      },
    ],
    founded: 2024,
    description:
      "Fondé en août 2024 par Lars Boje Mathiesen, ancien président du Nye Borgerlige dont il a été exclu en 2023. Ce dernier parti, en net recul, n'a obtenu aucun siège à l'élection de mars 2026 et son ancienne présidente Pernille Vermund en a recommandé la dissolution début 2024.",
  },
  {
    slug: 'one-nation',
    name: "Pauline Hanson's One Nation",
    countryCode: 'AU',
    positioning: 'National-populiste, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Quatre sièges au Sénat australien (dont celui de Pauline Hanson), après un gain de deux sièges lors des élections générales de mai 2025. En 2026 : victoire du parti à l'élection partielle fédérale de Farrer (9 mai) avec David Farley, premier député One Nation directement élu à la Chambre des représentants de son histoire (les précédents élus y étaient arrivés par défection) ; deuxième place à l'élection partielle de Nepean (Victoria, 2 mai) ; et, en Australie-Méridionale (21 mars), un score supérieur à celui des Libéraux, une première dans cet État. Reste un parti d'opposition, le pays étant dirigé par le gouvernement travailliste d'Anthony Albanese.",
    electoralStatusSource: {
      name: 'The Conversation — Labor easily wins South Australian election with One Nation beating Liberals into second',
      url: 'https://theconversation.com/labor-easily-wins-south-australian-election-with-one-nation-beating-liberals-into-second-on-primary-votes-278423',
      accessedOn: '2026-09-10',
    },
    officialWebsite: 'https://www.onenation.org.au',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/PaulineHansonOz', leader: 'Pauline Hanson' },
    ],
    classificationSource: {
      name: "ParlGov 2024 (Döring & Manow) — entrée « One Nation Party » (ID 386), Australie",
      url: 'https://parlgov.fly.dev/data/parties/aus/386/',
      accessedOn: '2026-10-20',
      note: "Classé dans la famille « Right-wing » par ParlGov. The PopuList, limitée à l'Europe, ne code pas ce parti.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Build a Ballot',
        url: 'https://www.buildaballot.org.au/party-info/one-nation-policies',
        accessedOn: '2026-10-20',
        note: "Le parti veut réduire nettement l'immigration : plafond de 130 000 visas permanents et temporaires par an, retrait de l'Australie de la Convention de l'ONU relative au statut des réfugiés.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Parlement australien — Bills and Legislation",
        url: "https://www.aph.gov.au/Parliamentary_Business/Bills_Legislation",
        unverified: "registre des projets de loi du Parlement australien inaccessible le 2026-10-20",
        note: "Parti minoritaire d'opposition (4 sièges sur 76 au Sénat). Statut à vérifier : le registre des projets de loi du Parlement australien n'a pas pu être consulté le 20 octobre 2026 (accès automatisé refusé).",
      },
    },
    electoralHistory: [
      {
        label: 'Élection partielle fédérale de Farrer 2026',
        chamber: 'Chambre des représentants',
        date: '2026-05-09',
        seats: 1,
        totalSeats: 150,
        votePercent: 39.5,
        source: {
          name: 'Wikipedia — 2026 Farrer by-election',
          url: 'https://en.wikipedia.org/wiki/2026_Farrer_by-election',
          accessedOn: '2026-09-10',
          note: "David Farley élu avec 57,5% des voix après répartition des préférences (« two-candidate preferred ») — première élection directe d'un député One Nation à la chambre basse fédérale ; les précédents élus de ce parti y étaient arrivés par défection.",
        },
      },
      {
        label: "Élection générale d'Australie-Méridionale 2026",
        chamber: "House of Assembly d'Australie-Méridionale",
        date: '2026-03-21',
        seats: 4,
        totalSeats: 47,
        votePercent: 22.9,
        source: {
          name: 'The Conversation',
          url: 'https://theconversation.com/labor-easily-wins-south-australian-election-with-one-nation-beating-liberals-into-second-on-primary-votes-278423',
          accessedOn: '2026-09-10',
          note: "Meilleur résultat du parti à une élection d'État ou fédérale depuis 1998 (Queensland). Le parti obtient aussi 3 sièges au Conseil législatif (chambre haute) et devance les Libéraux en voix, une première dans cet État.",
        },
      },
      {
        label: 'Élections fédérales 2025',
        chamber: 'Sénat australien',
        date: '2025-05-03',
        seats: 4,
        totalSeats: 76,
        source: {
          name: 'ABC News — One Nation doubles its Senate representation',
          url: 'https://www.abc.net.au/news/2025-05-30/pauline-hanson-one-nation-doubles-senate-representation/105357202',
          accessedOn: '2026-09-09',
          note: "Meilleure représentation du parti au Sénat depuis près d'une décennie, à égalité avec les Nationals.",
        },
      },
      {
        label: 'Élections fédérales 2022',
        chamber: 'Sénat australien',
        date: '2022-05-21',
        seats: 2,
        totalSeats: 76,
        source: {
          name: "Wikipedia — 2022 Australian federal election",
          url: 'https://en.wikipedia.org/wiki/2022_Australian_federal_election',
          accessedOn: '2026-09-15',
          note: "Le parti conserve deux sièges au Sénat et n'en obtient aucun à la Chambre des représentants ; 40 des 76 sièges du Sénat étaient renouvelés.",
        },
      },
    ],
    localImplantation: {
      summary:
        "Représenté dans plusieurs parlements d'État, notamment le Queensland, l'Australie-Occidentale et désormais l'Australie-Méridionale. Deuxième place (24,5%) à l'élection partielle d'État de Nepean (Victoria, 2 mai 2026) ; candidatures déposées dans toutes les circonscriptions de la chambre basse pour l'élection générale de Victoria de novembre 2026.",
      source: {
        name: 'ABC News — One Nation Victoria candidates revealed',
        url: 'https://www.abc.net.au/news/2026-08-03/one-nation-victoria-candiates-revealed/106989410',
        accessedOn: '2026-09-10',
      },
    },
    founded: 1997,
    description:
      'Fondé en 1997 par Pauline Hanson, ancienne députée libérale devenue indépendante. Hanson dirige le parti depuis sa fondation.',
  },
  {
    slug: 'ppc',
    name: 'Parti populaire du Canada (PPC)',
    countryCode: 'CA',
    positioning: 'National-populiste, droite radicale',
    electoralStatus: 'extra-parlementaire',
    electoralStatusDetail:
      "Aucun député élu à la Chambre des communes. Pire résultat électoral de son histoire aux élections fédérales de 2025, avec moins de 1% des voix (contre près de 5% en 2021).",
    electoralStatusSource: {
      name: 'Wikipedia',
      url: 'https://en.wikipedia.org/wiki/People%27s_Party_of_Canada',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://www.peoplespartyofcanada.ca',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/peoplespca' },
    ],
    classificationSource: {
      name: "ParlGov 2024 (Döring & Manow) — entrée « People's Party of Canada » (ID 2791), Canada",
      url: 'https://parlgov.fly.dev/data/parties/can/2791/',
      accessedOn: '2026-10-20',
      note: "Classé dans la famille « Right-wing » par ParlGov. The PopuList, limitée à l'Europe, ne code pas ce parti.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Impunity Observer',
        url: 'https://impunityobserver.com/2025/04/02/maxime-bernier-only-the-peoples-party-sides-with-canadians-on-immigration/',
        unverified: "la source citée, une tribune, ne contient pas les engagements rapportés",
        note: "Engagements migratoires à documenter.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'CBC News',
        url: 'https://www.cbc.ca/news/politics/maxime-bernier-ppc-campaign-launch-1.7492181',
        unverified: "article de CBC inaccessible le 2026-10-20",
        note: "Aucun élu à la Chambre des communes : aucun texte déposé au niveau fédéral à ce jour.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections fédérales 2025',
        chamber: 'Chambre des communes',
        date: '2025-04-28',
        seats: 0,
        totalSeats: 343,
        votePercent: 0.7,
        source: {
          name: "CBC News — With less than 1% of the vote, does the PPC have a future?",
          url: 'https://www.cbc.ca/news/politics/peoples-party-of-canada-ppc-maxime-bernier-election-2025-1.7523653',
          accessedOn: '2026-09-09',
          note: 'Plus faible résultat du parti ; Maxime Bernier arrive quatrième dans sa propre circonscription.',
        },
      },
      {
        label: 'Élections fédérales 2021',
        chamber: 'Chambre des communes',
        date: '2021-09-20',
        seats: 0,
        totalSeats: 338,
        votePercent: 4.94,
        source: {
          name: "Wikipedia — 2021 Canadian federal election",
          url: 'https://en.wikipedia.org/wiki/2021_Canadian_federal_election',
          accessedOn: '2026-09-15',
          note: "Près de 5% des voix sans obtenir le moindre siège, effet du scrutin uninominal à un tour.",
        },
      },
    ],
    founded: 2018,
    description:
      "Fondé en 2018 par Maxime Bernier, ancien député conservateur, après sa défaite à la direction du Parti conservateur du Canada. Bernier en est le chef depuis la fondation.",
  },
  {
    slug: 'domovinski-pokret',
    name: 'Domovinski pokret (Mouvement de la patrie)',
    countryCode: 'HR',
    positioning: 'National-conservateur, droite radicale',
    electoralStatus: 'pouvoir',
    electoralStatusDetail:
      "Partenaire de la coalition gouvernementale avec l'Union démocratique croate (HDZ) depuis avril 2024, malgré des tensions récurrentes au sein de la majorité en 2026. Dirigé par Ivan Penava.",
    electoralStatusSource: {
      name: 'Radio Slobodna Evropa',
      url: 'https://www.slobodnaevropa.org/a/hrvatska-vlada-parlamentarna-vecina/32938194.html',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://dp.hr',
    socialAccounts: [
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Domovinski Pokret » (Croatie)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: "Index.hr — Otvoreno o stranim radnicima",
        url: "https://www.index.hr/amp/vijesti/clanak/otvoreno-o-stranim-radnicima-hdzovac-mi-znamo-sve-o-tim-ljudima/2609577.aspx",
        accessedOn: '2026-10-20',
        note: "Le député DP Ivica Kukavica a déclaré que le parti ferait « tout » pour que, « sous couvert du besoin de travailleurs étrangers », il n'y ait pas de « remplacement de la population » (Index.hr, 24 octobre 2024).",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: "TEB — Zakon o izmjenama i dopunama Zakona o strancima (NN 55/26)",
        url: "https://teb.hr/novosti/2026/zakon-o-izmjenama-i-dopunama-zakona-o-strancima/",
        accessedOn: '2026-10-21',
        note: "Partenaire de la coalition gouvernementale avec le HDZ depuis 2024. La modification de la loi sur les étrangers adoptée en mai 2026 (Narodne novine 55/26) est en vigueur depuis le 4 juin 2026 ; elle impose à certains travailleurs étrangers un examen de croate et d'alphabet latin de niveau A1.1, exigible à partir du 4 juin 2027.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2024',
        chamber: 'Sabor',
        date: '2024-04-17',
        seats: 14,
        totalSeats: 151,
        votePercent: 9.56,
        source: {
          name: 'IPU Parline — Croatia Croatian Parliament April 2024 Election',
          url: 'https://data.ipu.org/parliament/HR/HR-LC01/election/HR-LC01-E20240417/',
          accessedOn: '2026-09-09',
          note: "Résultat de la coalition menée par Domovinski pokret ; le parti a rejoint la coalition gouvernementale avec le HDZ le mois suivant.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 1,
      totalCountryMeps: 12,
      europeanGroup: 'Conservateurs et réformistes européens (ECR)',
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Croatie',
        url: 'https://www.europarl.europa.eu/cmsdata/291062/Factsheet%20HR%20sabor%2014112024.pdf',
        accessedOn: '2026-09-09',
      },
    },
    localImplantation: {
      summary:
        "Ivan Penava, président du parti, a perdu la mairie de Vukovar — qu'il détenait depuis 2013 — lors des élections locales de mai 2025, battu de 184 voix par Marijan Pavliček (Hrvatski suverenisti, parti plus radical encore que Domovinski pokret sur les questions identitaires). Le mouvement reste par ailleurs peu implanté dans les autres grandes villes croates.",
      source: {
        name: 'HRT — Domovinski pokret izgubio Vukovar, pobijedio suverenist M. Pavliček',
        url: 'https://vijesti.hrt.hr/hrvatska/domovinski-pokret-izgubio-vukovar-pobijedio-suverenist-m-pavlicek-12184051',
        accessedOn: '2026-09-10',
      },
    },
    founded: 2020,
    description:
      "Fondé en 2020 par Miroslav Škoro, aujourd'hui dirigé par Ivan Penava. Partenaire de coalition du HDZ depuis 2024, malgré la perte de son fief de Vukovar en 2025.",
  },
  {
    slug: 'hrvatski-suverenisti',
    name: 'Hrvatski suverenisti (Souverainistes croates)',
    countryCode: 'HR',
    positioning: 'National-conservateur, droite radicale à extrême droite',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Deux sièges au Sabor (8,02 % en coalition avec Most aux élections de 2024). Au niveau local, son président Marijan Pavliček a conquis la mairie de Vukovar en mai 2025 avec 184 voix d'avance sur Ivan Penava (Domovinski pokret), qui la dirigeait depuis 2013.",
    electoralStatusSource: {
      name: 'HRT',
      url: 'https://vijesti.hrt.hr/hrvatska/domovinski-pokret-izgubio-vukovar-pobijedio-suverenist-m-pavlicek-12184051',
      accessedOn: '2026-09-10',
    },
    officialWebsite: 'https://suverenisti.hr',
    socialAccounts: [
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Hrvatski Suverenisti » (Croatie)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Wikipedia — Croatian Sovereignists',
        url: 'https://en.wikipedia.org/wiki/Croatian_Sovereignists',
        unverified: "la source citée (Wikipédia) ne décrit pas de position migratoire",
        note: "Parti conservateur et chrétien, classé de droite à extrême droite ; position migratoire à documenter.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Sabor — registre e-doc des actes",
        url: "https://edoc.sabor.hr/Akti.aspx",
        unverified: "registre e-doc du Sabor non exploitable (recherche par formulaire) le 2026-10-20",
        note: "Parti d'opposition minoritaire au niveau national (2 sièges). Statut à vérifier : le registre e-doc du Sabor, qui ne s'interroge que par formulaire, n'a pas pu être exploité le 20 octobre 2026.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2024',
        chamber: 'Sabor',
        date: '2024-04-17',
        seats: 2,
        totalSeats: 151,
        votePercent: 8.02,
        source: {
          name: 'Wikipedia — Croatian Sovereignists',
          url: 'https://en.wikipedia.org/wiki/Croatian_Sovereignists',
          accessedOn: '2026-09-10',
          note: "Résultat obtenu en coalition électorale avec Most (Le Pont).",
        },
      },
      {
        label: 'Élections législatives 2020',
        chamber: 'Sabor',
        date: '2020-07-05',
        seats: 4,
        totalSeats: 151,
        votePercent: 10.89,
        source: {
          name: 'Wikipedia — Croatian Sovereignists',
          url: 'https://en.wikipedia.org/wiki/Croatian_Sovereignists',
          accessedOn: '2026-09-10',
          note: "Résultat obtenu en coalition électorale menée par Domovinski pokret, dont le parti n'était alors qu'une composante.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 0,
      totalCountryMeps: 12,
      source: {
        name: 'Wikipedia — Croatian Sovereignists',
        url: 'https://en.wikipedia.org/wiki/Croatian_Sovereignists',
        accessedOn: '2026-09-10',
        note: "Un député européen élu en 2019 (avant même la fusion formelle du parti) ; aucun élu depuis les élections européennes de 2024.",
      },
    },
    localImplantation: {
      summary:
        "Détient la mairie de Vukovar depuis mai 2025 (Marijan Pavliček), ville symbole de la mémoire nationale croate, prise à Domovinski pokret. Étend son implantation via une coalition locale à Split pour les élections d'arrondissement de septembre 2026.",
      source: {
        name: 'Nacional.hr',
        url: 'https://www.nacional.hr/primopredaja-pavlicek-postao-gradonacelnik-vukovara-penava-ovdje-stvari-nisu-jednostavne/',
        accessedOn: '2026-09-10',
      },
    },
    founded: 2019,
    description:
      "Fondé le 10 novembre 2019 par fusion du Parti conservateur croate, de Hrast et de la Génération du renouveau. Dirigé par Marijan Pavliček, maire de Vukovar depuis 2025.",
  },
  {
    slug: 'sds-slovenija',
    name: 'Slovenska demokratska stranka (SDS)',
    countryCode: 'SI',
    positioning: 'National-conservateur, droite radicale',
    electoralStatus: 'pouvoir',
    electoralStatusDetail:
      "Aux élections législatives du 22 mars 2026, le SDS arrive deuxième de très peu (28 sièges, 28,21% des voix) derrière le mouvement Svoboda de Robert Golob (29 sièges, 28,55%). N'ayant pas réussi à former de gouvernement, Svoboda cède la place : Janez Janša est élu Premier ministre le 22 mai 2026 par l'Assemblée nationale (51 voix), à la tête d'une coalition SDS-Demokrati-NSi-SLS-Fokus (2026-2030). Son équipe ministérielle a été confirmée le 4 juin 2026.",
    electoralStatusSource: {
      name: 'STA (Agence de presse slovène)',
      url: 'https://www.sta.si/v-srediscu/vlada2026',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://www.sds.si',
    socialAccounts: [
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Slovenska Demokratska Stranka » (Slovénie)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste depuis 2000 et d'extrême droite depuis 2015. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: "24ur.com — Mahnič bi imel « slovensko ICE »",
        url: "https://www.24ur.com/novice/slovenija/golob-dotok-ilegalnih-migrantov-je-minimalen-mahnic-bi-ustanovil-urad-za-deportacije.html",
        accessedOn: '2026-10-20',
        note: "Le député SDS Žan Mahnič a annoncé le 3 février 2026 la création d'un « bureau des déportations ».",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "24ur.com",
        url: 'https://www.24ur.com/novice/slovenija/golob-dotok-ilegalnih-migrantov-je-minimalen-mahnic-bi-ustanovil-urad-za-deportacije.html',
        accessedOn: '2026-10-20',
        note: "Statut à revérifier. Le « bureau des déportations » annoncé par le député SDS Žan Mahnič n'est pas un texte adopté, et l'adoption d'une loi migratoire par le gouvernement Janša n'a pas pu être établie à la date de consultation.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2026',
        chamber: 'Assemblée nationale (Državni zbor)',
        date: '2026-03-22',
        seats: 28,
        totalSeats: 90,
        votePercent: 28.21,
        source: {
          name: 'STA (Agence de presse slovène)',
          url: 'https://www.sta.si/v-srediscu/vlada2026',
          accessedOn: '2026-09-09',
        },
      },
      {
        label: 'Élections législatives 2022',
        chamber: 'Assemblée nationale (Državni zbor)',
        date: '2022-04-24',
        seats: 27,
        totalSeats: 90,
        votePercent: 23.48,
        source: {
          name: 'Wikipedia — 2022 Slovenian parliamentary election',
          url: 'https://en.wikipedia.org/wiki/2022_Slovenian_parliamentary_election',
          accessedOn: '2026-09-09',
        },
      },
    ],
    europeanRepresentation: {
      meps: 4,
      totalCountryMeps: 9,
      europeanGroup: 'Parti populaire européen (PPE)',
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Slovénie',
        url: 'https://results.elections.europa.eu/en/national-results/slovenia/2024-2029/',
        accessedOn: '2026-09-09',
      },
    },
    founded: 1989,
    description:
      "Fondé en 1989 sous le nom de Parti social-démocrate slovène, réorienté vers le national-conservatisme dans les années 1990. Dirigé par Janez Janša depuis 1993, Premier ministre à quatre reprises (2004-2008, 2012-2013, 2020-2022, depuis 2026).",
  },
  {
    slug: 'vazrazhdane',
    name: 'Възраждане (Renaissance / Vazrazhdane)',
    countryCode: 'BG',
    positioning: 'National-populiste, pro-russe, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Recul électoral marqué aux élections législatives du 19 avril 2026 : 12 sièges (4,19% des voix), contre 33 sièges lors de la précédente Assemblée nationale où le parti était la deuxième force politique du pays. Reste dans l'opposition, n'ayant jamais participé à un gouvernement.",
    electoralStatusSource: {
      name: 'Wikipedia — 2026 Bulgarian parliamentary election',
      url: 'https://en.wikipedia.org/wiki/2026_Bulgarian_parliamentary_election',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://vazrazhdane.bg',
    socialAccounts: [
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Vazrazhdane » (Bulgarie)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Novinite.com',
        url: 'https://www.novinite.com/articles/223323/Vazrazhdane+Party+Leader+Urges+Bulgaria+to+Refrain+from+Signing+EU+Migration+Pact',
        accessedOn: '2026-10-20',
        note: "Son président Kostadin Kostadinov s'oppose à l'adoption du pacte européen sur la migration et l'asile, qui risquerait selon lui de « transformer le pays en vaste camp de réfugiés » pour des migrants en route vers l'Autriche et l'Allemagne (3 janvier 2024).",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Народно събрание — registre des projets de loi de la 52e Assemblée nationale",
        url: "https://www.parliament.bg/bg/bills",
        accessedOn: '2026-10-20',
        note: "Parti d'opposition n'ayant jamais participé à un gouvernement. Aucun projet de loi sur les étrangers n'a été déposé par ses députés depuis l'élection de l'Assemblée en 2026 (les deux textes de juillet 2026 viennent du gouvernement et de PP-DB). Le parti a en revanche fait adopter le 7 août 2024 un amendement à la loi sur l'éducation, sans rapport avec l'immigration (RFE/RL : https://www.rferl.org/a/bulgaria-lgbt-sexual-orientation-amendment-schools/33069623.html).",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2026',
        chamber: 'Assemblée nationale (Narodno sabranie)',
        date: '2026-04-19',
        seats: 12,
        totalSeats: 240,
        votePercent: 4.19,
        source: {
          name: 'Wikipedia — 2026 Bulgarian parliamentary election',
          url: 'https://en.wikipedia.org/wiki/2026_Bulgarian_parliamentary_election',
          accessedOn: '2026-09-09',
        },
      },
      {
        label: 'Élections législatives précédentes',
        chamber: 'Assemblée nationale (Narodno sabranie)',
        date: '2024-10-27',
        seats: 33,
        totalSeats: 240,
        source: {
          name: 'Wikipedia — 2026 Bulgarian parliamentary election',
          url: 'https://en.wikipedia.org/wiki/2026_Bulgarian_parliamentary_election',
          accessedOn: '2026-09-09',
          note: "Deuxième force politique du pays avant le net recul de 2026 (-21 sièges).",
        },
      },
    ],
    europeanRepresentation: {
      meps: 3,
      totalCountryMeps: 17,
      europeanGroup: 'Europe des nations souveraines (ESN)',
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Bulgarie',
        url: 'https://results.elections.europa.eu/en/national-results/bulgaria/2024-2029/',
        accessedOn: '2026-09-09',
      },
    },
    founded: 2014,
    description:
      "Fondé en 2014 par Kostadin Kostadinov, journaliste, qui en est resté le président. Ligne nationaliste, pro-russe et anti-UE.",
  },
  {
    slug: 'nz-first',
    name: 'New Zealand First',
    countryCode: 'NZ',
    positioning: 'National-populiste, droite radicale',
    electoralStatus: 'pouvoir',
    electoralStatusDetail:
      "Partenaire de la coalition gouvernementale avec le National Party depuis les élections d'octobre 2023. Winston Peters, chef du parti, a occupé le poste de vice-Premier ministre. Des tensions existent avec son partenaire de coalition sur plusieurs aspects de la politique migratoire, à l'approche des élections générales de 2026.",
    electoralStatusSource: {
      name: 'NZ Herald',
      url: 'https://www.nzherald.co.nz/nz/politics/new-zealand-first-national-at-odds-on-immigration-policy-whether-new-zealand-a-launch-pad-to-australia-jamie-ensor/5XMNMNSUURDOLBYMUU36ZLC5HI/',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://www.nzfirst.nz',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/nzfirst' },
    ],
    classificationSource: {
      name: "ParlGov 2024 (Döring & Manow) — entrée « New Zealand First Party » (ID 891), Nouvelle-Zélande",
      url: 'https://parlgov.fly.dev/data/parties/nzl/891/',
      accessedOn: '2026-10-20',
      note: "Classé dans la famille « Conservative » par ParlGov, et non dans la famille « Right-wing ». The PopuList, limitée à l'Europe, ne code pas ce parti. L'inclusion repose sur la ligne migratoire du parti (voir « Intention »), pas sur ce classement.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: "Reuters via TimesLIVE — New Zealand First's culture-war policies lack broad appeal, warn analysts",
        url: 'https://www.timeslive.co.za/news/world/2026-10-12-new-zealand-firsts-culture-war-policies-lack-broad-appeal-warn-analysts/',
        accessedOn: '2026-10-22',
        note: "Selon Reuters (12 octobre 2026), Winston Peters a proposé des restrictions à l'immigration pour l'élection du 7 novembre 2026, en dénonçant le niveau élevé de l'immigration. Wikipédia rapporte un plafond annuel de 7 000 à 15 000 migrants « sérieusement qualifiés », d'après une page du programme archivée en 2012 (https://en.wikipedia.org/wiki/New_Zealand_First). Le programme officiel de 2026 n'a pas pu être consulté (vérification anti-robot sur nzfirst.nz). Critère (a) de la méthodologie.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: '1News',
        url: 'https://www.1news.co.nz/2026/09/07/peters-signals-benefits-as-well-as-super-require-citizenship-under-nz-first-policy/',
        accessedOn: '2026-10-20',
        note: "Campagne de 2026 : réserver la retraite publique (NZ Super) aux citoyens à partir de 2029 ; Winston Peters a évoqué la même condition pour d'autres prestations, sans proposition formelle. Rien n'a été déposé comme texte de loi. Au gouvernement depuis 2023 : les mesures adoptées par ce gouvernement n'ont pas été examinées.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections générales 2023',
        chamber: 'Parlement néo-zélandais',
        date: '2023-10-14',
        seats: 8,
        totalSeats: 123,
        votePercent: 6.08,
        source: {
          name: 'Wikipedia — 2023 New Zealand general election',
          url: 'https://en.wikipedia.org/wiki/2023_New_Zealand_general_election',
          accessedOn: '2026-09-09',
          note: "A détenu la clé de la majorité gouvernementale : National et ACT réunis (59 sièges) devaient s'allier à NZ First pour dépasser le seuil de 62 sièges.",
        },
      },
    ],
    localImplantation: {
      summary:
        "Parti centré sur la figure nationale de Winston Peters, sans ancrage municipal spécifique dans un pays où les maires ne sont traditionnellement pas affiliés aux partis politiques nationaux.",
      source: {
        name: 'NZ Herald',
        url: 'https://www.nzherald.co.nz',
        accessedOn: '2026-09-09',
      },
    },
    founded: 1993,
    description:
      "Fondé en 1993 par Winston Peters, ancien député du National Party. A participé à plusieurs gouvernements de coalition, travaillistes et nationaux, depuis sa fondation.",
  },
  {
    slug: 'ekre',
    name: 'Eesti Konservatiivne Rahvaerakond (EKRE)',
    countryCode: 'EE',
    positioning: 'National-conservateur, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "17 sièges obtenus aux élections de mars 2023, tombés à environ 10 sur 101 au Riigikogu après une scission interne en 2024 (« nuit des longs couteaux » ayant vu l'exclusion de plusieurs cadres, dont l'ancien président du Riigikogu Henn Põlluaas, à l'origine du parti rival ERK) puis de nouveaux départs en 2026. Dans l'opposition face à la coalition au pouvoir (Reform, SDE, Eesti 200), le parti se présente comme la seule véritable opposition et mène des actions d'obstruction parlementaire.",
    electoralStatusSource: {
      name: 'Riigikogu',
      url: 'https://www.riigikogu.ee/fraktsioonide-teated/eesti-konservatiivse-rahvaerakonna-fraktsioon/ekre-alustab-riigikogus-taiemahulist-obstruktsiooni-valitsuse-poliitika-pidurdamiseks/',
      accessedOn: '2026-09-08',
    },
    officialWebsite: 'https://ekre.ee',
    socialAccounts: [
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Eesti Konservatiivne Rahvaerakond » (Estonie)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: "ERR News — EKRE vows national focus and an end to 'Russifying' immigration",
        url: 'https://news.err.ee/1609967681/ekre-vows-national-focus-and-an-end-to-russifying-immigration',
        accessedOn: '2026-10-20',
        note: "Déclaration adoptée par le conseil du parti en mars 2026 en vue des législatives de 2027 : refonte radicale de la politique migratoire et fin de l'immigration qualifiée de « russifiante ».",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Riigikogu — eelnõu 145 SE (2020), registre officiel",
        url: "https://api.riigikogu.ee/api/volumes/drafts/7c3765b5-b4be-4fab-a037-1711e4603961?lang=ET",
        accessedOn: '2026-10-20',
        note: "Statut à revérifier. Le parti a participé au gouvernement d'avril 2019 à janvier 2021, avec le ministère de l'Intérieur. Une loi de 2020 visant à limiter le détournement des règles de travail des étrangers (salaire au moins égal au salaire moyen estonien) a été adoptée sur projet de ce gouvernement ; les règles ont été modifiées depuis et son maintien en vigueur n'a pas pu être établi. En 2022, sa proposition de loi 628 SE sur les étrangers et l'enseignement supérieur a été rejetée.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2023',
        chamber: 'Riigikogu',
        date: '2023-03-05',
        seats: 17,
        totalSeats: 101,
        votePercent: 16.1,
        source: {
          name: 'ERR — Top six takeaways from Estonia\'s 2023 Riigikogu elections',
          url: 'https://news.err.ee/1608905345/top-six-takeaways-from-estonia-s-2023-riigikogu-elections',
          accessedOn: '2026-09-09',
          note: "Groupe parlementaire réduit à 17 puis, par scissions successives (2024, 2026), à environ 10 sièges sans nouvelle élection.",
        },
      },
      {
        label: 'Élections législatives 2019',
        chamber: 'Riigikogu',
        date: '2019-03-03',
        seats: 19,
        totalSeats: 101,
        votePercent: 17.76,
        source: {
          name: "Wikipedia — 2019 Estonian parliamentary election",
          url: 'https://en.wikipedia.org/wiki/2019_Estonian_parliamentary_election',
          accessedOn: '2026-09-15',
        },
      },
    ],
    europeanRepresentation: {
      meps: 0,
      totalCountryMeps: 7,
      source: {
        name: 'European Parliament — 2024 European Parliament election in Estonia',
        url: 'https://en.wikipedia.org/wiki/2024_European_Parliament_election_in_Estonia',
        accessedOn: '2026-09-09',
        note: "EKRE avait remporté 1 siège en juin 2024 (Jaak Madison), mais celui-ci a quitté le parti après l'élection avant de rejoindre le Parti du centre estonien en août 2024 : le parti n'a donc plus d'élu au Parlement européen depuis.",
      },
    },
    founded: 2012,
    description:
      'Fondé en 2012 par fusion de deux petits partis nationaux-conservateurs. Dirigé par Martin Helme, fils du fondateur Mart Helme.',
  },
  {
    slug: 'nacionala-apvieniba',
    name: 'Nacionālā apvienība (Alliance nationale)',
    countryCode: 'LV',
    positioning: 'National-conservateur, droite radicale',
    electoralStatus: 'pouvoir',
    electoralStatusDetail:
      "Partenaire de la nouvelle coalition gouvernementale formée le 28 mai 2026 avec Apvienotais saraksts (Liste unie), Jaunā Vienotība (Nouvelle Unité) et ZZS (Union des Verts et des Agriculteurs). La ministre issue du parti, Ilze Indriksone, a annoncé vouloir « garantir que la Lettonie reste un État national » via une politique migratoire stricte.",
    electoralStatusSource: {
      name: 'LSM.lv',
      url: 'https://www.lsm.lv/raksts/zinas/latvija/28.05.2026-apvienotais-saraksts-nacionala-apvieniba-jauna-vienotiba-un-zzs-paraksta-koalicijas-ligumu-un-valdibas-deklaraciju.a649007/',
      accessedOn: '2026-09-08',
    },
    officialWebsite: 'https://www.nacionalaapvieniba.lv',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/vl_tblnnk' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Nacionālā Apvienība » (Lettonie)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé d'extrême droite ; non codé populiste. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: "LV portāls — Valdība atbalsta Iekšlietu ministrijas sagatavoto visaptverošo imigrācijas ierobežošanas plānu",
        url: "https://lvportals.lv/dienaskartiba/394845-valdiba-atbalsta-iekslietu-ministrijas-sagatavoto-visaptveroso-imigracijas-ierobezosanas-planu-2026",
        accessedOn: '2026-10-20',
        note: "Le plan de restriction de l'immigration du ministre de l'Intérieur Jānis Dombrava (Alliance nationale) prévoit des quotas d'entrée pour les ressortissants de pays tiers et des conditions renforcées pour les étudiants étrangers et les titres de séjour.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: "LV portāls — Valdība atbalsta Iekšlietu ministrijas sagatavoto visaptverošo imigrācijas ierobežošanas plānu",
        url: 'https://lvportals.lv/dienaskartiba/394845-valdiba-atbalsta-iekslietu-ministrijas-sagatavoto-visaptveroso-imigracijas-ierobezosanas-planu-2026',
        accessedOn: '2026-10-20',
        note: "Le Conseil des ministres a approuvé le 22 septembre 2026 le plan global de restriction de l'immigration (71 mesures : quotas d'entrée de ressortissants de pays tiers, conditions renforcées pour les étudiants étrangers et les titres de séjour) préparé par le ministère de l'Intérieur de Jānis Dombrava (Alliance nationale), en poste depuis le 29 mai 2026.",
      },
    },
    electoralHistory: [
      {
        label: "Élections législatives 2026",
        chamber: "Saeima",
        date: '2026-10-03',
        seats: 10,
        totalSeats: 100,
        source: {
          name: "LSM — The votes are in: United List handed massive mandate by Latvian voters",
          url: 'https://eng.lsm.lv/article/politics/election/04.10.2026-the-votes-are-in-united-list-handed-massive-mandate-by-latvian-voters.a666044/',
          accessedOn: '2026-10-05',
          note: "Résultats préliminaires. Coalition probable avec la Liste unie et Nouvelle Unité (59 sièges sur 100).",
        },
      },
      {
        label: 'Élections législatives 2022',
        chamber: 'Saeima',
        date: '2022-10-01',
        seats: 13,
        totalSeats: 100,
        votePercent: 9.4,
        source: {
          name: 'Wikipedia — 2022 Latvian parliamentary election',
          url: 'https://en.wikipedia.org/wiki/2022_Latvian_parliamentary_election',
          accessedOn: '2026-09-09',
          note: 'Score quasiment stable par rapport à 2018 ; entré dans la coalition gouvernementale de Krišjānis Kariņš après ce scrutin.',
        },
      },
    ],
    europeanRepresentation: {
      meps: 2,
      totalCountryMeps: 9,
      europeanGroup: 'Conservateurs et réformistes européens (ECR)',
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Lettonie',
        url: 'https://results.elections.europa.eu/en/national-results/latvia/2024-2029/',
        accessedOn: '2026-09-09',
      },
    },
    founded: 2010,
    description:
      "Fondé en 2010 par la fusion de Tēvzemei un Brīvībai/LNNK et Visu Latvijai!. Membre de coalitions gouvernementales à plusieurs reprises depuis 2011.",
  },
  {
    slug: 'adr-luxembourg',
    name: 'Alternativ Demokratesch Reformpartei (ADR)',
    countryCode: 'LU',
    positioning: 'National-conservateur, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Parti d'opposition depuis la formation du gouvernement de coalition CSV-DP (Frieden-Bettel) le 17 novembre 2023. A fait son entrée au Parlement européen pour la première fois de son histoire lors des élections européennes de 2024.",
    electoralStatusSource: {
      name: 'Wikipedia — Frieden-Bettel Government',
      url: 'https://en.wikipedia.org/wiki/Frieden-Bettel_Government',
      accessedOn: '2026-09-08',
    },
    officialWebsite: 'https://adr.lu',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/adr_lu' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Alternativ Demokratesch Reformpartei » (Luxembourg)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste et d'extrême droite depuis 2022 (cas limite). Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Le Quotidien',
        url: 'https://lequotidien.lu/politique-societe/ladr-veut-stopper-la-migration-irreguliere/',
        accessedOn: '2026-10-20',
        note: "Le parti veut « stopper la migration irrégulière » et estime que le Luxembourg « ne peut pas accueillir davantage de migrants, excepté ceux qui ont un vrai droit à l'asile et arrivent par des voies légales » (Le Quotidien, 10 novembre 2023).",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Le Quotidien',
        url: 'https://lequotidien.lu/politique-societe/ladr-veut-stopper-la-migration-irreguliere/',
        accessedOn: '2026-10-20',
        note: "Parti d'opposition sans participation gouvernementale. Statut à vérifier : le registre de la Chambre des députés n'a pas pu être consulté le 20 octobre 2026 (accès automatisé refusé).",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2023',
        chamber: 'Chambre des députés',
        date: '2023-10-08',
        seats: 5,
        totalSeats: 60,
        votePercent: 9.54,
        source: {
          name: 'IPU Parline — Luxembourg Chamber of Deputies October 2023 Election',
          url: 'https://data.ipu.org/parliament/LU/LU-LC01/election/LU-LC01-E20231008/',
          accessedOn: '2026-09-09',
          note: 'Quatrième force du pays, derrière le CSV, le DP et le LSAP.',
        },
      },
    ],
    europeanRepresentation: {
      meps: 1,
      totalCountryMeps: 6,
      europeanGroup: 'Conservateurs et réformistes européens (ECR)',
      source: {
        name: 'Wikipedia — 2024 European Parliament election in Luxembourg',
        url: 'https://en.wikipedia.org/wiki/2024_European_Parliament_election_in_Luxembourg',
        accessedOn: '2026-09-09',
        note: "Fernand Kartheiser, élu — première entrée du parti au Parlement européen de son histoire.",
      },
    },
    founded: 1987,
    description:
      "Fondé en 1987 comme parti de défense des droits à pension, réorienté progressivement vers un profil national-conservateur centré sur l'immigration et l'identité nationale.",
  },
  {
    slug: 'elam',
    name: 'Εθνικό Λαϊκό Μέτωπο (ELAM)',
    countryCode: 'CY',
    positioning: 'National-populiste, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Aux élections législatives du 24 mai 2026, le parti passe de 4 à 8 sièges (10,9 % des voix, contre 6,8 % en 2021) et devient, à égalité de sièges avec le DIKO, la troisième force derrière le DISY et l'AKEL.",
    electoralStatusSource: {
      name: 'Wikipedia — 2026 Cypriot legislative election',
      url: 'https://en.wikipedia.org/wiki/2026_Cypriot_legislative_election',
      accessedOn: '2026-10-21',
    },
    officialWebsite: 'https://elamcy.com',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/ELAM_official' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Ethniko Laiko Metopo » (Chypre)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste (cas limite) et d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Anixneuseis.gr',
        url: 'https://www.anixneuseis.gr/%CE%BA%CF%8D%CF%80%CF%81%CE%BF%CF%82-2026-%CE%BD%CE%AF%CE%BA%CE%B7-%CE%B4%CE%B7%CF%83%CF%85-%CE%AC%CE%BD%CE%BF%CE%B4%CE%BF%CF%82-%CE%B5%CE%BB%CE%B1%CE%BC-%CE%B5%CE%AF%CF%83%CE%BF%CE%B4%CE%BF%CF%82-%CE%B1%CE%BD%CF%84%CE%B9%CF%83%CF%85%CF%83%CF%84%CE%B7%CE%BC%CE%B9%CE%BA%CF%8E%CE%BD-%CE%BA%CE%B1%CE%B9-%CE%BC%CE%AE%CE%BD%CF%85%CE%BC%CE%B1-%CF%86%CE%B8%CE%BF%CF%81%CE%AC%CF%82-%CF%80%CF%81%CE%BF%CF%82-%CF%84%CE%BF-%CF%80%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CE%BA%CF%8C-%CE%BA%CE%AD%CE%BD%CF%84%CF%81%CE%BF/',
        unverified: "lien mort le 2026-10-20",
        note: "Position migratoire à documenter.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Anixneuseis.gr',
        url: 'https://www.anixneuseis.gr/%CE%BA%CF%8D%CF%80%CF%81%CE%BF%CF%82-2026-%CE%BD%CE%AF%CE%BA%CE%B7-%CE%B4%CE%B7%CF%83%CF%85-%CE%AC%CE%BD%CE%BF%CE%B4%CE%BF%CF%82-%CE%B5%CE%BB%CE%B1%CE%BC-%CE%B5%CE%AF%CF%83%CE%BF%CE%B4%CE%BF%CF%82-%CE%B1%CE%BD%CF%84%CE%B9%CF%83%CF%85%CF%83%CF%84%CE%B7%CE%BC%CE%B9%CE%BA%CF%8E%CE%BD-%CE%BA%CE%B1%CE%B9-%CE%BC%CE%AE%CE%BD%CF%85%CE%BC%CE%B1-%CF%86%CE%B8%CE%BF%CF%81%CE%AC%CF%82-%CF%80%CF%81%CE%BF%CF%82-%CF%84%CE%BF-%CF%80%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CE%BA%CF%8C-%CE%BA%CE%AD%CE%BD%CF%84%CF%81%CE%BF/',
        unverified: "lien mort le 2026-10-20 ; registre de la Chambre des représentants inaccessible",
        note: "Parti d'opposition sans participation gouvernementale. Statut à vérifier : le registre de la Chambre des représentants de Chypre n'a pas pu être consulté le 20 octobre 2026 (accès automatisé refusé).",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2026',
        chamber: 'Chambre des représentants',
        date: '2026-05-24',
        seats: 8,
        totalSeats: 56,
        votePercent: 10.9,
        source: {
          name: 'Elections Stats — résultats Chypre 2026',
          url: 'https://x.com/ElectionsStats/status/2058601894902124607',
          accessedOn: '2026-09-09',
          note: "Plus forte progression de ce scrutin (+4 points), faisant d'ELAM la troisième force du pays.",
        },
      },
      {
        label: 'Élections législatives 2021',
        chamber: 'Chambre des représentants',
        date: '2021-05-30',
        seats: 4,
        totalSeats: 56,
        votePercent: 6.78,
        source: {
          name: 'IPU Parline — Cyprus House of Representatives May 2021 Election',
          url: 'https://data.ipu.org/parliament/CY/CY-LC01/election/CY-LC01-E20210530/',
          accessedOn: '2026-09-09',
        },
      },
    ],
    europeanRepresentation: {
      meps: 1,
      totalCountryMeps: 6,
      europeanGroup: 'Conservateurs et réformistes européens (ECR)',
      source: {
        name: 'Cyprus Mail — Cyprus\' six MEPs: Elam and Fidias win seat, Akel loses one',
        url: 'https://cyprus-mail.com/2024/06/10/cyprus-six-meps-elam-and-fidias-win-seat-akel-loses-one/',
        accessedOn: '2026-09-09',
        note: "Première entrée du parti au Parlement européen, avec Geadis Geadi comme élu.",
      },
    },
    founded: 2008,
    description:
      "Fondé en 2008. Troisième force politique de Chypre depuis les élections législatives de mai 2026, en forte progression électorale depuis sa création.",
  },
  {
    slug: 'midflokkurinn',
    name: 'Miðflokkurinn (Parti du centre)',
    countryCode: 'IS',
    positioning: 'National-conservateur, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Représenté à l'Althing depuis les élections de novembre 2024. Aux élections municipales de Reykjavik de mai 2026, le parti passe de 0 à 3 sièges au conseil municipal de la capitale (11,36 % des voix).",
    electoralStatusSource: {
      name: 'Iceland Review — Major changes ahead for Reykjavik City Council',
      url: 'https://www.icelandreview.com/news/major-changes-ahead-for-reykjavik-city-council-after-election-results/',
      accessedOn: '2026-09-10',
    },
    officialWebsite: 'https://midflokkurinn.is',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/midflokkurinn' },
    ],
    classificationSource: {
      name: "The PopuList 4.0 — entrée « Miðflokkurinn » (Islande)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
      note: "Codé populiste ; non codé d'extrême droite. Version 4.0 du jeu de données (mai 2026), qui couvre les élections nationales de 31 pays européens du 1er janvier 1989 au 1er mai 2026. Inclusion au titre du critère (a) de la méthodologie : le programme du parti demande de réduire le flux d'immigrants vers l'Islande « dans tous les domaines » (voir « Intention »).",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: "Miðflokkurinn — Gæsla landamæra og málefni hælisleitenda og flóttamanna (programme du parti)",
        url: 'https://midflokkurinn.is/stefna/gaesla-landamaera-og-malefni-haelisleitenda-og-flottamanna/',
        accessedOn: '2026-10-20',
        note: "Le parti demande une nouvelle loi sur les étrangers fondée sur « la volonté et les intérêts de la nation », un arrêt temporaire de cinq ans de l'octroi de l'asile, l'exclusion du droit d'asile pour les personnes entrées irrégulièrement, et de « réduire le flux d'immigrants vers l'Islande dans tous les domaines ».",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "Althingi — þingmál 158/35 « veiting íslensks ríkisborgararéttar » (registre officiel, XML)",
        url: "https://www.althingi.is/altext/xml/thingmalalisti/thingmal/?lthing=158&malnr=35",
        accessedOn: '2026-10-20',
        note: "Parti d'opposition. Sa proposition de résolution sur l'octroi de la nationalité islandaise (Snorri Másson et sept autres députés), non examinée lors de la session 2025-2026, a été redéposée en septembre 2026 et attend sa première lecture. Aucun texte migratoire de ses députés n'a été adopté depuis 2024.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections municipales de Reykjavik 2026',
        chamber: 'Conseil municipal de Reykjavik',
        date: '2026-05-16',
        seats: 3,
        totalSeats: 23,
        votePercent: 11.36,
        source: {
          name: 'Wikipedia — 2026 Reykjavík City Council election',
          url: 'https://en.wikipedia.org/wiki/2026_Reykjav%C3%ADk_City_Council_election',
          accessedOn: '2026-09-10',
          note: "Première entrée du parti au conseil municipal de la capitale, après un score nul en 2022.",
        },
      },
    ],
    founded: 2017,
    description:
      "Fondé en 2017 par Sigmundur Davíð Gunnlaugsson, ancien Premier ministre islandais contraint à la démission lors du scandale des Panama Papers en 2016. Seul parti islandais de cette envergure classé national-conservateur et restrictif sur l'immigration.",
  },
  {
    slug: 'sanseito',
    name: '参政党 (Sanseitō)',
    countryCode: 'JP',
    positioning: 'Nationaliste japonais, populiste de droite radicale à extrême droite',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Dans l'opposition aux deux chambres de la Diète, avec 15 sièges sur 465 à la Chambre des représentants et 15 sur 248 à la Chambre des conseillers. Le parti est passé de 4 à 30 parlementaires en sept mois, à la faveur de deux scrutins nationaux successifs : les sénatoriales du 20 juillet 2025 (de 1 à 15 conseillers) puis les élections générales anticipées du 8 février 2026 (de 3 à 15 députés). Malgré la supermajorité obtenue par le PLD de Sanae Takaichi lors de ce dernier scrutin, Sanseitō est devenu l'une des principales forces d'opposition.",
    electoralStatusSource: {
      name: 'Wikipedia — 2026 Japanese general election',
      url: 'https://en.wikipedia.org/wiki/2026_Japanese_general_election',
      accessedOn: '2026-09-13',
    },
    officialWebsite: 'https://sanseito.jp',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/sansei411' },
      { platform: 'YouTube', url: 'https://www.youtube.com/@sanseito-official' },
    ],
    classificationSource: {
      name: "The Conversation — Rightwing populist Sanseitō party shakes Japan with election surge",
      url: "https://theconversation.com/rightwing-populist-sanseito-party-shakes-japan-with-election-surge-261303",
      accessedOn: '2026-10-20',
      note: "Décrit comme un parti populiste de droite faisant campagne sur une plateforme « anti-étrangers et anti-immigration » sous le slogan « Japanese First » (21 juillet 2025). Sanseitō n'est codé ni par The PopuList, limitée à l'Europe, ni par ParlGov, qui couvre le Japon mais dont les données s'arrêtent en 2023 (vérifié le 2026-10-20). L'article de l'Asia-Pacific Journal cité jusqu'ici n'a pas pu être consulté.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'The Conversation — Rightwing populist Sanseitō party shakes Japan with election surge',
        url: 'https://theconversation.com/rightwing-populist-sanseito-party-shakes-japan-with-election-surge-261303',
        accessedOn: '2026-10-20',
        note: "Campagne de 2025 sous le slogan « Japanese First » ; son président Sohei Kamiya promet une « régulation des étrangers ».",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: "参議院 — 外国人総合政策庁の設置等による外国人政策の総合的な推進に関する法律案 (proposition de loi n° 9, 221e session)",
        url: "https://www.sangiin.go.jp/japanese/joho1/kousei/gian/221/meisai/m221100221009.htm",
        accessedOn: '2026-10-20',
        note: "Parti d'opposition n'ayant jamais participé à un gouvernement. Le 17 juin 2026, son président Sohei Kamiya et trois autres sénateurs ont déposé une proposition de loi créant une agence chargée de la politique des étrangers ; au dernier relevé du registre du Sénat (19 juin 2026), elle n'avait été ni renvoyée en commission ni votée.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections générales anticipées 2026',
        chamber: 'Chambre des représentants (Shūgiin)',
        date: '2026-02-08',
        seats: 15,
        totalSeats: 465,
        votePercent: 7.44,
        source: {
          name: 'Wikipedia — 2026 Japanese general election',
          url: 'https://en.wikipedia.org/wiki/2026_Japanese_general_election',
          accessedOn: '2026-09-13',
          note: "Gain de 12 sièges, tous obtenus à la représentation proportionnelle. Scrutin anticipé convoqué par la Première ministre Sanae Takaichi, remporté par le PLD avec 316 sièges sur 465.",
        },
      },
      {
        label: 'Élections à la Chambre des conseillers 2025',
        chamber: 'Chambre des conseillers (Sangiin)',
        date: '2025-07-20',
        seats: 14,
        totalSeats: 248,
        votePercent: 12.55,
        source: {
          name: 'Wikipedia — 2025 Japanese House of Councillors election',
          url: 'https://en.wikipedia.org/wiki/2025_Japanese_House_of_Councillors_election',
          accessedOn: '2026-09-13',
          note: "14 sièges remportés sur les 125 renouvelés ce jour-là, portant le groupe à 15 sur 248. Troisième score national à la proportionnelle.",
        },
      },
      {
        label: 'Élections à la Chambre des conseillers 2022',
        chamber: 'Chambre des conseillers (Sangiin)',
        date: '2022-07-10',
        seats: 1,
        totalSeats: 248,
        votePercent: 3.33,
        source: {
          name: 'Wikipedia — Sanseitō',
          url: 'https://en.wikipedia.org/wiki/Sanseit%C5%8D',
          accessedOn: '2026-09-13',
          note: "Première entrée au Parlement, deux ans après la fondation du parti, avec l'élection de son fondateur Sohei Kamiya.",
        },
      },
    ],
    localImplantation: {
      summary:
        "Maillage local en construction rapide mais encore marginal à l'échelle du pays : environ 200 conseillers municipaux sur les 28 696 que compte le Japon, et 5 conseillers préfectoraux sur 2 614. Le parti s'appuie sur un réseau de sections locales issu de sa base YouTube plutôt que sur des implantations anciennes.",
      source: {
        name: 'Wikipedia — Sanseitō',
        url: 'https://en.wikipedia.org/wiki/Sanseit%C5%8D',
        accessedOn: '2026-09-13',
      },
    },
    founded: 2020,
    description:
      "Fondé le 17 mars 2020 par Sohei Kamiya, ancien conseiller municipal de Suita (préfecture d'Osaka), d'abord comme une chaîne YouTube contestataire pendant la pandémie de Covid-19. Il a fait campagne en 2025 et 2026 sous le slogan « les Japonais d'abord ».",
  },
];

export function getPartiesByCountry(countryCode?: string) {
  if (!countryCode) return parties;
  return parties.filter((p) => p.countryCode === countryCode);
}

export function getPartyBySlug(slug: string) {
  return parties.find((p) => p.slug === slug);
}
