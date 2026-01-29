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
    title: "Lentes de Contato Dental",
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
    before: PlaceHolderImages.find(img => img.id === "before-smile"),
    after: PlaceHolderImages.find(img => img.id === "after-smile"),
  },
   {
    title: "Reabilitação Oral Completa",
    before: PlaceHolderImages.find(img => img.id === "before-smile"),
    after: PlaceHolderImages.find(img => img.id === "after-smile"),
  }
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
    <section id="transformations" className="py-20 sm:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">Sua Transformação Começa Aqui.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Veja o poder da excelência em odontologia através dos resultados dos nossos pacientes.
          </p>
        </div>

        <div className="mt-16">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {transformationCases.map((t, index) => (
                t.before && t.after && (
                  <CarouselItem key={index} className="pl-4 basis-9/10 lg:basis-4/5">
                    <div className="p-1 h-full">
                      <Card className="rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-[60vh] md:h-full flex flex-col">
                        <CardContent className="p-2 md:p-4 space-y-2 flex-grow flex flex-col">
                          <h3 className="text-center font-sans font-bold text-foreground text-base md:text-lg shrink-0">{t.title}</h3>
                          <div className="flex flex-col gap-2 flex-grow items-stretch">
                            <div className="relative flex-1">
                              <Image
                                src={t.before.imageUrl}
                                alt={`Antes - ${t.title}`}
                                fill
                                className="object-cover rounded-xl"
                                loading="lazy"
                                data-ai-hint={t.before.imageHint}
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                              />
                              <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground border-none">Antes</Badge>
                            </div>
                            <div className="shrink-0 h-px w-full bg-primary" />
                            <div className="relative flex-1">
                              <Image
                                src={t.after.imageUrl}
                                alt={`Depois - ${t.title}`}
                                fill
                                className="object-cover rounded-xl"
                                loading="lazy"
                                data-ai-hint={t.after.imageHint}
                                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                              />
                              <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground border-none">Depois</Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              ))}
            </CarouselContent>
            <CarouselPrevious className="h-11 w-11 bg-white/50 text-primary border-none hover:bg-white/75 backdrop-blur-sm left-4 z-10 disabled:opacity-0" />
            <CarouselNext className="h-11 w-11 bg-white/50 text-primary border-none hover:bg-white/75 backdrop-blur-sm right-4 z-10 disabled:opacity-0" />
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
