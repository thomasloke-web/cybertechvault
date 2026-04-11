import { notFound } from "next/navigation"
import Link from "next/link"
import Script from "next/script"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AffiliateDisclosureBanner } from "@/components/review/affiliate-disclosure-banner"
import { ProsCons } from "@/components/review/pros-cons"
import { AffiliateCTAButton } from "@/components/review/affiliate-cta-button"
import { SocialShare } from "@/components/article/social-share"
import { comparisons } from "@/lib/comparisons"
import { buildBreadcrumbSchema, buildFaqSchema, schemaToScript } from "@/lib/schema"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cybertechvault.com"

export async function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const comp = comparisons.find((c) => c.slug === slug)
  if (!comp) return {}
  const url = `${siteUrl}/compare/${slug}`
  return {
    title: comp.title,
    description: comp.description,
    alternates: { canonical: url },
    openGraph: { title: comp.title, description: comp.description, url, type: "article" },
  }
}

export default async function ComparisonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const comp = comparisons.find((c) => c.slug === slug)
  if (!comp) notFound()

  const url = `${siteUrl}/compare/${slug}`

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "Categories", url: `${siteUrl}/categories` },
    { name: comp.title, url },
  ])

  const faqSchema = comp.faqs.length > 0 ? buildFaqSchema(comp.faqs) : null

  return (
    <>
      <Script id={`schema-breadcrumb-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToScript(breadcrumbSchema) }} />
      {faqSchema && <Script id={`schema-faq-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToScript(faqSchema) }} />}

      <Navigation />
      <main className="min-h-screen bg-[#080C10] pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex gap-2 text-sm text-[#94A3B8]">
              <li><Link href="/" className="hover:text-[#00FF88]">Home</Link></li>
              <li>/</li>
              <li><Link href={`/categories/${comp.category}`} className="hover:text-[#00FF88]">{comp.category}</Link></li>
              <li>/</li>
              <li className="text-[#F0FDF4] truncate max-w-[250px]">{comp.title}</li>
            </ol>
          </nav>

          <header className="mb-8">
            <span className="text-xs font-mono text-[#A855F7] uppercase tracking-wider">Head-to-Head Comparison</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#F0FDF4] mt-3">{comp.title}</h1>
          </header>

          <AffiliateDisclosureBanner />

          {/* Quick comparison cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
            {[comp.product1, comp.product2].map((p) => (
              <div
                key={p.name}
                className={`p-6 rounded-2xl border ${
                  p.name === comp.winner
                    ? "bg-[#00FF8808] border-[#00FF8840]"
                    : "bg-[#0D1117] border-[#00FF8820]"
                }`}
              >
                {p.name === comp.winner && (
                  <span className="inline-block mb-3 text-xs bg-[#00FF88] text-black px-2 py-0.5 rounded-full font-bold">Winner</span>
                )}
                <h3 className="text-xl font-bold text-[#F0FDF4] mb-2">{p.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-[#00FF88]">{p.rating}</span>
                  <span className="text-sm text-[#94A3B8]">/10</span>
                </div>
                <p className="text-sm text-[#94A3B8] mb-4">{p.priceFrom}</p>
                <ProsCons pros={p.pros} cons={p.cons} />
                <AffiliateCTAButton
                  slug={p.affiliateSlug}
                  label={p.affiliateLabel}
                  partnerName={p.name}
                  priceFrom={p.priceFrom}
                  variant={p.name === comp.winner ? "primary" : "outline"}
                />
              </div>
            ))}
          </div>

          {/* Comparison content */}
          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-[#F0FDF4] prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-[#00FF88]
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-[#94A3B8] prose-p:leading-relaxed
              prose-a:text-[#00FF88] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#F0FDF4]
              prose-ul:text-[#94A3B8] prose-ol:text-[#94A3B8]"
            dangerouslySetInnerHTML={{ __html: comp.content }}
          />

          {/* FAQs */}
          {comp.faqs.length > 0 && (
            <section className="mt-12 pt-8 border-t border-white/10">
              <h2 className="text-2xl font-bold text-[#00FF88] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {comp.faqs.map((faq, i) => (
                  <div key={i} className="p-5 rounded-xl bg-[#0D1117] border border-[#00FF8820]">
                    <h3 className="text-base font-bold text-[#F0FDF4] mb-2">{faq.q}</h3>
                    <p className="text-sm text-[#94A3B8] leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-[#94A3B8]">
              Compared by <Link href="/authors/thomas" className="text-[#00FF88]">Thomas</Link> — NorwegianSpark ·{" "}
              <Link href="/about" className="text-[#00FF88]">How we review</Link>
            </p>
          </div>

          <SocialShare url={url} title={comp.title} />
        </article>
      </main>
      <Footer />
    </>
  )
}
