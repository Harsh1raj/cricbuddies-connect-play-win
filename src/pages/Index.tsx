
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FindPlayersLayer from "@/components/HomePage/FindPlayersLayer";
import BookTurfLayer from "@/components/HomePage/BookTurfLayer";
import TournamentsLayer from "@/components/HomePage/TournamentsLayer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { CricBuddiesLogo } from "@/assets/cricketIcons";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-cricket-green text-white py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Connect, Play, Win with CricBuddies
                </h1>
                <p className="text-lg text-cricket-cream mb-8 max-w-2xl">
                  Find cricket players near you, book turfs instantly, and join exciting tournaments - all in one place.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-cricket-red hover:bg-cricket-red/90">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Download className="mr-2 h-4 w-4" /> Download App
                  </Button>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -top-6 -right-6">
                    <CricBuddiesLogo className="w-24 h-24 animate-bounce-slow" />
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Cricket Players" 
                    className="rounded-lg shadow-2xl border-4 border-white w-[300px] md:w-[400px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Layers Section */}
        <section className="py-12 bg-cricket-cream/30 dark:bg-cricket-green/5">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold text-center mb-8 text-cricket-green">
              Your Complete Cricket Companion
            </h2>
            
            <FindPlayersLayer />
            <BookTurfLayer />
            <TournamentsLayer />
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-cricket-green text-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold">10,000+</div>
                <div className="text-cricket-cream/80 mt-1">Registered Players</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">500+</div>
                <div className="text-cricket-cream/80 mt-1">Cricket Turfs</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">250+</div>
                <div className="text-cricket-cream/80 mt-1">Active Groups</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold">100+</div>
                <div className="text-cricket-cream/80 mt-1">Tournaments</div>
              </div>
            </div>
          </div>
        </section>

        {/* Download App Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="bg-cricket-cream dark:bg-cricket-green/10 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-cricket-green mb-4">Get the CricBuddies App</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Enjoy a seamless experience with our mobile app. Schedule matches, book turfs, and connect with players on the go.
              </p>
              <div className="flex justify-center">
                <a href="#">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play" 
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
