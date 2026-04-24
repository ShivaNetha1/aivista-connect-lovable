import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, DollarSign, Clock, Target } from "lucide-react";

type Stat = {
  icon: typeof TrendingUp;
  value: number;
  suffix: string;
  label: string;
  desc: string;
};

const stats: Stat[] = [
  { icon: TrendingUp, value: 10, suffix: "x", label: "More Leads", desc: "vs traditional outbound" },
  { icon: DollarSign, value: 70, suffix: "%", label: "Cost Saved", desc: "on operations" },
  { icon: Clock, value: 24, suffix: "/7", label: "Always On", desc: "AI never sleeps" },
  { icon: Target, value: 3, suffix: "x", label: "Conversions", desc: "with AI personalization" },
];

function Counter({ to, suffix, start }: { to: number; suffix: string; start: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const startT = performance.now();
    const dur = 1400;
    const tick = (t: number) => {
      const p = Math.min(1, (t - startT) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, start]);
  return (
    <span className="font-display text-5xl font-bold text-gradient sm:text-6xl">
      {n}
      {suffix}
    </span>
  );
}

export function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="relative py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-3xl glass p-8 sm:p-14"
        >
          <div className="aurora-bg opacity-60" />
          <div className="relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--neon-blue)]">
                Real ROI
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
                The numbers our clients <span className="text-gradient">love</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                AI isn’t a buzzword. It’s a multiplier. Here’s what businesses see when they
                work with us.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                    <s.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <Counter to={s.value} suffix={s.suffix} start={inView} />
                  <p className="mt-2 font-display text-base font-semibold">{s.label}</p>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
