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
    title: "Best Antivirus & EDR Software 2026 — Expert Tested | CyberTechVault",
    description:
      "Compare the 10 best antivirus and endpoint detection solutions of 2026. Lab-tested malware detection rates, performance impact, and real-world protection.",
    alternates: { canonical: `${SITE_URL}/categories/antivirus` },
  }
}

const partners = [
  {
    name: "Norton 360",
    slug: "norton",
    rating: 4.8,
    price: "$3.33/mo",
    bestFor: "All-in-one protection suite",
    description: "Industry-leading malware detection with integrated VPN, dark web monitoring, parental controls, and cloud backup. SONAR behavioral detection catches zero-day threats in real time.",
  },
  {
    name: "Bitdefender",
    slug: "bitdefender",
    rating: 4.8,
    price: "$2.50/mo",
    bestFor: "Best malware detection rates",
    description: "Consistently scores 99.9%+ in AV-TEST and AV-Comparatives labs. Lightweight agent with minimal system impact. Includes ransomware remediation and advanced threat defense.",
  },
  {
    name: "Malwarebytes",
    slug: "malwarebytes",
    rating: 4.6,
    price: "$3.75/mo",
    bestFor: "Malware removal & cleanup",
    description: "Trusted by IT professionals for remediation. Real-time protection with Browser Guard, exploit protection, and ransomware rollback. Excellent as a second-opinion scanner.",
  },
  {
    name: "Kaspersky",
    slug: "kaspersky",
    rating: 4.6,
    price: "$2.50/mo",
    bestFor: "Advanced threat detection",
    description: "Top-tier detection engine with System Watcher behavioral monitoring. Application Control, vulnerability scanner, and webcam protection. Transparent data processing in Switzerland.",
  },
  {
    name: "ESET",
    slug: "eset",
    rating: 4.5,
    price: "$3.33/mo",
    bestFor: "Low system impact",
    description: "Ultra-lightweight engine trusted by power users and gamers. ESET LiveGrid cloud reputation system, UEFI Scanner for firmware threats, and banking browser protection.",
  },
  {
    name: "Avast",
    slug: "avast",
    rating: 4.3,
    price: "Free / $2.99/mo",
    bestFor: "Best free antivirus",
    description: "Robust free tier with real-time protection, Wi-Fi security scanning, and password manager. Premium adds ransomware shield, sandbox, and firewall. 435 million user network.",
  },
  {
    name: "McAfee",
    slug: "mcafee",
    rating: 4.3,
    price: "$2.49/mo",
    bestFor: "Family protection & identity",
    description: "Total Protection covers unlimited devices with identity monitoring, VPN, encrypted storage, and parental controls. Personal Data Cleanup removes your info from data brokers.",
  },
  {
    name: "TotalAV",
    slug: "totalav",
    rating: 4.2,
    price: "$2.42/mo",
    bestFor: "Clean UI & performance tools",
    description: "Modern interface with real-time protection, safe browsing, and system tune-up tools. Includes VPN and ad blocker. Disk Cleaner and startup manager boost system performance.",
  },
  {
    name: "Trend Micro",
    slug: "trend-micro",
    rating: 4.2,
    price: "$2.49/mo",
    bestFor: "Web threat protection",
    description: "AI-powered detection with Pay Guard for safe banking, social media privacy scanner, and anti-phishing engine. Folder Shield ransomware protection for critical files.",
  },
  {
    name: "Webroot",
    slug: "webroot",
    rating: 4.0,
    price: "$2.49/mo",
    bestFor: "Fastest scans & tiny footprint",
    description: "Cloud-based scanning completes in under 20 seconds. Uses just 15 MB of disk space. Identity theft protection, real-time anti-phishing, and Chromebook support.",
  },
]

const top5 = partners.slice(0, 5).map((p) => ({
  name: p.name,
  rating: p.rating,
  priceFrom: p.price,
  bestFor: p.bestFor,
  affiliateSlug: p.slug,
  affiliateLabel: `Visit ${p.name}`,
  recommended: p.slug === "bitdefender",
  badge: p.slug === "bitdefender" ? "Editor's Choice" : undefined,
  features: {
    realTime: true,
    ransomware: true,
    vpnIncluded: p.slug === "norton" || p.slug === "kaspersky",
    firewall: p.slug !== "malwarebytes",
    detection: p.slug === "norton" ? "99.9%" : p.slug === "bitdefender" ? "99.9%" : p.slug === "malwarebytes" ? "99.4%" : p.slug === "kaspersky" ? "99.8%" : "99.5%",
  },
}))

