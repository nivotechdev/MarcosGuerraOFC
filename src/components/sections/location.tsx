import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Phone } from 'lucide-react';

const whatsappUrl = "https://wa.me/555432234237?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";
const mapQuery = "Avenida Júlio de Castilhos, 2773, São Pelegrino, Caxias do Sul, RS";
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3475.952934271168!2d-51.18249652579998!3d-29.16335999026215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951c3b53c5555555%3A0x7c739b6140498b31!2sAv.%20J%C3%BAlio%20de%20Castilhos%2C%202773%20-%20S%C3%A3o%20Pelegrino%2C%20Caxias%20do%20Sul%20-%20RS%2C%2095010-005!5e0!3m2!1spt-BR!2sbr!4v1719941196417!5m2!1spt-BR!2sbr";

const contactDetails = [
    {
        icon: MapPin,
        title: "Endereço",
        value: "Avenida Júlio de Castilhos, 2773 – Sala 302-B\nBairro São Pelegrino – Caxias do Sul – RS",
        href: mapUrl
    },
    {
        icon: Clock,
        title: "Horários",
        value: "Segunda a Sexta: 09:00 às 18:00",
        href: "#"
    },
    {
        icon: Phone,
        title: "Contato",
        value: "(54) 3223-4237",
        href: whatsappUrl
    }
]

export default function Location() {
  return (
    <section id="location" className="py-20 sm:py-32 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary tracking-tight">
            Onde estamos e quando atender você
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Localização fácil, horários flexíveis e atendimento pensado para sua comodidade.
          </p>
        </div>

        <Card className="mt-16 overflow-hidden shadow-lg bg-card rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                    <h3 className="font-heading text-2xl font-semibold mb-8 text-foreground">Nossa Clínica</h3>
                    <ul className="space-y-6">
                        {contactDetails.map((detail) => (
                           <li key={detail.title} className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full mt-1">
                                    <detail.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-heading font-semibold text-foreground">{detail.title}</h4>
                                    <p className="text-muted-foreground whitespace-pre-line">
                                        <a href={detail.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                            {detail.value}
                                        </a>
                                    </p>
                                </div>
                           </li>
                        ))}
                    </ul>
                     <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <Button size="lg">Agendar Avaliação</Button>
                        </a>
                        <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                           <Button size="lg" variant="outline">Como Chegar</Button>
                        </a>
                    </div>
                </div>

                <div className="relative w-full min-h-[300px] lg:min-h-0">
                    <iframe
                        src={embedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
        </Card>
      </div>
    </section>
  );
}
