import Link from "next/link";

export default function ReliableSolutionsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left text column */}
          <div className="lg:col-span-3 relative">
            <div className="border-l-4 border-[#00B4D8] pl-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-8">
                Reliable Solutions When You Need Them Most
              </h2>
              <p className="text-[#64748B] leading-relaxed mb-8">
                Appliance failures don&apos;t wait for a convenient time, which is why our emergency Sub-Zero repair service in Coral Gables, FL is available to help you get things back to normal quickly. Our team understands how crucial reliable refrigeration is, especially when it comes to preserving fresh ingredients or maintaining optimal conditions for stored goods. With our Sub-Zero fridge and freezer repair services, you can trust that your appliance will be back to operating efficiently in no time.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6">
                Trusted Technicians, Exceptional Results
              </h3>
              <p className="text-[#64748B] leading-relaxed mb-8">
                Every technician at our Sub-Zero repair center is trained to work exclusively with Sub-Zero appliances, using genuine parts and advanced diagnostic tools to ensure lasting repairs. We pride ourselves on transparent communication, prompt response times, and a commitment to customer satisfaction. Our team has built a reputation across Coral Gables, FL, for delivering dependable service with attention to detail and professionalism at every step.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6">
                Experience the Sub-Zero Difference
              </h3>
              <p className="text-[#64748B] leading-relaxed mb-10">
                Keep your Sub-Zero appliances performing flawlessly with expert service from a trusted team that understands the brand inside and out. Contact Sub-Zero repair services today to schedule your appointment and experience the quality care your luxury appliances deserve.
              </p>
            </div>

            <div className="mt-10 pl-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-[0_0_30px_rgba(248,148,6,0.25)] hover:shadow-[0_0_40px_rgba(248,148,6,0.4)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Request Service Call
              </Link>
            </div>
          </div>

          {/* Right decorative column */}
          <div className="lg:col-span-2 relative hidden lg:flex items-center justify-center min-h-[500px]">
            {/* Large navy gradient blob */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#0A2540] to-[#0F3460] opacity-90 blur-sm" />
            </div>
            {/* Decorative cyan ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border-2 border-[#00B4D8]/30 animate-pulse" />
            </div>
            {/* Stat highlight card */}
            <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center shadow-2xl">
              <div className="text-5xl font-extrabold text-[#00B4D8] mb-2">100%</div>
              <div className="text-white/90 font-semibold text-lg mb-1">Customer Satisfaction</div>
              <div className="w-12 h-1 bg-[#f89406] mx-auto rounded-full my-4" />
              <div className="text-5xl font-extrabold text-[#00B4D8] mb-2">24/7</div>
              <div className="text-white/90 font-semibold text-lg">Emergency Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
