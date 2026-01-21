import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FreshTrackFeature } from "@/components/FreshTrackFeature";
import { LabSection } from "@/components/LabSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FreshTrackFeature />
      <LabSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
