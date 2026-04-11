import { z } from "zod"

const s = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("https://cybertechvault.com"),
  RESEND_API_KEY: z.string().optional(),
  SENTRY_DSN: z.string().optional(),
})

export const env = s.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  SENTRY_DSN: process.env.SENTRY_DSN,
})
