-- Schema for the anti-immigration policy watch site.
-- Mirrors src/data/types.ts. Until this project is connected to a real
-- Supabase instance, the app reads from the local seed data in src/data/*.ts.

create table if not exists countries (
  code text primary key,        -- ISO 3166-1 alpha-2, or 'EU'
  name_fr text not null,
  name_en text not null
);

create table if not exists sources (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  url text not null,
  accessed_on date,
  note text
);

create table if not exists parties (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  country_code text not null references countries(code),
  positioning text not null,
  electoral_status text not null check (electoral_status in ('pouvoir', 'opposition', 'extra-parlementaire')),
  electoral_status_detail text not null,
  electoral_status_source_id uuid references sources(id),
  official_website text,
  classification_source_id uuid references sources(id),
  founded int,
  description text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists party_social_accounts (
  id uuid primary key default gen_random_uuid(),
  party_id uuid not null references parties(id) on delete cascade,
  platform text not null,
  url text not null
);

-- One row per axis (intention | action_status), current value.
create table if not exists party_classifications (
  id uuid primary key default gen_random_uuid(),
  party_id uuid not null references parties(id) on delete cascade,
  axis text not null check (axis in ('intention', 'action_status')),
  tag text not null check (tag in ('reduction', 'remigration', 'programme', 'mesures_concretes', 'mesures_concretes_abrogee')),
  note text,
  source_id uuid references sources(id),
  updated_at timestamptz not null default now(),
  unique (party_id, axis)
);

-- Dated history entries for the action_status axis (kept even after the
-- current tag changes, per the "historique daté conservé" rule).
create table if not exists party_status_history (
  id uuid primary key default gen_random_uuid(),
  party_id uuid not null references parties(id) on delete cascade,
  date date not null,
  tag text not null check (tag in ('programme', 'mesures_concretes', 'mesures_concretes_abrogee')),
  note text not null,
  source_id uuid references sources(id)
);

create table if not exists elections (
  id uuid primary key default gen_random_uuid(),
  country_code text not null references countries(code),
  level text not null check (level in ('national', 'regional', 'local', 'partial')),
  scope_name text not null,
  mandate_duration text not null,
  powers text not null,
  date date not null,
  status text not null check (status in ('a_venir', 'resultat_connu')),
  result text,
  source_id uuid references sources(id)
);

create table if not exists legislation (
  id uuid primary key default gen_random_uuid(),
  country_or_level text not null,  -- FK-ish to countries.code, or 'EU'
  title text not null,
  status text not null check (status in ('promulguee', 'en_discussion')),
  date date not null,
  description text not null,
  source_id uuid references sources(id)
);

create table if not exists news_items (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  countries text[] not null default '{}',
  date date not null,
  summary text not null,
  legal_status text not null,
  source_id uuid references sources(id)
);

create index if not exists idx_parties_country on parties(country_code);
create index if not exists idx_elections_country on elections(country_code);
create index if not exists idx_elections_date on elections(date desc);
create index if not exists idx_legislation_date on legislation(date desc);
create index if not exists idx_news_date on news_items(date desc);
