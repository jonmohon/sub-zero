import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { counties } from "@/data/areas";

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
  const title = `Sub-Zero Repair ${cityData.name} FL`;
  const description = `Expert Sub-Zero appliance repair in ${cityData.name}, ${countyData.name}, FL. Same-day service, genuine parts, certified technicians. Call (800) 651-4528.`;
  return {
    title,
    description,
    alternates: {
      canonical: `https://fivestarappliancerepairpros.com/areas-we-service/${county}/${city}/`,
    },
    openGraph: {
      title: `${title} - Sub-Zero Repair Services`,
      description,
      url: `https://fivestarappliancerepairpros.com/areas-we-service/${county}/${city}/`,
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
    "Refrigerator Repair",
    "Freezer Repair",
    "Ice Maker Repair",
    "Wine Cooler Repair",
    "Marine Refrigeration Repair",
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-[#0099CC] to-[#0077a3] text-white py-16">
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
              <p className="text-[#555555] leading-relaxed">
                Looking for expert Sub-Zero appliance repair in {cityData.name},
                Florida? Our certified technicians provide fast, reliable
                service for all Sub-Zero refrigerators, freezers, ice makers,
                wine coolers, and marine refrigeration systems.
              </p>
              <p className="text-[#555555] leading-relaxed">
                We offer same-day service in {cityData.name} and throughout{" "}
                {countyData.name} with no extra charges for weekends or
                holidays. Our factory-trained technicians carry genuine Sub-Zero
                parts on every service call, so most repairs are completed in a
                single visit.
              </p>
              <h2 className="text-2xl font-bold text-[#111111]">
                Services Available in {cityData.name}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-[#555555]">
                    <svg
                      className="w-5 h-5 text-[#0099CC]"
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
                    {s}
                  </li>
                ))}
              </ul>
              <h2 className="text-2xl font-bold text-[#111111]">
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
                    className="flex items-start gap-2 text-[#555555]"
                  >
                    <svg
                      className="w-5 h-5 text-[#0099CC] mt-0.5 flex-shrink-0"
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
              <div className="bg-gradient-to-br from-[#0099CC] to-[#0077a3] text-white rounded-lg p-6 text-center sticky top-24">
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
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0099CC] px-6 py-3 rounded-md font-semibold transition-colors w-full"
                >
                  Request Service Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
