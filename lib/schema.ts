const THOMAS = {
  "@type": "Person",
  name: "Thomas",
  url: "/authors/thomas",
  jobTitle: "Co-founder & Editor",
  worksFor: { "@type": "Organization", name: "NorwegianSpark SA" },
  description: "Former electrician and house builder, co-founder of NorwegianSpark SA. Cybersecurity researcher and tech reviewer.",
  sameAs: ["https://instagram.com/norwegianspark"],
}

const OYVIND = {
  "@type": "Person",
  name: "Øyvind",
  url: "/authors/oyvind",
  jobTitle: "Co-founder",
  worksFor: { "@type": "Organization", name: "NorwegianSpark SA" },
  description: "Former insurance professional and debt management expert, co-founder of NorwegianSpark SA.",
}

export function buildWebSiteSchema(opts: { name: string; url: string; description: string; logoUrl?: string }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: opts.name, url: opts.url, description: opts.description },
      {
        "@type": "Organization",
        name: "NorwegianSpark SA",
        url: opts.url,
        logo: opts.logoUrl ?? `${opts.url}/icon.svg`,
        contactPoint: { "@type": "ContactPoint", email: "norwegianspark@gmail.com", telephone: "+4799737467" },
        sameAs: [
          "https://instagram.com/norwegianspark",
          "https://linkedin.com/company/norwegianspark",
          "https://twitter.com/norwegianspark",
          "https://pinterest.com/norwegianspark",
          "https://vpnglobal.com",
          "https://aivault.zone",
          "https://cognixcore.com",
        ],
      },
    ],
  }
}

export function buildArticleSchema(opts: {
  title: string; description: string; url: string; imageUrl: string;
  datePublished: string; dateModified?: string; authorName: string;
  siteUrl: string; siteName: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    image: { url: opts.imageUrl, width: 1200, height: 630 },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: opts.authorName.toLowerCase().includes("thomas") ? THOMAS : OYVIND,
    publisher: { "@type": "Organization", name: opts.siteName, url: opts.siteUrl },
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
  }
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function buildFaqSchema(questions: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  }
}

export function buildReviewSchema(opts: {
  itemName: string; itemType: string; rating: number; reviewCount: number;
  reviewBody: string; url: string; priceRange?: string; imageUrl?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": opts.itemType,
    name: opts.itemName,
    url: opts.url,
    image: opts.imageUrl,
    priceRange: opts.priceRange,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: opts.rating.toFixed(1),
      bestRating: "5",
      worstRating: "1",
      reviewCount: opts.reviewCount,
    },
    review: {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: opts.rating.toFixed(1), bestRating: "5" },
      author: THOMAS,
      reviewBody: opts.reviewBody,
    },
  }
}

export function buildItemListSchema(items: { name: string; url: string; image?: string }[], listName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
      image: item.image,
    })),
  }
}

export function buildPersonSchema() {
  return [THOMAS, OYVIND].map((p) => ({ "@context": "https://schema.org", ...p }))
}

export function buildAuthorSchema(a: "thomas" | "oyvind") {
  return { "@context": "https://schema.org", ...(a === "thomas" ? THOMAS : OYVIND) }
}

export function schemaToScript(schema: object) {
  return JSON.stringify(schema)
}
