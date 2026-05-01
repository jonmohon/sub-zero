import { BUSINESS } from "./constants";

function aggregateRating() {
  if (BUSINESS.rating.value == null || BUSINESS.rating.reviewCount == null) {
    return undefined;
  }
  return {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.rating.value,
    reviewCount: BUSINESS.rating.reviewCount,
    bestRating: 5,
    worstRating: 1,
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${BUSINESS.siteUrl}/#business`,
    name: "Sub-Zero Repair Company",
    alternateName: "Fivestar Appliance Repair Pros",
    url: BUSINESS.siteUrl,
    telephone: BUSINESS.phoneSchema,
    email: BUSINESS.email,
    image: `${BUSINESS.siteUrl}/images/logo.webp`,
    logo: `${BUSINESS.siteUrl}/images/logo.webp`,
    aggregateRating: aggregateRating(),
    address: {
      "@type": "PostalAddress",
      name: BUSINESS.schemaAddress.name,
      streetAddress: BUSINESS.schemaAddress.street,
      addressLocality: BUSINESS.schemaAddress.city,
      addressRegion: BUSINESS.schemaAddress.state,
      postalCode: BUSINESS.schemaAddress.zip,
      addressCountry: BUSINESS.schemaAddress.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    foundingDate: BUSINESS.foundingYear,
    priceRange: BUSINESS.priceRange,
    paymentAccepted: BUSINESS.paymentAccepted,
    currenciesAccepted: BUSINESS.currenciesAccepted,
    slogan: BUSINESS.slogan,
    areaServed: [
      { "@type": "AdministrativeArea", name: "Miami-Dade County, FL" },
      { "@type": "AdministrativeArea", name: "Broward County, FL" },
      { "@type": "AdministrativeArea", name: "Palm Beach County, FL" },
      { "@type": "AdministrativeArea", name: "Monroe County, FL" },
      { "@type": "AdministrativeArea", name: "Collier County, FL" },
      { "@type": "AdministrativeArea", name: "Martin County, FL" },
      { "@type": "AdministrativeArea", name: "St. Lucie County, FL" },
    ],
    knowsAbout: [
      "Sub-Zero refrigerator repair",
      "Sub-Zero freezer repair",
      "Sub-Zero ice maker repair",
      "Sub-Zero wine cooler repair",
      "Sub-Zero marine refrigeration repair",
      "premium appliance repair",
    ],
    sameAs: [
      BUSINESS.social.googleBusinessProfile,
      BUSINESS.social.googleKgmid,
      BUSINESS.social.facebook,
      BUSINESS.social.twitter,
    ],
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "HomeAndConstructionBusiness"],
    "@id": `${BUSINESS.siteUrl}/#organization`,
    name: "Fivestar Appliance Repair Pros",
    legalName: BUSINESS.legalName,
    email: BUSINESS.email,
    telephone: BUSINESS.phoneSchema,
    url: BUSINESS.siteUrl,
    logo: `${BUSINESS.siteUrl}/images/logo.webp`,
    image: `${BUSINESS.siteUrl}/images/logo.webp`,
    foundingDate: BUSINESS.foundingYear,
    aggregateRating: aggregateRating(),
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.stateShort,
      postalCode: BUSINESS.address.zip,
      addressCountry: BUSINESS.address.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phoneSchema,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: BUSINESS.languages,
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
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
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sub-Zero Refrigerator Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sub-Zero Freezer Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sub-Zero Ice Maker Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sub-Zero Wine Cooler Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sub-Zero Marine Refrigeration Repair" } },
      ],
    },
    sameAs: [
      BUSINESS.social.googleBusinessProfile,
      BUSINESS.social.googleKgmid,
      BUSINESS.social.facebook,
      BUSINESS.social.twitter,
    ],
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
  url: string,
  areaServed?: { name: string; type: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    url,
    provider: {
      "@id": `${BUSINESS.siteUrl}/#business`,
    },
    areaServed: areaServed
      ? areaServed.map((a) => ({ "@type": a.type, name: a.name }))
      : { "@type": "State", name: "Florida" },
  };
}

export function generateLocalBusinessSchemaForCity(
  cityName: string,
  countyName: string,
  cityUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    name: "Sub-Zero Repair Company",
    telephone: BUSINESS.phoneSchema,
    email: BUSINESS.email,
    url: cityUrl,
    image: `${BUSINESS.siteUrl}/images/logo.webp`,
    logo: `${BUSINESS.siteUrl}/images/logo.webp`,
    aggregateRating: aggregateRating(),
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: "FL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: {
      "@type": "City",
      name: cityName,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: countyName,
      },
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sub-Zero Appliance Repair Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sub-Zero Refrigerator Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sub-Zero Freezer Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sub-Zero Ice Maker Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sub-Zero Wine Cooler Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sub-Zero Marine Refrigeration Repair" } },
      ],
    },
    sameAs: [
      BUSINESS.social.googleBusinessProfile,
      BUSINESS.social.googleKgmid,
      BUSINESS.social.facebook,
      BUSINESS.social.twitter,
    ],
  };
}

export function generateServiceSchemaForCity(
  serviceName: string,
  description: string,
  serviceUrl: string,
  cityName: string
) {
  return {
    "@type": "Service",
    name: serviceName,
    description,
    url: serviceUrl,
    provider: {
      "@id": `${BUSINESS.siteUrl}/#business`,
    },
    areaServed: {
      "@type": "City",
      name: cityName,
    },
  };
}

export function generateCityServicesSchema(
  cityName: string,
  serviceItems: { name: string; description: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@graph": serviceItems.map((s) =>
      generateServiceSchemaForCity(s.name, s.description, s.url, cityName)
    ),
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sub-Zero Repair Services",
    url: BUSINESS.siteUrl,
  };
}

export function generateItemListSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function generateAIProfileSchema() {
  const businessId = `${BUSINESS.siteUrl}/#business`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...generateLocalBusinessSchema(),
        "@context": undefined,
      },
      {
        ...generateOrganizationSchema(),
        "@context": undefined,
        parentOrganization: { "@id": businessId },
      },
      ...[
        { name: "Sub-Zero Refrigerator Repair", slug: "refrigerator-repair", desc: "Expert repair for all Sub-Zero refrigerator models including built-in, undercounter, and integrated units." },
        { name: "Sub-Zero Freezer Repair", slug: "freezer-repair", desc: "Professional freezer repair for Sub-Zero freezer columns, integrated units, and freestanding models." },
        { name: "Sub-Zero Ice Maker Repair", slug: "icemaker-repair", desc: "Specialized repair for Sub-Zero ice makers including diagnostics, parts replacement, and water line service." },
        { name: "Sub-Zero Wine Cooler Repair", slug: "wine-cooler-repair", desc: "Expert wine cooler repair with precise temperature and humidity calibration for Sub-Zero wine storage units." },
        { name: "Sub-Zero Marine Refrigeration Repair", slug: "sub-zero-marine-repair", desc: "Dockside marine refrigeration repair for Sub-Zero units on boats and yachts throughout South Florida." },
      ].map((s) => ({
        "@type": "Service",
        "@id": `${BUSINESS.siteUrl}/services/${s.slug}/#service`,
        name: s.name,
        description: s.desc,
        url: `${BUSINESS.siteUrl}/services/${s.slug}/`,
        provider: { "@id": businessId },
        areaServed: { "@type": "State", name: "Florida" },
        serviceType: "Appliance Repair",
      })),
    ],
  };
}
