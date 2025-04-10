import React from "react";

export const BallIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <path d="M8 8.5C9 7.5 11 7 12.5 8C14 9 14.5 11 13.5 12.5C12.5 14 10.5 14.5 9 13.5C7.5 12.5 7 9.5 8 8.5Z" fill="currentColor" fillOpacity="0.6" />
  </svg>
);

export const BatIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 20L4 16L12 8L16 12L8 20Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <path d="M16 12L20 8C21 7 21 5.5 20 4.5C19 3.5 17.5 3.5 16.5 4.5L12 8" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const PitchIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="20" height="12" rx="1" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="6" x2="12" y2="18" stroke="currentColor" strokeWidth="2" />
    <line x1="6" y1="10" x2="6" y2="14" stroke="currentColor" strokeWidth="2" />
    <line x1="18" y1="10" x2="18" y2="14" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const TrophyIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 4H17L16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13L7 4Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <path d="M17 8H19C20.1046 8 21 7.10457 21 6V5C21 4.44772 20.5523 4 20 4H17" stroke="currentColor" strokeWidth="2" />
    <path d="M7 8H5C3.89543 8 3 7.10457 3 6V5C3 4.44772 3.44772 4 4 4H7" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const TeamIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <path d="M20 19C20 16.2386 16.4183 14 12 14C7.58172 14 4 16.2386 4 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="19" cy="8" r="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <circle cx="5" cy="8" r="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
    <path d="M23 19C23 17.5 21.5 16 19 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M1 19C1 17.5 2.5 16 5 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const CricBuddiesLogo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <img 
    src="/lovable-uploads/ae0761f0-1ab4-404c-9ad7-97fee445e232.png" 
    alt="CricBuddies Logo" 
    className={className} 
  />
);
