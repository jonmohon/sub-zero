import type { Metadata } from "next";
import Link from "next/link";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import ServiceAreasGrid from "@/components/sections/ServiceAreasGrid";
import ParallaxImage from "@/components/ParallaxImage";
import AnswerBlock from "@/components/AnswerBlock";

const serviceSchema = generateServiceSchema(
  "Sub-Zero Marine Refrigeration Repair",
  "Expert Sub-Zero marine refrigeration repair in South Florida. Dockside service for boats and yachts.",
  `${BUSINESS.siteUrl}/services/sub-zero-marine-repair/`
);
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.siteUrl },
  { name: "Services", url: `${BUSINESS.siteUrl}/services/` },
  { name: "Marine Refrigeration Repair", url: `${BUSINESS.siteUrl}/services/sub-zero-marine-repair/` },
]);
const faqSchema = generateFAQSchema([
  { question: "Do you come directly to my boat?", answer: "Yes. We provide dockside service at any marina in South Florida. Just tell us where your vessel is docked and we will come to you." },
  { question: "Can you work on yachts of any size?", answer: "Absolutely. From small sport fishing boats to large luxury mega-yachts, our technicians are experienced with marine Sub-Zero installations of every scale." },
  { question: "How do you handle salt air corrosion damage?", answer: "We repair corroded components with genuine parts and apply marine-grade protective measures to guard against future corrosion damage." },
  { question: "What about power supply issues on the boat?", answer: "We diagnose whether the refrigeration issue stems from the unit itself or from the vessel's power system (shore power, generator, or inverter) and address both." },
]);

export const metadata: Metadata = {
  title: { absolute: "Sub-Zero Marine Repair South Florida | Dockside Service" },
  description:
    "Expert Sub-Zero marine refrigeration repair in South Florida. Professional dockside service for boats and yachts with genuine parts. Call (800) 651-4528.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/services/sub-zero-marine-repair/",
  },
  openGraph: {
    title: "Sub-Zero Marine Refrigeration Repair South Florida - Sub-Zero Repair Services",
    description: "Expert Sub-Zero marine refrigeration repair in South Florida. Keep your vessel's cooling systems running. Call (800) 651-4528.",
    url: "https://fivestarappliancerepairpros.com/services/sub-zero-marine-repair/",
  },
};

const commonIssues = [
  { title: "Corrosion-Related Failures", description: "Salt air and ocean spray accelerate corrosion on electrical connections, coils, and housing. We repair and protect against future damage." },
  { title: "Compressor Overheating", description: "Marine environments create extreme heat loads. Compressor failures from overwork or poor ventilation require expert diagnosis." },
  { title: "Power Fluctuation Damage", description: "Boats experience inconsistent power supply that can damage control boards and motors. We diagnose and replace affected components." },
  { title: "Thermostat Malfunction", description: "Vibration and humidity can cause thermostat drift, resulting in inconsistent temperatures that spoil food during extended voyages." },
  { title: "Condenser Coil Blockage", description: "Marine environments clog condenser coils faster with salt, dust, and debris. We clean and restore proper airflow." },
  { title: "Door Seal Deterioration", description: "UV exposure and salt air degrade marine door gaskets faster than residential units, compromising the cooling seal." },
];

const repairProcess = [
  { step: "1", title: "Schedule Dockside Service", description: "Call (800) 651-4528 with your marina location. We come to your vessel at any South Florida dock." },
  { step: "2", title: "On-Board Diagnosis", description: "Our marine-certified technician evaluates your Sub-Zero system, accounting for the unique demands of the marine environment." },
  { step: "3", title: "Transparent Estimate", description: "We provide a clear written quote covering parts, labor, and any marine-specific considerations." },
  { step: "4", title: "Dockside Repair", description: "Using genuine Sub-Zero parts and marine-grade techniques, we complete the repair on-site at your marina." },
];

