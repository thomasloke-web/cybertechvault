"use client"

interface Props {
  url: string
  title: string
}

export function SocialShare({ url, title }: Props) {
  const e = encodeURIComponent
  const et = e(title)

  const share = (platform: string) => {
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${e(url)}&text=${et}&via=norwegianspark`,
      linkedin: `https://linkedin.com/sharing/share-offsite/?url=${e(url)}`,
    }
    window.open(urls[platform], "_blank", "width=600,height=400")
    window.va?.("event", { name: "social_share", properties: { platform, url } })
  }

  return (
    <div className="flex items-center gap-3 my-8 py-6 border-t border-b border-white/10">
      <span className="text-xs font-sans uppercase tracking-widest text-[#94A3B8]">Share</span>
      {[
        { p: "twitter", label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.763l7.726-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
        { p: "linkedin", label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
      ].map(({ p, label, path }) => (
        <button
          key={p}
          onClick={() => share(p)}
          aria-label={`Share on ${label}`}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 text-white/60 hover:bg-[#00FF8820] hover:text-[#00FF88] transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={path} /></svg>
        </button>
      ))}
    </div>
  )
}
