import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import certWhoGmp from "@/assets/cert-who-gmp.jpg";
import certIso from "@/assets/cert-iso.jpg";
import certGmp from "@/assets/cert-gmp.jpg";
import certNafdac from "@/assets/cert-nafdac.jpg";
import certZamra from "@/assets/cert-zamra.jpg";
import certZed from "@/assets/cert-zed.jpg";
import certCoteDivoire from "@/assets/cert-cote-divoire.jpg";

const logos = [
  { src: certWhoGmp, alt: "WHO GMP Certified" },
  { src: certIso, alt: "ISO Certified" },
  { src: certGmp, alt: "GMP Certified" },
  { src: certNafdac, alt: "NAFDAC Approved" },
  { src: certZamra, alt: "ZAMRA Approved" },
  { src: certZed, alt: "ZED Certified" },
  { src: certCoteDivoire, alt: "République de Côte d'Ivoire" },
];

const CertificateLogos = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const offsetRef = useRef(0);

  // Duplicate logos for infinite loop
  const duplicated = [...logos, ...logos, ...logos];

  const totalWidth = logos.length; // one "set" width in logical units

  const animate = useCallback(() => {
    if (isPaused) {
      animationRef.current = requestAnimationFrame(animate);
      return;
    }
    offsetRef.current += 0.3; // speed in px per frame
    if (scrollRef.current) {
      const singleSetWidth = scrollRef.current.scrollWidth / 3;
      if (offsetRef.current >= singleSetWidth) {
        offsetRef.current -= singleSetWidth;
      }
      scrollRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
    }
    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [animate]);

  // Pagination dots tracking
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && scrollRef.current) {
        const singleSetWidth = scrollRef.current.scrollWidth / 3;
        const page = Math.floor((offsetRef.current / singleSetWidth) * 5) % 5;
        setCurrentPage(page);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const scrollBy = (direction: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / duplicated.length;
      offsetRef.current += direction * cardWidth;
      const singleSetWidth = scrollRef.current.scrollWidth / 3;
      if (offsetRef.current >= singleSetWidth) offsetRef.current -= singleSetWidth;
      if (offsetRef.current < 0) offsetRef.current += singleSetWidth;
    }
  };

  return (
    <section
      className="w-full py-4 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative max-w-7xl mx-auto px-12">
        {/* Left Arrow */}
        <button
          onClick={() => scrollBy(-1)}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-soft transition-colors"
          style={{ backgroundColor: "#E8F4FD" }}
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4 text-secondary" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scrollBy(1)}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-soft transition-colors"
          style={{ backgroundColor: "#E8F4FD" }}
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4 text-secondary" />
        </button>

        {/* Scrolling Track */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 will-change-transform"
            style={{ width: "max-content" }}
          >
            {duplicated.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[calc((100vw-8rem)/2)] sm:w-[calc((100vw-8rem)/3)] lg:w-[calc((100vw-8rem)/5)] max-w-[200px] rounded-xl p-4 flex items-center justify-center"
                style={{
                  backgroundColor: "#F8F9FB",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                  minHeight: "80px",
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-14 w-auto object-contain max-w-full"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-1.5 mt-3">
          {[0, 1, 2, 3, 4].map((dot) => (
            <div
              key={dot}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                dot === currentPage ? "bg-secondary" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateLogos;
