-- Deepens party profiles: European Parliament representation, local/regional
-- implantation ("le maillage national"), full electoral history, and the
-- total assembly size on elections (so a seat count reads as "X sur Y").

alter table parties add column if not exists meps_count int;
alter table parties add column if not exists meps_total_country int;
alter table parties add column if not exists meps_group text;
alter table parties add column if not exists meps_source_id uuid references sources(id);

alter table parties add column if not exists local_implantation_summary text;
alter table parties add column if not exists local_implantation_mayors int;
alter table parties add column if not exists local_implantation_regional_councillors int;
alter table parties add column if not exists local_implantation_source_id uuid references sources(id);

create table if not exists party_electoral_history (
  id uuid primary key default gen_random_uuid(),
  party_id uuid not null references parties(id) on delete cascade,
  label text not null,
  chamber text,
  date date not null,
  seats int not null,
  total_seats int not null,
  vote_percent numeric,
  source_id uuid references sources(id)
);

create index if not exists idx_party_electoral_history_party on party_electoral_history(party_id);

alter table party_electoral_history enable row level security;
create policy "Public read access" on party_electoral_history for select using (true);

alter table elections add column if not exists total_seats int;
