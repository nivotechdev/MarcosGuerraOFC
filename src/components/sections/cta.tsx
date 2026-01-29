import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";


export default function Cta() {
  const ctaImage = PlaceHolderImages.find(img => img.id === "after-smile");

  return (
    <section id="contact" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-white text-foreground rounded-[32px] shadow-xl max-w-6xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                O seu novo sorriso está a um clique de distância.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
                Agende sua avaliação com o Dr. Marcos Guerra e descubra o plano de tratamento ideal para você.
              </p>
              <div className="mt-10">
                <Link href="#" passHref>
                  <Button size="lg" className="h-14 px-10 text-lg font-bold animate-pulse w-full sm:w-auto">
                    <CalendarDays className="mr-2 h-5 w-5" />
                    Agendar Avaliação
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative min-h-[300px] md:min-h-[450px] w-full h-full">
              {ctaImage && (
                <Image
                  src={ctaImage.imageUrl}
                  alt={ctaImage.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  data-ai-hint={ctaImage.imageHint}
                />
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
