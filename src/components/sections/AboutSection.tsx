import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-gradient-to-br from-[#0099CC] to-[#0077a3] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-white/80 font-semibold uppercase tracking-wider mb-8 text-center">About Us</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left card */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-4">
              Top-Quality Sub-Zero Appliance Repair in Coral Gables, FL
            </h2>
            <p className="text-[#555555] leading-relaxed mb-6">
              We specialize in maintaining, diagnosing, and restoring high-end refrigeration equipment. With over 30 years of experience, our factory-trained technicians deliver the highest quality Sub-Zero appliance repair services throughout South Florida.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-[#0099CC] font-semibold hover:underline"
            >
              Learn More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          {/* Right card */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-4">
              Comprehensive Repairs Tailored to Your Needs
            </h2>
            <p className="text-[#555555] leading-relaxed mb-6">
              From residential refrigerators to marine refrigeration systems, we provide full-service solutions for all your Sub-Zero appliance needs. Our technicians carry genuine parts and have the training to handle any repair.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center text-[#0099CC] font-semibold hover:underline"
            >
              View Services
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
