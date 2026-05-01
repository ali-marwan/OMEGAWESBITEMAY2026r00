export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const SITE = "https://omegacfm.com";

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "OMEGA CFM Building Contracting LLC",
        url: SITE,
        logo: `${SITE}/omega-logo.svg`,
        sameAs: ["https://instagram.com/omega_property_hub"],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+971-56-660-5596",
            contactType: "customer service",
            areaServed: "AE",
            availableLanguage: ["en"]
          }
        ]
      }}
    />
  );
}

export function LocalBusinessJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "OMEGA CFM Building Contracting LLC",
        url: SITE,
        image: `${SITE}/opengraph-image`,
        telephone: "+971-56-660-5596",
        email: "support@omegacfm.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office 501, Alpha Green Tower, JVC",
          addressLocality: "Dubai",
          addressCountry: "AE"
        },
        areaServed: "United Arab Emirates",
        priceRange: "AED"
      }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  slug,
  publishedAt,
  category
}: {
  title: string;
  description: string;
  slug: string;
  publishedAt?: string;
  category: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        articleSection: category,
        datePublished: publishedAt,
        dateModified: publishedAt,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/blog/${slug}` },
        author: { "@type": "Organization", name: "OMEGA CFM" },
        publisher: {
          "@type": "Organization",
          name: "OMEGA CFM",
          logo: { "@type": "ImageObject", url: `${SITE}/omega-logo.svg` }
        }
      }}
    />
  );
}
