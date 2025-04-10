
import React from "react";
import { CricBuddiesLogo } from "@/assets/cricketIcons";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-cricket-green text-white py-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CricBuddiesLogo className="h-8 w-8" />
              <span className="font-bold text-xl">CricBuddies</span>
            </div>
            <p className="text-cricket-cream/80 text-sm">
              Connect with cricket players, book turfs, and participate in tournaments - all in one place.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-cricket-cream">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cricket-cream">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-cricket-cream">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-cricket-cream/80">
              <li>
                <Link to="/" className="hover:text-cricket-cream">Home</Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-cricket-cream">My Profile</Link>
              </li>
              <li>
                <Link to="/groups" className="hover:text-cricket-cream">Find Groups</Link>
              </li>
              <li>
                <Link to="/turfs" className="hover:text-cricket-cream">Book Turfs</Link>
              </li>
              <li>
                <Link to="/tournaments" className="hover:text-cricket-cream">Tournaments</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-cricket-cream/80">
              <li>
                <a href="#" className="hover:text-cricket-cream">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-cricket-cream">FAQs</a>
              </li>
              <li>
                <a href="#" className="hover:text-cricket-cream">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-cricket-cream">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-cricket-cream">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Download App</h3>
            <p className="text-cricket-cream/80 text-sm mb-4">
              Get the CricBuddies app for the best experience.
            </p>
            <div className="space-y-2">
              <a href="#" className="block">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-cricket-cream/20 mt-8 pt-6 text-center text-cricket-cream/60 text-sm">
          <p>© {new Date().getFullYear()} CricBuddies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
