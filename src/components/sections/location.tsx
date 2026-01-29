import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MapPin, Clock, Phone } from 'lucide-react';

const contactDetails = [
    {
        icon: MapPin,
        title: "Endereço",
        value: "Av. Brasil, 1234, São Paulo - SP",
        href: "https://www.google.com/maps/search/?api=1&query=Av.+Brasil,+1234,+São+Paulo+-+SP"
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
        value: "(11) 99999-8888",
        href: "tel:+5511999998888"
    }
]

export default function Location() {
  const mapImage = PlaceHolderImages.find(img => img.id === "clinic-map");

  return (
    <section id="location" className="py-20 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Onde estamos e quando atender você
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Localização fácil, horários flexíveis e atendimento pensado para sua comodidade.
          </p>
        </div>

        <Card className="mt-16 overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold font-sans mb-8">Nossa Clínica</h3>
                    <ul className="space-y-6">
                        {contactDetails.map((detail) => (
                           <li key={detail.title} className="flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-full mt-1">
                                    <detail.icon className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">{detail.title}</h4>
                                    <p className="text-muted-foreground">
                                        <a href={detail.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                            {detail.value}
                                        </a>
                                    </p>
                                </div>
                           </li>
                        ))}
                    </ul>
                     <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <Link href="#contact" passHref>
                            <Button size="lg">Agendar Avaliação</Button>
                        </Link>
                        <a href="https://www.google.com/maps/search/?api=1&query=Av.+Brasil,+1234,+São+Paulo+-+SP" target="_blank" rel="noopener noreferrer">
                           <Button size="lg" variant="outline">Como Chegar</Button>
                        </a>
                    </div>
                </div>

                <div className="relative w-full min-h-[300px] lg:min-h-0">
                    {mapImage && (
                        <Image
                            src={mapImage.imageUrl}
                            alt={mapImage.description}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1023px) 100vw, 50vw"
                            data-ai-hint={mapImage.imageHint}
                        />
                    )}
                </div>
            </div>
        </Card>
      </div>
    </section>
  );
}
