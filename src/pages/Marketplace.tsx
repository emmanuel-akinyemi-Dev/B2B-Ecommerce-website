import { useState } from "react";
import { ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductGrid } from "@/components/marketplace/ProductGrid";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems } = useCart();
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <ShoppingCart className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                TradeHub
              </span>
            </Link>
            <div className="flex items-center gap-4">
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                   {totalItems > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                      {totalItems}
                    </Badge>
                  )}
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline">Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Search Section */}
      <section className="bg-gradient-primary py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-6 text-center">
            Discover Quality Products
          </h1>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg bg-card"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-6 py-12">
        <ProductGrid searchQuery={searchQuery} />
      </section>
    </div>
  );
};

export default Marketplace;
