import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, MoreVertical, Plus, Trash2 } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Industrial Steel Pipes",
    sku: "ISP-001",
    category: "Materials",
    stock: 450,
    price: "$125.00",
    status: "active"
  },
  {
    id: 2,
    name: "Premium Copper Wire",
    sku: "PCW-002",
    category: "Electronics",
    stock: 1200,
    price: "$89.99",
    status: "active"
  },
  {
    id: 3,
    name: "Aluminum Sheets",
    sku: "ALS-003",
    category: "Materials",
    stock: 25,
    price: "$199.50",
    status: "low"
  },
  {
    id: 4,
    name: "Commercial Fasteners Set",
    sku: "CFS-004",
    category: "Hardware",
    stock: 0,
    price: "$45.00",
    status: "out"
  },
];

export const ProductsTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Products</h1>
          <p className="text-muted-foreground">
            Manage your product catalog and inventory
          </p>
        </div>
        <Button className="bg-gradient-primary">
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </Button>
      </div>

      <Card className="shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left p-4 font-semibold">Product</th>
                <th className="text-left p-4 font-semibold">SKU</th>
                <th className="text-left p-4 font-semibold">Category</th>
                <th className="text-left p-4 font-semibold">Stock</th>
                <th className="text-left p-4 font-semibold">Price</th>
                <th className="text-left p-4 font-semibold">Status</th>
                <th className="text-right p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-border last:border-0">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-gradient-primary" />
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-muted-foreground">{product.sku}</td>
                  <td className="p-4 text-muted-foreground">{product.category}</td>
                  <td className="p-4">
                    <span className={
                      product.status === "out" 
                        ? "text-destructive font-medium"
                        : product.status === "low"
                        ? "text-accent font-medium"
                        : "text-foreground"
                    }>
                      {product.stock}
                    </span>
                  </td>
                  <td className="p-4 font-semibold">{product.price}</td>
                  <td className="p-4">
                    <Badge variant={
                      product.status === "active" 
                        ? "default"
                        : product.status === "low"
                        ? "secondary"
                        : "destructive"
                    }>
                      {product.status === "active" ? "In Stock" : product.status === "low" ? "Low Stock" : "Out of Stock"}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
