interface Props {
  items: { label: string }[]
  title?: string
}

export function BestForBadge({ items, title = "Best for" }: Props) {
  return (
    <div className="my-6">
      <p className="text-xs font-sans font-medium uppercase tracking-widest text-[#94A3B8] mb-3">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map(({ label }) => (
          <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-sans bg-[#00FF8810] text-[#00FF88] border border-[#00FF8830]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-[#00FF88]">
              <path d="M6 1L7.5 4.5H11L8 6.5L9.5 10L6 8L2.5 10L4 6.5L1 4.5H4.5L6 1Z" fill="currentColor" />
            </svg>
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
