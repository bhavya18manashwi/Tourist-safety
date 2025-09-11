import { useState } from "react";
import { Shield, Eye, EyeOff, User, Car, UserCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-northeast.jpg";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = login(identifier, password, selectedRole);
      
      if (success) {
        toast({
          title: "Login Successful",
          description: "Welcome to the NE Safety System",
        });
        
        // Navigate based on user type
        switch (selectedRole) {
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
        }
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid credentials. Please check your ID and password.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Authentication Error",
        description: "An error occurred during login. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const roleOptions = [
    { id: "tourist", label: "Tourist", icon: Shield, description: "Access your travel dashboard" },
    { id: "police", label: "Police", icon: Shield, description: "Monitor incidents and emergencies" },
    { id: "transport", label: "Transport", icon: Car, description: "Manage transport permits" },
    { id: "superadmin", label: "Superadmin", icon: UserCog, description: "Full system administration" }
  ];

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
              NE Tourist Safety
            </span>
          </div>
          <p className="text-muted-foreground">Secure access to your safety dashboard</p>
        </div>

        {!selectedRole ? (
          <Card className="card-cultural border-0">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl">Select Your Role</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {roleOptions.map((role) => (
                  <Button
                    key={role.id}
                    variant={selectedRole === role.id ? "default" : "outline"}
                    className="h-20 flex flex-col items-center justify-center space-y-2"
                    onClick={() => setSelectedRole(role.id)}
                  >
                    <role.icon className="h-6 w-6" />
                    <span className="text-sm">{role.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="card-cultural border-0">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <User className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold text-primary">
                  {roleOptions.find(r => r.id === selectedRole)?.label} Login
                </span>
              </div>
              <CardDescription>
                {roleOptions.find(r => r.id === selectedRole)?.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                {/* ID Field */}
                <div className="space-y-2">
                  <Label htmlFor="identifier">
                    {selectedRole === "tourist" ? "Blockchain ID" : "ID"}
                  </Label>
                  <Input
                    id="identifier"
                    type={selectedRole === "tourist" ? "number" : "text"}
                    placeholder={selectedRole === "tourist" ? "Enter your blockchain id" : "Enter your ID"}
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className={selectedRole === "tourist" ? "font-mono" : ""}
                    required
                  />
                  {selectedRole === "tourist" && (
                    <p className="text-xs text-muted-foreground">
                      Your unique blockchain identifier for secure access
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">
                    {selectedRole === "tourist" ? "Last 4 digits of Aadhar/Passport" : "Password"}
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder={selectedRole === "tourist" ? "Enter last 4 digits" : "Enter your password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pr-10"
                      maxLength={selectedRole === "tourist" ? 4 : undefined}
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
                  {selectedRole === "tourist" && (
                    <p className="text-xs text-muted-foreground">
                      Enter the last 4 digits of your Aadhar card or Passport number
                    </p>
                  )}
                </div>

                {/* Login Button */}
                <Button 
                  type="submit" 
                  className="w-full btn-cultural text-lg py-3"
                  disabled={!identifier || !password || isLoading}
                >
                  {isLoading ? "Authenticating..." : "Access Dashboard"}
                </Button>

                <Button 
                  type="button"
                  variant="outline" 
                  className="w-full"
                  onClick={() => setSelectedRole("")}
                >
                  ← Change Role
                </Button>
              </form>

              {/* Demo Credentials */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-accent mb-2">Demo Credentials:</p>
                <div className="text-xs text-muted-foreground space-y-1">
                  {selectedRole === "tourist" ? (
                    <p>ID: 12345, Last 4 digits: 1234</p>
                  ) : selectedRole === "police" ? (
                    <p>ID: police001, Password: demo123</p>
                  ) : selectedRole === "transport" ? (
                    <p>ID: transport001, Password: demo123</p>
                  ) : (
                    <p>ID: superadmin, Password: demo123</p>
                  )}
                </div>
              </div>

              <div className="mt-6 text-center">
                <Button variant="link" onClick={() => navigate("/")}>
                  ← Back to Homepage
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Register Option */}
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">Don't have an account?</p>
          <Button variant="link" onClick={() => navigate("/register")}>
            Register Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;