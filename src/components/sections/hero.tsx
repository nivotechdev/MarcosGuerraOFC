import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === "specialist-photo");

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center bg-background pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center">
            <h1 className="font-headline text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight leading-tight text-foreground">
              MARCOS GUERRA
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-xl mx-auto">
              Odontologia de Alta Performance e Estética de Precisão.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="#contact" passHref>
                <Button size="lg" className="text-lg px-6 py-4 w-full sm:w-auto">
                  Agendar Consulta
                </Button>
              </Link>
              <Link href="#treatments" passHref>
                <Button size="lg" variant="outline" className="text-lg px-6 py-4 w-full sm:w-auto border-2 border-foreground/20 hover:bg-foreground hover:text-background">
                  Explore Nossos Tratamentos <ArrowRight className="ml-2"/>
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-96 md:h-full min-h-[60vh]">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
                data-ai-hint={heroImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
