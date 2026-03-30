import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sub-Zero Freezer Repair South Florida",
  description:
    "Professional Sub-Zero freezer repair in South Florida. Fast, reliable service with genuine parts. Call (800) 651-4528 today.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/services/freezer-repair/",
  },
  openGraph: {
    title: "Sub-Zero Freezer Repair South Florida - Sub-Zero Repair Services",
    description:
      "Professional Sub-Zero freezer repair in South Florida. Fast, reliable service with genuine parts. Call (800) 651-4528 today.",
    url: "https://fivestarappliancerepairpros.com/services/freezer-repair/",
  },
};

export default function FreezerRepairPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0099CC] to-[#0077a3] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-4">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Freezer Repair</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">
            Sub-Zero Freezer Repair in South Florida
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-[#555555] leading-relaxed">
                A malfunctioning freezer can lead to significant food loss and
                costly replacements. Our Sub-Zero freezer repair specialists
                provide fast, reliable service throughout South Florida to get
                your freezer back to peak performance. We handle everything from
                minor fixes to major component replacements.
              </p>
              <p className="text-[#555555] leading-relaxed">
                Our factory-trained technicians are experts at diagnosing and
                resolving the most common Sub-Zero freezer issues, including
                temperature inconsistencies, excessive ice buildup, unusual
                noises, door seal problems, and compressor failures. We carry
                genuine Sub-Zero parts on every service call to ensure a
                first-visit fix whenever possible.
              </p>
              <p className="text-[#555555] leading-relaxed">
                Whether you have a built-in Sub-Zero freezer column, an
                integrated unit, or a freestanding model, our team has the
                expertise and parts inventory to restore proper operation
                quickly. We understand the urgency of freezer failures and offer
                same-day emergency service to minimize food spoilage and
                inconvenience.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-[#0099CC]/5 border border-[#0099CC]/20 rounded-lg p-6">
                <h3 className="font-semibold text-[#111111] mb-4">
                  Why Choose Us
                </h3>
                <ul className="space-y-3">
                  {[
                    "Same-Day Service",
                    "Genuine Parts",
                    "Certified Technicians",
                    "24/7 Availability",
                  ].map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 text-[#0099CC] flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-[#0099CC] to-[#0077a3] text-white rounded-lg p-6 text-center">
                <h3 className="font-semibold mb-2">Need Immediate Help?</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Our technicians are standing by 24/7
                </p>
                <a
                  href="tel:+18006514528"
                  className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-md font-semibold transition-colors w-full"
                >
                  (800) 651-4528
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0099CC] to-[#0077a3] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Schedule Your Freezer Repair Today
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center bg-[#f89406] hover:bg-[#e08505] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
          >
            Request Service Call
          </Link>
        </div>
      </section>
    </>
  );
}
