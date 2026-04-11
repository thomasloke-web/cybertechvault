import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cybertechvault.com"

export function generateMetadata(): Metadata {
  return {
    title: "Terms of Service",
    description:
      "CyberTechVault terms of service. Rules governing use of our cybersecurity review and comparison website.",
    alternates: { canonical: `${siteUrl}/terms` },
    robots: { index: false, follow: true },
  }
}

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#080C10] text-[#F0FDF4]">
        <section className="relative overflow-hidden border-b border-[#00FF8820] py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00FF8808] to-transparent" />
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Terms of <span className="text-[#00FF88]">Service</span>
            </h1>
            <p className="mt-4 text-sm text-[#94A3B8]">Last updated: April 11, 2026</p>
          </div>
        </section>

        <article className="mx-auto max-w-4xl px-4 py-16">
          <div className="space-y-10 text-[#94A3B8] [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#00FF88]">
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p className="mt-3 leading-relaxed">
                By accessing and using CyberTechVault (&ldquo;the Site&rdquo;), operated by{" "}
                <strong className="text-[#F0FDF4]">NorwegianSpark SA</strong> (Org. no. 834 984 172),
                you agree to be bound by these Terms of Service. If you do not agree, please do not use
                the Site.
              </p>
            </section>

            <section>
              <h2>2. Nature of Content</h2>
              <p className="mt-3 leading-relaxed">
                CyberTechVault provides reviews, comparisons, and educational content about cybersecurity
                tools and services. All content is for <strong className="text-[#F0FDF4]">informational
                purposes only</strong> and does not constitute professional security advice. You should
                evaluate each product independently based on your specific needs.
              </p>
            </section>

            <section>
              <h2>3. Affiliate Relationships</h2>
              <p className="mt-3 leading-relaxed">
                The Site contains affiliate links. When you click these links and make a purchase, we may
                earn a commission. This does not affect the price you pay. For full details, see our{" "}
                <Link href="/disclosure" className="text-[#00FF88] hover:underline">
                  affiliate disclosure
                </Link>
                .
              </p>
            </section>

            <section>
              <h2>4. Intellectual Property</h2>
              <p className="mt-3 leading-relaxed">
                All original content on CyberTechVault &mdash; including text, graphics, logos, and page
                layouts &mdash; is the property of NorwegianSpark SA and protected by applicable copyright
                laws. You may not reproduce, distribute, or create derivative works without our prior
                written consent.
              </p>
              <p className="mt-3 leading-relaxed">
                Product names, logos, and trademarks mentioned on the Site belong to their respective
                owners and are used for identification purposes only.
              </p>
            </section>

            <section>
              <h2>5. Accuracy of Information</h2>
              <p className="mt-3 leading-relaxed">
                We make every effort to keep our content accurate and up to date. However, cybersecurity
                products change frequently &mdash; features, pricing, and policies may differ from what is
                published. We provide content &ldquo;as is&rdquo; without warranties of any kind, express
                or implied.
              </p>
            </section>

            <section>
              <h2>6. Third-Party Links</h2>
              <p className="mt-3 leading-relaxed">
                The Site links to third-party websites. We are not responsible for the content, privacy
                practices, or availability of those sites. Visiting third-party sites is at your own risk.
              </p>
            </section>

            <section>
              <h2>7. User Conduct</h2>
              <p className="mt-3 leading-relaxed">You agree not to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Use the Site for any unlawful purpose.</li>
                <li>Attempt to gain unauthorised access to any part of the Site.</li>
                <li>Scrape, crawl, or harvest content without permission.</li>
                <li>Transmit malware, spam, or other harmful material.</li>
                <li>Impersonate any person or entity.</li>
              </ul>
            </section>

            <section>
              <h2>8. Limitation of Liability</h2>
              <p className="mt-3 leading-relaxed">
                To the fullest extent permitted by law, NorwegianSpark SA and its founders shall not be
                liable for any indirect, incidental, special, consequential, or punitive damages arising
                from your use of the Site or reliance on its content. Our total liability shall not exceed
                the amount you paid to access the Site (which is zero, as it is free).
              </p>
            </section>

            <section>
              <h2>9. Indemnification</h2>
              <p className="mt-3 leading-relaxed">
                You agree to indemnify and hold harmless NorwegianSpark SA, its founders, and affiliates
                from any claims, damages, or expenses arising from your violation of these Terms or misuse
                of the Site.
              </p>
            </section>

            <section>
              <h2>10. Governing Law</h2>
              <p className="mt-3 leading-relaxed">
                These Terms are governed by the laws of Norway. Any disputes shall be resolved in the
                courts of Norway.
              </p>
            </section>

            <section>
              <h2>11. Changes to These Terms</h2>
              <p className="mt-3 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes take effect when posted.
                Continued use of the Site after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2>12. Contact</h2>
              <p className="mt-3 leading-relaxed">
                Questions about these Terms? Please{" "}
                <Link href="/contact" className="text-[#00FF88] hover:underline">contact us</Link> or
                email{" "}
                <a href="mailto:norwegianspark@gmail.com" className="text-[#00FF88] hover:underline">
                  norwegianspark@gmail.com
                </a>
                .
              </p>
            </section>

            {/* Related pages */}
            <div className="flex flex-wrap gap-4 border-t border-[#00FF8820] pt-6 text-sm">
              <Link href="/privacy" className="text-[#00FF88] hover:underline">
                Privacy Policy
              </Link>
              <Link href="/disclosure" className="text-[#00FF88] hover:underline">
                Affiliate Disclosure
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
