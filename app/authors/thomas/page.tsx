import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { buildAuthorSchema } from "@/lib/schema"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cybertechvault.com"

export function generateMetadata(): Metadata {
  return {
    title: "Thomas — Co-founder & Editor at CyberTechVault",
    description:
      "Thomas is a former electrician and house builder turned cybersecurity researcher. Co-founder and editor at CyberTechVault, operated by NorwegianSpark SA.",
    alternates: { canonical: `${siteUrl}/authors/thomas` },
    openGraph: {
      title: "Thomas — Co-founder & Editor at CyberTechVault",
      description:
        "Thomas is a former electrician and house builder turned cybersecurity researcher. Co-founder and editor at CyberTechVault.",
      url: `${siteUrl}/authors/thomas`,
    },
  }
}

export default function ThomasPage() {
  const schema = buildAuthorSchema("thomas")

  return (
    <>
      <Script
        id="thomas-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navigation />
      <main className="min-h-screen bg-[#080C10] text-[#F0FDF4]">
        <section className="relative overflow-hidden border-b border-[#00FF8820] py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00FF8808] to-transparent" />
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#00FF88] bg-[#0D1117] text-3xl font-bold text-[#00FF88]">
              T
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Thomas</h1>
            <p className="mt-2 text-lg text-[#A855F7]">Co-founder &amp; Editor</p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-16">
          <div className="space-y-8 text-[#94A3B8]">
            <section>
              <h2 className="text-2xl font-bold text-[#00FF88]">Background</h2>
              <p className="mt-4 leading-relaxed">
                Thomas began his professional life as a certified electrician in Norway. For years he
                worked across residential and commercial projects, gaining deep technical knowledge of
                systems, wiring, and safety standards. His natural inclination to build things led him
                into the house-building industry, where he managed full construction projects from
                foundation to finished home.
              </p>
              <p className="mt-4 leading-relaxed">
                Throughout both careers, Thomas spent his spare time exploring digital technology. What
                started as a personal interest in VPNs and network security grew into a dedicated study
                of cybersecurity tools, privacy practices, and digital self-defence. Eventually the
                passion outgrew the hobby &mdash; and CyberTechVault was born.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00FF88]">Role at CyberTechVault</h2>
              <p className="mt-4 leading-relaxed">
                As co-founder and editor, Thomas leads the editorial process. He personally researches
                and tests every cybersecurity product featured on the site &mdash; from VPNs and password
                managers to antivirus suites and identity protection services. His reviews are built on
                hands-on experience, not press releases.
              </p>
              <p className="mt-4 leading-relaxed">
                Thomas&rsquo;s background in trades means he values reliability, practicality, and clear
                communication. If a product doesn&rsquo;t work as advertised, you&rsquo;ll know about it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#00FF88]">NorwegianSpark SA</h2>
              <p className="mt-4 leading-relaxed">
                Together with{" "}
                <Link href="/authors/oyvind" className="text-[#00FF88] hover:underline">
                  Øyvind
                </Link>
                , Thomas co-founded{" "}
                <Link href="/about" className="text-[#00FF88] hover:underline">
                  NorwegianSpark SA
                </Link>{" "}
                to build trustworthy tech review platforms. CyberTechVault is one of several sites
                operated under this company.
              </p>
            </section>

            <div className="flex flex-wrap gap-4 border-t border-[#00FF8820] pt-8 text-sm">
              <Link href="/authors/oyvind" className="text-[#00FF88] hover:underline">
                Meet Øyvind &rarr;
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
