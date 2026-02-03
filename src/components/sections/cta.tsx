import Link from "next/link";
import { Button } from "@/components/ui/button";
import WhatsappIcon from "@/components/icons/whatsapp-icon";
import Logo from "@/components/logo";

export default function Cta() {
  const whatsappUrl = "https://wa.me/555432234237?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

  return (
    <section id="contact" className="py-20 sm:py-32 bg-background overflow-hidden border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center py-10">
          
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary tracking-tight">
            Sua jornada para um novo sorriso começa aqui.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Agende sua avaliação e descubra como podemos transformar sua saúde bucal com tecnologia e exclusividade.
          </p>
          
          <div className="mt-10 flex flex-col items-center">
            <Link href={whatsappUrl} passHref target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="h-16 px-10 text-lg font-bold w-full sm:w-auto transition-all duration-300 hover:scale-105 rounded-full shadow-lg"
              >
                <WhatsappIcon className="mr-2 h-6 w-6" />
                Agendar via WhatsApp
              </Button>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground/80 mb-10">
              Atendimento personalizado e ágil.
            </p>
            
            {/* Logo positioned below the button as requested */}
            <div className="flex justify-center transition-opacity duration-300">
              <Logo className="w-48 md:w-64 h-20 md:h-24 opacity-80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
