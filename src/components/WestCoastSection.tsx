import { ExternalLink } from "lucide-react";
import westcoastLogo from "@/assets/westcoast-logo.png";

const WestCoastSection = () => {
  return (
    <section id="westcoast" className="py-6 lg:py-8 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-glow to-secondary opacity-95" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground/30 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-primary-foreground/30 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-primary-foreground/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <span className="inline-block px-3 py-1.5 bg-primary-foreground/20 rounded-full text-xs font-medium mb-3">
              Our Parent Company
            </span>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 leading-tight">
              West-Coast Pharmaceutical Works Ltd.
            </h2>
            
            <p className="text-sm text-primary-foreground/90 mb-4 leading-relaxed">
              Crampnil is proudly manufactured by West-Coast Pharmaceutical Works Ltd., 
              a leading pharmaceutical company in India with decades of experience in 
              healthcare excellence.
            </p>
            
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                  ✓
                </span>
                <span className="text-primary-foreground/90 text-sm">
                  <strong className="text-primary-foreground">Established Legacy:</strong> Over 50 years of pharmaceutical excellence
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                  ✓
                </span>
                <span className="text-primary-foreground/90 text-sm">
                  <strong className="text-primary-foreground">WHO-GMP Certified:</strong> Manufacturing facilities meet international standards
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">
                  ✓
                </span>
                <span className="text-primary-foreground/90 text-sm">
                  <strong className="text-primary-foreground">Global Reach:</strong> Products exported to over 50 countries worldwide
                </span>
              </li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-center gap-4">
            {/* Logo */}
            <div className="bg-primary-foreground rounded-xl p-5 shadow-large">
              <img
                src={westcoastLogo}
                alt="West-Coast Pharmaceutical Works Ltd."
                className="w-48 lg:w-64 h-auto object-contain"
              />
            </div>
            
            {/* CTA Button */}
            <a
              href="https://westcoastin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 bg-primary-foreground text-primary font-semibold rounded-lg shadow-large hover:shadow-glow-pink hover:scale-105 transition-all duration-300 text-sm"
            >
              Go to Main Website
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WestCoastSection;
