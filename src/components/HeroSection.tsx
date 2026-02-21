import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import crampnilSachet from "@/assets/crampnil-sachet.jpg";
import crampnilTablet from "@/assets/crampnil-tablet.jpg";
import crampnilCream from "@/assets/crampnil-cream.jpg";
import crampnilPowder from "@/assets/crampnil-powder.jpg";
import crampnilD from "@/assets/crampnil-d.jpg";
import crampnilHeroLogo from "@/assets/crampnil-hero-logo.png";

const HeroSection = () => {
  const allProducts = [
    { src: crampnilSachet, alt: "Crampnil Sachet - Instant Relief", name: "Sachet" },
    { src: crampnilTablet, alt: "Crampnil Tablets", name: "Tablets" },
    { src: crampnilCream, alt: "Crampnil Cream", name: "Cream" },
    { src: crampnilPowder, alt: "Crampnil Powder", name: "Powder" },
    { src: crampnilD, alt: "Crampnil-D", name: "Diabetic" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % allProducts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [allProducts.length]);

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const benefits = [
    "Relieves leg cramps & muscle spasms",
    "Essential minerals & vitamins",
    "Suitable for diabetic patients",
    "Multiple dosage formats available",
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[50vh] flex items-center pt-20 pb-1 lg:pt-18 lg:pb-1 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-background to-secondary-light" />
      
      {/* Abstract Medical Shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-gradient-to-tr from-secondary/5 to-primary/5 blur-3xl" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center items-center">
          
          {/* Content - Centered */}
          <div className="text-center order-1 max-w-2xl mx-auto">
            {/* Main Headline */}
            <div 
              className="mb-2 sm:mb-3 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <img 
                src={crampnilHeroLogo} 
                alt="CRAMPNIL" 
                className="h-12 sm:h-16 lg:h-22 xl:h-26 w-auto mx-auto"
              />
            </div>
            
            {/* Sub-headline */}
            <p 
              className="text-lg sm:text-xl lg:text-2xl font-semibold text-foreground mb-4 sm:mb-5 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Fast Relief from{" "}
              <span className="text-primary">Muscle Pain</span> &{" "}
              <span className="text-secondary">Cramps</span>
            </p>
            
            {/* Benefits List */}
            <ul className="space-y-1.5 mb-3 sm:mb-4 animate-fade-in inline-flex flex-col items-start" style={{ animationDelay: "0.3s" }}>
              {benefits.map((benefit, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base text-left">{benefit}</span>
                </li>
              ))}
            </ul>
            
            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <button
                onClick={() => handleScrollTo("#products")}
                className="group relative px-5 sm:px-6 py-2.5 sm:py-3 bg-primary text-primary-foreground font-semibold rounded-full shadow-glow-pink hover:bg-primary/90 hover:shadow-large hover:scale-105 transition-all duration-300 overflow-hidden text-sm"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Explore Products</span>
              </button>
              
              <button
                onClick={() => handleScrollTo("#westcoast")}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-background border-2 border-secondary/30 text-secondary font-semibold rounded-full shadow-soft hover:bg-secondary hover:text-secondary-foreground hover:border-secondary hover:shadow-glow-blue transition-all duration-300 text-sm"
              >
                Know More
              </button>
            </div>
          </div>

        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
