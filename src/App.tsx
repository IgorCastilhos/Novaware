import { Hero } from "./components/Hero";
import { Problems } from "./components/Problems";
import { Solution } from "./components/Solution";
import { Benefits } from "./components/Benefits";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      <Hero />
      <Problems />
      <Solution />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
