/**
 * Every fetch script used to log its errors and exit 0, so an outage of the
 * news feed left the daily run green (audit T6). Each script now counts its
 * failed requests and exits 1 when more than half fail.
 */
export function finish(script: string, total: number, failed: number): void {
  console.log(`[${script}] ${total - failed}/${total} requêtes réussies.`);
  if (failed * 2 > total) {
    console.error(`[${script}] plus de la moitié des requêtes ont échoué : le flux est probablement indisponible.`);
    process.exitCode = 1;
  }
}
