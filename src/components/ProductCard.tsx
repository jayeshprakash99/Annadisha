import { useState } from "react";
import { ShoppingCart, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  gheePrice?: number;
  image: string;
  rating?: number;
  isGheeSpecial?: boolean;
}

const ProductCard = ({
  name,
  description,
  price,
  gheePrice,
  image,
  rating = 4.8,
  isGheeSpecial = false,
}: ProductCardProps) => {
  const [selectedVariant, setSelectedVariant] = useState<"regular" | "ghee">("regular");
  const currentPrice = selectedVariant === "ghee" && gheePrice ? gheePrice : price;
  const whatsappNumber = "918409236506"; // country code + number (same as Footer)
  const waMessage = `Hi, I would like to enquire/order ${name} (${selectedVariant}) - ₹${currentPrice} per kg. Qty: 1 kg. Please share availability and delivery details.`;
  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 border border-border">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isGheeSpecial && (
            <Badge className="bg-golden text-foreground hover:bg-golden-dark">
              🧈 Ghee Special
            </Badge>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <Star className="w-3.5 h-3.5 text-golden fill-golden" />
          <span className="text-xs font-medium text-foreground">{rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-display font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>

        {/* Variant Selection */}
        {gheePrice && (
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setSelectedVariant("regular")}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-lg border transition-all ${
                selectedVariant === "regular"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-foreground border-border hover:border-primary/50"
              }`}
            >
              Regular
            </button>
            <button
              onClick={() => setSelectedVariant("ghee")}
              className={`flex-1 py-2 px-3 text-sm font-medium rounded-lg border transition-all ${
                selectedVariant === "ghee"
                  ? "bg-golden text-foreground border-golden"
                  : "bg-transparent text-foreground border-border hover:border-golden/50"
              }`}
            >
              🧈 Ghee
            </button>
          </div>
        )}

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-foreground">₹{currentPrice}</span>
            <span className="text-sm text-muted-foreground ml-1">/ kg</span>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
            aria-label={`Order now for ${name}`}
          >
            <Button size="sm" className="gap-2 bg-green-600 hover:bg-green-700 border-transparent">
              <MessageCircle className="w-4 h-4" />
              Order Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
