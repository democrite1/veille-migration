import type { CountryCode } from './types';

/**
 * Light-touch visual identity per country: a couple of decorative emoji and
 * one factual, sourced-in-spirit tagline tied to what makes that country's
 * anti-immigration politics distinctive — not tourist trivia. Ton léger,
 * fond sérieux : the visual is playful (flag wash + motifs), the sentence
 * next to it is a real, specific fact about that party/that country's
 * migration politics, drawn from the same research as the party fiches.
 *
 * `accent` is a color pulled from the country's actual flag, used as a very
 * low-opacity background wash on the country banner so each country page
 * reads as visually distinct at a glance, not just "the same beige with a
 * different flag pasted on".
 */
export interface CountryProfile {
  tagline: string;
  motifs: string[];
  accent: string;
}

export const countryProfiles: Record<CountryCode, CountryProfile> = {
  FR: {
    tagline: "Le clivage né dans les années 1980 autour du Front national structure encore le paysage politique : son héritier est aujourd'hui le premier parti d'opposition.",
    motifs: ['⚜️', '🥖', '🗼'],
    accent: '#002654',
  },
  DE: {
    tagline: "Seul pays de la liste où un « cordon sanitaire » officiel (la Brandmauer) exclut explicitement un parti pourtant deuxième force du Bundestag.",
    motifs: ['🦅', '🏰', '🍺'],
    accent: '#DD0000',
  },
  GB: {
    tagline: "Le Brexit, porté en partie par la question migratoire, a directement enfanté le parti qui domine aujourd'hui les sondages.",
    motifs: ['🫖', '👑', '☂️'],
    accent: '#012169',
  },
  IT: {
    tagline: "Seul pays d'Europe de l'Ouest où l'héritière directe du parti néofasciste MSI dirige le gouvernement.",
    motifs: ['🏛️', '🍝', '🍕'],
    accent: '#008C45',
  },
  NL: {
    tagline: "Un parti à un seul adhérent officiel — son fondateur — a un temps dirigé la coalition gouvernementale.",
    motifs: ['🌷', '🚲', '🧀'],
    accent: '#AE1C28',
  },
  US: {
    tagline: "Le mot « remigration » n'y est jamais employé officiellement — mais un programme de départs incités financièrement en remplit tous les critères.",
    motifs: ['🦅', '🗽', '⭐'],
    accent: '#3C3B6E',
  },
  SE: {
    tagline: "Fondé par d'anciens militants néonazis dans les années 1980, ce parti finance aujourd'hui le retour volontaire à hauteur de 350 000 couronnes par adulte.",
    motifs: ['👑', '🌲', '🦌'],
    accent: '#006AA7',
  },
  AT: {
    tagline: "Seul parti de cette liste à avoir sorti une chanson de campagne officielle sur la remigration.",
    motifs: ['🏔️', '🎻', '☕'],
    accent: '#ED2939',
  },
  ES: {
    tagline: "Fondé par des dissidents du parti conservateur historique, il est devenu en une décennie la quatrième force du Congrès.",
    motifs: ['🐂', '🎸', '🍊'],
    accent: '#AA151B',
  },
  HU: {
    tagline: "Seize années de pouvoir ininterrompu se sont achevées en une seule soirée électorale, en avril 2026.",
    motifs: ['🌶️', '🦄', '🏰'],
    accent: '#CE2939',
  },
  FI: {
    tagline: "Rare cas où le parti anti-immigration au pouvoir n'occupe pas la primature : sa présidente est vice-Première ministre.",
    motifs: ['🦌', '❄️', '🧖'],
    accent: '#003580',
  },
  BE: {
    tagline: "Deuxième force politique du pays, mais maintenue hors de toute coalition depuis des décennies par un cordon sanitaire strict.",
    motifs: ['🍫', '🧇', '🦁'],
    accent: '#EF3340',
  },
  CH: {
    tagline: "Système unique en Europe : le premier parti du pays siège en permanence au gouvernement, aux côtés de tous ses rivaux.",
    motifs: ['🏔️', '🧀', '🐄'],
    accent: '#FF0000',
  },
  PT: {
    tagline: "Passé de parti marginal à deuxième force du pays en seulement six ans d'existence.",
    motifs: ['🐓', '🍊', '⛵'],
    accent: '#006600',
  },
  PL: {
    tagline: "Un parti que presque tout oppose au gouvernement s'allie pourtant à lui sur un point : rejeter le Pacte européen sur la migration.",
    motifs: ['🦅', '🥟', '🐴'],
    accent: '#DC143C',
  },
  NO: {
    tagline: "Meilleur score de son histoire en 2025 — mais resté dans l'opposition face à un bloc de gauche demeuré, de justesse, majoritaire.",
    motifs: ['🎿', '🐟', '⛰️'],
    accent: '#EF2B2D',
  },
  CZ: {
    tagline: "Son président est devenu, fin 2025, président de la Chambre des députés du pays.",
    motifs: ['🍺', '🏰', '🦁'],
    accent: '#11457E',
  },
  GR: {
    tagline: "A voté contre la loi migratoire de son propre camp politique, la jugeant encore trop permissive.",
    motifs: ['🏛️', '🫒', '⚓'],
    accent: '#0D5EAF',
  },
  RO: {
    tagline: "Son candidat a frôlé la présidence du pays en 2025 avant de s'incliner au second tour.",
    motifs: ['🐺', '🏰', '🍇'],
    accent: '#002B7F',
  },
  SK: {
    tagline: "Ses dirigeants ont déclaré publiquement ne soutenir « qu'une seule politique migratoire : la remigration ».",
    motifs: ['⛰️', '🐑', '🏰'],
    accent: '#0B4EA2',
  },
  DK: {
    tagline: "Fondé par une ancienne ministre de l'Immigration, exclue de son propre parti pour des positions jugées trop dures.",
    motifs: ['🧜‍♀️', '🚲', '🏰'],
    accent: '#C60C30',
  },
  AU: {
    tagline: "Propose de réduire l'immigration de plus de 570 000 personnes par rapport aux niveaux actuels.",
    motifs: ['🦘', '🏄', '🐨'],
    accent: '#00008B',
  },
  CA: {
    tagline: "Fondé par un ancien ministre conservateur battu à la direction de son parti d'origine — n'a encore jamais fait élire de député.",
    motifs: ['🍁', '🦫', '❄️'],
    accent: '#FF0000',
  },
  HR: {
    tagline: "Partenaire de la coalition gouvernementale, il préfère miser sur le retour de la diaspora croate que sur l'immigration de travail.",
    motifs: ['⚓', '🐬', '🏝️'],
    accent: '#FF0000',
  },
  SI: {
    tagline: "Son chef est redevenu Premier ministre pour la quatrième fois — après être arrivé deuxième à l'élection, d'un seul siège.",
    motifs: ['🏔️', '🐝', '🍷'],
    accent: '#005DA4',
  },
  BG: {
    tagline: "A perdu 60% de ses sièges au Parlement en une seule élection, en avril 2026.",
    motifs: ['🌹', '🐻', '🏔️'],
    accent: '#00966E',
  },
  NZ: {
    tagline: "Son chef, présent sur la scène politique depuis les années 1990, en est à sa énième participation gouvernementale.",
    motifs: ['🥝', '🐑', '⛰️'],
    accent: '#00247D',
  },
  AR: {
    tagline: "Le président a fait interdire par décret l'entrée sur le territoire à quiconque tiendrait des propos jugés hostiles au pays.",
    motifs: ['🧉', '⚽', '🏔️'],
    accent: '#74ACDF',
  },
  EE: {
    tagline: "Se présente comme « la seule véritable opposition » d'un pays où, selon son chef, deux blocs seulement existeraient en réalité.",
    motifs: ['🌲', '🎶', '🏰'],
    accent: '#0072CE',
  },
  LV: {
    tagline: "A obtenu du nouveau gouvernement, en échange de sa participation, l'engagement d'un plan de restriction migratoire.",
    motifs: ['🌲', '🎼', '🥖'],
    accent: '#9E3039',
  },
  LU: {
    tagline: "Entré pour la première fois de son histoire au Parlement européen en 2024, tout en restant dans l'opposition chez lui.",
    motifs: ['🏰', '🍷', '🌉'],
    accent: '#00A1DE',
  },
  CY: {
    tagline: "A doublé sa représentation parlementaire en une seule élection, en mai 2026.",
    motifs: ['☀️', '🫒', '⚓'],
    accent: '#D57800',
  },
};
