import { useRef } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / logos.length;
      scrollRef.current.scrollBy({ left: direction * cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-4" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="relative max-w-7xl mx-auto px-12">
        <button
          onClick={() => scroll(-1)}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-colors"
          style={{ backgroundColor: "#E8F4FD" }}
          aria-label="Previous"
        >
          <ChevronLeft className="w-4 h-4 text-secondary" />
        </button>

        <button
          onClick={() => scroll(1)}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-sm transition-colors"
          style={{ backgroundColor: "#E8F4FD" }}
          aria-label="Next"
        >
          <ChevronRight className="w-4 h-4 text-secondary" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {logos.map((logo, i) => (
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
    </section>
  );
};

export default CertificateLogos;
