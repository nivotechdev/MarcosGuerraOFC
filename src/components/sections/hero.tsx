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

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0)_60%)]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl leading-tight md:text-6xl font-extrabold tracking-wide text-white [text-shadow:2px_2px_8px_rgba(0,0,0,0.8)]">
              <span className="text-primary">O Sorriso que Você Merece,</span> a Experiência que Você Exige.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed tracking-wide [text-shadow:2px_2px_8px_rgba(0,0,0,0.8)]">
              Odontologia digital avançada para tratamentos rápidos, precisos e com o máximo de conforto.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link href="#contact" passHref>
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-base font-bold bg-white text-primary hover:bg-white/90 transition-transform hover:scale-105 shadow-[0_0_15px_rgba(0,188,212,0.5)] hover:shadow-[0_0_25px_rgba(0,188,212,0.7)]"
                >
                  Agendar Avaliação Premium
                </Button>
              </Link>
              <Link href="#treatments" passHref>
                  <Button size="lg" variant="outline" className="h-14 px-8 text-base font-bold text-white border-white hover:bg-white/10 transition-transform hover:scale-105">
                    Conhecer Tratamentos
                  </Button>
              </Link>
            </div>
          </div>
      </div>
    </section>
  );
}
