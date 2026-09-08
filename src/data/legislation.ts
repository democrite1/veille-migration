import type { Legislation } from './types';

export const legislation: Legislation[] = [
  {
    id: 'eu-pacte-migration-asile',
    countryOrLevel: 'EU',
    title: 'Pacte européen sur la migration et l\'asile',
    status: 'promulguee',
    date: '2026-06-12',
    description:
      "Neuf règlements et une directive adoptés en mai 2024 par le Parlement européen et le Conseil, entrés en application le 12 juin 2026 dans tous les États membres. Renforce le contrôle aux frontières extérieures, accélère les procédures d'examen des demandes d'asile et instaure un mécanisme de solidarité obligatoire entre États membres.",
    source: {
      name: 'Représentation de la Commission européenne en France',
      url: 'https://france.representation.ec.europa.eu/informations/le-pacte-asile-et-migration-entre-en-vigueur-le-12-juin-2026-06-11_fr',
      accessedOn: '2026-08-18',
    },
  },
  {
    id: 'fr-loi-immigration-2024',
    countryOrLevel: 'FR',
    title: "Loi n°2024-42 du 26 janvier 2024 pour contrôler l'immigration, améliorer l'intégration",
    status: 'promulguee',
    date: '2024-01-26',
    description:
      "Loi dite « Darmanin ». Une trentaine de dispositions ont été censurées par le Conseil constitutionnel le 25 janvier 2024 (jugées « cavaliers législatifs »), mais le texte promulgué maintient notamment le durcissement des conditions du regroupement familial et de l'accès à certaines prestations sociales.",
    source: {
      name: 'Légifrance',
      url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000048912696',
      accessedOn: '2026-08-18',
    },
  },
  {
    id: 'de-rueckfuehrungsverbesserungsgesetz-2024',
    countryOrLevel: 'DE',
    title: 'Rückführungsverbesserungsgesetz (loi d\'amélioration des expulsions)',
    status: 'promulguee',
    date: '2024-02-27',
    description:
      "Adoptée sous le gouvernement Scholz (coalition SPD-Verts-FDP). Étend la durée de rétention en vue d'expulsion, facilite les fouilles de logements et les expulsions de personnes déboutées du droit d'asile, y compris de nuit.",
    source: {
      name: 'Deutscher Bundestag',
      url: 'https://www.bundestag.de',
      accessedOn: '2026-08-18',
    },
  },
  {
    id: 'gb-rwanda-scheme-repeal-2024',
    countryOrLevel: 'GB',
    title: 'Safety of Rwanda (Asylum and Immigration) Act 2024',
    status: 'promulguee',
    date: '2024-04-25',
    description:
      "Loi votée sous le gouvernement conservateur de Rishi Sunak organisant l'expulsion des demandeurs d'asile arrivés illégalement vers le Rwanda. Le gouvernement travailliste de Keir Starmer a annoncé l'abandon complet du dispositif dès son arrivée au pouvoir, le 9 juillet 2024, sans qu'aucun vol n'ait eu lieu.",
    source: {
      name: 'UK Government / GOV.UK',
      url: 'https://www.gov.uk/government/news',
      accessedOn: '2026-08-18',
      note: "Statut « mesures concrètes (historique, abrogée le 9 juillet 2024) » — la loi n'a pas été formellement abrogée par le Parlement mais son application a été arrêtée par décision gouvernementale dès juillet 2024.",
    },
  },
  {
    id: 'ch-initiative-immigration-masse-2014',
    countryOrLevel: 'CH',
    title: "Initiative populaire « contre l'immigration de masse »",
    status: 'promulguee',
    date: '2014-02-09',
    description:
      "Initiative de l'UDC acceptée en votation populaire le 9 février 2014 (50,3%), inscrivant des plafonds et contingents d'immigration dans la Constitution suisse. Sa mise en œuvre législative de 2016 a été fortement atténuée (mécanisme de préférence indigène « light ») pour rester compatible avec l'accord de libre circulation UE-Suisse.",
    source: {
      name: 'Confédération suisse',
      url: 'https://www.admin.ch',
      accessedOn: '2026-09-07',
    },
  },
  {
    id: 'it-decreto-flussi-protocollo-albania',
    countryOrLevel: 'IT',
    title: "Décret flux migratoires et protocole Italie-Albanie",
    status: 'promulguee',
    date: '2023-11-06',
    description:
      "Protocole signé entre l'Italie et l'Albanie créant des centres de rétention et de traitement extraterritoriaux à Gjader pour l'examen accéléré des demandes d'asile et le rapatriement de migrants secourus en mer. Formellement en vigueur, mais son application effective a été plusieurs fois bloquée par des tribunaux italiens (dont la Cassazione) refusant la rétention de migrants dans ces centres.",
    source: {
      name: 'Il Foglio / Today.it',
      url: 'https://www.ilfoglio.it/politica/2025/06/30/news/il-doppio-fronte-del-governo-sull-immigrazione-il-decreto-flussi-e-le-polemiche-con-la-cassazione-per-l-albania-7879409',
      accessedOn: '2026-09-07',
    },
  },
  {
    id: 'nl-asielnoodmaatregelenwet-2024',
    countryOrLevel: 'NL',
    title: 'Asielnoodmaatregelenwet (loi de mesures d\'urgence sur l\'asile)',
    status: 'en_discussion',
    date: '2024-10-25',
    description:
      "Projet de loi déposé le 25 octobre 2024 par le cabinet Schoof (avec le PVV) pour permettre l'invocation d'un régime de crise migratoire et durcir les conditions d'accueil. Jamais voté avant la chute du gouvernement en juin 2025 ; son sort sous le cabinet Jetten (formé en février 2026, sans le PVV) reste incertain.",
    source: {
      name: 'Rijksoverheid.nl',
      url: 'https://www.rijksoverheid.nl/documenten/kamerstukken/2024/10/25/brief-over-nadere-afspraken-uitvoering-hoofdstuk-2-hoofdlijnenakkoord-grip-op-asiel-en-migratie',
      accessedOn: '2026-09-07',
    },
  },
  {
    id: 'se-atervandringsbidrag-2026',
    countryOrLevel: 'SE',
    title: 'Revalorisation de l\'allocation de remigration (återvandringsbidrag)',
    status: 'promulguee',
    date: '2026-01-01',
    description:
      "Règlement gouvernemental adopté le 30 octobre 2025, porté par Sverigedemokraterna dans l'accord de Tidö, revalorisant l'allocation au retour volontaire à 350 000 couronnes par adulte (jusqu'à 600 000 par foyer), entré en vigueur le 1er janvier 2026. Coût estimé à environ 2,5 milliards de couronnes sur trois ans.",
    source: {
      name: 'Regeringen.se',
      url: 'https://www.regeringen.se/pressmeddelanden/2025/04/ett-kraftigt-hojt-atervandringsbidrag/',
      accessedOn: '2026-09-07',
    },
  },
  {
    id: 'hu-etat-urgence-migratoire',
    countryOrLevel: 'HU',
    title: '« État de crise migratoire » (tömeges bevándorlás okozta válsághelyzet)',
    status: 'promulguee',
    date: '2015-09-15',
    description:
      "État de crise migratoire décrété par les gouvernements Orbán successifs depuis septembre 2015 (fermeture des frontières, zones de transit, barrière frontalière avec la Serbie et la Croatie). Prolongé en 2026 par le nouveau gouvernement Tisza (issu de l'élection du 12 avril 2026) jusqu'au 31 décembre 2026, restant en vigueur indépendamment du changement de majorité.",
    source: {
      name: 'mfor.hu',
      url: 'https://mfor.hu/cikkek/kozelet/dontott-a-kormany-a-hetfon-lejaro-migracios-valsaghelyzetrol.html',
      accessedOn: '2026-09-07',
    },
  },
  {
    id: 'pl-systeme-caution-asile',
    countryOrLevel: 'PL',
    title: 'Système de caution (kaucja) pour demandeurs d\'asile',
    status: 'promulguee',
    date: '2024-01-01',
    description:
      "Dispositif instauré sous le gouvernement PiS, maintenu par le gouvernement de coalition de Donald Tusk depuis octobre 2023, imposant une caution financière aux demandeurs d'asile pour rester en liberté durant l'examen de leur dossier. Contesté par Konfederacja, qui a déposé une proposition de loi pour le supprimer.",
    source: {
      name: 'Konfederacja.pl',
      url: 'https://konfederacja.pl/chcemy-aby-sejm-zobowiazal-rzad-od-odrzucenia-paktu-migracyjnego/',
      accessedOn: '2026-09-07',
    },
  },
  {
    id: 'pt-pacote-retorno-2026',
    countryOrLevel: 'PT',
    title: 'Pacote retorno (paquet de retour des étrangers en situation irrégulière)',
    status: 'promulguee',
    date: '2026-03-19',
    description:
      "Approuvé par le gouvernement de l'Alliance Démocratique (AD) le 19 mars 2026, sous la pression politique de Chega : allongement de la durée de rétention en centres d'installation temporaire, révision des critères empêchant l'expulsion, extension des durées d'interdiction de retour après éloignement forcé.",
    source: {
      name: 'ECO / Governo de Portugal',
      url: 'https://eco.sapo.pt/2026/03/19/governo-aprova-medidas-para-afastar-imigrantes-ilegais-prazo-de-detencao-e-alargado-e-ha-menos-criterios-para-expulsao/',
      accessedOn: '2026-09-07',
    },
  },
  {
    id: 'us-eo-14160-droit-du-sol',
    countryOrLevel: 'US',
    title: "Executive Order 14160 — fin du droit du sol pour les enfants de parents sans statut légal",
    status: 'promulguee',
    date: '2025-01-20',
    description:
      "Décret présidentiel signé par Donald Trump le 20 janvier 2025 visant à mettre fin à la citoyenneté automatique par naissance sur le sol américain pour les enfants de parents en situation irrégulière. Invalidé par la Cour suprême le 30 juin 2026 (6 voix contre 3) comme contraire au 14e amendement.",
    source: {
      name: 'Congress.gov — CRS Legal Sidebar',
      url: 'https://www.congress.gov/crs-product/LSB11468',
      accessedOn: '2026-09-07',
      note: "Statut « mesures concrètes (historique, abrogée par décision judiciaire le 30 juin 2026) ».",
    },
  },
  {
    id: 'us-self-deportation-program',
    countryOrLevel: 'US',
    title: 'Programme de « self-deportation » (retour volontaire incité financièrement)',
    status: 'promulguee',
    date: '2025-05-01',
    description:
      "Dispositif administratif de l'administration Trump (DHS/ICE) incitant financièrement au départ volontaire des personnes sans statut légal, avec objectif chiffré de plus de 200 000 départs. Plus de 605 000 expulsions et 1,9 million de départs « volontaires » recensés depuis janvier 2025, sans nécessiter de vote du Congrès.",
    source: {
      name: 'Axios / Washington Times',
      url: 'https://www.axios.com/2026/07/28/trump-self-deportation-ice',
      accessedOn: '2026-09-07',
    },
  },
  {
    id: 'ar-dnu-681-2026',
    countryOrLevel: 'AR',
    title: 'Décret présidentiel (DNU) n°681/2026 modifiant la loi sur les migrations',
    status: 'promulguee',
    date: '2026-07-30',
    description:
      "Décret de nécessité et d'urgence signé par Javier Milei interdisant l'entrée sur le territoire et permettant l'annulation de la résidence des étrangers tenant des propos jugés hostiles envers l'Argentine ou incitant à la violence. Une réforme migratoire plus large avait auparavant été bloquée par la justice argentine.",
    source: {
      name: 'La República / El Cronista',
      url: 'https://larepublica.pe/mundo/2026/07/30/milei-modifica-la-ley-de-migraciones-para-prohibir-el-ingreso-de-extranjeros-que-expresen-mensajes-de-odio-contra-argentina-1356360',
      accessedOn: '2026-09-07',
    },
  },
];
