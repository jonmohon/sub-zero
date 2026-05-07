import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnswerBlock from "@/components/AnswerBlock";
import { generateFAQSchema } from "@/lib/schema";

const faqs = [
  {
    question: "What makes Sub-Zero sealed system repairs different from standard repairs?",
    answer:
      "Sub-Zero systems run on precise pressure and refrigerant balance. Even small issues require specialized tools and OEM-level correction.",
  },
  {
    question: "How often should sub-zero maintenance be done?",
    answer:
      "For coastal luxury homes, annual service is recommended to prevent corrosion and catch early micro-leaks.",
  },
  {
    question: "Why do general technicians struggle with Sub-Zero units?",
    answer:
      "Most lack sealed system training, leading to misdiagnosis and temporary fixes that fail under pressure.",
  },
  {
    question: "What is your emergency response time?",
    answer:
      "Critical cases are dispatched immediately, with many same-day repairs depending on location and availability.",
  },
  {
    question: "Do you use OEM parts for repairs?",
    answer:
      "Yes, we use only genuine OEM parts to ensure factory-level performance, compatibility, and long-term reliability.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Sub-Zero Appliance Repair in South Florida" },
  description:
    "Certified Sub-Zero appliance repair in South Florida. Refrigerators, freezers, ice makers, wine coolers, and marine units. Call (800) 651-4528.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/sub-zero-appliance-repair-in-south-florida/",
  },
  openGraph: {
    title:
      "Sub-Zero Appliance Repair in South Florida - Sub-Zero Repair Services",
    description:
      "Certified Sub-Zero appliance repair in South Florida. Refrigerators, freezers, ice makers, wine coolers, and marine units. Call (800) 651-4528.",
    url: "https://fivestarappliancerepairpros.com/sub-zero-appliance-repair-in-south-florida/",
  },
};

const brandServices = [
  "Refrigerator Repair",
  "Freezer Repair",
  "Ice Maker Repair",
  "Wine Cooler Repair",
  "Marine Refrigeration Repair",
];

