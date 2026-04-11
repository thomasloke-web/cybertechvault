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
    title: "Best VPN Services 2026 — Expert Tested & Ranked | CyberTechVault",
    description:
      "Compare the 10 best VPN services of 2026. Independent speed tests, privacy audits, and real-world performance. NordVPN, ExpressVPN, Surfshark, and more.",
    alternates: { canonical: `${SITE_URL}/categories/vpn` },
  }
}

const partners = [
  {
    name: "NordVPN",
    slug: "nordvpn",
    rating: 4.9,
    price: "$3.39/mo",
    bestFor: "Overall best VPN",
    description: "Panama-based provider with 6,400+ servers in 111 countries. Double VPN, Threat Protection, and audited no-logs policy. Lightning-fast NordLynx protocol.",
  },
  {
    name: "ExpressVPN",
    slug: "expressvpn",
    rating: 4.8,
    price: "$6.67/mo",
    bestFor: "Speed & streaming",
    description: "Lightway protocol delivers blazing speeds. Trusted servers run on RAM only. Unblocks Netflix, Hulu, BBC iPlayer, and 20+ streaming platforms.",
  },
  {
    name: "Surfshark",
    slug: "surfshark",
    rating: 4.7,
    price: "$2.19/mo",
    bestFor: "Budget & unlimited devices",
    description: "Unlimited simultaneous connections at an unbeatable price. CleanWeb ad blocker, MultiHop, and Camouflage mode for restrictive networks.",
  },
  {
    name: "ProtonVPN",
    slug: "protonvpn",
    rating: 4.7,
    price: "$4.49/mo",
    bestFor: "Privacy purists",
    description: "Swiss-based, open-source VPN from the makers of ProtonMail. Secure Core servers route traffic through privacy-friendly countries. Free tier available.",
  },
  {
    name: "CyberGhost",
    slug: "cyberghost",
    rating: 4.5,
    price: "$2.19/mo",
    bestFor: "Streaming & torrenting",
    description: "9,500+ servers optimized for streaming and P2P. Dedicated IP options, NoSpy servers in Romania, and 45-day money-back guarantee.",
  },
  {
    name: "Mullvad",
    slug: "mullvad",
    rating: 4.5,
    price: "\u20AC5/mo",
    bestFor: "Maximum anonymity",
    description: "No email required. Pay with cash or crypto. Open-source apps, WireGuard support, and a flat monthly fee with no long-term commitments.",
  },
  {
    name: "IPVanish",
    slug: "ipvanish",
    rating: 4.3,
    price: "$2.49/mo",
    bestFor: "Kodi & Fire TV",
    description: "Company-owned servers for full control over infrastructure. SOCKS5 proxy included, unlimited connections, and a built-in kill switch on all platforms.",
  },
  {
    name: "Private Internet Access",
    slug: "pia",
    rating: 4.3,
    price: "$2.03/mo",
    bestFor: "Open-source transparency",
    description: "Fully open-source VPN apps with proven no-logs policy tested in court. 35,000+ servers across 91 countries and advanced split-tunneling.",
  },
  {
    name: "Atlas VPN",
    slug: "atlasvpn",
    rating: 4.1,
    price: "$1.64/mo",
    bestFor: "Affordable entry-level VPN",
    description: "Nord Security subsidiary with SafeSwap servers, data breach monitoring, and tracker blocker. Excellent value for new VPN users on a budget.",
  },
  {
    name: "Windscribe",
    slug: "windscribe",
    rating: 4.1,
    price: "$5.75/mo",
    bestFor: "Flexible build-a-plan",
    description: "Custom pricing: pay only for the server locations you need. R.O.B.E.R.T. DNS-level blocker, browser extensions, and a generous free tier.",
  },
]

const top5 = partners.slice(0, 5).map((p) => ({
  name: p.name,
  rating: p.rating,
  priceFrom: p.price,
  bestFor: p.bestFor,
  affiliateSlug: p.slug,
  affiliateLabel: `Visit ${p.name}`,
  recommended: p.slug === "nordvpn",
  badge: p.slug === "nordvpn" ? "Editor's Choice" : undefined,
  features: {
    killSwitch: true,
    splitTunnel: p.slug !== "mullvad",
    noLogs: true,
    wireguard: true,
    servers: p.slug === "nordvpn" ? "6,400+" : p.slug === "expressvpn" ? "3,000+" : p.slug === "surfshark" ? "3,200+" : p.slug === "protonvpn" ? "4,500+" : "9,500+",
  },
}))

const featureLabels: Record<string, string> = {
  killSwitch: "Kill Switch",
  splitTunnel: "Split Tunneling",
  noLogs: "No-Logs Audited",
  wireguard: "WireGuard Support",
  servers: "Server Count",
}

const itemListSchema = buildItemListSchema(
  partners.map((p) => ({ name: p.name, url: `${SITE_URL}/go/${p.slug}` })),
  "Best VPN Services 2026"
)

