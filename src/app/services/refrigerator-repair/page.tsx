import type { Metadata } from "next";
import Link from "next/link";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import ServiceAreasGrid from "@/components/sections/ServiceAreasGrid";
import ParallaxImage from "@/components/ParallaxImage";
import AnswerBlock from "@/components/AnswerBlock";

const serviceSchema = generateServiceSchema(
  "Sub-Zero Refrigerator Repair",
  "Expert Sub-Zero refrigerator repair across South Florida. Same-day service, genuine parts, certified technicians.",
  `${BUSINESS.siteUrl}/services/refrigerator-repair/`,
  [
    { name: "Miami", type: "City" },
    { name: "Miami Beach", type: "City" },
    { name: "Key Biscayne", type: "City" },
    { name: "Pinecrest", type: "City" },
    { name: "Coral Gables", type: "City" },
    { name: "South Florida", type: "State" },
  ]
);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.siteUrl },
  { name: "Services", url: `${BUSINESS.siteUrl}/services/` },
  { name: "Refrigerator Repair", url: `${BUSINESS.siteUrl}/services/refrigerator-repair/` },
]);
const faqSchema = generateFAQSchema([
  { question: "How quickly can you repair my Sub-Zero refrigerator?", answer: "We offer same-day service throughout South Florida. Most repairs are completed in a single visit since our technicians carry genuine Sub-Zero parts on every truck." },
  { question: "Do you use genuine Sub-Zero parts?", answer: "Yes. We exclusively use factory-authorized Sub-Zero replacement parts, which come with a full manufacturer warranty for quality and longevity." },
  { question: "What does a typical Sub-Zero repair cost?", answer: "Costs vary depending on the issue and parts needed. We provide a transparent, written estimate before any work begins so there are no surprises." },
  { question: "Do you charge extra for weekends or holidays?", answer: "No. Our standard service rates apply 24/7, including nights, weekends, and holidays. We never add emergency surcharges." },
  { question: "What Sub-Zero models do you service?", answer: "We repair all Sub-Zero refrigerator models including Built-In, Integrated, Classic, Designer, Pro 48, Column, and Undercounter series." },
  { question: "Is your repair work guaranteed?", answer: "Absolutely. Every repair comes with a full warranty on both parts and labor, giving you complete peace of mind." },
]);

export const metadata: Metadata = {
  title: { absolute: "Sub-Zero Refrigerator Repair South Florida | Same-Day Service" },
  description:
    "Expert Sub-Zero refrigerator repair in South Florida. Same-day service, genuine parts, and certified technicians with 30+ years experience. Call (800) 651-4528.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/services/refrigerator-repair/",
  },
  openGraph: {
    title:
      "Sub-Zero Refrigerator Repair South Florida - Sub-Zero Repair Services",
    description:
      "Expert Sub-Zero refrigerator repair in South Florida. Same-day service, genuine parts, and certified technicians. Call (800) 651-4528 for fast, reliable repairs.",
    url: "https://fivestarappliancerepairpros.com/services/refrigerator-repair/",
  },
};

const commonIssues = [
  { title: "Not Cooling Properly", description: "Refrigerator running but not maintaining temperature. Could be a compressor, condenser, or thermostat issue." },
  { title: "Unusual Noises", description: "Grinding, buzzing, or clicking sounds often indicate a failing compressor, evaporator fan motor, or condenser fan." },
  { title: "Water Leaking", description: "Puddles under or inside the unit typically stem from a clogged defrost drain, cracked water line, or damaged door gasket." },
  { title: "Ice Buildup in Freezer", description: "Excessive frost usually points to a defective defrost heater, thermostat, or timer that needs replacement." },
  { title: "Door Seal Issues", description: "Worn or damaged gaskets allow warm air in, forcing the compressor to work harder and driving up energy costs." },
  { title: "Control Board Malfunction", description: "Electronic display errors or unresponsive controls may require a control board diagnosis or replacement." },
];

