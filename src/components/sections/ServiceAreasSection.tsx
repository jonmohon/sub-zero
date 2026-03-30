import Link from "next/link";

const areas = [
  { name: "Broward County", href: "/areas-we-service/broward-county" },
  { name: "Collier County", href: "/areas-we-service/collier-county" },
  { name: "Miami-Dade County", href: "/areas-we-service/miami-dade-county" },
  { name: "Palm Beach County", href: "/areas-we-service/palm-beach-county" },
  { name: "Martin County", href: "/areas-we-service/martin-county" },
  { name: "Monroe County", href: "/areas-we-service/monroe-county" },
  { name: "St. Lucie County", href: "/areas-we-service/st-lucie-county" },
];

export default function ServiceAreasSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-[#0099CC] font-semibold uppercase tracking-wider text-sm mb-2">
          Service Areas
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#152232] mb-8">
          Proudly Serving South Florida
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3">
          {areas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className="inline-flex items-center gap-1.5 text-[#0099CC] hover:text-[#0077a3] font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {area.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
