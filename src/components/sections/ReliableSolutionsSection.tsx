import Link from "next/link";

export default function ReliableSolutionsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#152232] text-center mb-8">
          Reliable Solutions When You Need Them Most
        </h2>
        <p className="text-[#555555] text-center leading-relaxed mb-8">
          Appliance failures don&apos;t wait for a convenient time, which is why our emergency Sub-Zero repair service in Coral Gables, FL is available to help you get things back to normal quickly. Our team understands how crucial reliable refrigeration is, especially when it comes to preserving fresh ingredients or maintaining optimal conditions for stored goods. With our Sub-Zero fridge and freezer repair services, you can trust that your appliance will be back to operating efficiently in no time.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-[#152232] text-center mb-6">
          Trusted Technicians, Exceptional Results
        </h3>
        <p className="text-[#555555] text-center leading-relaxed mb-8">
          Every technician at our Sub-Zero repair center is trained to work exclusively with Sub-Zero appliances, using genuine parts and advanced diagnostic tools to ensure lasting repairs. We pride ourselves on transparent communication, prompt response times, and a commitment to customer satisfaction. Our team has built a reputation across Coral Gables, FL, for delivering dependable service with attention to detail and professionalism at every step.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-[#152232] text-center mb-6">
          Experience the Sub-Zero Difference
        </h3>
        <p className="text-[#555555] text-center leading-relaxed mb-10">
          Keep your Sub-Zero appliances performing flawlessly with expert service from a trusted team that understands the brand inside and out. Contact Sub-Zero repair services today to schedule your appointment and experience the quality care your luxury appliances deserve.
        </p>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-8 py-4 rounded-sm font-semibold text-base transition-colors"
          >
            Request Service Call
          </Link>
        </div>
      </div>
    </section>
  );
}
