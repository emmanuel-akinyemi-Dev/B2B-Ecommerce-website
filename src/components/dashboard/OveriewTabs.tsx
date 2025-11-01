import { Card } from "@/components/ui/card";
import { ArrowDown, ArrowUp, DollarSign, Package, ShoppingCart, TrendingUp } from "lucide-react";

const stats = [
  {
    name: "Total Revenue",
    value: "$124,350",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    name: "Orders",
    value: "1,245",
    change: "+8.2%",
    trend: "up",
    icon: ShoppingCart,
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    name: "Products",
    value: "342",
    change: "+3",
    trend: "up",
    icon: Package,
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    name: "Conversion Rate",
    value: "3.4%",
    change: "-0.5%",
    trend: "down",
    icon: TrendingUp,
    color: "text-destructive",
    bgColor: "bg-destructive/10"
  },
];

const recentOrders = [
  { id: "#ORD-001", customer: "Acme Corp", amount: "$2,450", status: "Completed" },
  { id: "#ORD-002", customer: "Tech Industries", amount: "$1,890", status: "Processing" },
  { id: "#ORD-003", customer: "Global Solutions", amount: "$3,200", status: "Completed" },
  { id: "#ORD-004", customer: "Innovation Ltd", amount: "$980", status: "Pending" },
];

export const OverviewTab = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your store today.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
              <div className="flex items-center gap-1 text-sm">
                {stat.trend === "up" ? (
                  <ArrowUp className="h-4 w-4 text-success" />
                ) : (
                  <ArrowDown className="h-4 w-4 text-destructive" />
                )}
                <span className={stat.trend === "up" ? "text-success" : "text-destructive"}>
                  {stat.change}
                </span>
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.name}</p>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6 shadow-card">
        <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
        <div className="space-y-3">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <p className="font-medium">{order.id}</p>
                <p className="text-sm text-muted-foreground">{order.customer}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{order.amount}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  order.status === "Completed" 
                    ? "bg-success/10 text-success" 
                    : order.status === "Processing"
                    ? "bg-primary/10 text-primary"
                    : "bg-muted-foreground/10 text-muted-foreground"
                }`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
