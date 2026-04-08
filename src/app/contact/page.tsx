import type { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - South Florida",
  description:
    "Contact Sub-Zero Repair Services for fast, reliable appliance repair in South Florida. Call (800) 651-4528 or fill out our online form.",
  alternates: {
    canonical: "https://fivestarappliancerepairpros.com/contact/",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300">
            Schedule your Sub-Zero appliance repair service today.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#0387cc] mb-6">
                Request Service
              </h2>
              <ContactForm />
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-[#0387cc] mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3 text-sm text-[#64748B]">
                  <p className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#00B4D8] mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>
                      Subzero Service Centers
                      <br />
                      Miami, FL 33131
                    </span>
                  </p>
                  <p className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#00B4D8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href="tel:+18006514528"
                      className="hover:text-[#00B4D8]"
                    >
                      (800) 651-4528
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <svg
                      className="w-5 h-5 text-[#00B4D8]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:info@fivestarappliancerepairpros.com"
                      className="hover:text-[#00B4D8]"
                    >
                      info@fivestarappliancerepairpros.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="bg-[#00B4D8]/5 border border-[#00B4D8]/20 rounded-lg p-6">
                <h3 className="font-semibold text-[#0387cc] mb-2">
                  Business Hours
                </h3>
                <p className="text-sm text-[#64748B]">
                  Available 24 Hours a Day, 365 Days a Year
                </p>
                <p className="text-sm text-[#64748B] mt-2">
                  No extra charge for weekends or holidays!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