export default function SubZeroBrandPage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
            <span className="text-gray-200">Sub-Zero</span>
          </nav>
          <div className="flex items-center gap-6">
            <Image
              src="/images/brands/sub-zero-logo.webp"
              alt="Sub-Zero brand logo"
              width={120}
              height={60}
              className="h-16 w-auto bg-white/10 rounded-lg p-2"
            />
            <h1 className="text-4xl md:text-5xl font-bold">
              Sub-Zero Appliance Repair in South Florida
            </h1>
          </div>
        </div>
      </section>

      <AnswerBlock
        question="Where can I get Sub-Zero appliances repaired in South Florida?"
        answer="Sub-Zero Repair Company has serviced Sub-Zero refrigerators, freezers, ice makers, wine columns, and marine units across South Florida since 1994. Our team works exclusively on premium built-in refrigeration — every Sub-Zero line from current Designer and Pro 48 to legacy 532, 632, and 690 series. Same-day appointments across Miami-Dade, Broward, Palm Beach, and four more counties. OEM parts on every truck."
        stats={[
          { value: "30+", label: "Years on Sub-Zero" },
          { value: "All lines", label: "Built-In to Pro 48" },
          { value: "OEM", label: "Parts on every truck" },
          { value: "7", label: "Counties served" },
        ]}
        quote={{
          text: "Sub-Zero is unique in residential refrigeration — the sealed-system architecture, the integrated cabinetry, the precision tolerances. Three decades on this product line means we read failure patterns in minutes that take a generalist hours to isolate.",
          attribution: "Daniel Rivera, Senior Service Technician",
        }}
        sources={[
          { label: "Sub-Zero Use & Care Guides", url: "https://www.subzero-wolf.com/owners/use-and-care-guides" },
          { label: "Our service warranty", url: "/warranty/" },
          { label: "Meet our technicians", url: "/technicians/" },
        ]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-[#64748B] leading-relaxed">
                Sub-Zero Repair Company has serviced Sub-Zero exclusively since 1994 — no general appliance work, no oven repair, no washer-dryer calls. The focus matters because Sub-Zero sealed-system architecture doesn&apos;t forgive a generalist. We dispatch same-day across <Link href="/areas-we-service/miami-dade-county/coral-gables/" className="text-[#0387cc] hover:text-[#0F3460] font-medium">Coral Gables</Link>, <Link href="/areas-we-service/miami-dade-county/miami/" className="text-[#0387cc] hover:text-[#0F3460] font-medium">Miami</Link>, <Link href="/areas-we-service/miami-dade-county/miami-beach/" className="text-[#0387cc] hover:text-[#0F3460] font-medium">Miami Beach</Link>, <Link href="/areas-we-service/miami-dade-county/aventura/" className="text-[#0387cc] hover:text-[#0F3460] font-medium">Aventura</Link>, <Link href="/areas-we-service/broward-county/fort-lauderdale/" className="text-[#0387cc] hover:text-[#0F3460] font-medium">Fort Lauderdale</Link>, <Link href="/areas-we-service/palm-beach-county/boca-raton/" className="text-[#0387cc] hover:text-[#0F3460] font-medium">Boca Raton</Link>, and 76 more cities across the seven South Florida counties.
              </p>
              <p className="text-[#64748B] leading-relaxed">
                We service every Sub-Zero product line — <Link href="/services/refrigerator-repair/" className="text-[#0387cc] hover:text-[#0F3460] font-medium">refrigerator repair</Link>, <Link href="/services/freezer-repair/" className="text-[#0387cc] hover:text-[#0F3460] font-medium">freezer repair</Link>, <Link href="/services/icemaker-repair/" className="text-[#0387cc] hover:text-[#0F3460] font-medium">ice maker repair</Link>, <Link href="/services/wine-cooler-repair/" className="text-[#0387cc] hover:text-[#0F3460] font-medium">wine column repair</Link>, and <Link href="/services/sub-zero-marine-repair/" className="text-[#0387cc] hover:text-[#0F3460] font-medium">marine refrigeration repair</Link>. Every active and legacy line: Built-In, Integrated, Designer, Pro 48, Classic, Column, Undercounter, plus the legacy 532, 632, and 690 series still running across South Florida luxury homes. Every repair uses genuine OEM parts with full manufacturer warranty.
              </p>
              <h2 className="text-2xl font-bold text-[#0B1D33] mt-8">
                Services We Offer for Sub-Zero
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
                Common Sub-Zero Repair Issues We Fix
              </h2>
              <p className="text-[#64748B] leading-relaxed mt-4">
                Sub-Zero builds the best refrigeration on the market, but
                after 10–15 years of service every unit eventually needs
                attention. The repairs we see most often:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#64748B] mt-4">
                <li>
                  <strong>Refrigerator not cooling / vacuum condenser
                  failure</strong> — compressor, evaporator fan, or dual
                  refrigeration system diagnostics.
                </li>
                <li>
                  <strong>Red-light alarm (&quot;Service&quot; or
                  &quot;Vacuum&quot;)</strong> — condenser fan, thermistor, or
                  control-board faults with the characteristic flashing alert.
                </li>
                <li>
                  <strong>Freezer frost buildup or not freezing</strong> —
                  defrost heater, timer, or gasket replacement.
                </li>
                <li>
                  <strong>Ice maker not producing or cloudy cubes</strong> —
                  water inlet valve, filter, or optics sensor service.
                </li>
                <li>
                  <strong>Wine cooler temperature drift</strong> — dual-zone
                  damper, sensor, or compressor start relay fix.
                </li>
                <li>
                  <strong>Marine unit salt-air corrosion</strong> — dockside
                  repair with marine-grade parts and coatings.
                </li>
                <li>
                  <strong>Door not sealing, water dispenser leaking, or noisy
                  operation</strong> — gasket, valve, and mounting-plate
                  service for all integrated and built-in units.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-[#0B1D33] mt-10">
                Sub-Zero Models We Service
              </h2>
              <p className="text-[#64748B] leading-relaxed mt-4">
                Every current and legacy Sub-Zero line is covered:{" "}
                <strong>Built-In BI series, Designer series, Integrated
                IT series, Classic, PRO 48</strong>, the{" "}
                <strong>Column refrigerator and freezer</strong> line,{" "}
                <strong>Undercounter UC models</strong>, and{" "}
                <strong>Wolf–Sub-Zero combination installations</strong>.
                Marine customers can book dockside service for yacht and
                superyacht installations throughout South Florida. Every
                repair uses factory-authorized Sub-Zero parts and carries a
                full parts-and-labor warranty.
              </p>
            </div>
            <div>
              <div className="bg-[#0387cc] text-white rounded-lg p-6 text-center sticky top-24">
                <h3 className="font-semibold mb-2">Schedule Sub-Zero Repair</h3>
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

      {/* Optimization-driven body content (sealed-system + Emergency Priority) */}
      <section className="py-16 bg-[#F8FAFC] border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 text-[#334155] leading-relaxed">
            <p>
              Sub-Zero Repair Services provides advanced diagnostic and repair
              solutions for high-end refrigeration systems across South
              Florida — Miami, Coral Gables, Fort Lauderdale, Boca Raton, and
              the rest of the seven-county service area. Unlike general
              appliance work, Sub-Zero units require precise handling of
              sealed refrigeration systems where even minor errors can lead
              to major performance loss. This is why proper sub-zero
              maintenance is essential for protecting long-term cooling
              stability in luxury kitchens.
            </p>
            <p>
              Modern Sub-Zero refrigerators rely on a hermetically sealed
              system that circulates refrigerant under exact pressure
              conditions. When a leak or restriction occurs, the entire
              cooling cycle becomes unstable. Technicians at Sub-Zero Repair
              Services use advanced nitrogen pressure testing, electronic
              leak detection, and micron-level vacuum procedures to isolate
              failures without compromising system integrity. This level of
              precision helps prevent unnecessary part replacements and
              ensures long-term system reliability.
            </p>
            <p>
              Unlike general technicians, a{" "}
              <Link
                href="/"
                className="text-[#0387cc] hover:text-[#0F3460] font-medium underline underline-offset-2"
              >
                Sub-Zero certified repair
              </Link>{" "}
              approach ensures that refrigerant recharging is only performed
              after full system validation, preventing repeat breakdowns. In
              coastal South Florida environments — from Key Biscayne to Palm
              Beach — corrosion and humidity accelerate micro-leaks in
              evaporator coils and solder joints, making precision
              diagnostics critical. Proper sealed system service also
              includes verifying compressor amperage draw, capillary tube
              flow rates, and heat exchange efficiency to ensure the unit
              returns to factory performance standards.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D33] pt-6">
              Emergency Repair Priority Levels
            </h2>

            <p>
              We classify refrigeration failures into structured emergency
              tiers to ensure rapid response. Level 1 emergencies involve
              complete cooling loss or active refrigerant leaks, requiring
              immediate dispatch within hours. Level 2 cases include
              inconsistent temperatures or partial compressor function, where
              intervention prevents full system collapse. Level 3 issues
              involve early warning signs such as noise changes or frost
              buildup, often addressed through scheduled sub-zero maintenance
              programs.
            </p>
            <p>
              Across South Florida, heat and humidity accelerate failure
              progression, making timely triage essential for protecting
              food safety and system integrity. This structured approach
              allows Sub-Zero Repair Services to prioritize critical cases
              while maintaining consistent service quality across all
              clients. Each case is assessed on arrival using advanced
              diagnostic tools to determine the fastest path to full system
              recovery.
            </p>
            <p>
              If your refrigeration system is showing early warning signs,
              Sub-Zero Repair Services provides fast diagnostic response and
              precision repairs.{" "}
              <Link
                href="/contact"
                className="text-[#0387cc] hover:text-[#0F3460] font-medium underline underline-offset-2"
              >
                Contact us today
              </Link>{" "}
              to protect your appliance investment before minor issues become
              major system failures.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ section (matches FAQPage schema above) */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D33] mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.question}
                className="group bg-white border border-gray-200 rounded-xl p-5 open:shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-[#0B1D33]">
                  {f.question}
                  <svg
                    className="w-5 h-5 text-[#0387cc] shrink-0 transition-transform group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </summary>
                <p className="text-[#334155] leading-relaxed mt-4">{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
