import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sub-Zero Appliance Repair Coral Gables FL",
  description:
    "Trust our expert team for reliable repair services on all Sub-Zero appliances, including refrigerators, freezers, and more. Contact us today to schedule your service!",
  alternates: {
    canonical: "https://fivestarappliancerepairpros.com/services/",
  },
  openGraph: {
    title:
      "Sub-Zero Appliance Repair Coral Gables FL - Sub-Zero Repair Services",
    description:
      "Trust our expert team for reliable repair services on all Sub-Zero appliances, including refrigerators, freezers, and more. Contact us today to schedule your service!",
    url: "https://fivestarappliancerepairpros.com/services/",
  },
};

const servicesList = [
  {
    title: "Refrigerator Repair",
    href: "/services/refrigerator-repair",
    image: "/images/services/refrigerator-repair.webp",
    description:
      "Expert repair services for all Sub-Zero refrigerator models with genuine parts and same-day service.",
  },
  {
    title: "Freezer Repair",
    href: "/services/freezer-repair",
    image: "/images/services/freezer-repair.webp",
    description:
      "Professional freezer repair for all Sub-Zero freezer models. Quick diagnostics and reliable fixes.",
  },
  {
    title: "Ice Maker Repair",
    href: "/services/icemaker-repair",
    image: "/images/services/icemaker-repair.webp",
    description:
      "Specialized ice maker repair for Sub-Zero units. From low ice production to complete breakdowns.",
  },
  {
    title: "Wine Cooler Repair",
    href: "/services/wine-cooler-repair",
    image: "/images/services/wine-cooler-repair.webp",
    description:
      "Protect your wine collection with expert Sub-Zero wine cooler repair and temperature calibration.",
  },
  {
    title: "Marine Refrigeration Repair",
    href: "/services/sub-zero-marine-repair",
    image: "/images/services/marine-repair.webp",
    description:
      "Specialized marine refrigeration repair for Sub-Zero units on boats and yachts throughout South Florida.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0099CC] to-[#0077a3] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sub-Zero Refrigerator Service and Repair in South Florida
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            Trust our expert team for reliable repair services on all Sub-Zero
            appliances, including refrigerators, freezers, and more. Contact us
            today to schedule your service!
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#111111] mb-4">
            Keep Cool by Calling Us for Repairs
          </h2>
          <p className="text-[#555555] mb-6 max-w-4xl">
            You have no time to lose if your fridge or freezer is failing.
            Depend on our Sub-Zero Service Centers for emergency Sub-Zero
            refrigerator service and repair in South Florida. We&apos;ll save
            your food by repairing your refrigerator unit. The trained
            technicians at our company ensure your commercial or residential
            equipment is fully operational.
          </p>
          <h2 className="text-3xl font-bold text-[#111111] mb-4">
            Fast and Affordable Same-Day Refrigerator Repair
          </h2>
          <p className="text-[#555555] mb-12 max-w-4xl">
            Customers throughout the area trust us for emergency response when
            they have problems with their refrigeration equipment. Because our
            technicians are experienced and factory-trained, we deliver the
            highest-quality services to ensure your Sub-Zero equipment is fully
            operational as soon as possible.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100"
              >
                <div className="relative h-48 bg-slate-200">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#111111] group-hover:text-[#0099CC] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#555555] text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0099CC] to-[#0077a3] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Schedule Your Repair?
          </h2>
          <p className="text-gray-300 mb-8">
            Contact us today for fast, reliable Sub-Zero appliance repair
            throughout South Florida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Request Service Call
            </Link>
            <a
              href="tel:+18006514528"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#0099CC] px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              (800) 651-4528
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
