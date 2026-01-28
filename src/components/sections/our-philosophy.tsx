import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function OurPhilosophy() {
  const philosophyImage = PlaceHolderImages.find(img => img.id === "philosophy-image");

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
                <blockquote className="font-headline text-3xl md:text-4xl font-medium text-foreground">
                “We believe that a beautiful smile is a masterpiece of health and art, crafted with precision, and delivered with compassion.”
                </blockquote>
                <p className="mt-4 text-lg text-muted-foreground font-semibold">
                - Dr. Evelyn Reed
                </p>
            </div>
          <div className="max-w-md mx-auto md:mx-0">
             {philosophyImage && (
              <Image
                src={philosophyImage.imageUrl}
                alt={philosophyImage.description}
                width={500}
                height={500}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={philosophyImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
