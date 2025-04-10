
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, Users, ChevronRight, 
  Trophy, Building, Award, Layers
} from "lucide-react";
import { TrophyIcon } from "@/assets/cricketIcons";

const TournamentsLayer: React.FC = () => {
  return (
    <div className="homepage-layer border-cricket-green/20">
      <div className="layer-header cricket-gradient-green">
        <div className="flex items-center gap-2">
          <TrophyIcon className="h-6 w-6" />
          <h2 className="text-lg font-bold">Tournaments & Challenges</h2>
        </div>
      </div>
      <div className="layer-content">
        {/* Browse Tournaments */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-cricket-green" />
              <h3 className="font-medium text-cricket-green">Browse Tournaments</h3>
            </div>
            <Button variant="link" className="text-cricket-green p-0">
              View All <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Mumbai Corporate Cricket League",
                organizer: "TechCorp India",
                date: "Starting June 15",
                type: "Corporate",
                teams: 16,
                status: "Registration Open",
                image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              },
              {
                name: "Monsoon T20 Challenge",
                organizer: "Mumbai Cricket Association",
                date: "July 10-25",
                type: "Open",
                teams: 24,
                status: "Registration Open",
                image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }
            ].map((tournament, index) => (
              <Card key={index} className="cricket-card hover:border-cricket-green overflow-hidden">
                <div className="h-28 bg-cover bg-center relative" style={{ 
                  backgroundImage: `url(${tournament.image})`, 
                  backgroundSize: 'cover' 
                }}>
                  <Badge className="absolute top-2 left-2 bg-cricket-green">
                    {tournament.type}
                  </Badge>
                  <Badge className="absolute top-2 right-2 bg-cricket-red text-white">
                    {tournament.status}
                  </Badge>
                </div>
                <CardContent className="p-3">
                  <h4 className="font-medium mb-1">{tournament.name}</h4>
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <Building className="h-3 w-3 mr-1" />
                    {tournament.organizer}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1 text-cricket-green" />
                      <span className="text-xs">{tournament.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1 text-cricket-green" />
                      <span className="text-xs">{tournament.teams} teams</span>
                    </div>
                  </div>
                  <Button className="w-full mt-3 bg-cricket-green hover:bg-cricket-lightGreen text-xs h-8">
                    Register Your Team
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leaderboard Highlights */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Award className="h-4 w-4 text-cricket-green" />
            <h3 className="font-medium text-cricket-green">Leaderboard Highlights</h3>
          </div>
          
          <Card className="cricket-card">
            <CardContent className="p-3">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">Mumbai Corporate Cricket League</h4>
                <Badge variant="outline" className="border-cricket-green text-cricket-green">
                  Ongoing
                </Badge>
              </div>
              
              <div className="space-y-2 mb-3">
                <div className="flex items-center p-2 bg-cricket-green/5 rounded">
                  <div className="font-medium w-6">1</div>
                  <div className="flex-1">TechStars XI</div>
                  <div className="text-right font-medium text-cricket-green">12 pts</div>
                </div>
                <div className="flex items-center p-2 bg-cricket-green/5 rounded">
                  <div className="font-medium w-6">2</div>
                  <div className="flex-1">CloudNine Warriors</div>
                  <div className="text-right font-medium text-cricket-green">10 pts</div>
                </div>
                <div className="flex items-center p-2 bg-cricket-green/5 rounded">
                  <div className="font-medium w-6">3</div>
                  <div className="flex-1">DataDynamos</div>
                  <div className="text-right font-medium text-cricket-green">8 pts</div>
                </div>
              </div>
              
              <div className="text-center">
                <Button variant="link" className="text-cricket-green text-xs">
                  View Complete Leaderboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Join Challenges & Company Zone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="cricket-card hover:border-cricket-green">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Layers className="h-5 w-5 text-cricket-green" />
                <h3 className="font-medium text-cricket-green">Join Challenges</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Participate in skill-based challenges and win exciting prizes
              </p>
              <div className="space-y-2 mb-3">
                <div className="flex justify-between items-center p-2 bg-cricket-green/5 rounded">
                  <span>Most Runs Challenge</span>
                  <Badge variant="outline" className="text-xs border-cricket-green text-cricket-green">
                    Weekly
                  </Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-cricket-green/5 rounded">
                  <span>Top Bowler Challenge</span>
                  <Badge variant="outline" className="text-xs border-cricket-green text-cricket-green">
                    Monthly
                  </Badge>
                </div>
              </div>
              <Button variant="outline" className="w-full border-cricket-green text-cricket-green hover:bg-cricket-green hover:text-white">
                Browse All Challenges
              </Button>
            </CardContent>
          </Card>
          
          <Card className="cricket-card bg-cricket-cream dark:bg-cricket-green/10">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Building className="h-5 w-5 text-cricket-green" />
                <h3 className="font-medium text-cricket-green">Company-Only Zone</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Exclusive tournaments and leagues for corporate teams
              </p>
              <div className="mb-3 text-center">
                <Building className="h-12 w-12 mx-auto text-cricket-green opacity-60" />
                <p className="text-sm mt-2">
                  Connect your work email to access company tournaments and stats
                </p>
              </div>
              <Button className="w-full bg-cricket-green hover:bg-cricket-lightGreen">
                Connect Work Email
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TournamentsLayer;
