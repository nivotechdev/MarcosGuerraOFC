import Link from "next/link";
import { Button } from "@/components/ui/button";
import WhatsappIcon from "@/components/icons/whatsapp-icon";

export default function Cta() {
  const whatsappUrl = "https://wa.me/555432234237?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

  return (
    <section id="contact" className="py-20 sm:py-32 bg-muted overflow-hidden shadow-inner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Sua jornada para um <span className="text-primary">novo sorriso</span> começa aqui.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Agende sua avaliação e descubra como podemos transformar sua saúde bucal.
        </p>
        <div className="mt-10 flex flex-col items-center">
          <Link href={whatsappUrl} passHref target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="h-14 px-8 text-base font-bold w-full sm:w-auto transition-transform duration-300 hover:scale-105 rounded-full"
            >
              <WhatsappIcon className="mr-2 h-5 w-5" />
              Agendar via WhatsApp
            </Button>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Agendamento rápido e seguro.
          </p>
        </div>
      </div>
    </section>
  );
}
