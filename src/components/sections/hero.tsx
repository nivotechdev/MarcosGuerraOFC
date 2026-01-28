import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-background");

  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 p-4 sm:p-6 lg:p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-shadow-lg leading-tight">
          A arte de transformar sorrisos com precisão tecnológica
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto text-shadow">
          Conquiste o sorriso que você sempre sonhou com a segurança, o conforto e a exclusividade que você merece.
        </p>
        <div className="mt-10 flex justify-center">
          <Link href="#contato" passHref>
            <Button size="lg" className="text-lg px-8 py-6">
              Agendar Consulta de Avaliação
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
