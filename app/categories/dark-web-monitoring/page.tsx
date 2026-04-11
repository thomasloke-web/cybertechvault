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
    title: "Best Dark Web Monitoring Services 2026 — Expert Tested | CyberTechVault",
    description:
      "Compare the 10 best dark web monitoring tools of 2026. Find out if your passwords, SSN, or financial data have been leaked. Continuous scanning and instant alerts.",
    alternates: { canonical: `${SITE_URL}/categories/dark-web-monitoring` },
  }
}

const partners = [
  {
    name: "Aura",
    slug: "aura",
    rating: 4.9,
    price: "$12/mo",
    bestFor: "Most comprehensive dark web scanning",
    description: "Monitors dark web forums, marketplaces, paste sites, and data dumps for your email, SSN, bank accounts, and medical IDs. AI-powered analysis with real-time alerts and $5M insurance.",
  },
  {
    name: "Norton Dark Web Monitor",
    slug: "norton",
    rating: 4.7,
    price: "$3.33/mo",
    bestFor: "Bundled with Norton 360 antivirus",
    description: "Scans dark web forums and private marketplaces for your personal data. Included with Norton 360 plans alongside antivirus, VPN, and cloud backup. Powered by LifeLock intelligence.",
  },
  {
    name: "Bitdefender Digital Identity",
    slug: "bitdefender",
    rating: 4.6,
    price: "$2.50/mo",
    bestFor: "Digital footprint visualization",
    description: "Maps your entire digital footprint across surface web and dark web. Shows where your data has been exposed, visualizes connections between breaches, and provides actionable remediation steps.",
  },
  {
    name: "McAfee Dark Web Monitor",
    slug: "mcafee",
    rating: 4.5,
    price: "$2.49/mo",
    bestFor: "Automated data cleanup",
    description: "Monitors up to 60 types of personal data on dark web. Personal Data Cleanup feature automatically requests removal from data broker sites. Included with McAfee Total Protection.",
  },
  {
    name: "LastPass Dark Web Monitor",
    slug: "lastpass",
    rating: 4.3,
    price: "$3.00/mo",
    bestFor: "Password vault integration",
    description: "Continuously monitors dark web databases against all credentials stored in your LastPass vault. Alerts you when specific passwords are found in breaches and guides you through changing them.",
  },
  {
    name: "Experian Dark Web Scan",
    slug: "experian-identityworks",
    rating: 4.4,
    price: "$9.99/mo",
    bestFor: "Credit bureau-powered scanning",
    description: "Direct integration with Experian credit data for comprehensive monitoring. Scans for SSN, bank account numbers, credit card numbers, email addresses, and phone numbers on dark web sites.",
  },
  {
    name: "LifeLock Dark Web Monitoring",
    slug: "lifelock",
    rating: 4.6,
    price: "$11.99/mo",
    bestFor: "Insurance-backed monitoring",
    description: "Scans dark web using one of the largest threat intelligence networks. Up to $3M insurance if your identity is stolen. Norton-powered scanning engine with US-based restoration agents.",
  },
  {
    name: "Keeper BreachWatch",
    slug: "keeper",
    rating: 4.5,
    price: "$2.92/mo",
    bestFor: "Password manager integration",
    description: "Scans dark web databases for credentials matching passwords in your Keeper vault. Zero-knowledge scanning means your passwords are never exposed during the comparison process.",
  },
  {
    name: "Dashlane Dark Web Insights",
    slug: "dashlane",
    rating: 4.4,
    price: "$4.99/mo",
    bestFor: "Actionable breach insights",
    description: "Monitors up to 5 email addresses against dark web databases. Provides detailed breach reports with specific actions to take for each compromised account. Integrated with password changer.",
  },
  {
    name: "HaveIBeenPwned",
    slug: "haveibeenpwned",
    rating: 4.3,
    price: "Free",
    bestFor: "Free breach checking",
    description: "Created by security researcher Troy Hunt, this free service checks if your email or phone appears in known data breaches. Notification service alerts you when new breaches include your data.",
  },
]

const top5 = partners.slice(0, 5).map((p) => ({
  name: p.name,
  rating: p.rating,
  priceFrom: p.price,
  bestFor: p.bestFor,
  affiliateSlug: p.slug,
  affiliateLabel: `Visit ${p.name.split(" ")[0]}`,
  recommended: p.slug === "aura",
  badge: p.slug === "aura" ? "Editor's Choice" : undefined,
  features: {
    realTime: p.slug !== "lastpass",
    ssnMonitor: p.slug === "aura" || p.slug === "norton",
    emailMonitor: true,
    creditCard: p.slug === "aura" || p.slug === "norton" || p.slug === "mcafee",
    alerts: p.slug === "aura" ? "Instant" : p.slug === "norton" ? "Near real-time" : p.slug === "bitdefender" ? "Daily" : p.slug === "mcafee" ? "Daily" : "Weekly",
  },
}))

