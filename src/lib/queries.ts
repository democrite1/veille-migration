import type { Election, Legislation, NewsItem, Party } from '@/data/types';
import { parties } from '@/data/parties';
import { elections } from '@/data/elections';
import { legislation } from '@/data/legislation';
import { news } from '@/data/news';

/**
 * Data access for every page, read from the repository at build time.
 *
 * Until October 2026 these functions queried Supabase on each request. When
 * the free-tier project was paused for inactivity, its domain stopped
 * resolving and the party directory returned HTTP 500 in production. The
 * files in src/data are the editorial source of truth anyway — Supabase only
 * ever held a copy pushed by scripts/seed-supabase.ts — so the site now reads
 * them directly: no database on the request path, nothing to pause, and a
 * data change ships with the deployment that carries it.
 *
 * The functions stay async and keep their signatures so pages are unchanged.
 */

const byDateDesc = <T extends { date: string }>(a: T, b: T) => b.date.localeCompare(a.date);

const sortedParties: Party[] = [...parties]
  .sort((a, b) => a.name.localeCompare(b.name, 'fr'))
  .map((p) => (p.electoralHistory ? { ...p, electoralHistory: [...p.electoralHistory].sort(byDateDesc) } : p));

export async function getParties(): Promise<Party[]> {
  return sortedParties;
}

export async function getPartyBySlug(slug: string): Promise<Party | undefined> {
  return sortedParties.find((p) => p.slug === slug);
}

export async function getElections(): Promise<Election[]> {
  return [...elections].sort(byDateDesc);
}

export async function getLegislation(): Promise<Legislation[]> {
  return [...legislation].sort(byDateDesc);
}

export async function getNews(): Promise<NewsItem[]> {
  return [...news].sort(byDateDesc);
}
