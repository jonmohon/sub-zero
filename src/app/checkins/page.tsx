import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Recent Work - Sub-Zero Repair Check-Ins",
  description:
    "See our recent Sub-Zero appliance repair work across South Florida. Real service calls from Miami-Dade, Broward, and Palm Beach counties.",
  alternates: {
    canonical: "https://fivestarappliancerepairpros.com/checkins/",
  },
};

interface EZLocalCheckin {
  page_item_url: string;
  data: {
    Title: string;
    Body: string;
    FeaturedImageURL: string;
    City: string;
    State: string;
    Zip: string;
    CityStateZip: string;
    CreateDate: string;
  };
}

const CHECKIN_URL =
  "https://partners.ezlocal.com/ezlocal/checkins/json.ashx?ProfileID=19064111";
const CACHE_MAX_AGE_MS = 24 * 60 * 60 * 1000; // 24 hours
const CACHE_PATH = path.join(process.cwd(), "checkins-cache.json");

interface CheckinCache {
  lastUpdate: string;
  checkins: EZLocalCheckin[];
}

function readCache(): CheckinCache | null {
  try {
    const raw = fs.readFileSync(CACHE_PATH, "utf-8");
    return JSON.parse(raw) as CheckinCache;
  } catch {
    return null;
  }
}

function writeCache(checkins: EZLocalCheckin[]): void {
  try {
    const cache: CheckinCache = { lastUpdate: new Date().toISOString(), checkins };
    fs.writeFileSync(CACHE_PATH, JSON.stringify(cache), "utf-8");
  } catch {
    // read-only filesystem — silently skip
  }
}

const FALLBACK_CHECKINS: EZLocalCheckin[] = [
  {
    page_item_url: "sub-zero-refrigerator-repair-coral-gables",
    data: {
      Title: "Sub-Zero Refrigerator Repair",
      Body: "<p>Diagnosed and repaired a compressor issue on a Sub-Zero BI-36U built-in refrigerator. Replaced the start relay and capacitor with genuine Sub-Zero parts. Unit restored to optimal cooling temperature within one visit.</p>",
      FeaturedImageURL: "/images/checkins/checkin-coral-gables.webp",
      City: "Coral Gables",
      State: "FL",
      Zip: "33146",
      CityStateZip: "Coral Gables, FL 33146",
      CreateDate: "3/1/2026",
    },
  },
  {
    page_item_url: "sub-zero-ice-maker-repair-fort-lauderdale",
    data: {
      Title: "Sub-Zero Ice Maker Repair",
      Body: "<p>Serviced a Sub-Zero undercounter ice maker that stopped producing ice. Replaced the water inlet valve and cleaned the condenser coils. Ice production fully restored same day.</p>",
      FeaturedImageURL: "/images/checkins/checkin-fort-lauderdale.webp",
      City: "Fort Lauderdale",
      State: "FL",
      Zip: "33301",
      CityStateZip: "Fort Lauderdale, FL 33301",
      CreateDate: "3/10/2026",
    },
  },
  {
    page_item_url: "sub-zero-wine-cooler-repair-boca-raton",
    data: {
      Title: "Sub-Zero Wine Cooler Repair",
      Body: "<p>Repaired temperature fluctuation issue on a Sub-Zero wine storage unit. Replaced the thermistor sensor and recalibrated the temperature control board. Both zones now maintaining proper temperatures.</p>",
      FeaturedImageURL: "/images/checkins/checkin-boca-raton.webp",
      City: "Boca Raton",
      State: "FL",
      Zip: "33432",
      CityStateZip: "Boca Raton, FL 33432",
      CreateDate: "2/14/2026",
    },
  },
  {
    page_item_url: "sub-zero-freezer-repair-naples",
    data: {
      Title: "Sub-Zero Freezer Repair",
      Body: "<p>Addressed frost buildup in a Sub-Zero 700 series freezer column. Replaced the defrost timer and heater assembly. Freezer now cycling properly with no excess frost.</p>",
      FeaturedImageURL: "/images/checkins/checkin-naples.webp",
      City: "Naples",
      State: "FL",
      Zip: "34102",
      CityStateZip: "Naples, FL 34102",
      CreateDate: "2/20/2026",
    },
  },
  {
    page_item_url: "marine-refrigeration-repair-key-largo",
    data: {
      Title: "Marine Refrigeration Repair",
      Body: "<p>Dockside service call for a Sub-Zero marine refrigeration system. Repaired a refrigerant leak and recharged the system. Unit tested and running at proper operating temperatures.</p>",
      FeaturedImageURL: "/images/checkins/checkin-key-largo.webp",
      City: "Key Largo",
      State: "FL",
      Zip: "33037",
      CityStateZip: "Key Largo, FL 33037",
      CreateDate: "1/15/2026",
    },
  },
  {
    page_item_url: "sub-zero-refrigerator-maintenance-west-palm-beach",
    data: {
      Title: "Sub-Zero Refrigerator Maintenance",
      Body: "<p>Completed preventive maintenance on a dual Sub-Zero refrigerator and freezer column setup. Cleaned condenser coils, inspected door gaskets, checked temperature calibration, and replaced the water filter.</p>",
      FeaturedImageURL: "/images/checkins/checkin-west-palm-beach.webp",
      City: "West Palm Beach",
      State: "FL",
      Zip: "33401",
      CityStateZip: "West Palm Beach, FL 33401",
      CreateDate: "1/28/2026",
    },
  },
];

