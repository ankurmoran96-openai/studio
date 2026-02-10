"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CssCake } from '@/components/ui/CssCake';
import { FloatingParticles } from '@/components/ui/FloatingParticles';
import { Card, CardContent } from '@/components/ui/card';
import { Flower2, Star, ChevronDown } from 'lucide-react';

type BirthdayScreenProps = {
  isActive: boolean;
};

const Decoration = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`absolute text-primary opacity-70 ${className}`}>
    {children}
  </div>
);

export function BirthdayScreen({ isActive }: BirthdayScreenProps) {
  const photo = PlaceHolderImages.find((img) => img.id === 'angel-photo');

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
      }`}
    >
      <FloatingParticles />
      <div className="relative z-10 flex flex-col items-center gap-12 animate-in fade-in duration-1000 delay-500 fill-mode-both p-4 pt-16 md:pt-24 min-h-screen overflow-y-auto">
        
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-br from-primary to-accent">
          Happy Birthday Angel!
        </h1>
        
        {photo && (
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <Image
              src={photo.imageUrl}
              alt={photo.description}
              width={240}
              height={240}
              className="relative w-48 h-48 md:w-60 md:h-60 rounded-full ring-4 ring-black object-cover"
              data-ai-hint={photo.imageHint}
            />
             {/* Decorations */}
            <Decoration className="top-0 left-0 -translate-x-1/2 -translate-y-1/2 rotate-[-30deg]"><Flower2 size={40} /></Decoration>
            <Decoration className="top-0 right-0 translate-x-1/2 -translate-y-1/2 rotate-[30deg]"><Star size={30} /></Decoration>
            <Decoration className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2 rotate-[30deg]"><Star size={30} /></Decoration>
            <Decoration className="bottom-0 right-0 translate-x-1/2 translate-y-1/2 rotate-[-30deg]"><Flower2 size={40} /></Decoration>
            <Decoration className="top-1/2 -left-12 -translate-x-1/2 -translate-y-1/2"><Star size={20} /></Decoration>
            <Decoration className="top-1/2 -right-12 translate-x-1/2 -translate-y-1/2"><Star size={20} /></Decoration>
          </div>
        )}

        <div className="w-full max-w-xs">
          <CssCake />
        </div>
        
        <div className="flex flex-col items-center gap-2 text-slate-300 animate-pulse mt-8">
            <p>Scroll down for your message</p>
            <ChevronDown />
        </div>

        <Card className="max-w-xl w-full bg-white/10 backdrop-blur-md border-primary/20 text-center mt-32 mb-16 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-1000 fill-mode-both">
          <CardContent className="p-6">
            <p className="font-body text-lg leading-relaxed text-slate-200">
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
