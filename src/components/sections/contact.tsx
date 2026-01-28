import Link from "next/link";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
        <title>WhatsApp</title>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
);


export default function ContactSection() {
  const mapImage = PlaceHolderImages.find(img => img.id === "contact-map-blue");

  return (
    <section id="contact" className="py-20 px-5 sm:py-28 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-medium">Comece Sua Transformação</h2>
           <p className="mt-16 text-lg text-muted-foreground italic">"Agendamento simples, ambiente acolhedor e localização privilegiada."</p>
        </div>
        
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-secondary p-8 md:p-12 rounded-lg shadow-lg text-center">
                <h3 className="font-headline text-2xl font-semibold mb-6">Agende sua Consulta via WhatsApp</h3>
                <Link href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer" passHref>
                    <Button size="lg" className="w-full max-w-xs mx-auto text-lg py-6">
                        <WhatsappIcon className="mr-3 h-6 w-6"/>
                        Iniciar Conversa Agora
                    </Button>
                </Link>
            </div>

            <div className="space-y-6 text-foreground/80">
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                    <address className="not-italic">
                        Avenida da Luxo, 123, Sala 101<br/>
                        Metropolis, 12345
                    </address>
                </div>
                 <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary"/>
                    <span>(11) 98765-4321</span>
                </div>
                 <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary"/>
                    <span>contato@marcosguerra.com</span>
                </div>
                <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0"/>
                    <div>
                        <p className="font-semibold text-foreground">Horário de Funcionamento</p>
                        <p>Seg - Sex: 9h - 18h</p>
                        <p>Sáb: 10h - 16h</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="mt-16 h-96 rounded-lg overflow-hidden shadow-lg relative">
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
