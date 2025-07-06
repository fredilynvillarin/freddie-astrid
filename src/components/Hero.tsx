
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <p className="text-stone-600 text-sm tracking-[0.2em] uppercase mb-6 font-light">
            You're invited to celebrate
          </p>
          <h1 className="text-6xl md:text-8xl font-light text-stone-800 mb-4 tracking-tight">
            Freddie
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-px bg-stone-400"></div>
            <span className="px-6 text-stone-600 text-lg font-light">&</span>
            <div className="w-12 h-px bg-stone-400"></div>
          </div>
          <h1 className="text-6xl md:text-8xl font-light text-stone-800 mb-8 tracking-tight">
            Astrid
          </h1>
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <p className="text-stone-600 text-lg mb-4 font-light">
            September 2026
          </p>
          <p className="text-stone-500 text-sm tracking-wide">
            Location to be announced
          </p>
        </div>
        
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button className="inline-flex items-center text-stone-700 text-sm tracking-wide uppercase hover:text-stone-900 transition-colors duration-300 group">
            <span>Scroll to discover</span>
            <svg className="ml-2 w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
