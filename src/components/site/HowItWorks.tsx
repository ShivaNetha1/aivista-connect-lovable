import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Wrench, Rocket, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

const steps = [
  { icon: MessageSquare, title: "Talk to Us", desc: "Share your goals on WhatsApp or call. No tech terms needed." },
  { icon: Lightbulb, title: "Get a Plan", desc: "We design a simple, ROI-focused AI plan for your business." },
  { icon: Wrench, title: "We Build It", desc: "Our team builds, tests and integrates everything for you." },
  { icon: Rocket, title: "Launch & Grow", desc: "Go live with full support — and watch results roll in." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-32">
      <div className="aurora-bg opacity-30" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--neon-pink)]">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Simple steps. <span className="text-gradient">Big results.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Built for non-technical founders. We handle the complexity, you enjoy the growth.
          </p>
        </div>

        <div className="relative mt-16">
          {/* connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-10 hidden h-px lg:block"
            style={{ background: "linear-gradient(to right, transparent, var(--neon-blue), var(--neon-violet), var(--neon-pink), transparent)" }}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative rounded-2xl glass p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
                    <div className="absolute inset-1 rounded-full bg-background" />
                    <s.icon className="relative h-7 w-7 text-foreground" />
                    <span className="absolute -bottom-2 -right-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-card font-display text-xs font-bold text-gradient ring-1 ring-border">
                      {i + 1}
                    </span>
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("cta_click", { source: "how_it_works", channel: "whatsapp" })}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            Start with a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
