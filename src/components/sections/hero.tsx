
'use client';

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const videoUrl = "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/marcosguerra/Use_the_provided_202602021712_t16we.mp4";
  const whatsappUrl = "https://wa.me/5554991696666?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const y = useTransform(scrollY, [0, 100], [0, -20]);

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ willChange: 'transform' }}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />

      <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            {/* Elegant Main Name - Fades out on scroll */}
            <motion.div 
              style={{ opacity, y }}
              className="mb-8"
            >
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal tracking-wide text-white mb-2 drop-shadow-lg">
                Dr. Marcos Guerra
              </h2>
              <div className="h-px w-24 bg-white/40 mx-auto" />
            </motion.div>

            <h1 className="font-heading text-4xl leading-tight md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl">
              O Sorriso que Você Merece.
            </h1>
            
            <p className="mt-6 md:mt-8 text-lg md:text-2xl text-white/90 max-w-2xl leading-relaxed font-light px-4">
              Ortodontia avançada para tratamentos precisos e confortáveis.
            </p>

            <div className="mt-10 md:mt-12 flex flex-col items-center gap-4 w-full">
              <Link href={whatsappUrl} passHref target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="h-16 px-10 text-lg font-bold transition-all duration-300 hover:scale-105 w-full rounded-full shadow-glow"
                >
                  Agendar Consulta
                </Button>
              </Link>
              
              <div className="flex items-center gap-2 text-white/80 text-sm md:text-base font-medium">
                <span>⭐ +1000 Sorrisos Transformados</span>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
