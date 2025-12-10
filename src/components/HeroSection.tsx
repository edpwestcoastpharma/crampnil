import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import crampnilSachet from "@/assets/crampnil-sachet.jpg";
import crampnilTablet from "@/assets/crampnil-tablet.jpg";
import crampnilCream from "@/assets/crampnil-cream.jpg";
import crampnilPowder from "@/assets/crampnil-powder.jpg";
import crampnilD from "@/assets/crampnil-d.jpg";

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
      className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-0 lg:pb-0 overflow-hidden"
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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          
          {/* Left Content - Always First */}
          <div className="text-center lg:text-left order-1">
            {/* Main Headline */}
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 leading-[0.9] tracking-tight animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="gradient-text">CRAMPNIL</span>
            </h1>
            
            {/* Sub-headline */}
            <p 
              className="text-lg sm:text-2xl lg:text-3xl font-semibold text-foreground mb-6 sm:mb-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Fast Relief from{" "}
              <span className="text-primary">Muscle Pain</span> &{" "}
              <span className="text-secondary">Cramps</span>
            </p>
            
            {/* Benefits List */}
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {benefits.map((benefit, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground justify-center lg:justify-start"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base">{benefit}</span>
                </li>
              ))}
            </ul>
            
            {/* CTA Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <button
                onClick={() => handleScrollTo("#products")}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 gradient-bg text-primary-foreground font-semibold rounded-full shadow-glow-pink hover:shadow-large hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Explore Products</span>
              </button>
              
              <button
                onClick={() => handleScrollTo("#ingredients")}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-background border-2 border-secondary/30 text-secondary font-semibold rounded-full shadow-soft hover:bg-secondary hover:text-secondary-foreground hover:border-secondary hover:shadow-glow-blue transition-all duration-300"
              >
                Know More
              </button>
            </div>
          </div>

          {/* Right Content - Product Visuals - Always Second */}
          <div className="relative order-2 animate-slide-in-right">
            {/* Glow Effect Behind Main Product */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 rounded-full blur-3xl animate-pulse" />
            
            {/* Main Product Card with Rotation */}
            <div className="relative mb-6">
              <div className="relative bg-background/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-border/50 group hover:shadow-glow-pink transition-all duration-500">
                {/* Inner Gradient Border */}
                <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
                
                {/* Rotating Product Images */}
                <div className="relative h-56 sm:h-72">
                  {allProducts.map((product, index) => (
                    <img
                      key={index}
                      src={product.src}
                      alt={product.alt}
                      className={`absolute inset-0 w-full h-full object-contain mx-auto transition-all duration-700 ${
                        index === activeIndex 
                          ? "opacity-100 scale-100" 
                          : "opacity-0 scale-95"
                      }`}
                    />
                  ))}
                </div>
                
                {/* Product Label */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full text-xs font-semibold shadow-lg">
                  {allProducts[activeIndex].name}
                </div>
              </div>
            </div>
            
            {/* Product Variants Grid with Shadows */}
            <div className="grid grid-cols-5 gap-3">
              {allProducts.map((product, index) => (
                <div 
                  key={index}
                  className={`group cursor-pointer animate-fade-in transition-all duration-300 ${
                    index === activeIndex ? "scale-105" : ""
                  }`}
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`relative bg-background rounded-2xl p-2 shadow-lg border transition-all duration-300 ${
                    index === activeIndex 
                      ? "border-primary/50 shadow-glow-pink" 
                      : "border-border/50 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1"
                  }`}>
                    <img
                      src={product.src}
                      alt={product.alt}
                      className="w-full h-12 sm:h-14 object-contain"
                    />
                  </div>
                  <p className={`text-[10px] sm:text-xs text-center mt-2 font-medium transition-colors ${
                    index === activeIndex ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {product.name}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-secondary to-secondary-glow text-secondary-foreground rounded-full shadow-glow-blue text-xs font-bold animate-float border-2 border-background">
              5 Variants
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
