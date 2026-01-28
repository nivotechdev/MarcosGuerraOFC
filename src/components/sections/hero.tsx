import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === "clinic-detail");

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center bg-background pt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-0"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-5xl sm:text-7xl font-semibold tracking-tight text-foreground">
              Redescubra o prazer de sorrir com confiança.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-xl mx-auto md:mx-0">
              No consultório de Marcos Guerra, aliamos tecnologia suíça e um atendimento humano para transformar sua saúde bucal em uma experiência de bem-estar.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
              <Link href="#contact" passHref>
                <Button size="lg" className="text-lg px-8 py-4 w-full sm:w-auto max-w-xs sm:max-w-none">
                  Quero transformar meu sorriso
                </Button>
              </Link>
              <Link href="#treatments" passHref>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 w-full sm:w-auto max-w-xs sm:max-w-none border-2 border-foreground/20 hover:bg-foreground hover:text-background">
                  Conheça os tratamentos <ArrowRight className="ml-2"/>
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
