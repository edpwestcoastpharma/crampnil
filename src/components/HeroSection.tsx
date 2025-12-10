import { Check } from "lucide-react";
import crampnilSachet from "@/assets/crampnil-sachet.jpg";
import crampnilTablet from "@/assets/crampnil-tablet.jpg";
import crampnilCream from "@/assets/crampnil-cream.jpg";
import crampnilPowder from "@/assets/crampnil-powder.jpg";
import crampnilD from "@/assets/crampnil-d.jpg";

const HeroSection = () => {
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

  const productVariants = [
    { src: crampnilTablet, alt: "Crampnil Tablets", name: "Tablets" },
    { src: crampnilCream, alt: "Crampnil Cream", name: "Cream" },
    { src: crampnilPowder, alt: "Crampnil Powder", name: "Powder" },
    { src: crampnilD, alt: "Crampnil-D", name: "Diabetic" },
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Trust Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border shadow-soft mb-8 animate-fade-in"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Trusted by Healthcare Professionals
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 leading-[0.9] tracking-tight animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="gradient-text">CRAMPNIL</span>
            </h1>
            
            {/* Sub-headline */}
            <p 
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-8 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Fast Relief from{" "}
              <span className="text-primary">Muscle Pain</span> &{" "}
              <span className="text-secondary">Cramps</span>
            </p>
            
            {/* Benefits List */}
            <ul className="space-y-3 mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
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
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <button
                onClick={() => handleScrollTo("#products")}
                className="group relative px-8 py-4 gradient-bg text-primary-foreground font-semibold rounded-full shadow-glow-pink hover:shadow-large hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Explore Products</span>
              </button>
              
              <button
                onClick={() => handleScrollTo("#ingredients")}
                className="px-8 py-4 bg-background border-2 border-secondary/30 text-secondary font-semibold rounded-full shadow-soft hover:bg-secondary hover:text-secondary-foreground hover:border-secondary hover:shadow-glow-blue transition-all duration-300"
              >
                Know More
              </button>
            </div>
          </div>

          {/* Right Content - Product Visuals */}
          <div className="relative order-1 lg:order-2 animate-slide-in-right">
            {/* Glow Effect Behind Main Product */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 rounded-full blur-3xl animate-pulse" />
            
            {/* Main Product Card */}
            <div className="relative mb-6">
              <div className="relative bg-background/90 backdrop-blur-sm rounded-3xl p-8 shadow-large border border-border/50 group hover:shadow-glow-pink transition-all duration-500">
                {/* Inner Gradient Border */}
                <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
                
                <img
                  src={crampnilSachet}
                  alt="Crampnil Sachet - Instant Relief from Leg Cramps"
                  className="relative w-full h-56 sm:h-72 object-contain mx-auto transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Product Label */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full text-xs font-semibold shadow-medium">
                  Featured Product
                </div>
              </div>
            </div>
            
            {/* Product Variants Grid */}
            <div className="grid grid-cols-4 gap-3">
              {productVariants.map((product, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="relative bg-background rounded-2xl p-3 shadow-soft border border-border/50 hover:shadow-medium hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
                    <img
                      src={product.src}
                      alt={product.alt}
                      className="w-full h-14 sm:h-16 object-contain"
                    />
                  </div>
                  <p className="text-[10px] sm:text-xs text-center text-muted-foreground mt-2 font-medium">
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
