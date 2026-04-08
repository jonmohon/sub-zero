import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function ReliableSolutionsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F8FAFC] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left text column */}
          <div className="lg:col-span-3 relative">
            <ScrollReveal animation="slide-right">
              <div className="border-l-4 border-[#00B4D8] pl-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B1D33] mb-8">
                  Reliable Solutions When You Need Them Most
                </h2>
                <p className="text-[#64748B] leading-relaxed mb-8">
                  Appliance failures don&apos;t wait for a convenient time, which is why our emergency Sub-Zero repair service in Coral Gables, FL is available to help you get things back to normal quickly. Our team understands how crucial reliable refrigeration is, especially when it comes to preserving fresh ingredients or maintaining optimal conditions for stored goods. With our Sub-Zero fridge and freezer repair services, you can trust that your appliance will be back to operating efficiently in no time.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1D33] mb-6">
                  Trusted Technicians, Exceptional Results
                </h3>
                <p className="text-[#64748B] leading-relaxed mb-8">
                  Every technician at our Sub-Zero repair center is trained to work exclusively with Sub-Zero appliances, using genuine parts and advanced diagnostic tools to ensure lasting repairs. We pride ourselves on transparent communication, prompt response times, and a commitment to customer satisfaction. Our team has built a reputation across Coral Gables, FL, for delivering dependable service with attention to detail and professionalism at every step.
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1D33] mb-6">
                  Experience the Sub-Zero Difference
                </h3>
                <p className="text-[#64748B] leading-relaxed mb-10">
                  Keep your Sub-Zero appliances performing flawlessly with expert service from a trusted team that understands the brand inside and out. Contact Sub-Zero repair services today to schedule your appointment and experience the quality care your luxury appliances deserve.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="mt-10 pl-8">
                <Link
                  href="/contact"
                  className="btn-shimmer inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-10 py-5 rounded-xl font-semibold text-lg shadow-[0_0_30px_rgba(248,148,6,0.25)] hover:shadow-[0_0_40px_rgba(248,148,6,0.4)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request Service Call
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — clean stat cards */}
          <div className="lg:col-span-2 relative hidden lg:flex flex-col gap-6 sticky top-24">
            <ScrollReveal animation="slide-left">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center card-hover">
                <div className="text-5xl font-extrabold text-[#0387cc] mb-1">100%</div>
                <div className="text-[#0B1D33] font-semibold text-lg">Customer Satisfaction</div>
                <p className="text-sm text-[#64748B] mt-2">Backed by hundreds of 5-star reviews across South Florida</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="slide-left" delay={150}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center card-hover">
                <div className="text-5xl font-extrabold text-[#f89406] mb-1">24/7</div>
                <div className="text-[#0B1D33] font-semibold text-lg">Emergency Service</div>
                <p className="text-sm text-[#64748B] mt-2">No extra charge for nights, weekends, or holidays</p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="slide-left" delay={300}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center card-hover">
                <div className="text-5xl font-extrabold text-[#0387cc] mb-1">30+</div>
                <div className="text-[#0B1D33] font-semibold text-lg">Years Experience</div>
                <p className="text-sm text-[#64748B] mt-2">Factory-trained technicians with genuine Sub-Zero parts</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
