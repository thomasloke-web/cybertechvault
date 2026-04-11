import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cybertechvault.com"

export function generateMetadata(): Metadata {
  return {
    title: "Privacy Policy",
    description:
      "CyberTechVault privacy policy. Learn how we handle your data, cookies, and analytics in compliance with GDPR.",
    alternates: { canonical: `${siteUrl}/privacy` },
    robots: { index: false, follow: true },
  }
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-[#080C10] text-[#F0FDF4]">
        <section className="relative overflow-hidden border-b border-[#00FF8820] py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00FF8808] to-transparent" />
          <div className="relative mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Privacy <span className="text-[#00FF88]">Policy</span>
            </h1>
            <p className="mt-4 text-sm text-[#94A3B8]">Last updated: April 11, 2026</p>
          </div>
        </section>

        <article className="prose-invert mx-auto max-w-4xl px-4 py-16">
          <div className="space-y-10 text-[#94A3B8] [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-[#00FF88] [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-[#F0FDF4]">
            {/* 1 */}
            <section>
              <h2>1. Data Controller</h2>
              <p className="mt-3">
                The data controller for CyberTechVault is <strong className="text-[#F0FDF4]">NorwegianSpark SA</strong>,
                Org. no. 834 984 172, Norway. You can reach us at{" "}
                <a href="mailto:norwegianspark@gmail.com" className="text-[#00FF88] hover:underline">
                  norwegianspark@gmail.com
                </a>{" "}
                or{" "}
                <a href="tel:+4799737467" className="text-[#00FF88] hover:underline">+47 99 73 74 67</a>.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2>2. What Data We Collect</h2>
              <h3 className="mt-4">2.1 Data you provide voluntarily</h3>
              <p className="mt-2">
                If you use our <Link href="/contact" className="text-[#00FF88] hover:underline">contact form</Link>,
                we collect your name, email address, and the content of your message. This data is used
                solely to respond to your enquiry and is not shared with third parties.
              </p>

              <h3 className="mt-4">2.2 Automatically collected data</h3>
              <p className="mt-2">
                We use <strong className="text-[#F0FDF4]">Vercel Analytics</strong> to collect anonymous,
                aggregated usage statistics (page views, referrer, country, device type). Vercel Analytics
                does not use cookies and does not collect personal data. See{" "}
                <a
                  href="https://vercel.com/docs/analytics/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00FF88] hover:underline"
                >
                  Vercel&rsquo;s Analytics privacy policy
                </a>{" "}
                for details.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2>3. Cookies</h2>
              <p className="mt-3">
                CyberTechVault uses <strong className="text-[#F0FDF4]">essential cookies only</strong>.
                We do not use advertising, tracking, or marketing cookies.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-[#F0FDF4]">Sentry</strong> &mdash; We use Sentry for error monitoring
                  to keep the site reliable. Sentry may set a cookie to correlate error reports within a
                  session. This is strictly necessary for site operation and does not track you across sites.
                </li>
                <li>
                  <strong className="text-[#F0FDF4]">Cookie consent preference</strong> &mdash; A local-storage
                  key to remember whether you have acknowledged the cookie banner.
                </li>
              </ul>
              <p className="mt-3">
                Because we rely solely on essential cookies, consent under GDPR Art.&nbsp;6(1)(f) (legitimate
                interest) applies. You may still disable cookies in your browser settings at any time.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2>4. Affiliate Links</h2>
              <p className="mt-3">
                Some links on CyberTechVault are affiliate links. When you click an affiliate link and make
                a purchase, we may earn a commission at no extra cost to you. Affiliate partners may use
                their own cookies on their sites once you leave CyberTechVault. We do not control those
                cookies. Please read our{" "}
                <Link href="/disclosure" className="text-[#00FF88] hover:underline">
                  affiliate disclosure
                </Link>{" "}
                and each partner&rsquo;s privacy policy for more information.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2>5. Legal Basis for Processing (GDPR)</h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-[#F0FDF4]">Art. 6(1)(a) Consent</strong> &mdash; When you voluntarily
                  submit the contact form.
                </li>
                <li>
                  <strong className="text-[#F0FDF4]">Art. 6(1)(f) Legitimate interest</strong> &mdash; For
                  essential cookies (Sentry error monitoring) and anonymous analytics.
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2>6. Data Retention</h2>
              <p className="mt-3">
                Contact form submissions are retained for up to 12 months, then deleted. Aggregated
                analytics data has no personal identifiers and is retained indefinitely.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2>7. Your Rights Under GDPR</h2>
              <p className="mt-3">If you are in the EEA, you have the right to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Access the personal data we hold about you.</li>
                <li>Request rectification of inaccurate data.</li>
                <li>Request erasure of your data (&ldquo;right to be forgotten&rdquo;).</li>
                <li>Restrict or object to processing.</li>
                <li>Data portability.</li>
                <li>Lodge a complaint with a supervisory authority (Datatilsynet in Norway).</li>
              </ul>
              <p className="mt-3">
                To exercise any right, email us at{" "}
                <a href="mailto:norwegianspark@gmail.com" className="text-[#00FF88] hover:underline">
                  norwegianspark@gmail.com
                </a>
                .
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2>8. Third-Party Services</h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-[#F0FDF4]">Vercel</strong> &mdash; Hosting and analytics.
                </li>
                <li>
                  <strong className="text-[#F0FDF4]">Sentry</strong> &mdash; Error monitoring.
                </li>
                <li>
                  <strong className="text-[#F0FDF4]">Affiliate partners</strong> &mdash; VPN providers, security
                  software vendors, etc. (see{" "}
                  <Link href="/disclosure" className="text-[#00FF88] hover:underline">disclosure</Link>).
                </li>
              </ul>
            </section>

            {/* 9 */}
            <section>
              <h2>9. International Transfers</h2>
              <p className="mt-3">
                Vercel and Sentry process data in the United States. Both provide appropriate safeguards
                under the EU-US Data Privacy Framework. By using this site you acknowledge this transfer.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2>10. Children&rsquo;s Privacy</h2>
              <p className="mt-3">
                CyberTechVault is not directed at children under 16. We do not knowingly collect personal
                data from children. If you believe a child has provided us data, please{" "}
                <Link href="/contact" className="text-[#00FF88] hover:underline">contact us</Link> and we
                will delete it.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2>11. Changes to This Policy</h2>
              <p className="mt-3">
                We may update this policy from time to time. Material changes will be noted with a new
                &ldquo;Last updated&rdquo; date at the top of the page. Continued use of the site after
                changes constitutes acceptance.
              </p>
            </section>

            {/* Company footer */}
            <section className="mt-12 rounded-xl border border-[#00FF8820] bg-[#0D1117] p-6">
              <p className="text-sm">
                <strong className="text-[#F0FDF4]">NorwegianSpark SA</strong> &middot; Org. no. 834 984 172
                &middot; Norway
                <br />
                Email:{" "}
                <a href="mailto:norwegianspark@gmail.com" className="text-[#00FF88] hover:underline">
                  norwegianspark@gmail.com
                </a>{" "}
                &middot; Phone:{" "}
                <a href="tel:+4799737467" className="text-[#00FF88] hover:underline">+47 99 73 74 67</a>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