const repairProcess = [
  { step: "1", title: "Schedule Your Service", description: "Call us at (800) 651-4528 or request service online. We offer same-day appointments throughout South Florida." },
  { step: "2", title: "Expert Diagnosis", description: "Our certified technician arrives with specialized diagnostic tools to identify the exact issue with your Sub-Zero refrigerator." },
  { step: "3", title: "Transparent Quote", description: "We provide an upfront, written estimate before any work begins. No hidden fees, no surprises." },
  { step: "4", title: "Professional Repair", description: "Using only genuine Sub-Zero parts, we complete the repair — most units are fixed in a single visit." },
];

export default function RefrigeratorRepairPage() {
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

      {/* Hero Banner */}
      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/90 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Refrigerator Repair</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">
            Sub-Zero Refrigerator Repair in South Florida
          </h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Factory-trained technicians with 30+ years of experience. Same-day service with genuine Sub-Zero parts on every truck.
          </p>
        </div>
      </section>

      <AnswerBlock
        question="Where can I get my Sub-Zero refrigerator repaired in South Florida?"
        answer="Sub-Zero Repair Company services every Sub-Zero refrigerator line — Built-In, Integrated, Classic, Designer, Pro 48, Column, and Undercounter — across Miami-Dade, Broward, and 5 more South Florida counties. Same-day appointments, factory-trained technicians, and genuine OEM parts on every truck mean most repairs finish in a single visit. Available 24/7 with no surcharges for nights, weekends, or holidays."
        stats={[
          { value: "30+", label: "Years on Sub-Zero" },
          { value: "Same-day", label: "Most appointments" },
          { value: "OEM", label: "Parts on every truck" },
          { value: "All models", label: "Built-In to Pro 48" },
        ]}
        quote={{
          text: "Most Sub-Zero failures we see in South Florida trace back to humidity stressing the condenser or sealed system — issues that look mysterious to a generalist but read like a textbook to anyone who has worked these units for a decade.",
          attribution: "Daniel Rivera, Senior Service Technician",
        }}
        sources={[
          { label: "Sub-Zero Use & Care Guides", url: "https://www.subzero-wolf.com/owners/use-and-care-guides" },
          { label: "Our service warranty", url: "/warranty/" },
          { label: "Meet our technicians", url: "/technicians/" },
        ]}
      />

      {/* Hero Image */}
      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <ParallaxImage
            src="/images/services/refrigerator-repair.webp"
            alt="Sub-Zero Refrigerator Repair Service in South Florida"
            className="w-full h-[300px] md:h-[450px] rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#0B1D33]">Sub-Zero Refrigerator Repair — Sealed-System Specialists</h2>
                <p className="text-[#64748B] leading-relaxed text-lg">
                  When a Sub-Zero refrigerator stops cooling in South Florida humidity,
                  food loss starts in hours, not days. We dispatch same-day across
                  Miami-Dade, Broward, and Palm Beach for sealed-system diagnostics,
                  compressor work, defrost board replacement, evaporator fan repair, and
                  electronic control board service — every active and legacy Sub-Zero line.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  Our technicians have worked exclusively on premium built-in refrigeration
                  for three decades. That focus matters because Sub-Zero sealed-system
                  architecture doesn&apos;t forgive a generalist. The first hour of a
                  Sub-Zero diagnostic decides whether the bill is $400 or $2,000 — getting
                  that hour right is what we&apos;re paid for.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  Every truck ships with the OEM parts your Sub-Zero refrigerator is
                  statistically most likely to need: evaporator fan motors, defrost boards,
                  defrost thermostats, water inlet valves, common door gaskets, and the
                  diagnostic equipment to test the sealed system without breaking it open.
                  Most repairs finish on the first visit — Built-In to Pro 48, Designer to
                  Classic, and the legacy 532, 632, and 690 series still running across
                  South Florida luxury homes.
                </p>
              </div>

              {/* Models We Service */}
              <div className="bg-[#F8FAFC] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">Sub-Zero Refrigerator Models We Service</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Built-In Refrigerators (BI Series)",
                    "Integrated Refrigerators (IT Series)",
                    "Classic Series (CL)",
                    "Designer Series (DET)",
                    "Pro 48 Refrigerators",
                    "Column Refrigerators (IC Series)",
                    "Undercounter Refrigerators (UC Series)",
                    "Side-by-Side Models",
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

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-[#0B1D33] text-lg mb-4">
                  Why Choose Us
                </h3>
                <ul className="space-y-4">
                  {[
                    { label: "Same-Day Service", detail: "Most repairs completed in one visit" },
                    { label: "Genuine Sub-Zero Parts", detail: "Factory-authorized replacement parts" },
                    { label: "Certified Technicians", detail: "30+ years of hands-on experience" },
                    { label: "24/7 Availability", detail: "No extra charge for weekends or holidays" },
                    { label: "Written Estimates", detail: "Transparent pricing before work begins" },
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
                <p className="text-sm text-white/80 mb-4">
                  Our technicians are standing by 24/7
                </p>
                <a
                  href="tel:+18006514528"
                  className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-lg font-bold transition-colors w-full text-lg"
                >
                  (800) 651-4528
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0B1D33] px-6 py-3 rounded-lg font-semibold transition-colors w-full mt-3"
                >
                  Request Service Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1D33] mb-4">Common Sub-Zero Refrigerator Problems We Fix</h2>
          <p className="text-[#64748B] mb-10 max-w-3xl">
            Our factory-trained technicians have seen it all. Here are the most common Sub-Zero refrigerator issues we diagnose and repair every day across South Florida.
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

      {/* Repair Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1D33] mb-4">Our Refrigerator Repair Process</h2>
          <p className="text-[#64748B] mb-10 max-w-3xl">
            From your first call to a fully working refrigerator, here is what to expect when you choose our repair service.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repairProcess.map((item) => (
              <div key={item.step} className="relative">
                <div className="w-12 h-12 bg-[#0387cc] text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-[#0B1D33] mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1D33] mb-10">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: "How quickly can you repair my Sub-Zero refrigerator?", a: "We offer same-day service throughout South Florida. Most repairs are completed in a single visit since our technicians carry genuine Sub-Zero parts on every truck." },
              { q: "Do you use genuine Sub-Zero parts?", a: "Yes. We exclusively use factory-authorized Sub-Zero replacement parts, which come with a full manufacturer warranty for quality and longevity." },
              { q: "What does a typical Sub-Zero repair cost?", a: "Costs vary depending on the issue and parts needed. We provide a transparent, written estimate before any work begins so there are no surprises." },
              { q: "Do you charge extra for weekends or holidays?", a: "No. Our standard service rates apply 24/7, including nights, weekends, and holidays. We never add emergency surcharges." },
              { q: "What Sub-Zero models do you service?", a: "We repair all Sub-Zero refrigerator models including Built-In, Integrated, Classic, Designer, Pro 48, Column, and Undercounter series." },
              { q: "Is your repair work guaranteed?", a: "Absolutely. Every repair comes with a full warranty on both parts and labor, giving you complete peace of mind." },
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
            ].filter(s => s.href !== "/services/refrigerator-repair").map((service) => (
              <Link key={service.href} href={service.href} className="bg-[#F8FAFC] hover:bg-[#0387cc] hover:text-white text-[#0B1D33] rounded-xl p-4 font-semibold text-sm transition-all text-center border border-gray-100 hover:border-[#0387cc]">
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreasGrid serviceType="Refrigerator Repair" />

      {/* Bottom CTA */}
      <section className="bg-[#0387cc] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Schedule Your Refrigerator Repair Today
          </h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Don&apos;t risk food spoilage. Call now for same-day Sub-Zero refrigerator repair anywhere in South Florida.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+18006514528"
              className="inline-flex items-center bg-white text-[#0B1D33] px-8 py-4 rounded-lg font-bold text-lg transition-colors hover:bg-gray-100"
            >
              Call (800) 651-4528
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#f89406] hover:bg-[#e08505] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Request Service Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
