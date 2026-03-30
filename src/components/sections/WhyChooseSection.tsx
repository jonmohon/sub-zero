import Image from "next/image";

export default function WhyChooseSection() {
  const features = [
    {
      title: "24/7 Availability",
      description:
        "We're available around the clock, 365 days a year. No extra charges for nights, weekends, or holidays.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "bg-[#0099CC]",
    },
    {
      title: "Same-Day Service",
      description:
        "We understand the urgency. Our technicians arrive the same day with parts ready to complete the repair.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "bg-[#f89406]",
    },
    {
      title: "Certified Technicians",
      description:
        "Over 30 years of experience with factory training. We use only genuine Sub-Zero parts for every repair.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "bg-[#0099CC]",
    },
  ];

  const reviews = [
    { name: "Jordan Burgess", rating: "5.0" },
    { name: "Blake Riley", rating: "4.9" },
    { name: "Jayden Moss", rating: "5.0" },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-[#0099CC] font-semibold uppercase tracking-wider mb-2">About Us</h3>
        <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-12">
          Why Choose SubZero Repair Co.?
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image with floating review cards */}
          <div className="relative">
            <Image
              src="/images/kitchen.webp"
              alt="Modern kitchen with Sub-Zero appliances"
              width={600}
              height={500}
              className="rounded-xl shadow-lg w-full object-cover"
            />
            {/* Floating review cards */}
            {reviews.map((review, index) => {
              const positions = [
                "absolute -top-4 -right-4 z-10",
                "absolute top-1/2 -left-6 -translate-y-1/2 z-10",
                "absolute -bottom-4 right-8 z-10",
              ];
              return (
                <div
                  key={review.name}
                  className={`${positions[index]} bg-white rounded-lg shadow-xl px-4 py-3 flex items-center gap-3`}
                >
                  <div className="w-8 h-8 bg-[#0099CC] rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#111111]">{review.name}</p>
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-[#f89406]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs font-bold text-[#111111]">{review.rating}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Right: Stacked features */}
          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-5">
                <div className={`${feature.color} text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#111111] mb-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
