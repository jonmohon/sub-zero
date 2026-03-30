import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sub-Zero Refrigerator Repair Coral Gables FL",
  description:
    "Expert Sub-Zero refrigerator repair in Coral Gables, FL. Same-day service, genuine parts, and certified technicians. Call (800) 651-4528 for fast, reliable repairs.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/services/refrigerator-repair/",
  },
  openGraph: {
    title:
      "Sub-Zero Refrigerator Repair Coral Gables FL - Sub-Zero Repair Services",
    description:
      "Expert Sub-Zero refrigerator repair in Coral Gables, FL. Same-day service, genuine parts, and certified technicians. Call (800) 651-4528 for fast, reliable repairs.",
    url: "https://fivestarappliancerepairpros.com/services/refrigerator-repair/",
  },
};

export default function RefrigeratorRepairPage() {
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
            <span className="text-gray-200">Refrigerator Repair</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold">
            Sub-Zero Refrigerator Repair in South Florida
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-[#555555] leading-relaxed">
                You have no time to lose if your fridge or freezer is failing.
                Depend on our Sub-Zero Service Centers for emergency Sub-Zero
                refrigerator service and repair in South Florida. We&apos;ll
                save your food by repairing your refrigerator unit. The trained
                technicians at our company ensure your commercial or residential
                equipment is fully operational. That means your food stays fresh
                and you save money by keeping it that way.
              </p>
              <p className="text-[#555555] leading-relaxed">
                Customers throughout the area trust us for emergency response
                when they have problems with their refrigeration equipment.
                Because our technicians are experienced and factory-trained, we
                deliver the highest-quality services to ensure your Sub-Zero
                equipment is fully operational as soon as possible.
              </p>
              <p className="text-[#555555] leading-relaxed">
                If your refrigerator breaks, you need immediate emergency
                services. At our company, we have extensive experience in
                repairing all types of Sub-Zero units. In addition, we keep a
                large supply of authentic Sub-Zero refrigerator parts on our
                trucks. This ensures that we are able to fix everything -- from
                freestanding units to built-in models. You can depend on us for
                same-day repair, affordable services, and high-quality
                workmanship.
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
            Schedule Your Refrigerator Repair Today
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
