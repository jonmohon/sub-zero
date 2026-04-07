import type { Metadata } from "next";
import Link from "next/link";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import ServiceAreasGrid from "@/components/sections/ServiceAreasGrid";

const serviceSchema = generateServiceSchema(
  "Sub-Zero Wine Cooler Repair",
  "Professional Sub-Zero wine cooler repair in South Florida. Protect your wine collection with expert service.",
  `${BUSINESS.siteUrl}/services/wine-cooler-repair/`
);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.siteUrl },
  { name: "Services", url: `${BUSINESS.siteUrl}/services/` },
  { name: "Wine Cooler Repair", url: `${BUSINESS.siteUrl}/services/wine-cooler-repair/` },
]);

export const metadata: Metadata = {
  title: "Sub-Zero Wine Cooler Repair South Florida",
  description:
    "Professional Sub-Zero wine cooler repair in South Florida. Protect your wine collection with our expert service. Call (800) 651-4528.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/services/wine-cooler-repair/",
  },
  openGraph: {
    title:
      "Sub-Zero Wine Cooler Repair South Florida - Sub-Zero Repair Services",
    description:
      "Professional Sub-Zero wine cooler repair in South Florida. Protect your wine collection with our expert service. Call (800) 651-4528.",
    url: "https://fivestarappliancerepairpros.com/services/wine-cooler-repair/",
  },
};

export default function WineCoolerRepairPage() {
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
            <span className="text-gray-200">Wine Cooler Repair</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">
            Sub-Zero Wine Cooler Repair in South Florida
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-[#64748B] leading-relaxed">
                Your wine collection represents a significant investment, and
                proper storage conditions are critical to preserving its value
                and flavor. When your Sub-Zero wine cooler experiences
                temperature fluctuations, compressor issues, or humidity control
                problems, our certified technicians provide expert repair
                service to protect your collection.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                Sub-Zero wine coolers are precision instruments designed to
                maintain exact temperature and humidity levels. Common issues we
                repair include temperature fluctuations between zones, compressor
                and evaporator problems, humidity control malfunctions, worn door
                seals allowing warm air infiltration, and electronic control
                board failures.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                Our technicians understand the delicate balance required for
                optimal wine storage. We use only genuine Sub-Zero replacement
                parts and calibrate every unit after repair to ensure your wines
                are stored at precisely the right temperature and humidity level.
                Same-day emergency service is available to minimize any risk to
                your collection.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-[#00B4D8]/5 border border-[#00B4D8]/20 rounded-lg p-6">
                <h3 className="font-semibold text-[#0A2540] mb-4">
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

      <ServiceAreasGrid serviceType="Wine Cooler Repair" />

      <section className="bg-gradient-to-br from-[#0387cc] to-[#0F3460] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Schedule Your Wine Cooler Repair Today
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
