import Header from "@/components/Header";
import WhatsAppHero from "@/components/WhatsAppHero";
import WhatsAppFeatures from "@/components/WhatsAppFeatures";
import RCSSection from "@/components/RCSSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <WhatsAppHero />
      <WhatsAppFeatures />
      <RCSSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
