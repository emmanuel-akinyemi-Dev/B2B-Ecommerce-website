import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  const [role, setRole] = useState<"buyer" | "seller">("buyer");

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <ShoppingCart className="h-10 w-10 text-primary" />
          <span className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            TradeHub
          </span>
        </Link>

        <Card className="p-8">
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="signin" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signin-email">Email</Label>
                <Input id="signin-email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signin-password">Password</Label>
                <Input id="signin-password" type="password" placeholder="••••••••" />
              </div>
              <Button className="w-full bg-gradient-primary">Sign In</Button>
            </TabsContent>

            <TabsContent value="signup" className="space-y-4">
              {/* Role Selection */}
              <div className="space-y-2">
                <Label>I want to</Label>
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="button"
                    variant={role === "buyer" ? "default" : "outline"}
                    onClick={() => setRole("buyer")}
                    className={role === "buyer" ? "bg-gradient-primary" : ""}
                  >
                    Buy Products
                  </Button>
                  <Button
                    type="button"
                    variant={role === "seller" ? "default" : "outline"}
                    onClick={() => setRole("seller")}
                    className={role === "seller" ? "bg-gradient-primary" : ""}
                  >
                    Sell Products
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-name">Full Name</Label>
                <Input id="signup-name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input id="signup-email" type="email" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input id="signup-password" type="password" placeholder="••••••••" />
              </div>
              <Button className="w-full bg-gradient-primary">
                Sign Up as {role === "buyer" ? "Buyer" : "Seller"}
              </Button>
            </TabsContent>
          </Tabs>
        </Card>

        <p className="text-center text-muted-foreground mt-6">
          <Link to="/" className="hover:text-primary">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Auth;
