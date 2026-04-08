import Link from "next/link";
import { PRIORITY_CITIES, counties } from "@/data/areas";

const priorityCityData = counties
  .flatMap((county) =>
    county.cities
      .filter((city) => PRIORITY_CITIES.includes(city.slug))
      .map((city) => ({ ...city, countySlug: county.slug }))
  );

const countyLinks = counties.map((c) => ({
  name: c.name,
  slug: c.slug,
}));

export default function ServiceAreasGrid({
  serviceType,
}: {
  serviceType: string;
}) {
  return (
    <section className="py-12 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#0B1D33] mb-6">
          Areas We Serve for {serviceType}
        </h2>
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#0B1D33] mb-4">
            Top Service Areas
          </h3>
          <div className="flex flex-wrap gap-3">
            {priorityCityData.map((city) => (
              <Link
                key={city.slug}
                href={`/areas-we-service/${city.countySlug}/${city.slug}`}
                className="px-4 py-2 bg-white border border-gray-200 rounded-md text-[#64748B] hover:text-[#00B4D8] hover:border-[#00B4D8] transition-colors text-sm"
              >
                {city.name}, FL
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[#0B1D33] mb-4">
            Service by County
          </h3>
          <div className="flex flex-wrap gap-3">
            {countyLinks.map((county) => (
              <Link
                key={county.slug}
                href={`/areas-we-service/${county.slug}`}
                className="px-4 py-2 bg-white border border-gray-200 rounded-md text-[#64748B] hover:text-[#00B4D8] hover:border-[#00B4D8] transition-colors text-sm"
              >
                {county.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
