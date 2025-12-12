import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import WestCoastSection from "@/components/WestCoastSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      <main>
        <HeroSection />
        <ProductsSection />
        <WestCoastSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
