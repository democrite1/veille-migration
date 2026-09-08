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
  | 'DK';

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
