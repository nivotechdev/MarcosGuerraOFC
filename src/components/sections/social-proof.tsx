import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Separator } from "@/components/ui/separator";

export default function SocialProof() {
  const logos = PlaceHolderImages.filter(img => img.id.startsWith("association-logo"));

  return (
    <section id="autoridade" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground">
            Liderada pelo Dr. [Nome do Dentista], nossa clínica é referência em odontologia estética e reconstrutiva, com especializações e PhD nas mais renomadas instituições internacionais.
          </p>
        </div>
        <div className="mt-12">
          <Separator className="max-w-xs mx-auto" />
        </div>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {logos.map((logo) => (
            <div key={logo.id} className="relative h-12 w-36 filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <Image
                src={logo.imageUrl}
                alt={logo.description}
                fill
                className="object-contain"
                data-ai-hint={logo.imageHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
