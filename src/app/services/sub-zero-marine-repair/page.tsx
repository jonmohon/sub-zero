import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sub-Zero Marine Refrigeration Repair South Florida",
  description:
    "Expert Sub-Zero marine refrigeration repair in South Florida. Keep your vessel's cooling systems running. Call (800) 651-4528.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/services/sub-zero-marine-repair/",
  },
  openGraph: {
    title:
      "Sub-Zero Marine Refrigeration Repair South Florida - Sub-Zero Repair Services",
    description:
      "Expert Sub-Zero marine refrigeration repair in South Florida. Keep your vessel's cooling systems running. Call (800) 651-4528.",
    url: "https://fivestarappliancerepairpros.com/services/sub-zero-marine-repair/",
  },
};

export default function MarineRepairPage() {
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
            <span className="text-gray-200">Marine Repair</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">
            Sub-Zero Marine Refrigeration Repair in South Florida
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-[#555555] leading-relaxed">
                Marine refrigeration systems face unique challenges that
                land-based units never encounter. Salt air exposure, constant
                vibration, power fluctuations, and the demanding marine
                environment all take a toll on your Sub-Zero equipment. Our
                specialized marine repair technicians understand these challenges
                and provide expert dockside service throughout South Florida.
              </p>
              <p className="text-[#555555] leading-relaxed">
                Whether you&apos;re docked at a marina in Miami, Fort
                Lauderdale, or anywhere along the South Florida coast, our team
                comes to you. We service Sub-Zero marine refrigerators, freezers,
                and ice makers on boats and yachts of all sizes. Our technicians
                are experienced with the specific wiring, ventilation, and space
                constraints found in marine installations.
              </p>
              <p className="text-[#555555] leading-relaxed">
                We carry a comprehensive inventory of genuine Sub-Zero marine
                parts and are equipped to handle corrosion-related repairs,
                compressor replacements, thermostat recalibrations, and
                electrical system diagnostics. Keep your vessel&apos;s cooling
                systems running reliably with our professional marine
                refrigeration repair service.
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
                    "Dockside Service",
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
                  Dockside service available throughout South Florida
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
            Schedule Your Marine Refrigeration Repair Today
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
