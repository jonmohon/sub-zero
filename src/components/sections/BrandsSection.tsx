import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const brandsList = [
  { name: "Bosch", logo: "/images/brands/bosch-logo.webp", href: "/bosch-appliance-repair-in-south-florida" },
  { name: "Viking", logo: "/images/brands/viking-logo.webp", href: "/viking-appliance-repair-in-south-florida" },
  { name: "Thermador", logo: "/images/brands/thermador-logo.webp", href: "/thermador-appliance-repair-in-south-florida" },
  { name: "Miele", logo: "/images/brands/miele-logo.webp", href: "/expert-miele-appliance-repair-in-south-florida" },
  { name: "Sub-Zero", logo: "/images/brands/sub-zero-logo.webp", href: "/sub-zero-appliance-repair-in-south-florida" },
];

export default function BrandsSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-sky-50/40 py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #0A2540 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="flex justify-center mb-6">
            <h2 className="text-3xl font-bold text-[#0A2540] border-[3px] border-[#00B4D8] rounded-lg px-8 py-3 inline-block">
              Brands We Service
            </h2>
          </div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
            We service the finest appliance brands including Bosch, Viking, Thermador, Miele, and Sub-Zero. Our certified technicians are trained to work on all premium appliance brands.
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
          {brandsList.map((brand, index) => (
            <ScrollReveal key={brand.name} animation="scale-in" delay={index * 100}>
              <Link
                href={brand.href}
                className="group flex items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={300}>
          <div className="mt-14 mx-auto max-w-3xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-2xl py-5 px-8 text-center">
            <span className="bg-gradient-to-r from-[#00B4D8] to-[#0A2540] bg-clip-text text-transparent font-bold text-lg">
              Certified Experts &nbsp;|&nbsp; Factory-Trained Technicians &nbsp;|&nbsp; Same-Day Service Available
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
