"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CssCake } from '@/components/ui/CssCake';
import { FloatingParticles } from '@/components/ui/FloatingParticles';
import { Card, CardContent } from '@/components/ui/card';

type BirthdayScreenProps = {
  isActive: boolean;
};

export function BirthdayScreen({ isActive }: BirthdayScreenProps) {
  const photo = PlaceHolderImages.find((img) => img.id === 'angel-photo');

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-1000 ease-in-out ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
      }`}
    >
      <FloatingParticles />
      <div className="relative z-10 flex flex-col items-center gap-8 animate-in fade-in duration-1000 delay-500 fill-mode-both">
        {photo && (
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <Image
              src={photo.imageUrl}
              alt={photo.description}
              width={160}
              height={160}
              className="relative rounded-full ring-4 ring-black"
              data-ai-hint={photo.imageHint}
            />
          </div>
        )}

        <CssCake />

        <Card className="max-w-xl bg-white/10 backdrop-blur-md border-primary/20 text-center">
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
