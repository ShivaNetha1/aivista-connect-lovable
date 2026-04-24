
# SRN Consultancy — Premium AI Single-Page Website

A luxury, futuristic, single-page site built with TanStack Start + React + Tailwind v4, with a Three.js animated hero, smooth scroll, parallax, glow/gradient UI, and WhatsApp + Call as the only lead-capture channels.

## What you'll get

A single scrolling page at `/` with smooth-scroll anchor navigation between these sections:

1. **Animated Loading Screen** — futuristic SRN logo reveal with gradient ring + progress bar
2. **Sticky Glass Navbar** — blurred, glowing on scroll, anchor links + "Chat on WhatsApp" CTA
3. **Hero** — Three.js animated 3D scene (rotating wireframe globe + particle field), aurora gradient backdrop, hook headline, dual CTA: *Chat on WhatsApp* + *Call Now*, trust badges (Namaste 🙏, AI-First, 24/7 Support)
4. **About / Why Choose Us** — 4 glowing glass cards (AI-First, Local + Global, ROI-Driven, Non-Tech Friendly)
5. **Services** — 5 detailed cards, each with a unique AI-generated hyper-realistic image, hover glow, parallax tilt:
   - AI Automation Workflows
   - AI Voice Calling (lead gen + CRM + voice assistants)
   - AI-Powered Web Development
   - AI Video Advertising
   - Employee Management Tools
6. **How It Works** — 4 simple steps (Talk → Plan → Build → Launch) on an animated connecting line, written for non-tech users; ends with WhatsApp CTA
7. **Benefits / ROI** — animated counters (e.g. 10x leads, 70% cost saved, 24/7 uptime, 3x conversions) over a parallax gradient panel
8. **Contact** — Address, Email, Phone, WhatsApp — large glowing cards, no form, prominent *Chat on WhatsApp* + *Call Now* buttons. Includes "Swagatam — let's build together"
9. **Footer** — brand mark, quick links, contact, copyright

**Persistent UI:**
- Floating WhatsApp button (bottom-right, pulsing green glow) — hover tooltip shows exactly **"Chat with SRNC"**, links to `https://wa.me/919392532757?text=Hello%20SRNC`
- Floating Call button (above WhatsApp on mobile) — `tel:+919392532757`
- Scroll progress bar at top

## Visual direction (3D Heavy / Aurora)

- **Background:** near-black `#05060f` with soft aurora blue→violet→pink gradient blobs
- **Accents:** neon blue `#3b82f6` → violet `#8b5cf6` → pink `#ec4899` gradients
- **Surfaces:** glassmorphism cards with backdrop-blur, 1px gradient borders, soft outer glow
- **Typography:** Space Grotesk (headings) + Inter (body), tight tracking for premium feel
- **Animations:** Framer Motion for section reveals, parallax, hover tilt, counters; Three.js for hero 3D; CSS for glow pulses and gradient drift; `scroll-behavior: smooth`

## WhatsApp & Call integration (per spec)

- WhatsApp link everywhere: `https://wa.me/919392532757?text=Hello%20SRNC`
- Call link everywhere: `tel:+919392532757`
- WhatsApp CTAs: "Chat on WhatsApp", "Get Free Consultation"
- Call CTA: "Call Now — +91 93925 32757"
- Floating WhatsApp tooltip text is locked to **"Chat with SRNC"**

## Google Analytics (GA4)

- Inject `gtag.js` in `__root.tsx` head with placeholder `G-XXXXXXXXXX` (you swap in your real ID)
- Track: page view (auto), scroll depth (25/50/75/100%), WhatsApp clicks, Call clicks, section visibility, session duration (auto)
- Centralized `trackEvent()` helper used by every CTA

## Imagery (AI-generated, one per service)

Generate 5 hyper-realistic images via the AI image gateway (Nano Banana) at build/setup, save under `src/assets/services/`, and import them into the Services cards:
- `automation.png` — futuristic dashboards & workflow nodes
- `voice.png` — human silhouette in conversation with glowing AI voice waveform
- `web.png` — futuristic holographic coding interface
- `video.png` — neon content-creation studio with cameras + AI overlays
- `employees.png` — sleek AI-powered workplace control room

Each image gets a gradient overlay + glow on hover.

## Technical plan

**New files**
- `src/routes/index.tsx` — replace placeholder with full single-page composition
- `src/routes/__root.tsx` — add GA4 script tags, preconnect, font links, update meta (title, description, og:title, og:description, og:image)
- `src/components/site/LoadingScreen.tsx`
- `src/components/site/Navbar.tsx`
- `src/components/site/Hero.tsx` (mounts Three.js scene)
- `src/components/site/ThreeScene.tsx` (wireframe globe + particles, dynamic import, reduced-motion fallback)
- `src/components/site/About.tsx`
- `src/components/site/Services.tsx`
- `src/components/site/HowItWorks.tsx`
- `src/components/site/Benefits.tsx` (animated counters)
- `src/components/site/Contact.tsx`
- `src/components/site/Footer.tsx`
- `src/components/site/FloatingCTAs.tsx` (WhatsApp + Call + tooltip)
- `src/components/site/ScrollProgress.tsx`
- `src/lib/analytics.ts` — `trackEvent()`, scroll-depth tracker, declares `window.gtag`
- `src/lib/contact.ts` — single source of truth for phone, WhatsApp URL, email, address
- `src/assets/services/*.png` — 5 generated images

**Files updated**
- `src/styles.css` — add Space Grotesk + Inter via `@import url(...)`, add dark futuristic theme tokens (override `--background` etc. for site-wide dark), keyframes for `glow-pulse`, `aurora-drift`, `float`, `gradient-x`, utility `.glass`, `.text-gradient`, `.glow-ring`. Set `html { scroll-behavior: smooth }`.

**Dependencies to add**
- `three` + `@types/three` — hero 3D
- `framer-motion` — section reveals, parallax, counters, hover tilt

**Performance & SEO**
- Three.js scene dynamic-imported (client-only) so SSR stays fast; static fallback gradient before mount
- Honor `prefers-reduced-motion` (skip 3D + heavy animations)
- Per-service images compressed and lazy-loaded
- Per-page `head()` meta with full title, description, OG tags, canonical, Twitter card
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`), aria-labels on icon-only buttons
- Mobile-first layout, tested at 360 / 686 / 1024 / 1440

## Constraints honored

- Single scrolling page, anchor nav (per your choice)
- No contact form anywhere — only WhatsApp + Call
- WhatsApp tooltip text is exactly "Chat with SRNC"
- Minimal Telugu/Hindi flavor: "Namaste 🙏" in hero badge, "Swagatam" in contact intro — nothing more

## Out of scope (ask if you want these later)

- Real GA4 ID (you'll paste it in to replace `G-XXXXXXXXXX`)
- Multi-language toggle, blog, case studies, separate `/services` route
- Backend, database, or email capture
