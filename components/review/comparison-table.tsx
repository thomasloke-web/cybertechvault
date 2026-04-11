"use client"

import Link from "next/link"
import { StarRating } from "./star-rating"

interface Item {
  name: string
  rating: number
  priceFrom: string
  bestFor: string
  affiliateSlug: string
  affiliateLabel: string
  features: Record<string, boolean | string>
  recommended?: boolean
  badge?: string
}

interface Props {
  items: Item[]
  featureLabels: Record<string, string>
  title?: string
}

export function ComparisonTable({ items, featureLabels, title }: Props) {
  return (
    <div className="my-10 overflow-x-auto">
      {title && <h2 className="text-xl font-bold text-[#F0FDF4] mb-6">{title}</h2>}
      <table className="w-full border-collapse" style={{ minWidth: "600px" }}>
        <thead>
          <tr className="border-b-2 border-[#00FF8830]">
            <th className="text-left py-3 pr-4 font-sans text-sm text-[#94A3B8] font-medium w-36">Feature</th>
            {items.map((item) => (
              <th key={item.name} className={`py-3 px-4 text-center font-sans text-sm font-medium ${item.recommended ? "text-[#00FF88]" : "text-[#F0FDF4]"}`}>
                {item.recommended && (
                  <span className="block mb-1 text-xs bg-[#00FF88] text-black px-2 py-0.5 rounded-full font-bold">
                    {item.badge ?? "Our Top Pick"}
                  </span>
                )}
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            { label: "Rating", render: (item: Item) => <><div className="flex justify-center mb-1"><StarRating rating={item.rating} /></div><span className="text-xs text-[#94A3B8]">{item.rating.toFixed(1)}/5</span></> },
            { label: "Price from", render: (item: Item) => <span className="text-sm font-medium text-[#00FF88] font-sans">{item.priceFrom}</span> },
            { label: "Best for", render: (item: Item) => <span className="text-xs text-[#94A3B8] font-sans">{item.bestFor}</span> },
          ].map(({ label, render }) => (
            <tr key={label} className="border-b border-white/5">
              <td className="py-3 pr-4 text-sm text-[#94A3B8] font-sans">{label}</td>
              {items.map((item) => (
                <td key={item.name} className={`py-3 px-4 text-center ${item.recommended ? "bg-[#00FF8808]" : ""}`}>
                  {render(item)}
                </td>
              ))}
            </tr>
          ))}
          {Object.entries(featureLabels).map(([key, label]) => (
            <tr key={key} className="border-b border-white/5">
              <td className="py-3 pr-4 text-sm text-[#94A3B8] font-sans">{label}</td>
              {items.map((item) => {
                const v = item.features[key]
                return (
                  <td key={item.name} className={`py-3 px-4 text-center ${item.recommended ? "bg-[#00FF8808]" : ""}`}>
                    {typeof v === "boolean" ? (
                      v ? (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mx-auto text-[#00FF88]">
                          <path d="M3 9l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      ) : (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mx-auto text-red-400">
                          <path d="M5 5l8 8M13 5l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      )
                    ) : (
                      <span className="text-xs text-[#94A3B8] font-sans">{v}</span>
                    )}
                  </td>
                )
              })}
            </tr>
          ))}
          <tr>
            <td className="py-4 pr-4" />
            {items.map((item) => (
              <td key={item.name} className={`py-4 px-4 text-center ${item.recommended ? "bg-[#00FF8808]" : ""}`}>
                <Link
                  href={`/go/${item.affiliateSlug}`}
                  rel="nofollow sponsored"
                  target="_blank"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      window.va?.("event", { name: "affiliate_click", properties: { slug: item.affiliateSlug } })
                    }
                  }}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-sans uppercase tracking-widest transition-colors ${
                    item.recommended
                      ? "bg-[#00FF88] text-black font-bold hover:bg-[#00E87A]"
                      : "border border-[#00FF8830] text-[#00FF88] hover:bg-[#00FF8810]"
                  }`}
                >
                  {item.affiliateLabel}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 5h6M5 2l3 3-3 3" />
                  </svg>
                </Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <p className="text-xs text-white/30 font-sans mt-3">
        Prices verified April 2026. Confirm with provider before purchasing.{" "}
        <a href="/disclosure" className="underline">Affiliate disclosure</a>.
      </p>
    </div>
  )
}