const featureLabels: Record<string, string> = {
  realTime: "Real-Time Scanning",
  ssnMonitor: "SSN Monitoring",
  emailMonitor: "Email Monitoring",
  creditCard: "Credit Card Monitoring",
  alerts: "Alert Speed",
}

const itemListSchema = buildItemListSchema(
  partners.map((p) => ({ name: p.name, url: `${SITE_URL}/go/${p.slug}` })),
  "Best Dark Web Monitoring Services 2026"
)

export default function DarkWebMonitoringCategoryPage() {
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
              Best <span className="text-[#00FF88]">Dark Web Monitoring</span> Services of 2026
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Over 24 billion credentials are circulating on the dark web. We tested 15+ monitoring tools to find which ones detect leaked data fastest and provide the most actionable alerts.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <AffiliateDisclosureBanner />
        </section>

        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ComparisonTable items={top5} featureLabels={featureLabels} title="Top 5 Dark Web Monitoring Comparison" />
        </section>

        {/* Partner Cards Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#F0FDF4] mb-8">All 10 Dark Web Monitoring Services Ranked</h2>
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
                  Visit {p.name.split(" ")[0]}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 5h6M5 2l3 3-3 3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Long-form content */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4">What Is the Dark Web and Why Should You Monitor It?</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              The dark web is a hidden layer of the internet accessible only through anonymizing tools like Tor. While it has legitimate uses, it is also where stolen data is bought and sold. After a data breach, your email addresses, passwords, Social Security number, credit card numbers, and medical records can appear on dark web marketplaces within hours. Without monitoring, you might not discover the exposure until a fraudulent account appears on your credit report months later.
            </p>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Dark web monitoring services continuously scan these hidden forums, marketplaces, paste sites, and private data dumps for your personal information. When they find a match, they alert you immediately so you can change compromised passwords, freeze credit, and take protective action before criminals can exploit the data.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">How Dark Web Monitoring Works</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              These services use a combination of automated crawlers, human intelligence operatives, and partnerships with law enforcement to access dark web data sources. Automated bots index public and semi-public dark web pages, while trained analysts infiltrate invite-only forums and private Telegram groups where fresh breach data is traded. Your monitored data points (email, SSN, credit cards) are compared against new discoveries using encrypted matching — reputable services never store your sensitive data in plaintext.
            </p>

            <h3 className="text-xl font-bold text-[#F0FDF4] mb-3 mt-8">Types of Data Monitored</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Comprehensive services like Aura monitor 10+ data types: email addresses, passwords, Social Security numbers, bank account numbers, credit and debit card numbers, driver&apos;s license numbers, passport numbers, medical insurance IDs, phone numbers, and physical addresses. Budget options typically focus on email and password monitoring. The more data types a service monitors, the more complete your protection — but the higher the subscription cost.
            </p>

            <h3 className="text-xl font-bold text-[#F0FDF4] mb-3 mt-8">Standalone vs. Bundled Monitoring</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Dark web monitoring is available as a standalone service or bundled with other security products. Norton 360, Bitdefender, McAfee, and Dashlane include it as part of their security suites, making it an excellent value addition if you already use their antivirus or password manager. Standalone services like Aura and LifeLock offer deeper monitoring with more data points and higher insurance coverage but at a premium price.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">What to Do When Your Data Is Found</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Receiving a dark web alert can be alarming, but quick action minimizes damage. First, change the compromised password immediately — and any other account where you reused it. Enable two-factor authentication on the affected account. If financial data is exposed, contact your bank and place a fraud alert or credit freeze with all three credit bureaus. If your SSN is found, consider placing a credit freeze and filing an identity theft report with the FTC at IdentityTheft.gov.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">Frequently Asked Questions</h2>
            <h3 className="text-lg font-bold text-[#F0FDF4] mb-2 mt-6">Can dark web monitoring remove my data?</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              No service can remove data that has been posted to the dark web. Once leaked, data spreads across multiple sites and cannot be recalled. What monitoring does is alert you quickly so you can change credentials and protect your accounts before the data is used against you. Some services like McAfee additionally help remove your data from legitimate data broker sites on the surface web.
            </p>
            <h3 className="text-lg font-bold text-[#F0FDF4] mb-2 mt-6">Is HaveIBeenPwned enough?</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              HaveIBeenPwned is an excellent free starting point created by respected security researcher Troy Hunt. It checks your email against known public breaches and offers free notifications. However, it only covers breaches that have been publicly disclosed and shared with the project. Paid services monitor private forums, sealed court data, and fresh marketplace listings that HIBP does not access. For SSN, financial, and medical data monitoring, a paid service is necessary.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
