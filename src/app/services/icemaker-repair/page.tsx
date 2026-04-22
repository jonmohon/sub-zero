import type { Metadata } from "next";
import Link from "next/link";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import ServiceAreasGrid from "@/components/sections/ServiceAreasGrid";
import ParallaxImage from "@/components/ParallaxImage";

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
const faqSchema = generateFAQSchema([
  { question: "Why is my Sub-Zero ice maker not making ice?", answer: "The most common causes are a frozen water line, a faulty water inlet valve, or a bad motor module. Our technician will diagnose the exact issue and fix it on the spot." },
  { question: "How often should I replace my ice maker water filter?", answer: "Sub-Zero recommends replacing the water filter every 6 to 12 months. A clogged filter reduces water flow and can cause small, cloudy, or bad-tasting ice." },
  { question: "Can you fix an ice maker built into my Sub-Zero fridge?", answer: "Absolutely. We repair both integrated ice makers inside Sub-Zero refrigerators and standalone ice machines." },
  { question: "How long does an ice maker repair take?", answer: "Most ice maker repairs are completed in under two hours. We carry common parts on our trucks so there is rarely a need for a follow-up visit." },
]);

export const metadata: Metadata = {
  title: { absolute: "Sub-Zero Ice Maker Repair South Florida | Same-Day Service" },
  description:
    "Expert Sub-Zero ice maker repair in South Florida. Same-day service with genuine parts, certified technicians, and 30+ years experience. Call (800) 651-4528.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/services/icemaker-repair/",
  },
  openGraph: {
    title: "Sub-Zero Ice Maker Repair South Florida - Sub-Zero Repair Services",
    description: "Expert Sub-Zero ice maker repair in South Florida. Same-day fixes with genuine parts. Call (800) 651-4528.",
    url: "https://fivestarappliancerepairpros.com/services/icemaker-repair/",
  },
};

const commonIssues = [
  { title: "No Ice Production", description: "Unit runs but produces no ice. Common causes include a frozen water line, faulty water inlet valve, or failed motor module." },
  { title: "Small or Misshapen Cubes", description: "Undersized or hollow cubes often result from low water pressure, a clogged filter, or a malfunctioning water inlet valve." },
  { title: "Cloudy or Bad-Tasting Ice", description: "Water quality issues, old filters, or mineral buildup in the system can affect ice clarity and taste." },
  { title: "Ice Maker Leaking", description: "Water pooling around the unit typically points to a cracked water line, loose connection, or a defective inlet valve." },
  { title: "Slow Ice Production", description: "When the ice maker cannot keep up with demand, the cause is often a dirty condenser, thermostat issue, or restricted water flow." },
  { title: "Ice Maker Won't Turn Off", description: "Continuous ice production can overflow the bin and signals a bad shut-off arm, sensor, or control board problem." },
];

const repairProcess = [
  { step: "1", title: "Schedule Service", description: "Call (800) 651-4528 or book online. Same-day appointments are available across South Florida." },
  { step: "2", title: "Diagnose the Issue", description: "Our certified technician tests water flow, electrical components, and mechanical parts to find the root cause." },
  { step: "3", title: "Get a Clear Quote", description: "We explain the problem and provide a written estimate before starting any repair work." },
  { step: "4", title: "Repair with Genuine Parts", description: "We fix your ice maker using only factory-authorized Sub-Zero parts, backed by a full warranty." },
];

