import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  email: z.string().email(),
  name: z.string().max(200).optional(),
})

const rateMap = new Map<string, { count: number; ts: number }>()

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown"
  const now = Date.now()
  const e = rateMap.get(ip)

  if (e && now - e.ts < 3_600_000 && e.count >= 3) {
    return NextResponse.json({ error: "Rate limit" }, { status: 429 })
  }
  rateMap.set(ip, { count: (e?.count ?? 0) + 1, ts: e?.ts ?? now })

  const p = schema.safeParse(await req.json().catch(() => null))
  if (!p.success) return NextResponse.json({ error: "Invalid email" }, { status: 400 })

  const { email, name } = p.data

  try {
    const { Resend } = await import("resend")
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: "CyberTechVault <onboarding@resend.dev>",
      to: "norwegianspark@gmail.com",
      subject: `New subscriber: ${email}`,
      text: `Email: ${email}\nName: ${name ?? "-"}`,
    })

    await resend.emails.send({
      from: "CyberTechVault <onboarding@resend.dev>",
      to: email,
      subject: "Please confirm your subscription",
      text: `Hi${name ? ` ${name}` : ""},\n\nThank you for subscribing to CyberTechVault.\n\nYou'll receive our weekly cybersecurity insights and tool reviews.\n\nIf you did not sign up, ignore this email.\n\nThomas & Øyvind\nNorwegianSpark SA\nnorwegianspark@gmail.com`,
    })

    return NextResponse.json({ ok: true, message: "Confirmation email sent" })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed" }, { status: 500 })
  }
}
