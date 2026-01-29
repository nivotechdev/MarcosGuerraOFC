'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from 'react';

export default function Hero() {

  return (
    <section 
      id="home" 
      className="relative w-full h-[90vh] min-h-[600px] flex items-center bg-white"
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div 
            className="max-w-3xl text-left"
        >
          <h1 className="font-serif text-4xl leading-tight md:text-5xl font-medium tracking-tight text-foreground">
            O Sorriso que Você Merece, a Experiência que Você Exige.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/90 max-w-2xl leading-relaxed">
            Odontologia digital avançada para tratamentos rápidos, precisos e com o máximo de conforto.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <Link href="#contact" passHref>
              <Button size="lg" className="h-12 px-8 text-base">Agendar Avaliação Premium</Button>
            </Link>
            <Link href="#treatments" passHref>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base text-foreground">
                  Conhecer Tratamentos
                </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
