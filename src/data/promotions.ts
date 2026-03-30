export interface Promotion {
  title: string;
  description: string;
  highlight?: string;
}

export const promotions: Promotion[] = [
  {
    title: "Free Maintenance",
    description: "Get a free maintenance check with any repair over $250. Keep your Sub-Zero running at peak performance.",
    highlight: "With $250+ Repair",
  },
  {
    title: "Free Filters",
    description: "Receive free replacement filters with any repair service over $250.",
    highlight: "With $250+ Repair",
  },
  {
    title: "15% Off Any Repair",
    description: "Save 15% on any appliance repair service. Book today and mention this offer!",
    highlight: "15% Off",
  },
  {
    title: "Additional Savings",
    description: "$10 off any service, $75 off repairs over $299, and free service call with repair.",
    highlight: "Multiple Savings",
  },
];
