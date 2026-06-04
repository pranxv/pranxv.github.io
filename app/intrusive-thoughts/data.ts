/**
 * Single source of truth for the "intrusive thoughts" index.
 *
 * Each entry's URL is /intrusive-thoughts/<id>/<slug>. The id stays
 * stable forever (it's the canonical number in the index), the slug
 * can change without breaking analytics because view tracking keys on
 * the slug — see `views.ts`.
 *
 * Add a new entry by appending to THOUGHTS and creating a matching
 * `app/intrusive-thoughts/<id>/<slug>/page.tsx` for its body.
 */

export type IntrusiveThought = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  /** ISO 8601 date (YYYY-MM-DD). */
  publishedAt: string;
  /** ISO 8601 date (YYYY-MM-DD). Defaults to publishedAt if never edited. */
  updatedAt: string;
};

export const THOUGHTS: IntrusiveThought[] = [
  {
    id: 1,
    slug: "running",
    title: "my relationship with running",
    excerpt:
      "On Murakami, an ATFL injury, and why I stopped tracking pace.",
    publishedAt: "2026-06-04",
    updatedAt: "2026-06-05",
  },
];

export function thoughtHref(t: IntrusiveThought): string {
  return `/intrusive-thoughts/${t.id}/${t.slug}`;
}

export function getThought(id: number, slug: string): IntrusiveThought | undefined {
  return THOUGHTS.find((t) => t.id === id && t.slug === slug);
}

/** Render an ISO date as "June 5, 2026" in UTC (matches publishedAt semantics). */
export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
