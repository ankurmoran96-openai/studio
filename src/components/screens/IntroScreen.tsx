import { Button } from '@/components/ui/button';

type IntroScreenProps = {
  isActive: boolean;
  onNextClick: () => void;
};

export function IntroScreen({ isActive, onNextClick }: IntroScreenProps) {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-8 p-4 text-center transition-opacity duration-1000 ease-in-out ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
      }`}
    >
      <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
          So, dear Angel.
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-slate-300">
          I made this website especially for you for your surprise...
        </p>
      </div>
      <Button
        onClick={onNextClick}
        size="lg"
        className="animate-in fade-in-0 slide-in-from-bottom-10 duration-700 delay-200 fill-mode-both bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg shadow-[0_0_20px_theme(colors.primary)] hover:shadow-[0_0_30px_theme(colors.primary)] transition-all duration-300"
      >
        Go To Surprise
      </Button>
    </div>
  );
}
