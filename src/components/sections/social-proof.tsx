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
    <section id="specialist" className="py-16 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
             <h2 className="font-headline text-3xl md:text-4xl font-medium">O Especialista</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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
          <div className="text-center md:text-left bg-secondary p-8 rounded-lg shadow-md">
            <h3 className="font-headline text-3xl font-medium">
              Dr. Marcos Guerra, PhD
            </h3>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A autoridade por trás do seu novo sorriso. Dr. Guerra combina uma abordagem científica rigorosa com um olhar artístico apurado para entregar resultados incomparáveis.
            </p>
            <div className="mt-8 space-y-4">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
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
