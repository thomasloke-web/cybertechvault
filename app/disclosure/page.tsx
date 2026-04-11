import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cybertechvault.com"

export function generateMetadata(): Metadata {
  return {
    title: "Affiliate Disclosure",
    description:
      "CyberTechVault affiliate disclosure. How we earn money, how it affects our reviews, and our commitment to transparency.",
    alternates: { canonical: `${siteUrl}/disclosure` },
    robots: { index: false, follow: true },
  }
}

export default function DisclosurePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#080C10] text-[#F0FDF4]">
        <section className="relative overflow-hidden border-b border-[#00FF8820] py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00FF8808] to-transparent" />
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Affiliate <span className="text-[#00FF88]">Disclosure</span>
            </h1>
            <p className="mt-4 text-sm text-[#94A3B8]">
              FTC 16 CFR 255.5 Compliant Disclosure Statement
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-16">
          <div className="space-y-10 text-[#94A3B8] [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#00FF88]">
            {/* Overview */}
            <section>
              <h2>Our Commitment to Transparency</h2>
              <p className="mt-3 leading-relaxed">
                In accordance with the Federal Trade Commission&rsquo;s guidelines on endorsements and
                testimonials (16 CFR Part 255), and specifically 16 CFR 255.5 regarding disclosure of
                material connections, we provide this disclosure to ensure you are fully informed about
                our relationships with the companies whose products we review and recommend.
              </p>
            </section>

            {/* Material connection */}
            <section>
              <h2>Material Connection Disclosure</h2>
              <p className="mt-3 leading-relaxed">
                CyberTechVault, operated by <strong className="text-[#F0FDF4]">NorwegianSpark SA</strong>,
                is an affiliate marketing website. This means that some of the links on our site are
                &ldquo;affiliate links.&rdquo; When you click on an affiliate link and take a qualifying
                action &mdash; such as purchasing a subscription or signing up for a free trial &mdash; we
                may receive a commission from the product company at <strong className="text-[#F0FDF4]">no
                additional cost to you</strong>.
              </p>
            </section>

            {/* How it works */}
            <section>
              <h2>How Affiliate Links Work</h2>
              <ul className="mt-3 list-disc space-y-3 pl-6">
                <li>
                  We include links to products and services we review. Some of these links contain a unique
                  tracking identifier.
                </li>
                <li>
                  When you click an affiliate link, the destination site may place a cookie on your device
                  to attribute the referral.
                </li>
                <li>
                  If you complete a qualifying purchase within the cookie window, we receive a referral
                  commission from the vendor.
                </li>
                <li>
                  You never pay more by using our links. In many cases, we negotiate exclusive discounts
                  that save you money.
                </li>
              </ul>
            </section>

            {/* Editorial independence */}
            <section>
              <h2>Editorial Independence</h2>
              <p className="mt-3 leading-relaxed">
                Our reviews and recommendations are based on genuine research, hands-on testing, and
                independent analysis. Affiliate commissions do <strong className="text-[#F0FDF4]">not</strong>{" "}
                influence our editorial content, ratings, or rankings. We frequently recommend products
                that offer lower commissions &mdash; or no affiliate programme at all &mdash; when they
                are the best choice for our readers.
              </p>
              <p className="mt-3 leading-relaxed">
                We will always disclose when a link is an affiliate link. If a product is provided to us
                free of charge for review purposes, we will clearly state that as well.
              </p>
            </section>

            {/* Your choice */}
            <section>
              <h2>Your Choice</h2>
              <p className="mt-3 leading-relaxed">
                You are never obligated to click our affiliate links. If you prefer, you can navigate
                directly to any vendor&rsquo;s website. Our content is free to read regardless of whether
                you use our affiliate links.
              </p>
            </section>

            {/* Products we cover */}
            <section>
              <h2>Products &amp; Categories We Cover</h2>
              <p className="mt-3 leading-relaxed">
                CyberTechVault reviews and compares cybersecurity products including, but not limited to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>VPN (Virtual Private Network) services</li>
                <li>Password managers</li>
                <li>Antivirus and anti-malware software</li>
                <li>Identity protection and monitoring services</li>
                <li>Dark web monitoring tools</li>
                <li>Two-factor authentication (2FA) apps and hardware</li>
              </ul>
            </section>

            {/* FTC compliance */}
            <section className="rounded-xl border border-[#00FF8820] bg-[#0D1117] p-6">
              <h2>FTC Compliance Statement</h2>
              <p className="mt-3 leading-relaxed">
                This disclosure is made pursuant to the Federal Trade Commission&rsquo;s 16 CFR Part 255:
                &ldquo;Guides Concerning the Use of Endorsements and Testimonials in Advertising&rdquo;
                and specifically 16 CFR 255.5: &ldquo;Disclosure of Material Connections.&rdquo;
              </p>
              <p className="mt-3 leading-relaxed">
                If you have questions about this disclosure, please{" "}
                <Link href="/contact" className="text-[#00FF88] hover:underline">contact us</Link>.
              </p>
            </section>

            {/* Related pages */}
            <div className="flex flex-wrap gap-4 pt-4 text-sm">
              <Link href="/privacy" className="text-[#00FF88] hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#00FF88] hover:underline">
                Terms of Service
              </Link>
              <Link href="/about" className="text-[#00FF88] hover:underline">
                About Us
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
