import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cybertechvault.com"
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/go/"] }],
    sitemap: `${base}/sitemap.xml`,
  }
}
