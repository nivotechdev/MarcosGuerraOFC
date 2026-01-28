import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function ClinicGallery() {
  const images = {
    reception: PlaceHolderImages.find(img => img.id === "gallery-reception"),
    tech: PlaceHolderImages.find(img => img.id === "gallery-tech"),
    sterilization: PlaceHolderImages.find(img => img.id === "gallery-sterilization"),
    detail: PlaceHolderImages.find(img => img.id === "gallery-detail"),
    consulting: PlaceHolderImages.find(img => img.id === "gallery-consulting"),
  };

  const galleryItems = [
    { ...images.reception, className: "md:col-span-2 md:row-span-2" },
    { ...images.tech, className: "" },
    { ...images.detail, className: "md:row-span-2" },
    { ...images.sterilization, className: "" },
    { ...images.consulting, className: "md:col-span-2" },
  ];

  return (
    <section id="clinica" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Uma Experiência Exclusiva</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Projetamos cada detalhe para garantir seu conforto e segurança, transformando a visita ao dentista em um momento de tranquilidade.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4">
          {galleryItems.map((item, index) => (
            item.imageUrl && (
              <div key={index} className={`relative group overflow-hidden rounded-lg shadow-md ${item.className}`}>
                <Image
                  src={item.imageUrl}
                  alt={item.description || "Clinic image"}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  data-ai-hint={item.imageHint}
                />
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
