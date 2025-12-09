import { Shield, Heart, Zap, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Clinically Tested",
    description: "Formulations backed by research and trusted by healthcare professionals.",
  },
  {
    icon: Heart,
    title: "Natural Ingredients",
    description: "Contains essential minerals like Calcium, Magnesium, and vital vitamins.",
  },
  {
    icon: Zap,
    title: "Fast Acting",
    description: "Provides quick relief from muscle cramps and painful spasms.",
  },
  {
    icon: Award,
    title: "Trusted Brand",
    description: "Manufactured by West-Coast Pharmaceutical Works Ltd. with decades of expertise.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-muted/50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            About Crampnil
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Your Partner in{" "}
            <span className="gradient-text">Muscle Wellness</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Crampnil is a comprehensive range of muscle care products developed by West-Coast 
            Pharmaceutical Works Ltd. Our formulations combine modern science with essential 
            nutrients to provide effective relief from muscle cramps, pain, and discomfort.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-background rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-8 lg:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground">
              Our Mission
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To provide safe, effective, and accessible solutions for muscle cramps and pain, 
              empowering people to live active, comfortable lives. We are committed to quality, 
              innovation, and the well-being of our customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
