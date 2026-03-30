export interface Testimonial {
  name: string;
  location?: string;
  rating: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Maria S.",
    location: "Coral Gables, FL",
    rating: 5,
    text: "Excellent service! The technician arrived within two hours and had my Sub-Zero refrigerator running perfectly. Very professional and knowledgeable. Highly recommend!",
  },
  {
    name: "James R.",
    location: "Miami Beach, FL",
    rating: 5,
    text: "I've used this company twice now for my Sub-Zero wine cooler. Both times the service was outstanding. They use genuine parts and the technicians really know these appliances inside and out.",
  },
  {
    name: "Patricia L.",
    location: "Fort Lauderdale, FL",
    rating: 5,
    text: "My Sub-Zero freezer stopped working on a Saturday night. I called and they had a technician at my door Sunday morning. The repair was done quickly and at a fair price. No extra charge for the weekend service!",
  },
  {
    name: "Robert M.",
    location: "Boca Raton, FL",
    rating: 5,
    text: "The best appliance repair service in South Florida. They diagnosed the problem with my ice maker in minutes and had the genuine replacement part on their truck. Fixed in under an hour!",
  },
  {
    name: "Susan K.",
    location: "Key Biscayne, FL",
    rating: 5,
    text: "Professional, punctual, and fairly priced. They repaired my Sub-Zero built-in refrigerator and it's been working perfectly ever since. I won't call anyone else for my Sub-Zero appliances.",
  },
];
