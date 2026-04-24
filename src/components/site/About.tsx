import { motion } from "framer-motion";
import { Brain, Globe2, TrendingUp, Smile } from "lucide-react";

const items = [
  {
    icon: Brain,
    title: "AI-First Engineering",
    desc: "Every solution we ship is built around modern AI — not just bolted on. You get future-ready tech today.",
  },
  {
    icon: Globe2,
    title: "Local Roots, Global Standards",
    desc: "Based in Telangana. Designed to international standards. Affordable, premium, and built for growth.",
  },
  {
    icon: TrendingUp,
    title: "ROI-Driven",
    desc: "We don’t sell features — we deliver outcomes. More leads, lower costs, faster operations.",
  },
  {
    icon: Smile,
    title: "Non-Tech Friendly",
    desc: "No jargon. No complexity. We translate AI into simple, actionable wins for your business.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="aurora-bg opacity-40" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--neon-blue)]">
            Why SRN Consultancy
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Built for businesses ready to <span className="text-gradient">scale with AI</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            We blend engineering excellence with conversion-first design — so AI becomes
            your strongest team member, not your most confusing tool.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl glass p-6 transition-transform hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <it.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
                   style={{ boxShadow: "var(--shadow-glow-violet)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
