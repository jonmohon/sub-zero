export interface Brand {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  logo: string;
  logoAlt: string;
  href: string;
  content: string[];
  services: string[];
}

export const brands: Brand[] = [
  {
    slug: "sub-zero",
    name: "Sub-Zero",
    metaTitle: "Sub-Zero Appliance Repair in South Florida - Sub-Zero Repair Services",
    metaDescription: "Certified Sub-Zero appliance repair in South Florida. Expert service for refrigerators, freezers, ice makers, wine coolers, and marine units. Call (800) 651-4528.",
    h1: "Sub-Zero Appliance Repair in South Florida",
    logo: "/images/brands/sub-zero-logo.webp",
    logoAlt: "Sub-Zero Logo",
    href: "/sub-zero-appliance-repair-in-south-florida",
    content: [
      "As South Florida's premier Sub-Zero repair specialists, we provide expert service for the full range of Sub-Zero appliances. Our factory-trained technicians have over 30 years of experience maintaining and repairing Sub-Zero refrigeration equipment.",
      "We service all Sub-Zero models including built-in refrigerators, freestanding units, wine coolers, ice makers, and marine refrigeration systems. Every repair uses genuine Sub-Zero parts to maintain your appliance's performance and warranty.",
    ],
    services: ["Refrigerator Repair", "Freezer Repair", "Ice Maker Repair", "Wine Cooler Repair", "Marine Refrigeration Repair"],
  },
  {
    slug: "bosch",
    name: "Bosch",
    metaTitle: "Bosch Appliance Repair in South Florida - Sub-Zero Repair Services",
    metaDescription: "Expert Bosch appliance repair in South Florida. Professional service for all Bosch refrigerators and appliances. Call (800) 651-4528.",
    h1: "Bosch Appliance Repair in South Florida",
    logo: "/images/brands/bosch-logo.webp",
    logoAlt: "Bosch Logo",
    href: "/bosch-appliance-repair-in-south-florida",
    content: [
      "Our certified technicians provide expert Bosch appliance repair throughout South Florida. We service all Bosch refrigerators, freezers, ice makers, wine coolers, and more.",
      "Bosch appliances are known for their German engineering and precision. Our technicians understand the unique technology and design of Bosch appliances, ensuring your repair is done right the first time with genuine parts.",
    ],
    services: ["Refrigerator Repair", "Freezer Repair", "Ice Maker Repair", "Wine Cooler Repair", "Marine Refrigeration Repair"],
  },
  {
    slug: "viking",
    name: "Viking",
    metaTitle: "Viking Appliance Repair in South Florida - Sub-Zero Repair Services",
    metaDescription: "Professional Viking appliance repair in South Florida. Expert technicians for all Viking refrigerators and appliances. Call (800) 651-4528.",
    h1: "Viking Appliance Repair in South Florida",
    logo: "/images/brands/viking-logo.webp",
    logoAlt: "Viking Logo",
    href: "/viking-appliance-repair-in-south-florida",
    content: [
      "Trust our experienced technicians for professional Viking appliance repair in South Florida. We service all Viking refrigerators, freezers, and cooling equipment.",
      "Viking appliances are built for performance, and our factory-trained technicians have the expertise to keep them running at their best. We use genuine Viking parts for every repair.",
    ],
    services: ["Refrigerator Repair", "Freezer Repair", "Ice Maker Repair", "Wine Cooler Repair", "Marine Refrigeration Repair"],
  },
  {
    slug: "thermador",
    name: "Thermador",
    metaTitle: "Thermador Appliance Repair in South Florida - Sub-Zero Repair Services",
    metaDescription: "Expert Thermador appliance repair in South Florida. Certified technicians for all Thermador appliances. Call (800) 651-4528.",
    h1: "Thermador Appliance Repair in South Florida",
    logo: "/images/brands/thermador-logo.webp",
    logoAlt: "Thermador Logo",
    href: "/thermador-appliance-repair-in-south-florida",
    content: [
      "Our certified technicians provide expert Thermador appliance repair throughout South Florida. We service all Thermador refrigerators, freezers, and cooling appliances.",
      "Thermador is a premium brand that deserves premium care. Our technicians are trained to service the unique features and technology of Thermador appliances, using genuine parts for every repair.",
    ],
    services: ["Refrigerator Repair", "Freezer Repair", "Ice Maker Repair", "Wine Cooler Repair", "Marine Refrigeration Repair"],
  },
  {
    slug: "miele",
    name: "Miele",
    metaTitle: "Expert Miele Appliance Repair in South Florida - Sub-Zero Repair Services",
    metaDescription: "Professional Miele appliance repair in South Florida. Expert service for Miele refrigerators, dishwashers, ovens, and more. Call (800) 651-4528.",
    h1: "Expert Miele Appliance Repair in South Florida",
    logo: "/images/brands/miele-logo.webp",
    logoAlt: "Miele Logo",
    href: "/expert-miele-appliance-repair-in-south-florida",
    content: [
      "Our technicians are trained and certified to repair the full range of Miele appliances. From refrigerators and dishwashers to ovens, washers, dryers, and coffee systems, we provide expert Miele repair throughout South Florida.",
      "Miele appliances are built to the highest German engineering standards. Our technicians understand the precision and technology behind every Miele product, ensuring your repair maintains the quality and performance you expect.",
    ],
    services: ["Refrigerator Repair", "Dishwasher Repair", "Oven Repair", "Washer Repair", "Dryer Repair", "Coffee System Repair"],
  },
];
