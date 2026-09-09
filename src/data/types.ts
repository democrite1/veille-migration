export type CountryCode =
  | 'FR'
  | 'DE'
  | 'GB'
  | 'IT'
  | 'NL'
  | 'US'
  | 'SE'
  | 'AT'
  | 'ES'
  | 'HU'
  | 'FI'
  | 'BE'
  | 'CH'
  | 'PT'
  | 'PL'
  | 'NO'
  | 'CZ'
  | 'GR'
  | 'RO'
  | 'SK'
  | 'DK'
  | 'AU'
  | 'CA'
  | 'HR'
  | 'SI'
  | 'BG'
  | 'NZ'
  | 'AR'
  | 'EE'
  | 'LV'
  | 'LU'
  | 'CY';

export type ElectoralStatus = 'pouvoir' | 'opposition' | 'extra-parlementaire';

export type IntentionTag = 'reduction' | 'remigration';

export type ActionStatusTag =
  | 'programme'
  | 'mesures_concretes'
  | 'mesures_concretes_abrogee';

export interface Source {
  name: string;
  url: string;
  accessedOn?: string; // ISO date the fact was last verified against this source
  note?: string;
}

export interface Classification {
  tag: IntentionTag | ActionStatusTag;
  source: Source;
  note?: string;
}

export interface StatusHistoryEntry {
  date: string; // ISO date
  tag: ActionStatusTag;
  note: string;
  source?: Source;
}

export interface SocialAccount {
  platform: string;
  url: string;
}

/** One past result for a given assembly/chamber — the building block of a party's electoral history. */
export interface ElectoralResult {
  label: string; // e.g. "Élections législatives 2024"
  chamber?: string; // e.g. "Assemblée nationale", "Bundestag", "Sénat"
  date: string; // ISO date
  seats: number;
  totalSeats: number; // size of the assembly, so dominance is legible at a glance
  votePercent?: number;
  source: Source;
}

/** European Parliament representation, tracked separately from national assemblies. */
export interface EuropeanRepresentation {
  meps: number;
  totalCountryMeps?: number; // that country's total MEP allocation, for context
  europeanGroup?: string; // e.g. "Identité et Démocratie", "ECR", "Patriotes pour l'Europe"
  source: Source;
}

/** Local/regional footprint: mayors, regional councillors, etc. — "le maillage national". */
export interface LocalImplantation {
  summary: string;
  mayors?: number;
  regionalCouncillors?: number;
  source: Source;
}

export interface Party {
  slug: string;
  name: string;
  countryCode: CountryCode;
  positioning: string;
  electoralStatus: ElectoralStatus;
  electoralStatusDetail: string;
  electoralStatusSource: Source;
  officialWebsite: string;
  socialAccounts: SocialAccount[];
  /** Source justifying inclusion in the directory (Manifesto Project / ParlGov / PopuList / CHES) */
  classificationSource: Source;
  intention: Classification;
  actionStatus: Classification;
  actionStatusHistory?: StatusHistoryEntry[];
  /** Past results, most recent first — gives the seats-out-of-total context a single "X sièges" figure can't. */
  electoralHistory?: ElectoralResult[];
  europeanRepresentation?: EuropeanRepresentation;
  localImplantation?: LocalImplantation;
  founded?: number;
  description: string;
}

export type ElectionLevel = 'national' | 'regional' | 'local' | 'partial';
export type ElectionStatus = 'a_venir' | 'resultat_connu';

export interface Election {
  id: string;
  countryCode: CountryCode;
  level: ElectionLevel;
  scopeName: string;
  mandateDuration: string;
  powers: string;
  date: string; // ISO date
  status: ElectionStatus;
  result?: string;
  /** Size of the assembly/chamber being elected, so "X sièges" can be read as "X sur Y". */
  totalSeats?: number;
  source: Source;
}

export type LegislationLevel = 'national' | 'EU';
export type LegislationStatus = 'promulguee' | 'en_discussion';

export interface Legislation {
  id: string;
  countryOrLevel: CountryCode | 'EU';
  title: string;
  status: LegislationStatus;
  date: string; // ISO date
  description: string;
  source: Source;
}

export interface NewsItem {
  id: string;
  title: string;
  /** Free-form ISO-ish country labels; not restricted to CountryCode since
   * this section tracks initiatives beyond the core party-directory scope. */
  countries: string[];
  date: string; // ISO date
  summary: string;
  legalStatus: string;
  source: Source;
}
