
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, Star, ChevronRight, ChevronLeft, 
  Calendar, Clock, Tag, Umbrella
} from "lucide-react";
import { PitchIcon } from "@/assets/cricketIcons";

const BookTurfLayer: React.FC = () => {
  return (
    <div className="homepage-layer border-cricket-green/20">
      <div className="layer-header cricket-gradient-green">
        <div className="flex items-center gap-2">
          <PitchIcon className="h-6 w-6" />
          <h2 className="text-lg font-bold">Book Turf Instantly</h2>
        </div>
      </div>
      <div className="layer-content">
        {/* Quick Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
          <Button variant="outline" className="rounded-full border-cricket-green text-cricket-green whitespace-nowrap">
            <Umbrella className="h-4 w-4 mr-1" /> Indoor
          </Button>
          <Button variant="outline" className="rounded-full border-cricket-green text-cricket-green whitespace-nowrap">
            <Tag className="h-4 w-4 mr-1" /> Under ₹500
          </Button>
          <Button variant="outline" className="rounded-full border-cricket-green text-cricket-green whitespace-nowrap">
            <Clock className="h-4 w-4 mr-1" /> Available Today
          </Button>
          <Button variant="outline" className="rounded-full border-cricket-green text-cricket-green whitespace-nowrap">
            Top Rated
          </Button>
          <Button variant="outline" className="rounded-full border-cricket-green text-cricket-green whitespace-nowrap">
            Near Me
          </Button>
        </div>

        {/* Nearby Turfs Carousel */}
        <div className="mb-6 relative">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cricket-green" />
              <h3 className="font-medium text-cricket-green">Nearby Turfs</h3>
            </div>
            <div className="flex gap-2">
              <Button size="icon" variant="outline" className="h-8 w-8 rounded-full">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="h-8 w-8 rounded-full">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                name: "Green Park Cricket Ground",
                location: "Powai, Mumbai",
                price: "₹1200/hr",
                rating: 4.8,
                image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                distance: "1.2 km",
                indoor: true
              },
              {
                name: "Stadium Cricket Club",
                location: "Andheri, Mumbai",
                price: "₹800/hr",
                rating: 4.5,
                image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                distance: "2.5 km",
                indoor: false
              },
              {
                name: "Victory Cricket Turf",
                location: "Bandra, Mumbai",
                price: "₹950/hr",
                rating: 4.3,
                image: "https://images.unsplash.com/photo-1589801258579-18e091f4ca26?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                distance: "3.1 km",
                indoor: false
              }
            ].map((turf, index) => (
              <Card key={index} className="cricket-card hover:border-cricket-green overflow-hidden">
                <div className="h-36 bg-cover bg-center relative" style={{ 
                  backgroundImage: `url(${turf.image})`, 
                  backgroundSize: 'cover' 
                }}>
                  {turf.indoor && (
                    <Badge className="absolute top-2 left-2 bg-cricket-green">
                      Indoor
                    </Badge>
                  )}
                  <Badge className="absolute top-2 right-2 bg-white text-cricket-green">
                    {turf.distance}
                  </Badge>
                </div>
                <CardContent className="p-3">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-medium line-clamp-1">{turf.name}</h4>
                    <div className="flex items-center text-amber-500">
                      <Star className="fill-amber-500 h-4 w-4" />
                      <span className="text-sm ml-1">{turf.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-3 w-3 mr-1" />
                    {turf.location}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-cricket-green">
                      {turf.price}
                    </span>
                    <Button size="sm" className="bg-cricket-green hover:bg-cricket-lightGreen text-xs h-8">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ongoing Deals */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="h-4 w-4 text-cricket-green" />
            <h3 className="font-medium text-cricket-green">Ongoing Deals</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Weekend Special: 20% OFF",
                turf: "Green Park Cricket Ground",
                validTill: "This weekend",
                code: "WEEKEND20"
              },
              {
                title: "Early Bird: ₹200 OFF",
                turf: "Stadium Cricket Club",
                validTill: "Morning slots only",
                code: "EARLY200"
              }
            ].map((deal, index) => (
              <Card key={index} className="cricket-card bg-cricket-cream dark:bg-cricket-green/10">
                <CardContent className="p-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-cricket-green">{deal.title}</h4>
                      <p className="text-sm">{deal.turf}</p>
                      <p className="text-xs text-muted-foreground">Valid: {deal.validTill}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Use code:</p>
                      <span className="bg-white dark:bg-cricket-green/20 px-2 py-1 rounded border border-cricket-green/20 text-sm font-mono">
                        {deal.code}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Smart Recommendations */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="h-4 w-4 text-cricket-green" />
            <h3 className="font-medium text-cricket-green">Smart Recommendations</h3>
          </div>
          
          <Card className="cricket-card border-cricket-green/30 bg-cricket-cream/50 dark:bg-cricket-green/10">
            <CardContent className="p-4">
              <p className="font-medium mb-2">Perfect for this weekend</p>
              <p className="text-sm text-muted-foreground mb-3">
                Based on your previous bookings and weather forecast (expected sunny, 28°C)
              </p>
              <div className="flex items-start gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1589801258579-18e091f4ca26?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                  alt="Stadium Cricket Club" 
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-medium">Stadium Cricket Club</h4>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" />
                    Andheri, Mumbai (2.5 km away)
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-cricket-green font-medium">₹800/hr</span>
                    <Button size="sm" className="bg-cricket-green hover:bg-cricket-lightGreen">
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookTurfLayer;
