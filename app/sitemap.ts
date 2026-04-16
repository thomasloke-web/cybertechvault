import type { MetadataRoute } from "next"
import { articles } from "@/lib/articles"
import { reviews } from "@/lib/reviews"
import { comparisons } from "@/lib/comparisons"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cybertechvault.com"

  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${base}/categories`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/categories/vpn`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/categories/password-managers`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/categories/antivirus`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/categories/identity-protection`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/categories/dark-web-monitoring`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/categories/two-factor-authentication`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/journal`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 0.9 },
    { url: `${base}/tools/security-quiz`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/authors/thomas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/authors/oyvind`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.5 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/disclosure`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ]

  const articlePages = articles.map((a) => ({
    url: `${base}/journal/${a.slug}`,
    lastModified: new Date(a.datePublished),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const staticJournalPages = [
    { slug: "easeus-pctrans-review", date: "2026-04-10" },
    { slug: "easeus-backup-review", date: "2026-04-12" },
    { slug: "ransomware-protection-2026", date: "2026-04-08" },
    { slug: "end-to-end-encryption-explained", date: "2026-04-05" },
    { slug: "best-free-security-tools-2026", date: "2026-04-02" },
  ].map((p) => ({
    url: `${base}/journal/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const reviewPages = reviews.map((r) => ({
    url: `${base}/reviews/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  const comparisonPages = comparisons.map((c) => ({
    url: `${base}/compare/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...articlePages, ...staticJournalPages, ...reviewPages, ...comparisonPages]
}
