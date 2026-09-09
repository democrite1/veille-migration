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
      "Premier groupe d'opposition à l'Assemblée nationale (17e législature) : 126 députés sur 577 (record historique du parti), en hausse de 37 sièges par rapport à 2022.",
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
      name: 'The PopuList',
      url: 'https://popu-list.org',
      note: 'Classifié parti populiste radical de droite / anti-immigration.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: "Programme officiel RN — élections législatives 2024",
        url: 'https://rassemblementnational.fr',
        note: 'Réduction drastique de l\'immigration légale et de l\'accès à la nationalité ("priorité nationale"). Le terme "remigration" a été explicitement écarté par la direction du parti (Bardella, Le Pen), qui s\'en distingue publiquement de Reconquête.',
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Assemblée nationale',
        url: 'https://www2.assemblee-nationale.fr/17/les-groupes-politiques/rassemblement-national',
        note: "Parti d'opposition sans majorité : aucune loi RN promulguée à ce jour au niveau national. Des propositions de loi portées par des députés RN sont déposées ponctuellement — voir la section Suivi législatif pour le détail texte par texte.",
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
      europeanGroup: "Patriotes pour l'Europe (qu'il préside via Jordan Bardella)",
      source: {
        name: 'Touteleurope.eu',
        url: 'https://www.touteleurope.eu/institutions/patriotes-pour-l-europe-quatre-questions-sur-ce-groupe-politique-du-parlement-europeen-preside-par-jordan-bardella/',
        accessedOn: '2026-09-09',
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
      name: 'The PopuList',
      url: 'https://popu-list.org',
      note: 'Classifié parti d\'extrême droite / anti-immigration.',
    },
    intention: {
      tag: 'remigration',
      source: {
        name: 'Déclarations publiques d\'Éric Zemmour',
        url: 'https://parti-reconquete.fr',
        note: 'Le terme "remigration" est employé explicitement et de manière répétée par le fondateur du parti, y compris en meeting, comme objectif de politique migratoire.',
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Assemblée nationale — résultats législatives 2024',
        url: 'https://www.franceinfo.fr/politique/parti-reconquete/',
        note: "Aucun élu à l'Assemblée nationale : aucun texte déposé au niveau national à ce jour.",
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
    slug: 'afd',
    name: 'Alternative für Deutschland (AfD)',
    countryCode: 'DE',
    positioning: 'Droite radicale, national-conservateur',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Deuxième force politique du Bundestag depuis les élections fédérales du 23 février 2025 (20,8% des voix, 152 sièges). Coprésidence de groupe : Alice Weidel et Tino Chrupalla. Aucun parti n'accepte de coalition avec l'AfD au niveau fédéral (« Brandmauer »).",
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
      name: 'Manifesto Project / The PopuList / CHES',
      url: 'https://manifesto-project.wzb.eu',
      note: 'Classifié parti de la famille nationaliste / populiste radical de droite.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Grundsatzprogramm AfD',
        url: 'https://www.afd.de',
        note: 'Le programme fédéral officiel prône un arrêt/une réduction drastique de l\'immigration et l\'augmentation des expulsions, sans employer officiellement le terme "remigration". Ce terme est en revanche associé publiquement au parti depuis la réunion de Potsdam (novembre 2023, révélée par Correctiv en janvier 2024), à laquelle a participé un collaborateur alors proche d\'Alice Weidel ; la direction du parti a publiquement pris ses distances avec les plans de "remigration de masse" évoqués lors de cette réunion.',
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Deutscher Bundestag',
        url: 'https://www.bundestag.de/parlament/fraktionen/afd/afd-inhalt-527374',
        note: "Parti d'opposition au niveau fédéral, exclu de toute coalition : aucune loi AfD promulguée au Bundestag à ce jour.",
      },
    },
    electoralHistory: [
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
        "Premier Landrat (préfet de district) du parti obtenu à Sonneberg (Thuringe) en juin 2023, puis premier maire à Raguhn-Jeßnitz (Saxe-Anhalt) la même année. Implantation croissante dans les Länder de l'ex-RDA, confirmée par une large victoire régionale en Saxe-Anhalt en 2026.",
      source: {
        name: 'ZDFheute / Tagesspiegel',
        url: 'https://www.zdfheute.de/politik/deutschland/sesselmann-afd-landrat-thueringen-sonneberg-100.html',
        accessedOn: '2026-09-09',
      },
    },
    founded: 2013,
    description:
      "Fondé en 2013, d'abord sur une ligne anti-euro avant de se recentrer sur l'immigration et l'identité nationale à partir de 2015. Depuis les élections fédérales de 2025, deuxième force politique du Bundestag.",
  },
  {
    slug: 'reform-uk',
    name: 'Reform UK',
    countryCode: 'GB',
    positioning: 'National-populiste, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      '8 députés à la Chambre des Communes : Nigel Farage (Clacton), Lee Anderson (Ashfield), Richard Tice (Boston and Skegness), Sarah Pochin (Runcorn and Helsby), Danny Kruger (East Wiltshire), Robert Jenrick (Newark), Andrew Rosindell (Romford) et Suella Braverman (Fareham and Waterlooville) — plusieurs issus de défections conservatrices.',
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
      name: 'The PopuList (successeur du Brexit Party) / Wikipedia',
      url: 'https://popu-list.org',
      note: 'Classifié parti populiste de droite radicale, positionnement anti-immigration.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: "Manifeste Reform UK 2024 (« Contract with You »)",
        url: 'https://www.reformparty.uk',
        note: "Objectif de « net zero » migration nette, gel de l'immigration non essentielle et expulsion de tous les arrivants illégaux par petits bateaux. Ne mentionne pas explicitement la « remigration » de populations déjà installées légalement.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'UK Parliament',
        url: 'https://members.parliament.uk/member/5091/career',
        note: "Parti d'opposition, 8 sièges sur 650 : aucune loi Reform UK promulguée à ce jour.",
      },
    },
    electoralHistory: [
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
        "Percée aux élections locales de mai 2025 : plus de 600 conseillers élus et prise de contrôle de plusieurs conseils de comté (dont le Kent, le Lincolnshire et Durham), ainsi que deux mairies avec scrutin direct (Greater Lincolnshire et Hull and East Yorkshire).",
      source: {
        name: 'The Guardian — Local elections 2025 results',
        url: 'https://www.theguardian.com/politics/2025/may/02/local-elections-results-2025-reform-uk',
        accessedOn: '2026-09-09',
      },
    },
    founded: 2018,
    description:
      "Fondé en 2018 sous le nom Brexit Party, renommé Reform UK en 2021. Dirigé par Nigel Farage depuis septembre 2024.",
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
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: "Classifié parti de droite radicale ; héritier direct du MSI (Movimento Sociale Italiano) via Alleanza Nazionale.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Secolo d\'Italia — bilan gouvernemental',
        url: 'https://www.secoloditalia.it/2026/06/stop-allimmigrazione-irregolare-fdi-presenta-i-numeri-del-governo-meloni-su-rimpatri-e-sbarchi/',
        note: "Priorité affichée : réduction drastique des débarquements et expulsions accélérées des personnes en situation irrégulière. -57% de débarquements en 2024-2025 vs 2023 ; -43% sur les 5 premiers mois de 2026 vs 4 ans plus tôt. Pas de politique de remigration de citoyens ou résidents légaux.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: 'Il Foglio / Today.it',
        url: 'https://www.ilfoglio.it/politica/2025/06/30/news/il-doppio-fronte-del-governo-sull-immigrazione-il-decreto-flussi-e-le-polemiche-con-la-cassazione-per-l-albania-7879409',
        note: "Décret flux migratoires et protocole Italie-Albanie (centres de rétention et rapatriement extraterritoriaux à Gjader) formellement en vigueur, malgré des décisions judiciaires italiennes ayant à plusieurs reprises refusé la rétention de migrants dans ces centres — tension ouverte entre gouvernement et magistrature sur l'application effective du dispositif.",
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
          name: 'Ministero dell\'Interno — Archivio storico delle elezioni',
          url: 'https://elezionistorico.interno.gov.it/',
          accessedOn: '2026-09-09',
        },
      },
    ],
    europeanRepresentation: {
      meps: 24,
      totalCountryMeps: 76,
      europeanGroup: 'Conservateurs et réformistes européens (ECR), que Giorgia Meloni préside',
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Italie',
        url: 'https://elections-results.eu/national-results/italy/2024-2029/',
        accessedOn: '2026-09-09',
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
      { platform: 'X', url: 'https://x.com/geertwilderspvv' },
    ],
    classificationSource: {
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti populiste de droite radicale, positionnement anti-immigration.',
    },
    intention: {
      tag: 'remigration',
      source: {
        name: 'Follow the Money',
        url: 'https://www.ftm.nl/artikelen/vier-partijen-hebben-deportatie-van-migranten-in-hun-verkiezingsprogramma-staan',
        note: "Selon l'analyse de Follow the Money, le PVV fait partie des partis dont le programme électoral appelle à la « remigratie » (remigration) des personnes issues de l'immigration. D'anciennes versions du programme proposaient explicitement un « ministère de la Remigration et de la Déislamisation » ; le programme 2023 a retiré cette formulation précise tout en maintenant l'objectif d'un arrêt total de l'asile et d'une réduction de l'immigration non-occidentale.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: 'Rijksoverheid.nl',
        url: 'https://www.rijksoverheid.nl/documenten/kamerstukken/2024/10/25/brief-over-nadere-afspraken-uitvoering-hoofdstuk-2-hoofdlijnenakkoord-grip-op-asiel-en-migratie',
        note: "Projet de loi « asielnoodmaatregelenwet » (loi de mesures d'urgence sur l'asile) déposé le 25 octobre 2024 par le cabinet Schoof, sous l'impulsion du PVV, pour permettre l'invocation d'un régime de crise migratoire. Le texte n'a jamais été voté avant la chute du gouvernement en juin 2025 ; son sort sous le cabinet Jetten reste incertain.",
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
        name: 'Parlement européen — résultats des élections européennes 2024, Pays-Bas',
        url: 'https://elections-results.eu/national-results/netherlands/2024-2029/',
        accessedOn: '2026-09-09',
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
      name: 'Manifesto Project',
      url: 'https://manifesto-project.wzb.eu',
      note: "Inclusion sur auto-déclaration : le programme officiel 2024 du parti (RNC Platform) fait de l'immigration sa priorité affichée n°1-2.",
    },
    intention: {
      tag: 'remigration',
      source: {
        name: 'Axios — « Trump\'s self-deportation machine »',
        url: 'https://www.axios.com/2026/07/28/trump-self-deportation-ice',
        note: "Le programme officiel du parti promet « la plus grande opération d'expulsion de l'histoire américaine ». Le dispositif de « self-deportation » mis en œuvre par l'administration incite financièrement au départ volontaire, avec des objectifs chiffrés de retours (plus de 200 000 départs attendus via ce seul programme) — critère de remigration au sens de la méthodologie de ce site, même si le mot lui-même n'est pas employé officiellement.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: 'DHS / Washington Times',
        url: 'https://www.washingtontimes.com/news/2026/sep/3/donald-trump-cuts-migrant-population-nearly-3-million-total-us/',
        note: "Plus de 605 000 expulsions et 1,9 million de départs « volontaires » (self-deportation) depuis janvier 2025, soit environ 2,5 millions de départs cumulés, portés par des mesures administratives (décrets présidentiels, directives DHS/ICE) sans nécessiter de vote du Congrès.",
      },
    },
    actionStatusHistory: [
      {
        date: '2026-06-30',
        tag: 'mesures_concretes_abrogee',
        note: "Le décret présidentiel (Executive Order 14160, 20 janvier 2025) visant à mettre fin au droit du sol pour les enfants nés aux États-Unis de parents sans statut légal a été invalidé par la Cour suprême le 30 juin 2026 (6 voix contre 3), comme contraire au 14e amendement.",
        source: {
          name: 'Congress.gov — CRS Legal Sidebar',
          url: 'https://www.congress.gov/crs-product/LSB11468',
        },
      },
    ],
    electoralHistory: [
      {
        label: 'Élections de mi-mandat 2024 — Chambre des représentants',
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
        label: 'Élections de mi-mandat 2024 — Sénat',
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
      "Non représenté au gouvernement mais partenaire de soutien parlementaire de la coalition Kristersson (Moderaterna-Kristdemokraterna-Liberalerna) via l'accord de Tidö (octobre 2022), avec une influence directe sur la politique migratoire sans détenir de portefeuille ministériel. Le 1er avril 2026, les quatre partis du bloc Tidö ont annoncé qu'en cas de victoire du bloc aux élections législatives de septembre 2026, SD entrerait pour la première fois au gouvernement avec des ministres.",
    electoralStatusSource: {
      name: 'Regeringen.se',
      url: 'https://www.regeringen.se/pressmeddelanden/2026/05/regeringen-och-sverigedemokraterna-presenterar-bokslut-over-tidoavtalet/',
      accessedOn: '2026-08-18',
    },
    officialWebsite: 'https://sd.se',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/sdriks' },
    ],
    classificationSource: {
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti de droite radicale ; fondé en 1988 avec des racines documentées dans des mouvements néonazis suédois.',
    },
    intention: {
      tag: 'remigration',
      source: {
        name: 'Migrationsverket',
        url: 'https://www.migrationsverket.se/nyhetsarkiv/nyhetsarkiv/2025-10-31-atervandringsbidraget-hojs-den-1-januari-2026.html',
        note: "Le « återvandringsbidrag » (littéralement : allocation de remigration) porté par SD dans l'accord de Tidö a été fortement revalorisé à 350 000 couronnes suédoises par adulte (jusqu'à 600 000 par foyer) à compter du 1er janvier 2026 — incitation financière chiffrée au retour volontaire, correspondant explicitement au critère de remigration retenu par la méthodologie de ce site.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: 'Regeringen.se',
        url: 'https://www.regeringen.se/pressmeddelanden/2025/04/ett-kraftigt-hojt-atervandringsbidrag/',
        note: "Règlement gouvernemental adopté le 30 octobre 2025, entré en vigueur le 1er janvier 2026, revalorisant l'allocation de remigration. Coût estimé à environ 2,5 milliards de couronnes sur trois ans.",
      },
    },
    electoralHistory: [
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
        votePercent: 17.5,
        source: {
          name: 'Valmyndigheten',
          url: 'https://www.val.se',
          accessedOn: '2026-09-09',
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
      "Premier parti aux élections législatives de septembre 2024 — une première historique — mais resté dans l'opposition : les négociations de coalition avec l'ÖVP menées par Herbert Kickl ont échoué début 2025. Le gouvernement Stocker (ÖVP-SPÖ-NEOS, première coalition tripartite du pays) a prêté serment le 3 mars 2025. Herbert Kickl dirige l'opposition au Conseil national (Nationalrat).",
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
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti de droite radicale ; fondé en 1956, avec d\'anciens cadres nazis et du VdU parmi ses fondateurs.',
    },
    intention: {
      tag: 'remigration',
      source: {
        name: 'NZZ / 20 Minuten',
        url: 'https://www.20min.ch/story/wahlen-oesterreich-remigration-und-asylstopp-was-will-fpoe-chef-herbert-kickl-103192636',
        note: "Le terme « Remigration » figure explicitement dans le programme électoral du parti et dans le discours régulier de Herbert Kickl, qui l'emploie pour désigner le retour de personnes immigrées y compris titulaires d'un titre de séjour valide. Le parti a même publié en 2026 un clip musical de promotion intitulé « Airbert One – Der Remigrationssong ».",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Wahlprogramm FPÖ',
        url: 'https://www.fpoe.at',
        note: "Parti d'opposition depuis mars 2025 : aucune loi FPÖ promulguée. Le programme prévoit la suspension du droit d'asile par « loi d'urgence » (Notgesetz), non déposée faute de majorité gouvernementale.",
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
          name: 'Bundesministerium für Inneres — Nationalratswahl 2024',
          url: 'https://wahl24.bmi.gv.at/',
          accessedOn: '2026-09-09',
        },
      },
      {
        label: 'Élections législatives 2019',
        chamber: 'Nationalrat',
        date: '2019-09-29',
        seats: 30,
        totalSeats: 183,
        votePercent: 16.2,
        source: {
          name: 'Bundesministerium für Inneres',
          url: 'https://bmi.gv.at',
          accessedOn: '2026-09-09',
          note: "Score en net recul après le scandale Ibiza de mai 2019, qui avait provoqué la chute du premier gouvernement de coalition ÖVP-FPÖ.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 6,
      totalCountryMeps: 20,
      europeanGroup: 'Patriotes pour l\'Europe (PfE)',
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Autriche',
        url: 'https://elections-results.eu/national-results/austria/2024-2029/',
        accessedOn: '2026-09-09',
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
      "33 députés sur 350 au Congreso de los Diputados, quatrième force politique du pays, dans l'opposition depuis sa création. A rompu ses pactes de gouvernement régionaux avec le Parti populaire (PP) en juillet 2024 sur la question de l'accueil des mineurs étrangers non accompagnés.",
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
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti de droite radicale, positionnement anti-immigration.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Democrata.es',
        url: 'https://www.democrata.es/politica/congreso-y-senado/vox-propone-congreso-expulsion-migrantes-irregulares-confiscacion-open-arms/',
        note: "Programme centré sur l'expulsion des migrants en situation irrégulière et la fin des voies de régularisation, sans politique explicite de remigration de résidents en situation régulière ou de nationaux.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: 'Vox España',
        url: 'https://www.voxespana.es/wp-content/uploads/2026/04/MCIU-VOX-Prioridad-nacional.pdf',
        note: "Proposition déposée au Congreso de los Diputados en avril 2026 (« Prioridad nacional ») demandant l'expulsion des migrants en situation irrégulière ; non contraignante et non votée, mais formellement déposée — parti minoritaire sans capacité de faire adopter une loi.",
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
          name: 'Ministerio del Interior — Elecciones Generales 2023',
          url: 'https://resultados.eleccionesgenerales23j.es/',
          accessedOn: '2026-09-09',
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
          name: 'Ministerio del Interior',
          url: 'https://www.interior.gob.es',
          accessedOn: '2026-09-09',
          note: "Meilleur résultat historique du parti, avant un recul à 33 sièges en 2023.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 6,
      totalCountryMeps: 61,
      europeanGroup: 'Patriotes pour l\'Europe (PfE)',
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Espagne',
        url: 'https://elections-results.eu/national-results/spain/2024-2029/',
        accessedOn: '2026-09-09',
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
    slug: 'fidesz',
    name: 'Fidesz – Magyar Polgári Szövetség',
    countryCode: 'HU',
    positioning: 'National-conservateur, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Défaite historique aux élections législatives du 12 avril 2026 : après 16 ans au pouvoir et quatre victoires consécutives à la majorité des deux tiers, l'alliance Fidesz-KDNP de Viktor Orbán n'obtient que 55 sièges (37% des voix) contre 141 sièges (54% des voix) pour le parti Tisza de Péter Magyar. Orbán a concédé sa défaite le soir même. Fidesz est désormais dans l'opposition.",
    electoralStatusSource: {
      name: 'CNN',
      url: 'https://www.cnn.com/2026/04/12/world/live-news/hungary-election-orban-magyar',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://fidesz.hu',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/fidesz_hu' },
    ],
    classificationSource: {
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti national-conservateur de droite radicale.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'HVG',
        url: 'https://hvg.hu/itthon/20260110_a-biztos-valasztas-ez-lett-orbanek-valasztasi-jelszava-eloben-a-fidesz-jeloltbemutato-kongresszusarol',
        note: "Discours centré sur la fermeture des frontières et le refus d'accueillir des migrants imposés par l'UE, avec une rhétorique sur le déclin démographique des « Européens de souche » ; pas de programme explicite de remigration de résidents déjà installés (l'immigration reste marginale en Hongrie, la politique vise essentiellement à empêcher de nouvelles arrivées).",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: 'mfor.hu',
        url: 'https://mfor.hu/cikkek/kozelet/dontott-a-kormany-a-hetfon-lejaro-migracios-valsaghelyzetrol.html',
        note: "L'« état de crise migratoire » décrété par les gouvernements Orbán successifs depuis 2015-2016 (fermeture des frontières, zones de transit, barrière frontalière) reste en vigueur : le nouveau gouvernement Tisza l'a lui-même prolongé jusqu'au 31 décembre 2026, illustrant la règle méthodologique selon laquelle une mesure concrète reste active indépendamment du parti au pouvoir tant qu'elle n'est pas abrogée.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives 2026',
        chamber: 'Országgyűlés (Assemblée nationale)',
        date: '2026-04-12',
        seats: 55,
        totalSeats: 199,
        votePercent: 37,
        source: {
          name: 'Nemzeti Választási Iroda (Office électoral national)',
          url: 'https://www.valasztas.hu',
          accessedOn: '2026-09-09',
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
          name: 'Nemzeti Választási Iroda',
          url: 'https://www.valasztas.hu',
          accessedOn: '2026-09-09',
          note: "Quatrième victoire consécutive à la majorité des deux tiers, avant la défaite historique de 2026.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 11,
      totalCountryMeps: 21,
      europeanGroup: "Patriotes pour l'Europe (PfE), rejoint en juillet 2024 après la rupture avec le PPE en 2021",
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Hongrie',
        url: 'https://elections-results.eu/national-results/hungary/2024-2029/',
        accessedOn: '2026-09-09',
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
      { platform: 'X', url: 'https://x.com/perussuomalaiset' },
    ],
    classificationSource: {
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti national-conservateur de droite radicale, positionnement anti-immigration.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Perussuomalaiset.fi',
        url: 'https://www.perussuomalaiset.fi/maahanmuuttopolitiikka/',
        note: "Programme visant une réduction forte de l'immigration hors UE/EEE par des mesures législatives et administratives, sans politique de remigration de résidents déjà installés.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: 'Suomen Politiikka',
        url: 'https://www.suomenpolitiikka.fi/helmikuun-perussuomalaisten-puheenaiheet-2026-kooste/',
        note: "Durcissement de la loi sur la citoyenneté mené en trois phases : allongement de la durée de résidence requise, renforcement des conditions de ressources et de bonne conduite (deux phases déjà mises en œuvre, la troisième — test de citoyenneté — en consultation).",
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
        votePercent: 17.5,
        source: {
          name: 'vaalit.fi',
          url: 'https://tulospalvelu.vaalit.fi/',
          accessedOn: '2026-09-09',
        },
      },
    ],
    europeanRepresentation: {
      meps: 2,
      totalCountryMeps: 15,
      europeanGroup: 'Conservateurs et réformistes européens (ECR)',
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Finlande',
        url: 'https://elections-results.eu/national-results/finland/2024-2029/',
        accessedOn: '2026-09-09',
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
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: "Classifié parti d'extrême droite ; héritier direct du Vlaams Blok, dissous en 2004 pour racisme par la justice belge.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Vlaams Belang',
        url: 'https://www.vlaamsbelang.org/nieuws/vlaams-belang-lanceert-resolutie-voor-een-massale-terugkeerstrategie-van-illegale-migranten',
        note: "Programme axé sur l'arrêt de l'immigration et le retour effectif des personnes en situation irrégulière (fermeture des frontières extérieures, centres de retour fermés) ; centré sur l'expulsion des personnes en situation irrégulière plutôt que sur une remigration de résidents en situation régulière.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: 'Vlaams Belang',
        url: 'https://www.vlaamsbelang.org/nieuws/vlaams-belang-lanceert-resolutie-voor-een-massale-terugkeerstrategie-van-illegale-migranten',
        note: "Résolution déposée au Parlement européen avec 36 autres eurodéputés appelant à une stratégie de retour à grande échelle des migrants en situation irrégulière ; non contraignante, parti d'opposition sans capacité de faire adopter une loi au niveau fédéral belge.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections fédérales 2024',
        chamber: 'Chambre des représentants',
        date: '2024-06-09',
        seats: 20,
        totalSeats: 150,
        votePercent: 13.8,
        source: {
          name: 'SPF Intérieur — Résultats électoraux',
          url: 'https://elections2024.belgium.be',
          accessedOn: '2026-09-09',
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
          name: 'SPF Intérieur',
          url: 'https://elections.fgov.be',
          accessedOn: '2026-09-09',
          note: "Percée majeure en 2019 (de 3 à 18 sièges), confirmée et amplifiée en 2024.",
        },
      },
    ],
    europeanRepresentation: {
      meps: 3,
      totalCountryMeps: 22,
      europeanGroup: "Patriotes pour l'Europe (PfE)",
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Belgique',
        url: 'https://elections-results.eu/national-results/belgium/2024-2029/',
        accessedOn: '2026-09-09',
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
      { platform: 'X', url: 'https://x.com/svp_ch' },
    ],
    classificationSource: {
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti national-conservateur de droite radicale, positionnement anti-immigration.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'UDC — svp.ch',
        url: 'https://www.svp.ch',
        note: "Programme centré sur la limitation de l'immigration et la préférence nationale à l'embauche, sans politique de remigration de résidents déjà installés légalement.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: 'Confédération suisse',
        url: 'https://www.admin.ch',
        note: "Initiative populaire « contre l'immigration de masse » portée par l'UDC, acceptée en votation le 9 février 2014 (50,3%), inscrivant des plafonds et contingents d'immigration dans la Constitution. Sa mise en œuvre législative de 2016 a été fortement atténuée (mécanisme de préférence indigène « light ») pour rester compatible avec l'accord de libre circulation UE-Suisse, sous la pression du Parlement et du risque de rupture des accords bilatéraux.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections fédérales 2023',
        chamber: 'Conseil national',
        date: '2023-10-22',
        seats: 62,
        totalSeats: 200,
        votePercent: 28.6,
        source: {
          name: 'Chancellerie fédérale — admin.ch',
          url: 'https://www.bfs.admin.ch/bfs/fr/home/statistiques/politique/elections/conseil-national.html',
          accessedOn: '2026-09-09',
          note: 'Meilleur score du parti à une élection fédérale depuis 2015.',
        },
      },
      {
        label: 'Élections fédérales 2019',
        chamber: 'Conseil national',
        date: '2019-10-20',
        seats: 53,
        totalSeats: 200,
        votePercent: 25.6,
        source: {
          name: 'Chancellerie fédérale',
          url: 'https://www.bfs.admin.ch',
          accessedOn: '2026-09-09',
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
      "Deuxième force politique du pays, devançant le Parti socialiste (PS) après les élections législatives anticipées de mai 2025 consécutives à la chute du gouvernement. André Ventura est chef de l'opposition depuis le 3 juin 2025. Le gouvernement est dirigé par l'Alliance Démocratique (AD, centre-droit) de Luís Montenegro.",
    electoralStatusSource: {
      name: 'Diário de Notícias',
      url: 'https://www.dn.pt/pol%C3%ADtica/ventura-ser%C3%A1-l%C3%ADder-da-oposi%C3%A7%C3%A3o-mesmo-sem-eleger-mais-deputados-entre-os-emigrantes',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://partidochega.pt',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/partido_chega' },
    ],
    classificationSource: {
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti populiste de droite radicale, positionnement anti-immigration.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Diário da Cidadania',
        url: 'https://diariodacidadania.com/2025/04/24/com-foco-em-imigracao-chega-apresenta-propostas-polemicas-para-residencia-e-nacionalidade/',
        note: "Programme centré sur la fin de l'immigration « à portes ouvertes », l'expulsion des personnes en situation irrégulière et le durcissement de l'accès à la résidence et à la nationalité, sans politique explicite de remigration de résidents en situation régulière.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Diário da Cidadania',
        url: 'https://diariodacidadania.com/2025/04/24/com-foco-em-imigracao-chega-apresenta-propostas-polemicas-para-residencia-e-nacionalidade/',
        note: "Parti d'opposition sans participation gouvernementale : propositions présentées (durcissement de la résidence et de la nationalité) mais aucune loi Chega promulguée. Le durcissement effectif du régime d'expulsion en vigueur depuis mars 2026 (« pacote retorno ») a été porté par le gouvernement AD, sous la pression politique de Chega, non par Chega lui-même.",
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
          name: 'Comissão Nacional de Eleições',
          url: 'https://www.cne.pt',
          accessedOn: '2026-09-09',
        },
      },
    ],
    europeanRepresentation: {
      meps: 2,
      totalCountryMeps: 21,
      europeanGroup: "Patriotes pour l'Europe (PfE)",
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Portugal',
        url: 'https://elections-results.eu/national-results/portugal/2024-2029/',
        accessedOn: '2026-09-09',
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
    slug: 'konfederacja',
    name: 'Konfederacja',
    countryCode: 'PL',
    positioning: 'National-libertarien, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Groupe parlementaire à la Diète (Sejm) depuis 2019, dans l'opposition à la coalition gouvernementale menée par Donald Tusk (Koalicja Obywatelska) depuis octobre 2023. Krzysztof Bosak, coprésident du parti, est vice-maréchal (vice-président) de la Diète.",
    electoralStatusSource: {
      name: 'Sejm Rzeczypospolitej Polskiej',
      url: 'https://www.sejm.gov.pl/sejm9.nsf/klubposlowie.xsp?klub=Konfederacja',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://konfederacja.pl',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/KONFEDERACJA_' },
    ],
    classificationSource: {
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti de droite radicale, positionnement anti-immigration.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Konfederacja.pl',
        url: 'https://konfederacja.pl/rzad-nie-kontroluje-imigracji-do-polski',
        note: "Programme centré sur le contrôle des frontières, l'expulsion des migrants en situation irrégulière et le rejet du Pacte européen sur la migration et l'asile, sans politique explicite de remigration de résidents en situation régulière.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: 'Konfederacja.pl',
        url: 'https://konfederacja.pl/chcemy-aby-sejm-zobowiazal-rzad-od-odrzucenia-paktu-migracyjnego/',
        note: "Proposition de loi déposée à la Diète pour supprimer le système de caution (kaucja) pour demandeurs d'asile instauré par le gouvernement PiS puis maintenu par le gouvernement Tusk ; non votée, parti minoritaire d'opposition sans capacité de faire adopter une loi seul.",
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
          name: 'Państwowa Komisja Wyborcza (Commission électorale nationale)',
          url: 'https://wybory.gov.pl',
          accessedOn: '2026-09-09',
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
          name: 'Państwowa Komisja Wyborcza',
          url: 'https://wybory.gov.pl',
          accessedOn: '2026-09-09',
        },
      },
    ],
    europeanRepresentation: {
      meps: 6,
      totalCountryMeps: 53,
      europeanGroup: "Éclatés entre plusieurs groupes : Europe des nations souveraines (ESN), Patriotes pour l'Europe (PfE) et non-inscrits, reflet des divisions internes du mouvement",
      source: {
        name: 'Parlement européen — résultats des élections européennes 2024, Pologne',
        url: 'https://results.elections.europa.eu/en/national-results/poland/2024-2029/',
        accessedOn: '2026-09-09',
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
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti populiste de droite radicale, positionnement anti-immigration.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'FrP — partiprogram 2025-2029',
        url: 'https://www.frp.no/files/Program/2025/FrP-Partiprogram-2025-2029.pdf',
        note: "Programme centré sur une réduction drastique de l'immigration non-occidentale et de l'asile, sans politique explicite de remigration de résidents déjà installés légalement.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Storting',
        url: 'https://www.stortinget.no',
        note: "Parti d'opposition sans participation gouvernementale depuis 2020 : aucune loi FrP promulguée à ce jour au niveau national.",
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
          note: 'Meilleur résultat historique du parti à une élection législative.',
        },
      },
      {
        label: 'Élections législatives 2021',
        chamber: 'Storting',
        date: '2021-09-13',
        seats: 21,
        totalSeats: 169,
        votePercent: 11.6,
        source: {
          name: 'Statistisk sentralbyrå (SSB)',
          url: 'https://www.ssb.no',
          accessedOn: '2026-09-09',
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
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti populiste de droite radicale, positionnement anti-immigration et anti-UE.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'SPD.cz',
        url: 'https://www.spd.cz',
        note: "Programme centré sur l'arrêt de l'immigration extra-européenne et le rejet du Pacte européen sur la migration et l'asile, sans politique explicite de remigration de résidents déjà installés légalement.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'iRozhlas',
        url: 'https://www.irozhlas.cz/zpravy-domov/okamura-chce-aby-se-spd-podilelo-na-vlade-s-ano-zminil-ministerstva-vnitra_2510051407_job',
        note: "Entré au gouvernement fin 2025 : aucune loi migratoire spécifiquement portée par le SPD promulguée à ce jour, le ministère de l'Intérieur restant hors de son portefeuille.",
      },
    },
    electoralHistory: [
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
          name: 'Český statistický úřad',
          url: 'https://www.volby.cz',
          accessedOn: '2026-09-09',
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
      { platform: 'X', url: 'https://x.com/kvelopoulos' },
    ],
    classificationSource: {
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti national-conservateur de droite radicale.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Enikos.gr',
        url: 'https://www.enikos.gr/politics/velopoulos-i-ellada-den-antechei-alles-metanasteftikes-roes-entoni-kritiki-gia-ton-kyvernitiko-anaschimatismo/2595253/',
        note: "Discours centré sur la fermeture des frontières et l'arrêt des flux migratoires (« la Grèce ne supporte plus d'autres flux »), sans politique explicite de remigration de résidents déjà installés légalement.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Newsit.gr',
        url: 'https://www.newsit.gr/politikh/vouli-me-tis-psifous-tis-nd-perase-apo-tin-epitropi-to-nomosxedio-gia-to-asylo-kai-ti-metanasteysi/4694513/',
        note: "Parti d'opposition sans participation gouvernementale : a voté contre le projet de loi sur l'asile et la migration porté par le gouvernement ND en 2026, le jugeant insuffisamment restrictif ; aucune loi Elliniki Lisi promulguée.",
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
    officialWebsite: 'https://www.aur.ro',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/AUR_Romania' },
    ],
    classificationSource: {
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti national-souverainiste de droite radicale.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'AUR.ro',
        url: 'https://www.aur.ro',
        note: "Positionnement souverainiste et anti-immigration général, moins centré sur des mesures migratoires spécifiques que d'autres partis de cette liste (la Roumanie reste un pays d'émigration nette avec une immigration extra-européenne limitée). Pas de politique explicite de remigration.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Digi24',
        url: 'https://www.digi24.ro/video/george-simion-dupa-votul-din-parlament-pe-bugetul-2026-opozitie-totala-aur-contesta-legea-la-ccr-3687189',
        note: "Parti d'opposition sans participation gouvernementale : aucune loi migratoire AUR promulguée à ce jour.",
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
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti de droite radicale, positionnement anti-immigration.',
    },
    intention: {
      tag: 'remigration',
      source: {
        name: 'SkSprávy.sk',
        url: 'https://skspravy.sk/konflikt/uhrik-progresivcov-sme-s-mazurekom-v-debate-uplne-zadupali-do-zeme/',
        note: "Milan Uhrík (président) et Milan Mazurek, figures dirigeantes du parti, ont explicitement déclaré que « la seule politique migratoire qu'ils soutiennent est la remigration » — usage explicite du terme, critère direct de la méthodologie de ce site.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Hnutie-republika.sk',
        url: 'https://www.hnutie-republika.sk',
        note: "Parti d'opposition sans participation gouvernementale : aucune loi Republika promulguée à ce jour.",
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
      { platform: 'X', url: 'https://x.com/Danmarksdem' },
    ],
    classificationSource: {
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti national-conservateur de droite radicale, positionnement anti-immigration.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Danmarksdemokraterne.dk',
        url: 'https://danmarksdemokraterne.dk/forside/udlaendingepolitik/',
        note: "Programme centré sur une politique migratoire stricte et la critique du relâchement supposé des contrôles migratoires, sans politique explicite de remigration de résidents déjà installés légalement.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Kristeligt Dagblad',
        url: 'https://www.kristeligt-dagblad.dk/danmark/stoejberg-skoser-regerings-udlaendingepolitik-et-svigt-af-danmark',
        note: "Parti d'opposition depuis 2026 : aucune loi Danmarksdemokraterne promulguée à ce jour.",
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
    slug: 'one-nation',
    name: "Pauline Hanson's One Nation",
    countryCode: 'AU',
    positioning: 'National-populiste, droite radicale',
    electoralStatus: 'opposition',
    electoralStatusDetail:
      "Quatre sièges au Sénat australien (dont celui de Pauline Hanson), après un gain de deux sièges lors des élections générales de mai 2025. Parti d'opposition, le pays étant dirigé par le gouvernement travailliste d'Anthony Albanese.",
    electoralStatusSource: {
      name: 'The Daily Aus',
      url: 'https://www.thedailyaus.com.au/politics/one-nation-policies-22-06-2026',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://www.onenation.org.au',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/PaulineHansonOz' },
    ],
    classificationSource: {
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti populiste de droite radicale, positionnement anti-immigration.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Build a Ballot',
        url: 'https://www.buildaballot.org.au/party-info/one-nation-policies',
        note: "Objectif chiffré de réduire l'immigration de plus de 570 000 personnes par rapport aux niveaux actuels (plafond de 130 000 visas), expulsion de 75 000 « migrants illégaux » et retrait de la Convention de l'ONU relative au statut des réfugiés. Pas de politique de remigration de résidents en situation régulière.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Parlement australien',
        url: 'https://www.aph.gov.au',
        note: "Parti minoritaire d'opposition (4 sièges sur 76 au Sénat) : aucune loi One Nation promulguée à ce jour.",
      },
    },
    electoralHistory: [
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
          name: 'Australian Electoral Commission',
          url: 'https://www.aec.gov.au',
          accessedOn: '2026-09-09',
          note: 'Pauline Hanson et Malcolm Roberts, tous deux élus dans le Queensland.',
        },
      },
    ],
    localImplantation: {
      summary:
        "Représenté dans plusieurs parlements d'État, notamment le Queensland et l'Australie-Occidentale, mais sans détenir de mandat à la Chambre des représentants (chambre basse fédérale) ni de mairie dans une grande ville.",
      source: {
        name: 'Parliament of Queensland',
        url: 'https://www.parliament.qld.gov.au',
        accessedOn: '2026-09-09',
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
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti populiste de droite radicale, positionnement anti-immigration.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Impunity Observer',
        url: 'https://impunityobserver.com/2025/04/02/maxime-bernier-only-the-peoples-party-sides-with-canadians-on-immigration/',
        note: "Programme visant à réduire l'immigration à 150 000 entrées par an et à abroger la loi canadienne sur le multiculturalisme, sans politique explicite de remigration de résidents déjà installés légalement.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'CBC News',
        url: 'https://www.cbc.ca/news/politics/maxime-bernier-ppc-campaign-launch-1.7492181',
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
          note: 'Pire résultat historique du parti ; Maxime Bernier arrive quatrième dans sa propre circonscription.',
        },
      },
      {
        label: 'Élections fédérales 2021',
        chamber: 'Chambre des communes',
        date: '2021-09-20',
        seats: 0,
        totalSeats: 338,
        votePercent: 5,
        source: {
          name: 'Élections Canada',
          url: 'https://www.elections.ca',
          accessedOn: '2026-09-09',
          note: 'Meilleur score historique du parti, sans toutefois faire élire de député.',
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
      { platform: 'X', url: 'https://x.com/domovinskipokret' },
    ],
    classificationSource: {
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti national-conservateur de droite radicale.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Monitor.hr',
        url: 'https://www.monitor.hr/kako-bi-most-domovinski-pokret-i-mozemo-rijesili-problem-uvoza-stranih-radnika/',
        note: "S'oppose à la libéralisation de la loi sur les étrangers et à la suppression des quotas de travailleurs étrangers, et met en avant le retour de la diaspora croate plutôt que l'importation de main-d'œuvre étrangère — logique de retour de la diaspora nationale, distincte de la remigration de populations immigrées telle que définie par la méthodologie de ce site.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: 'Index.hr',
        url: 'https://www.index.hr/amp/vijesti/clanak/otvoreno-o-stranim-radnicima-hdzovac-mi-znamo-sve-o-tim-ljudima/2609577.aspx',
        note: "En tant que partenaire de la coalition gouvernementale, soutient les amendements à la loi sur les étrangers (obligation de connaissance de la langue croate, annulation de visa en cas d'abus) actuellement en vigueur.",
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
        "Ivan Penava, président du parti, est maire de Vukovar depuis 2013 — le principal mandat local détenu par le mouvement, qui reste par ailleurs peu implanté dans les autres grandes villes croates.",
      source: {
        name: 'Grad Vukovar',
        url: 'https://www.vukovar.hr',
        accessedOn: '2026-09-09',
      },
    },
    founded: 2020,
    description:
      "Fondé en 2020 par Miroslav Škoro, aujourd'hui dirigé par Ivan Penava, maire de Vukovar. Partenaire de coalition du HDZ depuis 2024.",
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
      { platform: 'X', url: 'https://x.com/SDS_Slovenija' },
    ],
    classificationSource: {
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti national-conservateur de droite radicale.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'N1 Info',
        url: 'https://n1info.si/volitve-2026/jansa-o-oblikovanju-vlade-s-tem-se-se-ne-ukvarjamo-to-svetujemo-tudi-ostalim/',
        note: "Programme centré sur le renvoi des migrants en situation irrégulière vers des pays tiers et le contrôle strict des frontières, sans politique explicite de remigration de résidents en situation régulière.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: '24ur.com',
        url: 'https://www.24ur.com/novice/slovenija/golob-dotok-ilegalnih-migrantov-je-minimalen-mahnic-bi-ustanovil-urad-za-deportacije.html',
        note: "Dès sa prise de fonction, le Premier ministre Janša a signé une lettre avec les dirigeants de 18 États membres de l'UE demandant le retour des migrants illégaux vers des pays tiers ; un « bureau des déportations » est annoncé par le député SDS Branko Mahnič.",
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
      { platform: 'X', url: 'https://x.com/vazrazhdane_bg' },
    ],
    classificationSource: {
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti populiste de droite radicale, positionnement anti-immigration et pro-russe.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Novinite.com',
        url: 'https://www.novinite.com/articles/223323/Vazrazhdane+Party+Leader+Urges+Bulgaria+to+Refrain+from+Signing+EU+Migration+Pact',
        note: "Kostadin Kostadinov (président) s'oppose fermement à l'application du Pacte européen sur la migration et l'asile en Bulgarie, craignant d'en faire un pays d'accueil de réfugiés en transit vers l'Autriche et l'Allemagne. Pas de politique explicite de remigration.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Assemblée nationale bulgare',
        url: 'https://www.parliament.bg',
        note: "Parti d'opposition n'ayant jamais participé à un gouvernement : aucune loi Vazrazhdane promulguée à ce jour.",
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
      "Partenaire de la coalition gouvernementale avec le National Party depuis les élections d'octobre 2023. Winston Peters, chef du parti, a occupé le poste de vice-Premier ministre. Des tensions existent avec son partenaire de coalition sur plusieurs aspects de la politique migratoire, à l'approche des élections d'octobre 2026.",
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
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti populiste de droite radicale, positionnement anti-immigration.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'NZ Herald',
        url: 'https://www.nzherald.co.nz/nz/politics/nz-firsts-winston-peters-announces-a-new-migrant-values-statement-policy/YRSNUSTEOV2G57XKOYFCWSL3TY/',
        note: "Campagne 2026 axée sur une réduction de l'immigration, un « document de valeurs néo-zélandaises » obligatoire pour les nouveaux migrants et la conditionnalité de certaines prestations sociales (dont la retraite, à partir de 2029) à la citoyenneté. Pas de politique explicite de remigration.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: '1News',
        url: 'https://www.1news.co.nz/2026/09/07/peters-signals-benefits-as-well-as-super-require-citizenship-under-nz-first-policy/',
        note: "Propositions de campagne pour les élections d'octobre 2026 (document de valeurs, conditionnalité des prestations) : non encore déposées comme texte de loi.",
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
    slug: 'la-libertad-avanza',
    name: 'La Libertad Avanza (LLA)',
    countryCode: 'AR',
    positioning: 'Libertarien, droite radicale',
    electoralStatus: 'pouvoir',
    electoralStatusDetail:
      "Javier Milei, fondateur du parti, est président de la Nation argentine depuis décembre 2023. La Libertad Avanza est arrivée en tête des élections législatives de 2025, renforçant sa position au Congrès.",
    electoralStatusSource: {
      name: 'Diario de Cuyo',
      url: 'https://www.diariodecuyo.com.ar/argentina/milei-lanza-lla-nacional-y-pone-primera-hacia-la-campana-2025-1665742.html',
      accessedOn: '2026-09-07',
    },
    officialWebsite: 'https://www.lalibertadavanza.com.ar',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/LLibertadAvanza' },
    ],
    classificationSource: {
      name: 'Manifesto Project',
      url: 'https://manifesto-project.wzb.eu',
      note: "Inclusion sur mesures concrètes en matière migratoire prises par l'administration Milei, bien que le parti se définisse avant tout comme libertarien plutôt qu'anti-immigration au sens classique européen.",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'La República / El Cronista',
        url: 'https://larepublica.pe/mundo/2026/07/30/milei-modifica-la-ley-de-migraciones-para-prohibir-el-ingreso-de-extranjeros-que-expresen-mensajes-de-odio-contra-argentina-1356360',
        note: "Restrictions ciblées sur l'entrée et le séjour des étrangers jugés « hostiles » envers l'Argentine, plutôt qu'une politique de réduction généralisée de l'immigration ou de remigration de résidents déjà installés légalement.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: 'Perfil',
        url: 'https://www.perfil.com/noticias/politica/la-justicia-freno-su-reforma-migratoria-pero-milei-insiste-con-un-nuevo-dnu-contra-extranjeros.phtml',
        note: "Décret présidentiel (DNU) n°681/2026 modifiant la loi sur les migrations pour interdire l'entrée aux étrangers tenant des propos jugés hostiles envers l'Argentine, en vigueur. Une réforme migratoire plus large avait auparavant été bloquée par la justice argentine.",
      },
    },
    electoralHistory: [
      {
        label: 'Élections législatives de mi-mandat 2025',
        chamber: 'Chambre des députés (renouvellement partiel)',
        date: '2025-10-26',
        seats: 92,
        totalSeats: 257,
        votePercent: 40.68,
        source: {
          name: 'Buenos Aires Herald — LLA gets landslide win, reaches key number of Congress seats',
          url: 'https://buenosairesherald.com/politics/argentina-2025-midterms-lla-gets-landslide-win-reaches-key-number-of-congress-seats',
          accessedOn: '2026-09-09',
          note: "92 sièges au total après ce scrutin partiel (127 des 257 sièges étaient renouvelés), franchissant le seuil du tiers de la chambre nécessaire pour bloquer une destitution ou soutenir un décret présidentiel. Le pourcentage indiqué correspond au scrutin partiel, non au total national.",
        },
      },
      {
        label: 'Élections générales 2023',
        chamber: 'Chambre des députés',
        date: '2023-10-22',
        seats: 37,
        totalSeats: 257,
        source: {
          name: 'Buenos Aires Herald',
          url: 'https://buenosairesherald.com/',
          accessedOn: '2026-09-09',
          note: "Entrée initiale du parti au Congrès, la même année que l'élection de Javier Milei à la présidence.",
        },
      },
    ],
    founded: 2021,
    description:
      "Fondé en 2021 par l'économiste Javier Milei, élu président de l'Argentine en décembre 2023 sur une ligne libertarienne et anti-establishment.",
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
      { platform: 'X', url: 'https://x.com/EKRE_erakond' },
    ],
    classificationSource: {
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti national-conservateur de droite radicale, positionnement anti-immigration.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'EKRE.ee',
        url: 'https://ekre.ee',
        note: "Programme centré sur la limitation stricte de l'immigration extra-européenne et la défense de « l'État-nation estonien », sans politique explicite de remigration de résidents déjà installés légalement.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Riigikogu',
        url: 'https://www.riigikogu.ee/fraktsioonide-teated/eesti-konservatiivse-rahvaerakonna-fraktsioon/ekre-alustab-riigikogus-taiemahulist-obstruktsiooni-valitsuse-poliitika-pidurdamiseks/',
        note: "Parti d'opposition sans participation gouvernementale : aucune loi EKRE promulguée à ce jour.",
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
        source: {
          name: 'ERR',
          url: 'https://news.err.ee',
          accessedOn: '2026-09-09',
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
      { platform: 'X', url: 'https://x.com/nacionalaap' },
    ],
    classificationSource: {
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti national-conservateur de droite radicale.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'LSM.lv',
        url: 'https://www.lsm.lv/raksts/zinas/latvija/25.05.2026-providus-vaditaja-jaunaja-valdiba-var-butiski-mainities-migracijas-un-integracijas-politika.a648671/',
        note: "Programme axé sur un développement économique « sans immigration de masse » de pays tiers, la fin des « visas dorés » pour investisseurs étrangers, et la priorité à la main-d'œuvre locale, sans politique explicite de remigration de résidents en situation régulière.",
      },
    },
    actionStatus: {
      tag: 'mesures_concretes',
      source: {
        name: 'LSM.lv',
        url: 'https://www.lsm.lv/raksts/zinas/latvija/04.09.2026-koalicija-nogludinajusi-domstarpibas-un-solas-imigracijas-ierobezosanas-planu-apstiprinat-divu-nedelu-laika.a661835/',
        note: "En tant que partenaire de la coalition gouvernementale, a obtenu l'inscription au programme du nouveau gouvernement d'un plan de restriction de l'immigration, dont l'adoption formelle était annoncée pour la mi-septembre 2026.",
      },
    },
    electoralHistory: [
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
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: 'Classifié parti national-conservateur de droite radicale, positionnement anti-immigration.',
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Le Quotidien',
        url: 'https://lequotidien.lu/politique-societe/ladr-veut-stopper-la-migration-irreguliere/',
        note: "Appelle à « stopper la migration irrégulière » et critique la politique migratoire jugée trop laxiste de la coalition CSV-DP, sans politique explicite de remigration de résidents en situation régulière.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Le Quotidien',
        url: 'https://lequotidien.lu/politique-societe/ladr-veut-stopper-la-migration-irreguliere/',
        note: "Parti d'opposition sans participation gouvernementale : aucune loi ADR promulguée à ce jour.",
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
      "Progression spectaculaire aux élections législatives du 24 mai 2026 : le parti double sa représentation parlementaire, passant de 4 à 8 sièges (environ 11% des voix, contre 6,8% en 2021), devenant la troisième force politique du pays derrière le DISY (au pouvoir) et l'AKEL.",
    electoralStatusSource: {
      name: 'Anixneuseis.gr',
      url: 'https://www.anixneuseis.gr/%CE%BA%CF%8D%CF%80%CF%81%CE%BF%CF%82-2026-%CE%BD%CE%AF%CE%BA%CE%B7-%CE%B4%CE%B7%CF%83%CF%85-%CE%AC%CE%BD%CE%BF%CE%B4%CE%BF%CF%82-%CE%B5%CE%BB%CE%B1%CE%BC-%CE%B5%CE%AF%CF%83%CE%BF%CE%B4%CE%BF%CF%82-%CE%B1%CE%BD%CF%84%CE%B9%CF%83%CF%85%CF%83%CF%84%CE%B7%CE%BC%CE%B9%CE%BA%CF%8E%CE%BD-%CE%BA%CE%B1%CE%B9-%CE%BC%CE%AE%CE%BD%CF%85%CE%BC%CE%B1-%CF%86%CE%B8%CE%BF%CF%81%CE%AC%CF%82-%CF%80%CF%81%CE%BF%CF%82-%CF%84%CE%BF-%CF%80%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CE%BA%CF%8C-%CE%BA%CE%AD%CE%BD%CF%84%CF%81%CE%BF/',
      accessedOn: '2026-09-08',
    },
    officialWebsite: 'https://elamcy.com',
    socialAccounts: [
      { platform: 'X', url: 'https://x.com/ELAM_official' },
    ],
    classificationSource: {
      name: 'The PopuList / Manifesto Project',
      url: 'https://popu-list.org',
      note: "Classifié parti d'extrême droite, historiquement lié au parti grec Aube dorée (Chrysi Avgi).",
    },
    intention: {
      tag: 'reduction',
      source: {
        name: 'Anixneuseis.gr',
        url: 'https://www.anixneuseis.gr/%CE%BA%CF%8D%CF%80%CF%81%CE%BF%CF%82-2026-%CE%BD%CE%AF%CE%BA%CE%B7-%CE%B4%CE%B7%CF%83%CF%85-%CE%AC%CE%BD%CE%BF%CE%B4%CE%BF%CF%82-%CE%B5%CE%BB%CE%B1%CE%BC-%CE%B5%CE%AF%CF%83%CE%BF%CE%B4%CE%BF%CF%82-%CE%B1%CE%BD%CF%84%CE%B9%CF%83%CF%85%CF%83%CF%84%CE%B7%CE%BC%CE%B9%CE%BA%CF%8E%CE%BD-%CE%BA%CE%B1%CE%B9-%CE%BC%CE%AE%CE%BD%CF%85%CE%BC%CE%B1-%CF%86%CE%B8%CE%BF%CF%81%CE%AC%CF%82-%CF%80%CF%81%CE%BF%CF%82-%CF%84%CE%BF-%CF%80%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CE%BA%CF%8C-%CE%BA%CE%AD%CE%BD%CF%84%CF%81%CE%BF/',
        note: "Ligne dure sur l'immigration et la question chypriote, y compris position favorable à la fermeture des points de passage entre les deux parties de l'île ; sans politique explicite de remigration de résidents en situation régulière.",
      },
    },
    actionStatus: {
      tag: 'programme',
      source: {
        name: 'Anixneuseis.gr',
        url: 'https://www.anixneuseis.gr/%CE%BA%CF%8D%CF%80%CF%81%CE%BF%CF%82-2026-%CE%BD%CE%AF%CE%BA%CE%B7-%CE%B4%CE%B7%CF%83%CF%85-%CE%AC%CE%BD%CE%BF%CE%B4%CE%BF%CF%82-%CE%B5%CE%BB%CE%B1%CE%BC-%CE%B5%CE%AF%CF%83%CE%BF%CE%B4%CE%BF%CF%82-%CE%B1%CE%BD%CF%84%CE%B9%CF%83%CF%85%CF%83%CF%84%CE%B7%CE%BC%CE%B9%CE%BA%CF%8E%CE%BD-%CE%BA%CE%B1%CE%B9-%CE%BC%CE%AE%CE%BD%CF%85%CE%BC%CE%B1-%CF%86%CE%B8%CE%BF%CF%81%CE%AC%CF%82-%CF%80%CF%81%CE%BF%CF%82-%CF%84%CE%BF-%CF%80%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CE%BA%CF%8C-%CE%BA%CE%AD%CE%BD%CF%84%CF%81%CE%BF/',
        note: "Parti d'opposition sans participation gouvernementale : aucune loi ELAM promulguée à ce jour.",
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
];

export function getPartiesByCountry(countryCode?: string) {
  if (!countryCode) return parties;
  return parties.filter((p) => p.countryCode === countryCode);
}

export function getPartyBySlug(slug: string) {
  return parties.find((p) => p.slug === slug);
}
