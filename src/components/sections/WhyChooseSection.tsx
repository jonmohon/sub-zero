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
      color: "bg-[#0A2540]",
      accentColor: "border-[#00B4D8]/20",
      glowColor: "bg-[#00B4D8]/5",
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
      accentColor: "border-[#f89406]/20",
      glowColor: "bg-[#f89406]/5",
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
      color: "bg-[#0A2540]",
      accentColor: "border-[#0A2540]/10",
      glowColor: "bg-[#0A2540]/5",
    },
  ];

  const reviews = [
    { name: "Jordan Burgess", rating: "5.0" },
    { name: "Blake Riley", rating: "4.9" },
    { name: "Jayden Moss", rating: "5.0" },
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Decorative gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#00B4D8]/[0.03] rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#0A2540]/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-[#f89406]/[0.02] rounded-full blur-3xl" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'radial-gradient(#0A2540 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-[2px] w-8 bg-gradient-to-r from-transparent to-[#00B4D8]" />
            <h3 className="text-[#00B4D8] font-semibold uppercase tracking-wider text-sm">About Us</h3>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] leading-tight">
            Why Choose SubZero Repair Co.?
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with floating review cards */}
          <div className="relative">
            {/* Frame accent behind image */}
            <div className="absolute -inset-3 bg-gradient-to-br from-[#00B4D8]/10 via-transparent to-[#0A2540]/10 rounded-3xl" />
            <div className="absolute -inset-[1px] bg-gradient-to-br from-[#00B4D8]/20 to-[#0A2540]/20 rounded-2xl" />

            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/kitchen.webp"
                alt="Modern kitchen with Sub-Zero appliances"
                width={600}
                height={500}
                className="w-full object-cover"
              />
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/20 via-transparent to-transparent" />
            </div>

            {/* Floating review cards with glassmorphism */}
            {reviews.map((review, index) => {
              const positions = [
                "absolute -top-4 -right-4 z-10",
                "absolute top-1/2 -left-6 -translate-y-1/2 z-10",
                "absolute -bottom-4 right-8 z-10",
              ];
              const delays = ["animation-delay-0", "animation-delay-200", "animation-delay-400"];
              return (
                <div
                  key={review.name}
                  className={`${positions[index]} bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl px-5 py-4 flex items-center gap-3 border border-white/40 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 transition-all duration-500`}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-[#0A2540] to-[#0F3460] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0A2540]">{review.name}</p>
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-[#f89406]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs font-bold text-[#0A2540]">{review.rating}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Feature cards */}
          <div className="space-y-5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#00B4D8]/20 transition-all duration-300`}
              >
                {/* Subtle glow on hover */}
                <div className={`absolute inset-0 ${feature.glowColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative flex items-start gap-5">
                  <div className={`${feature.color} text-white rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#0A2540] mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
