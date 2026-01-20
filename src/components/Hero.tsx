import { ArrowRight, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-snacks.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-cream">
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-50" />
      
      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-golden/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 animate-fade-in-up">
              <Heart className="w-4 h-4 text-accent" fill="currentColor" />
              <span className="text-sm font-medium text-primary">Women-Led Brand</span>
              <Sparkles className="w-4 h-4 text-golden" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Taste Bihar.{" "}
              <span className="text-primary">Empower Women.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              ANNADISHA brings Bihar's authentic traditional snacks to your doorstep – handcrafted with love, purity, and tradition by a women-led team.
            </p>

            {/* Empowerment Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-accent rounded-full" />
                Made by Women
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Women Empowered
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-golden/20 text-golden-dark rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-golden rounded-full" />
                Pan-India Delivery
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <a href="#products" className="inline-block">
                <Button size="lg" className="gap-2 text-base px-8">
                  Explore Products
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="#about" className="inline-block" aria-label="Our Story">
                <Button variant="outline" size="lg" className="text-base px-8">
                  Our Story
                </Button>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={heroImage}
                alt="Traditional Bihar snacks - Thekua, Nimki and Gujia"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-card animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍘</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Authentic Recipes</p>
                  <p className="text-xs text-muted-foreground">From Bihar's Kitchen</p>
                </div>
              </div>
            </div>

            {/* Second Floating Card */}
            <div className="absolute -top-4 -right-4 bg-card p-3 rounded-xl shadow-card animate-float" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-2">
                <span className="text-xl">🧈</span>
                <span className="text-sm font-medium text-foreground">Pure Ghee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
