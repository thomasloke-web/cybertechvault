import { notFound } from "next/navigation"
import Link from "next/link"
import Script from "next/script"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AffiliateDisclosureBanner } from "@/components/review/affiliate-disclosure-banner"
import { TldrBox } from "@/components/review/tldr-box"
import { ProsCons } from "@/components/review/pros-cons"
import { AffiliateCTAButton } from "@/components/review/affiliate-cta-button"
import { SocialShare } from "@/components/article/social-share"
import { reviews } from "@/lib/reviews"
import { buildReviewSchema, buildBreadcrumbSchema, schemaToScript } from "@/lib/schema"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cybertechvault.com"

export async function generateStaticParams() {
  return reviews.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const review = reviews.find((r) => r.slug === slug)
  if (!review) return {}
  const url = `${siteUrl}/reviews/${slug}`
  return {
    title: `${review.name} Review 2026 — CyberTechVault`,
    description: review.verdict,
    alternates: { canonical: url },
    openGraph: { title: `${review.name} Review`, description: review.verdict, url, type: "article" },
  }
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const review = reviews.find((r) => r.slug === slug)
  if (!review) notFound()

  const url = `${siteUrl}/reviews/${slug}`
  const stars = (review.rating / 10) * 5

  const reviewSchema = buildReviewSchema({
    itemName: review.name,
    itemType: "SoftwareApplication",
    rating: stars,
    reviewCount: 1,
    reviewBody: review.verdict,
    url,
    priceRange: review.priceFrom,
  })

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "Categories", url: `${siteUrl}/categories` },
    { name: review.name, url },
  ])

  return (
    <>
      <Script id={`schema-review-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToScript(reviewSchema) }} />
      <Script id={`schema-breadcrumb-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToScript(breadcrumbSchema) }} />

      <Navigation />
      <main className="min-h-screen bg-[#080C10] pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex gap-2 text-sm text-[#94A3B8]">
              <li><Link href="/" className="hover:text-[#00FF88]">Home</Link></li>
              <li>/</li>
              <li><Link href={`/categories/${review.category}`} className="hover:text-[#00FF88]">{review.category}</Link></li>
              <li>/</li>
              <li className="text-[#F0FDF4]">{review.name}</li>
            </ol>
          </nav>

          <header className="mb-8">
            <span className="text-xs font-mono text-[#A855F7] uppercase tracking-wider">{review.category} Review</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#F0FDF4] mt-3 mb-2">
              {review.name} Review <span className="text-[#00FF88]">2026</span>
            </h1>
          </header>

          <AffiliateDisclosureBanner />

          <TldrBox
            productName={review.name}
            rating={review.rating}
            maxRating={10}
            verdict={review.verdict}
            bestFor={review.bestFor}
            notFor={review.notFor}
            priceFrom={review.priceFrom}
            affiliateSlug={review.affiliateSlug}
            affiliateLabel={review.affiliateLabel}
            lastVerified="April 2026"
          />

          <ProsCons pros={review.pros} cons={review.cons} />

          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-[#F0FDF4] prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-[#00FF88]
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-[#94A3B8] prose-p:leading-relaxed
              prose-a:text-[#00FF88] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#F0FDF4]
              prose-ul:text-[#94A3B8] prose-ol:text-[#94A3B8]"
            dangerouslySetInnerHTML={{ __html: review.content }}
          />

          <div className="my-10">
            <AffiliateCTAButton
              slug={review.affiliateSlug}
              label={review.affiliateLabel}
              partnerName={review.name}
              priceFrom={review.priceFrom}
              size="lg"
            />
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-[#94A3B8]">
              Reviewed by <Link href="/authors/thomas" className="text-[#00FF88]">Thomas</Link> — NorwegianSpark ·{" "}
              <Link href="/about" className="text-[#00FF88]">How we review</Link>
            </p>
          </div>

          <SocialShare url={url} title={`${review.name} Review`} />
        </article>
      </main>
      <Footer />
    </>
  )
}
