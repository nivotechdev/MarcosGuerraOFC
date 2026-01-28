import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === "philosophy-image");

  return (
    <section 
      id="home" 
      className="relative w-full min-h-[90vh] flex items-center justify-center text-center text-foreground"
      style={{
        backgroundImage: heroImage ? `url(${heroImage.imageUrl})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-5xl leading-snug md:text-7xl font-semibold tracking-tight" style={{textShadow: '0 1px 4px hsla(var(--background) / 0.3)'}}>
            MARCOS GUERRA
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Odontologia de Alta Performance.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Link href="#contact" passHref>
              <Button size="lg" className="text-lg px-8 py-4 h-12">
                Agendar Consulta
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
