export interface Service {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  image: string;
  imageAlt: string;
  shortDescription: string;
  content: string[];
  features?: string[];
}

export const services: Service[] = [
  {
    slug: "refrigerator-repair",
    title: "Refrigerator Repair",
    metaTitle: "Sub-Zero Refrigerator Repair Coral Gables FL - Sub-Zero Repair Services",
    metaDescription: "Expert Sub-Zero refrigerator repair in Coral Gables, FL. Same-day service, genuine parts, and certified technicians. Call (800) 651-4528 for fast, reliable repairs.",
    h1: "Sub-Zero Refrigerator Repair in South Florida",
    image: "/images/services/refrigerator-repair.webp",
    imageAlt: "Sub-Zero Refrigerator Repair",
    shortDescription: "Expert repair services for all Sub-Zero refrigerator models. Our certified technicians ensure your refrigerator runs like new with genuine Sub-Zero parts.",
    content: [
      "You have no time to lose if your fridge or freezer is failing. Depend on our Sub-Zero Service Centers for emergency Sub-Zero refrigerator service and repair in South Florida. We'll save your food by repairing your refrigerator unit. The trained technicians at our company ensure your commercial or residential equipment is fully operational. That means your food stays fresh and you save money by keeping it that way.",
      "Customers throughout the area trust us for emergency response when they have problems with their refrigeration equipment. Because our technicians are experienced and factory-trained, we deliver the highest-quality services to ensure your Sub-Zero equipment is fully operational as soon as possible.",
      "If your refrigerator breaks, you need immediate emergency services. At our company, we have extensive experience in repairing all types of Sub-Zero units. In addition, we keep a large supply of authentic Sub-Zero refrigerator parts on our trucks. This ensures that we are able to fix everything -- from freestanding units to built-in models. You can depend on us for same-day repair, affordable services, and high-quality workmanship.",
    ],
    features: ["Same-Day Service", "Genuine Parts", "Certified Technicians", "24/7 Availability"],
  },
  {
    slug: "freezer-repair",
    title: "Freezer Repair",
    metaTitle: "Sub-Zero Freezer Repair South Florida - Sub-Zero Repair Services",
    metaDescription: "Professional Sub-Zero freezer repair in South Florida. Fast, reliable service with genuine parts. Call (800) 651-4528 today.",
    h1: "Sub-Zero Freezer Repair in South Florida",
    image: "/images/services/freezer-repair.webp",
    imageAlt: "Sub-Zero Freezer Repair",
    shortDescription: "Professional freezer repair services for all Sub-Zero freezer models. Quick diagnostics and reliable fixes to keep your food preserved.",
    content: [
      "When your Sub-Zero freezer stops working properly, you need fast, professional help. Our certified technicians specialize in diagnosing and repairing all Sub-Zero freezer models, from built-in units to freestanding models.",
      "We understand the urgency of a freezer breakdown. That's why we offer same-day service and carry genuine Sub-Zero parts on every service call. Our technicians will quickly diagnose the issue and provide a transparent estimate before beginning any work.",
      "Common freezer issues we repair include temperature inconsistencies, ice buildup, unusual noises, door seal problems, and compressor failures. No matter the issue, our factory-trained technicians have the expertise to get your freezer running properly again.",
    ],
    features: ["Same-Day Service", "Genuine Parts", "Certified Technicians", "24/7 Availability"],
  },
  {
    slug: "icemaker-repair",
    title: "Ice Maker Repair",
    metaTitle: "Sub-Zero Ice Maker Repair South Florida - Sub-Zero Repair Services",
    metaDescription: "Expert Sub-Zero ice maker repair in South Florida. Same-day fixes with genuine parts. Call (800) 651-4528.",
    h1: "Sub-Zero Ice Maker Repair in South Florida",
    image: "/images/services/icemaker-repair.webp",
    imageAlt: "Sub-Zero Ice Maker Repair",
    shortDescription: "Specialized ice maker repair for Sub-Zero units. From low ice production to complete breakdowns, we fix it all.",
    content: [
      "Is your Sub-Zero ice maker not producing ice or making unusual noises? Our expert technicians specialize in all types of Sub-Zero ice maker repairs. We handle everything from clogged water lines to faulty motors and sensors.",
      "We carry genuine Sub-Zero replacement parts on every service call, ensuring your ice maker is repaired with the highest quality components. Our same-day service means you won't be without ice for long.",
      "Whether your ice maker is built into your refrigerator or a standalone unit, our factory-trained technicians have the knowledge and experience to diagnose and repair any issue quickly and efficiently.",
    ],
    features: ["Same-Day Service", "Genuine Parts", "Certified Technicians", "24/7 Availability"],
  },
  {
    slug: "wine-cooler-repair",
    title: "Wine Cooler Repair",
    metaTitle: "Sub-Zero Wine Cooler Repair South Florida - Sub-Zero Repair Services",
    metaDescription: "Professional Sub-Zero wine cooler repair in South Florida. Protect your wine collection with our expert service. Call (800) 651-4528.",
    h1: "Sub-Zero Wine Cooler Repair in South Florida",
    image: "/images/services/wine-cooler-repair.webp",
    imageAlt: "Sub-Zero Wine Cooler Repair",
    shortDescription: "Protect your wine collection with expert Sub-Zero wine cooler repair. We service all models and ensure optimal temperature control.",
    content: [
      "Your wine collection deserves the best care. When your Sub-Zero wine cooler isn't maintaining the right temperature, our certified technicians can quickly diagnose and fix the issue to protect your valuable wines.",
      "We specialize in all Sub-Zero wine cooler models, including built-in and freestanding units. Common issues we address include temperature fluctuations, compressor problems, humidity control, and door seal replacements.",
      "Our technicians carry genuine Sub-Zero parts and have the factory training needed to service your wine cooler properly. We understand that proper temperature and humidity are critical for wine preservation, and we'll ensure your unit is performing optimally.",
    ],
    features: ["Same-Day Service", "Genuine Parts", "Certified Technicians", "24/7 Availability"],
  },
  {
    slug: "sub-zero-marine-repair",
    title: "Marine Refrigeration Repair",
    metaTitle: "Sub-Zero Marine Refrigeration Repair South Florida - Sub-Zero Repair Services",
    metaDescription: "Expert Sub-Zero marine refrigeration repair in South Florida. Keep your vessel's cooling systems running. Call (800) 651-4528.",
    h1: "Sub-Zero Marine Refrigeration Repair in South Florida",
    image: "/images/services/marine-repair-v2.webp",
    imageAlt: "Sub-Zero Marine Refrigeration Repair",
    shortDescription: "Specialized marine refrigeration repair for Sub-Zero units on boats and yachts. We service vessels throughout South Florida.",
    content: [
      "Keep your vessel's refrigeration running smoothly with our specialized marine repair services. Our technicians are experienced in servicing Sub-Zero marine refrigeration units on boats and yachts throughout South Florida.",
      "Marine refrigeration systems face unique challenges including salt air exposure, vibration, and power fluctuations. Our factory-trained technicians understand these challenges and have the expertise to diagnose and repair any issue.",
      "We provide dockside service throughout South Florida's marinas and ports. Whether you need emergency repair or scheduled maintenance, our team is ready to keep your marine refrigeration performing at its best.",
    ],
    features: ["Same-Day Service", "Genuine Parts", "Certified Technicians", "Dockside Service"],
  },
];
