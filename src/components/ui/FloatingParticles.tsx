"use client";

import { useMemo } from 'react';

export function FloatingParticles() {
  const particles = useMemo(() => {
    const particleCount = 50;
    return Array.from({ length: particleCount }).map((_, i) => {
      const size = Math.random() * 3 + 1; // 1px to 4px
      const left = Math.random() * 100; // 0% to 100%
      const animationDuration = Math.random() * 10 + 10; // 10s to 20s
      const animationDelay = Math.random() * 15; // 0s to 15s
      const translateX = (Math.random() - 0.5) * 200; // -100px to 100px drift

      return {
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          animationDuration: `${animationDuration}s`,
          animationDelay: `${animationDelay}s`,
          '--tw-translate-x': `${translateX}px`,
        } as React.CSSProperties,
        colorClass: i % 3 === 0 ? 'bg-primary' : i % 3 === 1 ? 'bg-accent' : 'bg-white',
      };
    });
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute bottom-0 rounded-full animate-particle-float ${p.colorClass}`}
          style={p.style}
        ></div>
      ))}
    </div>
  );
}
