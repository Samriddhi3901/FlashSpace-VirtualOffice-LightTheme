import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Mail, Users, Phone, FileText, MapPin } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Virtual Office Spaces",
    description: "Professional business addresses in prime locations across India",
    details: "Get a prestigious business address without the overhead costs"
  },
  {
    icon: Mail,
    title: "Mail Forwarding",
    description: "Reliable mail handling and forwarding services",
    details: "Never miss important correspondence with our secure mail management"
  },
  {
    icon: Users,
    title: "Meeting Room Bookings",
    description: "On-demand access to professional meeting spaces",
    details: "Book fully equipped meeting rooms whenever you need them"
  },
  {
    icon: Phone,
    title: "Live Receptionist",
    description: "Professional call handling and customer service",
    details: "Dedicated receptionist to manage your calls professionally"
  },
  {
    icon: FileText,
    title: "Business Registration",
    description: "Complete support for company and GST registration",
    details: "End-to-end assistance with all legal and regulatory requirements"
  },
  {
    icon: MapPin,
    title: "Multiple Locations",
    description: "Choose from premium addresses in major cities",
    details: "Establish presence in Mumbai, Delhi, Bangalore, Pune and more"
  }
];

export const OverviewSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Virtual Office Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to establish and maintain a professional business presence, 
            all in one comprehensive package.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-large transition-all duration-300 hover:scale-105 bg-card/50 backdrop-blur-sm border-border/50"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-3">{service.description}</p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-accent font-medium">{service.details}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};