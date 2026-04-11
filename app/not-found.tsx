import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#080C10] flex flex-col items-center justify-center text-center px-6">
      <div className="max-w-lg">
        <div className="mb-8 p-6 rounded-2xl bg-[#0D1117] border border-[#00FF8820] font-mono text-left">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-[#00FF88]" />
            <span className="text-xs text-[#94A3B8] ml-2">terminal</span>
          </div>
          <p className="text-[#00FF88] text-sm">$ find /page</p>
          <p className="text-red-400 text-sm mt-1">Error 404: Page not found</p>
          <p className="text-[#94A3B8] text-sm mt-1">The requested resource does not exist on this server.</p>
          <p className="text-[#00FF88] text-sm mt-2 animate-pulse">█</p>
        </div>
        <h1 className="text-3xl font-bold text-[#F0FDF4] mb-4">
          Page <span className="text-[#00FF88]">Not Found</span>
        </h1>
        <p className="text-[#94A3B8] font-sans max-w-md mx-auto mb-10 leading-relaxed">
          The page you are looking for may have moved or no longer exists.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link href="/" className="px-8 py-3 bg-[#00FF88] text-black rounded-full font-bold text-sm hover:bg-[#00E87A] transition-colors">
            Return Home
          </Link>
          <Link href="/journal" className="px-8 py-3 border border-[#00FF8830] text-[#00FF88] rounded-full font-sans text-sm hover:bg-[#00FF8810] transition-colors">
            Browse Journal
          </Link>
        </div>
      </div>
    </main>
  )
}
