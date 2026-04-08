"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

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
    <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #f0f9ff 100%)' }}>
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00B4D8]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0387cc]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[#00B4D8]/[0.03] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="blur-up">
          <p className="text-[#00B4D8] font-semibold uppercase tracking-wider text-center text-sm mb-2">
            Verified Video Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B1D33] mb-14 text-shimmer">
            Trusted by Thousands Across the USA
          </h2>
        </ScrollReveal>

        {/* Written Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {writtenTestimonials.map((t, index) => (
            <ScrollReveal key={t.heading} animation="fade-up" delay={index * 150}>
              <div
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 h-full"
              >
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00B4D8] to-[#0387cc] rounded-t-2xl" />
                <span className="block text-6xl leading-none text-[#00B4D8]/20 font-serif select-none mb-2">&ldquo;</span>
                <div className="flex gap-1.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-[#f89406] drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-[#0B1D33] mb-3">&ldquo;{t.heading}&rdquo;</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{t.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Video Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          {videoTestimonials.map((v, index) => (
            <ScrollReveal key={v.embedUrl} animation="scale-in" delay={index * 100}>
              <VideoTestimonialCard title={v.title} embedUrl={v.embedUrl} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoTestimonialCard({ title, embedUrl }: { title: string; embedUrl: string }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500">
      <div className="relative bg-[#0387cc] p-3">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
          {loaded ? (
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
              allowFullScreen
              title={title}
              loading="lazy"
            />
          ) : (
            <button
              onClick={() => setLoaded(true)}
              className="absolute inset-0 w-full h-full bg-[#0387cc] flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[#0F3460] transition-colors"
              aria-label={`Play video: ${title}`}
            >
              <div className="w-16 h-16 rounded-full bg-[#f89406] flex items-center justify-center shadow-[0_0_30px_rgba(248,148,6,0.4)] hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-white/90 text-sm font-medium">Click to play</span>
            </button>
          )}
        </div>
      </div>
      <div className="p-5">
        <div className="flex gap-1.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-[#f89406] drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <p className="text-sm font-semibold text-[#0B1D33]">&ldquo;{title}&rdquo;</p>
      </div>
    </div>
  );
}
