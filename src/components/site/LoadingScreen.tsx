import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setProgress(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      aria-hidden={done}
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="aurora-bg" />
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-primary opacity-80 blur-md" />
          <div className="absolute inset-1 rounded-full bg-background" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-2xl font-bold text-gradient">SRNC</span>
          </div>
        </div>
        <div className="h-1 w-56 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full bg-gradient-primary transition-[width] duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Initializing AI · {progress}%
        </p>
      </div>
    </div>
  );
}
