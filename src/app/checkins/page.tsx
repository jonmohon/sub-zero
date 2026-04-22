import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";
import { getCheckins } from "@/lib/checkins";

export const metadata: Metadata = {
  title: { absolute: "Recent Work | Sub-Zero Repair Check-Ins South Florida" },
  description:
    "See our recent Sub-Zero appliance repair work across South Florida. Real service calls from Miami-Dade, Broward, and Palm Beach counties.",
  alternates: {
    canonical: "https://fivestarappliancerepairpros.com/checkins/",
  },
};

export default async function CheckinsPage() {
  const checkins = await getCheckins();

  return (
    <>
      <section className="bg-[#0387cc] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Recent Work</h1>
          <p className="text-lg text-gray-300">
            See our latest Sub-Zero appliance repair check-ins from across South
            Florida.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {checkins.length === 0 ? (
            <p className="text-center text-gray-500 py-12">
              No check-ins available at this time.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {checkins.map((checkin) => (
                <article
                  key={checkin.page_item_url}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                >
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                      __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "CheckInAction",
                        agent: {
                          "@type": "Organization",
                          name: BUSINESS.name,
                          telephone: BUSINESS.phoneSchema,
                          address: {
                            "@type": "PostalAddress",
                            streetAddress: BUSINESS.address.street,
                            addressLocality: BUSINESS.address.city,
                            addressRegion: BUSINESS.address.stateShort,
                            postalCode: BUSINESS.address.zip,
                          },
                        },
                        location: {
                          "@type": "Place",
                          address: {
                            "@type": "PostalAddress",
                            addressLocality: checkin.data.City,
                            addressRegion: checkin.data.State,
                            postalCode: checkin.data.Zip,
                            addressCountry: "US",
                          },
                        },
                      }),
                    }}
                  />
                  {checkin.data.FeaturedImageURL && (
                    <div className="h-48 bg-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={checkin.data.FeaturedImageURL}
                        alt={checkin.data.Title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <time dateTime={checkin.data.CreateDateISO}>
                        {checkin.data.CreateDateDisplay ?? checkin.data.CreateDate}
                      </time>
                      <span>|</span>
                      <span>{checkin.data.CityStateZip}</span>
                    </div>
                    <h2 className="text-lg font-bold text-[#0B1D33] mb-3">
                      {checkin.data.Title}
                    </h2>
                    <div
                      className="text-sm text-[#64748B] leading-relaxed prose prose-sm max-w-none"
                      dangerouslySetInnerHTML={{ __html: checkin.data.Body }}
                    />
                  </div>
                </article>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <div className="bg-[#0387cc] text-white rounded-lg p-8 inline-block">
              <h2 className="text-xl font-bold mb-2">
                Need Sub-Zero Repair Service?
              </h2>
              <p className="text-gray-300 mb-4">
                Same-day service available across South Florida
              </p>
              <a
                href="tel:+18006514528"
                className="inline-flex items-center justify-center bg-[#f89406] hover:bg-[#e08505] text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Call (800) 651-4528
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
