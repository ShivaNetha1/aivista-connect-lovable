import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

const GA_ID = "G-XXXXXXXXXX"; // TODO: replace with your real GA4 Measurement ID

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SRN Consultancy — Future-Ready AI Solutions for Your Business" },
      {
        name: "description",
        content:
          "SRN Consultancy builds AI automation, voice calling, web, video & employee management solutions that grow your business. Chat on WhatsApp.",
      },
      { name: "author", content: "SRN Consultancy" },
      { name: "theme-color", content: "#05060f" },
      { property: "og:title", content: "SRN Consultancy — Future-Ready AI Solutions for Your Business" },
      {
        property: "og:description",
        content:
          "Premium AI solutions for ambitious businesses. Automation, voice calling, web, video & people management.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SRN Consultancy — Future-Ready AI Solutions for Your Business" },
      {
        name: "twitter:description",
        content: "Future-ready AI solutions for ambitious businesses.",
      },
      { name: "description", content: "SRN AI Futures is a futuristic, single-page AI business website designed for lead generation." },
      { property: "og:description", content: "SRN AI Futures is a futuristic, single-page AI business website designed for lead generation." },
      { name: "twitter:description", content: "SRN AI Futures is a futuristic, single-page AI business website designed for lead generation." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dd11b069-eff3-459b-add4-bf21fbbe36cd/id-preview-85d8e0c1--79791dc6-4cbc-46d6-8ba0-a8529aa5d4e0.lovable.app-1777036508492.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/dd11b069-eff3-459b-add4-bf21fbbe36cd/id-preview-85d8e0c1--79791dc6-4cbc-46d6-8ba0-a8529aa5d4e0.lovable.app-1777036508492.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`,
        async: true,
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}', { send_page_view: true });`,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
