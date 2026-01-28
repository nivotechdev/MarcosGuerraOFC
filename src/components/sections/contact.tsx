'use client';

import Link from "next/link";
import { Clock, Mail, Phone, ParkingCircle, Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" {...props}>
        <title>WhatsApp</title>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
);


export default function ContactSection() {
    const address = "Avenida Paulista, 1578 - Bela Vista, São Paulo - SP";
    const mapQuery = "Marcos Guerra Odontologia, Avenida Paulista, 1578, São Paulo";
    const mapUrl = `https://maps.google.com/maps?q=${encodeURI(mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    const [isMapActive, setIsMapActive] = React.useState(false);

  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto text-center py-20 px-5 sm:py-28 sm:px-6 lg:px-8">
        <h2 className="font-headline text-3xl md:text-4xl font-medium">Comece Sua Transformação</h2>
        <p className="mt-4 text-lg text-muted-foreground italic">"Agendamento simples, ambiente acolhedor e localização privilegiada."</p>
        
        <div className="mt-12 max-w-lg mx-auto bg-secondary p-8 md:p-12 rounded-lg shadow-lg">
            <h3 className="font-headline text-2xl font-semibold mb-6">Falar com Dr. Marcos no WhatsApp</h3>
            <Link href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer" passHref>
                <Button size="lg" className="w-full text-lg py-6">
                    <WhatsappIcon className="mr-3 h-6 w-6"/>
                    Iniciar Conversa Agora
                </Button>
            </Link>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-foreground/80">
            <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary"/>
                <span>(11) 98765-4321</span>
            </div>
             <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary"/>
                <span>contato@marcosguerra.com</span>
            </div>
            <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1"/>
                <div>
                    <p>Seg - Sex: 9h - 18h</p>
                </div>
            </div>
        </div>
      </div>
      
      <div className="relative w-full h-[300px] md:h-[450px]" onClick={() => setIsMapActive(true)}>
        <iframe
          className="absolute inset-0 w-full h-full border-0"
          style={{ 
              filter: 'saturate(0.5)',
              pointerEvents: isMapActive ? 'auto' : 'none',
            }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapUrl}
        ></iframe>
        {!isMapActive && (
            <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 cursor-pointer transition-opacity hover:opacity-0">
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg text-foreground font-semibold shadow-md">
                    Clique para interagir com o mapa
                </div>
            </div>
        )}
      </div>

      <Separator />

      <div className="bg-secondary py-16">
        <div className="container mx-auto px-10 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center text-center md:text-left">
                <div>
                    <h3 className="font-headline text-2xl md:text-3xl text-foreground mb-4">Nossa Localização</h3>
                    <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURI(mapQuery)}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg text-muted-foreground hover:text-primary transition-colors"
                    >
                        {address}
                    </a>
                    <div className="mt-6 flex justify-center md:justify-start">
                        <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURI(mapQuery)}`} target="_blank" rel="noopener noreferrer" passHref>
                            <Button variant="outline" className="border-primary text-foreground hover:bg-primary/10">
                                Abrir no GPS / Google Maps
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-6 items-center md:items-start md:pl-12">
                    <div className="flex items-center gap-4">
                        <ParkingCircle className="h-7 w-7 text-primary" />
                        <span className="text-foreground/80">Estacionamento no Local</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Accessibility className="h-7 w-7 text-primary" />
                        <span className="text-foreground/80">Acessibilidade Completa</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="h-[10px] w-full bg-primary"></div>
    </section>
  );
}
