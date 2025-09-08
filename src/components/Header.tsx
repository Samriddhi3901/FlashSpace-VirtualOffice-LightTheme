import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
         <Link to="/" className="flex-shrink-0">
  <div className="flex items-center hover:opacity-80 transition-opacity">
    <span className="text-2xl font-bold text-white mr-1">FLASH</span>
    <span className="text-yellow-400 text-2xl">⚡</span>
    <span className="text-2xl font-light italic text-white ml-1">Space</span>
  </div>
</Link>

          {/* Theme Toggle and CTA */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-accent-gradient hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
