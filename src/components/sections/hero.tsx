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
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/30 to-transparent z-0"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl leading-[1.2] md:text-6xl font-semibold tracking-tight">
            A excelência da odontologia moldada para o seu sorriso.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Tecnologia de precisão e cuidado humano sob a assinatura de Marcos Guerra. Descubra uma nova experiência em saúde bucal.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#contact" passHref>
              <Button size="lg" className="text-lg px-8 py-4 w-full sm:w-auto">
                Agendar Avaliação
              </Button>
            </Link>
            <Link href="#treatments" passHref>
                <Button variant="link" size="lg" className="text-white hover:text-white/80 text-lg">
                    Conhecer Tratamentos <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