async function fetchRemote(): Promise<EZLocalCheckin[] | null> {
  try {
    const res = await fetch(CHECKIN_URL);
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

async function getCheckins(): Promise<EZLocalCheckin[]> {
  // Cache file is always seeded — read it first
  const cache = readCache() ?? { lastUpdate: new Date(0).toISOString(), checkins: FALLBACK_CHECKINS };
  const age = Date.now() - new Date(cache.lastUpdate).getTime();

  if (age < CACHE_MAX_AGE_MS) {
    // Fresh — serve cache immediately, no network call
    return cache.checkins;
  }

  // Stale — try to refresh
  const fresh = await fetchRemote();
  if (fresh) {
    writeCache(fresh); // no-op if FS is read-only (e.g. Vercel)
    return fresh;
  }

  // Remote failed — serve stale cache rather than nothing
  return cache.checkins;
}

export default async function CheckinsPage() {
  const checkins = await getCheckins();

  return (
    <>
      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Recent Work</h1>
          <p className="text-lg text-gray-300">
            See our latest Sub-Zero appliance repair check-ins from across South
            Florida.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {checkins.length === 0 ? (
            <p className="text-center text-gray-500 py-12">
              No check-ins available at this time.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {checkins.map((checkin) => (
                <article
                  key={checkin.page_item_url}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                >
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CheckInAction",
                        agent: {
                          "@type": "Organization",
                          name: BUSINESS.name,
                          telephone: BUSINESS.phone,
                          address: {
                            "@type": "PostalAddress",
                            streetAddress: BUSINESS.address.street,
                            addressLocality: BUSINESS.address.city,
                            addressRegion: BUSINESS.address.stateShort,
                            postalCode: BUSINESS.address.zip,
                          },
                        },
                        location: {
                          "@type": "Place",
                          address: {
                            "@type": "PostalAddress",
                            addressLocality: checkin.data.City,
                            addressRegion: checkin.data.State,
                            postalCode: checkin.data.Zip,
                            addressCountry: "US",
                          },
                        },
                      }),
                    }}
                  />
                  {checkin.data.FeaturedImageURL && (
                    <div className="h-48 bg-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={checkin.data.FeaturedImageURL}
                        alt={checkin.data.Title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <span>{checkin.data.CreateDate}</span>
                      <span>|</span>
                      <span>{checkin.data.CityStateZip}</span>
                    </div>
                    <h2 className="text-lg font-bold text-[#0B1D33] mb-3">
                      {checkin.data.Title}
                    </h2>
                    <div
                      className="text-sm text-[#64748B] leading-relaxed prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: checkin.data.Body }}
                    />
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <div className="bg-[#0387cc] text-white rounded-lg p-8 inline-block">
              <h2 className="text-xl font-bold mb-2">
                Need Sub-Zero Repair Service?
              </h2>
              <p className="text-gray-300 mb-4">
                Same-day service available across South Florida
              </p>
              <a
                href="tel:+18006514528"
                className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Call (800) 651-4528
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
