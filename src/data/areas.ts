export interface City {
  name: string;
  slug: string;
}

export interface County {
  name: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  cities: City[];
}

export const PRIORITY_CITIES = [
  // Original priority set (unique paragraphs in city-content.ts)
  "miami",
  "key-biscayne",
  "miami-beach",
  "pinecrest",
  "indian-creek-village",
  "fisher-island",
  "sunny-isles-beach",
  "key-largo",
  // Second wave: high-demand luxury markets with unique paragraphs
  "boca-raton",
  "fort-lauderdale",
  "naples",
  "aventura",
  "coral-gables",
  "doral",
  "weston",
  "jupiter",
  "palm-beach-gardens",
  "west-palm-beach",
  "delray-beach",
  "hollywood",
  "stuart",
  "marco-island",
  "palm-beach",
];

export const counties: County[] = [
  {
    name: "Miami-Dade County",
    slug: "miami-dade-county",
    metaTitle: "Sub-Zero Repair Miami-Dade County, FL | Same-Day Service",
    metaDescription: "Expert Sub-Zero appliance repair in Miami-Dade County, FL. Same-day service for refrigerators, freezers, ice makers, and more. Call (800) 651-4528.",
    cities: [
      { name: "Aventura", slug: "aventura" },
      { name: "Bal Harbour", slug: "bal-harbour" },
      { name: "Bay Harbor Islands", slug: "bay-harbor-islands" },
      { name: "Coral Gables", slug: "coral-gables" },
      { name: "Cutler Bay", slug: "cutler-bay" },
      { name: "Doral", slug: "doral" },
      { name: "Fisher Island", slug: "fisher-island" },
      { name: "Golden Beach", slug: "golden-beach" },
      { name: "Indian Creek Village", slug: "indian-creek-village" },
      { name: "Key Biscayne", slug: "key-biscayne" },
      { name: "Miami", slug: "miami" },
      { name: "Miami Beach", slug: "miami-beach" },
      { name: "Miami Lakes", slug: "miami-lakes" },
      { name: "North Bay Village", slug: "north-bay-village" },
      { name: "Palmetto Bay", slug: "palmetto-bay" },
      { name: "Pinecrest", slug: "pinecrest" },
      { name: "South Miami", slug: "south-miami" },
      { name: "Sunny Isles Beach", slug: "sunny-isles-beach" },
      { name: "Surfside", slug: "surfside" },
    ],
  },
  {
    name: "Broward County",
    slug: "broward-county",
    metaTitle: "Sub-Zero Repair Broward County, FL | Same-Day Service",
    metaDescription: "Professional Sub-Zero appliance repair in Broward County, FL. Fast, reliable service with genuine parts. Call (800) 651-4528.",
    cities: [
      { name: "Coconut Creek", slug: "coconut-creek" },
      { name: "Cooper City", slug: "cooper-city" },
      { name: "Coral Springs", slug: "coral-springs" },
      { name: "Davie", slug: "davie" },
      { name: "Deerfield Beach", slug: "deerfield-beach" },
      { name: "Fort Lauderdale", slug: "fort-lauderdale" },
      { name: "Hallandale Beach", slug: "hallandale-beach" },
      { name: "Hollywood", slug: "hollywood" },
      { name: "Lauderdale-by-the-Sea", slug: "lauderdale-by-the-sea" },
      { name: "Lighthouse Point", slug: "lighthouse-point" },
      { name: "Margate", slug: "margate" },
      { name: "Miramar", slug: "miramar" },
      { name: "Parkland", slug: "parkland" },
      { name: "Pembroke Pines", slug: "pembroke-pines" },
      { name: "Plantation", slug: "plantation" },
      { name: "Pompano Beach", slug: "pompano-beach" },
      { name: "Southwest Ranches", slug: "southwest-ranches" },
      { name: "Sunrise", slug: "sunrise" },
      { name: "Tamarac", slug: "tamarac" },
      { name: "Weston", slug: "weston" },
    ],
  },
  {
    name: "Palm Beach County",
    slug: "palm-beach-county",
    metaTitle: "Sub-Zero Repair Palm Beach County, FL | Same-Day Service",
    metaDescription: "Expert Sub-Zero appliance repair in Palm Beach County, FL. Same-day service with certified technicians. Call (800) 651-4528.",
    cities: [
      { name: "Boca Raton", slug: "boca-raton" },
      { name: "Boynton Beach", slug: "boynton-beach" },
      { name: "Delray Beach", slug: "delray-beach" },
      { name: "Highland Beach", slug: "highland-beach" },
      { name: "Juno Beach", slug: "juno-beach" },
      { name: "Jupiter", slug: "jupiter" },
      { name: "North Palm Beach", slug: "north-palm-beach" },
      { name: "Ocean Ridge", slug: "ocean-ridge" },
      { name: "Palm Beach", slug: "palm-beach" },
      { name: "Palm Beach Gardens", slug: "palm-beach-gardens" },
      { name: "Riviera Beach", slug: "riviera-beach" },
      { name: "Tequesta", slug: "tequesta" },
      { name: "Wellington", slug: "wellington" },
      { name: "West Palm Beach", slug: "west-palm-beach" },
    ],
  },
  {
    name: "Monroe County",
    slug: "monroe-county",
    metaTitle: "Sub-Zero Repair Monroe County & Florida Keys | Same-Day Service",
    metaDescription: "Sub-Zero appliance repair in Monroe County, FL including the Florida Keys. Call (800) 651-4528.",
    cities: [
      { name: "Islamorada", slug: "islamorada" },
      { name: "Key Colony Beach", slug: "key-colony-beach" },
      { name: "Key Largo", slug: "key-largo" },
    ],
  },
  {
    name: "Collier County",
    slug: "collier-county",
    metaTitle: "Sub-Zero Repair Collier County & Naples, FL | Same-Day",
    metaDescription: "Professional Sub-Zero appliance repair in Collier County, FL including Naples. Call (800) 651-4528.",
    cities: [
      { name: "Marco Island", slug: "marco-island" },
      { name: "Naples", slug: "naples" },
    ],
  },
  {
    name: "Martin County",
    slug: "martin-county",
    metaTitle: "Sub-Zero Repair Martin County, FL | Same-Day Service",
    metaDescription: "Expert Sub-Zero appliance repair in Martin County, FL. Call (800) 651-4528 for same-day service.",
    cities: [
      { name: "Palm City", slug: "palm-city" },
      { name: "Sewall's Point", slug: "sewalls-point" },
      { name: "Stuart", slug: "stuart" },
    ],
  },
  {
    name: "St. Lucie County",
    slug: "st-lucie-county",
    metaTitle: "Sub-Zero Repair St. Lucie County, FL | Same-Day Service",
    metaDescription: "Professional Sub-Zero appliance repair in St. Lucie County, FL. Call (800) 651-4528.",
    cities: [
      { name: "Fort Pierce", slug: "fort-pierce" },
      { name: "Port St. Lucie", slug: "port-st-lucie" },
    ],
  },
];

