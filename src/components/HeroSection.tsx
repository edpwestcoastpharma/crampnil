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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light via-background to-secondary-light opacity-60" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Trusted by Healthcare Professionals
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">CRAMPNIL</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground/90 mb-6">
              Helps to Relieve Muscle Pain & Cramps
            </h2>
            
            <p className="text-base lg:text-lg text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0">
              Experience fast, effective relief from leg cramps, muscle spasms, and discomfort. 
              Formulated with essential minerals and vitamins for comprehensive muscle care.
            </p>
            
            <p className="text-sm text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Available in multiple formats – tablets, cream, powder, and diabetic-friendly options 
              to suit your lifestyle and needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => handleScrollTo("#products")}
                className="group px-8 py-4 gradient-bg text-primary-foreground font-semibold rounded-xl shadow-glow-pink hover:shadow-large hover:scale-105 transition-all duration-300"
              >
                Explore Products
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </button>
              
              <button
                onClick={() => handleScrollTo("#ingredients")}
                className="px-8 py-4 bg-background border-2 border-secondary text-secondary font-semibold rounded-xl hover:bg-secondary hover:text-secondary-foreground shadow-soft hover:shadow-glow-blue transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Product Collage */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative bg-background/50 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-large">
              {/* Main Featured Product */}
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-primary-light to-secondary-light p-4 rounded-2xl shadow-medium">
                  <img
                    src={crampnilSachet}
                    alt="Crampnil Sachet - Instant Relief from Leg Cramps"
                    className="w-full h-48 sm:h-56 object-contain mx-auto"
                  />
                </div>
              </div>
              
              {/* Product Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-xl p-3 shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300">
                  <img
                    src={crampnilTablet}
                    alt="Crampnil Tablets"
                    className="w-full h-24 sm:h-28 object-contain"
                  />
                </div>
                <div className="bg-background rounded-xl p-3 shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300">
                  <img
                    src={crampnilCream}
                    alt="Crampnil Cream"
                    className="w-full h-24 sm:h-28 object-contain"
                  />
                </div>
                <div className="bg-background rounded-xl p-3 shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300">
                  <img
                    src={crampnilPowder}
                    alt="Crampnil Powder"
                    className="w-full h-24 sm:h-28 object-contain"
                  />
                </div>
                <div className="bg-background rounded-xl p-3 shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300">
                  <img
                    src={crampnilD}
                    alt="Crampnil-D for Diabetics"
                    className="w-full h-24 sm:h-28 object-contain"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full shadow-glow-blue text-sm font-semibold animate-float">
              5 Products
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
