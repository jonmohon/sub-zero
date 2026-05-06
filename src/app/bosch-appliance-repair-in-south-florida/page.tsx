import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnswerBlock from "@/components/AnswerBlock";

export const metadata: Metadata = {
  title: { absolute: "Bosch Appliance Repair in South Florida | Certified Service" },
  description:
    "Expert Bosch appliance repair in South Florida. Professional service for all Bosch refrigerators and appliances. Call (800) 651-4528.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/bosch-appliance-repair-in-south-florida/",
  },
  openGraph: {
    title:
      "Bosch Appliance Repair in South Florida - Sub-Zero Repair Services",
    description:
      "Expert Bosch appliance repair in South Florida. Professional service for all Bosch refrigerators and appliances. Call (800) 651-4528.",
    url: "https://fivestarappliancerepairpros.com/bosch-appliance-repair-in-south-florida/",
  },
};

const brandServices = [
  "Refrigerator Repair",
  "Freezer Repair",
  "Dishwasher Repair",
  "Oven Repair",
  "Cooktop Repair",
];

export default function BoschBrandPage() {
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
            <span className="text-gray-200">Bosch</span>
          </nav>
          <div className="flex items-center gap-6">
            <Image
              src="/images/brands/bosch-logo.webp"
              alt="Bosch Logo"
              width={120}
              height={60}
              className="h-16 w-auto bg-white/10 rounded-lg p-2"
            />
            <h1 className="text-4xl md:text-5xl font-bold">
              Bosch Appliance Repair in South Florida
            </h1>
          </div>
        </div>
      </section>

      <AnswerBlock
        question="Where can I get Bosch appliances repaired in South Florida?"
        answer="We service the full Bosch luxury appliance lineup across South Florida — Benchmark and 800 Series refrigerators, dishwashers, wall ovens, ranges, cooktops, and warming drawers. Same-day appointments across Miami-Dade, Broward, and Palm Beach. Factory-trained technicians, OEM parts on every truck, and the diagnostic equipment specific to Bosch's German engineering since 1994."
        stats={[
          { value: "Full lineup", label: "Benchmark + 800 Series" },
          { value: "Same-day", label: "Most appointments" },
          { value: "OEM", label: "Bosch parts stocked" },
          { value: "30+", label: "Years on premium brands" },
        ]}
        sources={[
          { label: "Bosch Home Owner Resources", url: "https://www.bosch-home.com/us/owner" },
          { label: "Our service warranty", url: "/warranty/" },
          { label: "Meet our technicians", url: "/technicians/" },
        ]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-[#64748B] leading-relaxed">
                Bosch appliances are renowned for their German engineering,
                precision craftsmanship, and innovative technology. When your
                Bosch appliance needs repair, you deserve technicians who
                understand the sophisticated systems that make Bosch products
                exceptional. Our factory-trained team provides expert Bosch
                repair service throughout South Florida.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                From Bosch refrigerators with VitaFresh technology to their
                whisper-quiet dishwashers and precision cooking appliances, we
                have the knowledge and genuine Bosch parts to restore your
                appliance to peak performance. Our technicians stay current with
                the latest Bosch models and repair techniques.
              </p>
              <h2 className="text-2xl font-bold text-[#0B1D33] mt-8">
                Services We Offer for Bosch
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
                Common Bosch Repair Issues We Fix
              </h2>
              <p className="text-[#64748B] leading-relaxed mt-4">
                Bosch engineering is excellent, but even the best appliances
                eventually need service. The issues we see most often in South
                Florida homes include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#64748B] mt-4">
                <li>
                  <strong>Refrigerator not cooling</strong> — commonly a failing
                  evaporator fan, blocked air path, or thermistor sensor fault.
                </li>
                <li>
                  <strong>Dishwasher not draining</strong> — clogged drain pump,
                  faulty check valve, or damaged drain hose.
                </li>
                <li>
                  <strong>Dishwasher error codes (E24, E09, E15)</strong> —
                  drainage, heating element, or AquaStop leak detection faults.
                </li>
                <li>
                  <strong>Oven not heating to set temperature</strong> — bad
                  bake element, oven sensor out of tolerance, or control-board
                  failure.
                </li>
                <li>
                  <strong>Induction cooktop error codes</strong> — coil
                  diagnostics, cooling fan replacement, and touch-control
                  recalibration.
                </li>
                <li>
                  <strong>Freezer ice buildup</strong> — defrost heater,
                  thermostat, or door gasket issues causing frost.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-[#0B1D33] mt-10">
                Bosch Models We Service
              </h2>
              <p className="text-[#64748B] leading-relaxed mt-4">
                We service every current Bosch line, including{" "}
                <strong>500, 800, and Benchmark series</strong> refrigerators
                and dishwashers, <strong>Bosch 800 and Benchmark wall
                ovens</strong>, and
                Bosch <strong>induction, gas, and electric cooktops</strong>.
                We also support legacy Bosch models and sourcing for harder-to-find
                parts when needed. Every repair uses genuine Bosch replacement
                parts backed by the manufacturer warranty.
              </p>
            </div>
            <div>
              <div className="bg-[#0387cc] text-white rounded-lg p-6 text-center sticky top-24">
                <h3 className="font-semibold mb-2">Schedule Bosch Repair</h3>
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
