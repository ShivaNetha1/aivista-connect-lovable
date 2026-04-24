import { motion } from "framer-motion";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="aurora-bg opacity-40" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--neon-violet)]">
            Contact
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Swagatam — let’s <span className="text-gradient">build together</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            No forms. No waiting. Reach out on WhatsApp or call us directly — we usually
            reply within minutes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: MapPin,
              title: "Visit Us",
              lines: [CONTACT.address.line1, CONTACT.address.line2],
            },
            {
              icon: Mail,
              title: "Email",
              lines: [CONTACT.email],
              href: `mailto:${CONTACT.email}`,
            },
            {
              icon: Phone,
              title: "Call",
              lines: [CONTACT.phoneDisplay],
              href: `tel:${CONTACT.phoneTel}`,
              channel: "call" as const,
            },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl glass p-6"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <div className="mt-2 space-y-1 text-sm text-muted-foreground">
                {c.href ? (
                  <a
                    href={c.href}
                    onClick={() =>
                      c.channel &&
                      trackEvent("cta_click", { source: "contact_card", channel: c.channel })
                    }
                    className="transition-colors hover:text-foreground"
                  >
                    {c.lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </a>
                ) : (
                  c.lines.map((l) => <p key={l}>{l}</p>)
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl glass p-8 text-center sm:p-12">
          <h3 className="font-display text-2xl font-bold sm:text-3xl">
            Ready to <span className="text-gradient">get started?</span>
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Tap below — we’ll respond on WhatsApp instantly or pick up your call right away.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("cta_click", { source: "contact_cta", channel: "whatsapp" })}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              onClick={() => trackEvent("cta_click", { source: "contact_cta", channel: "call" })}
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
            >
              <Phone className="h-4 w-4" />
              Call {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
