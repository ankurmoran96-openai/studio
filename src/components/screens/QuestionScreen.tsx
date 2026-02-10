"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"

type QuestionScreenProps = {
  isActive: boolean;
  onYesClick: () => void;
};

const FloatingHeart = ({ className }: { className?: string }) => (
    <div className={`absolute text-primary/50 animate-in fade-in duration-1000 ${className}`}>
        <Heart className="animate-pulse" />
    </div>
);

export function QuestionScreen({ isActive, onYesClick }: QuestionScreenProps) {
  const [noPosition, setNoPosition] = useState<{
    position: 'absolute';
    top: string;
    left: string;
    transform: string;
  } | null>(null);
  const [showNoPopup, setShowNoPopup] = useState(false);

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
      <div className="relative">
        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight animate-in fade-in-0 duration-1000">
          Angel, will u be my girlfriend?
        </h1>
        <FloatingHeart className="hidden md:block top-0 -left-12 w-8 h-8 delay-300" />
        <FloatingHeart className="hidden md:block bottom-0 -right-12 w-12 h-12 delay-500" />
        <FloatingHeart className="hidden md:block top-1/2 -right-24 w-6 h-6 delay-700" />
      </div>
      <div className="relative w-full max-w-sm flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in-0 duration-1000 delay-300 fill-mode-both">
        <Button
          onClick={onYesClick}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg shadow-[0_0_20px_theme(colors.primary)] hover:shadow-[0_0_30px_theme(colors.primary)] transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
        >
          Omg!!!! yess!!! (⁠ ⁠ꈍ⁠ᴗ⁠ꈍ⁠)
        </Button>
        <Button
          size="lg"
          variant="secondary"
          onClick={() => setShowNoPopup(true)}
          onMouseEnter={handleNoInteraction}
          onTouchStart={handleNoInteraction}
          style={noPosition ?? {}}
          className="transition-all duration-300 font-bold text-lg w-full sm:w-auto"
        >
          No
        </Button>
      </div>

      <AlertDialog open={showNoPopup} onOpenChange={setShowNoPopup}>
        <AlertDialogContent className="font-body">
          <AlertDialogHeader>
            <AlertDialogTitle className="font-headline text-2xl">Really? 🙂</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure? My heart can't take it!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowNoPopup(false)}>Okay, fine...</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  );
}
