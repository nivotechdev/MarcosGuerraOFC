import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === "clinic-reception");

  return (
    <section 
      id="home" 
      className="relative w-full min-h-[90vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: heroImage ? `url(${heroImage.imageUrl})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-foreground/50 z-0"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="font-headline text-5xl sm:text-7xl font-semibold tracking-tight">
            Redescubra o prazer de sorrir com confiança.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            No consultório de Marcos Guerra, aliamos tecnologia suíça e um atendimento humano para transformar sua saúde bucal em uma experiência de bem-estar.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="#contact" passHref>
              <Button size="lg" className="text-lg px-8 py-4 w-full sm:w-auto">
                Quero transformar meu sorriso
              </Button>
            </Link>
            <Link href="#treatments" passHref>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 w-full sm:w-auto border-2 border-white/50 hover:bg-white hover:text-foreground bg-transparent text-white">
                Conheça os tratamentos <ArrowRight className="ml-2"/>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
