import Link from "next/link"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { articles } from "@/lib/articles"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cybertechvault.com"

export const metadata: Metadata = {
  title: "Journal — CyberTechVault",
  description: "Expert guides, in-depth reviews, and cybersecurity insights. Updated weekly by Thomas and Øyvind.",
  alternates: { canonical: `${siteUrl}/journal` },
}

export default function JournalPage() {
  const sorted = [...articles].sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#080C10] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00FF88]">Journal</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#F0FDF4] mt-4">Latest Guides & Reviews</h1>
            <p className="text-[#94A3B8] mt-4 max-w-2xl mx-auto">
              Expert cybersecurity insights, tool comparisons, and actionable guides to protect yourself online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="group p-6 rounded-2xl bg-[#0D1117] border border-[#00FF8820] hover:border-[#00FF8860] transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-[#A855F7] uppercase tracking-wider">{article.category}</span>
                  <span className="text-xs text-white/20">•</span>
                  <span className="text-xs text-[#94A3B8]">
                    {new Date(article.datePublished).toLocaleDateString("en-GB", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-[#F0FDF4] group-hover:text-[#00FF88] transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-sm text-[#94A3B8] leading-relaxed line-clamp-3 mb-4">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#94A3B8]">By {article.author === "thomas" ? "Thomas" : "Øyvind"}</span>
                  <span className="text-[#00FF88] text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                    Read &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
