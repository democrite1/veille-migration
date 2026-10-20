import type { Source } from './types';

/**
 * Public log of corrections (J2). One entry per published error corrected,
 * fact withdrawn or tag changed, newest first. Bilingual from the start since
 * decision 2 of the October 2026 audit is to translate all content.
 *
 * Rule: an entry says what the site claimed, what it says now and why, and
 * cites the source the correction rests on. Rewording, new data and design
 * changes are not corrections and are not logged here.
 */
export type CorrectionKind = 'correction' | 'reclassement' | 'retrait';

export interface Correction {
  id: string;
  date: string; // ISO date the correction went live
  kind: CorrectionKind;
  /** Path on the site, without the locale prefix. */
  page: string;
  summary: { fr: string; en: string };
  source?: Source;
}

export const corrections: Correction[] = [
  {
    id: '2026-10-20-suisse-initiative',
    date: '2026-10-20',
    kind: 'correction',
    page: '/actualites',
    summary: {
      fr: "Votation suisse du 14 juin 2026 : l'initiative s'intitulait « Pas de Suisse à 10 millions ! » et non « Stop à la surpopulation ! ». Elle a été rejetée par 54,8 % des votants ; le titre parlait d'un rejet « de justesse », inexact pour un écart de près de dix points.",
      en: 'Swiss vote of 14 June 2026: the initiative was titled "No to a 10-million Switzerland!", not "Stop overpopulation!". It was rejected by 54.8% of voters; the headline called it a "narrow" rejection, inaccurate for a margin of nearly ten points.',
    },
    source: {
      name: "RTS — Non à 54,8 % à l'initiative « Pas de Suisse à 10 millions »",
      url: 'https://www.rts.ch/info/suisse/2026/article/l-initiative-udc-pas-de-suisse-a-10-millions-rejetee-a-54-5-29273820.html',
      accessedOn: '2026-10-05',
    },
  },
  {
    id: '2026-10-20-orania-naissances',
    date: '2026-10-20',
    kind: 'correction',
    page: '/actualites',
    summary: {
      fr: "Orania : le titre annonçait un record de « taux de natalité » alors que la source rapporte un nombre de naissances (36 en 2025).",
      en: 'Orania: the headline announced a record "birth rate" whereas the source reports a number of births (36 in 2025).',
    },
    source: {
      name: "France 24 — South Africa's closed white enclave attracting Afrikaner youth",
      url: 'https://www.france24.com/en/live-news/20260604-south-africa-s-closed-white-enclave-attracting-afrikaner-youth',
      accessedOn: '2026-08-18',
    },
  },
  {
    id: '2026-10-20-hrvatski-suverenisti-split',
    date: '2026-10-20',
    kind: 'retrait',
    page: '/partis/hrvatski-suverenisti',
    summary: {
      fr: "Hrvatski suverenisti : retrait d'une phrase annonçant une coalition « Vukovarska koalicija » pour les élections de quartiers de Split du 27 septembre 2026. La source citée ne la mentionnait pas et ce nom de coalition n'a pu être retrouvé dans aucune source.",
      en: 'Hrvatski suverenisti: withdrawal of a sentence announcing a "Vukovarska koalicija" coalition for the Split district elections of 27 September 2026. The cited source did not mention it and the coalition name could not be found in any source.',
    },
  },
  {
    id: '2026-10-20-nz-first-date',
    date: '2026-10-20',
    kind: 'correction',
    page: '/partis/nz-first',
    summary: {
      fr: "NZ First : la fiche plaçait les élections générales néo-zélandaises en octobre 2026 ; elles sont fixées au 7 novembre 2026.",
      en: 'NZ First: the profile placed the New Zealand general election in October 2026; it is set for 7 November 2026.',
    },
    source: {
      name: 'Beehive.govt.nz — General election to be held 7 November',
      url: 'https://www.beehive.govt.nz/release/general-election-be-held-7-november',
      accessedOn: '2026-09-07',
    },
  },
  {
    id: '2026-10-20-afd-saxe-anhalt',
    date: '2026-10-20',
    kind: 'correction',
    page: '/actualites',
    summary: {
      fr: "Saxe-Anhalt : l'actualité donnait 44,4 % à l'AfD et 18,3 % à la « CDU/CSU », chiffres d'un article publié avant la fin du dépouillement, en contradiction avec la fiche du parti. Résultat publié : 43,8 % pour l'AfD, 17,2 % pour la CDU. La mention d'un sondage national INSA de septembre, introuvable, a été retirée.",
      en: 'Saxony-Anhalt: the news item gave the AfD 44.4% and the "CDU/CSU" 18.3%, figures from an article published before counting ended, contradicting the party profile. Published result: 43.8% for the AfD, 17.2% for the CDU. A reference to a September INSA national poll that could not be found was withdrawn.',
    },
    source: {
      name: "ZDFheute — Wahl in Sachsen-Anhalt : AfD liegt klar vor CDU",
      url: 'https://www.zdfheute.de/politik/deutschland/landtagswahl-sachsen-anhalt-wahlergebnisse-cdu-afd-schulze-siegmund-100.html',
      accessedOn: '2026-10-20',
    },
  },
  {
    id: '2026-10-20-cz-municipales',
    date: '2026-10-20',
    kind: 'retrait',
    page: '/elections',
    summary: {
      fr: "Élections tchèques d'octobre 2026 : la partie municipale de l'entrée a été retirée, faute de résultat consolidé vérifiable. Seul le résultat des sénatoriales est publié.",
      en: 'Czech elections of October 2026: the municipal part of the entry was withdrawn, as no consolidated result could be verified. Only the Senate result is published.',
    },
    source: {
      name: 'Wikipedia — 2026 Czech Senate election',
      url: 'https://en.wikipedia.org/wiki/2026_Czech_Senate_election',
      accessedOn: '2026-10-20',
    },
  },
  {
    id: '2026-10-05-afd-remigration',
    date: '2026-10-05',
    kind: 'reclassement',
    page: '/partis/afd',
    summary: {
      fr: "AfD : la fiche affirmait que le parti n'employait pas officiellement le terme « remigration ». Le congrès de Riesa l'a inscrit au programme électoral le 12 janvier 2025. Tag d'intention passé de « réduction » à « remigration ».",
      en: "AfD: the profile stated that the party did not officially use the term \"remigration\". The Riesa congress wrote it into the election programme on 12 January 2025. Intention tag changed from \"reduction\" to \"remigration\".",
    },
    source: {
      name: 'nd-aktuell — Bundestagswahl : AfD verabschiedet extrem rechtes Wahlprogramm',
      url: 'https://www.nd-aktuell.de/artikel/1188160.bundestagswahl-remigration-afd-verabschiedet-extrem-rechtes-wahlprogramm.html',
      accessedOn: '2026-10-05',
    },
  },
  {
    id: '2026-10-05-vox-remigration',
    date: '2026-10-05',
    kind: 'reclassement',
    page: '/partis/vox',
    summary: {
      fr: "Vox : tag d'intention passé de « réduction » à « remigration », en application littérale de la méthodologie (terme employé par le parti ou ses dirigeants) : des députés du parti ont présenté un projet de « remigración » le 8 juillet 2025. Le désaveu partiel de Santiago Abascal figure sur la fiche.",
      en: 'Vox: intention tag changed from "reduction" to "remigration", applying the methodology literally (term used by the party or its leaders): party MPs presented a "remigración" plan on 8 July 2025. Santiago Abascal\'s partial walk-back is recorded on the profile.',
    },
    source: {
      name: 'Euronews — Vox propone deportar de manera masiva a millones de inmigrantes',
      url: 'https://es.euronews.com/my-europe/2025/07/08/vox-propone-de-manera-abierta-deportar-de-manera-masiva-a-millones-de-inmigrantes',
      accessedOn: '2026-10-05',
    },
  },
  {
    id: '2026-10-05-vlaams-belang-remigration',
    date: '2026-10-05',
    kind: 'reclassement',
    page: '/partis/vlaams-belang',
    summary: {
      fr: "Vlaams Belang : tag d'intention passé de « réduction » à « remigration », en application littérale de la méthodologie : le parti a réclamé en 2021 une « Agence pour la remigration ».",
      en: 'Vlaams Belang: intention tag changed from "reduction" to "remigration", applying the methodology literally: in 2021 the party called for an "Agency for Remigration".',
    },
    source: {
      name: 'Wikipedia — Vlaams Belang',
      url: 'https://en.wikipedia.org/wiki/Vlaams_Belang',
      accessedOn: '2026-10-05',
    },
  },
  {
    id: '2026-10-05-reconquete-source',
    date: '2026-10-05',
    kind: 'correction',
    page: '/partis/reconquete',
    summary: {
      fr: "Reconquête : le tag « remigration » renvoyait à la page d'accueil du parti, sans citation. Il repose désormais sur la déclaration d'Éric Zemmour du 23 mars 2022 annonçant un « grand ministère de la remigration ».",
      en: 'Reconquête: the "remigration" tag linked to the party\'s homepage, with no quote. It now rests on Éric Zemmour\'s statement of 23 March 2022 announcing a "great ministry of remigration".',
    },
    source: {
      name: 'Public Sénat — Présidentielle 2022 : Éric Zemmour détaille son programme et assume le terme « remigration »',
      url: 'https://www.publicsenat.fr/actualites/non-classe/presidentielle-2022-eric-zemmour-detaille-son-programme-et-assume-le-terme',
      accessedOn: '2026-10-05',
    },
  },
  {
    id: '2026-10-05-pologne-caution',
    date: '2026-10-05',
    kind: 'retrait',
    page: '/legislation',
    summary: {
      fr: "Pologne : retrait d'une entrée décrivant un « système de caution pour demandeurs d'asile », dont aucune source n'a pu établir l'existence. Elle est remplacée par la loi du 26 mars 2025 permettant de suspendre le droit de demander l'asile.",
      en: 'Poland: withdrawal of an entry describing an "asylum seekers\' bail system" whose existence no source could establish. It is replaced by the law of 26 March 2025 allowing the right to claim asylum to be suspended.',
    },
    source: {
      name: 'Notes From Poland — Poland introduces law allowing suspension of asylum rights',
      url: 'https://notesfrompoland.com/2025/03/26/poland-introduces-law-allowing-suspension-of-asylum-rights/',
      accessedOn: '2026-10-05',
    },
  },
  {
    id: '2026-10-05-statuts-legislatifs',
    date: '2026-10-05',
    kind: 'correction',
    page: '/legislation',
    summary: {
      fr: "Le décret présidentiel américain 14160, invalidé par la Cour suprême le 30 juin 2026, et le Safety of Rwanda Act britannique, abrogé le 2 décembre 2025, s'affichaient comme « promulgués ». Les statuts « invalidée par la justice » et « abrogée » ont été créés.",
      en: 'US Executive Order 14160, struck down by the Supreme Court on 30 June 2026, and the UK Safety of Rwanda Act, repealed on 2 December 2025, were displayed as "enacted". The statuses "struck down by a court" and "repealed" were created.',
    },
    source: {
      name: 'Wikipedia — Safety of Rwanda (Asylum and Immigration) Act 2024',
      url: 'https://en.wikipedia.org/wiki/Safety_of_Rwanda_(Asylum_and_Immigration)_Act_2024',
      accessedOn: '2026-10-05',
    },
  },
  {
    id: '2026-10-05-save-europe-act',
    date: '2026-10-05',
    kind: 'correction',
    page: '/actualites',
    summary: {
      fr: "Save Europe Act : l'actualité présentait comme une initiative citoyenne européenne en cours un projet dont la Commission a refusé l'enregistrement le 22 juillet 2026. Les signatures recueillies depuis relèvent d'une pétition sans valeur juridique. La source partisane unique a été remplacée.",
      en: 'Save Europe Act: the news item presented as an ongoing European citizens\' initiative a proposal whose registration the Commission refused on 22 July 2026. Signatures gathered since belong to a petition with no legal effect. The single partisan source was replaced.',
    },
    source: {
      name: 'InfoMigrants — European Commission rejects registration of citizens initiative to suspend migration channels',
      url: 'https://www.infomigrants.net/en/post/72641/european-commission-rejects-registration-of-citizens-initiatve-to-suspend-migration-channels',
      accessedOn: '2026-10-05',
    },
  },
  {
    id: '2026-10-05-sd-source',
    date: '2026-10-05',
    kind: 'correction',
    page: '/partis/sverigedemokraterna',
    summary: {
      fr: "Sverigedemokraterna : le statut électoral, qui décrit le scrutin du 13 septembre 2026, citait un communiqué gouvernemental de mai 2026. Il cite désormais les résultats de l'élection.",
      en: 'Sweden Democrats: the electoral status, which describes the election of 13 September 2026, cited a government press release from May 2026. It now cites the election results.',
    },
    source: {
      name: 'Wikipedia — 2026 Swedish general election',
      url: 'https://en.wikipedia.org/wiki/2026_Swedish_general_election',
      accessedOn: '2026-10-05',
    },
  },
  {
    id: '2026-10-05-accroches-pays',
    date: '2026-10-05',
    kind: 'correction',
    page: '/partis',
    summary: {
      fr: "Bandeaux pays : six accroches inexactes ou partiales ont été corrigées (Allemagne, Suède, Suisse, Pays-Bas, Pologne, Estonie). Toutes les accroches ont ensuite été supprimées le 20 octobre 2026.",
      en: 'Country banners: six inaccurate or one-sided taglines were corrected (Germany, Sweden, Switzerland, Netherlands, Poland, Estonia). All taglines were then removed on 20 October 2026.',
    },
  },
  {
    id: '2026-09-15-fpo-2019',
    date: '2026-09-15',
    kind: 'correction',
    page: '/partis/fpo',
    summary: {
      fr: 'FPÖ : 31 sièges et 16,17 % aux législatives de 2019, et non 30 sièges et 16,2 %.',
      en: 'FPÖ: 31 seats and 16.17% in the 2019 legislative election, not 30 seats and 16.2%.',
    },
    source: {
      name: 'Wikipedia — 2019 Austrian legislative election',
      url: 'https://en.wikipedia.org/wiki/2019_Austrian_legislative_election',
      accessedOn: '2026-09-15',
    },
  },
  {
    id: '2026-09-15-lla-2023',
    date: '2026-09-15',
    kind: 'correction',
    page: '/partis/la-libertad-avanza',
    summary: {
      fr: 'La Libertad Avanza : 35 sièges remportés aux élections de 2023, et non 37. Les chiffres plus élevés correspondent au bloc parlementaire après ralliements de députés alliés.',
      en: 'La Libertad Avanza: 35 seats won in the 2023 election, not 37. Higher figures are the size of the parliamentary bloc after allied deputies joined.',
    },
    source: {
      name: 'Wikipedia — 2023 Argentine general election',
      url: 'https://en.wikipedia.org/wiki/2023_Argentine_general_election',
      accessedOn: '2026-09-15',
    },
  },
  {
    id: '2026-09-15-fidesz-2026',
    date: '2026-09-15',
    kind: 'correction',
    page: '/partis/fidesz',
    summary: {
      fr: 'Fidesz : 52 sièges et 38,61 % aux législatives du 12 avril 2026, et non 55 sièges et 37 %, chiffres repris d\'un direct de soirée électorale. Sur la même élection, Mi Hazánk ne « faisait pas son entrée » au Parlement : il y siégeait déjà et recule de 7 à 6 sièges.',
      en: 'Fidesz: 52 seats and 38.61% in the legislative election of 12 April 2026, not 55 seats and 37%, figures taken from an election-night live blog. In the same election, Mi Hazánk did not "enter" parliament: it already sat there and fell from 7 to 6 seats.',
    },
    source: {
      name: 'Wikipedia — 2026 Hungarian parliamentary election',
      url: 'https://en.wikipedia.org/wiki/2026_Hungarian_parliamentary_election',
      accessedOn: '2026-09-15',
    },
  },
  {
    id: '2026-09-15-locales-anglaises',
    date: '2026-09-15',
    kind: 'correction',
    page: '/elections',
    summary: {
      fr: "Élections locales anglaises de mai 2026 : Reform UK a gagné 1 451 sièges et 14 conseils, et non « plus de 1 000 » sièges et « une dizaine » de conseils, chiffres repris d'un direct de soirée électorale.",
      en: 'English local elections of May 2026: Reform UK gained 1,451 seats and 14 councils, not "more than 1,000" seats and "about ten" councils, figures taken from an election-night live blog.',
    },
    source: {
      name: 'Wikipedia — 2026 United Kingdom local elections',
      url: 'https://en.wikipedia.org/wiki/2026_United_Kingdom_local_elections',
      accessedOn: '2026-09-15',
    },
  },
  {
    id: '2026-09-15-pis-referendum',
    date: '2026-09-15',
    kind: 'correction',
    page: '/partis/pis',
    summary: {
      fr: 'PiS : participation de 40,91 % au référendum du 15 octobre 2023, et non 40 %.',
      en: 'PiS: turnout of 40.91% in the referendum of 15 October 2023, not 40%.',
    },
    source: {
      name: 'Wikipedia — 2023 Polish referendum',
      url: 'https://en.wikipedia.org/wiki/2023_Polish_referendum',
      accessedOn: '2026-09-15',
    },
  },
];
