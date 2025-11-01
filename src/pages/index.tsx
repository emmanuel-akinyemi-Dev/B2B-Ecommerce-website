import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BarChart3, Package, ShoppingCart, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                TradeHub
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Button className="bg-gradient-primary">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            The B2B Marketplace That Scales With You
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with verified buyers, manage your inventory, and grow your business
            with powerful analytics and seamless order management.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="bg-gradient-primary text-lg px-8">
                Start Selling <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Everything You Need to Succeed
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 shadow-card hover:shadow-elevated transition-shadow">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Product Management</h3>
            <p className="text-muted-foreground">
              Easily manage your catalog with bulk uploads, variants, and inventory tracking.
            </p>
          </Card>

          <Card className="p-6 shadow-card hover:shadow-elevated transition-shadow">
            <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-muted-foreground">
              Track sales, revenue, and customer behavior with detailed insights.
            </p>
          </Card>

          <Card className="p-6 shadow-card hover:shadow-elevated transition-shadow">
            <div className="bg-success/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <ShoppingCart className="h-6 w-6 text-success" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Order Management</h3>
            <p className="text-muted-foreground">
              Process orders efficiently with automated workflows and notifications.
            </p>
          </Card>

          <Card className="p-6 shadow-card hover:shadow-elevated transition-shadow">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Verified Buyers</h3>
            <p className="text-muted-foreground">
              Connect with pre-qualified business buyers ready to purchase at scale.
            </p>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card py-20 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground text-lg">Active Sellers</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-accent mb-2">$2.5B+</div>
              <p className="text-muted-foreground text-lg">Annual GMV</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-success mb-2">98%</div>
              <p className="text-muted-foreground text-lg">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-primary rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Scale Your Business?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of sellers growing their B2B business on TradeHub.
            Get started in minutes with no setup fees.
          </p>
          <Link to="/dashboard">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/50">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2025 TradeHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
