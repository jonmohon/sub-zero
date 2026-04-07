import type { Metadata } from "next";
import { faqItems } from "@/data/faq";
import FAQAccordion from "@/components/FAQAccordion";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: BUSINESS.siteUrl },
  { name: "Frequently Asked Questions", url: `${BUSINESS.siteUrl}/frequently-asked-questions/` },
]);

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Sub-Zero Repair Services",
  description:
    "Find answers to common questions about our Sub-Zero appliance repair services. Available 24/7 across South Florida.",
  alternates: {
    canonical:
      "https://fivestarappliancerepairpros.com/frequently-asked-questions/",
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-gradient-to-br from-[#0387cc] to-[#0F3460] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-300">
            Everything you need to know about our Sub-Zero appliance repair
            services across South Florida.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion items={faqItems} />

          <div className="mt-12 bg-[#00B4D8]/5 border border-[#00B4D8]/20 rounded-lg p-8 text-center">
            <h2 className="text-xl font-bold text-[#0387cc] mb-2">
              Still Have Questions?
            </h2>
            <p className="text-[#64748B] mb-4">
              Our team is available 24/7 to answer any questions about your
              Sub-Zero appliance repair needs.
            </p>
            <a
              href="tel:+18006514528"
              className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Call (800) 651-4528
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
