import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background — subtle gradient instead of flat white */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f0f7fc] via-white to-[#fef9f0]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0387cc]/[0.04] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f89406]/[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      {/* Desktop: image behind text */}
      <div className="absolute inset-0 hidden lg:block z-[1]">
        <Image
          src="/images/hero.webp"
          alt="Sub-Zero Appliance Repair Technician"
          width={1400}
          height={900}
          sizes="(min-width: 1024px) 100vw, 1px"
          className="absolute right-0 bottom-0 w-auto h-full object-contain object-right-bottom"
          style={{ minHeight: "100%", marginLeft: "25%" }}
          priority
          fetchPriority="high"
        />
        <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#f0f7fc] via-[#f0f7fc]/95 to-transparent w-[60%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl py-16 lg:py-28">
          {/* 24/7 Emergency Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg shadow-red-600/30">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xl sm:text-2xl font-extrabold tracking-wide uppercase">
                24/7 Emergency Service
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0B1D33] leading-[1.08] tracking-tight">
            Fast Same-Day Sub-Zero Appliance Repair Across South Florida
          </h1>

          <p className="mt-6 text-lg text-[#64748B] leading-relaxed">
            Fast, reliable repair services for Sub-Zero refrigerators, freezers,
            ice makers, and more. Open holidays and weekends.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-shimmer group inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,165,78,0.3)] hover:-translate-y-0.5 tracking-wide"
            >
              Request Service Call
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-[#0387cc]/30 text-[#0B1D33] hover:text-white hover:bg-[#0387cc] px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 tracking-wide"
            >
              View Services
            </Link>
          </div>

          {/* Divider */}
          <div className="mt-8 w-full max-w-sm border-t border-gray-200/60" />

          {/* Emergency Call */}
          <div className="mt-6 flex items-center gap-4">
            <span className="w-10 h-10 bg-[#0387cc]/10 border border-[#0387cc]/20 rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <svg className="w-4 h-4 text-[#f89406]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <div>
              <span className="text-[#f89406] font-semibold text-xs tracking-[0.15em] uppercase">
                Emergency Call:
              </span>{" "}
              <a href="tel:+18006514528" className="text-[#0B1D33] font-bold text-lg hover:text-[#f89406] transition-colors">
                (800) 651-4528
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 flex items-center gap-8">
            <div>
              <div className="text-2xl font-bold text-[#0B1D33]">30+</div>
              <div className="text-[10px] text-[#64748B] uppercase tracking-[0.15em] mt-0.5">Years Exp.</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <div className="text-2xl font-bold text-[#0B1D33]">82</div>
              <div className="text-[10px] text-[#64748B] uppercase tracking-[0.15em] mt-0.5">Cities Served</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <div className="text-2xl font-bold text-[#0B1D33]">24/7</div>
              <div className="text-[10px] text-[#64748B] uppercase tracking-[0.15em] mt-0.5">Availability</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: hero image clearly visible below text */}
      <div className="relative lg:hidden w-full h-[350px] sm:h-[420px] z-10">
        <Image
          src="/images/hero.webp"
          alt="Sub-Zero Appliance Repair Technician"
          fill
          sizes="100vw"
          className="object-contain object-bottom"
          loading="eager"
        />
      </div>

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="h-px bg-gradient-to-r from-transparent via-[#f89406]/40 to-transparent" />
      </div>
    </section>
  );
}
