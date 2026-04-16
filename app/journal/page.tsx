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

const staticJournalEntries = [
  {
    slug: "easeus-backup-review",
    title: "EaseUS Backup Center Review 2026 — Set It Once, Never Lose Data Again",
    description: "Real-world test of EaseUS Backup Center: file, system and disk backups, automated schedules, cloud destinations, and how it neutralises ransomware.",
    category: "backup",
    author: "thomas" as const,
    datePublished: "2026-04-12",
  },
  {
    slug: "easeus-pctrans-review",
    title: "EaseUS Todo PCTrans Review 2026 — The Easiest Way to Move to a New PC",
    description: "Hands-on review of EaseUS Todo PCTrans: three migration types, what transfers, what does not, and why it outperforms manual file copying.",
    category: "migration",
    author: "thomas" as const,
    datePublished: "2026-04-10",
  },
  {
    slug: "ransomware-protection-2026",
    title: "Ransomware in 2026 — What It Is, How It Spreads, and How to Protect Yourself",
    description: "A plain-English guide to ransomware in 2026: how it works, how it gets in, the defence stack that stops it, and what to do if it hits you.",
    category: "security",
    author: "thomas" as const,
    datePublished: "2026-04-08",
  },
  {
    slug: "end-to-end-encryption-explained",
    title: "What Is End-to-End Encryption and Why Does It Matter in 2026?",
    description: "Plain-English explanation of end-to-end encryption: what it protects, what it does not, which services use it, and why metadata still matters.",
    category: "privacy",
    author: "oyvind" as const,
    datePublished: "2026-04-05",
  },
  {
    slug: "best-free-security-tools-2026",
    title: "The Best Free Security Tools in 2026 — Protect Yourself Without Spending a Penny",
    description: "A zero-cost security stack for 2026: free antivirus, password manager, VPN, breach notifier, authenticator and DNS filter.",
    category: "security",
    author: "thomas" as const,
    datePublished: "2026-04-02",
  },
]

export default function JournalPage() {
  const combined = [
    ...articles.map((a) => ({ slug: a.slug, title: a.title, description: a.description, category: a.category, author: a.author, datePublished: a.datePublished })),
    ...staticJournalEntries,
  ]
  const sorted = combined.sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())

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
