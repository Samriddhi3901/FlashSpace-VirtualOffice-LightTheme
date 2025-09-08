import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { ServicesSection } from "@/components/ServicesSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Complete Virtual Office Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional services designed to establish your business presence anywhere in India. 
              From virtual addresses to live receptionist services, we have everything you need.
            </p>
          </div>
        </div>
      </section>

      <ServicesSection />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose from our comprehensive range of virtual office services and establish your professional presence today.
          </p>
          <Button className="bg-accent-gradient hover:opacity-90 text-lg px-8 py-6 h-auto">
            Get Started with Our Services
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Solutions;