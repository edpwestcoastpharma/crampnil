import { ExternalLink } from "lucide-react";
import westcoastLogo from "@/assets/westcoast-logo.png";

const WestCoastSection = () => {
  return (
    <section id="westcoast" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-secondary opacity-95" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground/30 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-primary-foreground/30 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-primary-foreground/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <span className="inline-block px-4 py-2 bg-primary-foreground/20 rounded-full text-sm font-medium mb-6">
              Our Parent Company
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              West-Coast Pharmaceutical Works Ltd.
            </h2>
            
            <p className="text-lg text-primary-foreground/90 mb-6 leading-relaxed">
              Crampnil is proudly manufactured by West-Coast Pharmaceutical Works Ltd., 
              a leading pharmaceutical company in India with decades of experience in 
              healthcare excellence.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </span>
                <span className="text-primary-foreground/90">
                  <strong className="text-primary-foreground">Established Legacy:</strong> Over 50 years of pharmaceutical excellence
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </span>
                <span className="text-primary-foreground/90">
                  <strong className="text-primary-foreground">WHO-GMP Certified:</strong> Manufacturing facilities meet international standards
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-1">
                  ✓
                </span>
                <span className="text-primary-foreground/90">
                  <strong className="text-primary-foreground">Global Reach:</strong> Products exported to over 50 countries worldwide
                </span>
              </li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <div className="bg-primary-foreground rounded-2xl p-8 shadow-large">
              <img
                src={westcoastLogo}
                alt="West-Coast Pharmaceutical Works Ltd."
                className="w-64 lg:w-80 h-auto object-contain"
              />
            </div>
            
            {/* CTA Button */}
            <a
              href="https://westcoastin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-xl shadow-large hover:shadow-glow-pink hover:scale-105 transition-all duration-300"
            >
              Go to Main Website
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WestCoastSection;
