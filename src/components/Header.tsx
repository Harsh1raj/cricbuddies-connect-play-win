
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CricBuddiesLogo } from "@/assets/cricketIcons";
import { Bell, Menu, Search, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-cricket-green shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-cricket-cream dark:bg-cricket-green">
              <div className="flex flex-col gap-6 py-6">
                <Link to="/" className="flex items-center gap-2">
                  <CricBuddiesLogo />
                  <span className="font-bold text-xl">CricBuddies</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  <Link to="/" className="text-lg font-medium hover:text-cricket-green dark:hover:text-cricket-cream">Home</Link>
                  <Link to="/profile" className="text-lg font-medium hover:text-cricket-green dark:hover:text-cricket-cream">My Profile</Link>
                  <Link to="/groups" className="text-lg font-medium hover:text-cricket-green dark:hover:text-cricket-cream">Groups</Link>
                  <Link to="/turfs" className="text-lg font-medium hover:text-cricket-green dark:hover:text-cricket-cream">Book Turfs</Link>
                  <Link to="/tournaments" className="text-lg font-medium hover:text-cricket-green dark:hover:text-cricket-cream">Tournaments</Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center gap-2">
            <CricBuddiesLogo />
            <span className="font-bold text-lg hidden md:inline">CricBuddies</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-cricket-green dark:hover:text-cricket-cream">Home</Link>
          <Link to="/groups" className="font-medium hover:text-cricket-green dark:hover:text-cricket-cream">Groups</Link>
          <Link to="/turfs" className="font-medium hover:text-cricket-green dark:hover:text-cricket-cream">Book Turfs</Link>
          <Link to="/tournaments" className="font-medium hover:text-cricket-green dark:hover:text-cricket-cream">Tournaments</Link>
        </div>
        <div className="flex items-center gap-4">
          <form className="hidden md:flex items-center relative">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search players, turfs..."
              className="w-64 pl-8 rounded-full bg-muted"
            />
          </form>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1.5 w-2 h-2 bg-cricket-red rounded-full"></span>
          </Button>
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
