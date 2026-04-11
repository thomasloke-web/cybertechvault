import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const SITE_URL = "https://cybertechvault.com"

export function generateMetadata(): Metadata {
  return {
    title: "Protect Yourself — CyberTechVault",
    description:
      "Browse all cybersecurity categories: VPN, password managers, antivirus, identity protection, dark web monitoring, and two-factor authentication. Expert-tested tools to keep you safe online.",
    alternates: { canonical: `${SITE_URL}/categories` },
  }
}

const categories = [
  {
    name: "VPN",
    slug: "vpn",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#00FF88]">
        <path d="M16 4L4 10v8c0 7.2 5.12 13.92 12 16 6.88-2.08 12-8.8 12-16v-8L16 4z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 16l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description:
      "Encrypt your traffic, mask your IP address, and browse the internet with complete anonymity. Our top-rated VPN services keep your data private on any network.",
  },
  {
    name: "Password Managers",
    slug: "password-managers",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#00FF88]">
        <rect x="6" y="14" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 14V10a6 6 0 1112 0v4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="21" r="2" fill="currentColor" />
      </svg>
    ),
    description:
      "Generate, store, and autofill strong unique passwords across every device. Never reuse a password again with the best password managers of 2026.",
  },
  {
    name: "Antivirus & EDR",
    slug: "antivirus",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#00FF88]">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 16l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description:
      "Real-time protection against malware, ransomware, spyware, and zero-day threats. Modern endpoint detection and response (EDR) built for every device.",
  },
  {
    name: "Identity Protection",
    slug: "identity-protection",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#00FF88]">
        <circle cx="16" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 27c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    description:
      "Monitor your personal information across credit bureaus, public records, and data broker sites. Get alerts the moment your identity is at risk.",
  },
  {
    name: "Dark Web Monitoring",
    slug: "dark-web-monitoring",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#00FF88]">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
        <ellipse cx="16" cy="16" rx="6" ry="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 16h24" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 10h20M6 22h20" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
    description:
      "Scan hidden forums, marketplaces, and paste sites for your leaked credentials, SSN, and financial data. Know if your data is for sale.",
  },
  {
    name: "Two-Factor Authentication",
    slug: "two-factor-authentication",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#00FF88]">
        <rect x="8" y="6" width="16" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="20" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 20l1.5 1.5L18 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 6V4a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    description:
      "Add a second layer of security to every account. TOTP apps, hardware keys, and push-based authenticators that stop unauthorized access cold.",
  },
]

export default function CategoriesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#080C10]">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00FF8810] border border-[#00FF8830] mb-6">
            <div className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
            <span className="text-xs text-[#00FF88] font-mono uppercase tracking-wider">6 Defense Layers</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F0FDF4] mb-4 leading-tight">
            Protect <span className="text-[#00FF88]">Yourself</span>
          </h1>
          <p className="max-w-2xl mx-auto text-[#94A3B8] text-lg leading-relaxed">
            From VPNs to dark web scanners, every tool you need to build an unbreakable personal security stack. Independently tested, honestly reviewed.
          </p>
        </section>

        {/* Category Grid */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="group relative p-6 rounded-2xl bg-[#0D1117] border border-[#00FF8820] hover:border-[#00FF8860] transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF8810]"
              >
                <div className="mb-4 w-14 h-14 flex items-center justify-center rounded-xl bg-[#00FF8810] group-hover:bg-[#00FF8820] transition-colors">
                  {cat.icon}
                </div>
                <h2 className="text-xl font-bold text-[#F0FDF4] mb-2 group-hover:text-[#00FF88] transition-colors">
                  {cat.name}
                </h2>
                <p className="text-sm text-[#94A3B8] leading-relaxed mb-4">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs text-[#00FF88] font-mono uppercase tracking-wider group-hover:gap-2.5 transition-all">
                  Explore Tools
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 6h6M6 3l3 3-3 3" />
                  </svg>
                </span>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00FF8808] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <div className="p-8 rounded-2xl bg-[#0D1117] border border-[#00FF8820]">
            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-3">Not sure where to start?</h2>
            <p className="text-[#94A3B8] mb-6">
              Take our free security quiz and get a personalized recommendation for your threat level.
            </p>
            <Link
              href="/tools/security-quiz"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00FF88] text-black font-bold rounded-full hover:bg-[#00E87A] transition-colors text-sm"
            >
              Take the Security Quiz
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 7h8M7 3l4 4-4 4" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
