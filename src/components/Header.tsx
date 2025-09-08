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
  <img 
    src="/lovable-uploads/21dc5cb1-4299-40e8-8123-27772eb57a10.png" 
    alt="FlashSpace Logo" 
    className="h-12 w-auto md:h-14 hover:opacity-80 transition-opacity dark:brightness-0 dark:invert"
  />
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
