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
    title: "Best Password Managers 2026 — Expert Tested & Ranked | CyberTechVault",
    description:
      "Compare the 10 best password managers of 2026. We tested security, usability, cross-platform sync, and pricing. 1Password, Bitwarden, Dashlane, and more.",
    alternates: { canonical: `${SITE_URL}/categories/password-managers` },
  }
}

const partners = [
  {
    name: "1Password",
    slug: "1password",
    rating: 4.9,
    price: "$2.99/mo",
    bestFor: "Overall best password manager",
    description: "Industry-leading security architecture with Watchtower breach monitoring, travel mode, and seamless family sharing. Supports passkeys and integrates with every major browser and OS.",
  },
  {
    name: "Bitwarden",
    slug: "bitwarden",
    rating: 4.8,
    price: "Free / $1/mo",
    bestFor: "Best free & open-source option",
    description: "Fully open-source with independent security audits. Self-hosting available. The free tier is the most generous in the industry with unlimited passwords and devices.",
  },
  {
    name: "Dashlane",
    slug: "dashlane",
    rating: 4.7,
    price: "$4.99/mo",
    bestFor: "Built-in VPN & dark web monitoring",
    description: "Premium plan includes a VPN, dark web monitoring, and phishing alerts. Patented zero-knowledge architecture and automatic password changer for supported sites.",
  },
  {
    name: "LastPass",
    slug: "lastpass",
    rating: 4.2,
    price: "$3.00/mo",
    bestFor: "Easy migration & enterprise",
    description: "One of the most widely adopted password managers with strong enterprise features. FIDO2-compliant passwordless login and advanced MFA options for business users.",
  },
  {
    name: "Keeper",
    slug: "keeper",
    rating: 4.6,
    price: "$2.92/mo",
    bestFor: "Enterprise & compliance",
    description: "SOC 2, ISO 27001, and FedRAMP authorized. BreachWatch dark web scanner, encrypted file storage, and role-based access controls for teams and families.",
  },
  {
    name: "NordPass",
    slug: "nordpass",
    rating: 4.4,
    price: "$1.49/mo",
    bestFor: "Simplicity & NordVPN ecosystem",
    description: "Built by the NordVPN team using XChaCha20 encryption. Clean interface, passkey support, email masking, and data breach scanner included in premium.",
  },
  {
    name: "RoboForm",
    slug: "roboform",
    rating: 4.3,
    price: "$1.99/mo",
    bestFor: "Form filling & bookmarks",
    description: "Veteran password manager with best-in-class form-filling capabilities. Supports complex multi-page forms, secure bookmark management, and application password capture.",
  },
  {
    name: "Enpass",
    slug: "enpass",
    rating: 4.2,
    price: "$1.99/mo",
    bestFor: "Local-first storage",
    description: "Offline-first approach stores data locally or in your own cloud (iCloud, Dropbox, OneDrive). One-time purchase option available alongside subscription model.",
  },
  {
    name: "Sticky Password",
    slug: "sticky-password",
    rating: 4.0,
    price: "$2.50/mo",
    bestFor: "Wi-Fi sync without cloud",
    description: "Unique local Wi-Fi sync feature keeps passwords off third-party servers entirely. USB portable version available. Lifetime license option for one-time payment.",
  },
  {
    name: "LogMeOnce",
    slug: "logmeonce",
    rating: 3.9,
    price: "Free / $2.50/mo",
    bestFor: "Passwordless login options",
    description: "Photo Login, fingerprint, and PIN-based access without a master password. Anti-theft dashboard, encrypted file storage, and credit card monitoring in premium tiers.",
  },
]

const top5 = partners.slice(0, 5).map((p) => ({
  name: p.name,
  rating: p.rating,
  priceFrom: p.price,
  bestFor: p.bestFor,
  affiliateSlug: p.slug,
  affiliateLabel: `Visit ${p.name}`,
  recommended: p.slug === "1password",
  badge: p.slug === "1password" ? "Editor's Choice" : undefined,
  features: {
    zeroKnowledge: true,
    passkeys: p.slug !== "lastpass",
    freeTier: p.slug === "bitwarden" || p.slug === "lastpass",
    browserExt: true,
    darkWebMonitor: p.slug === "dashlane" || p.slug === "keeper" || p.slug === "1password",
  },
}))

