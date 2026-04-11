"use client"

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="min-h-screen bg-[#080C10] flex flex-col items-center justify-center text-center px-6">
      <p className="text-xs font-sans uppercase tracking-[0.3em] text-red-400 mb-6">Error</p>
      <h1 className="text-3xl font-bold text-[#F0FDF4] mb-4">Something went wrong</h1>
      <p className="text-[#94A3B8] font-sans max-w-md mb-10">
        {error.message || "An unexpected error occurred."}
      </p>
      <button
        onClick={reset}
        className="px-8 py-3 bg-[#00FF88] text-black rounded-full font-bold text-sm hover:bg-[#00E87A] transition-colors"
      >
        Try Again
      </button>
    </div>
  )
}
