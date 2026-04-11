import { notFound } from "next/navigation"
import Link from "next/link"
import Script from "next/script"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AffiliateDisclosureBanner } from "@/components/review/affiliate-disclosure-banner"
import { SocialShare } from "@/components/article/social-share"
import { articles } from "@/lib/articles"
import { buildArticleSchema, buildBreadcrumbSchema, schemaToScript } from "@/lib/schema"
import { markdownToHtml } from "@/lib/markdown"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cybertechvault.com"

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  const url = `${siteUrl}/journal/${slug}`
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: { title: article.title, description: article.description, url, type: "article" },
  }
}

function displayAuthor(author: string) {
  return author === "thomas" ? "Thomas" : "Øyvind"
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const url = `${siteUrl}/journal/${slug}`
  const authorDisplay = displayAuthor(article.author)

  const articleSchema = buildArticleSchema({
    title: article.title,
    description: article.description,
    url,
    imageUrl: `${siteUrl}/opengraph-image`,
    datePublished: article.datePublished,
    authorName: authorDisplay,
    siteUrl,
    siteName: "CyberTechVault",
  })

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", url: siteUrl },
    { name: "Journal", url: `${siteUrl}/journal` },
    { name: article.title, url },
  ])

  const relatedArticles = articles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3)

  return (
    <>
      <Script id={`schema-article-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToScript(articleSchema) }} />
      <Script id={`schema-breadcrumb-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaToScript(breadcrumbSchema) }} />

      <Navigation />
      <main className="min-h-screen bg-[#080C10] pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex gap-2 text-sm text-[#94A3B8]">
              <li><Link href="/" className="hover:text-[#00FF88]">Home</Link></li>
              <li>/</li>
              <li><Link href="/journal" className="hover:text-[#00FF88]">Journal</Link></li>
              <li>/</li>
              <li className="text-[#F0FDF4] truncate max-w-[200px]">{article.title}</li>
            </ol>
          </nav>

          <header className="mb-8">
            <span className="text-xs font-mono text-[#A855F7] uppercase tracking-wider">{article.category}</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#F0FDF4] mt-3 mb-4">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#94A3B8]">
              <span>
                By <Link href={`/authors/${article.author}`} className="text-[#00FF88] hover:underline">{authorDisplay}</Link>
              </span>
              <span>&bull;</span>
              <span>{new Date(article.datePublished).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}</span>
              <span>&bull;</span>
              <span>{article.readTime ?? 5} min read</span>
            </div>
          </header>

          <AffiliateDisclosureBanner />

          <div
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-[#F0FDF4] prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:text-[#00FF88]
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-[#94A3B8] prose-p:leading-relaxed
              prose-a:text-[#00FF88] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-[#F0FDF4]
              prose-ul:text-[#94A3B8] prose-ol:text-[#94A3B8]
              prose-li:marker:text-[#00FF88]"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(article.content) }}
          />

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-[#94A3B8]">
              Reviewed by{" "}
              <Link href={`/authors/${article.author}`} className="text-[#00FF88]">{authorDisplay}</Link>
              {" "}&mdash; NorwegianSpark &middot; Last updated:{" "}
              {new Date(article.datePublished).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          <SocialShare url={url} title={article.title} />

          {relatedArticles.length > 0 && (
            <section className="mt-12 pt-8 border-t border-white/10">
              <h2 className="text-xs font-sans uppercase tracking-[0.25em] text-[#94A3B8] mb-6">Continue reading</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArticles.map((ra) => (
                  <Link
                    key={ra.slug}
                    href={`/journal/${ra.slug}`}
                    className="p-4 rounded-xl bg-[#0D1117] border border-[#00FF8820] hover:border-[#00FF8860] transition-all"
                  >
                    <h3 className="text-sm font-bold text-[#F0FDF4] hover:text-[#00FF88] line-clamp-2">{ra.title}</h3>
                    <span className="text-xs text-[#94A3B8] mt-2 block">By {displayAuthor(ra.author)}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
    </>
  )
}
