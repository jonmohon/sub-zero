import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Brands We Service | Sub-Zero Repair Services" },
  description:
    "Factory-trained repair for Sub-Zero, Bosch, Viking, Thermador & Miele appliances across South Florida. Same-day service. Call (800) 651-4528.",
  alternates: {
    canonical: "https://fivestarappliancerepairpros.com/brands-we-service/",
  },
  openGraph: {
    title: "Brands We Service - Sub-Zero Repair Services",
    description:
      "Factory-trained repair for Sub-Zero, Bosch, Viking, Thermador & Miele appliances across South Florida. Same-day service. Call (800) 651-4528.",
    url: "https://fivestarappliancerepairpros.com/brands-we-service/",
  },
};

const brands = [
  {
    name: "Sub-Zero",
    href: "/sub-zero-appliance-repair-in-south-florida",
    logo: "/images/brands/sub-zero-logo.webp",
    description:
      "Factory-trained technicians for all Sub-Zero refrigerators, freezers, wine coolers, ice makers, and marine units.",
  },
  {
    name: "Bosch",
    href: "/bosch-appliance-repair-in-south-florida",
    logo: "/images/brands/bosch-logo.webp",
    description:
      "Expert repair for Bosch refrigerators, dishwashers, ovens, and cooktops with genuine parts.",
  },
  {
    name: "Viking",
    href: "/viking-appliance-repair-in-south-florida",
    logo: "/images/brands/viking-logo.webp",
    description:
      "Professional service for Viking ranges, refrigerators, freezers, ovens, and dishwashers.",
  },
  {
    name: "Thermador",
    href: "/thermador-appliance-repair-in-south-florida",
    logo: "/images/brands/thermador-logo.webp",
    description:
      "Certified Thermador repair for refrigerators, ranges, ovens, cooktops, and more.",
  },
  {
    name: "Miele",
    href: "/expert-miele-appliance-repair-in-south-florida",
    logo: "/images/brands/miele-logo.webp",
    description:
      "Full-service Miele repair for refrigerators, dishwashers, ovens, washers, dryers, and coffee systems.",
  },
];

export default function BrandsWeServicePage() {
  return (
    <>
      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Brands We Service
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            We specialize in repairing luxury and high-end appliance brands. Our
            factory-trained technicians deliver expert service with genuine parts
            for every brand we support.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 p-8 flex flex-col items-center text-center"
              >
                <div className="relative h-20 w-40 mb-6">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-xl font-semibold text-[#0B1D33] group-hover:text-[#00B4D8] transition-colors mb-3">
                  {brand.name}
                </h2>
                <p className="text-[#64748B] text-sm">{brand.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">
            Why Luxury Appliance Owners Trust Us
          </h2>
          <p className="text-[#64748B] leading-relaxed mb-6">
            High-end appliances demand expertise that the average repair shop
            simply doesn&apos;t have. Sub-Zero, Bosch, Viking, Thermador, and
            Miele all use proprietary components, sealed systems, and specialized
            diagnostics that require factory-trained technicians. Our team has
            been repairing these brands for over 30 years, and we invest
            continuously in manufacturer training, diagnostic tools, and
            genuine-parts inventory so the vast majority of repairs are
            completed on the first visit.
          </p>
          <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">
            What You Can Expect
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-[#64748B] mb-6">
            <li>
              <strong>Same-day service</strong> throughout South Florida — no
              extra charges for evenings, weekends, or holidays.
            </li>
            <li>
              <strong>Genuine replacement parts</strong> only, sourced directly
              from the manufacturer or authorized distributors.
            </li>
            <li>
              <strong>Written estimates</strong> before any work begins so
              there are no surprises.
            </li>
            <li>
              <strong>Full warranty</strong> on parts and labor for every
              repair.
            </li>
            <li>
              <strong>Insured, background-checked technicians</strong> who
              respect your home and your appliance.
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Don&apos;t See Your Brand?
          </h2>
          <p className="text-gray-300 mb-8">
            We service many additional luxury appliance brands. Contact us to
            ask about your specific appliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:+18006514528"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#00B4D8] px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              (800) 651-4528
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
