"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ParallaxImage({ src, alt, className = "" }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (!container) { ticking = false; return; }
        const rect = container.getBoundingClientRect();
        const viewH = window.innerHeight;
        // Only animate when visible
        if (rect.bottom < 0 || rect.top > viewH) { ticking = false; return; }
        // Calculate parallax offset: image moves slower than scroll
        const progress = (rect.top + rect.height) / (viewH + rect.height);
        const offset = (progress - 0.5) * 60; // max 30px in either direction
        const img = container.querySelector("img");
        if (img) {
          img.style.transform = `translateY(${offset}px) scale(1.1)`;
        }
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initial position
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={containerRef} className={`parallax-hero ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(min-width: 1280px) 1200px, 100vw"
        priority
      />
      {/* Subtle gradient at bottom for blending */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/20 to-transparent z-10" />
    </div>
  );
}
