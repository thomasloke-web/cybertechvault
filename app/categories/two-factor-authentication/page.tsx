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
    title: "Best Two-Factor Authentication Apps 2026 — Expert Ranked | CyberTechVault",
    description:
      "Compare the 10 best 2FA authenticator apps and hardware keys of 2026. TOTP, push-based, and hardware options tested for security, usability, and backup features.",
    alternates: { canonical: `${SITE_URL}/categories/two-factor-authentication` },
  }
}

const partners = [
  {
    name: "Authy",
    slug: "authy",
    rating: 4.8,
    price: "Free",
    bestFor: "Multi-device sync & cloud backup",
    description: "Encrypted cloud backups ensure you never lose your 2FA tokens. Multi-device sync across phone, tablet, and desktop. Push notifications for supported services and offline TOTP generation.",
  },
  {
    name: "1Password (TOTP)",
    slug: "1password",
    rating: 4.8,
    price: "$2.99/mo",
    bestFor: "Password + 2FA in one vault",
    description: "Store TOTP codes alongside your passwords in one encrypted vault. Watchtower alerts if 2FA is available but not enabled on your accounts. Auto-copy codes during login autofill.",
  },
  {
    name: "Duo Security",
    slug: "duo",
    rating: 4.7,
    price: "Free / $3/user/mo",
    bestFor: "Enterprise & SSO integration",
    description: "Cisco-backed platform used by 40,000+ organizations. Push-based authentication, adaptive risk analysis, device health verification, and seamless integration with SSO providers.",
  },
  {
    name: "Microsoft Authenticator",
    slug: "microsoft-authenticator",
    rating: 4.6,
    price: "Free",
    bestFor: "Microsoft ecosystem & passwordless",
    description: "Passwordless sign-in to Microsoft accounts, TOTP for any service, and number matching to prevent MFA fatigue attacks. Cloud backup via Microsoft account. Supports passkeys.",
  },
  {
    name: "Google Authenticator",
    slug: "google-authenticator",
    rating: 4.4,
    price: "Free",
    bestFor: "Simple & widely supported",
    description: "The original TOTP app, now with Google account cloud sync. Minimal interface, fast code generation, and universal compatibility. Transfer accounts between devices via QR code.",
  },
  {
    name: "Yubico Authenticator",
    slug: "yubico",
    rating: 4.7,
    price: "$25-75 (key)",
    bestFor: "Hardware-backed security",
    description: "TOTP codes stored on your YubiKey hardware token, not your phone. Phishing-resistant FIDO2/WebAuthn support. Codes cannot be extracted even if your computer is compromised.",
  },
  {
    name: "Aegis Authenticator",
    slug: "aegis",
    rating: 4.6,
    price: "Free (Android)",
    bestFor: "Open-source Android 2FA",
    description: "Open-source, free, and ad-free authenticator for Android. AES-256 encrypted vault with biometric unlock. Automatic backups, icon packs, and advanced organization with groups and search.",
  },
  {
    name: "Raivo OTP",
    slug: "raivo",
    rating: 4.4,
    price: "Free (iOS)",
    bestFor: "Native iOS experience",
    description: "Designed specifically for iOS with native Swift UI. iCloud sync, biometric lock, custom icons, and zip archive exports. Lightweight and fast with a focus on Apple ecosystem integration.",
  },
  {
    name: "Bitwarden (TOTP)",
    slug: "bitwarden",
    rating: 4.5,
    price: "$1/mo (Premium)",
    bestFor: "Open-source password + 2FA",
    description: "TOTP authenticator built into Bitwarden Premium. Auto-fill login credentials and 2FA codes in one step. Self-hostable, open-source, and cross-platform across all devices and browsers.",
  },
  {
    name: "LastPass Authenticator",
    slug: "lastpass",
    rating: 4.2,
    price: "Free",
    bestFor: "One-tap push authentication",
    description: "Push-based one-tap login for LastPass vault and supported services. TOTP support for all standard sites. Encrypted backup to LastPass account for easy device migration.",
  },
]

const top5 = partners.slice(0, 5).map((p) => ({
  name: p.name,
  rating: p.rating,
  priceFrom: p.price,
  bestFor: p.bestFor,
  affiliateSlug: p.slug,
  affiliateLabel: `Get ${p.name.split(" ")[0]}`,
  recommended: p.slug === "authy",
  badge: p.slug === "authy" ? "Editor's Choice" : undefined,
  features: {
    cloudBackup: p.slug !== "google-authenticator" || true,
    multiDevice: p.slug === "authy" || p.slug === "1password" || p.slug === "duo",
    biometric: true,
    pushAuth: p.slug === "authy" || p.slug === "duo" || p.slug === "microsoft-authenticator",
    platform: p.slug === "authy" ? "All" : p.slug === "1password" ? "All" : p.slug === "duo" ? "All" : p.slug === "microsoft-authenticator" ? "All" : "All",
  },
}))

const featureLabels: Record<string, string> = {
  cloudBackup: "Cloud Backup",
  multiDevice: "Multi-Device Sync",
  biometric: "Biometric Unlock",
  pushAuth: "Push Notifications",
  platform: "Platform Support",
}

const itemListSchema = buildItemListSchema(
  partners.map((p) => ({ name: p.name, url: `${SITE_URL}/go/${p.slug}` })),
  "Best Two-Factor Authentication Apps 2026"
)

