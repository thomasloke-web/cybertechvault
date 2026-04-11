import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
})

const rateMap = new Map<string, { count: number; ts: number }>()

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown"
  const now = Date.now()
  const e = rateMap.get(ip)

  if (e && now - e.ts < 3_600_000 && e.count >= 5) {
    return NextResponse.json({ error: "Rate limit" }, { status: 429 })
  }
  rateMap.set(ip, { count: (e?.count ?? 0) + 1, ts: e?.ts ?? now })

  const p = schema.safeParse(await req.json().catch(() => null))
  if (!p.success) return NextResponse.json({ error: "Invalid input" }, { status: 400 })

  try {
    const { Resend } = await import("resend")
    await new Resend(process.env.RESEND_API_KEY).emails.send({
      from: "CyberTechVault <onboarding@resend.dev>",
      to: "norwegianspark@gmail.com",
      replyTo: p.data.email,
      subject: `Contact: ${p.data.name}`,
      text: `Name: ${p.data.name}\nEmail: ${p.data.email}\n\n${p.data.message}`,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed" }, { status: 500 })
  }
}
