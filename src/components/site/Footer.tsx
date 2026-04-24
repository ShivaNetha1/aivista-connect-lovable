import { CONTACT } from "@/lib/contact";

const cols = [
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "How It Works", href: "#how" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI Automation", href: "#services" },
      { label: "AI Voice Calling", href: "#services" },
      { label: "Web Development", href: "#services" },
      { label: "Video Advertising", href: "#services" },
      { label: "Employee Tools", href: "#services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
                <span className="font-display text-sm font-bold text-primary-foreground">S</span>
              </span>
              <span className="font-display text-base font-semibold">
                SRN <span className="text-gradient">Consultancy</span>
              </span>
            </a>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              {CONTACT.tagline}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              {CONTACT.address.line1}, {CONTACT.address.line2}
            </p>
            <p className="text-sm text-muted-foreground">
              <a href={`mailto:${CONTACT.email}`} className="hover:text-foreground">
                {CONTACT.email}
              </a>{" "}
              ·{" "}
              <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-foreground">
                {CONTACT.phoneDisplay}
              </a>
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} SRN Consultancy. All rights reserved.</p>
          <p>Crafted with AI in Telangana, India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
