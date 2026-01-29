'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import React, { useState, useEffect } from 'react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-background");
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const imageScale = 1 + offsetY * 0.0002;
  const imageTranslateY = offsetY * 0.4;
  const textOpacity = Math.max(0, 1 - offsetY * 0.0025);
  const textTranslateY = offsetY * 0.3;

  return (
    <section 
      id="home" 
      className="relative w-full h-[90vh] min-h-[600px] flex items-center overflow-hidden"
    >
       {heroImage && (
        <div
            className="absolute inset-0 z-0"
            style={{ 
                transform: `translateY(${imageTranslateY}px) scale(${imageScale})`,
            }}
        >
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent"></div>
      
      <div 
        className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
        style={{ 
            opacity: textOpacity,
            transform: `translateY(${textTranslateY}px)`,
        }}
      >
        <div className="max-w-3xl text-left">
          <h1 className="font-serif text-4xl leading-tight md:text-6xl font-medium tracking-tight text-white" style={{textShadow: '0 2px 10px rgba(0,0,0,0.3)'}}>
            O Sorriso que Você Merece, a Experiência que Você Exige.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
            Odontologia digital avançada para tratamentos rápidos, precisos e com o máximo de conforto.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
            <Link href="#contact" passHref>
              <Button size="lg" className="h-14 px-8 text-lg">Agendar Avaliação Premium</Button>
            </Link>
            <Link href="#treatments" passHref>
                <Button size="lg" variant="ghost" className="h-14 px-8 text-lg text-white hover:bg-white/10 hover:text-white">
                  Conhecer Tratamentos
                </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
