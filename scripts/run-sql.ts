/**
 * Runs a raw SQL file against Supabase via the `exec_sql` RPC function
 * (see supabase/migrations for the bootstrap that created it). Lets
 * migrations be applied from the terminal instead of the SQL Editor UI.
 *
 * Usage: npx tsx scripts/run-sql.ts supabase/migrations/0002_party_depth.sql
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { createClient } from '@supabase/supabase-js';

const envPath = resolve(__dirname, '..', '.env.local');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

const filePath = process.argv[2];
if (!filePath) {
  console.error('Usage: npx tsx scripts/run-sql.ts <path-to-sql-file>');
  process.exit(1);
}

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
  auth: { persistSession: false },
});

async function main() {
  const sql = readFileSync(resolve(process.cwd(), filePath), 'utf-8');
  const { error } = await supabase.rpc('exec_sql', { query: sql });
  if (error) throw new Error(`exec_sql failed: ${error.message}`);
  console.log(`Applied ${filePath} successfully.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
