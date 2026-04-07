import type { Metadata } from "next";
import Link from "next/link";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import ServiceAreasGrid from "@/components/sections/ServiceAreasGrid";

const serviceSchema = generateServiceSchema(
  "Sub-Zero Ice Maker Repair",
  "Expert Sub-Zero ice maker repair in South Florida. Same-day fixes with genuine parts.",
  `${BUSINESS.siteUrl}/services/icemaker-repair/`
);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.siteUrl },
  { name: "Services", url: `${BUSINESS.siteUrl}/services/` },
  { name: "Ice Maker Repair", url: `${BUSINESS.siteUrl}/services/icemaker-repair/` },
]);

export const metadata: Metadata = {
  title: "Sub-Zero Ice Maker Repair South Florida",
  description:
    "Expert Sub-Zero ice maker repair in South Florida. Same-day fixes with genuine parts. Call (800) 651-4528.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/services/icemaker-repair/",
  },
  openGraph: {
    title:
      "Sub-Zero Ice Maker Repair South Florida - Sub-Zero Repair Services",
    description:
      "Expert Sub-Zero ice maker repair in South Florida. Same-day fixes with genuine parts. Call (800) 651-4528.",
    url: "https://fivestarappliancerepairpros.com/services/icemaker-repair/",
  },
};

export default function IceMakerRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-br from-[#0387cc] to-[#0F3460] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Ice Maker Repair</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">
            Sub-Zero Ice Maker Repair in South Florida
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-[#64748B] leading-relaxed">
                A properly functioning ice maker is essential, especially in
                South Florida&apos;s warm climate. When your Sub-Zero ice maker
                stops producing ice or delivers undersized, cloudy, or
                misshapen cubes, our certified technicians can diagnose and
                resolve the issue quickly with same-day service.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                Common Sub-Zero ice maker problems include clogged water lines,
                faulty water inlet valves, malfunctioning motors, defective
                sensors, and thermostat issues. Our technicians carry genuine
                Sub-Zero replacement parts on every service call, allowing us to
                complete most repairs in a single visit without the need for
                follow-up appointments.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                Whether your ice maker is built into your Sub-Zero refrigerator
                or is a standalone unit, we have the expertise to restore full
                ice production. We also provide preventive maintenance services
                to keep your ice maker running efficiently and extend its
                lifespan.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-[#00B4D8]/5 border border-[#00B4D8]/20 rounded-lg p-6">
                <h3 className="font-semibold text-[#0387cc] mb-4">
                  Why Choose Us
                </h3>
                <ul className="space-y-3">
                  {[
                    "Same-Day Service",
                    "Genuine Parts",
                    "Certified Technicians",
                    "24/7 Availability",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 text-[#00B4D8] flex-shrink-0"
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
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#0387cc] to-[#0F3460] text-white rounded-lg p-6 text-center">
                <h3 className="font-semibold mb-2">Need Immediate Help?</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Our technicians are standing by 24/7
                </p>
                <a
                  href="tel:+18006514528"
                  className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-md font-semibold transition-colors w-full"
                >
                  (800) 651-4528
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceAreasGrid serviceType="Ice Maker Repair" />

      <section className="bg-gradient-to-br from-[#0387cc] to-[#0F3460] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Schedule Your Ice Maker Repair Today
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#f89406] hover:bg-[#e08505] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
          >
            Request Service Call
          </Link>
        </div>
      </section>
    </>
  );
}
