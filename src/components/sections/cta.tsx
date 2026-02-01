import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  const whatsappUrl = "https://wa.me/555432234237?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

  return (
    <section id="contact" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
          Sua nova jornada estética começa com uma conversa.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Agende uma avaliação personalizada e descubra o plano ideal para transformar o seu sorriso com quem é referência em alta performance.
        </p>
        <div className="mt-10">
          <Link href={whatsappUrl} passHref target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="h-14 px-8 text-base font-bold uppercase w-full sm:w-auto transition-transform duration-300 hover:scale-105"
            >
              Quero Agendar Minha Avaliação
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
