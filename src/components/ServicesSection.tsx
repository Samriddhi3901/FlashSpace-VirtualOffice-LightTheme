import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Mail, 
  Users, 
  Phone, 
  FileText,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: MapPin,
    title: "Virtual Office Space",
    description: "Get a prestigious business address in prime locations across major cities without the cost of physical office space.",
    features: ["Prime business address", "Mail handling", "Professional reception"]
  },
  {
    icon: Mail,
    title: "Mail Forwarding",
    description: "Never miss important mail. We receive, scan, and forward your business correspondence securely and efficiently.",
    features: ["Secure mail handling", "Digital scanning", "Global forwarding"]
  },
  {
    icon: Users,
    title: "Meeting Room Booking",
    description: "Access fully equipped meeting rooms and conference facilities whenever you need them for client meetings.",
    features: ["Hourly booking", "Modern facilities", "Technical support"]
  },
  {
    icon: Phone,
    title: "Live Receptionist",
    description: "Professional phone answering service with trained receptionists who represent your business professionally.",
    features: ["Call answering", "Message taking", "Call forwarding"]
  },
  {
    icon: FileText,
    title: "Business Registration",
    description: "Complete assistance with company registration, GST registration, and all legal compliance requirements.",
    features: ["Company registration", "GST assistance", "Legal compliance"]
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive virtual office solutions designed to help your business thrive in today's flexible work environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-border/50 hover:shadow-large transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  className="w-full group/btn hover:bg-primary/10"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-accent-gradient hover:opacity-90 px-8 py-4 rounded-full shadow-medium"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};