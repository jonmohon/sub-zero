import type { Metadata } from "next";
import Link from "next/link";
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";
import ServiceAreasGrid from "@/components/sections/ServiceAreasGrid";
import ParallaxImage from "@/components/ParallaxImage";
import AnswerBlock from "@/components/AnswerBlock";

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
const faqSchema = generateFAQSchema([
  { question: "Will my wine be safe during the repair?", answer: "We work quickly to minimize any temperature disruption. For longer repairs, we advise on temporary storage to keep your wines at safe temperatures." },
  { question: "How do I know if my wine cooler temperature is off?", answer: "If wines taste different than expected, corks are drying out, or the display shows inconsistent readings, your cooler likely needs professional attention." },
  { question: "Do you calibrate the unit after repair?", answer: "Yes. After every repair, we calibrate your wine cooler to maintain the precise temperature and humidity your collection requires." },
  { question: "Can you repair dual-zone wine coolers?", answer: "Absolutely. We service all Sub-Zero wine cooler configurations including single-zone, dual-zone, and multi-zone units." },
]);

export const metadata: Metadata = {
  title: { absolute: "Sub-Zero Wine Cooler Repair South Florida | Expert Service" },
  description:
    "Professional Sub-Zero wine cooler repair in South Florida. Protect your wine collection with certified technicians and genuine parts. Call (800) 651-4528.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/services/wine-cooler-repair/",
  },
  openGraph: {
    title: "Sub-Zero Wine Cooler Repair South Florida - Sub-Zero Repair Services",
    description: "Professional Sub-Zero wine cooler repair in South Florida. Protect your wine collection with our expert service. Call (800) 651-4528.",
    url: "https://fivestarappliancerepairpros.com/services/wine-cooler-repair/",
  },
};

const commonIssues = [
  { title: "Temperature Fluctuations", description: "Wine requires precise temperature. Fluctuations can be caused by a failing thermostat, compressor issue, or faulty sensor." },
  { title: "Compressor Problems", description: "A noisy or non-functional compressor cannot maintain the delicate cooling balance your wine collection requires." },
  { title: "Humidity Control Failure", description: "Incorrect humidity levels dry out corks and expose wine to oxidation. We repair and recalibrate humidity systems." },
  { title: "Worn Door Seals", description: "Damaged gaskets let warm, humid air inside the cabinet, destabilizing the climate your wine needs for proper aging." },
  { title: "Vibration Issues", description: "Excessive vibration disturbs sediment in aging wines. We diagnose and fix fan motors, compressors, and mounting hardware." },
  { title: "Control Board Errors", description: "Digital display malfunctions or unresponsive controls often indicate a control board that needs diagnosis or replacement." },
];

const repairProcess = [
  { step: "1", title: "Contact Us", description: "Call (800) 651-4528 or book online. We offer same-day and next-day appointments throughout South Florida." },
  { step: "2", title: "Precision Diagnosis", description: "Our technician evaluates temperature, humidity, vibration, and all mechanical components with professional-grade tools." },
  { step: "3", title: "Written Estimate", description: "We provide a transparent quote so you know exactly what the repair will cost before we begin." },
  { step: "4", title: "Expert Repair & Calibration", description: "We fix the issue with genuine Sub-Zero parts and calibrate your unit to the exact conditions your wines require." },
];

