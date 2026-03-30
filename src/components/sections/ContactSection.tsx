import Link from "next/link";

export default function ContactSection() {
  return (
    <>
      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#0099CC] to-[#0077a3] rounded-2xl text-white py-12 px-8 text-center">
            <p className="text-white/80 font-semibold uppercase tracking-wider text-sm mb-2">
              Contact Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Ready to schedule your Sub-Zero appliance repair? Contact us today for fast, reliable service throughout South Florida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:+18006514528"
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0099CC] px-8 py-4 rounded-md font-semibold text-lg transition-colors"
              >
                (800) 651-4528
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer banner */}
      <section className="bg-gradient-to-br from-[#0a1e3d] to-[#152232] text-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <p className="text-lg md:text-xl font-medium text-white/90">
            Available 24 Hours A Day, 365 Days A Year.
          </p>
          <div className="h-8 w-px bg-white/30 hidden md:block" />
          <a
            href="tel:+18006514528"
            className="text-xl md:text-2xl font-bold hover:text-[#0099CC] transition-colors"
          >
            +1 800 651 4528
          </a>
        </div>
      </section>
    </>
  );
}
