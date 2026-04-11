import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { NorwegianSparkLogo } from "@/components/logo/norwegianspark-logo"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cybertechvault.com"

export function generateMetadata(): Metadata {
  return {
    title: "About CyberTechVault — Our Story & Mission",
    description:
      "Meet the founders of CyberTechVault. Thomas and Øyvind built NorwegianSpark SA to deliver honest, expert cybersecurity reviews you can trust.",
    alternates: { canonical: `${siteUrl}/about` },
    openGraph: {
      title: "About CyberTechVault — Our Story & Mission",
      description:
        "Meet the founders of CyberTechVault. Thomas and Øyvind built NorwegianSpark SA to deliver honest, expert cybersecurity reviews you can trust.",
      url: `${siteUrl}/about`,
    },
  }
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#080C10] text-[#F0FDF4]">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-[#00FF8820] py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00FF8808] to-transparent" />
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About <span className="text-[#00FF88]">CyberTechVault</span>
            </h1>
            <p className="mt-4 text-lg text-[#94A3B8]">
              Two guys from Norway who decided the internet deserved better cybersecurity advice.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-2xl font-bold text-[#00FF88]">Our Story</h2>
          <p className="mt-4 leading-relaxed text-[#94A3B8]">
            CyberTechVault was born from a simple frustration: finding honest, no-nonsense cybersecurity
            tool reviews felt impossible. Every comparison site seemed to push the product that paid
            them the most, not the one that actually protected people best. We set out to change that.
          </p>

          {/* Thomas */}
          <div className="mt-12 rounded-xl border border-[#00FF8820] bg-[#0D1117] p-6 sm:p-8">
            <h3 className="text-xl font-semibold">
              Thomas &mdash; <span className="text-[#A855F7]">Co-founder &amp; Editor</span>
            </h3>
            <p className="mt-3 leading-relaxed text-[#94A3B8]">
              Thomas started his career as a certified electrician, wiring homes and commercial buildings
              across Norway. He then transitioned into house building, managing full construction projects
              from foundation to roof. But his curiosity for technology never stopped growing. During
              evenings and weekends he dove deep into networking, VPNs, and digital privacy &mdash;
              eventually turning that passion into a full-time pursuit.
            </p>
            <p className="mt-3 leading-relaxed text-[#94A3B8]">
              Today Thomas leads CyberTechVault&rsquo;s editorial process: researching tools, running
              real-world tests, and writing the in-depth reviews and comparisons you find on this site.
              His hands-on background means he values things that actually work over marketing hype.
            </p>
            <Link
              href="/authors/thomas"
              className="mt-4 inline-block text-sm font-medium text-[#00FF88] hover:underline"
            >
              Read Thomas&rsquo;s full bio &rarr;
            </Link>
          </div>

          {/* Øyvind */}
          <div className="mt-8 rounded-xl border border-[#00FF8820] bg-[#0D1117] p-6 sm:p-8">
            <h3 className="text-xl font-semibold">
              Øyvind &mdash; <span className="text-[#A855F7]">Co-founder</span>
            </h3>
            <p className="mt-3 leading-relaxed text-[#94A3B8]">
              Øyvind spent years in the Norwegian insurance industry, helping clients navigate complex
              policies and claims. He later moved into debt management consulting, guiding individuals
              through financial recovery. Both roles sharpened his eye for fine print, risk assessment,
              and the kind of trust that only comes from complete transparency.
            </p>
            <p className="mt-3 leading-relaxed text-[#94A3B8]">
              At CyberTechVault, Øyvind brings that same rigour to the business side &mdash; ensuring
              our affiliate relationships never compromise editorial independence, and that every
              recommendation genuinely serves the reader first.
            </p>
            <Link
              href="/authors/oyvind"
              className="mt-4 inline-block text-sm font-medium text-[#00FF88] hover:underline"
            >
              Read Øyvind&rsquo;s full bio &rarr;
            </Link>
          </div>
        </section>

        {/* Mission */}
        <section className="border-t border-[#00FF8820] bg-[#0D1117]">
          <div className="mx-auto max-w-4xl px-4 py-16">
            <h2 className="text-2xl font-bold text-[#00FF88]">Our Mission</h2>
            <ul className="mt-6 space-y-4 text-[#94A3B8]">
              <li className="flex gap-3">
                <span className="mt-1 text-[#00FF88]">&#10003;</span>
                <span>Test every tool ourselves before recommending it.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-[#00FF88]">&#10003;</span>
                <span>Disclose all affiliate relationships transparently.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-[#00FF88]">&#10003;</span>
                <span>Prioritise reader trust over commission rates.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 text-[#00FF88]">&#10003;</span>
                <span>Keep content up to date &mdash; cybersecurity moves fast.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Company Info */}
        <section className="mx-auto max-w-4xl px-4 py-16">
          <h2 className="text-2xl font-bold text-[#00FF88]">NorwegianSpark SA</h2>
          <div className="mt-6 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <NorwegianSparkLogo size="lg" />
            <div className="space-y-1 text-[#94A3B8]">
              <p>
                <span className="font-medium text-[#F0FDF4]">Organisation number:</span> 834 984 172
              </p>
              <p>
                <span className="font-medium text-[#F0FDF4]">Bank account:</span> 3624 19 61537
              </p>
              <p>
                <span className="font-medium text-[#F0FDF4]">Email:</span>{" "}
                <a href="mailto:norwegianspark@gmail.com" className="text-[#00FF88] hover:underline">
                  norwegianspark@gmail.com
                </a>
              </p>
              <p>
                <span className="font-medium text-[#F0FDF4]">Phone:</span>{" "}
                <a href="tel:+4799737467" className="text-[#00FF88] hover:underline">
                  +47 99 73 74 67
                </a>
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm text-[#94A3B8]">
            CyberTechVault is operated by NorwegianSpark SA, a registered Norwegian company.
            See our{" "}
            <Link href="/disclosure" className="text-[#00FF88] hover:underline">
              affiliate disclosure
            </Link>
            ,{" "}
            <Link href="/privacy" className="text-[#00FF88] hover:underline">
              privacy policy
            </Link>
            , and{" "}
            <Link href="/terms" className="text-[#00FF88] hover:underline">
              terms of service
            </Link>{" "}
            for more details.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
