import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ReviewsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 FlashSpace. All rights reserved.</p>
            <p className="mt-2 text-sm">Professional Virtual Office Solutions Across India</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
