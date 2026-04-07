import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

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
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "#0A2540",
        backgroundImage: `
          linear-gradient(135deg, #0A2540 0%, #0F3460 50%, #0A2540 100%),
          linear-gradient(rgba(0,180,216,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,180,216,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 40px 40px, 40px 40px",
      }}
    >
      {/* Decorative dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #00B4D8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative geometric shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#00B4D8]/[0.03] blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#00B4D8]/[0.02] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0F3460]/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <p className="text-[#00B4D8] font-semibold uppercase tracking-[0.2em] mb-3 text-center text-sm">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-16">
            Comprehensive Sub-Zero Repair Services
          </h2>
        </ScrollReveal>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesList.map((service, index) => (
            <ScrollReveal key={service.title} animation="scale-in" delay={index * 100}>
              <Link
                href={service.href}
                className="group relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 hover:shadow-[0_20px_60px_rgba(0,180,216,0.2)] hover:-translate-y-2 transition-all duration-500 ease-out block"
              >
                <div className="relative h-80">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/60 to-transparent" />

                  {/* Glassmorphism text area at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="backdrop-blur-md bg-white/[0.07] rounded-xl p-5 border border-white/10">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00B4D8] transition-colors duration-300">{service.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{service.description}</p>
                      <div className="mt-3 flex items-center gap-1.5 text-[#00B4D8] text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span>View {service.title}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover border glow */}
                <div className="absolute inset-0 rounded-2xl border border-white/0 group-hover:border-[#00B4D8]/30 transition-colors duration-500" />
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Detailed Refrigerator Repair Card */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl shadow-black/20 border-l-4 border-[#00B4D8]">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="inline-block mb-4">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00B4D8] bg-[#00B4D8]/10 px-4 py-1.5 rounded-full">Featured Service</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-4">
                  Sub-Zero Refrigerator<br />Repair
                </h3>
                <p className="text-[#64748B] leading-relaxed mb-6">
                  Our team specializes in same-day Sub-Zero refrigerator repairs to keep your appliance running smoothly. Whether it&apos;s a cooling issue, unusual noises, or a leak, our certified technicians are equipped with the skills and tools to handle any problem. We pride ourselves on delivering fast, reliable service, ensuring your refrigerator is restored to optimal performance as quickly as possible.
                </p>
                <ul className="grid grid-cols-2 gap-3 mb-8">
                  {["Same-Day Service", "Genuine Parts", "Certified Technicians", "24/7 Availability"].map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-[#64748B]">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#00B4D8]/10">
                        <svg className="w-3.5 h-3.5 text-[#00B4D8] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services/refrigerator-repair"
                  className="btn-shimmer inline-flex items-center gap-2 bg-[#0A2540] hover:bg-[#0F3460] text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#0A2540]/30 hover:-translate-y-0.5"
                >
                  Sub-Zero Refrigerator Repair Details
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="relative min-h-[300px] lg:min-h-0 overflow-hidden">
                <Image
                  src="/images/sub-zero-repair.webp"
                  alt="Sub-Zero Refrigerator Repair"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
