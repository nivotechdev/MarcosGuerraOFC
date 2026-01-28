import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Clinic() {
  const galleryImages = [
    { id: "clinic-reception" },
    { id: "clinic-operatory" },
    { id: "clinic-detail" },
  ].map(item => PlaceHolderImages.find(img => img.id === item.id)).filter(Boolean);

  return (
    <section id="clinic" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-medium">Um Ambiente de Calma e Precisão</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Nossa clínica foi projetada para ser um espaço tranquilo onde você pode se sentir relaxado e confiante em seu cuidado.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            item && (
              <div key={index} className="aspect-w-1 aspect-h-1">
                <Image
                  src={item.imageUrl}
                  alt={item.description}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  data-ai-hint={item.imageHint}
                />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
