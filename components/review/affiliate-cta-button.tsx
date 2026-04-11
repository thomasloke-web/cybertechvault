"use client"

import Link from "next/link"

interface Props {
  slug: string
  label: string
  partnerName: string
  priceFrom?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function AffiliateCTAButton({
  slug,
  label,
  partnerName,
  priceFrom,
  variant = "primary",
  size = "md",
  className = "",
}: Props) {
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  }
  const variants = {
    primary: "bg-[#00FF88] text-black font-bold hover:bg-[#00E87A]",
    secondary: "bg-[#A855F7] text-white font-bold hover:bg-[#9333EA]",
    outline: "border-2 border-[#00FF88] text-[#00FF88] hover:bg-[#00FF8810]",
  }

  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center gap-2 ${className}`}>
      <Link
        href={`/go/${slug}`}
        rel="nofollow sponsored"
        target="_blank"
        onClick={() => {
          if (typeof window !== "undefined") {
            window.va?.("event", { name: "affiliate_click", properties: { slug, destination: partnerName } })
          }
        }}
        className={`inline-flex items-center gap-2 rounded-full font-sans uppercase tracking-widest transition-all duration-300 ${sizes[size]} ${variants[variant]}`}
      >
        {label}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 7h8M7 3l4 4-4 4" />
        </svg>
      </Link>
      {priceFrom && <span className="text-sm text-[#94A3B8] font-sans">{priceFrom}</span>}
    </div>
  )
}
