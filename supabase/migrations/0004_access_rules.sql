-- Access rules (audit T4).
--
-- Production had row level security, read-only policies and the exec_sql
-- helper set up by hand in the SQL editor; 0001_init.sql enabled RLS on no
-- table, so a fresh install from this repository gave a database anyone with
-- the public key could write to. This migration reproduces the production
-- state and is safe to run more than once.
--
-- Since audit item D8 the site reads src/data at build time and no longer
-- queries Supabase; the database is an optional copy kept in sync by
-- scripts/seed-supabase.ts with the service_role key, which bypasses RLS.
--
-- On a new project, run this file once in the SQL editor: exec_sql, which
-- scripts/run-sql.ts relies on, does not exist before it.

-- Helper used by scripts/run-sql.ts to apply migrations from the terminal.
-- Only the service_role key may call it.
create or replace function exec_sql(query text)
returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  execute query;
end;
$$;

revoke all on function exec_sql(text) from public, anon, authenticated;
grant execute on function exec_sql(text) to service_role;

-- Every table: RLS on, anyone may read, nobody but service_role may write
-- (no insert, update or delete policy exists, so those are refused).
do $$
declare
  t text;
begin
  foreach t in array array[
    'countries',
    'sources',
    'parties',
    'party_social_accounts',
    'party_classifications',
    'party_status_history',
    'party_electoral_history',
    'elections',
    'legislation',
    'news_items'
  ] loop
    execute format('alter table %I enable row level security', t);
    if not exists (
      select 1 from pg_policies
      where schemaname = 'public' and tablename = t and policyname = 'Public read access'
    ) then
      execute format('create policy "Public read access" on %I for select using (true)', t);
    end if;
  end loop;
end
$$;
