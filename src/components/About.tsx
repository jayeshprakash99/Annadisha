import { Heart, Users, Award } from "lucide-react";

const stats = [
  { number: "100%", label: "Women-Led" },
  { number: "1000+", label: "Happy Customers" },
  { number: "3", label: "Traditional Recipes" },
  { number: "28", label: "States Delivered" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-primary pattern-overlay">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-foreground/10 text-primary-foreground rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" fill="currentColor" />
              Our Story
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6 leading-tight">
              Empowering Women,{" "}
              <span className="text-golden-light">Preserving Tradition</span>
            </h2>

            <div className="space-y-4 text-primary-foreground/90 text-lg leading-relaxed mb-8">
              <p>
                <strong className="text-primary-foreground">ANNADISHA</strong> is a women-led online food brand dedicated to bringing the authentic taste of Bihar's traditional snacks to homes across India.
              </p>
              <p>
                Built and run entirely by women, ANNADISHA stands for quality, culture, and empowerment. Every Thekua, Nimki, and Gujia (Pedhokia) is prepared using time-honoured recipes and delivered fresh to your doorstep.
              </p>
              <p>
                We believe in preserving Bihar's rich culinary heritage while creating meaningful employment opportunities for women in our community.
              </p>
            </div>

            {/* Empowerment Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-primary-foreground/10 px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-golden-light" />
                <span className="text-primary-foreground font-medium">Women Workforce</span>
              </div>
              <div className="flex items-center gap-3 bg-primary-foreground/10 px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-golden-light" />
                <span className="text-primary-foreground font-medium">Supporting Communities</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-primary-foreground/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-golden-light mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
