import Image from "next/image";
import Link from "next/link";

const servicesList = [
  {
    title: "Refrigerator Repair",
    href: "/services/refrigerator-repair",
    image: "/images/services/refrigerator-repair.webp",
    description: "Expert repair services for all Sub-Zero refrigerator models with genuine parts and same-day service.",
  },
  {
    title: "Freezer Repair",
    href: "/services/freezer-repair",
    image: "/images/services/freezer-repair.webp",
    description: "Professional freezer repair for all Sub-Zero freezer models. Quick diagnostics and reliable fixes.",
  },
  {
    title: "Ice Maker Repair",
    href: "/services/icemaker-repair",
    image: "/images/services/icemaker-repair.webp",
    description: "Specialized ice maker repair for Sub-Zero units. From low ice production to complete breakdowns.",
  },
  {
    title: "Wine Cooler Repair",
    href: "/services/wine-cooler-repair",
    image: "/images/services/wine-cooler-repair.webp",
    description: "Protect your wine collection with expert Sub-Zero wine cooler repair and temperature calibration.",
  },
  {
    title: "Marine Refrigeration Repair",
    href: "/services/sub-zero-marine-repair",
    image: "/images/services/marine-repair.webp",
    description: "Specialized marine refrigeration repair for Sub-Zero units on boats and yachts throughout South Florida.",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-br from-[#0099CC] to-[#0077a3] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-white/80 font-semibold uppercase tracking-wider mb-2 text-center">Our Services</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Comprehensive Sub-Zero Repair Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-white/80 text-sm">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
