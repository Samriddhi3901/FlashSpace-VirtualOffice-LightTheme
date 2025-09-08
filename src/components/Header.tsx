import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
     <Link to="/" className="flex-shrink-0 hover:opacity-80 transition-opacity">
  <div className="flex items-center">
    <span className="text-2xl font-black text-black bg-white px-3 py-1 rounded shadow-sm tracking-tight">FLASH</span>
    <div className="w-8 h-6 bg-yellow-400 mx-1 transform rotate-12" 
         style={{
           clipPath: 'polygon(20% 0%, 60% 0%, 40% 50%, 80% 50%, 40% 100%, 0% 100%, 20% 50%, 0% 50%)'
         }}>
    </div>
    <span className="text-2xl italic text-black dark:text-white font-light" style={{fontFamily: 'Brush Script MT, cursive'}}>Space</span>
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
