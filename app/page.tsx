import Header from "@/components/Header";
import WhatsAppHero from "@/components/WhatsAppHero";
import CoreCapabilitiesSection from "@/components/CoreCapabilitiesSection";
import UseCasesThreeChannelsSection from "@/components/UseCasesThreeChannelsSection";
import IndustrySolutionsSection from "@/components/IndustrySolutionsSection";
import CaseStudySection from "@/components/CaseStudySection";
import DeveloperApiSection from "@/components/DeveloperApiSection";
import PlanFeaturesSection from "@/components/PlanFeaturesSection";
import FaqSection from "@/components/FaqSection";
import GlobalReachSection from "@/components/GlobalReachSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-[#00D2FF] selection:text-black">
      <Header />
      <WhatsAppHero />
      <CoreCapabilitiesSection />
      <UseCasesThreeChannelsSection />
      <IndustrySolutionsSection />
      <CaseStudySection />
      <DeveloperApiSection />
      <PlanFeaturesSection />
      <FaqSection />
      <GlobalReachSection />
      <ContactForm />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
