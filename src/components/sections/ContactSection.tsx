import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactSection() {
  return (
    <>
      {/* Contact CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="scale-in">
            <div className="relative overflow-hidden rounded-2xl text-white py-16 px-8 text-center" style={{ background: 'radial-gradient(ellipse at center, #1a3a5c 0%, #0F3460 40%, #0A2540 100%)' }}>
              {/* Decorative floating elements */}
              <div className="absolute top-8 left-8 w-24 h-24 border border-white/10 rounded-full" />
              <div className="absolute bottom-12 right-12 w-36 h-36 border border-white/[0.07] rounded-full" />
              <div className="absolute top-1/2 left-12 w-16 h-16 border border-[#00B4D8]/15 rounded-full -translate-y-1/2" />
              <div className="absolute top-16 right-20 w-1 h-16 bg-gradient-to-b from-[#00B4D8]/20 to-transparent rounded-full" />
              <div className="absolute bottom-16 left-24 w-1 h-12 bg-gradient-to-b from-transparent to-[#00B4D8]/15 rounded-full" />
              <div className="absolute top-6 right-1/3 w-20 h-20 bg-[#00B4D8]/[0.06] rounded-full blur-xl" />
              <div className="absolute bottom-6 left-1/4 w-28 h-28 bg-[#f89406]/[0.04] rounded-full blur-2xl" />

              {/* Subtle corner accents */}
              <div className="absolute top-0 left-0 w-24 h-0.5 bg-gradient-to-r from-[#00B4D8]/40 to-transparent" />
              <div className="absolute top-0 left-0 w-0.5 h-24 bg-gradient-to-b from-[#00B4D8]/40 to-transparent" />
              <div className="absolute bottom-0 right-0 w-24 h-0.5 bg-gradient-to-l from-[#00B4D8]/40 to-transparent" />
              <div className="absolute bottom-0 right-0 w-0.5 h-24 bg-gradient-to-t from-[#00B4D8]/40 to-transparent" />

              <div className="relative">
                <p className="text-white/80 font-semibold uppercase tracking-wider text-sm mb-2">
                  Contact Us
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                  Ready to schedule your Sub-Zero appliance repair? Contact us today for fast, reliable service throughout South Florida.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                  <Link
                    href="/contact"
                    className="btn-shimmer inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                    style={{ boxShadow: '0 0 30px rgba(248,148,6,0.3), 0 4px 15px rgba(248,148,6,0.2)' }}
                  >
                    Contact Us
                  </Link>
                  <a
                    href="tel:+18006514528"
                    className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0A2540] px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                  >
                    (800) 651-4528
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pre-footer banner */}
      <section className="bg-gradient-to-br from-[#020617] to-[#0A2540] text-white py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            <p className="text-lg md:text-xl font-medium text-white/90">
              Available 24 Hours A Day, 365 Days A Year.
            </p>
            <div className="h-10 w-px bg-white/20 hidden md:block" />
            <a
              href="tel:+18006514528"
              className="text-xl md:text-2xl font-bold hover:text-[#00B4D8] transition-colors"
            >
              (800) 651-4528
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
