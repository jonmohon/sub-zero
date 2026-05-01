"use client";

import { useEffect, useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { BUSINESS } from "@/lib/constants";

const TRUSTINDEX_SCRIPT_BASE = "https://cdn.trustindex.io/loader.js";

export default function GoogleReviewsSection() {
  const widgetId = BUSINESS.trustindexWidgetId;
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Lazy-load the Trustindex script only when the section approaches the
  // viewport. Keeps the embed JS off the LCP critical path entirely.
  useEffect(() => {
    if (!widgetId) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [widgetId]);

  useEffect(() => {
    if (!shouldLoad || !widgetId) return;
    const src = `${TRUSTINDEX_SCRIPT_BASE}?widget_id=${widgetId}`;
    if (document.querySelector(`script[src="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    document.body.appendChild(script);
  }, [shouldLoad, widgetId]);

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #eef2ff 100%)",
      }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="blur-up">
          <div className="flex items-center justify-center gap-3 mb-3">
            <GoogleGlyph />
            <p className="text-[#0387cc] font-semibold uppercase tracking-wider text-sm">
              Verified Google Reviews
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0B1D33] mb-4">
            What South Florida Homeowners Are Saying
          </h2>
          <p className="text-center text-[#64748B] max-w-2xl mx-auto mb-12">
            Real, dated reviews from Sub-Zero owners across Miami-Dade and
            Broward — pulled live from our Google Business Profile.
          </p>
        </ScrollReveal>

        <div ref={containerRef} className="min-h-[200px]">
          {widgetId ? (
            <div data-widget-id={widgetId} className="ti-widget" />
          ) : (
            <ReviewsFallback />
          )}
        </div>
      </div>
    </section>
  );
}

function ReviewsFallback() {
  return (
    <ScrollReveal animation="fade-up">
      <div className="bg-white rounded-2xl p-10 md:p-14 shadow-sm border border-gray-100 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-3 mb-5 px-4 py-2 bg-[#0387cc]/5 rounded-full">
          <GoogleGlyph />
          <span className="text-sm font-semibold text-[#0B1D33]">
            Read & leave reviews on Google
          </span>
        </div>
        <p className="text-[#334155] text-lg leading-relaxed mb-8">
          Every Sub-Zero repair we complete gets a follow-up review request.
          See what real customers say — and share your own experience — on
          our verified Google Business Profile.
        </p>
        <a
          href={BUSINESS.social.googleBusinessProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#0387cc] hover:bg-[#0F3460] text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(3,135,204,0.3)]"
        >
          View Reviews on Google
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </ScrollReveal>
  );
}

function GoogleGlyph() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09 0-.73.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12c0 1.78.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}
