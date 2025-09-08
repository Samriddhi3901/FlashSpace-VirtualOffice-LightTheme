import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { ReviewsSection } from "@/components/ReviewsSection";
import { Footer } from "@/components/Footer";

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Discover how FlashSpace has helped thousands of businesses establish their professional presence 
              with our virtual office solutions.
            </p>
          </div>
        </div>
      </section>

      <ReviewsSection />
      <Footer />
    </div>
  );
};

export default Testimonials;