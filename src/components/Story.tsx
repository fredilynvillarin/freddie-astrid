
import React from 'react';

const Story = () => {
  return (
    <section className="py-24 px-6 bg-stone-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-stone-800 mb-16 leading-tight">
          Our story
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-stone-200 rounded-full mx-auto flex items-center justify-center">
              <svg className="w-8 h-8 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-stone-800">First Meeting</h3>
            <p className="text-stone-600 font-light leading-relaxed">
              A chance encounter that felt like destiny. Sometimes the best things happen when you least expect them.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="w-16 h-16 bg-stone-200 rounded-full mx-auto flex items-center justify-center">
              <svg className="w-8 h-8 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-stone-800">Growing Together</h3>
            <p className="text-stone-600 font-light leading-relaxed">
              Through seasons of joy and challenge, our love has only grown stronger and deeper.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="w-16 h-16 bg-stone-200 rounded-full mx-auto flex items-center justify-center">
              <svg className="w-8 h-8 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-light text-stone-800">Forever Begins</h3>
            <p className="text-stone-600 font-light leading-relaxed">
              Now we're ready to write the next chapter of our story together, as husband and wife.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
