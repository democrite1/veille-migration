/**
 * Daily fetch: reconcile party classifications against Manifesto Project /
 * ParlGov / PopuList and update electoral status (seat counts, coalition
 * status). Intended to run via GitHub Actions (see .github/workflows/daily-update.yml)
 * and write to Supabase once a project is connected — see src/lib/supabase.ts.
 *
 * TODO: implement source clients and upsert into `parties` / `party_classifications`.
 */
async function main() {
  console.log('[fetch:parties] Not yet implemented — connect a Supabase project first.');
}

main();
