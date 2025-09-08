import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const cities = [
  { 
    id: "mumbai", 
    name: "Mumbai", 
    locations: [
      { name: "Andheri East", address: "Business Complex, Andheri East", premium: true },
      { name: "Bandra Kurla Complex", address: "BKC, Financial District", premium: true },
      { name: "Lower Parel", address: "Phoenix Mills Compound", premium: false },
      { name: "Powai", address: "Hiranandani Business Park", premium: false }
    ]
  },
  { 
    id: "delhi", 
    name: "Delhi", 
    locations: [
      { name: "Connaught Place", address: "CP Inner Circle", premium: true },
      { name: "Gurgaon Cyber City", address: "DLF Cyber City", premium: true },
      { name: "Noida Sector 62", address: "IT Park, Sector 62", premium: false },
      { name: "Saket", address: "Select City Walk", premium: false }
    ]
  },
  { 
    id: "bangalore", 
    name: "Bangalore", 
    locations: [
      { name: "Koramangala", address: "Forum Mall Area", premium: true },
      { name: "Whitefield", address: "IT Corridor", premium: false },
      { name: "Electronic City", address: "Phase 1", premium: false },
      { name: "Indiranagar", address: "100 Feet Road", premium: true }
    ]
  },
  { 
    id: "pune", 
    name: "Pune", 
    locations: [
      { name: "Hinjewadi", address: "IT Park Phase 2", premium: false },
      { name: "Baner", address: "Business District", premium: true },
      { name: "Kharadi", address: "EON IT Park", premium: false },
      { name: "Viman Nagar", address: "Business Center", premium: true }
    ]
  }
];

export const LocationSelector = () => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");

  const currentCity = cities.find(city => city.id === selectedCity);
  const currentLocation = currentCity?.locations.find(loc => loc.name === selectedLocation);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your Perfect Location
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Select from our premium business addresses across major cities in India. 
            Each location offers professional facilities and strategic advantages.
          </p>
          
          {/* City and Location Dropdowns */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="min-w-[200px] justify-between bg-background/60 backdrop-blur-md">
                  {selectedCity ? cities.find(c => c.id === selectedCity)?.name : "Select City"}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[200px] bg-background/95 backdrop-blur-md">
                {cities.map((city) => (
                  <DropdownMenuItem 
                    key={city.id}
                    onClick={() => {
                      setSelectedCity(city.id);
                      setSelectedLocation("");
                    }}
                  >
                    {city.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {currentCity && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="min-w-[250px] justify-between bg-background/60 backdrop-blur-md">
                    {selectedLocation || "Select Location"}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[250px] bg-background/95 backdrop-blur-md">
                  {currentCity.locations.map((location) => (
                    <DropdownMenuItem 
                      key={location.name}
                      onClick={() => setSelectedLocation(location.name)}
                      className="flex items-center justify-between"
                    >
                      <span>{location.name}</span>
                      {location.premium && (
                        <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Premium</span>
                      )}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>

        {/* Location Details */}
        {currentLocation && (
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card/80 backdrop-blur-md border-border/50 hover:shadow-large transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{currentLocation.name}</h3>
                      {currentLocation.premium && (
                        <span className="text-xs bg-accent-gradient text-accent-foreground px-3 py-1 rounded-full font-medium">
                          Premium Location
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4">{currentLocation.address}</p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button className="bg-accent-gradient hover:opacity-90">
                        Get Started Here
                      </Button>
                      <Button variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* All Locations Grid */}
        {!selectedCity && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {cities.map((city) => (
              <Card key={city.id} className="hover:shadow-large transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{city.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {city.locations.length} locations available
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedCity(city.id)}
                    className="w-full"
                  >
                    Explore {city.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};