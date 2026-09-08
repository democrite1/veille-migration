/**
 * Minimal Google News RSS client. No API key, no registration, no rate
 * limiting encountered in practice (unlike GDELT's DOC API, which enforces
 * a strict 1 req/5s per-IP limit that shared/cloud egress IPs — including
 * GitHub Actions runners — routinely trip). EUR-Lex has no simple keyless
 * RSS-by-keyword endpoint, which is why this is the shared fetch mechanism
 * for news, legislation, elections and party-status candidates below.
 *
 * This deliberately returns *candidates for human review*, not verified
 * facts: a headline matching a query is a lead, not a sourced claim. Every
 * fact actually published on the site goes through the same manual
 * verification this project's editor (human or Claude) has applied to
 * every entry in src/data/*.ts so far.
 */

export interface NewsCandidate {
  title: string;
  url: string;
  pubDate: string;
  source: string;
}

const ENTITY_MAP: Record<string, string> = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&apos;': "'",
};

function decodeEntities(s: string): string {
  return s.replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&apos;/g, (m) => ENTITY_MAP[m] ?? m);
}

function extractTag(block: string, tag: string): string {
  const match = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  if (!match) return '';
  return decodeEntities(match[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/, '$1').trim());
}

/**
 * @param query Google News search query (supports quotes, OR, site: etc.)
 * @param opts.lang two-letter language code (default 'fr')
 * @param opts.country two-letter country code for gl/ceid (default 'FR')
 * @param opts.limit max items to return (default 10)
 */
export async function fetchGoogleNewsRss(
  query: string,
  opts: { lang?: string; country?: string; limit?: number } = {},
): Promise<NewsCandidate[]> {
  const lang = opts.lang ?? 'fr';
  const country = opts.country ?? 'FR';
  const limit = opts.limit ?? 10;

  const url = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=${lang}&gl=${country}&ceid=${country}:${lang}`;

  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; VeilleMigrationBot/1.0)' },
  });
  if (!res.ok) {
    throw new Error(`Google News RSS request failed (${res.status}) for query "${query}"`);
  }
  const xml = await res.text();

  const items = xml.match(/<item>[\s\S]*?<\/item>/g) ?? [];
  return items.slice(0, limit).map((block) => ({
    title: extractTag(block, 'title'),
    url: extractTag(block, 'link'),
    pubDate: extractTag(block, 'pubDate'),
    source: extractTag(block, 'source'),
  }));
}
