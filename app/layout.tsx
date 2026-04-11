import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SkipNav } from "@/components/skip-nav"
import { CookieBanner } from "@/components/cookie-banner"
import Script from "next/script"
import { buildWebSiteSchema } from "@/lib/schema"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cybertechvault.com"

export const metadata: Metadata = {
  title: {
    default: "CyberTechVault — Expert Cybersecurity Tool Reviews & Comparisons",
    template: "%s | CyberTechVault",
  },
  description: "Compare the world's best VPNs, password managers, antivirus tools, and identity protection. Expert-tested. Independently reviewed. Always honest.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "CyberTechVault",
    images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@norwegianspark",
  },
  icons: {
    icon: "/icon.svg",
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schema = buildWebSiteSchema({
    name: "CyberTechVault",
    url: siteUrl,
    description: "Compare the world's best VPNs, password managers, antivirus tools, and identity protection.",
  })

  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}>
      <head>
        <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#080C10] text-[#F0FDF4] font-sans">
        <SkipNav />
        <div id="main" role="main" className="flex-1">
          {children}
        </div>
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
