'use client';
import Image from "next/image";
import BeforeAfterSlider from "@/components/before-after-slider";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";


const testimonials = [
    {
        name: "Juliana Paes",
        title: "Paciente de Lentes de Contato",
        quote: "Nunca imaginei que poderia sorrir com tanta confiança. A equipe do Dr. Marcos não só transformou meu sorriso, mas minha autoestima. O processo foi incrivelmente confortável.",
        avatar: PlaceHolderImages.find(img => img.id === "testimonial-avatar-1")
    },
    {
        name: "Ricardo Alves",
        title: "Paciente de Implantes",
        quote: "O medo de dentista era real para mim, mas a tecnologia e o cuidado que recebi aqui foram excepcionais. Recuperei a função e a estética, sem dor. Recomendo de olhos fechados.",
        avatar: PlaceHolderImages.find(img => img.id === "testimonial-avatar-2")
    },
     {
        name: "Carla Martins",
        title: "Paciente de Invisalign",
        quote: "O tratamento com Invisalign foi super discreto e os resultados superaram minhas expectativas. A clínica é um verdadeiro refúgio de tranquilidade e profissionalismo.",
        avatar: PlaceHolderImages.find(img => img.id === "testimonial-avatar-3")
    }
];

export default function SocialProof() {
    const beforeImage = PlaceHolderImages.find(img => img.id === "before-smile");
    const afterImage = PlaceHolderImages.find(img => img.id === "after-smile");

    return (
        <section id="social-proof" className="py-20 sm:py-32 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-foreground">Resultados que falam por si</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        A satisfação de nossos pacientes é a nossa maior conquista. Veja a transformação e ouça o que eles têm a dizer.
                    </p>
                </div>
                
                <div className="mt-16">
                    {beforeImage && afterImage && (
                        <BeforeAfterSlider 
                            beforeImage={{ src: beforeImage.imageUrl, alt: beforeImage.description, hint: beforeImage.imageHint }}
                            afterImage={{ src: afterImage.imageUrl, alt: afterImage.description, hint: afterImage.imageHint }}
                        />
                    )}
                </div>

                <div className="mt-20">
                     <Carousel 
                        className="w-full max-w-4xl mx-auto"
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                     >
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                                    <div className="p-4 h-full">
                                        <Card className="h-full flex flex-col justify-between shadow-sm">
                                            <CardContent className="p-6">
                                                <div className="flex mb-4">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                                    ))}
                                                </div>
                                                <blockquote className="text-foreground/80 italic">
                                                    "{testimonial.quote}"
                                                </blockquote>
                                            </CardContent>
                                            <div className="flex items-center gap-4 p-6 bg-muted/50">
                                                {testimonial.avatar && (
                                                    <Avatar>
                                                        <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.avatar.imageHint} />
                                                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                                    </Avatar>
                                                )}
                                                <div>
                                                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                                                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="-left-4 md:-left-12" />
                        <CarouselNext className="-right-4 md:-right-12" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
