'use client';
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Clinic() {
  const isMobile = useIsMobile();
  const galleryImages = [
    { id: "clinic-reception" },
    { id: "clinic-operatory" },
    { id: "clinic-detail" },
  ].map(item => PlaceHolderImages.find(img => img.id === item.id)).filter(Boolean);

  const desktopLayout = (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto h-[400px]">
      {galleryImages.map((image, index) => image && (
        <div key={index} className="relative">
          <Image
            src={image.imageUrl}
            alt={image.description}
            fill
            className="w-full h-full object-cover rounded-lg shadow-lg"
            sizes="(max-width: 768px) 100vw, 33vw"
            data-ai-hint={image.imageHint}
          />
        </div>
      ))}
    </div>
  );

  const mobileLayout = (
      <div className="mt-16">
        <Carousel className="w-full max-w-xs sm:max-w-sm mx-auto" opts={{ loop: true }}>
            <CarouselContent>
                {galleryImages.map((item, index) => (
                    item && (
                    <CarouselItem key={index}>
                        <div className="p-1">
                        <Card className="border-none bg-transparent shadow-none">
                            <CardContent className="flex aspect-square items-center justify-center p-0 relative">
                                <Image
                                    src={item.imageUrl}
                                    alt={item.description}
                                    fill
                                    className="object-cover rounded-lg shadow-lg"
                                    sizes="90vw"
                                    data-ai-hint={item.imageHint}
                                />
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    )
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:inline-flex" />
            <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
  );

  return (
    <section id="clinic" className="py-16 sm:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-medium">Um Ambiente de Calma e Precisão</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nossa clínica foi projetada para ser um espaço tranquilo onde você pode se sentir relaxado e confiante em seu cuidado.
          </p>
        </div>
        
        {isMobile ? mobileLayout : desktopLayout}

      </div>
    </section>
  );
}
