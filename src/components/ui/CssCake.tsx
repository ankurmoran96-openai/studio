"use client";

import { useState, useEffect } from 'react';

type Sprinkle = {
  id: number;
  style: React.CSSProperties;
  colorClass: string;
};

export function CssCake() {
  const Candle = ({ delay }: { delay: string }) => (
    <div className="absolute bottom-full w-2 h-8 bg-pink-200 rounded-t-sm">
      <div
        className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-3 h-5 bg-orange-400 rounded-full animate-flicker"
        style={{ animationDelay: delay }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-2 bg-orange-600 rounded-full"></div>
      </div>
    </div>
  );

  const Sprinkles = ({ count }: { count: number }) => {
    const [sprinkles, setSprinkles] = useState<Sprinkle[]>([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const generatedSprinkles = Array.from({ length: count }).map((_, i) => {
            const colors = ['bg-pink-400', 'bg-purple-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400'];
            return {
                id: i,
                style: {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    transform: `rotate(${Math.random() * 90}deg)`,
                },
                colorClass: colors[i % colors.length]
            };
        });
        setSprinkles(generatedSprinkles);
    }, [count, isClient]);
    
    return (
      <div className="absolute inset-0">
        {isClient && sprinkles.map((s) => (
          <div key={s.id} className={`absolute w-1 h-2 rounded-full ${s.colorClass}`} style={s.style} />
        ))}
      </div>
    );
  };


  return (
    <div className="relative w-64 h-32">
      {/* Icing */}
      <div className="absolute top-0 w-full h-4 bg-primary rounded-t-lg"></div>
      {/* Top Layer */}
      <div className="relative top-3 w-full h-12 bg-[#D2691E] rounded-md overflow-hidden">
        <Sprinkles count={20} />
      </div>
      {/* Icing Drip */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
      <div className="absolute top-12 left-1/4 -translate-x-1/2 w-4 h-3 bg-primary rounded-full"></div>
      <div className="absolute top-12 left-3/4 -translate-x-1/2 w-4 h-3 bg-primary rounded-full"></div>

      {/* Bottom Layer */}
      <div className="relative top-14 w-full h-20 bg-[#8B4513] rounded-b-lg overflow-hidden">
         <Sprinkles count={30} />
      </div>

      {/* Candles */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-6">
        <Candle delay="0s" />
        <Candle delay="0.2s" />
        <Candle delay="0.1s" />
        <Candle delay="0.4s" />
        <Candle delay="0.3s" />
      </div>

       {/* Plate */}
      <div className="absolute top-full -left-4 -right-4 h-4 bg-gray-300 rounded-lg shadow-inner"></div>
    </div>
  );
}
