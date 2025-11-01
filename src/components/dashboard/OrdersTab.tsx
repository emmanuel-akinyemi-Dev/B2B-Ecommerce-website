import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Download } from "lucide-react";

const orders = [
  {
    id: "#ORD-001",
    customer: "Acme Corporation",
    date: "Jan 15, 2025",
    items: 5,
    total: "$2,450.00",
    status: "completed"
  },
  {
    id: "#ORD-002",
    customer: "Tech Industries Ltd",
    date: "Jan 14, 2025",
    items: 3,
    total: "$1,890.00",
    status: "processing"
  },
  {
    id: "#ORD-003",
    customer: "Global Solutions Inc",
    date: "Jan 14, 2025",
    items: 8,
    total: "$3,200.00",
    status: "completed"
  },
  {
    id: "#ORD-004",
    customer: "Innovation Partners",
    date: "Jan 13, 2025",
    items: 2,
    total: "$980.00",
    status: "pending"
  },
  {
    id: "#ORD-005",
    customer: "BuildTech Co",
    date: "Jan 13, 2025",
    items: 12,
    total: "$5,450.00",
    status: "processing"
  },
  {
    id: "#ORD-006",
    customer: "Prime Materials",
    date: "Jan 12, 2025",
    items: 4,
    total: "$1,670.00",
    status: "shipped"
  },
];

export const OrdersTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Orders</h1>
          <p className="text-muted-foreground">
            Track and manage all customer orders
          </p>
        </div>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Orders
        </Button>
      </div>

      <Card className="shadow-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left p-4 font-semibold">Order ID</th>
                <th className="text-left p-4 font-semibold">Customer</th>
                <th className="text-left p-4 font-semibold">Date</th>
                <th className="text-left p-4 font-semibold">Items</th>
                <th className="text-left p-4 font-semibold">Total</th>
                <th className="text-left p-4 font-semibold">Status</th>
                <th className="text-right p-4 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-border last:border-0 hover:bg-muted/50">
                  <td className="p-4 font-medium">{order.id}</td>
                  <td className="p-4">{order.customer}</td>
                  <td className="p-4 text-muted-foreground">{order.date}</td>
                  <td className="p-4 text-muted-foreground">{order.items}</td>
                  <td className="p-4 font-semibold">{order.total}</td>
                  <td className="p-4">
                    <Badge variant={
                      order.status === "completed" 
                        ? "default"
                        : order.status === "processing" || order.status === "shipped"
                        ? "secondary"
                        : "outline"
                    } className={
                      order.status === "completed"
                        ? "bg-success/10 text-success hover:bg-success/20"
                        : order.status === "processing"
                        ? "bg-primary/10 text-primary hover:bg-primary/20"
                        : order.status === "shipped"
                        ? "bg-accent/10 text-accent hover:bg-accent/20"
                        : ""
                    }>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
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
