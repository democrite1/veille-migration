import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/metadata';
import { routing } from '@/i18n/routing';
import { parties } from '@/data/parties';
import { CONTENT_UPDATED, lastChecked } from '@/lib/freshness';

const PAGES = [
  '',
  '/partis',
  '/elections',
  '/legislation',
  '/actualites',
  '/methodologie',
  '/corrections',
  '/a-propos',
  '/contact',
  '/mentions-legales',
  '/confidentialite',
];

// Every page in both languages, each entry listing its translation (audit P5).
export default function sitemap(): MetadataRoute.Sitemap {
  const entry = (path: string, lastModified: string): MetadataRoute.Sitemap =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      alternates: {
        languages: Object.fromEntries(routing.locales.map((l) => [l, `${SITE_URL}/${l}${path}`])),
      },
    }));

  return [
    ...PAGES.flatMap((p) => entry(p, CONTENT_UPDATED)),
    ...parties.flatMap((p) => entry(`/partis/${p.slug}`, lastChecked(p) ?? CONTENT_UPDATED)),
  ];
}
