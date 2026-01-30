'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from 'react';

export default function Hero() {
  const heroImageDesktop = PlaceHolderImages.find(img => img.id === "hero-background");
  const heroImageMobile = PlaceHolderImages.find(img => img.id === "hero-background-mobile");

  return (
    <section 
      id="home" 
      className="relative w-full h-[90vh] flex items-center justify-center text-center text-white md:justify-start md:text-left"
    >
      {/* Mobile Image */}
      {heroImageMobile && (
        <Image
          src={heroImageMobile.imageUrl}
          alt={heroImageMobile.description}
          fill
          className="object-cover object-center md:hidden"
          data-ai-hint={heroImageMobile.imageHint}
          priority
        />
      )}
      {/* Desktop Image */}
      {heroImageDesktop && (
        <Image
          src={heroImageDesktop.imageUrl}
          alt={heroImageDesktop.description}
          fill
          className="object-cover object-center hidden md:block"
          data-ai-hint={heroImageDesktop.imageHint}
          priority
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl leading-tight md:text-6xl font-bold tracking-tight text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
              O Sorriso que Você Merece, a Experiência que Você Exige.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
              Odontologia digital avançada para tratamentos rápidos, precisos e com o máximo de conforto.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link href="#contact" passHref>
                <Button size="lg" className="h-14 px-8 text-base bg-white text-primary hover:bg-white/90 shadow-lg transition-transform hover:scale-105">Agendar Avaliação Premium</Button>
              </Link>
              <Link href="#treatments" passHref>
                  <Button size="lg" variant="outline" className="h-14 px-8 text-base text-white border-white hover:bg-white/10 transition-transform hover:scale-105">
                    Conhecer Tratamentos
                  </Button>
              </Link>
            </div>
          </div>
      </div>
    </section>
  );
}