const featureLabels: Record<string, string> = {
  zeroKnowledge: "Zero-Knowledge Encryption",
  passkeys: "Passkey Support",
  freeTier: "Free Tier Available",
  browserExt: "Browser Extension",
  darkWebMonitor: "Dark Web Monitoring",
}

const itemListSchema = buildItemListSchema(
  partners.map((p) => ({ name: p.name, url: `${SITE_URL}/go/${p.slug}` })),
  "Best Password Managers 2026"
)

export default function PasswordManagersCategoryPage() {
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
              Best <span className="text-[#00FF88]">Password Managers</span> of 2026
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              We tested 30+ password managers across security, usability, cross-platform support, and value. These 10 are the ones we trust with our own credentials.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <AffiliateDisclosureBanner />
        </section>

        {/* Comparison Table */}
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ComparisonTable items={top5} featureLabels={featureLabels} title="Top 5 Password Manager Comparison" />
        </section>

        {/* Partner Cards Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#F0FDF4] mb-8">All 10 Password Managers Ranked</h2>
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
            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4">Why You Need a Password Manager in 2026</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              The average person manages over 100 online accounts. Reusing passwords — even variations of the same password — is the single biggest security risk most people take. When one service is breached, attackers use credential stuffing to try that same email and password combination across hundreds of other sites within minutes. A password manager eliminates this risk by generating and storing unique, complex passwords for every account.
            </p>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Modern password managers do far more than store passwords. They autofill credentials, generate strong passwords on demand, alert you to breaches, store secure notes and credit card information, and support passkeys — the passwordless authentication standard that is rapidly replacing traditional passwords. The best managers sync across every device and integrate directly into your browser and mobile apps.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">How We Evaluate Password Managers</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Security is our top priority. Every password manager on our list uses zero-knowledge encryption, meaning even the provider cannot access your vault. We verify encryption standards (AES-256 or XChaCha20), check for independent security audits, review incident history, and test for vulnerabilities using standard penetration testing tools. We also evaluate two-factor authentication support, biometric unlock options, and emergency access features.
            </p>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Usability matters just as much. A password manager you find annoying is one you will stop using. We test auto-fill accuracy across 50 popular websites, measure sync speed between devices, evaluate the onboarding experience for non-technical users, and test import capabilities from other managers and browsers. Cross-platform support across Windows, macOS, Linux, iOS, Android, and browser extensions is essential.
            </p>

            <h3 className="text-xl font-bold text-[#F0FDF4] mb-3 mt-8">Zero-Knowledge Architecture Explained</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Zero-knowledge encryption means your master password never leaves your device. Instead, a cryptographic key is derived locally using PBKDF2, Argon2, or scrypt, and only the encrypted vault is transmitted to the provider&apos;s servers. This means that even if the provider is breached, your passwords remain encrypted and unreadable. 1Password takes this further with its Secret Key system, which combines your master password with a device-specific key for an additional layer of protection.
            </p>

            <h3 className="text-xl font-bold text-[#F0FDF4] mb-3 mt-8">Passkeys: The Future of Authentication</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Passkeys use public-key cryptography to authenticate you without a password. Instead of typing a password, your device creates a unique key pair — one stored on your device (private) and one shared with the website (public). Your password manager securely stores and syncs these passkeys across your devices. 1Password, Bitwarden, and Dashlane are leading passkey adoption, making it effortless to use this more secure authentication method across hundreds of supported websites.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">Free vs. Paid Password Managers</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Bitwarden offers the most generous free tier in the industry: unlimited passwords, unlimited devices, and core features that rival paid competitors. For most individuals, Bitwarden Free is an excellent starting point. However, paid plans unlock premium features like advanced 2FA (hardware key support), encrypted file attachments, emergency access, and priority support. Family plans from 1Password and Bitwarden make it easy to manage security for your entire household for just a few dollars per month.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">Frequently Asked Questions</h2>
            <h3 className="text-lg font-bold text-[#F0FDF4] mb-2 mt-6">What if my password manager gets hacked?</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              With zero-knowledge encryption, your vault remains secure even if the provider is breached. The encrypted data is useless without your master password. This is why choosing a strong, unique master password is critical — it is the one password you must remember and make uncrackable.
            </p>
            <h3 className="text-lg font-bold text-[#F0FDF4] mb-2 mt-6">Should I use my browser&apos;s built-in password manager?</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Browser password managers have improved significantly, but they lack cross-browser support, advanced features like dark web monitoring, and the robust encryption of dedicated managers. If you use multiple browsers or devices, a standalone password manager provides a far better experience and stronger security.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
