import { useState } from "react";
import { Shield, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-northeast.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState("");
  const [blockchainId, setBlockchainId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple demo routing based on user type
    switch (userType) {
      case "tourist":
        navigate("/dashboard");
        break;
      case "police":
        navigate("/police");
        break;
      case "transport":
        navigate("/transport");
        break;
      case "superadmin":
        navigate("/superadmin");
        break;
      default:
        alert("Please select a user type");
    }
  };

  return (
    <div className="min-h-screen bg-background pattern-mountain flex items-center justify-center p-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="North East India" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-10 w-10 text-primary" />
            <span className="text-2xl font-bold bg-gradient-cultural bg-clip-text text-transparent">
              NE Safety System
            </span>
          </div>
          <Badge variant="secondary" className="px-4 py-2">
            Secure Blockchain Authentication
          </Badge>
        </div>

        <Card className="card-cultural border-0">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl">Secure Login</CardTitle>
            <CardDescription>
              Enter your Blockchain ID and authentication credentials
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              {/* User Type Selection */}
              <div className="space-y-2">
                <Label htmlFor="userType">User Type</Label>
                <Select value={userType} onValueChange={setUserType} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tourist">Tourist</SelectItem>
                    <SelectItem value="police">Police Officer</SelectItem>
                    <SelectItem value="transport">Transport Authority</SelectItem>
                    <SelectItem value="superadmin">System Administrator</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Blockchain ID */}
              <div className="space-y-2">
                <Label htmlFor="blockchainId">Blockchain Safety ID</Label>
                <Input
                  id="blockchainId"
                  type="text"
                  placeholder="Enter your blockchain ID (e.g., BLK-NE-XXXX)"
                  value={blockchainId}
                  onChange={(e) => setBlockchainId(e.target.value)}
                  className="font-mono"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Your unique blockchain identifier for secure access
                </p>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Last 4 digits of Aadhar/Passport"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10"
                    maxLength={4}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Use the last 4 digits of your Aadhar Card or Passport
                </p>
              </div>

              {/* Security Info */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <Shield className="h-5 w-5 text-primary mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-primary mb-1">Blockchain Security</p>
                    <p className="text-muted-foreground">
                      Your login is secured by blockchain technology with end-to-end encryption
                    </p>
                  </div>
                </div>
              </div>

              {/* Login Button */}
              <Button 
                type="submit" 
                className="w-full btn-cultural text-lg py-6"
                disabled={!userType || !blockchainId || !password}
              >
                Secure Login
              </Button>

              {/* Demo Credentials */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-accent mb-2">Demo Credentials:</p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• Tourist: BLK-NE-TOUR-001, Password: 1234</p>
                  <p>• Police: BLK-NE-POLI-001, Password: 5678</p>
                  <p>• Transport: BLK-NE-TRAN-001, Password: 9012</p>
                  <p>• Admin: BLK-NE-ADMN-001, Password: 3456</p>
                </div>
              </div>
            </form>

            <div className="mt-6 text-center">
              <Button variant="link" asChild>
                <a href="/">← Back to Homepage</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Cultural Elements */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Proudly serving North East India's cultural heritage and tourist safety
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;