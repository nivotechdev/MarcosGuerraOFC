import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Award, GraduationCap, Users } from "lucide-react";

export default function SpecialistSection() {
  const specialistImage = PlaceHolderImages.find(img => img.id === "specialist-photo");

  const achievements = [
    { icon: Award, text: "Mais de 15 anos de experiência" },
    { icon: GraduationCap, text: "PhD de instituições internacionais" },
    { icon: Users, text: "Filosofia centrada no paciente" },
  ];

  return (
    <section id="specialist" className="py-20 px-5 sm:py-28 sm:px-6 lg:px-8 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto">
             <h2 className="font-headline text-3xl md:text-4xl font-medium">O Especialista por Trás do Sorriso</h2>
             <p className="mt-4 text-lg text-muted-foreground">A autoridade e a arte que definem a excelência.</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="max-w-md mx-auto md:mx-0 md:mb-0 mb-10">
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
            <h3 className="font-headline text-3xl font-medium">
              Dr. Marcos Guerra, PhD
            </h3>
            <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
              A autoridade por trás do seu novo sorriso. Dr. Guerra combina uma abordagem científica rigorosa com um olhar artístico apurado para entregar resultados incomparáveis.
            </p>
            <div className="mt-8 space-y-4">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center gap-4 justify-center md:justify-start">
                  <item.icon className="h-6 w-6 text-primary" />
                  <span className="text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