export default function IceMakerRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-white/90 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Ice Maker Repair</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Sub-Zero Ice Maker Repair in South Florida</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            No ice? Cloudy cubes? Leaking water? Our certified technicians diagnose and fix every Sub-Zero ice maker issue the same day.
          </p>
        </div>
      </section>

      <section className="py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <ParallaxImage
            src="/images/services/icemaker-repair.webp"
            alt="Sub-Zero Ice Maker Repair Service in South Florida"
            className="w-full h-[300px] md:h-[450px] rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#0B1D33]">Expert Sub-Zero Ice Maker Repair</h2>
                <p className="text-[#64748B] leading-relaxed text-lg">
                  A properly functioning ice maker is essential, especially in South Florida&apos;s warm climate. When your Sub-Zero ice maker stops producing ice or delivers undersized, cloudy, or misshapen cubes, our certified technicians can diagnose and resolve the issue quickly with same-day service.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  Common Sub-Zero ice maker problems include clogged water lines, faulty water inlet valves, malfunctioning motors, defective sensors, and thermostat issues. Our technicians carry genuine Sub-Zero replacement parts on every service call, allowing us to complete most repairs in a single visit without the need for follow-up appointments.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  Whether your ice maker is built into your Sub-Zero refrigerator or is a standalone unit, we have the expertise to restore full ice production. We also provide preventive maintenance services to keep your ice maker running efficiently and extend its lifespan.
                </p>
              </div>

              <div className="bg-[#F8FAFC] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">Ice Maker Types We Service</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Built-In Refrigerator Ice Makers",
                    "Standalone Sub-Zero Ice Machines",
                    "Undercounter Ice Makers (UC-15I)",
                    "Integrated Ice Maker Modules",
                    "Column Refrigerator Ice Makers",
                    "Pro 48 Ice Production Systems",
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
                    { label: "Same-Day Service", detail: "Fast response to restore ice production" },
                    { label: "Genuine Sub-Zero Parts", detail: "Factory-authorized components" },
                    { label: "Certified Technicians", detail: "30+ years specialized experience" },
                    { label: "24/7 Availability", detail: "No extra charge for off-hours" },
                    { label: "Written Estimates", detail: "Transparent pricing upfront" },
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
                <a href="tel:+18006514528" className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-lg font-bold transition-colors w-full text-lg">(800) 651-4528</a>
                <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0B1D33] px-6 py-3 rounded-lg font-semibold transition-colors w-full mt-3">Request Service Call</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1D33] mb-4">Common Sub-Zero Ice Maker Problems We Fix</h2>
          <p className="text-[#64748B] mb-10 max-w-3xl">From no ice to leaky units, our technicians handle every issue with expertise and factory parts.</p>
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
          <h2 className="text-3xl font-bold text-[#0B1D33] mb-4">Our Ice Maker Repair Process</h2>
          <p className="text-[#64748B] mb-10 max-w-3xl">Quick, transparent, and thorough — this is what you can expect.</p>
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
              { q: "Why is my Sub-Zero ice maker not making ice?", a: "The most common causes are a frozen water line, a faulty water inlet valve, or a bad motor module. Our technician will diagnose the exact issue and fix it on the spot." },
              { q: "How often should I replace my ice maker water filter?", a: "Sub-Zero recommends replacing the water filter every 6 to 12 months. A clogged filter reduces water flow and can cause small, cloudy, or bad-tasting ice." },
              { q: "Can you fix an ice maker built into my Sub-Zero fridge?", a: "Absolutely. We repair both integrated ice makers inside Sub-Zero refrigerators and standalone ice machines." },
              { q: "How long does an ice maker repair take?", a: "Most ice maker repairs are completed in under two hours. We carry common parts on our trucks so there is rarely a need for a follow-up visit." },
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
            ].filter(s => s.href !== "/services/icemaker-repair").map((service) => (
              <Link key={service.href} href={service.href} className="bg-[#F8FAFC] hover:bg-[#0387cc] hover:text-white text-[#0B1D33] rounded-xl p-4 font-semibold text-sm transition-all text-center border border-gray-100 hover:border-[#0387cc]">
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreasGrid serviceType="Ice Maker Repair" />

      <section className="bg-[#0387cc] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule Your Ice Maker Repair Today</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">Get your Sub-Zero ice maker back to full production. Same-day service available throughout South Florida.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+18006514528" className="inline-flex items-center bg-white text-[#0B1D33] px-8 py-4 rounded-lg font-bold text-lg transition-colors hover:bg-gray-100">Call (800) 651-4528</a>
            <Link href="/contact" className="inline-flex items-center bg-[#f89406] hover:bg-[#e08505] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">Request Service Call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
