import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AffiliateDisclosureBanner } from "@/components/review/affiliate-disclosure-banner"
import { ComparisonTable } from "@/components/review/comparison-table"
import { buildItemListSchema } from "@/lib/schema"

const SITE_URL = "https://cybertechvault.com"

export function generateMetadata(): Metadata {
  return {
    title: "Best Identity Protection Services 2026 — Expert Ranked | CyberTechVault",
    description:
      "Compare the 10 best identity protection and identity theft monitoring services of 2026. Credit monitoring, SSN alerts, insurance coverage, and recovery assistance.",
    alternates: { canonical: `${SITE_URL}/categories/identity-protection` },
  }
}

const partners = [
  {
    name: "Aura",
    slug: "aura",
    rating: 4.9,
    price: "$12/mo",
    bestFor: "All-in-one identity & digital security",
    description: "Comprehensive platform combining identity monitoring, credit alerts, VPN, antivirus, password manager, and $5M insurance in one subscription. AI-powered fraud detection across financial accounts.",
  },
  {
    name: "LifeLock",
    slug: "lifelock",
    rating: 4.7,
    price: "$11.99/mo",
    bestFor: "Norton-backed identity restoration",
    description: "Backed by Norton, LifeLock monitors your SSN, credit, and financial accounts. Up to $3M insurance for lawyers, stolen funds, and personal expenses. US-based restoration specialists.",
  },
  {
    name: "IdentityForce",
    slug: "identityforce",
    rating: 4.6,
    price: "$17.99/mo",
    bestFor: "Government-grade monitoring",
    description: "TransUnion-owned service used by federal agencies. SmartID monitoring across credit bureaus, court records, dark web, and social media. $1M insurance with concierge restoration.",
  },
  {
    name: "IDShield",
    slug: "idshield",
    rating: 4.5,
    price: "$14.95/mo",
    bestFor: "Licensed private investigators",
    description: "Only identity protection service with licensed private investigators who manage your case from detection to resolution. Credit monitoring, social media scanning, and $3M insurance.",
  },
  {
    name: "Experian IdentityWorks",
    slug: "experian-identityworks",
    rating: 4.5,
    price: "$9.99/mo",
    bestFor: "Direct bureau monitoring",
    description: "Direct-from-source credit monitoring by Experian. FICO score tracking, dark web surveillance, address change monitoring, and up to $1M in identity theft insurance.",
  },
  {
    name: "Zander",
    slug: "zander",
    rating: 4.3,
    price: "$6.75/mo",
    bestFor: "Affordable family plans",
    description: "Dave Ramsey-recommended identity theft protection at a budget price. Covers adults and children with dark web monitoring, financial account alerts, and $1M insurance.",
  },
  {
    name: "ReliaShield",
    slug: "reliashield",
    rating: 4.2,
    price: "$7.99/mo",
    bestFor: "Court records monitoring",
    description: "Monitors court records, sex offender registries, and change-of-address filings. Tri-bureau credit monitoring, dark web scanning, and US-based restoration team.",
  },
  {
    name: "IDX",
    slug: "idx",
    rating: 4.2,
    price: "$9.95/mo",
    bestFor: "Data breach response",
    description: "Trusted by major companies for post-breach identity protection. CyberScan technology monitors dark web forums in real time. ForgetMe privacy tool removes data from broker sites.",
  },
  {
    name: "Spokeo",
    slug: "spokeo",
    rating: 4.0,
    price: "$19.95/mo",
    bestFor: "People search & data broker removal",
    description: "Searches 12 billion records across social media, court records, and public databases. Identify who has your data and where it appears online. Useful for monitoring your digital footprint.",
  },
  {
    name: "BeenVerified",
    slug: "beenverified",
    rating: 3.9,
    price: "$17.48/mo",
    bestFor: "Background check & monitoring",
    description: "Comprehensive people search with identity monitoring alerts. Phone lookup, email search, property records, and dark web monitoring. Monitor up to 10 data points continuously.",
  },
]

const top5 = partners.slice(0, 5).map((p) => ({
  name: p.name,
  rating: p.rating,
  priceFrom: p.price,
  bestFor: p.bestFor,
  affiliateSlug: p.slug,
  affiliateLabel: `Visit ${p.name}`,
  recommended: p.slug === "aura",
  badge: p.slug === "aura" ? "Editor's Choice" : undefined,
  features: {
    creditMonitor: true,
    ssnAlert: true,
    insurance: p.slug === "aura" ? "$5M" : p.slug === "lifelock" ? "$3M" : p.slug === "identityforce" ? "$1M" : p.slug === "idshield" ? "$3M" : "$1M",
    darkWeb: true,
    familyPlan: p.slug !== "experian-identityworks",
  },
}))

const featureLabels: Record<string, string> = {
  creditMonitor: "Credit Monitoring",
  ssnAlert: "SSN Alerts",
  insurance: "Insurance Coverage",
  darkWeb: "Dark Web Scanning",
  familyPlan: "Family Plan Available",
}

const itemListSchema = buildItemListSchema(
  partners.map((p) => ({ name: p.name, url: `${SITE_URL}/go/${p.slug}` })),
  "Best Identity Protection Services 2026"
)

export default function IdentityProtectionCategoryPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#080C10]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />

        {/* Hero */}
        <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <Link href="/categories" className="inline-flex items-center gap-1.5 text-xs text-[#00FF88] font-mono uppercase tracking-wider mb-6 hover:underline">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 2L4 6l4 4" /></svg>
              All Categories
            </Link>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#F0FDF4] mb-4 leading-tight">
              Best <span className="text-[#00FF88]">Identity Protection</span> Services of 2026
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Identity theft affected 15 million Americans last year. We evaluated 20+ services on monitoring coverage, alert speed, insurance value, and restoration support to find the 10 best.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <AffiliateDisclosureBanner />
        </section>

        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ComparisonTable items={top5} featureLabels={featureLabels} title="Top 5 Identity Protection Comparison" />
        </section>

        {/* Partner Cards Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#F0FDF4] mb-8">All 10 Identity Protection Services Ranked</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((p, i) => (
              <div key={p.slug} className="relative p-6 rounded-2xl bg-[#0D1117] border border-[#00FF8820] hover:border-[#00FF8860] transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs text-[#00FF88] font-mono">#{i + 1}</span>
                    <h3 className="text-lg font-bold text-[#F0FDF4]">{p.name}</h3>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#00FF88]">{p.rating}/5</div>
                    <div className="text-xs text-[#94A3B8]">from {p.price}</div>
                  </div>
                </div>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-2">{p.description}</p>
                <p className="text-xs text-[#A855F7] font-medium mb-4">Best for: {p.bestFor}</p>
                <Link
                  href={`/go/${p.slug}`}
                  rel="nofollow sponsored"
                  target="_blank"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#00FF88] text-black hover:bg-[#00E87A] transition-colors"
                >
                  Visit {p.name}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 5h6M5 2l3 3-3 3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Long-form content */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4">What Is Identity Protection and Who Needs It?</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Identity protection services monitor your personal information — Social Security number, credit reports, bank accounts, and online presence — for signs of unauthorized use. When suspicious activity is detected, you receive an alert so you can take action before financial damage occurs. Most services also include insurance coverage to reimburse costs associated with identity theft recovery, including legal fees, lost wages, and stolen funds.
            </p>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Everyone with a Social Security number is at risk. Data breaches have exposed billions of records, and your personal information is likely already available on the dark web. Identity protection does not prevent breaches, but it dramatically reduces the time between a breach and your awareness of it — the critical window during which thieves open fraudulent accounts, file fake tax returns, or drain bank accounts.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">How We Evaluate Identity Protection Services</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              We assess four key areas: monitoring breadth, alert speed, insurance value, and restoration support. Monitoring breadth measures how many data points the service tracks — SSN usage, credit bureau changes, court records, dark web exposure, address changes, bank and investment account activity, and social media. The best services like Aura and IdentityForce monitor across all three credit bureaus simultaneously, while budget options may only cover one.
            </p>

            <h3 className="text-xl font-bold text-[#F0FDF4] mb-3 mt-8">Credit Monitoring: One Bureau vs. Three</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Tri-bureau monitoring (Experian, Equifax, TransUnion) is significantly more protective than single-bureau monitoring. Creditors report to different bureaus, so a fraudulent account opened with a creditor that reports to TransUnion would be invisible to a service that only monitors Experian. Premium plans from Aura, LifeLock, and IdentityForce include tri-bureau monitoring, while entry-level plans typically cover only one bureau.
            </p>

            <h3 className="text-xl font-bold text-[#F0FDF4] mb-3 mt-8">Insurance Coverage: What It Actually Covers</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Identity theft insurance varies significantly between providers. Aura&apos;s $5 million policy covers stolen funds, legal fees, and lost wages — the most comprehensive in the industry. LifeLock and IDShield offer $3 million in coverage. Read the fine print: some policies only cover out-of-pocket expenses for the restoration process, while others reimburse directly stolen funds. The best policies cover both, plus travel expenses if you need to appear in court or visit agencies in person.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">Identity Protection for Families</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Children are increasingly targeted for identity theft because their clean credit history goes unmonitored for years. Family plans from Aura, LifeLock, and Zander include child SSN monitoring that alerts you if your child&apos;s Social Security number appears in a credit application, utility signup, or government filing. Zander offers the most affordable family coverage, while Aura provides the most features per family member including VPN and antivirus for each device.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">Frequently Asked Questions</h2>
            <h3 className="text-lg font-bold text-[#F0FDF4] mb-2 mt-6">Can I freeze my credit instead?</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Credit freezes are free and effective at preventing new account fraud. However, they do not protect against tax fraud, medical identity theft, employment fraud, or account takeover. Identity protection services monitor a much wider range of threats. We recommend using credit freezes alongside an identity monitoring service for the strongest protection.
            </p>
            <h3 className="text-lg font-bold text-[#F0FDF4] mb-2 mt-6">How fast are identity theft alerts?</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              The best services deliver alerts within minutes of detecting suspicious activity. Aura and LifeLock send near-real-time alerts for financial transactions and credit inquiries. Dark web monitoring alerts typically arrive within 24 hours of detection. Speed matters — the FTC reports that victims who respond within 24 hours of notification experience 80% less financial damage.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
