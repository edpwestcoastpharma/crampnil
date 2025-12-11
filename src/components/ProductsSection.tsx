import { Link } from "react-router-dom";
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
  amazonLink: string;
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
    amazonLink: "https://www.amazon.in/Wescoast-Crampnil-Magnesium-Carnitine-promotes/dp/B0DDTT8WNT",
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
    amazonLink: "https://www.amazon.in/WEST-COAST-Crampnil-Tablets-relieve-muscle/dp/B0BW8K5NLF",
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
    amazonLink: "https://www.amazon.in/West-Coast-Crampnil-Relief-Cream/dp/B07JKXPMJ8",
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
    amazonLink: "https://www.amazon.in/WEST-COAST-Crampnil-relieve-Magnesium-L-Carnitine/dp/B0BW8N964G",
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
    amazonLink: "https://www.amazon.in/WEST-COAST-Crampnil-D-Diabetic-Leg-Cramps/dp/B0BWF84Z4G",
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-background rounded-2xl shadow-medium overflow-hidden">
      <Link 
        to={`/product/${product.id}`}
        className="block bg-gradient-to-br from-primary-light/50 to-secondary-light/50 p-6 flex items-center justify-center hover:opacity-95 transition-opacity"
      >
        <img
          src={product.image}
          alt={product.name}
          className="max-h-48 w-auto object-contain drop-shadow-lg"
        />
      </Link>
      <div className="p-5 text-center bg-background">
        <h3 className="text-lg font-bold text-foreground mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{product.tagline}</p>
        <div className="space-y-2">
          <Link
            to={`/product/${product.id}`}
            className="inline-block w-full py-2.5 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View Details
          </Link>
          <a
            href={product.amazonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full py-2.5 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Buy Now
          </a>
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
          Click on any product card to view detailed information
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;
