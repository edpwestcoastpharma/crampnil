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
  return (
    <section
      className="w-full py-4"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex gap-4 justify-center flex-wrap">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[calc((100%-2rem)/2)] sm:w-[calc((100%-3*1rem)/3)] lg:w-[calc((100%-6*1rem)/7)] max-w-[160px] rounded-xl p-4 flex items-center justify-center"
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
