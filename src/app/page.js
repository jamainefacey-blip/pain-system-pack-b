import HeroSection from "@/components/sections/HeroSection.jsx";
import ServicesOffering from "@/components/sections/ServicesOffering.jsx";
import AboutSection from "@/components/sections/AboutSection.jsx";
import ContactSection from "@/components/sections/ContactSection.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOffering />
      <AboutSection />
      <ContactSection />
    </>
  );
}