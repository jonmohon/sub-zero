import { BUSINESS } from "./constants";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sub-Zero Repair Company",
    telephone: BUSINESS.phoneSchema,
    address: {
      "@type": "PostalAddress",
      name: BUSINESS.schemaAddress.name,
      addressLocality: BUSINESS.schemaAddress.city,
      addressRegion: BUSINESS.schemaAddress.state,
      postalCode: BUSINESS.schemaAddress.zip,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHours: BUSINESS.hoursSchema,
    sameAs: [BUSINESS.social.facebook, BUSINESS.social.twitter],
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "HomeAndConstructionBusiness"],
    name: "Fivestar Appliance Repair Pros",
    email: BUSINESS.email,
    telephone: BUSINESS.phoneSchema,
    url: BUSINESS.siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.stateShort,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    areaServed: {
      "@type": "State",
      name: "Florida",
      containedInPlace: {
        "@type": "Country",
        name: "US",
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Appliance Repair Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sub-Zero & Refrigerator Repair",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Ice Maker & Freezer Repair",
          },
        },
      ],
    },
    sameAs: [BUSINESS.social.facebook, BUSINESS.social.twitter],
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateWebPageSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "Sub-Zero Repair Services",
      url: BUSINESS.siteUrl,
    },
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  url: string,
  author: string,
  publishedDate: string,
  modifiedDate?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Sub-Zero Repair Services",
      url: BUSINESS.siteUrl,
    },
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
  };
}

export function generateFAQSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateServiceSchema(
  serviceName: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    url,
    provider: {
      "@type": "LocalBusiness",
      name: "Sub-Zero Repair Company",
      telephone: BUSINESS.phoneSchema,
    },
    areaServed: {
      "@type": "State",
      name: "Florida",
    },
  };
}
