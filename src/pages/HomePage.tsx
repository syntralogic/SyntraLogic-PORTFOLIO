import { lazy, Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { SEO } from "@/components/seo/SEO";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";

// Below-the-fold sections are loaded in separate chunks to keep the first load fast.
const PortfolioSection = lazy(() =>
  import("@/sections/PortfolioSection").then((m) => ({ default: m.PortfolioSection })),
);
const ServicesSection = lazy(() =>
  import("@/sections/ServicesSection").then((m) => ({ default: m.ServicesSection })),
);
const WhyChooseUsSection = lazy(() =>
  import("@/sections/WhyChooseUsSection").then((m) => ({ default: m.WhyChooseUsSection })),
);
const TechnologiesSection = lazy(() =>
  import("@/sections/TechnologiesSection").then((m) => ({ default: m.TechnologiesSection })),
);
const ClientsSection = lazy(() =>
  import("@/sections/ClientsSection").then((m) => ({ default: m.ClientsSection })),
);
const ClientHuntersSection = lazy(() =>
  import("@/sections/ClientHuntersSection").then((m) => ({ default: m.ClientHuntersSection })),
);
const FAQsSection = lazy(() =>
  import("@/sections/FAQsSection").then((m) => ({ default: m.FAQsSection })),
);
const ContactSection = lazy(() =>
  import("@/sections/ContactSection").then((m) => ({ default: m.ContactSection })),
);
const Footer = lazy(() =>
  import("@/components/layout/Footer").then((m) => ({ default: m.Footer })),
);

export default function HomePage() {
  return (
    <>
      <SEO />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <Suspense fallback={<div className="min-h-screen" style={{ backgroundColor: "#0B0B0B" }} />}>
          <PortfolioSection />
          <ServicesSection />
          <WhyChooseUsSection />
          <TechnologiesSection />
          <ClientsSection />
          <ClientHuntersSection />
          <FAQsSection />
          <ContactSection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
