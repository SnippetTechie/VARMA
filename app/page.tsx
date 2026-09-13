import { InstallModalProvider } from "@/components/InstallModalProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { AgentDemo } from "@/components/AgentDemo";
import { PrivacyDemo } from "@/components/PrivacyDemo";
import { Architecture } from "@/components/Architecture";
import { SecuritySection } from "@/components/SecuritySection";
import { OpenSource } from "@/components/OpenSource";
import { InstallSection } from "@/components/InstallSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <InstallModalProvider>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <ProblemSection />
        <SolutionSection />
        <FeatureGrid />
        <AgentDemo />
        <PrivacyDemo />
        <Architecture />
        <SecuritySection />
        <OpenSource />
        <InstallSection />
      </main>
      <Footer />
    </InstallModalProvider>
  );
}
