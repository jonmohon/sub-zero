import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1D33] via-[#0A2540] to-[#0D2847] min-h-[650px] lg:min-h-[750px]">
      {/* Hero image — large, covering right side */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute inset-0 z-[2] hero-image-animate">
          <Image
            src="/images/hero.webp"
            alt="Sub-Zero Appliance Repair Technician"
            width={1400}
            height={900}
            className="absolute right-0 bottom-0 w-auto h-full object-contain object-right-bottom"
            style={{ minHeight: "100%", marginLeft: "25%" }}
            priority
          />
        </div>
        {/* Gradient fade so text is readable */}
        <div className="absolute inset-0 z-[3] bg-gradient-to-r from-[#0A2540] via-[#0A2540]/90 to-transparent w-[60%]" />
      </div>

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.02] z-[1]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="h-px bg-gradient-to-r from-transparent via-[#f89406]/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl py-20 lg:py-28">
          {/* Overline */}
          <div className="hero-animate hero-animate-delay-1 flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#f89406]" />
            <span className="text-[#f89406] text-xs font-semibold tracking-[0.2em] uppercase">
              24/7 Emergency Service
            </span>
          </div>

          <h1 className="hero-animate hero-animate-delay-2 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.08] tracking-tight">
            Same-Day Sub-Zero Appliance Repair Across South Florida
          </h1>

          <p className="hero-animate hero-animate-delay-3 mt-6 text-lg text-white/50 leading-relaxed">
            Fast, reliable repair services for Sub-Zero refrigerators, freezers,
            ice makers, and more.
          </p>

          <div className="hero-animate hero-animate-delay-4 mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-shimmer group inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,165,78,0.3)] hover:-translate-y-0.5 tracking-wide"
            >
              Request Service Call
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border border-white/20 text-white/80 hover:text-white hover:border-white/40 px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 tracking-wide hover:bg-white/[0.05]"
            >
              View Services
            </Link>
          </div>

          {/* Divider */}
          <div className="hero-animate hero-animate-delay-5 mt-8 w-full max-w-sm border-t border-white/10" />

          {/* Emergency Call */}
          <div className="hero-animate hero-animate-delay-5 mt-6 flex items-center gap-4">
            <span className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-[#f89406]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <div>
              <span className="text-[#f89406] font-semibold text-xs tracking-[0.15em] uppercase">
                Emergency Call:
              </span>{" "}
              <a href="tel:+18006514528" className="text-white font-bold text-lg hover:text-[#f89406] transition-colors">
                (800) 651-4528
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="hero-animate hero-animate-delay-6 mt-8 flex items-center gap-8">
            <div>
              <div className="text-2xl font-bold text-white">30+</div>
              <div className="text-[10px] text-white/30 uppercase tracking-[0.15em] mt-0.5">Years Exp.</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">82</div>
              <div className="text-[10px] text-white/30 uppercase tracking-[0.15em] mt-0.5">Cities Served</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-[10px] text-white/30 uppercase tracking-[0.15em] mt-0.5">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
