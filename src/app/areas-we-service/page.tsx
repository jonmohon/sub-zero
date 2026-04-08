import type { Metadata } from "next";
import Link from "next/link";
import { counties } from "@/data/areas";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.siteUrl },
  { name: "Areas We Service", url: `${BUSINESS.siteUrl}/areas-we-service/` },
]);
const webPageSchema = generateWebPageSchema(
  "Areas We Service",
  "Sub-Zero appliance repair across South Florida. We serve Miami-Dade, Broward, Palm Beach, Monroe, Collier, Martin, and St. Lucie counties.",
  `${BUSINESS.siteUrl}/areas-we-service/`
);

export const metadata: Metadata = {
  title: "Areas We Service - Sub-Zero Repair South Florida",
  description:
    "Sub-Zero appliance repair across South Florida. We serve Miami-Dade, Broward, Palm Beach, Monroe, Collier, Martin, and St. Lucie counties.",
  alternates: {
    canonical: "https://fivestarappliancerepairpros.com/areas-we-service/",
  },
};

export default function AreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Areas We Service
          </h1>
          <p className="text-lg text-gray-300">
            Sub-Zero appliance repair across South Florida — 7 counties and 80+
            cities.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {counties.map((county) => (
              <div
                key={county.slug}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-6"
              >
                <h2 className="text-xl font-bold text-[#0B1D33] mb-4">
                  <Link
                    href={`/areas-we-service/${county.slug}`}
                    className="hover:text-[#00B4D8] transition-colors"
                  >
                    {county.name}
                  </Link>
                </h2>
                <ul className="space-y-1">
                  {county.cities.map((city) => (
                    <li key={city.slug}>
                      <Link
                        href={`/areas-we-service/${county.slug}/${city.slug}`}
                        className="text-sm text-[#64748B] hover:text-[#00B4D8] transition-colors"
                      >
                        {city.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
