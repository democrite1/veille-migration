import type { CountryCode } from './types';

/**
 * Light-touch visual identity per country: a couple of decorative emoji and
 * one factual, sourced-in-spirit tagline tied to what makes that country's
 * anti-immigration politics distinctive — not tourist trivia. Ton léger,
 * fond sérieux : the visual is playful (flag wash + motifs), the sentence
 * next to it is a real, specific fact about that party/that country's
 * migration politics, drawn from the same research as the party fiches.
 */
export interface CountryProfile {
  tagline: string;
  motifs: string[];
}

export const countryProfiles: Record<CountryCode, CountryProfile> = {
  FR: {
    tagline: "Le clivage né dans les années 1980 autour du Front national structure encore le paysage politique : son héritier est aujourd'hui le premier parti d'opposition.",
    motifs: ['⚜️', '🥖', '🗼'],
  },
  DE: {
    tagline: "Seul pays de la liste où un « cordon sanitaire » officiel (la Brandmauer) exclut explicitement un parti pourtant deuxième force du Bundestag.",
    motifs: ['🦅', '🏰', '🍺'],
  },
  GB: {
    tagline: "Le Brexit, porté en partie par la question migratoire, a directement enfanté le parti qui domine aujourd'hui les sondages.",
    motifs: ['🫖', '👑', '☂️'],
  },
  IT: {
    tagline: "Seul pays d'Europe de l'Ouest où l'héritière directe du parti néofasciste MSI dirige le gouvernement.",
    motifs: ['🏛️', '🍝', '🍕'],
  },
  NL: {
    tagline: "Un parti à un seul adhérent officiel — son fondateur — a un temps dirigé la coalition gouvernementale.",
    motifs: ['🌷', '🚲', '🧀'],
  },
  US: {
    tagline: "Le mot « remigration » n'y est jamais employé officiellement — mais un programme de départs incités financièrement en remplit tous les critères.",
    motifs: ['🦅', '🗽', '⭐'],
  },
  SE: {
    tagline: "Fondé par d'anciens militants néonazis dans les années 1980, ce parti finance aujourd'hui le retour volontaire à hauteur de 350 000 couronnes par adulte.",
    motifs: ['👑', '🌲', '🦌'],
  },
  AT: {
    tagline: "Seul parti de cette liste à avoir sorti une chanson de campagne officielle sur la remigration.",
    motifs: ['🏔️', '🎻', '☕'],
  },
  ES: {
    tagline: "Fondé par des dissidents du parti conservateur historique, il est devenu en une décennie la quatrième force du Congrès.",
    motifs: ['🐂', '🎸', '🍊'],
  },
  HU: {
    tagline: "Seize années de pouvoir ininterrompu se sont achevées en une seule soirée électorale, en avril 2026.",
    motifs: ['🌶️', '🦄', '🏰'],
  },
  FI: {
    tagline: "Rare cas où le parti anti-immigration au pouvoir n'occupe pas la primature : sa présidente est vice-Première ministre.",
    motifs: ['🦌', '❄️', '🧖'],
  },
  BE: {
    tagline: "Deuxième force politique du pays, mais maintenue hors de toute coalition depuis des décennies par un cordon sanitaire strict.",
    motifs: ['🍫', '🧇', '🦁'],
  },
  CH: {
    tagline: "Système unique en Europe : le premier parti du pays siège en permanence au gouvernement, aux côtés de tous ses rivaux.",
    motifs: ['🏔️', '🧀', '🐄'],
  },
  PT: {
    tagline: "Passé de parti marginal à deuxième force du pays en seulement six ans d'existence.",
    motifs: ['🐓', '🍊', '⛵'],
  },
  PL: {
    tagline: "Un parti que presque tout oppose au gouvernement s'allie pourtant à lui sur un point : rejeter le Pacte européen sur la migration.",
    motifs: ['🦅', '🥟', '🐴'],
  },
  NO: {
    tagline: "Meilleur score de son histoire en 2025 — mais resté dans l'opposition face à un bloc de gauche demeuré, de justesse, majoritaire.",
    motifs: ['🎿', '🐟', '⛰️'],
  },
  CZ: {
    tagline: "Son président est devenu, fin 2025, président de la Chambre des députés du pays.",
    motifs: ['🍺', '🏰', '🦁'],
  },
  GR: {
    tagline: "A voté contre la loi migratoire de son propre camp politique, la jugeant encore trop permissive.",
    motifs: ['🏛️', '🫒', '⚓'],
  },
  RO: {
    tagline: "Son candidat a frôlé la présidence du pays en 2025 avant de s'incliner au second tour.",
    motifs: ['🐺', '🏰', '🍇'],
  },
  SK: {
    tagline: "Ses dirigeants ont déclaré publiquement ne soutenir « qu'une seule politique migratoire : la remigration ».",
    motifs: ['⛰️', '🐑', '🏰'],
  },
  DK: {
    tagline: "Fondé par une ancienne ministre de l'Immigration, exclue de son propre parti pour des positions jugées trop dures.",
    motifs: ['🧜‍♀️', '🚲', '🏰'],
  },
  AU: {
    tagline: "Propose de réduire l'immigration de plus de 570 000 personnes par rapport aux niveaux actuels.",
    motifs: ['🦘', '🏄', '🐨'],
  },
  CA: {
    tagline: "Fondé par un ancien ministre conservateur battu à la direction de son parti d'origine — n'a encore jamais fait élire de député.",
    motifs: ['🍁', '🦫', '❄️'],
  },
  HR: {
    tagline: "Partenaire de la coalition gouvernementale, il préfère miser sur le retour de la diaspora croate que sur l'immigration de travail.",
    motifs: ['⚓', '🐬', '🏝️'],
  },
  SI: {
    tagline: "Son chef est redevenu Premier ministre pour la quatrième fois — après être arrivé deuxième à l'élection, d'un seul siège.",
    motifs: ['🏔️', '🐝', '🍷'],
  },
  BG: {
    tagline: "A perdu 60% de ses sièges au Parlement en une seule élection, en avril 2026.",
    motifs: ['🌹', '🐻', '🏔️'],
  },
  NZ: {
    tagline: "Son chef, présent sur la scène politique depuis les années 1990, en est à sa énième participation gouvernementale.",
    motifs: ['🥝', '🐑', '⛰️'],
  },
  AR: {
    tagline: "Le président a fait interdire par décret l'entrée sur le territoire à quiconque tiendrait des propos jugés hostiles au pays.",
    motifs: ['🧉', '⚽', '🏔️'],
  },
  EE: {
    tagline: "Se présente comme « la seule véritable opposition » d'un pays où, selon son chef, deux blocs seulement existeraient en réalité.",
    motifs: ['🌲', '🎶', '🏰'],
  },
  LV: {
    tagline: "A obtenu du nouveau gouvernement, en échange de sa participation, l'engagement d'un plan de restriction migratoire.",
    motifs: ['🌲', '🎼', '🥖'],
  },
  LU: {
    tagline: "Entré pour la première fois de son histoire au Parlement européen en 2024, tout en restant dans l'opposition chez lui.",
    motifs: ['🏰', '🍷', '🌉'],
  },
  CY: {
    tagline: "A doublé sa représentation parlementaire en une seule élection, en mai 2026.",
    motifs: ['☀️', '🫒', '⚓'],
  },
};
