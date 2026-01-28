import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  const mapImage = PlaceHolderImages.find(img => img.id === "contact-map");

  const contactDetails = [
    {
      icon: MapPin,
      title: "Endereço",
      text: "Av. Principal, 123, Sala 404, Bairro Nobre, Cidade - UF, 12345-678",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      text: "(11) 98765-4321",
      link: "https://wa.me/5511987654321",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      text: "Segunda a Sexta, das 08:00 às 18:00",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Agende Sua Avaliação</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Dê o primeiro passo para o sorriso dos seus sonhos. Nossa equipe está pronta para oferecer um atendimento personalizado e exclusivo.
          </p>
        </div>
        <div className="mt-16">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-8">Informações de Contato</h3>
                <div className="space-y-6">
                  {contactDetails.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <item.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        {item.link ? (
                          <Link href={item.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            {item.text}
                          </Link>
                        ) : (
                          <p className="text-muted-foreground">{item.text}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                   <Link href="https://wa.me/5511987654321" target="_blank" rel="noopener noreferrer" passHref>
                    <Button size="lg" className="w-full text-lg">
                      <Phone className="mr-2 h-5 w-5" />
                      Falar pelo WhatsApp
                    </Button>
                   </Link>
                </div>
              </div>
              <div className="relative min-h-[300px] lg:min-h-[500px]">
                {mapImage && (
                  <Image
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    fill
                    className="object-cover filter grayscale"
                    data-ai-hint={mapImage.imageHint}
                  />
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
