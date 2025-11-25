
import ServicesOffering from "@/components/sections/ServicesOffering.jsx";
import AboutSection from "@/components/sections/AboutSection.jsx";
import MeetTeam from "@/components/sections/MeetTeam.jsx";
import ContactSection from "@/components/sections/ContactSection.jsx";
import Testimonials from "@/components/sections/Testimonials.jsx";

export default function Home() {
  return (
    <>
      <ServicesOffering />
      <AboutSection />
      <MeetTeam />
      <Testimonials />
      <ContactSection />
    </>
  );
}