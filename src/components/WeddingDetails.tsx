
import React from 'react';

const WeddingDetails = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-light text-stone-800 leading-tight">
              A celebration of love
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              Join us as we begin our journey together. We're planning something beautiful and intimate, and we can't wait to share this special moment with our closest family and friends.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-stone-400 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-stone-800 font-medium mb-1">When</h3>
                  <p className="text-stone-600 font-light">September 2026</p>
                  <p className="text-stone-500 text-sm">Exact date coming soon</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-stone-400 rounded-full mt-3"></div>
                <div>
                  <h3 className="text-stone-800 font-medium mb-1">Where</h3>
                  <p className="text-stone-600 font-light">Location TBD</p>
                  <p className="text-stone-500 text-sm">We're finalizing the perfect venue</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] bg-stone-200 rounded-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Beautiful flowers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-sm shadow-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-light text-stone-800">Sept</p>
                <p className="text-stone-600 text-sm">2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
