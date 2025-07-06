
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-light text-stone-800 mb-4">
          Astrid & Freddie
        </h3>
        <p className="text-stone-600 mb-8 font-light">
          September 2026 • Location TBD
        </p>
        
        <div className="flex justify-center space-x-8 mb-8">
          <a 
            href="mailto:wedding@freddieandastrid.com" 
            className="text-stone-600 hover:text-stone-800 transition-colors duration-300 text-sm tracking-wide"
          >
            Contact Us
          </a>
          <a 
            href="#rsvp" 
            className="text-stone-600 hover:text-stone-800 transition-colors duration-300 text-sm tracking-wide"
          >
            RSVP
          </a>
        </div>
        
        <div className="w-12 h-px bg-stone-400 mx-auto mb-6"></div>
        
        <p className="text-stone-500 text-xs">
          Made with love for our special day
        </p>
      </div>
    </footer>
  );
};

export default Footer;
