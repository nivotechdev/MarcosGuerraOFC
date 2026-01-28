import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-smile");

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight leading-tight text-foreground">
              Transformando Sorrisos, Elevando Vidas.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-xl mx-auto md:mx-0">
              Tecnologia avançada e cuidado incomparável para a sua saúde dentária e estética perfeita.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link href="#contact" passHref>
                <Button size="lg" className="text-lg px-10 py-7">
                  Agendar Consulta
                </Button>
              </Link>
              <Link href="#treatments" passHref>
                <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-2 border-foreground/20 hover:bg-foreground hover:text-background">
                  Explore Nossos Tratamentos <ArrowRight className="ml-2"/>
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-96 md:h-full min-h-[50vh]">
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
