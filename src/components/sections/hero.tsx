'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from 'react';

export default function Hero() {
  const [showImage, setShowImage] = React.useState(false);

  React.useEffect(() => {
    setShowImage(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full h-[90vh] min-h-[600px] flex items-center bg-background"
    >
      <div className="absolute inset-0 overflow-hidden z-0">
        {showImage && (
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out"
              style={{
                  backgroundImage: `url('https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/logos/Whisk_f361a85444cc92d9af5402f3663c2926dr.jpeg')`,
                  transform: 'scale(1.1)',
                  opacity: 0,
                  animation: 'parallax-zoom-in 10s ease-out forwards, parallax-scroll 40s linear infinite alternate',
              }}
              data-ai-hint="luxury dental clinic"
            >
              <div className="absolute inset-0 bg-background/50"></div>
            </div>
        )}
      </div>

      <style jsx>{`
        @keyframes parallax-zoom-in {
          from {
            transform: scale(1.1);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes parallax-scroll {
            from {
                transform: scale(1) translateX(0);
            }
            to {
                transform: scale(1.05) translateX(-20px);
            }
        }
      `}</style>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div 
            className="max-w-3xl text-left transition-all duration-1000 ease-out"
            style={{
                opacity: showImage ? 1 : 0,
                transform: showImage ? 'translateY(0)' : 'translateY(20px)',
            }}
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
                <Button size="lg" variant="ghost" className="h-12 px-8 text-base text-foreground">
                  Conhecer Tratamentos
                </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
