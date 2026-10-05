import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const SITE_URL = 'https://veille-migration.vercel.app';

/**
 * Per-page metadata: title, description, canonical URL, hreflang alternates
 * and Open Graph. Next.js replaces (does not merge) a parent's `openGraph`
 * object, so every page rebuilds it whole here rather than inheriting the
 * site name from the layout.
 */
export async function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: string;
  /** Path after the locale prefix, '' for the home page, e.g. '/partis'. */
  path: string;
  /** Omitted on the home page, which uses the site title as is. */
  title?: string;
  description?: string;
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });
  const desc = description ?? t('siteDescription');
  const url = `/${locale}${path}`;

  return {
    title: title ?? { absolute: t('siteTitle') },
    description: desc,
    alternates: {
      canonical: url,
      languages: { fr: `/fr${path}`, en: `/en${path}`, 'x-default': `/fr${path}` },
    },
    openGraph: {
      type: 'website',
      siteName: t('siteName'),
      title: title ?? t('siteTitle'),
      description: desc,
      url,
      locale: locale === 'fr' ? 'fr_FR' : 'en_GB',
    },
  };
}
