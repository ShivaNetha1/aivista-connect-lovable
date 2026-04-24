import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Sparkles, ShieldCheck, Clock } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

const ThreeScene = lazy(() => import("./ThreeScene"));

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-28"
    >
      {/* Background layers */}
      <div className="aurora-bg" />
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      {mounted && (
        <Suspense fallback={null}>
          <div className="absolute inset-0">
            <ThreeScene />
          </div>
        </Suspense>
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground">
            <span className="inline-flex h-2 w-2 rounded-full bg-whatsapp shadow-[0_0_10px_var(--whatsapp)]" />
            Namaste 🙏 — AI for every business
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Future-Ready{" "}
            <span className="text-gradient">AI Solutions</span>
            <br />
            for Ambitious Businesses.
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            {CONTACT.tagline} From AI voice calling to automation, web, video & people
            management — we engineer growth, you focus on your business.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("cta_click", { source: "hero", channel: "whatsapp" })}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              onClick={() => trackEvent("cta_click", { source: "hero", channel: "call" })}
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[color:var(--neon-blue)]" />
              AI-First Engineering
            </div>
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[color:var(--neon-violet)]" />
              Trusted by Local Businesses
            </div>
            <div className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-[color:var(--neon-pink)]" />
              24/7 Support
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <div className="flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="h-8 w-px animate-pulse bg-gradient-to-b from-foreground/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
