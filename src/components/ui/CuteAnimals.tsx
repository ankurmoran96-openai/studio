const Bunny = ({ className }: { className?: string }) => (
    <div className={className}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <g fill="currentColor">
          <circle cx="50" cy="65" r="25"/>
          <path d="M 35,45 C 30,5 40,5 45,45 Z" />
          <path d="M 65,45 C 70,5 60,5 55,45 Z" />
          <path d="M 38,40 C 36,20 40,20 42,40 Z" fill="pink" fillOpacity="0.5" />
          <path d="M 62,40 C 64,20 60,20 58,40 Z" fill="pink" fillOpacity="0.5" />
          <circle cx="42" cy="65" r="3" fill="black"/>
          <circle cx="58" cy="65" r="3" fill="black"/>
          <path d="M 48,72 L 52,72 L 50,75 Z" fill="black"/>
        </g>
      </svg>
    </div>
  );
  
  const Cat = ({ className }: { className?: string }) => (
    <div className={className}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <g fill="currentColor">
          <circle cx="50" cy="50" r="30"/>
          <path d="M 20,20 L 40,35 L 35,15 Z" />
          <path d="M 80,20 L 60,35 L 65,15 Z" />
          <circle cx="40" cy="50" r="4" fill="black"/>
          <circle cx="60" cy="50" r="4" fill="black"/>
          <path d="M 45,60 C 40,65 50,70 50,60" stroke="black" strokeWidth="2" fill="none"/>
          <path d="M 55,60 C 60,65 50,70 50,60" stroke="black" strokeWidth="2" fill="none"/>
        </g>
      </svg>
    </div>
  );
  
  export function CuteAnimals() {
    return (
      <div className="absolute inset-0 w-full h-full pointer-events-none -z-10">
        <Bunny className="absolute w-16 h-16 md:w-24 md:h-24 text-primary/20 bottom-[20%] left-[2%] md:left-[5%] animate-in fade-in duration-1000 delay-[2500ms] fill-mode-both" />
        <Cat className="absolute w-20 h-20 md:w-28 md:h-28 text-accent/20 top-[15%] right-[2%] md:right-[8%] -scale-x-100 animate-in fade-in duration-1000 delay-[2800ms] fill-mode-both" />
        <Bunny className="hidden md:block absolute w-20 h-20 text-accent/10 bottom-[50%] right-[15%] rotate-12 animate-in fade-in duration-1000 delay-[3000ms] fill-mode-both" />
        <Cat className="absolute w-16 h-16 md:w-24 md:h-24 text-primary/15 top-[60%] left-[3%] md:left-[10%] rotate-[-15deg] animate-in fade-in duration-1000 delay-[3200ms] fill-mode-both" />
        <Bunny className="hidden md:block absolute w-16 h-16 text-secondary/20 top-[30%] left-[20%] animate-in fade-in duration-1000 delay-[3500ms] fill-mode-both" />
      </div>
    );
  }
  