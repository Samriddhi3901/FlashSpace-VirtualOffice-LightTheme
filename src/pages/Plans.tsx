import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹2,999",
      period: "per month",
      description: "Perfect for startups and small businesses",
      features: [
        "Business Address Registration",
        "Mail Forwarding (5 items/month)",
        "GST Registration Support",
        "Basic Phone Support",
        "Online Dashboard Access"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "₹5,999",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Everything in Basic",
        "Live Receptionist (4 hours/day)",
        "Meeting Room Access (4 hours/month)",
        "Mail Forwarding (20 items/month)",
        "Priority Phone Support",
        "Company Registration Support",
        "Dedicated Account Manager"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large businesses",
      features: [
        "Everything in Premium",
        "24/7 Live Receptionist",
        "Unlimited Meeting Room Access",
        "Unlimited Mail Forwarding",
        "Multiple Business Addresses",
        "Custom Integration Support",
        "Dedicated Support Team",
        "Advanced Reporting & Analytics"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Choose Your Perfect Plan
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Flexible pricing plans designed to grow with your business. From startups to enterprises, 
              we have the right solution for you.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative transition-all duration-300 hover:shadow-large ${
                  plan.popular ? 'border-primary ring-2 ring-primary/20 scale-105' : 'hover:scale-105'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-gradient text-accent-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-accent-gradient hover:opacity-90' 
                        : 'variant-outline hover:bg-accent'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Enterprise Solutions
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Custom virtual office solutions designed for large organizations. Get tailored packages, 
              premium locations, and dedicated support teams.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Custom Office Spaces</h3>
                <p className="text-muted-foreground">Tailored virtual office solutions for your brand</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Dedicated Support</h3>
                <p className="text-muted-foreground">24/7 support team exclusively for your business</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Advanced Analytics</h3>
                <p className="text-muted-foreground">Detailed insights and reporting for your operations</p>
              </div>
            </div>
            <Button className="bg-accent-gradient hover:opacity-90 text-lg px-8 py-6 h-auto">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Plans;