export default function MarineRepairPage() {
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
            <span className="text-white">Marine Repair</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Sub-Zero Marine Refrigeration Repair in South Florida</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Dockside Sub-Zero repair for boats and yachts. Our marine-certified technicians service vessels at any South Florida marina.
          </p>
        </div>
      </section>

      <AnswerBlock
        question="Where can I get my Sub-Zero marine refrigerator repaired in South Florida?"
        answer="Sub-Zero Repair Services provides dockside marine refrigeration service across South Florida — Miami Beach Marina, Sunset Harbour, Crandon Park, Bal Harbour, and every major yacht basin in between. We service marine refrigerators, freezers, ice makers, and wine units on vessels of any size. Same-day appointments, factory-trained technicians, and genuine OEM parts on every truck since 1994."
        stats={[
          { value: "Dockside", label: "We come to your slip" },
          { value: "30+", label: "Years on Sub-Zero" },
          { value: "OEM", label: "Marine parts stocked" },
          { value: "Any size", label: "Galley to cockpit" },
        ]}
        quote={{
          text: "Marine units fail differently than residential — salt air corrodes contacts and fittings the manuals never mention, and constant vibration loosens lines that would never move on a kitchen install. You learn to spot it from feet away.",
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
            src="/images/services/marine-repair-v2.webp"
            alt="Luxury yacht at South Florida marina — Sub-Zero marine refrigeration repair"
            className="w-full h-[300px] md:h-[450px] rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#0B1D33]">Sub-Zero Marine Refrigeration Repair — Dockside Across South Florida</h2>
                <p className="text-[#64748B] leading-relaxed text-lg">
                  Marine Sub-Zero units fail differently than residential. Salt air corrodes
                  contacts and fittings the residential service manuals never mention.
                  Constant vibration loosens lines that would never move on a kitchen install.
                  Inverter switching introduces voltage spikes that residential control
                  boards aren&apos;t built to tolerate long-term. Different failure profile,
                  different parts inventory, different tools.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  We provide dockside service across every major South Florida marina —
                  Miami Beach Marina, Sunset Harbour, Bal Harbour Yacht Club, Crandon Park,
                  Pier 66, Bahia Mar, and the Naples Boat Club / Marco Island basins.
                  Sub-Zero marine refrigerators, freezers, ice makers, and wine units on
                  vessels of any size — galley to cockpit.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  Our marine trucks ship with corrosion-replacement contact sets, OEM
                  marine fan motors, pressure-test gauges, marine-grade refrigerant, and
                  the short-handle tools sized for tight galley access. Most repairs
                  finish on the first dockside visit. The workmanship warranty appears
                  on your invoice; OEM marine parts carry their own manufacturer warranty.
                </p>
              </div>

              <div className="bg-[#F8FAFC] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">Marine Equipment We Service</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Marine Refrigerators",
                    "Marine Freezer Units",
                    "Marine Ice Makers",
                    "Marine Wine Coolers",
                    "Galley Refrigeration Systems",
                    "Flybridge Cooling Units",
                    "Crew Quarters Refrigerators",
                    "Salon Beverage Centers",
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

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">Why Marine Refrigeration Requires Specialists</h2>
                <p className="text-[#64748B] mb-4">Marine Sub-Zero units face conditions that demand specialized knowledge:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "Salt Air Corrosion", desc: "Accelerates wear on all metal components" },
                    { label: "Constant Vibration", desc: "Loosens connections and stresses parts" },
                    { label: "Power Variations", desc: "Shore, generator, and inverter fluctuations" },
                    { label: "Space Constraints", desc: "Tight installations require expert access" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-lg p-4">
                      <div className="font-bold text-[#0B1D33] text-sm">{item.label}</div>
                      <div className="text-sm text-[#64748B]">{item.desc}</div>
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
                    { label: "Dockside Service", detail: "We come to your boat at any marina" },
                    { label: "Marine-Certified Technicians", detail: "Trained for marine environments" },
                    { label: "Genuine Sub-Zero Parts", detail: "Factory-authorized components" },
                    { label: "Same-Day Scheduling", detail: "Fast response for vessels in port" },
                    { label: "Corrosion Protection", detail: "Marine-grade repair techniques" },
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
                <h3 className="font-bold text-xl mb-2">Need Dockside Service?</h3>
                <p className="text-sm text-white/80 mb-4">We service vessels at any South Florida marina</p>
                <a href="tel:+18006514528" className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-lg font-bold transition-colors w-full text-lg">(800) 651-4528</a>
                <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0B1D33] px-6 py-3 rounded-lg font-semibold transition-colors w-full mt-3">Request Service Call</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1D33] mb-4">Common Marine Refrigeration Problems We Fix</h2>
          <p className="text-[#64748B] mb-10 max-w-3xl">The marine environment creates unique challenges for Sub-Zero equipment. Our technicians are trained to handle them all.</p>
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
          <h2 className="text-3xl font-bold text-[#0B1D33] mb-4">Our Marine Repair Process</h2>
          <p className="text-[#64748B] mb-10 max-w-3xl">Professional dockside service from start to finish.</p>
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
              { q: "Do you come directly to my boat?", a: "Yes. We provide dockside service at any marina in South Florida. Just tell us where your vessel is docked and we will come to you." },
              { q: "Can you work on yachts of any size?", a: "Absolutely. From small sport fishing boats to large luxury mega-yachts, our technicians are experienced with marine Sub-Zero installations of every scale." },
              { q: "How do you handle salt air corrosion damage?", a: "We repair corroded components with genuine parts and apply marine-grade protective measures to guard against future corrosion damage." },
              { q: "What about power supply issues on the boat?", a: "We diagnose whether the refrigeration issue stems from the unit itself or from the vessel's power system (shore power, generator, or inverter) and address both." },
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
            ].filter(s => s.href !== "/services/sub-zero-marine-repair").map((service) => (
              <Link key={service.href} href={service.href} className="bg-[#F8FAFC] hover:bg-[#0387cc] hover:text-white text-[#0B1D33] rounded-xl p-4 font-semibold text-sm transition-all text-center border border-gray-100 hover:border-[#0387cc]">
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreasGrid serviceType="Marine Refrigeration Repair" />

      <section className="bg-[#0387cc] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule Your Marine Refrigeration Repair Today</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">Dockside Sub-Zero repair for your vessel. Call now to schedule service at any South Florida marina.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+18006514528" className="inline-flex items-center bg-white text-[#0B1D33] px-8 py-4 rounded-lg font-bold text-lg transition-colors hover:bg-gray-100">Call (800) 651-4528</a>
            <Link href="/contact" className="inline-flex items-center bg-[#f89406] hover:bg-[#e08505] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">Request Service Call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
