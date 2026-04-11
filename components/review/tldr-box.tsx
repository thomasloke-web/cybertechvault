"use client"

import Link from "next/link"
import { StarRating } from "./star-rating"

interface Props {
  productName: string
  rating: number
  maxRating?: number
  verdict: string
  bestFor: string
  notFor: string
  priceFrom: string
  affiliateSlug: string
  affiliateLabel: string
  lastVerified: string
}

export function TldrBox({
  productName, rating, maxRating = 10, verdict, bestFor, notFor,
  priceFrom, affiliateSlug, affiliateLabel, lastVerified,
}: Props) {
  const pct = (rating / maxRating) * 100
  const stars = (rating / maxRating) * 5

  return (
    <div className="p-6 mb-10 rounded-2xl border border-[#00FF8830] bg-gradient-to-br from-[#00FF8808] to-[#0D1117]">
      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
        <div className="flex-shrink-0 text-center">
          <div className="relative w-20 h-20 mx-auto">
            <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r="34" fill="none" stroke="#1a2a1a" strokeWidth="6" />
              <circle
                cx="40" cy="40" r="34" fill="none" stroke="#00FF88" strokeWidth="6"
                strokeDasharray={`${2 * Math.PI * 34}`}
                strokeDashoffset={`${2 * Math.PI * 34 * (1 - pct / 100)}`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xl font-bold text-[#00FF88]">{rating}</span>
              <span className="text-xs text-[#94A3B8]">/{maxRating}</span>
            </div>
          </div>
          <StarRating rating={stars} className="mt-2 justify-center" />
          <p className="text-xs text-[#94A3B8] font-sans mt-1">{productName}</p>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-base text-[#F0FDF4] font-sans leading-relaxed mb-4">{verdict}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="p-3 rounded-xl bg-[#00FF8808] border border-[#00FF8830]">
              <p className="text-xs font-medium text-[#00FF88] uppercase tracking-wide mb-1">Best for</p>
              <p className="text-sm text-[#F0FDF4] font-sans">{bestFor}</p>
            </div>
            <div className="p-3 rounded-xl bg-red-500/5 border border-red-500/20">
              <p className="text-xs font-medium text-red-400 uppercase tracking-wide mb-1">Not for</p>
              <p className="text-sm text-[#F0FDF4] font-sans">{notFor}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <span className="text-sm text-[#94A3B8] font-sans">{priceFrom}</span>
            <Link
              href={`/go/${affiliateSlug}`}
              rel="nofollow sponsored"
              target="_blank"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.va?.("event", { name: "affiliate_click", properties: { slug: affiliateSlug } })
                }
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00FF88] text-black rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#00E87A] transition-colors"
            >
              {affiliateLabel}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 6h8M6 2l4 4-4 4" />
              </svg>
            </Link>
          </div>
          <p className="text-xs text-white/30 font-sans mt-3">
            Prices verified {lastVerified}. Always confirm directly with provider.
          </p>
        </div>
      </div>
    </div>
  )
}
