import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generateBreadcrumbSchema, generateItemListSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import AnswerBlock from "@/components/AnswerBlock";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.siteUrl },
  { name: "Services", url: `${BUSINESS.siteUrl}/services/` },
]);
const itemListSchema = generateItemListSchema([
  { name: "Sub-Zero Refrigerator Repair", url: `${BUSINESS.siteUrl}/services/refrigerator-repair/` },
  { name: "Sub-Zero Freezer Repair", url: `${BUSINESS.siteUrl}/services/freezer-repair/` },
  { name: "Sub-Zero Ice Maker Repair", url: `${BUSINESS.siteUrl}/services/icemaker-repair/` },
  { name: "Sub-Zero Wine Cooler Repair", url: `${BUSINESS.siteUrl}/services/wine-cooler-repair/` },
  { name: "Sub-Zero Marine Refrigeration Repair", url: `${BUSINESS.siteUrl}/services/sub-zero-marine-repair/` },
]);

export const metadata: Metadata = {
  title: { absolute: "Sub-Zero Repair Services South Florida | All Models" },
  description:
    "Expert Sub-Zero repair for refrigerators, freezers, ice makers & wine coolers in South Florida. Same-day service, certified technicians, genuine parts.",
  alternates: {
    canonical: "https://fivestarappliancerepairpros.com/services/",
  },
  openGraph: {
    title:
      "Sub-Zero Repair Services South Florida | All Models",
    description:
      "Expert Sub-Zero repair for refrigerators, freezers, ice makers & wine coolers in South Florida. Same-day service, certified technicians, genuine parts.",
    url: "https://fivestarappliancerepairpros.com/services/",
  },
};

const servicesList = [
  {
    title: "Refrigerator Repair",
    href: "/services/refrigerator-repair",
    image: "/images/services/refrigerator-repair.webp",
    description:
      "Expert repair services for all Sub-Zero refrigerator models with genuine parts and same-day service.",
  },
  {
    title: "Freezer Repair",
    href: "/services/freezer-repair",
    image: "/images/services/freezer-repair.webp",
    description:
      "Professional freezer repair for all Sub-Zero freezer models. Quick diagnostics and reliable fixes.",
  },
  {
    title: "Ice Maker Repair",
    href: "/services/icemaker-repair",
    image: "/images/services/icemaker-repair.webp",
    description:
      "Specialized ice maker repair for Sub-Zero units. From low ice production to complete breakdowns.",
  },
  {
    title: "Wine Cooler Repair",
    href: "/services/wine-cooler-repair",
    image: "/images/services/wine-cooler-repair.webp",
    description:
      "Protect your wine collection with expert Sub-Zero wine cooler repair and temperature calibration.",
  },
  {
    title: "Marine Refrigeration Repair",
    href: "/services/sub-zero-marine-repair",
    image: "/images/services/marine-repair-v2.webp",
    description:
      "Specialized marine refrigeration repair for Sub-Zero units on boats and yachts throughout South Florida.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sub-Zero Service and Repair Across South Florida — Five Specialty Lines
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Refrigerators, freezers, ice makers, wine columns, and marine refrigeration —
            handled by factory-trained technicians dispatching same-day across Miami-Dade,
            Broward, and five more counties. Genuine OEM parts on every truck.
          </p>
        </div>
      </section>

      <AnswerBlock
        question="Who repairs Sub-Zero appliances in South Florida?"
        answer="Sub-Zero Repair Company (DBA Fivestar Appliance Repair Pros) services Sub-Zero refrigerators, freezers, ice makers, wine columns, and marine units across all 7 South Florida counties — Miami-Dade, Broward, Palm Beach, Monroe, Collier, Martin, and St. Lucie. Same-day appointments, factory-trained technicians, genuine OEM parts, and 24/7 availability with no holiday or weekend surcharges."
        stats={[
          { value: "30+", label: "Years in business" },
          { value: "82", label: "Cities served" },
          { value: "5", label: "Sub-Zero product lines" },
          { value: "24/7", label: "Same-day service" },
        ]}
        sources={[
          { label: "Sub-Zero Use & Care Guides", url: "https://www.subzero-wolf.com/owners/use-and-care-guides" },
          { label: "Our service warranty", url: "/warranty/" },
          { label: "About our technicians", url: "/technicians/" },
        ]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1D33] mb-4">
            One Specialty, Five Service Lines
          </h2>
          <p className="text-[#64748B] mb-6 max-w-4xl">
            We service Sub-Zero exclusively — no general appliance work, no oven repair, no
            washer-dryer calls. The focus matters because Sub-Zero sealed-system architecture
            doesn&apos;t forgive a generalist. Three decades on this product line means our
            technicians read failure patterns in minutes that take a generalist hours to
            isolate.
          </p>
          <h2 className="text-3xl font-bold text-[#0B1D33] mb-4">
            Same-Day Sub-Zero Repair in South Florida
          </h2>
          <p className="text-[#64748B] mb-12 max-w-4xl">
            Most Miami-Dade, Broward, and Palm Beach appointments get a same-day window when
            booked before noon. Our trucks ship with the OEM parts your model line is
            statistically most likely to need, so most repairs finish on the first visit
            without a follow-up call.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 bg-slate-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0B1D33] group-hover:text-[#00B4D8] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#64748B] text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Schedule Your Repair?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact us today for fast, reliable Sub-Zero appliance repair
            throughout South Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Request Service Call
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
