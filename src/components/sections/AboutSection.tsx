import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSection() {
  return (
    <section className="relative bg-[#F8FAFC] py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#00B4D8]/20 to-transparent" />
        <div className="absolute bottom-20 right-0 w-48 h-[2px] bg-gradient-to-l from-transparent via-[#00B4D8]/20 to-transparent" />
        <div className="absolute top-12 right-16 w-20 h-20 rounded-full border border-[#00B4D8]/10" />
        <div className="absolute bottom-16 left-12 w-14 h-14 rounded-full border border-[#0387cc]/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#00B4D8]/[0.04]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal animation="blur-up">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[#00B4D8]" />
              <p className="text-[#00B4D8] font-semibold uppercase tracking-wider text-sm">About Us</p>
              <span className="h-[2px] w-8 bg-gradient-to-l from-transparent to-[#00B4D8]" />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left card */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-10 shadow-xl border border-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 h-full">
              <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-[#00B4D8] via-[#0387cc] to-[#00B4D8] rounded-b-full opacity-60" />
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#00B4D8]/5 group-hover:bg-[#00B4D8]/10 transition-colors duration-500" />

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D33] mb-4 leading-tight">
                Top-Quality Sub-Zero Appliance Repair in Coral Gables, FL
              </h2>
              <p className="text-[#64748B] leading-relaxed mb-8 text-base">
                We specialize in maintaining, diagnosing, and restoring high-end refrigeration equipment. With over 30 years of experience, our factory-trained technicians deliver the highest quality Sub-Zero appliance repair services throughout South Florida.
              </p>
              <Link
                href="/sub-zero-appliance-repair-in-south-florida"
                className="inline-flex items-center gap-2 text-[#00B4D8] font-semibold group/link hover:gap-3 transition-all duration-300"
              >
                About Our Repair Services
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>

          {/* Right card */}
          <ScrollReveal animation="fade-up" delay={250}>
            <div className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-10 shadow-xl border border-white/20 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 h-full">
              <div className="absolute top-0 left-8 right-8 h-[3px] bg-gradient-to-r from-[#f89406] via-[#0387cc] to-[#f89406] rounded-b-full opacity-60" />
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#f89406]/5 group-hover:bg-[#f89406]/10 transition-colors duration-500" />

              <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D33] mb-4 leading-tight">
                Comprehensive Repairs Tailored to Your Needs
              </h2>
              <p className="text-[#64748B] leading-relaxed mb-8 text-base">
                From residential refrigerators to marine refrigeration systems, we provide full-service solutions for all your Sub-Zero appliance needs. Our technicians carry genuine parts and have the training to handle any repair.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[#00B4D8] font-semibold group/link hover:gap-3 transition-all duration-300"
              >
                View Services
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
