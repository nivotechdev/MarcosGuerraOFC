'use client';

import Link from "next/link";
import { Clock, Mail, Phone, MapPin, ParkingCircle, Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

export default function ContactSection() {
    const address = "Avenida Paulista, 1578 - Bela Vista, São Paulo - SP";
    const mapQuery = "Marcos Guerra Odontologia, Avenida Paulista, 1578, São Paulo";
    const mapUrl = `https://maps.google.com/maps?q=${encodeURI(mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    const [isMapActive, setIsMapActive] = React.useState(false);

    return (
        <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-secondary to-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="font-headline text-3xl md:text-4xl font-medium">Nossa Localização Privilegiada</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Encontre-nos no coração de São Paulo, em um espaço projetado para seu máximo conforto e conveniência.
                    </p>
                </div>
                
                <div className="relative max-w-6xl mx-auto">
                    <div 
                        className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.08)]"
                        onClick={() => setIsMapActive(true)}
                    >
                        <iframe
                            className="w-full h-[300px] md:h-[500px] border-0"
                            style={{ 
                                filter: 'saturate(0.6)',
                                pointerEvents: isMapActive ? 'auto' : 'none',
                            }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={mapUrl}
                        ></iframe>
                        {!isMapActive && (
                            <div className="absolute inset-0 flex items-center justify-center bg-foreground/10 cursor-pointer transition-opacity hover:opacity-0" />
                        )}
                    </div>
                    
                    <div className="md:absolute md:bottom-8 md:right-8 md:w-[400px] mt-8 md:mt-0">
                        <div className="bg-background/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20">
                            <h3 className="font-headline text-2xl font-semibold mb-4 text-foreground">Visite-nos</h3>
                            <div className="space-y-4 text-left">
                                <div className="flex items-start gap-4">
                                    <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                    <a 
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURI(mapQuery)}`} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors"
                                    >
                                        {address}
                                    </a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span className="text-foreground/80">(11) 98765-4321</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span className="text-foreground/80">contato@marcosguerra.com</span>
                                </div>
                                 <div className="flex items-start gap-4">
                                    <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-foreground/80">Seg - Sex: 9h - 18h</p>
                                    </div>
                                </div>
                                <div className="border-t border-border my-4"></div>
                                 <div className="flex items-center gap-4">
                                    <ParkingCircle className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span className="text-foreground/80">Estacionamento no Local</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Accessibility className="h-5 w-5 text-primary flex-shrink-0" />
                                    <span className="text-foreground/80">Acessibilidade Completa</span>
                                </div>
                            </div>
                             <div className="mt-8">
                                <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURI(mapQuery)}`} target="_blank" rel="noopener noreferrer" passHref>
                                    <Button size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90">
                                        Como Chegar
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}