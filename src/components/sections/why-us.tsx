import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const qualifications = [
    {
        title: "Especialista em Implantodontia e Prótese Dentária",
    },
    {
        title: "PhD em Reabilitação Oral de Alta Complexidade",
    },
    {
        title: "Pioneiro em Fluxo Digital e Lentes de Contato Cerâmicas",
    }
];

// This component was 'WhyUs' and is now transformed into the Specialist's bio section.
export default function Specialist() {
  const specialistImage = PlaceHolderImages.find(img => img.id === "specialist-portrait");

  return (
    <section id="specialist" className="py-20 sm:py-32 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-7xl mx-auto">
          
          {/* Image Column */}
          <div className="w-full max-w-md mx-auto md:mx-0">
            {specialistImage && (
              <Image
                src={specialistImage.imageUrl}
                alt={specialistImage.description}
                width={500}
                height={600}
                className="object-cover shadow-lg"
                data-ai-hint={specialistImage.imageHint}
              />
            )}
          </div>

          {/* Text Column */}
          <div className="relative text-left">
             <div className="absolute top-0 bottom-0 -left-10 w-px bg-accent hidden md:block" />

            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-primary">
              DR. MARCOS GUERRA
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              Com mais de 15 anos de atuação, o Dr. Marcos Guerra une a precisão da tecnologia avançada ao acolhimento de um atendimento humanizado. Sua filosofia de trabalho foca na reabilitação oral estética, devolvendo não apenas sorrisos, mas a autoestima e a qualidade de vida de seus pacientes.
            </p>
            
            <ul className="mt-8 space-y-3">
              {qualifications.map((item) => (
                <li key={item.title} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item.title}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
                <Button size="lg" variant="outline">
                    CRO-SP 12345
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
