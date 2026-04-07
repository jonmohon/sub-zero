import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { counties } from "@/data/areas";
import { getCityContent, getNearbyAreas, SERVICE_LINKS } from "@/data/city-content";
import { BUSINESS } from "@/lib/constants";
import {
  generateLocalBusinessSchemaForCity,
  generateCityServicesSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

const countiesBySlug = Object.fromEntries(
  counties.map((c) => [c.slug, c])
);

export async function generateStaticParams() {
  const params: { county: string; city: string }[] = [];
  for (const county of counties) {
    for (const city of county.cities) {
      params.push({ county: county.slug, city: city.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ county: string; city: string }>;
}): Promise<Metadata> {
  const { county, city } = await params;
  const countyData = countiesBySlug[county];
  if (!countyData) return {};
  const cityData = countyData.cities.find((c) => c.slug === city);
  if (!cityData) return {};
  const title = `Sub-Zero Appliance Repair ${cityData.name} FL | Same-Day Service`;
  const description = `Expert Sub-Zero refrigerator, freezer, ice maker & wine cooler repair in ${cityData.name}, FL. Same-day service, certified technicians, genuine parts. Call (800) 651-4528.`;
  const url = `${BUSINESS.siteUrl}/areas-we-service/${county}/${city}/`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} - Sub-Zero Repair Services`,
      description,
      url,
    },
    other: {
      "geo.region": "US-FL",
      "geo.placename": `${cityData.name}, FL`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ county: string; city: string }>;
}) {
  const { county, city } = await params;
  const countyData = countiesBySlug[county];
  if (!countyData) notFound();
  const cityData = countyData.cities.find((c) => c.slug === city);
  if (!cityData) notFound();

  const services = [
    { name: "Refrigerator Repair", slug: "refrigerator-repair" },
    { name: "Freezer Repair", slug: "freezer-repair" },
    { name: "Ice Maker Repair", slug: "icemaker-repair" },
    { name: "Wine Cooler Repair", slug: "wine-cooler-repair" },
    { name: "Marine Refrigeration Repair", slug: "sub-zero-marine-repair" },
  ];

  const cityUrl = `${BUSINESS.siteUrl}/areas-we-service/${county}/${city}/`;
  const cityContent = getCityContent(city, cityData.name, countyData.name);
  const nearbyAreas = getNearbyAreas(city, county);

  const localBusinessSchema = generateLocalBusinessSchemaForCity(
    cityData.name,
    countyData.name,
    cityUrl
  );
  const servicesSchema = generateCityServicesSchema(
    cityData.name,
    SERVICE_LINKS.map((s) => ({
      name: `Sub-Zero ${s.name} in ${cityData.name}`,
      description: `Expert Sub-Zero ${s.name.toLowerCase()} in ${cityData.name}, FL. Same-day service with genuine parts.`,
      url: `${BUSINESS.siteUrl}/services/${s.slug}/`,
    }))
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.siteUrl },
    { name: "Areas We Service", url: `${BUSINESS.siteUrl}/areas-we-service/` },
    { name: countyData.name, url: `${BUSINESS.siteUrl}/areas-we-service/${county}/` },
    { name: cityData.name, url: cityUrl },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-br from-[#0387cc] to-[#0F3460] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/areas-we-service" className="hover:text-white">
              Areas We Service
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/areas-we-service/${county}`}
              className="hover:text-white"
            >
              {countyData.name}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">{cityData.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">
            Sub-Zero Appliance Repair in {cityData.name}, FL
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-[#64748B] leading-relaxed">
                Looking for expert Sub-Zero appliance repair in {cityData.name},
                Florida? Our certified technicians provide fast, reliable
                service for all Sub-Zero refrigerators, freezers, ice makers,
                wine coolers, and marine refrigeration systems.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                We offer same-day service in {cityData.name} and throughout{" "}
                {countyData.name} with no extra charges for weekends or
                holidays. Our factory-trained technicians carry genuine Sub-Zero
                parts on every service call, so most repairs are completed in a
                single visit.
              </p>
              <h2 className="text-2xl font-bold text-[#0A2540]">
                Services Available in {cityData.name}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <li key={s.slug} className="flex items-center gap-2 text-[#64748B]">
                    <svg
                      className="w-5 h-5 text-[#00B4D8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <Link href={`/services/${s.slug}`} className="hover:text-[#00B4D8] transition-colors">
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h2 className="text-2xl font-bold text-[#0A2540]">
                Why {cityData.name} Residents Choose Us
              </h2>
              <ul className="space-y-3">
                {[
                  "24/7 availability with no extra charges",
                  "Same-day service with genuine Sub-Zero parts",
                  "Certified technicians with 30+ years experience",
                  "Transparent pricing with written estimates",
                  "Full warranty on all parts and labor",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[#64748B]"
                  >
                    <svg
                      className="w-5 h-5 text-[#00B4D8] mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-gradient-to-br from-[#0387cc] to-[#0F3460] text-white rounded-lg p-6 text-center sticky top-24">
                <h3 className="font-semibold mb-2">
                  Schedule Repair in {cityData.name}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  Same-day service available
                </p>
                <a
                  href="tel:+18006514528"
                  className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-md font-semibold transition-colors w-full mb-3"
                >
                  (800) 651-4528
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#00B4D8] px-6 py-3 rounded-md font-semibold transition-colors w-full"
                >
                  Request Service Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {cityContent.map((item) => (
              <div key={item.slug}>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-3">
                  {item.heading}
                </h2>
                <p className="text-[#64748B] leading-relaxed mb-3">
                  {item.paragraph}
                </p>
                <Link
                  href={`/services/${item.slug}`}
                  className="text-[#00B4D8] hover:text-[#0A2540] font-medium transition-colors"
                >
                  Learn more about {item.service} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {nearbyAreas.length > 0 && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-6">
              Nearby Service Areas
            </h2>
            <div className="flex flex-wrap gap-3">
              {nearbyAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/areas-we-service/${area.countySlug}/${area.slug}`}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-md text-[#64748B] hover:text-[#00B4D8] hover:border-[#00B4D8] transition-colors"
                >
                  {area.name}, FL
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
