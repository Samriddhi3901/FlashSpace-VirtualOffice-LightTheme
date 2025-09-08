import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Reviews", href: "#reviews" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(href.replace("#", ""));
    }
  };

  return (
    <nav className="bg-card border-b border-border sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-14">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.href.replace("#", "")
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};