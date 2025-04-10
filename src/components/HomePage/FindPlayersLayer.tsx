
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, Search, Filter, Users, Calendar, 
  ChevronRight, Trophy, Star 
} from "lucide-react";
import { BatIcon, TeamIcon } from "@/assets/cricketIcons";

const FindPlayersLayer: React.FC = () => {
  return (
    <div className="homepage-layer border-cricket-green/20">
      <div className="layer-header cricket-gradient-green">
        <div className="flex items-center gap-2">
          <TeamIcon className="h-6 w-6" />
          <h2 className="text-lg font-bold">Find Players, Make Groups & Play</h2>
        </div>
      </div>
      <div className="layer-content">
        {/* Smart Search Bar */}
        <div className="relative mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Search className="h-4 w-4 text-cricket-green" />
            <h3 className="font-medium text-cricket-green">Smart Search</h3>
          </div>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Location, skill, or name" 
                className="pl-9 bg-muted" 
              />
            </div>
            <Button className="bg-cricket-green hover:bg-cricket-lightGreen">
              <Search className="h-4 w-4 mr-2" /> Search
            </Button>
            <Button variant="outline" className="border-cricket-green text-cricket-green">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Suggested Players */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-cricket-green" />
              <h3 className="font-medium text-cricket-green">Suggested Players</h3>
            </div>
            <Button variant="link" className="text-cricket-green p-0">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { 
                name: "Rohit S.", 
                location: "Andheri, Mumbai", 
                skill: "Batsman", 
                availability: "Weekends", 
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              { 
                name: "Virat K.", 
                location: "Bandra, Mumbai", 
                skill: "All-rounder", 
                availability: "Evenings", 
                image: "https://randomuser.me/api/portraits/men/68.jpg"
              },
              { 
                name: "Jasprit B.", 
                location: "Juhu, Mumbai", 
                skill: "Fast Bowler", 
                availability: "Morning", 
                image: "https://randomuser.me/api/portraits/men/45.jpg"
              }
            ].map((player, index) => (
              <Card key={index} className="cricket-card hover:border-cricket-green">
                <CardContent className="p-3">
                  <div className="flex items-center gap-3">
                    <img 
                      src={player.image} 
                      alt={player.name} 
                      className="h-14 w-14 rounded-full object-cover border-2 border-cricket-green"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{player.name}</h4>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {player.location}
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs px-2 py-0.5 bg-cricket-cream text-cricket-green rounded-full">
                          {player.skill}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 inline mr-1" />
                          {player.availability}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Create/Join Groups */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-cricket-green" />
              <h3 className="font-medium text-cricket-green">Groups</h3>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="border-cricket-green text-cricket-green">
                Join
              </Button>
              <Button size="sm" className="bg-cricket-green hover:bg-cricket-lightGreen">
                + Create
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { 
                name: "Office Premier League", 
                members: 16, 
                location: "Powai", 
                type: "Office Friends", 
                image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              },
              { 
                name: "Sunday Morning Club", 
                members: 22, 
                location: "Dadar", 
                type: "Local Club", 
                image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
            ].map((group, index) => (
              <Card key={index} className="cricket-card hover:border-cricket-green overflow-hidden">
                <div className="h-24 bg-cover bg-center" style={{ 
                  backgroundImage: `url(${group.image})`, 
                  backgroundSize: 'cover' 
                }}></div>
                <CardContent className="p-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">{group.name}</h4>
                    <span className="text-xs bg-cricket-cream text-cricket-green px-2 py-0.5 rounded-full">
                      {group.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1 text-sm">
                    <span className="text-muted-foreground">
                      <Users className="h-3 w-3 inline mr-1" />
                      {group.members} members
                    </span>
                    <span className="text-muted-foreground">
                      <MapPin className="h-3 w-3 inline mr-1" />
                      {group.location}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Match Scheduling */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="h-4 w-4 text-cricket-green" />
            <h3 className="font-medium text-cricket-green">Schedule a Match</h3>
          </div>
          
          <Card className="cricket-card border-dashed border-cricket-green/40">
            <CardContent className="p-4">
              <div className="text-center">
                <BatIcon className="w-10 h-10 text-cricket-green mx-auto mb-2" />
                <h4 className="text-lg font-medium mb-2">3-Step Match Wizard</h4>
                <p className="text-sm text-muted-foreground mb-4">Quickly set up a match with your group</p>
                <div className="flex justify-center">
                  <Button className="bg-cricket-green hover:bg-cricket-lightGreen">
                    Start Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FindPlayersLayer;
