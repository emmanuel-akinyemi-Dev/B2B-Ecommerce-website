import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  searchQuery: string;
}

export const ProductGrid = ({ searchQuery }: ProductGridProps) => {
  // Mock product data - will be replaced with real data later
  const products = [
    {
      id: 1,
      name: "Professional Office Chair",
      description: "Ergonomic design with lumbar support for all-day comfort",
      price: 299.99,
      image: "/placeholder.svg",
      category: "Furniture",
      stock: 45,
    },
    {
      id: 2,
      name: "Wireless Mouse",
      description: "High-precision optical sensor with ergonomic design",
      price: 49.99,
      image: "/placeholder.svg",
      category: "Electronics",
      stock: 120,
    },
    {
      id: 3,
      name: "Standing Desk",
      description: "Adjustable height desk for improved productivity",
      price: 599.99,
      image: "/placeholder.svg",
      category: "Furniture",
      stock: 28,
    },
    {
      id: 4,
      name: "USB-C Hub",
      description: "7-in-1 adapter with HDMI, USB 3.0, and card readers",
      price: 79.99,
      image: "/placeholder.svg",
      category: "Electronics",
      stock: 85,
    },
    {
      id: 5,
      name: "Desk Lamp",
      description: "LED lamp with adjustable brightness and color temperature",
      price: 89.99,
      image: "/placeholder.svg",
      category: "Lighting",
      stock: 62,
    },
    {
      id: 6,
      name: "Monitor Stand",
      description: "Bamboo monitor riser with storage compartment",
      price: 39.99,
      image: "/placeholder.svg",
      category: "Furniture",
      stock: 95,
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">
          {searchQuery ? `Results for "${searchQuery}"` : "All Products"}
        </h2>
        <p className="text-muted-foreground">
          {filteredProducts.length} products found
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No products found</p>
        </div>
      )}
    </div>
  );
};
