"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("ns-cookie-consent")) setVisible(true)
  }, [])

  const handle = (v: string) => {
    localStorage.setItem("ns-cookie-consent", v)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div role="dialog" aria-label="Cookie consent" className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#0D1117] border-t border-[#00FF8820]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-white/70 font-sans flex-1 leading-relaxed">
          We use essential cookies for error monitoring. No advertising or tracking cookies.{" "}
          <Link href="/privacy" className="text-[#00FF88] underline hover:no-underline">Privacy policy</Link>.
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button onClick={() => handle("declined")} className="px-4 py-2 text-xs font-sans uppercase tracking-widest text-white/60 border border-white/20 rounded-full hover:border-white/40 transition-colors">
            Decline
          </button>
          <button onClick={() => handle("accepted")} className="px-4 py-2 text-xs font-sans uppercase tracking-widest bg-[#00FF88] text-black rounded-full hover:bg-[#00E87A] transition-colors font-bold">
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
