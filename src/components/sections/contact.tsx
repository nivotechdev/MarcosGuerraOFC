import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/contact-form";

export default function ContactSection() {
  const mapImage = PlaceHolderImages.find(img => img.id === "contact-map-blue");

  return (
    <section id="contact" className="py-16 sm:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-medium">Comece Sua Transformação</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Agende uma consulta hoje. Estamos convenientemente localizados.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
                <h3 className="font-headline text-2xl font-semibold mb-6">Detalhes de Contato</h3>
                <div className="space-y-6 text-foreground/80">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1"/>
                        <address className="not-italic">
                            Avenida da Luxo, 123, Sala 101<br/>
                            Metropolis, 12345
                        </address>
                    </div>
                     <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-primary mt-1"/>
                        <span>(11) 98765-4321</span>
                    </div>
                     <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-primary mt-1"/>
                        <span>contato@sorrisopremium.com</span>
                    </div>
                    <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 text-primary mt-1"/>
                        <div>
                            <p className="font-semibold text-foreground">Horário de Funcionamento</p>
                            <p>Seg - Sex: 9h - 18h</p>
                            <p>Sáb: 10h - 16h</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-3 bg-secondary p-8 md:p-12 rounded-lg shadow-lg">
                <h3 className="font-headline text-2xl font-semibold mb-8">Agende uma Consulta</h3>
                <ContactForm />
            </div>
        </div>
        <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground italic">"Agendamento simples, ambiente acolhedor e localização privilegiada."</p>
        </div>
        <div className="mt-8 h-96 rounded-lg overflow-hidden shadow-lg relative">
            {mapImage && (
                <Image
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={mapImage.imageHint}
                />
            )}
        </div>
      </div>
    </section>
  );
}
