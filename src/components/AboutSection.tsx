import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Receipt, FileCheck } from "lucide-react";

const aboutItems = [
  {
    icon: Building,
    title: "Business Address Plan",
    description: "Establish your business presence with a prestigious address in prime commercial locations. Our business address plans provide you with a professional mailing address that enhances your company's credibility and image.",
    benefits: [
      "Prestigious business address",
      "Mail receiving and forwarding",
      "Professional business image",
      "No long-term lease commitments"
    ]
  },
  {
    icon: Receipt,
    title: "GST Registration",
    description: "Simplify your GST registration process with our expert assistance. We handle all the paperwork and compliance requirements, ensuring your business is properly registered and compliant with tax regulations.",
    benefits: [
      "Complete GST registration support",
      "Documentation assistance",
      "Compliance management",
      "Expert guidance throughout"
    ]
  },
  {
    icon: FileCheck,
    title: "Company Registration Plan",
    description: "Start your business journey with our comprehensive company registration services. From choosing the right business structure to completing all legal formalities, we make incorporation simple and hassle-free.",
    benefits: [
      "End-to-end registration process",
      "Legal compliance assistance",
      "Multiple business structure options",
      "Fast processing and approval"
    ]
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            About FlashSpace
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering businesses with flexible, professional, and cost-effective virtual office solutions across India.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <Card 
              key={index} 
              className="bg-card border-border/50 hover:shadow-large transition-all duration-500 hover:scale-105 group relative overflow-hidden"
            >
              {/* Accent gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-gradient" />
              
              <CardHeader className="pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {item.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                  {item.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company overview */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto bg-card-gradient rounded-2xl p-8 shadow-medium">
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Why Choose FlashSpace?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h4 className="font-semibold text-lg mb-3 text-primary">Our Mission</h4>
                <p className="text-muted-foreground">
                  To democratize business presence by providing affordable, flexible, and professional virtual office solutions that enable businesses of all sizes to establish credibility and operate efficiently.
                </p>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg mb-3 text-primary">Our Vision</h4>
                <p className="text-muted-foreground">
                  To be India's leading virtual office provider, empowering entrepreneurs and businesses to focus on growth while we handle their administrative and compliance needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};