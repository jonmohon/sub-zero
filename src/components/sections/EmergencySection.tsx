import Image from "next/image";
import Link from "next/link";

export default function EmergencySection() {
  const guarantees = [
    "Satisfaction guarantee on all repairs",
    "Prompt arrival with parts in stock",
    "Transparent pricing with written estimates",
    "No extra charge for weekends or holidays",
    "Full warranty on parts and labor",
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text + Guarantees */}
          <div>
            <h3 className="text-[#f89406] font-semibold uppercase tracking-wider mb-2">Emergency Services</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
              Do You Have a Refrigeration Emergency?
            </h2>
            <p className="text-[#555555] leading-relaxed mb-8">
              A broken Sub-Zero refrigerator can mean spoiled food and costly damage. Our emergency repair team is available 24/7 to respond quickly and get your appliance running again. We carry genuine parts on every truck so most repairs are completed in a single visit.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {guarantees.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                  <svg className="w-5 h-5 text-[#0099CC] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#555555] text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center bg-[#f89406] hover:bg-[#e08505] text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg"
            >
              Request Service Call
            </Link>
          </div>
          {/* Right: Image */}
          <div className="relative hidden lg:block">
            <Image
              src="/images/emergency-fridge.webp"
              alt="Sub-Zero Refrigerator"
              width={600}
              height={500}
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
