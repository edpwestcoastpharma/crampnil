import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-background/80 text-sm">
              © {currentYear} Crampnil – A brand of West-Coast Pharmaceutical Works Ltd. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/Westcoastpharma/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 hover:text-background transition-colors text-sm font-medium"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/westcoastpharma/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 hover:text-background transition-colors text-sm font-medium"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/company/west-coast-pharmaceuticals-works-limited/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 hover:text-background transition-colors text-sm font-medium"
            >
              LinkedIn
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-background/70 hover:text-background transition-colors text-sm font-medium group"
          >
            Back to Top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
