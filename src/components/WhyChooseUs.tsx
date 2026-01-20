import { Heart, Leaf, ShieldCheck, Truck, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Authentic Bihar Recipes",
    description: "Time-honoured recipes passed down through generations, preserving the true taste of Bihar.",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Women Empowerment",
    description: "Built, managed, and run entirely by women, supporting local communities and creating opportunities.",
    color: "accent",
  },
  {
    icon: ShieldCheck,
    title: "Premium Ingredients",
    description: "Only the finest quality ingredients – pure ghee, fresh jaggery, and premium wheat flour.",
    color: "golden",
  },
  {
    icon: Sparkles,
    title: "Freshly Prepared",
    description: "Every order is prepared fresh to ensure you receive snacks at their best quality and taste.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Hygienic Production",
    description: "Prepared in clean, hygienic kitchens following strict quality and safety standards.",
    color: "accent",
  },
  {
    icon: Truck,
    title: "All-India Delivery",
    description: "Secure packaging and reliable delivery to every corner of India, from Kashmir to Kanyakumari.",
    color: "golden",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-golden/20 text-golden-dark rounded-full text-sm font-medium mb-4">
            Why ANNADISHA
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're not just selling snacks – we're preserving tradition, empowering women, and bringing the authentic taste of Bihar to your home.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card p-6 md:p-8 rounded-2xl border border-border hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                  feature.color === "primary"
                    ? "bg-primary/10"
                    : feature.color === "accent"
                    ? "bg-accent/10"
                    : "bg-golden/20"
                }`}
              >
                <feature.icon
                  className={`w-7 h-7 ${
                    feature.color === "primary"
                      ? "text-primary"
                      : feature.color === "accent"
                      ? "text-accent"
                      : "text-golden-dark"
                  }`}
                />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
