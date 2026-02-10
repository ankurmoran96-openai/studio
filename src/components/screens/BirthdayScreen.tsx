"use client";

import { CssCake } from '@/components/ui/CssCake';
import { FloatingParticles } from '@/components/ui/FloatingParticles';
import { Card, CardContent } from '@/components/ui/card';
import { Flower2, Star, ChevronDown, Sparkles } from 'lucide-react';
import { CuteAnimals } from '@/components/ui/CuteAnimals';

type BirthdayScreenProps = {
  isActive: boolean;
};

export function BirthdayScreen({ isActive }: BirthdayScreenProps) {

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
      }`}
    >
      <FloatingParticles />
      <CuteAnimals />
      <div className="relative z-10 flex flex-col items-center gap-12 animate-in fade-in duration-1000 delay-500 fill-mode-both p-4 pt-16 md:pt-24 min-h-screen overflow-y-auto">
        
        <div className="relative">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent">
            Happy Birthday Angel!
            </h1>
            <Sparkles className="absolute -top-4 -left-8 w-8 h-8 text-accent opacity-80 animate-pulse" />
            <Sparkles className="absolute -bottom-4 -right-8 w-8 h-8 text-primary opacity-80 animate-pulse delay-200" />
            <Sparkles className="absolute top-0 -right-16 w-6 h-6 text-primary opacity-70 animate-pulse delay-500" />
            <Sparkles className="absolute bottom-0 -left-16 w-6 h-6 text-accent opacity-70 animate-pulse delay-700" />
        </div>
        
        <div className="w-full max-w-xs mt-8">
          <CssCake />
        </div>
        
        <div className="flex flex-col items-center gap-2 text-muted-foreground animate-pulse mt-8">
            <p>Scroll down for your message</p>
            <ChevronDown />
        </div>

        <Card className="relative max-w-xl w-full bg-card/80 border-primary/20 text-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-1000 fill-mode-both shadow-lg shadow-primary/10">
          <Flower2 className="absolute -top-6 -left-6 w-12 h-12 text-primary opacity-50 rotate-[-30deg]" />
          <Star className="absolute -top-4 -right-4 w-8 h-8 text-accent opacity-60" />
          <Flower2 className="absolute -bottom-6 -right-5 w-12 h-12 text-primary opacity-50 rotate-[30deg]" />
           <Star className="absolute -bottom-4 -left-4 w-8 h-8 text-accent opacity-60" />

          <CardContent className="p-6 md:p-8">
            <p className="font-body text-lg leading-relaxed text-foreground/80">
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
      </div>
    </div>
  );
}
