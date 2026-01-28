import Header from "@/components/header";
import HeroSection from "@/components/sections/hero";
import SocialProof from "@/components/sections/social-proof";
import Treatments from "@/components/sections/treatments";
import ClinicGallery from "@/components/sections/clinic-gallery";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SocialProof />
        <Treatments />
        <ClinicGallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
