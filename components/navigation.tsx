"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { NorwegianSparkLogo } from "./logo/norwegianspark-logo"

const categories = [
  { name: "VPN", slug: "vpn" },
  { name: "Password Managers", slug: "password-managers" },
  { name: "Antivirus", slug: "antivirus" },
  { name: "Identity Protection", slug: "identity-protection" },
  { name: "Dark Web Monitoring", slug: "dark-web-monitoring" },
  { name: "2FA", slug: "two-factor-authentication" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [catOpen, setCatOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#080C10]/95 backdrop-blur-md border-b border-[#00FF8815]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <NorwegianSparkLogo size="sm" light />

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm text-white/70 hover:text-[#00FF88] transition-colors font-sans">
              Home
            </Link>

            {/* Categories dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCatOpen(true)}
              onMouseLeave={() => setCatOpen(false)}
            >
              <button className="text-sm text-white/70 hover:text-[#00FF88] transition-colors font-sans flex items-center gap-1">
                Categories
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className={`transition-transform ${catOpen ? "rotate-180" : ""}`}>
                  <path d="M3 5l3 3 3-3" />
                </svg>
              </button>
              {/* CSS bridge */}
              <div className="absolute top-full left-0 h-2 w-48" />
              {catOpen && (
                <div className="absolute top-[calc(100%+8px)] left-0 w-64 bg-[#0D1117] border border-[#00FF8820] rounded-xl shadow-2xl shadow-[#00FF8810] py-2 animate-fade-in">
                  <Link
                    href="/categories"
                    className="block px-4 py-2.5 text-sm text-[#00FF88] hover:bg-[#00FF8810] font-sans font-medium"
                  >
                    All Categories
                  </Link>
                  <div className="border-t border-white/5 my-1" />
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/categories/${cat.slug}`}
                      className="block px-4 py-2.5 text-sm text-white/70 hover:text-[#00FF88] hover:bg-[#00FF8810] transition-colors font-sans"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/journal" className="text-sm text-white/70 hover:text-[#00FF88] transition-colors font-sans">
              Journal
            </Link>
            <Link href="/tools/security-quiz" className="text-sm text-white/70 hover:text-[#00FF88] transition-colors font-sans">
              Security Quiz
            </Link>
            <Link href="/about" className="text-sm text-white/70 hover:text-[#00FF88] transition-colors font-sans">
              About
            </Link>
            <Link
              href="/tools/security-quiz"
              className="px-5 py-2 bg-[#00FF88] text-black text-sm font-bold rounded-full hover:bg-[#00E87A] transition-colors"
            >
              Check Your Score
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white/70"
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 8h16M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0D1117] border-t border-[#00FF8820] animate-fade-in">
          <div className="px-4 py-6 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block py-3 text-white/70 hover:text-[#00FF88] font-sans">Home</Link>
            <Link href="/categories" onClick={() => setMobileOpen(false)} className="block py-3 text-white/70 hover:text-[#00FF88] font-sans">Categories</Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                onClick={() => setMobileOpen(false)}
                className="block py-2 pl-4 text-sm text-white/50 hover:text-[#00FF88] font-sans"
              >
                {cat.name}
              </Link>
            ))}
            <Link href="/journal" onClick={() => setMobileOpen(false)} className="block py-3 text-white/70 hover:text-[#00FF88] font-sans">Journal</Link>
            <Link href="/tools/security-quiz" onClick={() => setMobileOpen(false)} className="block py-3 text-white/70 hover:text-[#00FF88] font-sans">Security Quiz</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-3 text-white/70 hover:text-[#00FF88] font-sans">About</Link>
            <Link
              href="/tools/security-quiz"
              onClick={() => setMobileOpen(false)}
              className="block mt-4 text-center px-5 py-3 bg-[#00FF88] text-black font-bold rounded-full hover:bg-[#00E87A] transition-colors"
            >
              Check Your Score
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