export default function WineCoolerRepairPage() {
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
            <span className="text-white">Wine Cooler Repair</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">Sub-Zero Wine Cooler Repair in South Florida</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Protect your wine collection with certified Sub-Zero repair. We restore precise temperature and humidity control same-day.
          </p>
        </div>
      </section>

      <AnswerBlock
        question="Where can I get my Sub-Zero wine cooler repaired in South Florida?"
        answer="Sub-Zero Repair Company services every Sub-Zero wine column and wine cooler — single-zone, dual-zone, integrated, and undercounter — across all 7 South Florida counties. We carry genuine OEM parts on every truck and recalibrate temperature and humidity after every repair so your collection is protected within hours, not days. Same-day service since 1994, no surcharges nights/weekends/holidays."
        stats={[
          { value: "30+", label: "Years on Sub-Zero" },
          { value: "Same-day", label: "Most appointments" },
          { value: "OEM", label: "Parts on every truck" },
          { value: "Calibrated", label: "Temp + humidity post-repair" },
        ]}
        quote={{
          text: "Wine columns are the most precision-sensitive units Sub-Zero makes. A 2-degree drift over a week ages a vintage faster than the owner ever notices — that's why we recalibrate after every service, not just after compressor work.",
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
            src="/images/services/wine-cooler-repair.webp"
            alt="Sub-Zero Wine Cooler Repair Service in South Florida"
            className="w-full h-[300px] md:h-[450px] rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#0B1D33]">Sub-Zero Wine Cooler & Wine Column Repair — Recalibrated After Every Service</h2>
                <p className="text-[#64748B] leading-relaxed text-lg">
                  Wine columns are the most precision-sensitive units Sub-Zero makes. A
                  two-degree drift over a week ages a vintage faster than the owner ever
                  notices. After 8-10 years, most units quietly drift below the 50%
                  humidity target — invisible to the owner, slow death for the corks. Our
                  recalibration after every service prevents this from happening to your
                  collection.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  We service every Sub-Zero wine storage configuration — single-zone,
                  dual-zone, integrated wine columns, and undercounter units. Common
                  failures include temperature drift between zones, compressor short-cycling,
                  evaporator coil frost-over, worn door seals letting humidity escape, and
                  electronic control board issues from sustained voltage instability.
                </p>
                <p className="text-[#64748B] leading-relaxed">
                  After every wine cooler repair we perform, the unit gets recalibrated —
                  not just after compressor work. We bring the cabinet to setpoint, verify
                  with a calibrated thermocouple at three shelf positions, measure humidity
                  with a calibrated hygrometer, and adjust the control board to compensate
                  for any drift. Documented on the invoice.
                </p>
              </div>

              <div className="bg-[#F8FAFC] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">Wine Cooler Models We Service</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Built-In Wine Storage (BW Series)",
                    "Integrated Wine Storage (IW Series)",
                    "Designer Wine Storage (DEW Series)",
                    "Undercounter Wine Units (UW Series)",
                    "Wine Storage Columns",
                    "Dual-Zone Wine Coolers",
                    "Side-by-Side Wine & Beverage",
                    "Custom Panel Wine Units",
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

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#0B1D33] mb-4">Ideal Wine Storage Conditions</h2>
                <p className="text-[#64748B] mb-4">Proper wine storage requires precise environmental control. Here are the conditions your Sub-Zero should maintain:</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: "Red Wine Temp", value: "55-65°F" },
                    { label: "White Wine Temp", value: "45-55°F" },
                    { label: "Humidity Level", value: "50-70%" },
                    { label: "Vibration", value: "Minimal to none" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-[#0B1D33]">{item.value}</div>
                      <div className="text-sm text-[#64748B]">{item.label}</div>
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
                    { label: "Same-Day Service", detail: "Protect your collection fast" },
                    { label: "Genuine Sub-Zero Parts", detail: "Factory-authorized components" },
                    { label: "Post-Repair Calibration", detail: "Precision temperature & humidity" },
                    { label: "Certified Technicians", detail: "30+ years wine cooler experience" },
                    { label: "24/7 Availability", detail: "No extra charge for emergencies" },
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
                <p className="text-sm text-white/80 mb-4">Protect your wine collection now</p>
                <a href="tel:+18006514528" className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-lg font-bold transition-colors w-full text-lg">(800) 651-4528</a>
                <Link href="/contact" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0B1D33] px-6 py-3 rounded-lg font-semibold transition-colors w-full mt-3">Request Service Call</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#0B1D33] mb-4">Common Sub-Zero Wine Cooler Problems We Fix</h2>
          <p className="text-[#64748B] mb-10 max-w-3xl">Your wine deserves expert care. Here are the issues we solve most often.</p>
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
          <h2 className="text-3xl font-bold text-[#0B1D33] mb-4">Our Wine Cooler Repair Process</h2>
          <p className="text-[#64748B] mb-10 max-w-3xl">Precision repairs to protect your investment — here is what to expect.</p>
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
              { q: "Will my wine be safe during the repair?", a: "We work quickly to minimize any temperature disruption. For longer repairs, we advise on temporary storage to keep your wines at safe temperatures." },
              { q: "How do I know if my wine cooler temperature is off?", a: "If wines taste different than expected, corks are drying out, or the display shows inconsistent readings, your cooler likely needs professional attention." },
              { q: "Do you calibrate the unit after repair?", a: "Yes. After every repair, we calibrate your wine cooler to maintain the precise temperature and humidity your collection requires." },
              { q: "Can you repair dual-zone wine coolers?", a: "Absolutely. We service all Sub-Zero wine cooler configurations including single-zone, dual-zone, and multi-zone units." },
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
            ].filter(s => s.href !== "/services/wine-cooler-repair").map((service) => (
              <Link key={service.href} href={service.href} className="bg-[#F8FAFC] hover:bg-[#0387cc] hover:text-white text-[#0B1D33] rounded-xl p-4 font-semibold text-sm transition-all text-center border border-gray-100 hover:border-[#0387cc]">
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreasGrid serviceType="Wine Cooler Repair" />

      <section className="bg-[#0387cc] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Schedule Your Wine Cooler Repair Today</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">Protect your wine collection with expert Sub-Zero repair. Same-day service across South Florida.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+18006514528" className="inline-flex items-center bg-white text-[#0B1D33] px-8 py-4 rounded-lg font-bold text-lg transition-colors hover:bg-gray-100">Call (800) 651-4528</a>
            <Link href="/contact" className="inline-flex items-center bg-[#f89406] hover:bg-[#e08505] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">Request Service Call</Link>
          </div>
        </div>
      </section>
    </>
  );
}
