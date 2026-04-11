interface Props {
  pros: string[]
  cons: string[]
}

export function ProsCons({ pros, cons }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
      <div className="p-5 rounded-2xl bg-[#00FF8808] border border-[#00FF8830]">
        <h3 className="font-sans font-medium text-[#00FF88] text-sm uppercase tracking-wide mb-3">Pros</h3>
        <ul className="space-y-2">
          {pros.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#F0FDF4] font-sans">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#00FF88] flex-shrink-0 mt-0.5">
                <path d="M2 7l3.5 3.5L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/20">
        <h3 className="font-sans font-medium text-red-400 text-sm uppercase tracking-wide mb-3">Cons</h3>
        <ul className="space-y-2">
          {cons.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#F0FDF4] font-sans">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-red-400 flex-shrink-0 mt-0.5">
                <path d="M4 4l6 6M10 4l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
