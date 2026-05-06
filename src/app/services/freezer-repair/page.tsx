import type { Metadata } from "next";
import Link from "next/link";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import ServiceAreasGrid from "@/components/sections/ServiceAreasGrid";
import ParallaxImage from "@/components/ParallaxImage";
import AnswerBlock from "@/components/AnswerBlock";

const serviceSchema = generateServiceSchema(
  "Sub-Zero Freezer Repair",
  "Professional Sub-Zero freezer repair in South Florida. Fast, reliable service with genuine parts.",
  `${BUSINESS.siteUrl}/services/freezer-repair/`
);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.siteUrl },
  { name: "Services", url: `${BUSINESS.siteUrl}/services/` },
  { name: "Freezer Repair", url: `${BUSINESS.siteUrl}/services/freezer-repair/` },
]);
const faqSchema = generateFAQSchema([
  { question: "How fast can you get to my freezer?", answer: "We offer same-day service across South Florida. In most cases, a certified technician can be at your home within hours of your call." },
  { question: "What if my freezer is still running but not cold enough?", answer: "This usually indicates a compressor issue, low refrigerant, or a thermostat problem. Our technicians carry diagnostic tools and parts to resolve it quickly." },
  { question: "Will I lose all my frozen food?", answer: "Time is critical with freezer failures. That is why we prioritize emergency freezer calls and offer same-day repair to minimize food loss." },
  { question: "Do you repair all Sub-Zero freezer types?", answer: "Yes — built-in columns, integrated units, side-by-side configurations, undercounter models, and freestanding freezers. All Sub-Zero freezer models are covered." },
]);

export const metadata: Metadata = {
  title: { absolute: "Sub-Zero Freezer Repair South Florida | Same-Day Service" },
  description:
    "Professional Sub-Zero freezer repair in South Florida. Same-day emergency service with genuine parts and certified technicians. Call (800) 651-4528.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/services/freezer-repair/",
  },
  openGraph: {
    title: "Sub-Zero Freezer Repair South Florida - Sub-Zero Repair Services",
    description:
      "Professional Sub-Zero freezer repair in South Florida. Fast, reliable service with genuine parts. Call (800) 651-4528 today.",
    url: "https://fivestarappliancerepairpros.com/services/freezer-repair/",
  },
};

const commonIssues = [
  { title: "Freezer Not Freezing", description: "Unit runs but fails to reach proper temperature. Often caused by a failing compressor, low refrigerant, or a faulty thermostat." },
  { title: "Excessive Frost Buildup", description: "Heavy ice accumulation on walls or coils indicates defrost heater, timer, or thermostat problems that need professional attention." },
  { title: "Unusual Loud Noises", description: "Buzzing, clicking, or grinding sounds may signal a worn evaporator fan motor, condenser fan, or failing compressor bearings." },
  { title: "Freezer Runs Constantly", description: "Non-stop cycling drives up energy costs and usually points to a dirty condenser, bad door gasket, or thermostat issue." },
  { title: "Water Leaks", description: "Pooling water under or around the freezer typically comes from a clogged defrost drain or a cracked drain pan." },
  { title: "Door Seal Failure", description: "Warm air entering through a damaged gasket causes temperature fluctuations and forces the compressor to overwork." },
];

const repairProcess = [
  { step: "1", title: "Call or Book Online", description: "Reach us at (800) 651-4528 or schedule online. Same-day appointments available throughout South Florida." },
  { step: "2", title: "Thorough Diagnosis", description: "Our certified technician inspects your Sub-Zero freezer with professional diagnostic equipment to pinpoint the issue." },
  { step: "3", title: "Upfront Pricing", description: "You receive a clear, written estimate before we begin. No hidden fees or surprise charges." },
  { step: "4", title: "Expert Repair", description: "We fix your freezer with genuine Sub-Zero parts — backed by a full warranty on parts and labor." },
];

