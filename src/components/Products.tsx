import { useState } from "react";
import ProductCard from "./ProductCard";
import thekuaImage from "@/assets/thekua.png";
import nimkiImage from "@/assets/nimki.png";
import gujiaImage from "@/assets/gujia.png";

const products = [
  // Thekua variants
  {
    id: 1,
    name: "Thekua — Aata & Gud",
    description:
      "Traditional sweet wheat cookie made with whole wheat (aata) and jaggery (gud). Mildly sweet and perfectly crunchy.",
    price: 320,
    image: thekuaImage,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Thekua — Ghee",
    description: "Rich ghee Thekua — prepared with pure ghee for a decadent, aromatic flavor.",
    price: 810,
    image: thekuaImage,
    rating: 4.9,
    isGheeSpecial: true,
  },

  // Nimki variants
  {
    id: 3,
    name: "Nimki — Maida",
    description: "Crispy diamond-shaped savory snack made with maida. Lightly salted and perfectly fried.",
    price: 280,
    image: nimkiImage,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Nimki — Aata",
    description: "Whole-wheat (aata) Nimki — a slightly heartier, wholesome version of the classic teatime snack.",
    price: 255,
    image: nimkiImage,
    rating: 4.8,
  },
  {
    id: 5,
    name: "Nimki — Ghee",
    description: "Ghee Nimki — fried in pure ghee for a rich aroma and flavour.",
    price: 720,
    image: nimkiImage,
    rating: 4.9,
    isGheeSpecial: true,
  },

  // Gujia variants
  {
    id: 6,
    name: "Gujia — Suji & Khoya",
    description: "Crescent-shaped sweet dumplings made with semolina (suji) and filled with khoya and dry fruits.",
    price: 575,
    image: gujiaImage,
    rating: 4.9,
  },
  {
    id: 7,
    name: "Gujia — Suji & Nariyal",
    description: "Suji Gujia filled with a sweet coconut (nariyal) mix — light and flavorful.",
    price: 475,
    image: gujiaImage,
    rating: 4.9,
  },
];

const Products = () => {
  const [filter, setFilter] = useState<"all" | "regular" | "ghee">("all");

  return (
    <section id="products" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Bihar's Authentic Snacks
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handcrafted with traditional recipes, premium ingredients, and the warmth of Bihar's kitchens. Choose between Regular and Ghee Special variants.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <div className="inline-flex bg-muted rounded-full p-1">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all ${
                filter === "all"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setFilter("regular")}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all ${
                filter === "regular"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Regular
            </button>
            <button
              onClick={() => setFilter("ghee")}
              className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all flex items-center gap-1.5 ${
                filter === "ghee"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>🧈</span> Ghee Special
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products
            .filter((p) => {
              if (filter === "all") return true;
              if (filter === "regular") return !p.isGheeSpecial;
              if (filter === "ghee") return Boolean(p.isGheeSpecial);
              return true;
            })
            .map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            All products are freshly prepared and delivered with secure packaging
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center gap-2 text-primary">
              <span className="w-2 h-2 bg-primary rounded-full" />
              Pan-India Delivery
            </span>
            <span className="flex items-center gap-2 text-accent">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Freshly Prepared
            </span>
            <span className="flex items-center gap-2 text-golden-dark">
              <span className="w-2 h-2 bg-golden rounded-full" />
              Premium Quality
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
