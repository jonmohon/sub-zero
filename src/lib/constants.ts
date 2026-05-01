export const BUSINESS = {
  name: "Sub-Zero Repair Services",
  legalName: "Sub-Zero Repair Company",
  phone: "(800) 651-4528",
  phoneHref: "tel:+18006514528",
  phoneSchema: "+1 800 651 4528",
  secondaryPhone: "(800) 706-2180",
  email: "info@fivestarappliancerepairpros.com",
  address: {
    street: "1600 Ponce De Leon Blvd 10th Floor Suite 64",
    city: "Coral Gables",
    state: "Florida",
    stateShort: "FL",
    zip: "33134",
    country: "US",
  },
  schemaAddress: {
    name: "Sub-Zero Repair Company",
    street: "1600 Ponce De Leon Blvd 10th Floor Suite 64",
    city: "Coral Gables",
    state: "FL",
    zip: "33134",
    country: "US",
  },
  geo: {
    latitude: 25.7462141,
    longitude: -80.33623209999999,
  },
  hours: "24/7, 365 Days a Year",
  hoursSchema: "Mo-Su 00:00-23:59",
  social: {
    facebook: "https://facebook.com/subzeroservicecenters/",
    twitter: "https://x.com/SubZeroRepairFL",
    // Google Business Profile — short share link + durable kgmid entity URL.
    // Both included in sameAs so Google binds the site to this GBP entry.
    googleBusinessProfile: "https://share.google/BkcjqPpGmWdjZ43mR",
    googleKgmid: "https://www.google.com/search?kgmid=/g/11yhkmz6vr",
  },
  siteUrl: "https://fivestarappliancerepairpros.com",
  foundingYear: "1994",
  priceRange: "$$",
  paymentAccepted: "Cash, Credit Card, Debit Card, Check",
  currenciesAccepted: "USD",
  slogan: "South Florida's Trusted Sub-Zero Repair Experts",
  languages: ["English", "Spanish"],
  copyright: `© ${new Date().getFullYear()} Sub-Zero Repair Company. All Rights Reserved.`,
  // Google Business Profile aggregate rating. Set to real values from the GBP
  // dashboard so AggregateRating schema renders. Leave as null to omit (never
  // ship fabricated numbers — Google penalizes that).
  rating: {
    value: null as number | null,
    reviewCount: null as number | null,
  },
  // Trustindex widget ID for the embedded Google Reviews section.
  // Sign up at trustindex.io (free), connect GBP, create a "Google Reviews"
  // widget, paste the ID here. Until set, the section renders a clear "coming
  // soon" placeholder for visitors.
  trustindexWidgetId: null as string | null,
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Sub-Zero Refrigerator Repair", href: "/services/refrigerator-repair" },
      { label: "Sub-Zero Freezer Repair", href: "/services/freezer-repair" },
      { label: "Sub-Zero Ice Maker Repair", href: "/services/icemaker-repair" },
      { label: "Sub-Zero Wine Cooler Repair", href: "/services/wine-cooler-repair" },
      { label: "Sub-Zero Marine Repair", href: "/services/sub-zero-marine-repair" },
    ],
  },
  {
    label: "Areas We Service",
    href: "/areas-we-service",
    children: [
      { label: "Miami-Dade County", href: "/areas-we-service/miami-dade-county" },
      { label: "Broward County", href: "/areas-we-service/broward-county" },
      { label: "Palm Beach County", href: "/areas-we-service/palm-beach-county" },
      { label: "Monroe County", href: "/areas-we-service/monroe-county" },
      { label: "Collier County", href: "/areas-we-service/collier-county" },
      { label: "Martin County", href: "/areas-we-service/martin-county" },
      { label: "St. Lucie County", href: "/areas-we-service/st-lucie-county" },
    ],
  },
  {
    label: "Brands We Service",
    href: "/brands-we-service",
    children: [
      { label: "Sub-Zero", href: "/sub-zero-appliance-repair-in-south-florida" },
      { label: "Bosch", href: "/bosch-appliance-repair-in-south-florida" },
      { label: "Viking", href: "/viking-appliance-repair-in-south-florida" },
      { label: "Thermador", href: "/thermador-appliance-repair-in-south-florida" },
      { label: "Miele", href: "/expert-miele-appliance-repair-in-south-florida" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/frequently-asked-questions" },
  { label: "Contact", href: "/contact" },
] as const;
