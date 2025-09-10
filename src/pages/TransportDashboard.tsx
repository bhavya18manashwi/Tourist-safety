import { useState } from "react";
import { Truck, Shield, CheckCircle, AlertCircle, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const TransportDashboard = () => {
  const vehicles = [
    { id: "AS01AB1234", type: "Tourist Bus", route: "Guwahati-Shillong", status: "Active", passengers: 45, permit: "Valid" },
    { id: "ML05CD5678", type: "Taxi", route: "Shillong City", status: "Active", passengers: 3, permit: "Valid" },
    { id: "MN07EF9012", type: "SUV", route: "Imphal-Moreh", status: "Maintenance", passengers: 0, permit: "Expired" },
    { id: "NL02GH3456", type: "Van", route: "Kohima-Dimapur", status: "Active", passengers: 8, permit: "Valid" }
  ];

  return (
    <div className="min-h-screen bg-background pattern-tribal">
      <header className="bg-accent/10 backdrop-blur-sm border-b border-accent/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Truck className="h-8 w-8 text-accent" />
            <div>
              <h1 className="text-xl font-bold text-accent">Transport Control Center</h1>
              <p className="text-sm text-muted-foreground">Vehicle & Permit Management</p>
            </div>
          </div>
          <Button variant="outline" asChild>
            <a href="/login">Logout</a>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Truck className="h-6 w-6 text-accent" />
                <span>Active Vehicles</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {vehicles.map((vehicle, index) => (
                <div key={index} className="p-4 border border-border/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="font-mono">{vehicle.id}</Badge>
                    <Badge className={vehicle.status === 'Active' ? 'bg-primary/20 text-primary' : 'bg-accent/20 text-accent'}>
                      {vehicle.status}
                    </Badge>
                  </div>
                  <h4 className="font-medium">{vehicle.type}</h4>
                  <p className="text-sm text-muted-foreground">{vehicle.route}</p>
                  <div className="flex items-center space-x-4 mt-2 text-sm">
                    <span>Passengers: {vehicle.passengers}</span>
                    <Badge className={vehicle.permit === 'Valid' ? 'bg-primary/20 text-primary' : 'bg-destructive/20 text-destructive'}>
                      {vehicle.permit}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          
          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle>System Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="text-2xl font-bold text-primary">156</div>
                  <div className="text-sm text-muted-foreground">Active Vehicles</div>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <div className="text-2xl font-bold text-accent">98%</div>
                  <div className="text-sm text-muted-foreground">Compliance Rate</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TransportDashboard;