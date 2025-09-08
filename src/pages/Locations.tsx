import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { LocationSelector } from "@/components/LocationSelector";

const Locations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Our Locations & Contact
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Find the perfect virtual office location for your business across major cities in India. 
              Premium addresses in prime business districts.
            </p>
          </div>
        </div>
      </section>

      <LocationSelector />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Locations;