import { createClient } from '@supabase/supabase-js';

/**
 * Read-only client used by every page (src/lib/queries.ts), with the public
 * anon key. Writes go through scripts/seed-supabase.ts with the service_role
 * key, which never reaches the browser. Row Level Security restricts the
 * anon role to SELECT on every table.
 */
export function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error(
      'Supabase env vars missing. Copy .env.example to .env.local and fill in NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY.',
    );
  }

  return createClient(url, key);
}
