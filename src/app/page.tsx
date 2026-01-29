import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import Process from "@/components/sections/process";
import SocialProof from "@/components/sections/social-proof";
import Faq from "@/components/sections/faq";
import Cta from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import WhyUs from "@/components/sections/why-us";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyUs />
        <Benefits />
        <Process />
        <SocialProof />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
