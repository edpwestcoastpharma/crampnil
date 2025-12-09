import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Ingredient {
  name: string;
  strength: string;
  benefit: string;
}

interface ProductIngredient {
  id: string;
  name: string;
  indication: string;
  ingredients: Ingredient[];
}

const productIngredients: ProductIngredient[] = [
  {
    id: "sachet",
    name: "Crampnil Sachet / Powder Drink",
    indication:
      "Used for instant relief of leg cramps, muscle pain, and spasms. Delicious flavoured powder drink that can be taken any time of the day for quick absorption and fast-acting relief.",
    ingredients: [
      { name: "Calcium Citrate", strength: "250 mg", benefit: "Supports muscle contraction and nerve function" },
      { name: "Magnesium Citrate", strength: "100 mg", benefit: "Relaxes muscles and prevents cramps" },
      { name: "Vitamin E (Acetate)", strength: "15 IU", benefit: "Antioxidant support for muscle health" },
      { name: "L-Carnitine", strength: "50 mg", benefit: "Supports energy metabolism in muscles" },
    ],
  },
  {
    id: "tablet",
    name: "Crampnil Tablet",
    indication:
      "Oral supplement for relieving muscle pain and cramps. Contains a balanced combination of minerals and vitamins to promote muscle relaxation and reduce pain in limbs. Suitable for regular use.",
    ingredients: [
      { name: "Calcium", strength: "250 mg", benefit: "Essential for muscle function and bone health" },
      { name: "Magnesium", strength: "100 mg", benefit: "Natural muscle relaxant" },
      { name: "Vitamin E", strength: "15 IU", benefit: "Protects muscle cells from oxidative stress" },
      { name: "L-Carnitine", strength: "50 mg", benefit: "Aids in muscle energy production" },
    ],
  },
  {
    id: "cream",
    name: "Crampnil Cream",
    indication:
      "Topical application for external use on affected areas. Provides localized relief from calf cramps, foot cramps, stiffness, and muscle soreness. Suitable for legs, neck, and back pain.",
    ingredients: [
      { name: "Methyl Salicylate", strength: "10%", benefit: "Provides warming relief to sore muscles" },
      { name: "Menthol", strength: "5%", benefit: "Cooling sensation and pain relief" },
      { name: "Camphor", strength: "3%", benefit: "Increases blood flow to affected area" },
      { name: "Diclofenac", strength: "1%", benefit: "Anti-inflammatory for pain reduction" },
    ],
  },
  {
    id: "powder",
    name: "Crampnil Powder Jar (180g)",
    indication:
      "Large format powder for regular users. Orange flavoured formula ideal for those experiencing frequent night cramps, muscle pain, and leg spasms. Can be mixed with water for a refreshing drink.",
    ingredients: [
      { name: "Calcium Citrate", strength: "250 mg/scoop", benefit: "Builds strong muscles and bones" },
      { name: "Magnesium Citrate", strength: "100 mg/scoop", benefit: "Prevents and relieves muscle cramps" },
      { name: "Vitamin B6", strength: "2 mg/scoop", benefit: "Supports nerve function" },
      { name: "L-Carnitine", strength: "75 mg/scoop", benefit: "Enhances muscle recovery" },
    ],
  },
  {
    id: "diabetic",
    name: "Crampnil-D (For Diabetics)",
    indication:
      "Specially formulated for diabetic patients experiencing leg cramps. Non-sugary, zero calories formula that is safe for daily use. Provides effective relief without affecting blood sugar levels.",
    ingredients: [
      { name: "Calcium Citrate", strength: "250 mg", benefit: "Muscle and bone support without sugar" },
      { name: "Magnesium Citrate", strength: "100 mg", benefit: "Safe muscle relaxant for diabetics" },
      { name: "Stevia Extract", strength: "Natural", benefit: "Zero-calorie natural sweetener" },
      { name: "Vitamin B Complex", strength: "As directed", benefit: "Supports diabetic nerve health" },
    ],
  },
];

const IngredientsSection = () => {
  return (
    <section id="ingredients" className="py-20 lg:py-28 bg-muted/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Product Details
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ingredients & <span className="gradient-text">Product Information</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Learn about the active ingredients and formulations in each Crampnil product. 
            Our formulas are designed for maximum effectiveness and safety.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {productIngredients.map((product) => (
              <AccordionItem
                key={product.id}
                value={product.id}
                id={`ingredient-${product.id}`}
                className="bg-background rounded-2xl shadow-soft overflow-hidden border-none"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/50 transition-colors">
                  <span className="text-lg font-semibold text-foreground text-left">
                    {product.name}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    {/* Indication */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                        Indication & Use
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {product.indication}
                      </p>
                    </div>

                    {/* Ingredients Table */}
                    <div>
                      <h4 className="text-sm font-semibold text-secondary mb-3 uppercase tracking-wide">
                        Active Ingredients
                      </h4>
                      <div className="bg-muted/50 rounded-xl overflow-hidden">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-border">
                              <th className="text-left py-2.5 px-3 font-medium text-foreground">
                                Ingredient
                              </th>
                              <th className="text-left py-2.5 px-3 font-medium text-foreground">
                                Strength
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {product.ingredients.map((ingredient, index) => (
                              <tr
                                key={index}
                                className="border-b border-border/50 last:border-b-0"
                              >
                                <td className="py-2.5 px-3 text-foreground">
                                  {ingredient.name}
                                  <span className="block text-xs text-muted-foreground">
                                    {ingredient.benefit}
                                  </span>
                                </td>
                                <td className="py-2.5 px-3 text-muted-foreground font-medium">
                                  {ingredient.strength}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-secondary/10 rounded-2xl p-6 text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Disclaimer:</strong> Information provided is for healthcare 
              and educational purposes only. Please refer to the official pack insert for full prescribing 
              information. Consult your healthcare provider before starting any new supplement or medication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
