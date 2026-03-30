import type { Metadata } from "next";

const SITE_URL = "https://fivestarappliancerepairpros.com";
const SITE_NAME = "Sub-Zero Repair Services";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/logo.webp`;

interface PageMetadataOptions {
  title: string;
  description: string;
  path?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  ogType = "website",
  publishedTime,
  modifiedTime,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: ogType === "article" ? "article" : "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          alt: SITE_NAME,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large" as const,
    },
    verification: {
      google: [
        "rWLGPBjq59xQZREcWcNhjH4ejzYkyLiXVTaPg_YsUHo",
        "vgl2IyvUzNdt4WYXQ8vEINiE2YEO1M8ANLRzMdXKZBA",
      ],
      other: {
        "msvalidate.01": "497566C831E8FDD23DCD2BA9EE408E24",
      },
    },
  };
}
