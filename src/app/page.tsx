import type { Metadata } from "next";
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
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import RecentWorkSection from "@/components/sections/RecentWorkSection";
import ServiceAreasSection from "@/components/sections/ServiceAreasSection";
import ContactSection from "@/components/sections/ContactSection";
import EntityStatementsSection from "@/components/sections/EntityStatementsSection";

export const metadata: Metadata = {
  title: "Sub-Zero Ice Maker, Appliance & Marine Repair and Freezer Service Center Coral Gables FL - Sub-Zero Repair Services",
  description:
    "Looking for the same caliber repair and maintenance as our appliances? Sub-Zero Repair Services provides 24/7 top-notch repairs for your Sub-Zero appliances. Fast, reliable, and certified technicians ready to restore your appliances. Book now!",
  alternates: {
    canonical: "https://fivestarappliancerepairpros.com/",
  },
  openGraph: {
    title: "Sub-Zero Ice Maker, Appliance & Marine Repair and Freezer Service Center Coral Gables FL - Sub-Zero Repair Services",
    description:
      "Looking for the same caliber repair and maintenance as our appliances? Sub-Zero Repair Services provides 24/7 top-notch repairs for your Sub-Zero appliances. Fast, reliable, and certified technicians ready to restore your appliances. Book now!",
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
      <HeroSection />
      <BrandsSection />
      <AboutSection />
      <WhyChooseSection />
      <ReliableSolutionsSection />
      <ServicesSection />
      <EmergencySection />
      <PromotionsSection />
      <TestimonialsSection />
      <RecentWorkSection />
      <ServiceAreasSection />
      <EntityStatementsSection />
      <ContactSection />
    </>
  );
}
