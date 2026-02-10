"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';

type QuestionScreenProps = {
  isActive: boolean;
  onYesClick: () => void;
};

export function QuestionScreen({ isActive, onYesClick }: QuestionScreenProps) {
  const [noPosition, setNoPosition] = useState<{
    position: 'absolute';
    top: string;
    left: string;
    transform: string;
  } | null>(null);

  const moveButton = () => {
    const newTop = Math.floor(Math.random() * 80) + 10;
    const newLeft = Math.floor(Math.random() * 80) + 10;
    setNoPosition({
      position: 'absolute',
      top: `${newTop}%`,
      left: `${newLeft}%`,
      transform: 'translate(-50%, -50%)',
    });
  };

  const handleNoInteraction = (
    e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    moveButton();
  };

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-8 p-4 text-center transition-opacity duration-1000 ease-in-out ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
      }`}
    >
      <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight animate-in fade-in-0 duration-1000">
        Angel, will u be my girlfriend?
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in-0 duration-1000 delay-300 fill-mode-both">
        <Button
          onClick={onYesClick}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg shadow-[0_0_20px_theme(colors.primary)] hover:shadow-[0_0_30px_theme(colors.primary)] transition-all duration-300 transform hover:scale-105"
        >
          Omg!!!! yess!!! (⁠ ⁠ꈍ⁠ᴗ⁠ꈍ⁠)
        </Button>
        <Button
          size="lg"
          variant="secondary"
          onClick={() => alert('Really? 🙂')}
          onMouseEnter={handleNoInteraction}
          onTouchStart={handleNoInteraction}
          style={noPosition ?? {}}
          className="transition-all duration-300 font-bold text-lg"
        >
          No
        </Button>
      </div>
    </div>
  );
}
