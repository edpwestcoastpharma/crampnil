import { useState } from "react";
import crampnilSachet from "@/assets/crampnil-sachet.jpg";
import crampnilTablet from "@/assets/crampnil-tablet.jpg";
import crampnilCream from "@/assets/crampnil-cream.jpg";
import crampnilPowder from "@/assets/crampnil-powder.jpg";
import crampnilD from "@/assets/crampnil-d.jpg";

interface Product {
  id: string;
  name: string;
  tagline: string;
  image: string;
  benefits: string[];
  ingredientSection: string;
}

const products: Product[] = [
  {
    id: "sachet",
    name: "Crampnil Sachet",
    tagline: "Instant Relief from Leg Cramps",
    image: crampnilSachet,
    benefits: [
      "Provides instant relief from leg cramps",
      "Delicious flavoured powder drink",
      "Easy to carry single-serve sachets",
      "Suitable for athletes and active individuals",
    ],
    ingredientSection: "sachet",
  },
  {
    id: "tablet",
    name: "Crampnil Tablet",
    tagline: "Relieves Muscle Pain & Cramps",
    image: crampnilTablet,
    benefits: [
      "Promotes relaxation of muscles",
      "Relieves pain in limbs",
      "Contains Calcium, Magnesium, Vitamin E & L-Carnitine",
      "Relaxes calf & leg cramps effectively",
    ],
    ingredientSection: "tablet",
  },
  {
    id: "cream",
    name: "Crampnil Cream",
    tagline: "Topical Relief for Muscle Soreness",
    image: crampnilCream,
    benefits: [
      "Relaxes calf & foot cramps quickly",
      "Reduces stiffness & muscle soreness",
      "Reduces pain in legs, neck & back",
      "Easy to apply topical formula",
    ],
    ingredientSection: "cream",
  },
  {
    id: "powder",
    name: "Crampnil Powder",
    tagline: "180g Jar for Extended Use",
    image: crampnilPowder,
    benefits: [
      "Large 180gm jar for regular use",
      "Orange flavoured for pleasant taste",
      "Contains Calcium, Magnesium & L-Carnitine",
      "Ideal for night cramps and muscle pain",
    ],
    ingredientSection: "powder",
  },
  {
    id: "crampnil-d",
    name: "Crampnil-D",
    tagline: "For Diabetic Leg Cramps",
    image: crampnilD,
    benefits: [
      "Specially formulated for diabetic patients",
      "Non-sugary, zero calories formula",
      "Safe for daily use by diabetics",
      "Effective relief from diabetic leg cramps",
    ],
    ingredientSection: "diabetic",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleViewIngredients = () => {
    const element = document.querySelector(`#ingredient-${product.ingredientSection}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="flip-card h-[420px] cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        {/* Front of Card */}
        <div className="flip-card-front bg-background rounded-2xl shadow-medium overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="flex-1 bg-gradient-to-br from-primary-light/50 to-secondary-light/50 p-6 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-48 w-auto object-contain drop-shadow-lg"
              />
            </div>
            <div className="p-5 text-center bg-background">
              <h3 className="text-lg font-bold text-foreground mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground">{product.tagline}</p>
            </div>
          </div>
        </div>

        {/* Back of Card */}
        <div className="flip-card-back bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-large p-6">
          <div className="h-full flex flex-col text-primary-foreground">
            <h3 className="text-xl font-bold mb-4 text-center">{product.name}</h3>
            <ul className="flex-1 space-y-3">
              {product.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleViewIngredients();
              }}
              className="mt-4 w-full py-3 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-xl font-medium transition-colors text-sm"
            >
              View Ingredients →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Product Range
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Crampnil Range</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our complete range of muscle care products, each formulated to 
            provide targeted relief for different needs and preferences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          Hover or tap on product cards to see benefits and ingredient details
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;
