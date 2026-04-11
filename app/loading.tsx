export default function Loading() {
  return (
    <div className="min-h-screen bg-[#080C10] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-[#00FF8820] border-t-[#00FF88] rounded-full animate-spin" />
        <p className="text-xs font-sans uppercase tracking-[0.3em] text-[#94A3B8]">Loading</p>
      </div>
    </div>
  )
}
