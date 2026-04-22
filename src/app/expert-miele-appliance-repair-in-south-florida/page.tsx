import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Miele Appliance Repair in South Florida | Expert Service" },
  description:
    "Professional Miele appliance repair in South Florida. Expert service for Miele refrigerators, dishwashers, ovens, and more. Call (800) 651-4528.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/expert-miele-appliance-repair-in-south-florida/",
  },
  openGraph: {
    title:
      "Expert Miele Appliance Repair in South Florida - Sub-Zero Repair Services",
    description:
      "Professional Miele appliance repair in South Florida. Expert service for Miele refrigerators, dishwashers, ovens, and more. Call (800) 651-4528.",
    url: "https://fivestarappliancerepairpros.com/expert-miele-appliance-repair-in-south-florida/",
  },
};

const brandServices = [
  "Refrigerator Repair",
  "Dishwasher Repair",
  "Oven Repair",
  "Washer Repair",
  "Dryer Repair",
  "Coffee System Repair",
];

export default function MieleBrandPage() {
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
            <span className="text-gray-200">Miele</span>
          </nav>
          <div className="flex items-center gap-6">
            <Image
              src="/images/brands/miele-logo.webp"
              alt="Miele Logo"
              width={120}
              height={60}
              className="h-16 w-auto bg-white/10 rounded-lg p-2"
            />
            <h1 className="text-4xl md:text-5xl font-bold">
              Expert Miele Appliance Repair in South Florida
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-[#64748B] leading-relaxed">
                Miele&apos;s German engineering excellence is evident in every
                appliance they produce, from their precision-built dishwashers
                to their advanced refrigeration systems. When your Miele
                appliance needs repair, our certified technicians provide the
                expert service that matches the quality of your Miele
                investment. We service the full range of Miele appliances
                throughout South Florida.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                Our technicians are trained on the complete Miele product line,
                including refrigerators, dishwashers, ovens, washers, dryers,
                and built-in coffee systems. We understand the sophisticated
                engineering behind Miele&apos;s innovative features and use only
                genuine Miele replacement parts to maintain the exceptional
                performance and longevity these appliances are known for.
              </p>
              <h2 className="text-2xl font-bold text-[#0B1D33] mt-8">
                Services We Offer for Miele
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
                Common Miele Repair Issues We Fix
              </h2>
              <p className="text-[#64748B] leading-relaxed mt-4">
                Miele builds appliances to last 20 years, but electronic
                components and seals still need service over time. The most
                common repair calls we see in South Florida:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#64748B] mt-4">
                <li>
                  <strong>Dishwasher fault codes (F11, F13, F24, F78)</strong>{" "}
                  — drain blockages, circulation pump, heater relay, or
                  control-board issues.
                </li>
                <li>
                  <strong>Washing machine not spinning or draining</strong> —
                  drain pump, motor control unit, or door interlock.
                </li>
                <li>
                  <strong>Oven or steam oven not heating</strong> — element,
                  sensor, or control board replacement.
                </li>
                <li>
                  <strong>Built-in coffee system issues</strong> — brew unit,
                  water pump, grinder, or descaling-system service.
                </li>
                <li>
                  <strong>Dryer not drying</strong> — heat pump, blower
                  motor, or moisture sensor diagnostics.
                </li>
                <li>
                  <strong>MasterCool refrigerator temperature drift</strong> —
                  compressor relay, evaporator fan, or sensor fault.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-[#0B1D33] mt-10">
                Miele Models We Service
              </h2>
              <p className="text-[#64748B] leading-relaxed mt-4">
                We service the full Miele line — <strong>G 7000 series
                dishwashers</strong>, <strong>MasterCool refrigerators and
                freezers</strong>, <strong>W1 washers and T1 heat-pump
                dryers</strong>, <strong>Generation 7000 ovens and steam
                ovens</strong>, and the <strong>CVA built-in coffee
                system</strong>. Parts come directly from Miele USA or
                authorized suppliers, and every repair is backed by a full
                parts-and-labor warranty.
              </p>
            </div>
            <div>
              <div className="bg-[#0387cc] text-white rounded-lg p-6 text-center sticky top-24">
                <h3 className="font-semibold mb-2">Schedule Miele Repair</h3>
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
