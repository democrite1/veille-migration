/**
 * Copies the flags the site uses from the flag-icons package (MIT, 4:3 SVG)
 * into public/flags, so that no visitor's browser contacts a third-party
 * server to draw a flag (audit J3: flagcdn.com received every visitor's IP).
 * Run after adding a country: npm run flags. The audit fails if a flag is
 * missing.
 */
import { copyFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { usedFlagCodes } from '../src/lib/flags';

const from = resolve(__dirname, '../node_modules/flag-icons');
const to = resolve(__dirname, '../public/flags');
mkdirSync(to, { recursive: true });

const codes = usedFlagCodes();
for (const code of codes) copyFileSync(join(from, 'flags/4x3', `${code}.svg`), join(to, `${code}.svg`));
for (const f of readdirSync(to)) {
  if (f.endsWith('.svg') && !codes.includes(f.replace(/\.svg$/, ''))) rmSync(join(to, f));
}
// The MIT licence asks for its notice to travel with the copies.
copyFileSync(join(from, 'LICENSE'), join(to, 'LICENSE.txt'));
console.log(`${codes.length} flags in public/flags`);