export default function FreezerRepairPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/90 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Freezer Repair</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">
            Sub-Zero Freezer Repair in South Florida
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Emergency freezer repair to prevent food loss. Certified technicians with genuine parts arrive the same day you call.
          </p>
        </div>
      </section>

      <AnswerBlock
        question="Where can I get my Sub-Zero freezer repaired in South Florida?"
        answer="Sub-Zero Repair Company services every Sub-Zero freezer configuration — column, side-by-side, integrated, and standalone — across all 7 South Florida counties. Same-day appointments, factory-trained technicians, and genuine OEM parts on every truck mean most repairs finish in one visit. 24/7 availability with no surcharges for nights, weekends, or holidays, since 1994."
        stats={[
          { value: "30+", label: "Years on Sub-Zero" },
          { value: "Same-day", label: "Most appointments" },
          { value: "OEM", label: "Parts on every truck" },
          { value: "All types", label: "Column to standalone" },
        ]}
        quote={{
          text: "When a freezer column gets warm but the refrigerator side stays cold, it's almost always the freezer evaporator fan — not the compressor. Catching that distinction in the first 10 minutes saves the customer a four-figure bill.",
          attribution: "Daniel Rivera, Senior Service Technician",
        }}
        sources={[
          { label: "Sub-Zero Use & Care Guides", url: "https://www.subzero-wolf.com/owners/use-and-care-guides" },
          { label: "Our service warranty", url: "/warranty/" },
          { label: "Meet our technicians", url: "/technicians/" },
        ]}
      />

      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <ParallaxImage
            src="/images/services/freezer-repair.webp"
            alt="Sub-Zero Freezer Repair Service in South Florida"
            className="w-full h-[300px] md:h-[450px] rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#0B1D33]">Sub-Zero Freezer Repair — Every Configuration</h2>
                <p className="text-[#64748B] leading-relaxed text-lg">
                  Sub-Zero freezers fail in patterns that rarely require sealed-system work.
                  Defrost components, evaporator fans, and door seals account for the vast
                  majority of calls. We service every Sub-Zero freezer configuration —
                  column, side-by-side, integrated, and standalone — across all seven
                  South Florida counties.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  When a freezer column starts warming up but the refrigerator side stays
                  cold, it&apos;s almost always the freezer evaporator fan — not the
                  compressor. Catching that distinction in the first 10 minutes saves the
                  customer a four-figure bill. Our technicians arrive with defrost heaters,
                  defrost timers, evaporator fan motors, common door gaskets, and the
                  diagnostic tools to test the sealed system without breaking it open.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  Most Sub-Zero freezer repairs finish in a single visit. Built-In freezer
                  columns (IC series), Integrated columns (IT series), Classic side-by-sides,
                  Designer freezer columns, Pro 48 freezer columns, and the legacy 524, 525,
                  561T, and 642 lines still running across South Florida — we have parts for
                  all of them on the truck.
                </p>
              </div>

              <div className="bg-[#F8FAFC] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">Sub-Zero Freezer Models We Service</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Built-In Freezer Columns (IC Series)",
                    "Integrated Freezers (IT Series)",
                    "Classic Freezer Models",
                    "Designer Freezer Series",
                    "Pro 48 Freezer Compartments",
                    "Undercounter Freezers (UC Series)",
                    "Side-by-Side Freezer Units",
                    "All-Freezer Columns",
                  ].map((model) => (
                    <div key={model} className="flex items-center gap-2 text-[#64748B]">
                      <svg className="w-5 h-5 text-[#0B1D33] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {model}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#0B1D33] text-lg mb-4">Why Choose Us</h3>
                <ul className="space-y-4">
                  {[
                    { label: "Same-Day Emergency Service", detail: "Minimize food loss with fast response" },
                    { label: "Genuine Sub-Zero Parts", detail: "Factory-authorized components only" },
                    { label: "Certified Technicians", detail: "30+ years of specialized experience" },
                    { label: "24/7 Availability", detail: "Nights, weekends, holidays — no extra charge" },
                    { label: "Written Estimates", detail: "Know the cost before we start" },
                    { label: "Full Warranty", detail: "Parts and labor guaranteed" },
                  ].map((f) => (
                    <li key={f.label} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#0B1D33] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <span className="font-semibold text-[#0B1D33] text-sm">{f.label}</span>
                        <p className="text-xs text-[#64748B]">{f.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#0387cc] text-white rounded-2xl p-6 text-center sticky top-24">
                <h3 className="font-bold text-xl mb-2">Need Immediate Help?</h3>
                <p className="text-sm text-white/80 mb-4">Our technicians are standing by 24/7</p>
                <a href="tel:+18006514528" className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-lg font-bold transition-colors w-full text-lg">
                  (800) 651-4528
                </a>
                <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0B1D33] px-6 py-3 rounded-lg font-semibold transition-colors w-full mt-3">
                  Request Service Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1D33] mb-4">Common Sub-Zero Freezer Problems We Fix</h2>
          <p className="text-[#64748B] mb-10 max-w-3xl">
            From temperature issues to unusual noises, our technicians handle every Sub-Zero freezer problem with expertise and genuine parts.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonIssues.map((issue) => (
              <div key={issue.title} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-[#0B1D33] mb-2">{issue.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{issue.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1D33] mb-4">Our Freezer Repair Process</h2>
          <p className="text-[#64748B] mb-10 max-w-3xl">Simple, transparent, and fast — here is how we get your freezer working again.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairProcess.map((item) => (
              <div key={item.step} className="relative">
                <div className="w-12 h-12 bg-[#0387cc] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">{item.step}</div>
                <h3 className="font-bold text-[#0B1D33] mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1D33] mb-10">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: "How fast can you get to my freezer?", a: "We offer same-day service across South Florida. In most cases, a certified technician can be at your home within hours of your call." },
              { q: "What if my freezer is still running but not cold enough?", a: "This usually indicates a compressor issue, low refrigerant, or a thermostat problem. Our technicians carry diagnostic tools and parts to resolve it quickly." },
              { q: "Will I lose all my frozen food?", a: "Time is critical with freezer failures. That is why we prioritize emergency freezer calls and offer same-day repair to minimize food loss." },
              { q: "Do you repair all Sub-Zero freezer types?", a: "Yes — built-in columns, integrated units, side-by-side configurations, undercounter models, and freestanding freezers. All Sub-Zero freezer models are covered." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-[#0B1D33] mb-2">{faq.q}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0B1D33] mb-6">Other Sub-Zero Services We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Refrigerator Repair", href: "/services/refrigerator-repair" },
              { name: "Freezer Repair", href: "/services/freezer-repair" },
              { name: "Ice Maker Repair", href: "/services/icemaker-repair" },
              { name: "Wine Cooler Repair", href: "/services/wine-cooler-repair" },
              { name: "Marine Repair", href: "/services/sub-zero-marine-repair" },
            ].filter(s => s.href !== "/services/freezer-repair").map((service) => (
              <Link key={service.href} href={service.href} className="bg-[#F8FAFC] hover:bg-[#0387cc] hover:text-white text-[#0B1D33] rounded-xl p-4 font-semibold text-sm transition-all text-center border border-gray-100 hover:border-[#0387cc]">
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreasGrid serviceType="Freezer Repair" />

      <section className="bg-[#0387cc] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule Your Freezer Repair Today</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">Don&apos;t risk your frozen food. Call now for emergency Sub-Zero freezer repair anywhere in South Florida.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+18006514528" className="inline-flex items-center bg-white text-[#0B1D33] px-8 py-4 rounded-lg font-bold text-lg transition-colors hover:bg-gray-100">
              Call (800) 651-4528
            </a>
            <Link href="/contact" className="inline-flex items-center bg-[#f89406] hover:bg-[#e08505] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Request Service Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
