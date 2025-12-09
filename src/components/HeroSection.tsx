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

  const smallProducts = [
    { src: crampnilTablet, alt: "Crampnil Tablets", delay: "0.1s" },
    { src: crampnilCream, alt: "Crampnil Cream", delay: "0.2s" },
    { src: crampnilPowder, alt: "Crampnil Powder", delay: "0.3s" },
    { src: crampnilD, alt: "Crampnil-D for Diabetics", delay: "0.4s" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-background to-secondary-light" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-secondary/20 to-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-full blur-3xl animate-rotate-slow" />
      
      {/* Decorative Floating Elements */}
      <div className="absolute top-32 right-20 w-4 h-4 bg-primary/40 rounded-full animate-float" />
      <div className="absolute top-48 left-32 w-3 h-3 bg-secondary/40 rounded-full animate-bounce-gentle" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-32 right-40 w-3 h-3 bg-secondary/30 rounded-full animate-bounce-gentle" />
      
      {/* Mesh Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-5 py-2.5 bg-gradient-to-r from-primary/15 to-secondary/15 text-primary rounded-full text-sm font-semibold mb-8 border border-primary/20 animate-slide-in-left shadow-soft backdrop-blur-sm">
              ✨ Trusted by Healthcare Professionals
            </span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 leading-none animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="gradient-text drop-shadow-sm">CRAMPNIL</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-8 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
              Helps to Relieve 
              <span className="relative mx-2">
                <span className="relative z-10 text-primary font-bold">Muscle Pain</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/20 -skew-x-6"></span>
              </span>
              & 
              <span className="relative mx-2">
                <span className="relative z-10 text-secondary font-bold">Cramps</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-secondary/20 skew-x-6"></span>
              </span>
            </h2>
            
            <p className="text-base lg:text-lg text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Experience fast, effective relief from leg cramps, muscle spasms, and discomfort. 
              Formulated with <span className="text-foreground font-medium">essential minerals and vitamins</span> for comprehensive muscle care.
            </p>
            
            <p className="text-sm text-muted-foreground/80 mb-10 max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              Available in multiple formats – tablets, cream, powder, and diabetic-friendly options 
              to suit your lifestyle and needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <button
                onClick={() => handleScrollTo("#products")}
                className="group relative px-10 py-5 gradient-bg text-primary-foreground font-bold rounded-2xl shadow-glow-pink hover:shadow-large hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative flex items-center justify-center gap-2">
                  Explore Products
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
              
              <button
                onClick={() => handleScrollTo("#ingredients")}
                className="group px-10 py-5 bg-background/80 backdrop-blur-sm border-2 border-secondary/30 text-secondary font-bold rounded-2xl hover:bg-secondary hover:text-secondary-foreground hover:border-secondary shadow-soft hover:shadow-glow-blue transition-all duration-300"
              >
                <span className="flex items-center justify-center gap-2">
                  Learn More
                  <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">↓</span>
                </span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Clinically Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: "0.3s" }} />
                <span>Fast Acting</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: "0.6s" }} />
                <span>Safe Formula</span>
              </div>
            </div>
          </div>

          {/* Right Content - Premium Product Collage */}
          <div className="relative animate-slide-in-right">
            {/* Main Container with Glass Effect */}
            <div className="relative bg-gradient-to-br from-background/90 via-background/70 to-background/90 backdrop-blur-xl rounded-[2rem] p-8 lg:p-10 shadow-large border border-border/50">
              
              {/* Inner Glow */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-2xl pointer-events-none" />
              
              {/* Main Featured Product */}
              <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60" />
                <div className="relative bg-gradient-to-br from-primary-light via-background to-secondary-light p-6 rounded-2xl shadow-medium border border-border/30 group-hover:shadow-glow-pink transition-all duration-500">
                  <img
                    src={crampnilSachet}
                    alt="Crampnil Sachet - Instant Relief from Leg Cramps"
                    className="w-full h-52 sm:h-64 object-contain mx-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Product Label */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-background border border-border rounded-full shadow-soft text-xs font-semibold text-foreground/80">
                  Featured Product
                </div>
              </div>
              
              {/* Product Grid */}
              <div className="grid grid-cols-4 gap-3">
                {smallProducts.map((product, index) => (
                  <div 
                    key={index}
                    className="group relative animate-fade-in"
                    style={{ animationDelay: product.delay }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-background rounded-xl p-2.5 shadow-soft border border-border/30 group-hover:shadow-medium group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                      <img
                        src={product.src}
                        alt={product.alt}
                        className="w-full h-16 sm:h-20 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-5 -right-5 px-5 py-2.5 bg-gradient-to-r from-secondary to-secondary-glow text-secondary-foreground rounded-full shadow-glow-blue text-sm font-bold animate-float border-2 border-background">
              5 Products
            </div>
            
            <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-primary to-primary-glow text-primary-foreground rounded-full shadow-glow-pink text-xs font-bold animate-float border-2 border-background" style={{ animationDelay: "1.5s" }}>
              ⚡ Fast Relief
            </div>
            
            {/* Decorative Ring */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-primary/20 rounded-[3rem] animate-rotate-slow" />
          </div>
        </div>
      </div>
      
      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;