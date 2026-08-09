import { site, faqs, founders, packages } from "@/lib/content";

/** Emits JSON-LD structured data for SEO + AI Overview citations. */
export function JsonLd() {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${site.url}/#org`,
      name: site.name,
      url: site.url,
      description: site.description,
      slogan: site.tagline,
      email: site.email,
      founder: founders.map((f) => ({ "@type": "Person", name: f.name, jobTitle: f.role })),
      knowsAbout: [
        "Software development",
        "Product design",
        "DevOps",
        "Artificial intelligence integration",
        "Generative AI",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#org` },
    },
    {
      "@type": "ProfessionalService",
      name: site.name,
      image: `${site.url}/opengraph-image`,
      "@id": `${site.url}/#service`,
      url: site.url,
      priceRange: "$$",
      description:
        "End-to-end product studio: design, full-stack development, DevOps, and AI integration for startups.",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Packages",
        itemListElement: packages.map((p) => ({
          "@type": "Offer",
          name: p.name,
          description: p.tagline,
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const data = { "@context": "https://schema.org", "@graph": graph };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
