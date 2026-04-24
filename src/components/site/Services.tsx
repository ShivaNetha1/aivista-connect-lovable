import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";
import automationImg from "@/assets/services/automation.jpg";
import voiceImg from "@/assets/services/voice.jpg";
import webImg from "@/assets/services/web.jpg";
import videoImg from "@/assets/services/video.jpg";
import employeesImg from "@/assets/services/employees.jpg";

const services = [
  {
    img: automationImg,
    title: "AI Automation Workflows",
    tag: "Save hours every day",
    desc: "Automate repetitive tasks across sales, support and operations. Connect your tools, eliminate manual work, and let AI handle the busywork 24/7.",
    bullets: ["Lead routing & follow-ups", "Cross-tool integrations", "Smart approval flows"],
  },
  {
    img: voiceImg,
    title: "AI Voice Calling",
    tag: "Lead generation on autopilot",
    desc: "Human-like AI voice agents that call, qualify and book leads. Fully integrated with your CRM — never miss an opportunity again.",
    bullets: ["Outbound lead generation", "CRM integration", "24/7 voice assistants"],
  },
  {
    img: webImg,
    title: "AI-Powered Web Development",
    tag: "Websites that convert",
    desc: "High-performance websites with AI built in — from chat assistants to personalized journeys. SEO-ready, lightning fast, mobile-perfect.",
    bullets: ["Conversion-focused design", "Built-in AI chat", "SEO + speed optimized"],
  },
  {
    img: videoImg,
    title: "AI Video Advertising",
    tag: "Content that scales",
    desc: "AI-generated and edited video ads tailored to your audience. We handle creation, targeting, and optimization end-to-end.",
    bullets: ["AI content creation", "Audience targeting", "Performance optimization"],
  },
  {
    img: employeesImg,
    title: "Employee Management Tools",
    tag: "AI workplace systems",
    desc: "Smart attendance, performance, and task tools powered by AI — so your team focuses on growth, not paperwork.",
    bullets: ["Attendance & payroll", "Performance insights", "Task automation"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[color:var(--neon-violet)]">
            Our Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            Everything you need to <span className="text-gradient">grow with AI</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Five powerful capabilities. One unified team. Every service includes setup,
            training, and ongoing support.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
              className="group relative overflow-hidden rounded-3xl glass"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-widest text-foreground">
                  {s.tag}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold sm:text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-3">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="rounded-lg border border-border bg-muted/30 px-3 py-2 text-xs text-muted-foreground"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("cta_click", {
                        source: "service_card",
                        service: s.title,
                        channel: "whatsapp",
                      })
                    }
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
                  >
                    <MessageCircle className="h-3.5 w-3.5" />
                    Get Free Consultation
                  </a>
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("cta_click", {
                        source: "service_card_secondary",
                        service: s.title,
                        channel: "whatsapp",
                      })
                    }
                    className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Discuss your use case <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ boxShadow: "var(--shadow-glow-violet)" }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
