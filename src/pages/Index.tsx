import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TechStack from "@/components/TechStack";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <Features />
      <TechStack />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;