import type { Election } from './types';

export const elections: Election[] = [
  {
    id: 'fr-municipales-2026',
    countryCode: 'FR',
    level: 'local',
    scopeName: 'Élections municipales et communautaires',
    mandateDuration: '6 ans',
    powers:
      'Gestion des communes : urbanisme, écoles primaires, action sociale, police municipale, état civil. Premier scrutin national organisé selon un mode de scrutin proportionnel plurinominal avec prime majoritaire identique pour toutes les communes.',
    date: '2026-03-15',
    status: 'resultat_connu',
    result:
      "1er/2e tour (15 et 22 mars 2026) : le RN passe de 17 à 62 communes dirigées, dont Nice (avec son allié Éric Ciotti, seule ville de plus de 200 000 habitants gagnée par l'extrême droite), Carcassonne, Castres, Agde. Défaites à Toulon, Marseille et Nîmes.",
    source: {
      name: 'Vert / Sciences Po Cevipof',
      url: 'https://vert.eco/chaleurs-actuelles/resultats-des-elections-municipales-2026-le-rassemblement-national-espere-lemporter-a-nice-toulon-marseille-et-carcassonne/',
      accessedOn: '2026-08-18',
    },
  },
  {
    id: 'fr-legislatives-2027',
    countryCode: 'FR',
    level: 'national',
    scopeName: 'Élections législatives (Assemblée nationale)',
    mandateDuration: '5 ans',
    powers:
      "Vote de la loi, contrôle du gouvernement, budget. Échéance normale de la 17e législature, sauf dissolution anticipée par le Président de la République (possible à tout moment sous la Ve République).",
    date: '2027-06-01',
    status: 'a_venir',
    source: {
      name: 'Assemblée nationale',
      url: 'https://www.assemblee-nationale.fr',
      accessedOn: '2026-08-18',
      note: 'Date indicative de fin de législature ; une dissolution peut avancer cette échéance.',
    },
  },
  {
    id: 'de-bundestagswahl-2025',
    countryCode: 'DE',
    level: 'national',
    scopeName: 'Bundestagswahl (élections fédérales)',
    mandateDuration: '4 ans',
    powers:
      "Élection du Bundestag, qui vote les lois fédérales et élit le chancelier.",
    date: '2025-02-23',
    status: 'resultat_connu',
    result:
      'CDU/CSU 28,6% (208 sièges), AfD 20,8% (152 sièges, 2e force politique), SPD 16,4% (120 sièges), Grünen 11,6% (85 sièges). Participation 82,5%.',
    source: {
      name: 'Die Bundeswahlleiterin',
      url: 'https://www.bundeswahlleiterin.de/info/presse/mitteilungen/bundestagswahl-2025/29_25_endgueltiges-ergebnis.html',
      accessedOn: '2026-08-18',
    },
  },
  {
    id: 'gb-local-elections-2026',
    countryCode: 'GB',
    level: 'local',
    scopeName: 'English local elections',
    mandateDuration: '4 ans (variable selon les autorités locales)',
    powers:
      'Councils : logement, voirie, services sociaux, écoles, ramassage des déchets ; certains councils élisent aussi des maires exécutifs.',
    date: '2026-05-07',
    status: 'resultat_connu',
    result:
      "Reform UK obtient plus de 1 000 sièges de conseillers et prend le contrôle d'une dizaine de councils (notamment dans les East Midlands), la plus forte progression d'un parti hors des deux principaux partis dans l'histoire récente des élections locales anglaises. Labour perd environ 1 100 sièges et 28 councils.",
    source: {
      name: 'Local Government Chronicle',
      url: 'https://www.lgcplus.com/politics/governance-and-structure/live-blog-local-election-results-2026-08-05-2026/',
      accessedOn: '2026-08-18',
    },
  },
  {
    id: 'gb-general-election-2029',
    countryCode: 'GB',
    level: 'national',
    scopeName: 'UK general election',
    mandateDuration: '5 ans maximum',
    powers: 'Élection de la Chambre des Communes, qui désigne le gouvernement.',
    date: '2029-08-01',
    status: 'a_venir',
    source: {
      name: 'UK Parliament',
      url: 'https://www.parliament.uk',
      accessedOn: '2026-08-18',
      note: "Date limite légale (5 ans après les élections de juillet 2024) ; le Premier ministre peut convoquer des élections anticipées.",
    },
  },
  {
    id: 'se-riksdagsvalet-2026',
    countryCode: 'SE',
    level: 'national',
    scopeName: 'Riksdagsvalet (élections législatives)',
    mandateDuration: '4 ans',
    powers: 'Élection du Riksdag, qui vote les lois et désigne le gouvernement.',
    date: '2026-09-13',
    status: 'a_venir',
    source: {
      name: 'Val.se (Valmyndigheten)',
      url: 'https://sv.wikipedia.org/wiki/Riksdagsvalet_i_Sverige_2026',
      accessedOn: '2026-08-18',
      note: "Le 1er avril 2026, les quatre partis du bloc Tidö (dont Sverigedemokraterna) ont annoncé qu'en cas de victoire, SD entrerait pour la première fois au gouvernement avec des ministres.",
    },
  },
  {
    id: 'hu-legislatives-2026',
    countryCode: 'HU',
    level: 'national',
    scopeName: 'Országgyűlési választás (élections législatives)',
    mandateDuration: '4 ans',
    powers: "Élection de l'Assemblée nationale (Országgyűlés), qui vote les lois et désigne le gouvernement.",
    date: '2026-04-12',
    status: 'resultat_connu',
    result:
      "Défaite historique du Fidesz-KDNP de Viktor Orbán (55 sièges, 37% des voix) face au parti Tisza de Péter Magyar (141 sièges sur 199, 54% des voix, majorité des deux tiers). Fin de 16 années de pouvoir ininterrompu d'Orbán. Le parti d'extrême droite Mi Hazánk (Notre Patrie) fait aussi son entrée au Parlement avec 6 sièges.",
    source: {
      name: 'CNN',
      url: 'https://www.cnn.com/2026/04/12/world/live-news/hungary-election-orban-magyar',
      accessedOn: '2026-09-07',
    },
  },
];
