import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";

export default function Specialist() {
  const specialistImage = PlaceHolderImages.find(img => img.id === "specialist-photo");

  return (
    <section id="specialist" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-md mx-auto md:mx-0">
             {specialistImage && (
              <Image
                src={specialistImage.imageUrl}
                alt={specialistImage.description}
                width={500}
                height={600}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={specialistImage.imageHint}
              />
            )}
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-headline text-3xl md:text-4xl font-medium">
              Led by a Master of the Craft
            </h2>
            <Separator className="my-6 max-w-xs mx-auto md:mx-0" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dr. Evelyn Reed (PhD) is a world-renowned specialist in cosmetic and restorative dentistry. With over 15 years of experience and advanced degrees from top international institutions, she combines a rigorous scientific approach with a keen artistic eye to deliver unparalleled results.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Her commitment to continuous education and research in the latest digital dentistry techniques ensures that every patient receives the most effective and minimally invasive care available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
