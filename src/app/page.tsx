import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import Location from "@/components/sections/location";
import Cta from "@/components/sections/cta";
import Footer from "@/components/sections/footer";
import Specialist from "@/components/sections/why-us";
import Transformations from "@/components/sections/transformations";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Specialist />
        <Benefits />
        <Transformations />
        <Location />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
