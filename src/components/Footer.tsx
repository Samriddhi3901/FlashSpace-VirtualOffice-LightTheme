import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div>
              <img 
                src="/lovable-uploads/21dc5cb1-4299-40e8-8123-27772eb57a10.png" 
                alt="FlashSpace Logo" 
                className="h-8 w-auto mb-6"
              />
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Professional virtual office solutions across India. Establish your business presence 
                with our premium addresses and comprehensive services.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                  "Virtual Office Spaces",
                  "Business Address",
                  "Mail Forwarding",
                  "Meeting Rooms",
                  "Live Receptionist",
                  "GST Registration"
                ].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Company</h3>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Our Locations",
                  "Testimonials",
                  "Blog",
                  "Careers",
                  "Partner with Us"
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">+91 98765 43210</p>
                    <p className="text-muted-foreground text-sm">Mon-Sat 9AM-7PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">info@flashspace.co</p>
                    <p className="text-muted-foreground text-sm">24/7 Support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-foreground font-medium">Mumbai • Delhi • Bangalore • Pune</p>
                    <p className="text-muted-foreground text-sm">Premium locations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                &copy; 2024 FlashSpace. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Professional Virtual Office Solutions Across India
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Refund Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Careers
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};