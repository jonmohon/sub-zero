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
        <h3 className="text-white/80 font-semibold uppercase tracking-wider mb-2 text-center text-sm">
          Our Services
        </h3>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Comprehensive Sub-Zero Repair Services
        </h2>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                  <p className="text-white/80 text-sm">{service.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Detailed Refrigerator Repair Card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#152232] mb-4">
                Sub-Zero Refrigerator<br />Repair
              </h3>
              <p className="text-[#555555] leading-relaxed mb-6">
                Our team specializes in same-day Sub-Zero refrigerator repairs to keep your appliance running smoothly. Whether it&apos;s a cooling issue, unusual noises, or a leak, our certified technicians are equipped with the skills and tools to handle any problem. We pride ourselves on delivering fast, reliable service, ensuring your refrigerator is restored to optimal performance as quickly as possible.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-6">
                {["Same-Day Service", "Genuine Parts", "Certified Technicians", "24/7 Availability"].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-[#555555]">
                    <svg className="w-5 h-5 text-[#0099CC] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/services/refrigerator-repair"
                className="inline-flex items-center gap-2 bg-[#152232] hover:bg-[#1C3A5E] text-white px-6 py-3 rounded font-semibold text-sm transition-colors"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative min-h-[300px] lg:min-h-0">
              <Image
                src="/images/sub-zero-repair.webp"
                alt="Sub-Zero Refrigerator Repair"
                fill
                className="object-cover rounded-r-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
