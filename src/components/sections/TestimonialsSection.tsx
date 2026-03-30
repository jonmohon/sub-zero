export default function TestimonialsSection() {
  const writtenTestimonials = [
    {
      heading: "Saved me hundreds on a new appliance!",
      description: "Same-day service, honest pricing, and my fridge is running like new. Best decision I made!",
    },
    {
      heading: "Finally, a repair company I can trust.",
      description: "No hidden fees, no upsells — just expert service and quality repairs. Highly recommend!",
    },
    {
      heading: "They saved my fridge and my wallet!",
      description: "Fast diagnosis, affordable fix, and outstanding service. Why would I go anywhere else?",
    },
  ];

  const videoTestimonials = [
    { title: "Customer Success Story #1", embedUrl: "https://jumpshare.com/embed/G4AZIxny2s3bkJxS52SW" },
    { title: "Professional Service Review", embedUrl: "https://jumpshare.com/embed/6qtVyb8lvFL2j6QHWvjA" },
    { title: "Five Star Experience", embedUrl: "https://jumpshare.com/embed/UAhkVzXBy6Z11qDrzEXu" },
    { title: "Professional, punctual, and affordable.", embedUrl: "https://jumpshare.com/embed/C4wE9fn7JRcycgxfQfgf" },
    { title: "Five stars — worth every penny!", embedUrl: "https://jumpshare.com/embed/W2h4aVHHBojM83ldfMvG" },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[#0099CC] font-semibold uppercase tracking-wider text-center text-sm mb-2">
          Verified Video Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#152232] mb-12">
          Trusted by Thousands Across the USA
        </h2>

        {/* Written Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {writtenTestimonials.map((t) => (
            <div key={t.heading} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#f89406]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-lg font-bold text-[#152232] mb-2">&ldquo;{t.heading}&rdquo;</h3>
              <p className="text-sm text-[#555555]">{t.description}</p>
            </div>
          ))}
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-2 gap-6">
          {videoTestimonials.map((v) => (
            <div key={v.embedUrl} className="rounded-lg overflow-hidden shadow-sm border border-gray-100 bg-white">
              <div className="relative aspect-[4/3]">
                <iframe
                  src={v.embedUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                  title={v.title}
                />
              </div>
              <div className="p-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#f89406]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm font-semibold text-[#152232]">&ldquo;{v.title}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
