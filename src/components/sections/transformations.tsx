'use client';

import Image from "next/image";
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const transformationCases = [
  {
    title: "Tratamento Ortodôntico",
    before: PlaceHolderImages.find(img => img.id === "before-smile"),
    after: PlaceHolderImages.find(img => img.id === "after-smile"),
  },
  {
    title: "Implantes Estéticos",
    before: PlaceHolderImages.find(img => img.id === "before-smile"),
    after: PlaceHolderImages.find(img => img.id === "after-smile"),
  },
  {
    title: "Clareamento Avançado",
    before: PlaceHolderImages.find(img => img.id === "before-whitening"),
    after: PlaceHolderImages.find(img => img.id === "after-whitening"),
  },
   {
    title: "Reabilitação Oral Completa",
    before: PlaceHolderImages.find(img => img.id === "before-smile"),
    after: PlaceHolderImages.find(img => img.id === "after-smile"),
  },
  {
    title: "Lentes de Contato",
    before: PlaceHolderImages.find(img => img.id === "before-whitening"),
    after: PlaceHolderImages.find(img => img.id === "after-whitening"),
  },
  {
    title: "Facetas em Resina",
    before: PlaceHolderImages.find(img => img.id === "before-smile"),
    after: PlaceHolderImages.find(img => img.id === "after-smile"),
  },
];

export default function Transformations() {
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
    <section id="transformations" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary">Sua Transformação Começa Aqui.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Veja o poder da excelência em odontologia através dos resultados dos nossos pacientes.
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
              {transformationCases.map((t, index) => (
                t.before && t.after && (
                  <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-[380px] flex flex-col bg-card">
                        <CardContent className="p-2 md:p-3 space-y-2 flex-grow flex flex-col">
                          <h3 className="font-heading text-center font-bold text-foreground text-base shrink-0">{t.title}</h3>
                          <div className="flex flex-col gap-px flex-grow items-stretch">
                            <div className="relative flex-1">
                              <Image
                                src={t.before.imageUrl}
                                alt={`Antes - ${t.title}`}
                                fill
                                className="object-cover rounded-xl"
                                loading="lazy"
                                data-ai-hint={t.before.imageHint}
                                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 33vw"
                              />
                              <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground border-none text-xs px-2 py-0.5">Antes</Badge>
                            </div>
                            <div className="shrink-0 h-px w-full bg-accent" />
                            <div className="relative flex-1">
                              <Image
                                src={t.after.imageUrl}
                                alt={`Depois - ${t.title}`}
                                fill
                                className="object-cover rounded-xl"
                                loading="lazy"
                                data-ai-hint={t.after.imageHint}
                                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 33vw"
                              />
                              <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground border-none text-xs px-2 py-0.5">Depois</Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )
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
