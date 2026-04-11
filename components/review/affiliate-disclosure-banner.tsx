export function AffiliateDisclosureBanner() {
  return (
    <div className="flex items-start gap-3 p-4 mb-8 rounded-xl bg-[#00FF8810] border border-[#00FF8830]">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#00FF88] flex-shrink-0 mt-0.5">
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 5v4M8 10.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <p className="text-sm text-[#94A3B8] font-sans leading-relaxed">
        <span className="font-medium text-[#F0FDF4]">Affiliate disclosure:</span> This article contains affiliate links. If you click a link and make a purchase, we may earn a commission at no extra cost to you. Our editorial recommendations are never influenced by commissions —{" "}
        <a href="/disclosure" className="text-[#00FF88] underline hover:no-underline">read our full disclosure policy</a>.
      </p>
    </div>
  )
}
