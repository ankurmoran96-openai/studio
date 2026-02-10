"use client";

import { useState } from 'react';
import { QuestionScreen } from '@/components/screens/QuestionScreen';
import { PrankScreen } from '@/components/screens/PrankScreen';
import { IntroScreen } from '@/components/screens/IntroScreen';
import { BirthdayScreen } from '@/components/screens/BirthdayScreen';

export default function Home() {
  const [activeScreen, setActiveScreen] = useState('question');

  return (
    <main className="relative w-screen h-screen bg-black overflow-hidden">
      <QuestionScreen
        isActive={activeScreen === 'question'}
        onYesClick={() => setActiveScreen('prank')}
      />
      <PrankScreen
        isActive={activeScreen === 'prank'}
        onNextClick={() => setActiveScreen('intro')}
      />
      <IntroScreen
        isActive={activeScreen === 'intro'}
        onNextClick={() => setActiveScreen('birthday')}
      />
      <BirthdayScreen isActive={activeScreen === 'birthday'} />
    </main>
  );
}
