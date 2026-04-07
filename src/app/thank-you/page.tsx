import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You - Sub-Zero Repair Services",
  description:
    "Thank you for contacting Sub-Zero Repair Services. We will be in touch shortly to schedule your service.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-12">
          <svg
            className="w-16 h-16 text-green-500 mx-auto mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-3xl font-bold text-[#0A2540] mb-4">
            Thank You!
          </h1>
          <p className="text-[#64748B] mb-2">
            Your service request has been received. One of our team members will
            contact you shortly to confirm your appointment.
          </p>
          <p className="text-[#64748B] mb-8">
            For immediate assistance, call us at{" "}
            <a
              href="tel:+18006514528"
              className="text-[#00B4D8] hover:text-[#0A2540] font-semibold"
            >
              (800) 651-4528
            </a>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white px-6 py-3 rounded-md font-semibold transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
