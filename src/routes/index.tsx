import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Benefits } from "@/components/site/Benefits";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingCTAs } from "@/components/site/FloatingCTAs";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { initScrollDepthTracking } from "@/lib/analytics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SRN Consultancy — AI Solutions for Ambitious Businesses" },
      {
        name: "description",
        content:
          "Premium AI automation, voice calling, web, video & employee tools. Built in Telangana, designed for the world. Chat on WhatsApp today.",
      },
      { property: "og:title", content: "SRN Consultancy — AI Solutions for Ambitious Businesses" },
      {
        property: "og:description",
        content:
          "Premium AI automation, voice calling, web, video & employee tools — built to convert.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const cleanup = initScrollDepthTracking();
    return cleanup;
  }, []);

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Benefits />
        <Contact />
      </main>
      <Footer />
      <FloatingCTAs />
    </>
  );
}
