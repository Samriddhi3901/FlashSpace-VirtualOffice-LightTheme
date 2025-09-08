import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const cities = [
  { id: "mumbai", name: "Mumbai", locations: ["Andheri", "Bandra", "Lower Parel", "BKC"] },
  { id: "delhi", name: "Delhi", locations: ["Connaught Place", "Gurgaon", "Noida", "Saket"] },
  { id: "bangalore", name: "Bangalore", locations: ["Koramangala", "Whitefield", "Electronic City", "Indiranagar"] },
  { id: "pune", name: "Pune", locations: ["Hinjewadi", "Baner", "Kharadi", "Viman Nagar"] },
];

export const Header = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const currentCity = cities.find(city => city.id === selectedCity);

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/21dc5cb1-4299-40e8-8123-27772eb57a10.png" 
              alt="FlashSpace Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* City and Location Selection */}
          <div className="flex items-center space-x-4">
            {/* City Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="min-w-[120px] justify-between">
                  {selectedCity ? cities.find(c => c.id === selectedCity)?.name : "Select City"}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[120px]">
                {cities.map((city) => (
                  <DropdownMenuItem 
                    key={city.id}
                    onClick={() => {
                      setSelectedCity(city.id);
                      setSelectedLocation(""); // Reset location when city changes
                    }}
                  >
                    {city.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Location Dropdown */}
            {currentCity && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="min-w-[140px] justify-between">
                    {selectedLocation || "Select Location"}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[140px]">
                  {currentCity.locations.map((location) => (
                    <DropdownMenuItem 
                      key={location}
                      onClick={() => setSelectedLocation(location)}
                    >
                      {location}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>

          {/* Contact Button */}
          <Button className="bg-accent-gradient hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};