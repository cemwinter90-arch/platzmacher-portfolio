import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactCta } from "@/components/sections/ContactCta";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TrustSection } from "@/components/sections/TrustSection";

export default function Home() {
  return (
    <div id="top" className="min-h-svh bg-[var(--surface-page)]">
      <Header />
      <main>
        <HeroSection />
        <ServicesOverview />
        <ResultsSection />
        <ProcessSection />
        <TrustSection />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
