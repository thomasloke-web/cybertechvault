"use client"

import { useState } from "react"
import Link from "next/link"
import { NorwegianSparkLogo } from "./logo/norwegianspark-logo"
import { TrustBadge } from "./trust-badge"

const socials = [
  { name: "Instagram", href: "https://instagram.com/norwegianspark", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { name: "LinkedIn", href: "https://linkedin.com/company/norwegianspark", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
  { name: "X", href: "https://twitter.com/norwegianspark", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.763l7.726-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { name: "Pinterest", href: "https://pinterest.com/norwegianspark", path: "M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" },
]

const moreFromNS = [
  { name: "VPNGlobal", href: "https://vpnglobal.com" },
  { name: "AIVault", href: "https://aivault.zone" },
  { name: "CognixCore", href: "https://cognixcore.com" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle")

  async function handleNewsletter(e: React.FormEvent) {
    e.preventDefault()
    if (!email || status !== "idle") return
    setStatus("loading")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name: name || undefined }),
      })
      if (res.ok) {
        setStatus("done")
        if (typeof window !== "undefined") {
          window.va?.("event", { name: "newsletter_signup", properties: { source: "footer" } })
        }
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <footer className="bg-[#0D1117] border-t border-[#00FF8820]">
      {/* Newsletter section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-bold text-[#F0FDF4] mb-3">
            Stay in the <span className="text-[#00FF88]">Vault</span>
          </h2>
          <p className="text-[#94A3B8] text-sm mb-6">Weekly cybersecurity insights, tool reviews, and threat alerts. No spam. Unsubscribe anytime.</p>
          {status === "done" ? (
            <p className="text-[#00FF88] font-bold">You&apos;re in the vault! Check your inbox to confirm.</p>
          ) : (
            <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="First name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-[#080C10] border border-[#00FF8820] text-white text-sm font-sans placeholder:text-white/30 focus:outline-none focus:border-[#00FF88] transition-colors"
              />
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg bg-[#080C10] border border-[#00FF8820] text-white text-sm font-sans placeholder:text-white/30 focus:outline-none focus:border-[#00FF88] transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 bg-[#00FF88] text-black font-bold rounded-lg hover:bg-[#00E87A] transition-colors disabled:opacity-50 text-sm"
              >
                {status === "loading" ? "Joining..." : "Join"}
              </button>
            </form>
          )}
          {status === "error" && <p className="text-red-400 text-xs mt-2">Something went wrong. Try again.</p>}
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <NorwegianSparkLogo size="md" light />
            <p className="text-[#94A3B8] text-sm mt-4 leading-relaxed">
              Expert-tested cybersecurity tools. Independently reviewed. Always honest.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow @norwegianspark on ${s.name}`}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-[#00FF8820] hover:text-[#00FF88] transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[#00FF88] mb-4">Categories</h3>
            <ul className="space-y-2">
              {[
                { name: "VPN", href: "/categories/vpn" },
                { name: "Password Managers", href: "/categories/password-managers" },
                { name: "Antivirus", href: "/categories/antivirus" },
                { name: "Identity Protection", href: "/categories/identity-protection" },
                { name: "Dark Web Monitoring", href: "/categories/dark-web-monitoring" },
                { name: "Two-Factor Authentication", href: "/categories/two-factor-authentication" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/50 hover:text-[#00FF88] transition-colors font-sans">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[#00FF88] mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { name: "About", href: "/about" },
                { name: "Journal", href: "/journal" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Affiliate Disclosure", href: "/disclosure" },
                { name: "Terms of Service", href: "/terms" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/50 hover:text-[#00FF88] transition-colors font-sans">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More from NS */}
          <div>
            <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-[#00FF88] mb-4">More from NorwegianSpark</h3>
            <ul className="space-y-2">
              {moreFromNS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-[#00FF88] transition-colors font-sans">
                    {l.name} ↗
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-xs text-white/30 font-sans space-y-1">
              <p>NorwegianSpark SA</p>
              <p>Org no: 834 984 172</p>
              <p>Bank: 3624 19 61537</p>
              <p><a href="mailto:norwegianspark@gmail.com" className="hover:text-white/50">norwegianspark@gmail.com</a></p>
              <p><a href="tel:+4799737467" className="hover:text-white/50">+47 99 73 74 67</a></p>
            </div>
          </div>
        </div>

        <TrustBadge siteName="CyberTechVault" isFinanceSite={false} />

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-sans">
            All affiliate links disclosed. We may earn commissions on qualifying purchases.
          </p>
          <p className="text-xs text-white/30 font-sans">
            &copy; 2026 NorwegianSpark SA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
