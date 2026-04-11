interface Props {
  rating: number
  showNumber?: boolean
  className?: string
}

export function StarRating({ rating, showNumber = false, className = "" }: Props) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  const empty = 5 - full - (half ? 1 : 0)
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: full }).map((_, i) => (
        <svg key={`f${i}`} width="14" height="14" viewBox="0 0 14 14" fill="#00FF88">
          <path d="M7 1l1.5 4H13L9.5 7.5l1.5 4L7 9l-4 2.5L4.5 7.5 1 5h4.5L7 1z" />
        </svg>
      ))}
      {half && (
        <svg width="14" height="14" viewBox="0 0 14 14">
          <defs><clipPath id="h"><rect x="0" y="0" width="7" height="14" /></clipPath></defs>
          <path d="M7 1l1.5 4H13L9.5 7.5l1.5 4L7 9l-4 2.5L4.5 7.5 1 5h4.5L7 1z" fill="#1a2a1a" />
          <path d="M7 1l1.5 4H13L9.5 7.5l1.5 4L7 9l-4 2.5L4.5 7.5 1 5h4.5L7 1z" fill="#00FF88" clipPath="url(#h)" />
        </svg>
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <svg key={`e${i}`} width="14" height="14" viewBox="0 0 14 14" fill="#1a2a1a">
          <path d="M7 1l1.5 4H13L9.5 7.5l1.5 4L7 9l-4 2.5L4.5 7.5 1 5h4.5L7 1z" />
        </svg>
      ))}
      {showNumber && <span className="text-sm text-[#94A3B8] font-sans ml-1">{rating.toFixed(1)}</span>}
    </div>
  )
}
