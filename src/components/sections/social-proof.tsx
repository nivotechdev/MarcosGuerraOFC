import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Award, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SpecialistSection() {
  const specialistImage = PlaceHolderImages.find(img => img.id === "specialist-photo");

  return (
    <section id="specialist" className="py-20 sm:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="max-w-md mx-auto md:mx-0 mb-5 md:mb-0">
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
            <h2 className="font-headline text-3xl md:text-4xl font-medium text-foreground">
              O Especialista por trás do seu novo sorriso
            </h2>
            <h3 className="mt-2 text-xl font-semibold text-foreground/80 tracking-wider">
              MARCOS GUERRA
            </h3>
            <div className="mt-8 space-y-8">
                <div className="flex items-start text-left gap-4 justify-center md:justify-start">
                    <Award className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-semibold text-lg text-foreground">Experiência</h4>
                        <p className="text-foreground/80">20+ anos transformando sorrisos com precisão clínica.</p>
                    </div>
                </div>
                <div className="flex items-start text-left gap-4 justify-center md:justify-start">
                    <GraduationCap className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-semibold text-lg text-foreground">Formação</h4>
                        <p className="text-foreground/80">PhD em Reabilitação Oral e Odontologia Estética.</p>
                    </div>
                </div>
                <div className="border-l-2 border-primary pl-4 max-w-md mx-auto md:mx-0">
                    <div className="flex items-start text-left gap-4">
                        <Users className="h-7 w-7 text-primary flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-semibold text-lg text-foreground">Filosofia</h4>
                            <p className="text-foreground/80">Foco absoluto no conforto do paciente e resultados naturais.</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
            <Link href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer" passHref>
                <Button size="lg">
                    Falar diretamente com o Dr. Marcos
                </Button>
            </Link>
        </div>
      </div>
    </section>
  );
}
