import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

const PAGE_URL = `${BUSINESS.siteUrl}/warranty/`;

// IMPORTANT: Verify the warranty terms below with the business owner before
// promoting this page. Defaults reflect a conservative industry standard
// (90 days workmanship + manufacturer pass-through on parts). Adjust the
// constants and FAQ entries to match the exact terms in your service
// agreement.
const WORKMANSHIP_PERIOD = "90 days";
const PARTS_PERIOD = "manufacturer warranty period (typically 1 year)";

export const metadata: Metadata = {
  title: { absolute: "Warranty | Sub-Zero Repair Services" },
  description:
    "Sub-Zero Repair Services stands behind every repair. Workmanship warranty, manufacturer parts coverage, and how to claim service across South Florida.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Warranty | Sub-Zero Repair Services",
    description:
      "Workmanship warranty + manufacturer parts coverage on every Sub-Zero repair across South Florida.",
    url: PAGE_URL,
    type: "website",
  },
};

const faqs = [
  {
    question: "What does your repair warranty cover?",
    answer: `Our workmanship warranty covers the specific repair we performed for ${WORKMANSHIP_PERIOD} from the date of service. If the same issue returns within that window, we come back at no additional charge for labor on the original repair. Replacement parts we install are separately covered by the manufacturer&apos;s warranty, ${PARTS_PERIOD}.`,
  },
  {
    question: "How long is the warranty on parts?",
    answer: `Genuine OEM parts we install carry the manufacturer&apos;s warranty, which is typically one full year for Sub-Zero, Wolf, and Cove components. Some major components such as compressors carry longer manufacturer warranties. We will tell you the exact warranty on any specific part before installing it.`,
  },
  {
    question: "What is not covered by the warranty?",
    answer: `The workmanship warranty does not cover new failures unrelated to the original repair, damage caused by power surges, water damage, accidental damage, neglect, abuse, unauthorized repairs, or normal wear-and-tear on consumable items such as water filters and bulbs. It also does not cover labor on a different appliance or a different fault on the same appliance.`,
  },
  {
    question: "How do I make a warranty claim?",
    answer: `Call ${BUSINESS.phone} or use the contact form to schedule a return visit. Reference your original service date or invoice number so we can pull the job record quickly. If the issue is covered, we will dispatch a technician at no additional labor charge. If diagnosis shows the issue is unrelated to our previous repair, standard service rates apply.`,
  },
  {
    question: "Do you guarantee your work in writing?",
    answer: `Yes. The workmanship warranty appears on every invoice we issue, with the specific repair, the warranty period, and the date the warranty starts. Keep your invoice — it is the simplest way to verify coverage.`,
  },
  {
    question: "Is the warranty transferable if I sell my home?",
    answer: `The workmanship warranty stays with the appliance, not the homeowner. If you sell your home during the warranty period, the new owner can request warranty service on the original repair using the original invoice as proof of service.`,
  },
];

export default function WarrantyPage() {
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BUSINESS.siteUrl },
    { name: "Warranty", url: PAGE_URL },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-200">Warranty</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Warranty</h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            Every Sub-Zero repair we complete is backed by a workmanship warranty plus the
            full manufacturer warranty on every genuine part we install.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-[#334155] leading-relaxed mb-10">
            <strong className="text-[#0B1D33]">In short:</strong> if the repair we made fails within {WORKMANSHIP_PERIOD},
            we come back and fix it at no additional labor charge. Replacement parts are separately
            covered by the manufacturer for {PARTS_PERIOD}. We&apos;ve operated this way since 1994.
          </p>

          <div className="grid sm:grid-cols-2 gap-5 mb-12">
            <CoverageCard
              title="Workmanship"
              period={WORKMANSHIP_PERIOD}
              description="Same fault, same appliance, same component — we return at no labor charge."
              accent="#0387cc"
            />
            <CoverageCard
              title="Genuine OEM Parts"
              period={PARTS_PERIOD}
              description="Sub-Zero, Wolf, Cove, Viking, Thermador, Bosch, and Miele factory parts."
              accent="#f89406"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D33] mt-8 mb-4">What&apos;s Covered</h2>
          <ul className="space-y-2 text-[#334155] mb-8">
            <Bullet>The specific repair we performed (parts + labor) for {WORKMANSHIP_PERIOD}</Bullet>
            <Bullet>Genuine OEM parts we install — manufacturer warranty period</Bullet>
            <Bullet>Return diagnostic visits if the original symptom returns</Bullet>
            <Bullet>Same-day or next-day scheduling for warranty service in our coverage area</Bullet>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D33] mt-12 mb-4">What&apos;s Not Covered</h2>
          <ul className="space-y-2 text-[#334155] mb-8">
            <Bullet>New failures unrelated to the original repair</Bullet>
            <Bullet>Damage from power surges, lightning, water, or accidents</Bullet>
            <Bullet>Issues caused by unauthorized subsequent repairs by other parties</Bullet>
            <Bullet>Normal wear on consumables (water filters, bulbs, gaskets at end of life)</Bullet>
            <Bullet>Repairs to a different appliance or a different fault on the same appliance</Bullet>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D33] mt-12 mb-4">How to Claim Warranty Service</h2>
          <ol className="space-y-3 text-[#334155] mb-12 list-decimal list-inside marker:text-[#0387cc] marker:font-bold">
            <li>Call <a href={BUSINESS.phoneHref} className="text-[#0387cc] font-semibold hover:text-[#0F3460]">{BUSINESS.phone}</a> or use the contact form.</li>
            <li>Reference your original service date or invoice number.</li>
            <li>We&apos;ll pull the job record and confirm warranty coverage on the spot.</li>
            <li>Covered issues get a return visit at no additional labor charge.</li>
          </ol>

          <h2 className="text-2xl md:text-3xl font-bold text-[#0B1D33] mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-12">
            {faqs.map((f) => (
              <details
                key={f.question}
                className="group bg-white border border-gray-200 rounded-xl p-5 open:shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer font-semibold text-[#0B1D33]">
                  {f.question}
                  <svg
                    className="w-5 h-5 text-[#0387cc] shrink-0 transition-transform group-open:rotate-45"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <p
                  className="text-[#334155] leading-relaxed mt-4"
                  dangerouslySetInnerHTML={{ __html: f.answer }}
                />
              </details>
            ))}
          </div>

          <div className="bg-[#00B4D8]/5 border border-[#00B4D8]/20 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-[#0B1D33] mb-2">
              Need warranty service on a previous repair?
            </h3>
            <p className="text-[#64748B] mb-4">
              Have your invoice handy and we&apos;ll get a technician scheduled.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={BUSINESS.phoneHref} className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-md font-semibold transition-colors">
                Call {BUSINESS.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center border-2 border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white px-6 py-3 rounded-md font-semibold transition-colors">
                Request Warranty Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CoverageCard({
  title,
  period,
  description,
  accent,
}: {
  title: string;
  period: string;
  description: string;
  accent: string;
}) {
  return (
    <div
      className="relative bg-white border border-gray-200 rounded-2xl p-6 overflow-hidden"
      style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: accent }} />
      <p className="text-xs uppercase tracking-[0.15em] font-semibold text-[#64748B] mb-1">{title}</p>
      <p className="text-2xl font-bold text-[#0B1D33] mb-2">{period}</p>
      <p className="text-sm text-[#64748B] leading-relaxed">{description}</p>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#f89406] mt-2.5" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}
