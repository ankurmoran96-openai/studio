"use client";

import Image from 'next/image';
import { useState } from 'react';
import { CssCake } from '@/components/ui/CssCake';
import { FloatingParticles } from '@/components/ui/FloatingParticles';
import { Flower2, Star, ChevronDown, Sparkles, Gift } from 'lucide-react';
import { CuteAnimals } from '@/components/ui/CuteAnimals';
import { Card, CardContent } from '@/components/ui/card';

type BirthdayScreenProps = {
  isActive: boolean;
};

export function BirthdayScreen({ isActive }: BirthdayScreenProps) {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
      }`}
    >
      <div className="absolute inset-0 h-full w-full overflow-y-auto overflow-x-hidden">
        <FloatingParticles />
        <CuteAnimals />
        <div className="relative z-10 flex flex-col items-center gap-12 animate-in fade-in duration-1000 delay-500 fill-mode-both p-4 pt-16 md:pt-24 min-h-screen">
          
          <div className="relative text-center">
              <h1 className="font-headline text-6xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent">
              Happy Birthday Angel!
              </h1>
              <Sparkles className="absolute -top-8 -left-2 md:-left-12 w-10 h-10 text-accent opacity-70 animate-pulse" />
              <Sparkles className="hidden md:block absolute top-0 -left-24 w-6 h-6 text-primary opacity-60 animate-pulse delay-300" />
              <Sparkles className="absolute -bottom-8 -right-2 md:-right-12 w-10 h-10 text-primary opacity-70 animate-pulse delay-200" />
              <Sparkles className="hidden md:block absolute bottom-0 -right-24 w-6 h-6 text-accent opacity-60 animate-pulse delay-500" />
              <Star className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-16 w-8 h-8 text-primary/50 animate-pulse-slow" />
              <Star className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-16 w-8 h-8 text-accent/50 animate-pulse-slow delay-400" />
          </div>
          
          <div className="w-full max-w-xs mt-8 scale-90 md:scale-100">
            <CssCake />
          </div>
          
          <div className="relative mt-12 animate-in fade-in duration-1000 delay-700 fill-mode-both">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-lg shadow-primary/20">
                <Image
                    src="/angel.jpg"
                    alt="Photo of Angel"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                    data-ai-hint="portrait woman smiling"
                />
            </div>
            <Flower2 className="absolute -top-4 -left-4 w-12 h-12 text-primary opacity-80 rotate-[-45deg] animate-pulse-slow" />
            <Star className="absolute -top-2 -right-4 w-8 h-8 text-accent opacity-90 animate-pulse delay-200" />
            <Flower2 className="absolute -bottom-4 -right-4 w-12 h-12 text-primary opacity-80 rotate-[45deg] animate-pulse-slow delay-300" />
            <Star className="absolute -bottom-2 -left-4 w-8 h-8 text-accent opacity-90 animate-pulse delay-500" />
          </div>

          <div className="flex flex-col items-center gap-2 text-muted-foreground animate-pulse mt-8">
              <p>Scroll down for your message</p>
              <ChevronDown />
          </div>
          
          <div
            className="relative max-w-xl w-full my-32 md:mt-48 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-1000 fill-mode-both"
            onClick={() => setIsMessageOpen(true)}
            >
            {/* The message card, which will be revealed */}
            <Card className="relative bg-card/80 border-primary/20 text-center shadow-lg shadow-primary/10">
                <Flower2 className="absolute -top-8 -left-4 md:-left-8 w-14 h-14 text-primary opacity-60 rotate-[-45deg] animate-pulse-slow" />
                <Star className="absolute -top-6 -right-4 md:-right-6 w-10 h-10 text-accent opacity-70 animate-pulse delay-200" />
                <Flower2 className="absolute -bottom-8 -right-4 md:-right-8 w-14 h-14 text-primary opacity-60 rotate-[45deg] animate-pulse-slow delay-300" />
                <Star className="absolute -bottom-6 -left-4 md:-left-6 w-10 h-10 text-accent opacity-70 animate-pulse delay-500" />
                <Flower2 className="hidden md:block absolute top-1/2 -left-12 w-8 h-8 text-accent/50 rotate-[-15deg]" />
                <Flower2 className="hidden md:block absolute top-1/2 -right-12 w-8 h-8 text-primary/50 rotate-[15deg]" />
                <CardContent className="p-6 md:p-8">
                <p className="font-body text-xl md:text-2xl leading-relaxed text-foreground/80">
                    Janmadin ko dherai dherai subhakamana mero Maya. Timi dherai lucky
                    chau ki timile yesto creative bf payau 😁, tara ma sab bhanda
                    lucky chu jasle yesto sundar girlfriend payo. Jasle mero care
                    garcha. Ma murkha thiye jo sochthyo ki ma kahile prem ma paddina,
                    tara ma galat thiye. Ma timro prem ma base, ani dherai gaadhaa prem
                    ma. Ma yeti matra bhanna chahanchu ki ma timilai sadhai maya
                    garnechu jab samma timi ma sanga hunchau. Khusi le bhariyeko
                    barsha bitos, Bhagwan le rakshya garun. Pheri pani, Happy
                    Birthday!
                </p>
                </CardContent>
            </Card>

            {/* Gift Wrap Overlay */}
            <div className={`absolute inset-0 transition-opacity duration-500 cursor-pointer ${isMessageOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                {/* Gift paper */}
                <div className="absolute inset-0 bg-card rounded-lg border border-primary/30"></div>
                
                {/* Ribbons */}
                <div className={`absolute top-1/2 left-0 w-1/2 h-10 bg-primary/70 -translate-y-1/2 transition-all duration-1000 ease-in-out ${isMessageOpen ? '-translate-x-full' : 'translate-x-0'}`}></div>
                <div className={`absolute top-1/2 right-0 w-1/2 h-10 bg-primary/70 -translate-y-1/2 transition-all duration-1000 ease-in-out ${isMessageOpen ? 'translate-x-full' : 'translate-x-0'}`}></div>
                
                <div className={`absolute left-1/2 top-0 w-10 h-1/2 bg-primary/70 -translate-x-1/2 transition-all duration-1000 ease-in-out ${isMessageOpen ? '-translate-y-full' : 'translate-y-0'}`}></div>
                <div className={`absolute left-1/2 bottom-0 w-10 h-1/2 bg-primary/70 -translate-x-1/2 transition-all duration-1000 ease-in-out ${isMessageOpen ? 'translate-y-full' : 'translate-y-0'}`}></div>
                
                {/* Bow/Knot on top that fades */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isMessageOpen ? 'opacity-0' : 'opacity-100'}`}>
                    <Gift className="w-16 h-16 text-white drop-shadow-lg"/>
                </div>

                {/* "Click To Open" card */}
                <div className={`absolute -top-5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg transition-all duration-500 ${isMessageOpen ? 'opacity-0 -translate-y-5' : 'opacity-100'}`}>
                    <div className="flex items-center gap-2">
                        <span className="font-headline text-lg">Click to Open</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
