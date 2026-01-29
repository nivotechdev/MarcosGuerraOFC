import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Cta() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground">
          Pronto para transformar seu sorriso?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Sua jornada para um sorriso saudável e confiante começa com uma conversa. Agende sua avaliação premium e descubra o que a odontologia de alta performance pode fazer por você.
        </p>
        <div className="mt-10">
          <Link href="#" passHref>
            <Button size="lg" className="h-14 px-10 text-lg">
              Agendar Avaliação Premium
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
