export function CssCake() {
  const Candle = ({ delay }: { delay: string }) => (
    <div className="absolute bottom-full w-2 h-8 bg-pink-200 rounded-t-sm">
      <div
        className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-3 h-5 bg-orange-400 rounded-full animate-flicker"
        style={{ animationDelay: delay }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-2 bg-orange-600 rounded-full"></div>
      </div>
    </div>
  );

  return (
    <div className="relative w-64 h-32">
      {/* Icing */}
      <div className="absolute top-0 w-full h-4 bg-primary rounded-t-lg"></div>
      {/* Top Layer */}
      <div className="absolute top-3 w-full h-12 bg-[#D2691E] rounded-md"></div>
      {/* Icing Drip */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
      <div className="absolute top-12 left-1/4 -translate-x-1/2 w-4 h-3 bg-primary rounded-full"></div>
      <div className="absolute top-12 left-3/4 -translate-x-1/2 w-4 h-3 bg-primary rounded-full"></div>

      {/* Bottom Layer */}
      <div className="absolute top-14 w-full h-20 bg-[#8B4513] rounded-b-lg"></div>

      {/* Candles */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-6">
        <Candle delay="0s" />
        <Candle delay="0.2s" />
        <Candle delay="0.1s" />
        <Candle delay="0.4s" />
        <Candle delay="0.3s" />
      </div>

       {/* Plate */}
      <div className="absolute top-full -left-4 -right-4 h-4 bg-gray-300 rounded-lg shadow-inner"></div>
    </div>
  );
}
