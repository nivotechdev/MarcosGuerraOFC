import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WhyUs() {
  const whyUsImage = PlaceHolderImages.find(img => img.id === "clinic-environment");

  return (
    <section id="why-us" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-7xl mx-auto">
          <div className="max-w-md mx-auto md:mx-0">
             {whyUsImage && (
              <Image
                src={whyUsImage.imageUrl}
                alt={whyUsImage.description}
                width={500}
                height={600}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={whyUsImage.imageHint}
              />
            )}
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">
              Um Santuário de Tecnologia e Acolhimento
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Entendemos que a verdadeira excelência odontológica nasce da fusão entre a mais avançada tecnologia e um cuidado profundamente humano. Em nossa clínica, a insegurança de esconder o sorriso e o medo de tratamentos dão lugar à confiança e ao bem-estar.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Criamos um ambiente onde você não é apenas um paciente, mas o arquiteto do seu próprio sorriso, amparado por especialistas dedicados a transformar sua vida.
            </p>
            <div className="mt-10">
                <Link href="#contact" passHref>
                    <Button size="lg">Converse com um especialista</Button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
