import Link from "next/link"

interface Props {
  siteName: string
  isFinanceSite?: boolean
}

export function TrustBadge({ siteName, isFinanceSite = false }: Props) {
  return (
    <div className="mt-8 pt-8 border-t border-white/10">
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#00FF88] flex-shrink-0">
            <path d="M7 1L8.5 5H13L9.5 7.5L11 11.5L7 9L3 11.5L4.5 7.5L1 5H5.5L7 1Z" fill="currentColor" />
          </svg>
          <span className="text-xs text-white/60 font-sans">Editorial Independence</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-blue-400 flex-shrink-0">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 6v4M7 4.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-xs text-white/60 font-sans">Affiliate Links Disclosed</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-yellow-400 flex-shrink-0">
            <rect x="2" y="6" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M4.5 6V4.5a2.5 2.5 0 015 0V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-xs text-white/60 font-sans">GDPR Compliant</span>
        </div>
        {isFinanceSite && (
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-orange-400 flex-shrink-0">
              <path d="M7 1L9 5H13L10 8L11 12L7 10L3 12L4 8L1 5H5L7 1Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
            </svg>
            <span className="text-xs text-white/60 font-sans">Not Financial Advice</span>
          </div>
        )}
      </div>
      <p className="mt-4 text-xs text-white/30 font-sans leading-relaxed max-w-2xl">
        {siteName} is published by NorwegianSpark SA (Org no: 834 984 172). We may earn commissions on qualifying purchases via affiliate links. This does not affect our editorial independence.{" "}
        {isFinanceSite && "Content is informational only — not financial advice. "}
        <Link href="/disclosure" className="underline hover:text-white/50 transition-colors">Full disclosure</Link>
        {" · "}
        <Link href="/privacy" className="underline hover:text-white/50 transition-colors">Privacy policy</Link>
      </p>
    </div>
  )
}
