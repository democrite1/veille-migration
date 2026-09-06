import { createClient } from '@supabase/supabase-js';

/**
 * Not wired into any page yet — the app currently reads from src/data/*.ts.
 * Once a real Supabase project is connected (see .env.example), fetch
 * scripts in /scripts/fetch will write here, and pages can switch from the
 * local data layer to querying these tables.
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
