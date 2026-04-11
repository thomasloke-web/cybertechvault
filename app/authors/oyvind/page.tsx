import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { buildAuthorSchema } from "@/lib/schema"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cybertechvault.com"

export function generateMetadata(): Metadata {
  return {
    title: "Øyvind — Co-founder at CyberTechVault",
    description:
      "Øyvind is a former insurance professional and debt management expert. Co-founder of CyberTechVault, operated by NorwegianSpark SA.",
    alternates: { canonical: `${siteUrl}/authors/oyvind` },
    openGraph: {
      title: "Øyvind — Co-founder at CyberTechVault",
      description:
        "Øyvind is a former insurance professional and debt management expert. Co-founder of CyberTechVault.",
      url: `${siteUrl}/authors/oyvind`,
    },
  }
}

export default function OyvindPage() {
  const schema = buildAuthorSchema("oyvind")

  return (
    <>
      <Script
        id="oyvind-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navigation />
      <main className="min-h-screen bg-[#080C10] text-[#F0FDF4]">
        <section className="relative overflow-hidden border-b border-[#00FF8820] py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00FF8808] to-transparent" />
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#A855F7] bg-[#0D1117] text-3xl font-bold text-[#A855F7]">
              Ø
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Øyvind</h1>
            <p className="mt-2 text-lg text-[#A855F7]">Co-founder</p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-16">
          <div className="space-y-8 text-[#94A3B8]">
            <section>
              <h2 className="text-2xl font-bold text-[#00FF88]">Background</h2>
              <p className="mt-4 leading-relaxed">
                Øyvind built his career in the Norwegian insurance industry, where he spent years helping
                clients understand complex policies, assess risk, and navigate claims processes. The role
                demanded attention to detail, empathy, and an unwavering commitment to acting in the
                client&rsquo;s best interest.
              </p>
              <p className="mt-4 leading-relaxed">
                He later transitioned into debt management consulting, guiding individuals through
                financial hardship and recovery. This work deepened his understanding of trust &mdash;
                when people are vulnerable, they need advisors who are transparent about incentives and
                genuinely focused on outcomes, not commissions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00FF88]">Role at CyberTechVault</h2>
              <p className="mt-4 leading-relaxed">
                Øyvind brings his finance and risk background to the business side of CyberTechVault. He
                oversees affiliate partnerships, ensuring that commercial relationships never compromise
                editorial independence. If a product earns a recommendation, it is because it genuinely
                serves readers &mdash; not because the commission is higher.
              </p>
              <p className="mt-4 leading-relaxed">
                His experience reading fine print in insurance contracts translates directly to evaluating
                the terms of service, privacy policies, and pricing structures of the cybersecurity tools
                reviewed on this site. He keeps the team honest.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00FF88]">NorwegianSpark SA</h2>
              <p className="mt-4 leading-relaxed">
                Together with{" "}
                <Link href="/authors/thomas" className="text-[#00FF88] hover:underline">
                  Thomas
                </Link>
                , Øyvind co-founded{" "}
                <Link href="/about" className="text-[#00FF88] hover:underline">
                  NorwegianSpark SA
                </Link>{" "}
                to create a portfolio of trustworthy, reader-first tech review sites. CyberTechVault
                is the company&rsquo;s cybersecurity-focused publication.
              </p>
            </section>

            <div className="flex flex-wrap gap-4 border-t border-[#00FF8820] pt-8 text-sm">
              <Link href="/authors/thomas" className="text-[#00FF88] hover:underline">
                Meet Thomas &rarr;
              </Link>
              <Link href="/about" className="text-[#00FF88] hover:underline">
                About CyberTechVault
              </Link>
              <Link href="/contact" className="text-[#00FF88] hover:underline">
                Contact us
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
