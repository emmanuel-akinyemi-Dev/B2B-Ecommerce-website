import { useState } from "react";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { OverviewTab } from "@/components/dashboard/OveriewTabs";
import { ProductsTab } from "@/components/dashboard/ProductsTab";
import { OrdersTab } from "@/components/dashboard/OrdersTab";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="lg:pl-64">
        <DashboardHeader />
        
        <main className="p-6">
          {activeTab === "overview" && <OverviewTab />}
          {activeTab === "products" && <ProductsTab />}
          {activeTab === "orders" && <OrdersTab />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
