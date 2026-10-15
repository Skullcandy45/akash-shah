import React from 'react';
import { siteConfig } from '../../content/site';

export default function TickerStrip() {
  const items = siteConfig.subspecialtiesTicker;

  // Duplicate items for continuous marquee scroll
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <section 
      className="w-full bg-alabaster-50 border-y border-alabaster-200 py-3.5 overflow-hidden select-none"
      aria-label="Clinical Specialities Marquee"
    >
      <div className="relative w-full flex items-center">
        {/* Animated Marquee Strip */}
        <div className="flex shrink-0 items-center gap-8 animate-ticker motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center">
          {duplicatedItems.map((item, index) => (
            <div key={`${item}-${index}`} className="flex items-center gap-3 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze-600 shrink-0" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-cypress-950 uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
