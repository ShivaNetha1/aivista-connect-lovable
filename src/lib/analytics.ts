// Lightweight GA4 helper. Replace G-XXXXXXXXXX in __root.tsx with your real ID.
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(
  name: string,
  params: Record<string, unknown> = {},
): void {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", name, params);
  } catch {
    /* swallow */
  }
}

/** Fires scroll_depth events at 25/50/75/100% — call once on mount. */
export function initScrollDepthTracking(): () => void {
  if (typeof window === "undefined") return () => {};
  const fired = new Set<number>();
  const thresholds = [25, 50, 75, 100];

  const onScroll = () => {
    const doc = document.documentElement;
    const scrolled = window.scrollY + window.innerHeight;
    const total = doc.scrollHeight;
    if (total <= 0) return;
    const pct = Math.min(100, Math.round((scrolled / total) * 100));
    for (const t of thresholds) {
      if (pct >= t && !fired.has(t)) {
        fired.add(t);
        trackEvent("scroll_depth", { percent: t });
      }
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  return () => window.removeEventListener("scroll", onScroll);
}
