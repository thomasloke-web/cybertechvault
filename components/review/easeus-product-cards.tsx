"use client"

import Link from "next/link"

interface EaseusCardProps {
  slug: string
  name: string
  description: string
  badge: string
  rating: number
  cta: string
}

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const half = rating - full >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Rating ${rating} out of 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <svg key={`f${i}`} width="14" height="14" viewBox="0 0 14 14" fill="#00FF88">
          <path d="M7 1l1.8 4H13l-3.3 2.6L11 12 7 9.5 3 12l1.3-4.4L1 5h4.2z" />
        </svg>
      ))}
      {half && (
        <svg width="14" height="14" viewBox="0 0 14 14">
          <defs>
            <linearGradient id="half-easeus">
              <stop offset="50%" stopColor="#00FF88" />
              <stop offset="50%" stopColor="#1f2937" />
            </linearGradient>
          </defs>
          <path d="M7 1l1.8 4H13l-3.3 2.6L11 12 7 9.5 3 12l1.3-4.4L1 5h4.2z" fill="url(#half-easeus)" />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <svg key={`e${i}`} width="14" height="14" viewBox="0 0 14 14" fill="#1f2937">
          <path d="M7 1l1.8 4H13l-3.3 2.6L11 12 7 9.5 3 12l1.3-4.4L1 5h4.2z" />
        </svg>
      ))}
    </span>
  )
}

export function EaseusProductCard({ slug, name, description, badge, rating, cta }: EaseusCardProps) {
  return (
    <div className="flex flex-col p-6 rounded-2xl bg-[#0D1117] border border-[#00FF8820] hover:border-[#00FF8860] transition-all duration-300 hover:shadow-[0_0_30px_#00FF8815]">
      <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-[#A855F720] border border-[#A855F740] mb-4">
        <span className="text-[10px] text-[#A855F7] font-mono uppercase tracking-wider">{badge}</span>
      </div>
      <h3 className="text-lg font-bold text-[#F0FDF4] mb-2">{name}</h3>
      <p className="text-sm text-[#94A3B8] leading-relaxed mb-4 flex-1">{description}</p>
      <div className="flex items-center gap-2 mb-5">
        <Stars rating={rating} />
        <span className="text-xs text-[#94A3B8] font-mono">{rating.toFixed(1)}/5</span>
      </div>
      <Link
        href={cta}
        rel="nofollow sponsored"
        target="_blank"
        onClick={() => {
          if (typeof window !== "undefined") {
            window.va?.("event", {
              name: "affiliate_click",
              properties: { slug, destination: cta },
            })
          }
        }}
        className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#00FF88] text-black font-bold rounded-full text-sm hover:bg-[#00E87A] transition-all"
      >
        Get {name}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 7h8M7 3l4 4-4 4" />
        </svg>
      </Link>
    </div>
  )
}

export function EaseusProductCards() {
  return (
    <section className="py-24 bg-[#080C10] border-t border-[#00FF8810]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#00FF88]">Featured Tools</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F0FDF4] mt-4">Migration &amp; Backup Essentials</h2>
          <p className="text-[#94A3B8] mt-4 max-w-2xl mx-auto">
            Transfer to a new PC without losing a file. Automated backups so ransomware becomes an inconvenience, not a catastrophe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <EaseusProductCard
            slug="easeus"
            name="EaseUS Todo PCTrans"
            description="Transfer files, apps and settings to a new PC in minutes"
            badge="Best PC Migration Tool"
            rating={4.3}
            cta="/go/easeus"
          />
          <EaseusProductCard
            slug="easeus-backup"
            name="EaseUS Backup Center"
            description="Automated backup for files, system and disk — never lose data again"
            badge="Best Backup Solution"
            rating={4.4}
            cta="/go/easeus-backup"
          />
        </div>
      </div>
    </section>
  )
}