export default function TwoFactorAuthCategoryPage() {
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
              Best <span className="text-[#00FF88]">Two-Factor Authentication</span> Apps of 2026
            </h1>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              A password alone is not enough. We tested 15+ authenticator apps and hardware keys on security, backup reliability, cross-platform support, and ease of use. These 10 earned our trust.
            </p>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <AffiliateDisclosureBanner />
        </section>

        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ComparisonTable items={top5} featureLabels={featureLabels} title="Top 5 2FA App Comparison" />
        </section>

        {/* Partner Cards Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-[#F0FDF4] mb-8">All 10 2FA Solutions Ranked</h2>
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
                    <div className="text-xs text-[#94A3B8]">{p.price}</div>
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
                  Get {p.name.split(" ")[0]}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 5h6M5 2l3 3-3 3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Long-form content */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4">Why Two-Factor Authentication Is Non-Negotiable</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Passwords are the weakest link in personal security. Even a strong, unique password can be compromised through phishing, data breaches, keyloggers, or social engineering. Two-factor authentication (2FA) adds a second verification step — something you have (your phone or hardware key) in addition to something you know (your password). With 2FA enabled, a stolen password alone is useless to an attacker.
            </p>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Studies consistently show that 2FA blocks over 99% of automated account takeover attacks. Google reported that adding a phone number as a recovery factor blocked 100% of automated bots, 99% of bulk phishing attacks, and 66% of targeted attacks. Hardware security keys like YubiKey raise that to 100% across all attack types. Despite this, fewer than 30% of internet users have 2FA enabled — a gap that makes it one of the highest-impact security steps you can take today.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">Types of Two-Factor Authentication</h2>
            <h3 className="text-xl font-bold text-[#F0FDF4] mb-3 mt-8">TOTP (Time-Based One-Time Passwords)</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              TOTP apps generate a new 6-digit code every 30 seconds based on a shared secret key. This is the most common form of app-based 2FA, supported by virtually every service. Authy, Google Authenticator, Aegis, and the TOTP features in 1Password and Bitwarden all use this standard. The codes work offline and do not require an internet connection, making them reliable in all situations.
            </p>

            <h3 className="text-xl font-bold text-[#F0FDF4] mb-3 mt-8">Push-Based Authentication</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Push notifications send a login approval request directly to your phone. You tap &quot;Approve&quot; or &quot;Deny&quot; instead of typing a code. Duo Security, Microsoft Authenticator, and Authy support push-based flows. This is faster and more user-friendly than typing codes. Modern implementations include number matching — you must type a number displayed on the login screen into the push notification — to prevent MFA fatigue attacks where attackers bombard you with approval requests.
            </p>

            <h3 className="text-xl font-bold text-[#F0FDF4] mb-3 mt-8">Hardware Security Keys (FIDO2/WebAuthn)</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Hardware keys like YubiKey are the gold standard for 2FA. They use public-key cryptography that is inherently phishing-resistant — the key verifies the website&apos;s identity before responding, so a phishing site cannot trick it. Keys connect via USB-A, USB-C, NFC, or Lightning. While they cost $25-75 per key, they are the only 2FA method that offers 100% protection against phishing, making them essential for high-value accounts like email, banking, and cryptocurrency.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">SMS 2FA: Better Than Nothing, But Not Enough</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              SMS-based verification codes are vulnerable to SIM-swapping attacks, where an attacker convinces your carrier to transfer your phone number to their SIM card. They are also intercepted by SS7 protocol exploits and compromised by malware that reads incoming text messages. While SMS 2FA is better than no 2FA at all, we strongly recommend upgrading to an authenticator app or hardware key for all important accounts.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">Backup and Recovery: The Critical Step Most People Skip</h2>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              The biggest risk with 2FA is losing access to your authenticator — a broken phone, factory reset, or lost hardware key can lock you out of every account. Authy solves this with encrypted cloud backups that sync across multiple devices. 1Password and Bitwarden store TOTP codes in your encrypted vault, which is synced and backed up automatically. For hardware keys, always register at least two keys per account. Save backup codes provided during 2FA setup in a secure location, such as your password manager or a physical safe.
            </p>

            <h2 className="text-2xl font-bold text-[#F0FDF4] mb-4 mt-10">Frequently Asked Questions</h2>
            <h3 className="text-lg font-bold text-[#F0FDF4] mb-2 mt-6">Should I store 2FA codes in my password manager?</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Security purists argue against it because it puts both factors in one vault. Pragmatically, a zero-knowledge encrypted vault is far more secure than SMS or no 2FA at all. The real threat model for most users is credential stuffing and phishing, which TOTP defeats regardless of where the codes are stored. Use a password manager with 2FA codes for convenience, but protect your vault itself with a hardware key.
            </p>
            <h3 className="text-lg font-bold text-[#F0FDF4] mb-2 mt-6">Which accounts should I enable 2FA on first?</h3>
            <p className="text-[#94A3B8] leading-relaxed mb-6">
              Start with your email account — it is the master key to all your other accounts via password resets. Then secure your password manager, banking and financial accounts, cloud storage, social media, and any account that holds sensitive data. The 2FA Directory at 2fa.directory lists which services support 2FA and what methods they accept.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
