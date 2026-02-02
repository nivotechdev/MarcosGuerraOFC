'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Gem, Moon, ShieldCheck, Sparkles } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const benefits = [
    {
        icon: Award,
        title: "Ortodontia – Aparelhos autoligados",
        description: "Alinhe seu sorriso com aparelhos autoligados modernos, que oferecem um tratamento mais rápido, confortável e discreto."
    },
    {
        icon: ShieldCheck,
        title: "Profilaxia dentária",
        description: "A prevenção é o melhor cuidado. Mantenha seu sorriso saudável com nossa limpeza dental profissional, removendo placa e tártaro."
    },
    {
        icon: Sparkles,
        title: "Clareamentos",
        description: "Obtenha um sorriso mais branco e radiante com nossas técnicas de clareamento dental, seguras e com resultados surpreendentes."
    },
    {
        icon: Moon,
        title: "Placas de bruxismo",
        description: "Proteja seus dentes contra o desgaste do bruxismo. Confeccionamos placas personalizadas para seu conforto e segurança noturna."
    },
    {
        icon: Gem,
        title: "Restaurações e facetas de resina",
        description: "Recupere a estética e função dos dentes com restaurações e facetas de resina, que mimetizam a aparência natural do seu sorriso."
    }
];

export default function Benefits() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = React.useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <section id="treatments" className="py-20 sm:py-32 bg-secondary border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary tracking-tight">Nossos Tratamentos</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Conheça algumas de nossas especialidades, projetadas para oferecer o melhor cuidado para o seu sorriso.
          </p>
        </div>
        <div className="mt-16">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-7xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {benefits.map((benefit, index) => (
                <CarouselItem key={index} className="pl-4 basis-11/12 sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card
                      className="text-center shadow-soft transition-all duration-300 flex flex-col group h-full bg-card rounded-2xl border border-primary hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2"
                    >
                      <CardHeader className="items-center">
                        <div className="bg-primary/10 p-3 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
                          <benefit.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-heading text-xl font-semibold">
                          {benefit.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="h-11 w-11 bg-white/50 text-primary border-none hover:bg-white/75 backdrop-blur-sm -left-4 sm:-left-8 z-10 disabled:opacity-0" />
            <CarouselNext className="h-11 w-11 bg-white/50 text-primary border-none hover:bg-white/75 backdrop-blur-sm -right-4 sm:-right-8 z-10 disabled:opacity-0" />
          </Carousel>
           <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all duration-300",
                  i === current ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Ir para o slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
