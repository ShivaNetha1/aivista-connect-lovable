import { useState } from "react";
import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

/** WhatsApp logo as inline SVG (no extra dep). */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M19.11 17.21c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.5-.5-.68-.5-.18-.01-.38-.01-.58-.01-.2 0-.53.08-.81.38-.28.3-1.06 1.04-1.06 2.53s1.09 2.94 1.24 3.14c.15.2 2.14 3.27 5.18 4.59.72.31 1.29.5 1.73.64.73.23 1.39.2 1.91.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35zM16.02 5.33c-5.91 0-10.71 4.8-10.71 10.71 0 1.89.49 3.74 1.43 5.36L5 27.33l6.07-1.59a10.7 10.7 0 0 0 5.95 1.81h.01c5.9 0 10.71-4.8 10.71-10.71s-4.81-10.71-10.72-10.71z"
      />
    </svg>
  );
}

export function FloatingCTAs() {
  const [hover, setHover] = useState(false);

  return (
    <>
      {/* Call (mobile + small screens, sits above WhatsApp) */}
      <a
        href={`tel:${CONTACT.phoneTel}`}
        onClick={() => trackEvent("cta_click", { source: "floating", channel: "call" })}
        aria-label={`Call ${CONTACT.phoneDisplay}`}
        className="fixed bottom-24 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-transform hover:scale-110 sm:bottom-6 sm:right-24"
      >
        <Phone className="h-5 w-5" />
      </a>

      {/* WhatsApp */}
      <div
        className="fixed bottom-6 right-5 z-40 flex items-center gap-3"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span
          className={`pointer-events-none whitespace-nowrap rounded-full glass px-3 py-1.5 text-xs font-medium shadow-glow transition-all duration-300 ${
            hover ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
          }`}
        >
          Chat with SRNC
        </span>
        <a
          href={CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("cta_click", { source: "floating", channel: "whatsapp" })}
          aria-label="Chat with SRNC on WhatsApp"
          className="relative inline-flex h-14 w-14 items-center justify-center rounded-full text-white animate-glow-pulse transition-transform hover:scale-110"
          style={{ background: "var(--whatsapp)" }}
        >
          <WhatsAppIcon className="h-7 w-7" />
        </a>
      </div>
    </>
  );
}
