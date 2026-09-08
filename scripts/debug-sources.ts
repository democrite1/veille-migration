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

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!, {
  auth: { persistSession: false },
});

async function main() {
  const { data: parties, error: pErr } = await supabase.from('parties').select('slug, electoral_status_source_id, classification_source_id');
  if (pErr) throw pErr;
  const { data: sources, error: sErr } = await supabase.from('sources').select('id');
  if (sErr) throw sErr;
  const sourceIds = new Set((sources ?? []).map((s) => s.id));
  console.log(`Total sources: ${sourceIds.size}`);
  console.log(`Total parties: ${parties?.length}`);

  for (const p of parties ?? []) {
    if (!p.electoral_status_source_id || !sourceIds.has(p.electoral_status_source_id)) {
      console.log(`BROKEN electoral_status_source_id for ${p.slug}: ${p.electoral_status_source_id}`);
    }
    if (!p.classification_source_id || !sourceIds.has(p.classification_source_id)) {
      console.log(`BROKEN classification_source_id for ${p.slug}: ${p.classification_source_id}`);
    }
  }

  const { data: classifications, error: cErr } = await supabase.from('party_classifications').select('party_id, axis, source_id');
  if (cErr) throw cErr;
  for (const c of classifications ?? []) {
    if (!c.source_id || !sourceIds.has(c.source_id)) {
      console.log(`BROKEN classification source_id for party_id ${c.party_id} axis ${c.axis}: ${c.source_id}`);
    }
  }
  console.log('Done checking.');
}

main();
