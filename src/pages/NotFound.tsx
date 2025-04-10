
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { CricBuddiesLogo } from "@/assets/cricketIcons";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cricket-cream/30 dark:bg-cricket-green/5 p-4">
      <div className="text-center max-w-md">
        <CricBuddiesLogo className="w-24 h-24 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-2 text-cricket-green">Oops! Out of Bounds</h1>
        <p className="text-xl text-muted-foreground mb-8">
          This page seems to have been hit for a six! Let's get you back to the pitch.
        </p>
        <Button className="bg-cricket-green hover:bg-cricket-lightGreen">
          <Home className="mr-2 h-5 w-5" />
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
