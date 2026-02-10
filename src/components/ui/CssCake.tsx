"use client";

import { useState, useEffect } from 'react';

type Sprinkle = {
  id: number;
  style: React.CSSProperties;
  colorClass: string;
};

const Sprinkles = ({ count }: { count: number }) => {
  const [sprinkles, setSprinkles] = useState<Sprinkle[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
      if (!isClient) return;

      const generatedSprinkles = Array.from({ length: count }).map((_, i) => {
          const colors = ['bg-pink-400', 'bg-purple-400', 'bg-sky-400', 'bg-teal-400', 'bg-yellow-400'];
          return {
              id: i,
              style: {
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 85}%`,
                  transform: `rotate(${Math.random() * 90}deg)`,
              },
              colorClass: colors[Math.floor(Math.random() * colors.length)]
          };
      });
      setSprinkles(generatedSprinkles);
  }, [count, isClient]);
  
  return (
    <div className="absolute inset-0">
      {isClient && sprinkles.map((s) => (
        <div key={s.id} className={`absolute w-0.5 h-2.5 rounded-full ${s.colorClass}`} style={s.style} />
      ))}
    </div>
  );
};


const Candle = ({ delay, left }: { delay: string, left: string }) => (
    <div className="absolute bottom-full w-2 h-8 bg-pink-200 rounded-t-sm" style={{ left }}>
      <div
        className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-3 h-5 bg-orange-400 rounded-full animate-flicker"
        style={{ animationDelay: delay }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-2 bg-yellow-300 rounded-full"></div>
      </div>
    </div>
);

export function CssCake() {
  return (
    <div className="relative w-[250px] h-[192px] mx-auto flex justify-center items-end">
        {/* Plate */}
        <div className="absolute bottom-0 w-full scale-x-110 h-4 bg-slate-200/80 rounded-lg shadow-inner"></div>

        {/* Bottom Layer */}
        <div className="relative w-[90%] h-[70px] bg-primary/80 rounded-lg z-10">
            <div className="absolute -top-2 w-full h-4 bg-white/90 rounded-t-lg"></div>
            <Sprinkles count={30} />
        </div>

        {/* Top Layer */}
        <div className="absolute bottom-[70px] w-[65%] h-[60px] bg-accent/80 rounded-lg z-20">
             <div className="absolute -top-2 w-full h-4 bg-white/90 rounded-t-lg">
                <Candle delay="0.2s" left="30%" />
                <Candle delay="0.5s" left="45%" />
                <Candle delay="0.3s" left="60%" />
             </div>
             <Sprinkles count={20} />
        </div>

    </div>
  );
}
