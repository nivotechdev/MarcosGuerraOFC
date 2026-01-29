'use client';

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from 'react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-background");

  const imageComponent = heroImage ? (
    <div className="relative p-1 border-4 border-primary rounded-[20px] shadow-[0_20px_40px_rgba(0,188,212,0.15)]">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        width={600}
        height={450}
        className="rounded-xl object-cover w-full h-full"
        data-ai-hint={heroImage.imageHint}
        priority
      />
    </div>
  ) : null;

  return (
    <section 
      id="home" 
      className="relative w-full flex items-center bg-background py-24 sm:py-32"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="font-serif text-4xl leading-tight md:text-5xl font-medium tracking-tight text-foreground">
              O Sorriso que Você Merece, a Experiência que Você Exige.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/90 max-w-2xl leading-relaxed">
              Odontologia digital avançada para tratamentos rápidos, precisos e com o máximo de conforto.
            </p>

            {/* Image for Mobile */}
            <div className="mt-8 md:hidden">
              {imageComponent}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
              <Link href="#contact" passHref>
                <Button size="lg" className="h-12 px-8 text-base">Agendar Avaliação Premium</Button>
              </Link>
              <Link href="#treatments" passHref>
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base text-foreground border-primary">
                    Conhecer Tratamentos
                  </Button>
              </Link>
            </div>
          </div>
          
          {/* Image for Desktop */}
          <div className="hidden md:block">
            {imageComponent}
          </div>
        </div>
      </div>
    </section>
  );
}
