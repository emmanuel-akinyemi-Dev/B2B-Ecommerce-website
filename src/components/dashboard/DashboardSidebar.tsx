import { BarChart3, Home, Package, Settings, ShoppingCart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navigation = [
  { name: "Overview", icon: Home, id: "overview" },
  { name: "Products", icon: Package, id: "products" },
  { name: "Orders", icon: ShoppingCart, id: "orders" },
  { name: "Analytics", icon: BarChart3, id: "analytics" },
  { name: "Customers", icon: Users, id: "customers" },
  { name: "Settings", icon: Settings, id: "settings" },
];

export const DashboardSidebar = ({ activeTab, setActiveTab }: DashboardSidebarProps) => {
  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-sidebar border-r border-sidebar-border z-50">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-sidebar-border">
          <Link to="/" className="flex items-center gap-2">
            <ShoppingCart className="h-8 w-8 text-sidebar-primary" />
            <span className="text-xl font-bold text-sidebar-foreground">
              TradeHub
            </span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-1">
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                activeTab === item.id
                  ? "bg-sidebar-accent text-sidebar-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>
        
        <div className="p-4 border-t border-sidebar-border">
          <div className="bg-sidebar-accent rounded-lg p-4">
            <p className="text-sm font-medium text-sidebar-foreground mb-1">
              Upgrade to Pro
            </p>
            <p className="text-xs text-sidebar-foreground/70 mb-3">
              Unlock advanced analytics and features
            </p>
            <button className="w-full px-4 py-2 bg-sidebar-primary text-sidebar-primary-foreground rounded-md text-sm font-medium">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};
