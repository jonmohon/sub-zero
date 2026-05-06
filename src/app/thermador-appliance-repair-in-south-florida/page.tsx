import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnswerBlock from "@/components/AnswerBlock";

const link = (href: string, text: string) => (
  <Link href={href} className="text-[#0387cc] hover:text-[#0F3460] font-medium">
    {text}
  </Link>
);

export const metadata: Metadata = {
  title: { absolute: "Thermador Appliance Repair in South Florida | Expert Service" },
  description:
    "Expert Thermador appliance repair in South Florida. Certified technicians for all Thermador appliances. Call (800) 651-4528.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/thermador-appliance-repair-in-south-florida/",
  },
  openGraph: {
    title:
      "Thermador Appliance Repair in South Florida - Sub-Zero Repair Services",
    description:
      "Expert Thermador appliance repair in South Florida. Certified technicians for all Thermador appliances. Call (800) 651-4528.",
    url: "https://fivestarappliancerepairpros.com/thermador-appliance-repair-in-south-florida/",
  },
};

const brandServices = [
  "Refrigerator Repair",
  "Freezer Repair",
  "Range Repair",
  "Oven Repair",
  "Cooktop Repair",
];

export default function ThermadorBrandPage() {
  return (
    <>
      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/brands-we-service" className="hover:text-white">
              Brands We Service
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Thermador</span>
          </nav>
          <div className="flex items-center gap-6">
            <Image
              src="/images/brands/thermador-logo.webp"
              alt="Thermador Logo"
              width={120}
              height={60}
              className="h-16 w-auto bg-white/10 rounded-lg p-2"
            />
            <h1 className="text-4xl md:text-5xl font-bold">
              Thermador Appliance Repair in South Florida
            </h1>
          </div>
        </div>
      </section>

      <AnswerBlock
        question="Where can I get Thermador appliances repaired in South Florida?"
        answer="We service the full Thermador Masterpiece and Pro Grand lineup across South Florida — built-in refrigerators, freezer columns, ranges, ovens, cooktops, and warming drawers. Same-day appointments across Miami-Dade, Broward, and Palm Beach. Three decades on luxury appliances, factory-trained technicians, OEM Thermador parts on every truck."
        stats={[
          { value: "Masterpiece + Pro Grand", label: "All Thermador lines" },
          { value: "Same-day", label: "Most appointments" },
          { value: "OEM", label: "Thermador parts stocked" },
          { value: "30+", label: "Years on premium brands" },
        ]}
        sources={[
          { label: "Thermador Owner Resources", url: "https://www.thermador.com/us/owner" },
          { label: "Our service warranty", url: "/warranty/" },
          { label: "Meet our technicians", url: "/technicians/" },
        ]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-[#64748B] leading-relaxed">
                Thermador Masterpiece and Pro Grand built-in refrigerators, freezer columns, ranges, ovens, cooktops, and warming drawers represent the most integrated luxury kitchen architecture on the market — and the Freedom Collection columns sit alongside Sub-Zero in most South Florida luxury kitchens we service. We&apos;ve worked Thermador alongside Sub-Zero, Wolf, and Cove since 1994, dispatching same-day to {link("/areas-we-service/miami-dade-county/coral-gables/", "Coral Gables")}, {link("/areas-we-service/miami-dade-county/aventura/", "Aventura")}, {link("/areas-we-service/broward-county/fort-lauderdale/", "Fort Lauderdale")}, {link("/areas-we-service/palm-beach-county/boca-raton/", "Boca Raton")}, and 75+ more cities across South Florida.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                Thermador&apos;s signature Star Burner cooktops, Freedom Collection refrigerators, and professional wall ovens get OEM-parts-on-every-truck service. The same diagnostic and repair discipline we apply to {link("/services/refrigerator-repair/", "Sub-Zero refrigerator repair")} and {link("/services/wine-cooler-repair/", "wine column service")}. Workmanship warranty in writing on every invoice; OEM parts carry manufacturer warranty on top.
              </p>
              <h2 className="text-2xl font-bold text-[#0B1D33] mt-8">
                Services We Offer for Thermador
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {brandServices.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-[#64748B]">
                    <svg
                      className="w-5 h-5 text-[#00B4D8]"
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
                    {s}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-[#0B1D33] mt-10">
                Common Thermador Repair Issues We Fix
              </h2>
              <p className="text-[#64748B] leading-relaxed mt-4">
                Thermador&apos;s precision engineering is superb, but the most
                common service calls we handle in South Florida include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#64748B] mt-4">
                <li>
                  <strong>Star burner won&apos;t ignite</strong> — spark
                  module, igniter, or regulator replacement.
                </li>
                <li>
                  <strong>Steam oven error codes</strong> — water reservoir,
                  sensor, or steam-generator diagnostics.
                </li>
                <li>
                  <strong>Refrigerator Freedom column temperature drift</strong>{" "}
                  — thermistor, damper, or control-board issues.
                </li>
                <li>
                  <strong>Induction cooktop cooling fan failures</strong> —
                  coil replacement and touch-screen recalibration.
                </li>
                <li>
                  <strong>Dishwasher Sapphire glow and cycle errors</strong> —
                  heating element, sump pump, and diverter valve service.
                </li>
                <li>
                  <strong>Wine column door alarm</strong> — door seal,
                  hinge, and sensor troubleshooting.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-[#0B1D33] mt-10">
                Thermador Models We Service
              </h2>
              <p className="text-[#64748B] leading-relaxed mt-4">
                Our technicians are trained on every Thermador line, including{" "}
                <strong>Professional and PRD 30/36/48&quot; ranges</strong>,
                the <strong>Freedom Collection</strong> of columns and
                drawers, <strong>Masterpiece and Sapphire dishwashers</strong>,
                <strong> Sensor Dome Steam ovens</strong>, and
                <strong> Star Burner cooktops</strong>. Parts are sourced from
                authorized Thermador suppliers, and every repair is backed by
                a full warranty.
              </p>
            </div>
            <div>
              <div className="bg-[#0387cc] text-white rounded-lg p-6 text-center sticky top-24">
                <h3 className="font-semibold mb-2">
                  Schedule Thermador Repair
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  24/7 availability with same-day service
                </p>
                <a
                  href="tel:+18006514528"
                  className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-md font-semibold transition-colors w-full mb-3"
                >
                  (800) 651-4528
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#00B4D8] px-6 py-3 rounded-md font-semibold transition-colors w-full"
                >
                  Request Service Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
