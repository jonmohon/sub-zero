import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

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
    <section className="relative bg-[#0387cc] py-24 overflow-hidden">

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal animation="fade-up">
          <p className="text-[#00B4D8] font-semibold uppercase tracking-wider text-sm mb-2">
            Service Areas
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Proudly Serving South Florida
          </h2>
          <div className="w-16 h-1 bg-[#00B4D8] mx-auto rounded-full mb-12" />
        </ScrollReveal>

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-4">
          {areas.map((area, index) => (
            <ScrollReveal key={area.name} animation="scale-in" delay={index * 80}>
              <Link
                href={area.href}
                className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-[#00B4D8]/20 hover:border-[#00B4D8]/40 rounded-full px-5 py-2.5 font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,180,216,0.15)] hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 text-[#00B4D8] group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {area.name}
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
