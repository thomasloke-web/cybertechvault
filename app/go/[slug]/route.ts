import { type NextRequest, NextResponse } from "next/server"
import { AFFILIATE_MAP } from "@/lib/affiliate-links"

const clickMap = new Map<string, { count: number; ts: number }>()

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown"
  const now = Date.now()
  const e = clickMap.get(ip)

  if (e && now - e.ts < 3_600_000 && e.count >= 10) {
    return NextResponse.redirect(new URL("/", req.url))
  }
  clickMap.set(ip, { count: (e?.count ?? 0) + 1, ts: e?.ts ?? now })

  const link = AFFILIATE_MAP[slug]
  if (!link) return NextResponse.redirect(new URL("/journal", req.url))

  const res = NextResponse.redirect(link.url, { status: 301 })
  res.headers.set("Cache-Control", "no-store")
  return res
}
