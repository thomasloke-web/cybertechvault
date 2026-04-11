"use client"

export function SkipNav() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:bg-[#0D1117] focus:text-[#00FF88] focus:text-sm focus:font-sans focus:rounded-full focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00FF88]"
    >
      Skip to main content
    </a>
  )
}
