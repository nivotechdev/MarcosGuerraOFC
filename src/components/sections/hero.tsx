'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from 'react';

export default function Hero() {
  const heroImageDesktop = PlaceHolderImages.find(img => img.id === "hero-background");
  const heroImageMobile = PlaceHolderImages.find(img => img.id === "hero-background-mobile");
  const whatsappUrl = "https://wa.me/555432234237?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

  return (
    <section 
      id="home" 
      className="relative w-full h-screen flex items-center justify-center text-center text-white md:justify-start md:text-left"
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

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl leading-[1.2] md:text-6xl font-bold tracking-tight text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              A Experiência que Você Exige, <span className="text-white">O Sorriso que Você Merece.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white max-w-2xl leading-relaxed tracking-wide [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              Odontologia digital avançada para tratamentos rápidos, precisos e com o máximo de conforto.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <Link href={whatsappUrl} passHref target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="h-14 px-8 text-base font-bold transition-transform hover:scale-105 w-full"
                >
                  Agendar Avaliação Premium
                </Button>
              </Link>
            </div>
          </div>
      </div>
    </section>
  );
}
