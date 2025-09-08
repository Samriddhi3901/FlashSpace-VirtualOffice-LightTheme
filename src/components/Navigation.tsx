import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Solutions & Services", href: "/solutions" },
  { name: "Plans & Enterprise", href: "/plans" },
  { name: "Locations & Contact", href: "/locations" },
  { name: "Testimonials", href: "/testimonials" },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-14">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} to={item.href}>
                <Button
                  variant="ghost"
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-primary hover:bg-primary/10 ${
                    location.pathname === item.href
                      ? "text-primary border-b-2 border-primary bg-primary/5"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};