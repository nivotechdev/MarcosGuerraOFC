'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const videoUrl = "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/marcosguerra/Use_the_provided_202602021647_zk9b6.mp4";
  const whatsappUrl = "https://wa.me/555432234237?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

  return (
    <section 
      id="home" 
      className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl leading-tight md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl">
              A Experiência que Você Exige, <br />
              <span className="text-accent">O Sorriso que Você Merece.</span>
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
              Odontologia avançada para tratamentos rápidos, precisos e com o máximo de conforto.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href={whatsappUrl} passHref target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="h-16 px-10 text-lg font-bold transition-all duration-300 hover:scale-105 w-full rounded-full shadow-glow"
                >
                  Agendar Avaliação Premium
                </Button>
              </Link>
            </div>
          </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}
