import { Shield, Users, Database, Settings, BarChart3, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const SuperAdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background pattern-mountain">
      <header className="bg-secondary/10 backdrop-blur-sm border-b border-secondary/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Shield className="h-8 w-8 text-secondary" />
            <div>
              <h1 className="text-xl font-bold text-secondary">System Administration</h1>
              <p className="text-sm text-muted-foreground">Full System Control & Analytics</p>
            </div>
          </div>
          <Button variant="outline" asChild>
            <a href="/login">Logout</a>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>User Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Active Users</span>
                  <Badge>1,247</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Tourists</span>
                  <Badge variant="outline">847</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Police</span>
                  <Badge variant="outline">23</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Database className="h-5 w-5 text-accent" />
                <span>System Health</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Blockchain Status</span>
                  <Badge className="bg-primary/20 text-primary">Healthy</Badge>
                </div>
                <div className="flex justify-between">
                  <span>AI Services</span>
                  <Badge className="bg-primary/20 text-primary">Online</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-cultural border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-secondary" />
                <span>Analytics</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">99.2%</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;