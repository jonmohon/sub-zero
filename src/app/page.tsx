import type { Metadata } from "next";
import Script from "next/script";
import { generateWebSiteSchema } from "@/lib/schema";
import HeroSection from "@/components/sections/HeroSection";

const webSiteSchema = generateWebSiteSchema();
import BrandsSection from "@/components/sections/BrandsSection";
import AboutSection from "@/components/sections/AboutSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import ReliableSolutionsSection from "@/components/sections/ReliableSolutionsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import EmergencySection from "@/components/sections/EmergencySection";
import PromotionsSection from "@/components/sections/PromotionsSection";
import GoogleReviewsSection from "@/components/sections/GoogleReviewsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import RecentWorkSection from "@/components/sections/RecentWorkSection";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import ContactSection from "@/components/sections/ContactSection";
import EntityStatementsSection from "@/components/sections/EntityStatementsSection";

export const metadata: Metadata = {
  title: {
    absolute: "Sub-Zero Appliance Repair | 24/7 Service Coral Gables FL",
  },
  description:
    "24/7 Sub-Zero appliance repair in South Florida. Same-day service for refrigerators, freezers, ice makers & wine coolers. Certified technicians. Book now!",
  alternates: {
    canonical: "https://fivestarappliancerepairpros.com/",
  },
  openGraph: {
    title: "Sub-Zero Appliance Repair | 24/7 Service Coral Gables FL",
    description:
      "24/7 Sub-Zero appliance repair in South Florida. Same-day service for refrigerators, freezers, ice makers & wine coolers. Certified technicians. Book now!",
    url: "https://fivestarappliancerepairpros.com/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Script
        src="//script.crazyegg.com/pages/scripts/0022/1041.js"
        strategy="lazyOnload"
      />
      <HeroSection />
      <BrandsSection />
      <AboutSection />
      <WhyChooseSection />
      <ReliableSolutionsSection />
      <ServicesSection />
      <EmergencySection />
      <PromotionsSection />
      <GoogleReviewsSection />
      <TestimonialsSection />
      <RecentWorkSection />
      <ServiceAreasSection />
      <EntityStatementsSection />
      <ContactSection />
    </>
  );
}
