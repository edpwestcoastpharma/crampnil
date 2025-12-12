import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import crampnilLogo from "@/assets/crampnil-logo.png";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Products", href: "#products" },
  { label: "West-Coast", href: "#westcoast" },
  { label: "Contact Us", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-xl border-b border-primary/10"
          : "bg-gradient-to-r from-primary/5 via-transparent to-accent/5"
      }`}
    >
      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-pulse" />
      
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section with glow effect */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={crampnilLogo}
                alt="CRAMPNIL"
                className="h-9 lg:h-11 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 group overflow-hidden ${
                    activeLink === link.href
                      ? "text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {/* Active background */}
                  <span
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      activeLink === link.href
                        ? "bg-gradient-to-r from-primary to-accent opacity-100"
                        : "bg-primary/0 group-hover:bg-primary/10 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  {/* Shine effect on hover */}
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </span>
                  {/* Label */}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {link.label}
                    {activeLink === link.href && (
                      <Sparkles className="w-3 h-3 animate-pulse" />
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative p-2.5 rounded-xl bg-primary/10 text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">
              {isMobileMenuOpen ? (
                <X size={22} className="transition-transform duration-300 rotate-0" />
              ) : (
                <Menu size={22} className="transition-transform duration-300" />
              )}
            </span>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-2 pt-4 border-t border-primary/10">
            {navLinks.map((link, index) => (
              <li 
                key={link.href}
                style={{ animationDelay: `${index * 50}ms` }}
                className={isMobileMenuOpen ? "animate-fade-in" : ""}
              >
                <button
                  onClick={() => handleLinkClick(link.href)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-between group ${
                    activeLink === link.href
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                      : "text-foreground/70 hover:bg-primary/10 hover:text-foreground"
                  }`}
                >
                  <span>{link.label}</span>
                  {activeLink === link.href && (
                    <Sparkles className="w-4 h-4 animate-pulse" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
