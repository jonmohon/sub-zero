import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Sub-Zero Ice Maker, Appliance & Marine Repair and Freezer Service Center Coral Gables FL - Sub-Zero Repair Services",
    template: "%s - Sub-Zero Repair Services",
  },
  description:
    "Looking for the same caliber repair and maintenance as our appliances? Sub-Zero Repair Services provides 24/7 top-notch repairs for your Sub-Zero appliances. Fast, reliable, and certified technicians ready to restore your appliances. Book now!",
  metadataBase: new URL("https://fivestarappliancerepairpros.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    locale: "en_US",
    siteName: "Sub-Zero Repair Services",
    type: "website",
    images: [
      {
        url: "/images/logo.webp",
        alt: "Sub-Zero Repair Services",
      },
    ],
  },
  twitter: {
    card: "summary",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
  },
  verification: {
    google: [
      "rWLGPBjq59xQZREcWcNhjH4ejzYkyLiXVTaPg_YsUHo",
      "vgl2IyvUzNdt4WYXQ8vEINiE2YEO1M8ANLRzMdXKZBA",
    ],
    other: {
      "msvalidate.01": ["497566C831E8FDD23DCD2BA9EE408E24"],
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Sub-Zero Repair Company",
              telephone: "+1 800 651 4528",
              address: {
                "@type": "PostalAddress",
                name: "Subzero Service Centers",
                addressLocality: "Miami",
                addressRegion: "FL",
                postalCode: "33131",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 25.7462141,
                longitude: -80.33623209999999,
              },
              openingHours: "Mo-Su 00:00-23:59",
              sameAs: [
                "https://facebook.com/subzeroservicecenters/",
                "https://x.com/SubZeroRepairFL",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["Organization", "HomeAndConstructionBusiness"],
              name: "Fivestar Appliance Repair Pros",
              email: "info@fivestarappliancerepairpros.com",
              telephone: "+1 800 651 4528",
              url: "https://fivestarappliancerepairpros.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1600 Ponce De Leon Blvd 10th Floor Suite 64",
                addressLocality: "Coral Gables",
                addressRegion: "FL",
                postalCode: "33134",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "State",
                name: "Florida",
                containedInPlace: {
                  "@type": "Country",
                  name: "US",
                },
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Appliance Repair Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Sub-Zero & Refrigerator Repair",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Ice Maker & Freezer Repair",
                    },
                  },
                ],
              },
              sameAs: [
                "https://facebook.com/subzeroservicecenters/",
                "https://x.com/SubZeroRepairFL",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
