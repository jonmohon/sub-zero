import type { MetadataRoute } from "next";
import { counties, PRIORITY_CITIES } from "@/data/areas";

const BASE_URL = "https://fivestarappliancerepairpros.com";
const LAST_MODIFIED = new Date("2026-04-28");

const blogSlugs = [
  "when-to-call-a-refrigerator-repair-technician",
  "why-diy-refrigerator-repair-isnt-always-the-best-option",
  "reliable-freezer-maintenance-quick-guide",
  "refrigerator-troubleshooting-guide-fix-cooling-issues-now",
  "refrigerator-compressor-repair-complete-diagnostic-and-repair",
  "refrigerator-leaking-water-causes-quick-fixes",
  "emergency-fridge-repair-near-me-24-7-service",
  "ice-maker-repair-service-same-day-fixes-near-you",
  "wine-cooler-repair-specialists-same-day-service",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: `${BASE_URL}/`, lastModified: LAST_MODIFIED, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/services/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${BASE_URL}/services/refrigerator-repair/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/freezer-repair/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/icemaker-repair/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/wine-cooler-repair/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/services/sub-zero-marine-repair/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/areas-we-service/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/brands-we-service/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/sub-zero-appliance-repair-in-south-florida/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/bosch-appliance-repair-in-south-florida/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/viking-appliance-repair-in-south-florida/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/thermador-appliance-repair-in-south-florida/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/expert-miele-appliance-repair-in-south-florida/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/contact/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE_URL}/frequently-asked-questions/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE_URL}/blog/`, lastModified: LAST_MODIFIED, changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE_URL}/ai-profile/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${BASE_URL}/checkins/`, lastModified: LAST_MODIFIED, changeFrequency: "weekly" as const, priority: 0.5 },
    { url: `${BASE_URL}/sitemap/`, lastModified: LAST_MODIFIED, changeFrequency: "monthly" as const, priority: 0.3 },
  ];

  // City list comes from src/data/areas.ts — single source of truth.
  // Adding/removing a city there automatically updates the sitemap.
  const countyPages = counties.map((county) => ({
    url: `${BASE_URL}/areas-we-service/${county.slug}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const cityPages = counties.flatMap((county) =>
    county.cities.map((city) => ({
      url: `${BASE_URL}/areas-we-service/${county.slug}/${city.slug}/`,
      lastModified: PRIORITY_CITIES.includes(city.slug) ? LAST_MODIFIED : undefined,
      changeFrequency: "monthly" as const,
      priority: PRIORITY_CITIES.includes(city.slug)
        ? 0.8
        : county.slug === "miami-dade-county"
          ? 0.7
          : 0.6,
    }))
  );

  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}/`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...countyPages, ...cityPages, ...blogPages];
}
