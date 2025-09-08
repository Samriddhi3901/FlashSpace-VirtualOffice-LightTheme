import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    company: "TechStart Solutions",
    rating: 5,
    review: "FlashSpace has been instrumental in establishing our startup's professional presence. The virtual office service is seamless, and the team is incredibly responsive.",
    location: "Mumbai"
  },
  {
    name: "Priya Sharma",
    company: "Digital Marketing Pro",
    rating: 5,
    review: "The GST registration process was so smooth with FlashSpace. They handled everything professionally and kept me informed throughout the process.",
    location: "Delhi"
  },
  {
    name: "Amit Patel",
    company: "Patel Enterprises",
    rating: 5,
    review: "Excellent virtual office services! The business address has given our company the credibility we needed. Highly recommend FlashSpace to any business owner.",
    location: "Bangalore"
  },
  {
    name: "Sneha Reddy",
    company: "Creative Studio",
    rating: 5,
    review: "Outstanding support team and excellent facilities. The meeting rooms are well-equipped and the mail forwarding service is very reliable.",
    location: "Pune"
  },
  {
    name: "Vikash Singh",
    company: "Singh & Associates",
    rating: 5,
    review: "FlashSpace made our company registration process effortless. Their expertise in compliance and documentation is impressive. Great value for money!",
    location: "Gurgaon"
  },
  {
    name: "Kavya Nair",
    company: "Nair Consultancy",
    rating: 5,
    review: "The virtual receptionist service is fantastic. Professional call handling has improved our client interactions significantly. Very satisfied with the service.",
    location: "Kochi"
  }
];

const partners = [
  "Microsoft", "Google", "Amazon", "Zoho", "HDFC Bank", "ICICI Bank", "Razorpay", "Freshworks"
];

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Partners Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Trusted Partners
            </h2>
            <p className="text-muted-foreground">
              We collaborate with industry leaders to provide the best services
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="bg-card px-6 py-3 rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <span className="text-lg font-medium text-muted-foreground">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Customer Reviews
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our clients say about their experience with FlashSpace's virtual office solutions.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="bg-card-gradient border-border/50 hover:shadow-large transition-all duration-500 hover:scale-105 group"
            >
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{review.review}"
                </p>

                {/* Customer Info */}
                <div className="border-t border-border/50 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {review.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{review.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-accent">{review.location}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Cities Covered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};