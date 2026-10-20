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
    id: '2026-10-20-retrait-independent-ireland',
    date: '2026-10-20',
    kind: 'retrait',
    page: '/partis',
    summary: {
      fr: "Retrait de la fiche Independent Ireland. Le parti ne remplit aucun des deux critères d'inclusion : The PopuList 4.0 le code populiste mais pas d'extrême droite, et son programme soutient l'immigration légale sans demander de la réduire ; ses propositions portent sur l'asile et l'expulsion des étrangers condamnés.",
      en: "Independent Ireland entry withdrawn. The party meets neither inclusion criterion: The PopuList 4.0 codes it populist but not far right, and its programme supports legal immigration without calling for less of it; its proposals concern asylum and deporting convicted foreigners.",
    },
    source: {
      name: "Independent Ireland — Immigration (programme du parti)",
      url: 'https://www.independentireland.ie/immigration',
      accessedOn: '2026-10-20',
    },
  },
  {
    id: '2026-10-20-retrait-la-libertad-avanza',
    date: '2026-10-20',
    kind: 'retrait',
    page: '/partis',
    summary: {
      fr: "Retrait de la fiche La Libertad Avanza. Elle avait été incluse pour les décrets migratoires du gouvernement Milei, critère qui ne figure pas dans la méthodologie. Aucun jeu de données de référence ne code le parti, et sa plateforme électorale nationale de 2023 ne demande pas de réduire l'immigration : elle vise l'entrée des étrangers ayant des antécédents pénaux et l'expulsion de ceux qui commettent des délits. Les élections argentines restent suivies dans le calendrier.",
      en: "La Libertad Avanza entry withdrawn. It had been included for the Milei government's migration decrees, a criterion the methodology does not contain. No reference dataset codes the party, and its 2023 national election platform does not call for less immigration: it targets the entry of foreigners with criminal records and the deportation of those who commit offences. Argentine elections remain in the calendar.",
    },
    source: {
      name: "La Libertad Avanza — Bases de acción política y plataforma electoral nacional 2023 (copie déposée par le Partido Renovador Federal, Jujuy)",
      url: 'https://media-front.elmostrador.cl/2023/11/JUJUY-79-PARTIDO-RENOVADOR-FEDERAL-PLATAFORMA-LA-LIBERTAD-AVANZA.pdf',
      accessedOn: '2026-10-20',
    },
  },
  {
    id: '2026-10-20-mesures-concretes-definition',
    date: '2026-10-20',
    kind: 'reclassement',
    page: '/methodologie',
    summary: {
      fr: "Méthodologie : « mesures concrètes » désigne désormais un texte adopté ou une mesure en vigueur. Une proposition de loi déposée mais non adoptée, ou une résolution non contraignante, laisse la fiche en « programme ». Vox, Vlaams Belang et Konfederacja, classés en « mesures concrètes » pour des textes de ce type, passent en « programme ». Le SDS slovène aussi : les éléments cités (une lettre européenne, un bureau annoncé) ne sont pas des textes adoptés.",
      en: "Methodology: \"concrete measures\" now means an adopted text or a measure in force. A bill filed but not adopted, or a non-binding resolution, leaves the entry at \"programme\". Vox, Vlaams Belang and Konfederacja, tagged \"concrete measures\" for texts of that kind, move to \"programme\". So does the Slovenian SDS: the items cited (a European letter, an announced office) are not adopted texts.",
    },
  },
  {
    id: '2026-10-20-konfederacja-caution',
    date: '2026-10-20',
    kind: 'correction',
    page: '/partis/konfederacja',
    summary: {
      fr: "Konfederacja : la fiche évoquait une proposition de loi visant à supprimer un « système de caution » pour demandeurs d'asile, système dont l'existence n'a pas pu être établie (retiré de la page Législation le 5 octobre), et la page citée ne répond plus. Le registre du Sejm montre un projet de résolution du 6 février 2025 contre le pacte européen sur la migration et l'asile.",
      en: "Konfederacja: the entry mentioned a bill to abolish a \"bail system\" for asylum seekers, a system whose existence could not be established (removed from the Legislation page on 5 October), and the cited page no longer responds. The Sejm register shows a draft resolution of 6 February 2025 against the EU Pact on Migration and Asylum.",
    },
    source: {
      name: "Sejm — impression n° 1043",
      url: 'https://api.sejm.gov.pl/sejm/term10/prints/1043/1043.pdf',
      accessedOn: '2026-10-20',
    },
  },
  {
    id: '2026-10-20-pvv-asielwetten',
    date: '2026-10-20',
    kind: 'correction',
    page: '/partis/pvv',
    summary: {
      fr: "PVV : la fiche disait que la loi d'urgence sur l'asile n'avait jamais été votée et que son sort restait incertain. Le Sénat l'a rejetée le 21 avril 2026 ; il a adopté le même jour la loi sur le double statut d'asile, déposée par la ministre PVV Marjolein Faber, qui fonde désormais le statut « mesures concrètes ».",
      en: "PVV: the entry said the emergency asylum law had never been voted on and its fate was uncertain. The Senate rejected it on 21 April 2026; the same day it adopted the two-status asylum law, filed by PVV minister Marjolein Faber, which now supports the \"concrete measures\" status.",
    },
    source: {
      name: "Eerste Kamer — Senaat verwerpt strafbaarstelling illegaliteit, stemt in met tweestatusstelsel",
      url: 'https://www.eerstekamer.nl/nieuws/20260421/senaat_verwerpt_strafbaarstelling',
      accessedOn: '2026-10-20',
    },
  },
  {
    id: '2026-10-20-alliance-nationale-plan',
    date: '2026-10-20',
    kind: 'correction',
    page: '/partis/nacionala-apvieniba',
    summary: {
      fr: "Alliance nationale (Lettonie) : la fiche annonçait l'adoption d'un plan de restriction de l'immigration pour la mi-septembre 2026. Le Conseil des ministres l'a approuvé le 22 septembre 2026 ; la fiche cite désormais cette décision.",
      en: "National Alliance (Latvia): the entry announced the adoption of an immigration restriction plan for mid-September 2026. The Cabinet approved it on 22 September 2026; the entry now cites that decision.",
    },
    source: {
      name: "LV portāls — 22 septembre 2026",
      url: 'https://lvportals.lv/dienaskartiba/394845-valdiba-atbalsta-iekslietu-ministrijas-sagatavoto-visaptveroso-imigracijas-ierobezosanas-planu-2026',
      accessedOn: '2026-10-20',
    },
  },
  {
    id: '2026-10-20-critere-remigration-b',
    date: '2026-10-20',
    kind: 'reclassement',
    page: '/methodologie',
    summary: {
      fr: "Méthodologie : le critère « politique équivalente » du tag « remigration » vise désormais les départs de personnes en séjour régulier. L'expulsion de personnes en situation irrégulière, même chiffrée, relève de la réduction : Reform UK et One Nation restent en « réduction ». Le Parti républicain garde le tag « remigration », désormais au titre de l'usage du terme par son administration et non plus des départs « volontaires » de migrants en situation irrégulière.",
      en: "Methodology: the \"equivalent policy\" criterion of the \"remigration\" tag now covers departures of people with legal residence. Deporting people without legal status, even with a numeric target, counts as reduction: Reform UK and One Nation stay at \"reduction\". The Republican Party keeps the \"remigration\" tag, now because its administration uses the word rather than because of \"voluntary\" departures of undocumented migrants.",
    },
    source: {
      name: "NPR — 'Remigration,' once a fringe idea, becomes a mantra for the Trump administration",
      url: 'https://www.npr.org/2025/12/09/nx-s1-5630505/remigration-once-a-fringe-idea-becomes-a-mantra-for-the-trump-administration',
      accessedOn: '2026-10-20',
    },
  },
  {
    id: '2026-10-20-sources-classification',
    date: '2026-10-20',
    kind: 'correction',
    page: '/partis',
    summary: {
      fr: "Sources de classification : 39 fiches renvoyaient à la page d'accueil de The PopuList ou du Manifesto Project, sans désigner d'entrée. Chaque fiche couverte par The PopuList 4.0 (mai 2026) cite désormais l'entrée du parti et son codage ; hors d'Europe, la fiche cite l'entrée ParlGov ou le document sur lequel repose l'inclusion.",
      en: "Classification sources: 39 entries linked to the home page of The PopuList or the Manifesto Project without naming an entry. Every party coded by The PopuList 4.0 (May 2026) now cites its record and coding; outside Europe, the entry cites the ParlGov record or the document the inclusion rests on.",
    },
    source: {
      name: "The PopuList 4.0 (CSV)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
    },
  },
  {
    id: '2026-10-20-classification-hors-europe',
    date: '2026-10-20',
    kind: 'correction',
    page: '/partis',
    summary: {
      fr: "One Nation, le Parti populaire du Canada et New Zealand First étaient présentés comme classés par The PopuList, qui ne couvre que l'Europe. ParlGov range One Nation et le PPC dans la famille « Right-wing », New Zealand First dans la famille « Conservative ».",
      en: "One Nation, the People's Party of Canada and New Zealand First were presented as classified by The PopuList, which only covers Europe. ParlGov places One Nation and the PPC in the \"Right-wing\" family and New Zealand First in the \"Conservative\" family.",
    },
    source: {
      name: "ParlGov 2024 — New Zealand First Party",
      url: 'https://parlgov.fly.dev/data/parties/nzl/891/',
      accessedOn: '2026-10-20',
    },
  },
  {
    id: '2026-10-20-classification-populistes',
    date: '2026-10-20',
    kind: 'correction',
    page: '/partis',
    summary: {
      fr: "Independent Ireland et Miðflokkurinn étaient présentés comme classés à la droite radicale : The PopuList 4.0 les code populistes, mais pas d'extrême droite. Sanseitō : la fiche affirmait que ParlGov ne couvre pas le Japon ; ParlGov couvre le Japon mais ne code pas ce parti.",
      en: "Independent Ireland and Miðflokkurinn were presented as classified radical right: The PopuList 4.0 codes them populist but not far right. Sanseitō: the entry said ParlGov does not cover Japan; ParlGov covers Japan but has no record for this party.",
    },
    source: {
      name: "The PopuList 4.0 (CSV)",
      url: 'https://popu-list.github.io/Data/The%20PopuList%204.0.csv',
      accessedOn: '2026-10-20',
    },
  },
  {
    id: '2026-10-20-udr-conseil-etat',
    date: '2026-10-20',
    kind: 'correction',
    page: '/partis/udr',
    summary: {
      fr: "UDR : le recours contre son classement dans le bloc « extrême droite » pour les municipales de 2026 a été rejeté par le Conseil d'État le 27 février 2026, et non par le Conseil constitutionnel. La mention de la nuance « UXD », non vérifiée pour ce scrutin, est retirée.",
      en: "UDR: its challenge to being placed in the \"far right\" bloc for the 2026 municipal elections was rejected by the Conseil d'État on 27 February 2026, not by the Constitutional Council. The mention of the \"UXD\" label, unverified for that election, has been removed.",
    },
    source: {
      name: "Le Monde du droit — Municipales : LFI à l'extrême-gauche, UDR à l'extrême-droite",
      url: 'https://www.lemondedudroit.fr/public/282-droit-public-general/103261-municipales-lfi-a-l-extreme-gauche-udr-a-l-extreme-droite.html',
      accessedOn: '2026-10-20',
    },
  },
  {
    id: '2026-10-20-programmes-sources',
    date: '2026-10-20',
    kind: 'correction',
    page: '/partis',
    summary: {
      fr: "Programmes cités sans document : les intentions du RN, de Reform UK, de l'UDC, du SPD tchèque et d'EKRE, et les statuts d'action de l'UDC et du FPÖ, renvoient désormais à un document ou à un compte rendu précis. Ont été retirées les affirmations absentes de ces documents : objectif de « migration nette zéro » (Reform UK), « préférence nationale à l'embauche » (UDC), « arrêt » ou « limitation stricte » de l'immigration extra-européenne (SPD, EKRE), suspension de l'asile par « loi d'urgence » (FPÖ), « réduction drastique de l'immigration légale » (RN) et rejet du terme « remigration » attribué à Jordan Bardella, faute de source.",
      en: "Programmes cited without a document: the intentions of the RN, Reform UK, the SVP, the Czech SPD and EKRE, and the action statuses of the SVP and the FPÖ, now point to a specific document or report. Claims absent from those documents have been removed: a \"net zero migration\" target (Reform UK), \"national preference in hiring\" (SVP), \"stopping\" or \"strictly limiting\" non-European immigration (SPD, EKRE), suspending asylum by \"emergency law\" (FPÖ), \"drastic reduction of legal immigration\" (RN), and a rejection of the word \"remigration\" attributed to Jordan Bardella, for want of a source.",
    },
  },
  {
    id: '2026-10-20-chega-remigration',
    date: '2026-10-20',
    kind: 'reclassement',
    page: '/partis/chega',
    summary: {
      fr: "Chega : tag d'intention passé de « réduction » à « remigration », en application littérale de la méthodologie : le parti a inscrit un « Programme national de remigration » dans ses propositions pour le budget 2026.",
      en: "Chega: intention tag changed from \"reduction\" to \"remigration\", applying the methodology literally: the party put a \"National Remigration Programme\" in its 2026 budget proposals.",
    },
    source: {
      name: "Diário de Notícias — Aproximação do Chega ao grupo Reconquista leva tema da remigração ao Parlamento",
      url: 'https://www.dn.pt/sociedade/aproximao-do-chega-ao-grupo-reconquista-leva-tema-da-remigrao-ao-parlamento',
      accessedOn: '2026-10-20',
    },
  },
  {
    id: '2026-10-20-lega-remigration',
    date: '2026-10-20',
    kind: 'reclassement',
    page: '/partis/lega',
    summary: {
      fr: "Lega : tag d'intention passé de « réduction » à « remigration », en application littérale de la méthodologie : son groupe au conseil régional de Lombardie a présenté une motion sur la « remigrazione » en août 2026.",
      en: "Lega: intention tag changed from \"reduction\" to \"remigration\", applying the methodology literally: its group in the Lombardy regional council tabled a \"remigrazione\" motion in August 2026.",
    },
    source: {
      name: "Il Giornale — « Della Lega la proposta per la remigrazione »",
      url: 'https://www.ilgiornale.it/news/politica/della-lega-la-proposta-per-la-remigrazione/',
      accessedOn: '2026-10-20',
    },
  },
  {
    id: '2026-10-20-aur-remigration',
    date: '2026-10-20',
    kind: 'reclassement',
    page: '/partis/aur',
    summary: {
      fr: "AUR : tag d'intention passé de « réduction » à « remigration », en application littérale de la méthodologie : son président George Simion a présenté la remigration comme « une politique nécessaire » le 20 juin 2026.",
      en: "AUR: intention tag changed from \"reduction\" to \"remigration\", applying the methodology literally: its president George Simion called remigration \"a necessary policy\" on 20 June 2026.",
    },
    source: {
      name: "Realitatea — George Simion : Pentru milioane de europeni, remigrația a devenit o politică necesară",
      url: 'https://www.realitatea.net/stiri/politica/george-simion-pentru-milioane-de-europeni-remigratia-a-devenit-o-politica-necesara-snhudo',
      accessedOn: '2026-10-20',
    },
  },
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
    page: '/partis',
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