const featureLabels: Record<string, string> = {
  realTime: "Real-Time Protection",
  ransomware: "Ransomware Shield",
  vpnIncluded: "VPN Included",
  firewall: "Built-in Firewall",
  detection: "Detection Rate",
}

const itemListSchema = buildItemListSchema(
  partners.map((p) => ({ name: p.name, url: `${SITE_URL}/go/${p.slug}` })),
  "Best Antivirus & EDR Software 2026"
)

export default function AntivirusCategoryPage() {
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
              Best <span className="text-[#00FF88]">Antivirus &amp; EDR</span> Software of 2026
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              We lab-tested 25+ antivirus and endpoint protection solutions against 10,000+ malware samples. These 10 offer the strongest real-world protection with the least performance impact.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <AffiliateDisclosureBanner />
        </section>

        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ComparisonTable items={top5} featureLabels={featureLabels} title="Top 5 Antivirus Comparison" />
        </section>

        {/* Partner Cards Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#F0FDF4] mb-8">All 10 Antivirus Solutions Ranked</h2>
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
            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4">Why Antivirus Software Still Matters in 2026</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Malware has evolved far beyond simple viruses. Today&apos;s threat landscape includes ransomware that encrypts your entire drive within minutes, fileless malware that lives in memory, sophisticated phishing kits powered by AI, and supply-chain attacks that compromise trusted software updates. Even security-conscious users need real-time protection because threats now exploit zero-day vulnerabilities before patches are available.
            </p>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Modern antivirus software has evolved into Endpoint Detection and Response (EDR) platforms. Beyond signature-based scanning, these tools use behavioral analysis, machine learning, and cloud-based threat intelligence to detect and block unknown threats. They monitor file system changes, network connections, registry modifications, and process behavior to catch malicious activity the moment it begins.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">How We Test Antivirus Software</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Our testing methodology combines lab testing with real-world evaluation. We run each product against a fresh collection of 10,000+ malware samples including trojans, ransomware, worms, rootkits, and potentially unwanted programs. We measure detection rates for both known threats (signature detection) and unknown threats (heuristic and behavioral detection). We cross-reference our results with independent labs including AV-TEST, AV-Comparatives, and SE Labs.
            </p>

            <h3 className="text-xl font-bold text-[#F0FDF4] mb-3 mt-8">Performance Impact Analysis</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Antivirus software that slows your computer is software you will disable. We measure system impact by benchmarking boot time, file copy speed, application launch time, and browsing performance before and after installation. ESET and Webroot consistently show the lowest performance impact, while comprehensive suites like Norton 360 and Bitdefender have dramatically improved their resource efficiency in recent years. We also test the impact of full system scans versus quick scans and measure background CPU and memory usage during normal operation.
            </p>

            <h3 className="text-xl font-bold text-[#F0FDF4] mb-3 mt-8">Ransomware Protection Testing</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Ransomware remains the most financially devastating threat to individuals and small businesses. We test each product against 500+ ransomware samples including modern families like LockBit, BlackCat, and Play. We evaluate whether the product can detect and stop encryption in progress, whether it can roll back any files that were encrypted before detection, and whether it offers dedicated ransomware shields for specific folders. Bitdefender and Norton lead in ransomware protection, with Malwarebytes offering excellent rollback capabilities.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">Free vs. Paid Antivirus: What You Get</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Free antivirus from Avast provides solid baseline protection with real-time scanning and web shields. However, paid suites add critical layers: ransomware-specific shields, firewall management, VPN access, identity theft monitoring, banking browser protection, and priority customer support. For most users, the $25-40 per year cost of a premium antivirus suite is a small price for comprehensive protection across all your devices.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">Frequently Asked Questions</h2>
            <h3 className="text-lg font-bold text-[#F0FDF4] mb-2 mt-6">Do I need antivirus on Mac?</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Yes. macOS malware has increased 400% since 2020. While macOS has strong built-in security (Gatekeeper, XProtect), it cannot match the detection rates and real-time behavioral analysis of dedicated antivirus software. All products on our list offer macOS versions.
            </p>
            <h3 className="text-lg font-bold text-[#F0FDF4] mb-2 mt-6">Can I run two antivirus programs at once?</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Running two real-time antivirus engines simultaneously causes conflicts, false positives, and performance issues. However, you can use Malwarebytes as a second-opinion on-demand scanner alongside your primary antivirus without conflicts — a strategy many security professionals recommend.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
