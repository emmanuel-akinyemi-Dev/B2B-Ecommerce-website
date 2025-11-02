import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export const ProductCard = ({
  id,
  name,
  description,
  price,
  image,
  category,
  stock,
}: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image });
  };

  return (
    <Card className="overflow-hidden group hover:shadow-elevated transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-4 left-4 bg-primary">{category}</Badge>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">{name}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl font-bold text-primary">${price.toFixed(2)}</span>
          <span className="text-sm text-muted-foreground">{stock} in stock</span>
        </div>
        <Button className="w-full bg-gradient-primary" onClick={handleAddToCart}>
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};
