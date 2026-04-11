import Link from "next/link"

type Variant = "full" | "icon" | "wordmark"
type Size = "xs" | "sm" | "md" | "lg" | "xl"

interface Props {
  variant?: Variant
  size?: Size
  href?: string
  className?: string
  light?: boolean
}

const S = {
  xs: { i: 18, t: "text-sm", g: "gap-1.5" },
  sm: { i: 22, t: "text-base", g: "gap-2" },
  md: { i: 28, t: "text-xl", g: "gap-2.5" },
  lg: { i: 36, t: "text-2xl", g: "gap-3" },
  xl: { i: 48, t: "text-3xl", g: "gap-3.5" },
}

function Icon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ns-g" x1="20" y1="8" x2="20" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e3a5f" />
          <stop offset="100%" stopColor="#4a90d9" />
        </linearGradient>
      </defs>
      <path d="M20 8L32 28H8L20 8Z" fill="url(#ns-g)" />
      <path d="M20 8L24 16H16L20 8Z" fill="white" opacity="0.9" />
      <g transform="translate(30,10)">
        <path d="M0-5L1.2-1.8L4.8-1.8L1.8 0.3L3 3.5L0 1.5L-3 3.5L-1.8 0.3L-4.8-1.8L-1.2-1.8Z" fill="#FB923C" />
      </g>
    </svg>
  )
}

export function NorwegianSparkLogo({
  variant = "full",
  size = "sm",
  href = "/",
  className = "",
  light = false,
}: Props) {
  const { i, t, g } = S[size]
  const content = (
    <span className={`inline-flex items-center ${g} ${className}`}>
      {(variant === "full" || variant === "icon") && <Icon size={i} />}
      {(variant === "full" || variant === "wordmark") && (
        <span className={`${t} leading-none ${light ? "text-white" : "text-current"} tracking-tight`}>
          <span style={{ fontWeight: 300 }}>Norwegian</span>
          <span style={{ fontWeight: 700, color: "#FB923C" }}>Spark</span>
        </span>
      )}
    </span>
  )
  return href ? (
    <Link href={href} aria-label="NorwegianSpark — Home" className="inline-flex">
      {content}
    </Link>
  ) : (
    content
  )
}

export default NorwegianSparkLogo
