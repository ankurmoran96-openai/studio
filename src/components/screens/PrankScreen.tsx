import { Button } from '@/components/ui/button';

type PrankScreenProps = {
  isActive: boolean;
  onNextClick: () => void;
};

export function PrankScreen({ isActive, onNextClick }: PrankScreenProps) {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-8 p-4 text-center transition-opacity duration-1000 ease-in-out ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
      }`}
    >
      <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
        <h1 className="font-headline text-3xl md:text-5xl font-bold tracking-tight">
          Hehe js kidding
        </h1>
        <p className="mt-2 text-2xl md:text-4xl text-slate-300">
          you are already my cutiee gf
        </p>
      </div>
      <Button
        onClick={onNextClick}
        size="lg"
        className="animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-200 fill-mode-both bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg shadow-[0_0_20px_theme(colors.primary)] hover:shadow-[0_0_30px_theme(colors.primary)] transition-all duration-300"
      >
        Ofc am all urs 😭
      </Button>
    </div>
  );
}
