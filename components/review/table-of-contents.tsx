"use client"

import { useEffect, useState } from "react"

interface TOCItem {
  id: string
  text: string
  level: number
}

export function TableOfContents({ items }: { items: TOCItem[] }) {
  const [active, setActive] = useState("")

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-20% 0% -70% 0%" }
    )
    items.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [items])

  return (
    <nav className="my-8 p-5 rounded-2xl bg-[#0D1117] border border-[#00FF8820]" aria-label="Table of contents">
      <p className="text-xs font-sans font-medium uppercase tracking-widest text-[#00FF88] mb-3">Contents</p>
      <ol className="space-y-1.5">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: `${(item.level - 2) * 12}px` }}>
            <a
              href={`#${item.id}`}
              className={`text-sm font-sans transition-colors hover:text-[#00FF88] ${
                active === item.id ? "text-[#00FF88] font-medium" : "text-[#94A3B8]"
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
