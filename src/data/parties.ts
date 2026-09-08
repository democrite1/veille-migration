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
      "Premier groupe d'opposition à l'Assemblée nationale (17e législature), environ 120 députés sur 577.",
    electoralStatusSource: {
      name: 'Assemblée nationale — vie-publique.fr',
      url: 'https://www.vie-publique.fr/en-bref/300422-assemblee-nationale-le-nombre-de-deputes-par-groupe-politique',
      accessedOn: '2026-08-18',
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
    founded: 2018,
    description:
      "Coalition électorale fondée en 2018, transformée en parti en 2023, réunissant des courants nationalistes (Ruch Narodowy) et libertariens (Nowa Nadzieja). Coprésidée par Krzysztof Bosak et Sławomir Mentzen.",
  },
];

export function getPartiesByCountry(countryCode?: string) {
  if (!countryCode) return parties;
  return parties.filter((p) => p.countryCode === countryCode);
}

export function getPartyBySlug(slug: string) {
  return parties.find((p) => p.slug === slug);
}
