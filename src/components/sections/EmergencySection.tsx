import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const guaranteeIcons = [
  <svg key="shield" className="w-7 h-7 text-[#00B4D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="truck" className="w-7 h-7 text-[#00B4D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>,
  <svg key="doc" className="w-7 h-7 text-[#00B4D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  <svg key="clock" className="w-7 h-7 text-[#00B4D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="badge" className="w-7 h-7 text-[#00B4D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
];

export default function EmergencySection() {
  const guarantees = [
    "Satisfaction guarantee on all repairs",
    "Prompt arrival with parts in stock",
    "Transparent pricing with written estimates",
    "No extra charge for weekends or holidays",
    "Full warranty on parts and labor",
  ];

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(to bottom, #ffffff, #F8FAFC)" }}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f89406]/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00B4D8]/[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text + Guarantees */}
          <div>
            <ScrollReveal animation="fade-up">
              <p className="text-[#f89406] font-semibold uppercase tracking-[0.2em] mb-3 text-sm">Emergency Services</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1D33] mb-6 leading-tight">
                Do You Have a Refrigeration Emergency?
              </h2>
              <p className="text-[#64748B] leading-relaxed mb-10 text-lg">
                A broken Sub-Zero refrigerator can mean spoiled food and costly damage. Our emergency repair team is available 24/7 to respond quickly and get your appliance running again. We carry genuine parts on every truck so most repairs are completed in a single visit.
              </p>
            </ScrollReveal>

            {/* Guarantee Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {guarantees.map((item, index) => (
                <ScrollReveal key={item} animation="fade-up" delay={index * 80}>
                  <div
                    className="group bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-[#00B4D8]/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#00B4D8]/10 to-[#0387cc]/5 mb-3 group-hover:scale-110 transition-transform duration-300">
                      {guaranteeIcons[index]}
                    </div>
                    <div className="flex items-start gap-2.5">
                      <svg className="w-5 h-5 text-[#00B4D8] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#64748B] text-sm font-medium leading-snug">{item}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="fade-up" delay={500}>
              <Link
                href="/contact"
                className="btn-shimmer inline-flex items-center bg-[#f89406] hover:bg-[#e08505] text-white px-10 py-4.5 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(248,148,6,0.25)] hover:shadow-[0_0_40px_rgba(248,148,6,0.35)] hover:-translate-y-0.5"
              >
                Request Service Call
              </Link>
            </ScrollReveal>
          </div>

          {/* Right: Image with frame effect */}
          <div className="relative hidden lg:block">
            <ScrollReveal animation="slide-left">
              <div className="relative rounded-3xl overflow-hidden border border-gray-200/60 shadow-2xl shadow-black/10">
                <Image
                  src="/images/emergency-fridge.webp"
                  alt="Sub-Zero Refrigerator"
                  width={600}
                  height={500}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-[#00B4D8]/[0.06] -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl bg-[#f89406]/10 -z-10" />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
