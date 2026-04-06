import type { MetadataRoute } from "next";
import { PRIORITY_CITIES } from "@/data/areas";

const BASE_URL = "https://fivestarappliancerepairpros.com";
const LAST_MODIFIED = new Date("2026-04-06");

const countyCities: Record<string, string[]> = {
  "miami-dade-county": ["aventura", "bal-harbour", "bay-harbor-islands", "biscayne-park", "coral-gables", "cutler-bay", "doral", "el-portal", "fisher-island", "golden-beach", "indian-creek-village", "key-biscayne", "miami", "miami-beach", "miami-lakes", "north-bay-village", "palmetto-bay", "pinecrest", "south-miami", "sunny-isles-beach", "surfside"],
  "broward-county": ["coconut-creek", "cooper-city", "coral-springs", "davie", "deerfield-beach", "fort-lauderdale", "hallandale-beach", "hillsboro-beach", "hollywood", "lauderdale-by-the-sea", "lighthouse-point", "margate", "miramar", "parkland", "pembroke-pines", "plantation", "pompano-beach", "sea-ranch-lakes", "southwest-ranches", "sunrise", "tamarac", "weston"],
  "palm-beach-county": ["atlantis", "boca-raton", "boynton-beach", "delray-beach", "golf", "highland-beach", "juno-beach", "jupiter", "manalapan", "north-palm-beach", "ocean-ridge", "palm-beach", "palm-beach-gardens", "riviera-beach", "tequesta", "wellington", "west-palm-beach"],
  "monroe-county": ["islamorada", "key-colony-beach", "key-largo", "north-key-largo", "tavernier"],
  "collier-county": ["goodland", "island-walk", "lely-resort", "marco-island", "naples", "naples-manor", "pelican-bay", "pine-ridge", "vineyards"],
  "martin-county": ["palm-city", "rio", "sewalls-point", "stuart"],
  "st-lucie-county": ["fort-pierce", "port-st-lucie", "saint-lucie", "white-city"],
};

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
  ];

  const countyPages = Object.keys(countyCities).map((county) => ({
    url: `${BASE_URL}/areas-we-service/${county}/`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const cityPages = Object.entries(countyCities).flatMap(([county, cities]) =>
    cities.map((city) => ({
      url: `${BASE_URL}/areas-we-service/${county}/${city}/`,
      lastModified: PRIORITY_CITIES.includes(city) ? LAST_MODIFIED : undefined,
      changeFrequency: "monthly" as const,
      priority: PRIORITY_CITIES.includes(city) ? 0.8 : county === "miami-dade-county" ? 0.7 : 0.6,
    }))
  );

  const blogPages = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...countyPages, ...cityPages, ...blogPages];
}
