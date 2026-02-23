import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import crampnilSachet from "@/assets/crampnil-sachet.jpg";
import crampnilTablet from "@/assets/crampnil-tablet.jpg";
import crampnilCream from "@/assets/crampnil-cream.jpg";
import crampnilPowder from "@/assets/crampnil-powder.jpg";
import crampnilD from "@/assets/crampnil-d.jpg";

interface ProductInfo {
  name: string;
  image: string;
  amazonLink: string;
  dosageForm: string;
  composition?: string[];
  nutritionalInfo?: { name: string; value: string }[];
  indications: string[];
  directions: string;
  warnings?: string[];
  allergenInfo?: string;
  packSize: string;
  category?: string;
  flavour?: string;
}

const productDetails: Record<string, ProductInfo> = {
  tablet: {
    name: "CRAMPNIL Tablet",
    image: crampnilTablet,
    amazonLink: "https://www.amazon.in/WEST-COAST-Crampnil-Tablets-relieve-muscle/dp/B0BW8K5NLF",
    dosageForm: "Tablet",
    composition: ["Calcium Citrate", "Magnesium Aspartate", "Vitamin E", "L-Carnitine"],
    indications: ["Relieves muscle pain & cramps", "Relieves pains in limbs", "Relieves muscle cramps", "Relaxes calf & leg cramps"],
    directions: "As directed by Healthcare Practitioner.",
    packSize: "10 × 10 Tablets",
    category: "Dietary Supplement / Nutraceutical Product"
  },
  cream: {
    name: "CRAMPNIL Cream",
    image: crampnilCream,
    amazonLink: "https://www.amazon.in/West-Coast-Crampnil-Relief-Cream/dp/B07JKXPMJ8",
    dosageForm: "Topical Cream",
    indications: ["Relieves muscle pain & cramps", "Relaxes calf & foot cramps", "Reduces stiffness & muscle soreness", "Reduces pain in legs, neck & back"],
    directions: "Apply liberally on affected area and massage until absorbed.",
    warnings: ["For external use only", "Avoid contact with eyes", "Keep out of reach of children"],
    packSize: "50 g"
  },
  sachet: {
    name: "CRAMPNIL Powder (Sachet)",
    image: crampnilSachet,
    amazonLink: "https://www.amazon.in/Wescoast-Crampnil-Magnesium-Carnitine-promotes/dp/B0DDTT8WNT",
    dosageForm: "Powder",
    composition: ["Calcium", "Magnesium", "L-Carnitine", "Vitamins"],
    indications: ["Supports leg cramps", "Supports muscle pain & spasms", "Supports night cramps & pain"],
    directions: "Take one sachet daily in water or as directed by Healthcare Practitioner.",
    packSize: "10 Sachet × 15 g",
    flavour: "Orange"
  },
  powder: {
    name: "CRAMPNIL Powder (Jar)",
    image: crampnilPowder,
    amazonLink: "https://www.amazon.in/WEST-COAST-Crampnil-relieve-Magnesium-L-Carnitine/dp/B0BW8N964G",
    dosageForm: "Powder",
    nutritionalInfo: [
      { name: "Vitamin E", value: "10 mg" },
      { name: "Vitamin B5", value: "2 mg" },
      { name: "Vitamin B6", value: "1.9 mg" },
      { name: "Vitamin B1", value: "1 mg" },
      { name: "Sodium Citrate", value: "580 mg" },
      { name: "Calcium Carbonate", value: "500 mg" },
      { name: "Magnesium Sulphate", value: "500 mg" },
      { name: "L-Carnitine", value: "300 mg" }
    ],
    indications: ["Helps relieve muscle pain & cramps", "Supports muscle function"],
    directions: "One scoop daily in water or as directed by Healthcare Practitioner.",
    allergenInfo: "Contains milk derivatives (Lactose)",
    packSize: "180 g"
  },
  "crampnil-d": {
    name: "CRAMPNIL-D (For Diabetic Leg Cramps)",
    image: crampnilD,
    amazonLink: "https://www.amazon.in/WEST-COAST-Crampnil-D-Diabetic-Leg-Cramps/dp/B0BWF84Z4G",
    dosageForm: "Powder",
    indications: ["For diabetic leg cramps", "Non-sugary", "Zero calories", "Suitable for diabetic patients"],
    directions: "Dissolve sachet in water and consume as directed.",
    warnings: ["No added sugar"],
    packSize: "10 Sachet × 8.5 g"
  }
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productDetails[productId] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/#products" className="text-primary hover:underline">
            Back to Products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-16 pb-6 flex-1">
        <div className="mx-auto px-4" style={{ maxWidth: "1200px" }}>
          {/* Back Button */}
          <Link 
            to="/#products" 
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors mb-2 text-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Products
          </Link>

          {/* Product Content */}
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-5 items-start">
            {/* Left: Product Image */}
            <div className="bg-gradient-to-br from-primary-light/50 to-secondary-light/50 rounded-xl p-5 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-56 w-auto object-contain drop-shadow-xl"
              />
            </div>

            {/* Right: Product Information */}
            <div className="space-y-0.5" style={{ lineHeight: "1.4" }}>
              <h1 className="text-xl lg:text-2xl font-bold text-foreground mb-0.5">
                {product.name}
              </h1>

              {/* Dosage Form */}
              <div className="bg-muted/50 rounded-lg px-3 py-1.5">
                <h3 className="font-semibold text-foreground text-xs">Dosage Form</h3>
                <p className="text-muted-foreground text-xs">{product.dosageForm}</p>
              </div>

              {/* Composition */}
              {product.composition && (
                <div className="bg-muted/50 rounded-lg px-3 py-1.5">
                  <h3 className="font-semibold text-foreground text-xs mb-0.5">Composition</h3>
                  <div className="flex flex-wrap gap-x-3 gap-y-0">
                    {product.composition.map((item, index) => (
                      <span key={index} className="text-muted-foreground text-xs flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Nutritional Information */}
              {product.nutritionalInfo && (
                <div className="bg-muted/50 rounded-lg px-3 py-1.5">
                  <h3 className="font-semibold text-foreground text-xs mb-0.5">Nutritional Info (per 15 g)</h3>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-0">
                    {product.nutritionalInfo.map((item, index) => (
                      <div key={index} className="flex justify-between text-xs">
                        <span className="text-muted-foreground">{item.name}</span>
                        <span className="text-foreground font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Indications / Benefits */}
              <div className="bg-muted/50 rounded-lg px-3 py-1.5">
                <h3 className="font-semibold text-foreground text-xs mb-0.5">Indications / Benefits</h3>
                <div className="flex flex-wrap gap-x-3 gap-y-0">
                  {product.indications.map((item, index) => (
                    <span key={index} className="text-muted-foreground text-xs flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Directions for Use */}
              <div className="bg-muted/50 rounded-lg px-3 py-1.5">
                <h3 className="font-semibold text-foreground text-xs">Directions for Use</h3>
                <p className="text-muted-foreground text-xs">{product.directions}</p>
              </div>

              {/* Warnings & Allergen inline */}
              <div className="flex gap-1.5">
                {product.warnings && (
                  <div className="bg-destructive/10 rounded-lg px-3 py-1.5 flex-1">
                    <h3 className="font-semibold text-destructive text-xs mb-0.5">Warnings</h3>
                    {product.warnings.map((item, index) => (
                      <span key={index} className="text-muted-foreground text-xs flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-destructive" />
                        {item}
                      </span>
                    ))}
                  </div>
                )}
                {product.allergenInfo && (
                  <div className="bg-amber-500/10 rounded-lg px-3 py-1.5 flex-1">
                    <h3 className="font-semibold text-amber-700 text-xs">Allergen Info</h3>
                    <p className="text-muted-foreground text-xs">{product.allergenInfo}</p>
                  </div>
                )}
              </div>

              {/* Pack Size & Additional Info */}
              <div className="flex flex-wrap gap-1.5">
                <div className="bg-muted/50 rounded-lg px-3 py-1.5 flex-1 min-w-[100px]">
                  <h3 className="font-semibold text-foreground text-xs">Pack Size</h3>
                  <p className="text-muted-foreground text-xs">{product.packSize}</p>
                </div>
                {product.flavour && (
                  <div className="bg-muted/50 rounded-lg px-3 py-1.5 flex-1 min-w-[100px]">
                    <h3 className="font-semibold text-foreground text-xs">Flavour</h3>
                    <p className="text-muted-foreground text-xs">{product.flavour}</p>
                  </div>
                )}
                {product.category && (
                  <div className="bg-muted/50 rounded-lg px-3 py-1.5 flex-1 min-w-[100px]">
                    <h3 className="font-semibold text-foreground text-xs">Category</h3>
                    <p className="text-muted-foreground text-xs">{product.category}</p>
                  </div>
                )}
              </div>

              {/* Buy Now Button */}
              <a
                href={product.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block pt-1"
              >
                <Button className="w-full py-3 text-sm font-semibold bg-primary hover:bg-primary/90 transition-opacity">
                  Buy Now on Amazon
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