/**
 * Priority city link data — used by Footer, homepage ServiceAreasSection,
 * and service pages to ensure the 23 priority cities get strong internal
 * link signals from every page on the site. Order matches PRIORITY_CITIES.
 */
export interface PriorityCityLink {
  name: string;
  slug: string;
  countySlug: string;
  countyName: string;
  href: string;
}

export function getPriorityCityLinks(): PriorityCityLink[] {
  const result: PriorityCityLink[] = [];
  for (const slug of PRIORITY_CITIES) {
    for (const county of counties) {
      const city = county.cities.find((c) => c.slug === slug);
      if (city) {
        result.push({
          name: city.name,
          slug: city.slug,
          countySlug: county.slug,
          countyName: county.name,
          href: `/areas-we-service/${county.slug}/${city.slug}/`,
        });
        break;
      }
    }
  }
  return result;
}

/**
 * Cities that previously had pages but were culled because they were
 * tiny CDPs, sub-villages, or neighborhoods of cities we already cover.
 * Each of these URLs now 301-redirects to its parent county page (see
 * next.config.ts) so any external links or stale Google index entries
 * preserve equity rather than 404'ing.
 */
export const CULLED_CITY_REDIRECTS: { county: string; city: string }[] = [
  // Miami-Dade
  { county: "miami-dade-county", city: "biscayne-park" },
  { county: "miami-dade-county", city: "el-portal" },
  // Broward
  { county: "broward-county", city: "hillsboro-beach" },
  { county: "broward-county", city: "sea-ranch-lakes" },
  // Palm Beach
  { county: "palm-beach-county", city: "atlantis" },
  { county: "palm-beach-county", city: "golf" },
  { county: "palm-beach-county", city: "manalapan" },
  // Monroe (sub-areas of Key Largo)
  { county: "monroe-county", city: "north-key-largo" },
  { county: "monroe-county", city: "tavernier" },
  // Collier (Naples-area neighborhoods/developments)
  { county: "collier-county", city: "goodland" },
  { county: "collier-county", city: "island-walk" },
  { county: "collier-county", city: "lely-resort" },
  { county: "collier-county", city: "naples-manor" },
  { county: "collier-county", city: "pelican-bay" },
  { county: "collier-county", city: "pine-ridge" },
  { county: "collier-county", city: "vineyards" },
  // Martin
  { county: "martin-county", city: "rio" },
  // St. Lucie
  { county: "st-lucie-county", city: "saint-lucie" },
  { county: "st-lucie-county", city: "white-city" },
];