export default function VpnCategoryPage() {
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
              Best <span className="text-[#00FF88]">VPN</span> Services of 2026
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              We tested 40+ VPN providers on speed, privacy, streaming, and security. These 10 earned our recommendation after months of real-world testing across 15 countries.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <AffiliateDisclosureBanner />
        </section>

        {/* Comparison Table */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ComparisonTable items={top5} featureLabels={featureLabels} title="Top 5 VPN Comparison" />
        </section>

        {/* Partner Cards Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#F0FDF4] mb-8">All 10 VPN Services Ranked</h2>
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
            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4">What Is a VPN and Why Do You Need One?</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              A Virtual Private Network (VPN) encrypts your internet connection and routes it through a secure server in a location you choose. This prevents your ISP, hackers on public Wi-Fi, and surveillance agencies from seeing what you do online. In 2026, VPNs are no longer optional — they are a foundational layer of personal cybersecurity.
            </p>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Every time you connect to coffee shop Wi-Fi, use hotel internet, or browse from a country with internet censorship, your data travels through infrastructure controlled by third parties. Without a VPN, those parties can intercept, log, and even modify your traffic. A VPN creates an encrypted tunnel that makes your data unreadable to anyone between you and the VPN server.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">How We Test VPN Services</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Our testing methodology spans four core areas: speed performance, privacy and security, streaming and geo-unblocking, and user experience. We run speed tests from 15 server locations using Ookla Speedtest CLI and measure latency, download, and upload with and without the VPN active. We test each provider over a minimum of two weeks to account for network fluctuations.
            </p>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              For privacy, we verify no-logs claims by reviewing third-party audit reports, checking jurisdiction, and testing for DNS leaks, WebRTC leaks, and IPv6 leaks using our own tools plus independent testing services. We examine each provider&apos;s transparency reports and past incident handling. Any VPN that has been caught logging user data is immediately disqualified.
            </p>

            <h3 className="text-xl font-bold text-[#F0FDF4] mb-3 mt-8">Speed &amp; Protocol Performance</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Modern VPN protocols like WireGuard and NordLynx have dramatically closed the speed gap between VPN and direct connections. In our 2026 tests, the best providers deliver 85-95% of your base speed on nearby servers. NordVPN and ExpressVPN consistently lead speed benchmarks, while Surfshark and CyberGhost provide excellent speeds at lower price points. We test both TCP and UDP connections, measure time-to-connect, and evaluate performance under sustained load to simulate real-world streaming and downloading scenarios.
            </p>

            <h3 className="text-xl font-bold text-[#F0FDF4] mb-3 mt-8">Privacy &amp; Security Architecture</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              The best VPNs in 2026 operate under strict no-logs policies that have been independently audited by firms like Deloitte, PricewaterhouseCoopers, or Cure53. We prioritize providers based in privacy-friendly jurisdictions outside the 14 Eyes alliance — Panama (NordVPN), the British Virgin Islands (ExpressVPN), the Netherlands (Surfshark), and Switzerland (ProtonVPN). RAM-only server infrastructure, which wipes all data on reboot, is now the gold standard. We also evaluate the strength of each provider&apos;s kill switch, the availability of multi-hop (double VPN) connections, and support for obfuscated protocols that bypass deep packet inspection.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">Streaming, Torrenting &amp; Geo-Unblocking</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              One of the most popular use cases for VPNs is accessing geo-restricted content. We test each provider against Netflix (US, UK, Japan), Disney+, Hulu, BBC iPlayer, Amazon Prime Video, and HBO Max. ExpressVPN and NordVPN consistently unblock the widest range of platforms, while CyberGhost offers dedicated streaming-optimized servers that make setup effortless. For torrenting, we verify that providers allow P2P traffic, offer SOCKS5 proxy support, and maintain port-forwarding capabilities where applicable.
            </p>

            <h3 className="text-xl font-bold text-[#F0FDF4] mb-3 mt-8">Choosing the Right VPN for Your Needs</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Your ideal VPN depends on your primary use case. If speed and streaming are your priority, ExpressVPN and NordVPN lead the pack. Budget-conscious users should look at Surfshark or Private Internet Access, both of which offer excellent value without sacrificing security. Privacy maximalists will appreciate ProtonVPN&apos;s open-source approach and Mullvad&apos;s anonymous sign-up process. For families or users with many devices, Surfshark&apos;s unlimited simultaneous connections make it the clear winner.
            </p>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Consider factors beyond price: Does the provider offer a kill switch on all platforms? Can you use split tunneling to route only certain apps through the VPN? Is there a free trial or money-back guarantee? These features can make the difference between a VPN that you actually use daily and one that sits forgotten on your device. All providers on our list offer at least a 30-day money-back guarantee, so you can test risk-free before committing.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">Frequently Asked Questions</h2>
            <h3 className="text-lg font-bold text-[#F0FDF4] mb-2 mt-6">Is using a VPN legal?</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Yes, VPNs are legal in most countries including the US, UK, Canada, and the EU. A small number of countries restrict or regulate VPN use, including China, Russia, and the UAE. Always check local laws before using a VPN while traveling.
            </p>
            <h3 className="text-lg font-bold text-[#F0FDF4] mb-2 mt-6">Will a VPN slow down my internet?</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Modern VPN protocols like WireGuard introduce minimal overhead. Expect 5-15% speed reduction on nearby servers. Connecting to distant servers will naturally increase latency, but the top providers on our list are optimized to minimize this impact. Some users actually see faster speeds when a VPN prevents ISP throttling.
            </p>
            <h3 className="text-lg font-bold text-[#F0FDF4] mb-2 mt-6">Can I use a free VPN instead?</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Free VPNs often come with severe limitations: data caps, slow speeds, and in some cases, they monetize your data through advertising or sell browsing logs to third parties. ProtonVPN and Windscribe offer reputable free tiers with no ads, but for full protection and speeds, a paid plan starting around $2-3 per month is the best investment in your digital security.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
