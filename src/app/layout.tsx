import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Banner from "@/components/layout/Banner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import ChatWidgetLoader from "@/components/chat/ChatWidgetLoader";
import { generateLocalBusinessSchema, generateOrganizationSchema } from "@/lib/schema";

const localBusinessSchema = generateLocalBusinessSchema();
const organizationSchema = generateOrganizationSchema();

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
  display: "optional",
});

export const metadata: Metadata = {
  title: {
    default: "Sub-Zero Appliance Repair | 24/7 Service Coral Gables FL",
    // Shorter fallback suffix so subpage titles stay under Google's ~60-char
    // SERP cutoff. Most subpages now pass absolute titles and skip this.
    template: "%s | Sub-Zero Repair",
  },
  description:
    "24/7 Sub-Zero appliance repair in South Florida. Same-day service for refrigerators, freezers, ice makers & wine coolers. Certified technicians. Book now!",
  metadataBase: new URL("https://fivestarappliancerepairpros.com"),
  alternates: {},
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
        <link rel="llms-txt" href="/llms.txt" />
        <meta
          name="ai-content-declaration"
          content="This website contains factual business information about Sub-Zero Repair Company (DBA Fivestar Appliance Repair Pros), a licensed appliance repair service in South Florida founded in 1994."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Banner />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomBar />
        <ChatWidgetLoader />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MLN8WCDW10"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-MLN8WCDW10');`}
        </Script>
      </body>
    </html>
  );
}
