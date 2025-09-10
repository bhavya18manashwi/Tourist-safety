import { useState } from "react";
import { Shield, AlertTriangle, Map, Users, MessageCircle, Camera, Music, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-northeast.jpg";
import traditionalDance from "@/assets/traditional-dance.jpg";
import northeastNature from "@/assets/northeast-nature.jpg";
import traditionalCrafts from "@/assets/traditional-crafts.jpg";

const HomePage = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const coreFeatures = [
    {
      icon: AlertTriangle,
      title: "SOS Emergency Alerts",
      description: "Instant emergency response system with GPS location tracking and automated notifications to authorities."
    },
    {
      icon: Shield,
      title: "Blockchain Safety ID",
      description: "Secure, immutable digital identity system for tourists with encrypted personal data protection."
    },
    {
      icon: Map,
      title: "Travel Safety Heatmaps",
      description: "Real-time incident mapping and safety zone visualization powered by AI analytics."
    },
    {
      icon: Users,
      title: "Multi-Role Dashboards",
      description: "Specialized interfaces for tourists, police, transport authorities, and system administrators."
    }
  ];

  const culturalAddons = [
    {
      icon: Music,
      title: "Cultural Integration",
      description: "Folk songs, traditional dances, and cultural heritage showcase for authentic experiences."
    },
    {
      icon: Camera,
      title: "Nearby Attractions",
      description: "AI-powered recommendations for cultural sites, natural wonders, and local experiences."
    },
    {
      icon: MessageCircle,
      title: "AI Tourist Assistant",
      description: "Multilingual chatbot providing cultural insights, safety tips, and travel guidance."
    },
    {
      icon: Palette,
      title: "Heritage Preservation",
      description: "Digital documentation of tribal art, handicrafts, and traditional practices."
    }
  ];

  return (
    <div className="min-h-screen bg-background pattern-mountain">
      {/* Header Navigation */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold bg-gradient-cultural bg-clip-text text-transparent">
              NE Tourist Safety System
            </span>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-foreground/70 hover:text-primary transition-colors">Features</a>
            <a href="#culture" className="text-foreground/70 hover:text-primary transition-colors">Culture</a>
            <a href="#dashboards" className="text-foreground/70 hover:text-primary transition-colors">Dashboards</a>
          </nav>
          <Button variant="outline" asChild>
            <a href="/login">Login</a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="North East India Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            AI + Blockchain Powered Safety System
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-cultural bg-clip-text text-transparent">
              Tourist Safety &amp;
            </span>
            <br />
            <span className="text-foreground">Incident Response</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Protecting travelers in North East India with cutting-edge technology while celebrating our rich cultural heritage
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="btn-cultural text-lg px-8 py-4">
              Emergency SOS
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Explore Culture
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {["SOS Alerts", "Blockchain ID", "Cultural Tours", "AI Assistant"].map((feature, index) => (
              <div key={index} className="card-cultural rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">{(index + 1) * 250}+</div>
                <div className="text-sm text-muted-foreground">{feature}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Safety Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced technology ensuring tourist safety across North East India's diverse landscapes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="card-cultural border-0 hover:shadow-cultural transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Heritage Section */}
      <section id="culture" className="py-20 pattern-tribal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Cultural Integration</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Celebrating North East India's rich heritage through technology
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">Rich Cultural Heritage</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {culturalAddons.map((addon, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-accent/20 p-3 rounded-lg">
                      <addon.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{addon.title}</h4>
                      <p className="text-sm text-muted-foreground">{addon.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={traditionalDance} 
                alt="Traditional Dance" 
                className="rounded-xl shadow-elegant"
              />
              <img 
                src={traditionalCrafts} 
                alt="Traditional Crafts" 
                className="rounded-xl shadow-elegant mt-8"
              />
            </div>
          </div>
          
          <div className="card-cultural rounded-2xl p-8 text-center">
            <img 
              src={northeastNature} 
              alt="North East Nature" 
              className="w-full h-48 object-cover rounded-xl mb-6"
            />
            <h3 className="text-2xl font-bold mb-4">Biodiversity & Natural Wonders</h3>
            <p className="text-muted-foreground mb-6">
              Explore the unique flora, fauna, and pristine landscapes of North East India while staying safe with our integrated monitoring system.
            </p>
            <Button variant="outline" className="bg-accent/10 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Discover Nature
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboards Preview */}
      <section id="dashboards" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Role-Based Access Dashboards</h2>
            <p className="text-xl text-muted-foreground">
              Specialized interfaces for different user types
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: "Tourist", description: "SOS, attractions, cultural content", bg: "bg-primary/10", href: "/dashboard" },
              { role: "Police", description: "Incident monitoring, emergency response", bg: "bg-destructive/10", href: "/police" },
              { role: "Transport", description: "Vehicle tracking, permit management", bg: "bg-accent/10", href: "/transport" },
              { role: "Super Admin", description: "Full system control & analytics", bg: "bg-secondary/10", href: "/superadmin" }
            ].map((dashboard, index) => (
              <Card key={index} className={`${dashboard.bg} border-0 hover:shadow-elegant transition-all duration-300 cursor-pointer`}>
                <CardHeader className="text-center">
                  <CardTitle>{dashboard.role} Dashboard</CardTitle>
                  <CardDescription>{dashboard.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button variant="outline" asChild>
                    <a href={dashboard.href}>Access Dashboard</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">NE Tourist Safety System</span>
          </div>
          <p className="text-muted-foreground">
            Protecting tourists while celebrating the rich cultural heritage of North East India
          </p>
        </div>
      </footer>

      {/* AI Chatbot */}
      {chatOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-card border border-border rounded-xl shadow-elegant z-50">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <h3 className="font-semibold">Cultural AI Assistant</h3>
            <Button variant="ghost" size="sm" onClick={() => setChatOpen(false)}>×</Button>
          </div>
          <div className="p-4 text-sm text-muted-foreground">
            Hello! I can help you with cultural information, safety tips, and travel guidance for North East India.
          </div>
        </div>
      )}
      
      <Button
        className="fixed bottom-4 right-4 rounded-full w-12 h-12 shadow-cultural z-40"
        onClick={() => setChatOpen(!chatOpen)}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default HomePage;