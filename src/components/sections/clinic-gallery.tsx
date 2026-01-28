import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ClinicGallery() {
  const galleryImages = [
    { id: "gallery-1" },
    { id: "gallery-2" },
    { id: "gallery-3" },
    { id: "gallery-4" },
    { id: "gallery-5" },
  ].map(item => PlaceHolderImages.find(img => img.id === item.id)).filter(Boolean);

  return (
    <section id="clinic" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-medium">An Environment of Calm & Precision</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our clinic is designed to be a tranquil space where you can feel relaxed and confident in your care.
          </p>
        </div>
        <div className="mt-16 columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((item, index) => (
            item && (
              <div key={index} className="break-inside-avoid">
                <Image
                  src={item.imageUrl}
                  alt={item.description}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                  sizes="(max-width: 768px) 50vw, 33vw"
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
