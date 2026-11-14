import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/seo/SEO";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { WhyChooseUsSection } from "@/sections/WhyChooseUsSection";
import { PortfolioSection } from "@/sections/PortfolioSection";
import { TechnologiesSection } from "@/sections/TechnologiesSection";
import { ClientsSection } from "@/sections/ClientsSection";
import { ClientHuntersSection } from "@/sections/ClientHuntersSection";
import { FAQsSection } from "@/sections/FAQsSection";
import { ContactSection } from "@/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <SEO />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TechnologiesSection />
        <ClientsSection />
        <ClientHuntersSection />
        <FAQsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
