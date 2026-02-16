'use client';

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

// Carousel Component
const ImageCarousel = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        { id: "specialist-portrait", description: "Retrato do Dr. Marcos Guerra", imageUrl: "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/marcosguerra/ft%20douttour.png", imageHint: "dentist portrait" },
        { id: "consultorio-1", description: "Foto 1", imageUrl: "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/marcosguerra/ft%201ofc.png", imageHint: "clinic photo 1" },
        { id: "consultorio-2", description: "Foto 2", imageUrl: "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/marcosguerra/ft%202ofc.png", imageHint: "clinic photo 2" },
        { id: "consultorio-3", description: "Foto 3", imageUrl: "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/marcosguerra/ft%203ofc.png", imageHint: "clinic photo 3" },
        { id: "consultorio-4", description: "Foto 4", imageUrl: "https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/marcosguerra/ft%204ofc.png", imageHint: "clinic photo 4" },
      ].filter(Boolean);

    const scrollToImage = (index: number) => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.offsetWidth * index;
            carouselRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % images.length;
        scrollToImage(newIndex);
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        scrollToImage(newIndex);
    };
    
    // Update index on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (carouselRef.current) {
                const scrollLeft = carouselRef.current.scrollLeft;
                const itemWidth = carouselRef.current.offsetWidth;
                const newIndex = Math.round(scrollLeft / itemWidth);
                if (newIndex !== currentIndex) {
                    setCurrentIndex(newIndex);
                }
            }
        };

        const currentRef = carouselRef.current;
        // Debounce or throttle scroll handler if performance is an issue
        currentRef?.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            currentRef?.removeEventListener('scroll', handleScroll);
        };
    }, [currentIndex, images.length]);


    return (
        <div className="relative w-full max-w-md mx-auto md:mx-0 group">
            <style jsx>{`
                .carousel-container {
                    scroll-snap-type: x mandatory;
                    -webkit-overflow-scrolling: touch; /* for smooth scrolling on iOS */
                    scrollbar-width: none; /* For Firefox */
                }
                .carousel-container::-webkit-scrollbar {
                    display: none; /* For Chrome, Safari, and Opera */
                }
                .carousel-item {
                    scroll-snap-align: start;
                    flex: 0 0 100%;
                }
            `}</style>
            <div ref={carouselRef} className="carousel-container flex overflow-x-auto rounded-lg shadow-soft">
                {images.map((img, index) => (
                    img && (
                        <div key={img.id || index} className="carousel-item w-full">
                            <Image
                                src={img.imageUrl as string}
                                alt={img.description as string}
                                width={500}
                                height={450}
                                className="object-fill w-full"
                                style={{ height: '450px' }} // Maintain consistent height
                                data-ai-hint={img.imageHint as string}
                                priority={index === 0} // Prioritize loading the first image
                            />
                        </div>
                    )
                ))}
            </div>

            {/* Navigation Arrows */}
            <Button onClick={prevImage} size="icon" variant="ghost" className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/20 text-white rounded-full hover:bg-black/40 hover:text-white transition-opacity opacity-0 group-hover:opacity-100">
                <ChevronLeft />
            </Button>
            <Button onClick={nextImage} size="icon" variant="ghost" className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/20 text-white rounded-full hover:bg-black/40 hover:text-white transition-opacity opacity-0 group-hover:opacity-100">
                <ChevronRight />
            </Button>

            {/* Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToImage(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            currentIndex === index ? 'w-4 bg-white' : 'w-2 bg-white/50'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};


const qualifications = [
    {
        title: "Graduado pela Universidade Federal de Pelotas (UFPel)",
    },
    {
        title: "Especialista em Ortodontia pela Unicastelo",
    },
    {
        title: "Residência em Ortodontia (Técnicas Alexander, Damon e Lingual) na SOBRESP",
    }
];

// This component was 'WhyUs' and is now transformed into the Specialist's bio section.
export default function Specialist() {
  const whatsappUrl = "https://wa.me/5554991696666?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.";

  return (
    <section id="specialist" className="py-20 sm:py-32 bg-secondary text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-7xl mx-auto">
          
          {/* Image Column */}
          <div className="w-full max-w-md mx-auto md:mx-0">
            <ImageCarousel />
          </div>

          {/* Text Column */}
          <div className="relative text-left">
             <div className="absolute top-0 bottom-0 -left-10 w-px bg-accent hidden md:block" />

            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-primary">
              Dr. Marcos Guerra: Excelência em Ortodontia
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              Com mais de 15 anos de atuação, o Dr. Marcos Guerra une a precisão da tecnologia avançada ao acolhimento de um atendimento humanizado. Sua filosofia de trabalho foca na reabilitação oral estética, devolvendo não apenas sorrisos, mas a autoestima e a qualidade de vida de seus pacientes.
            </p>
            
            <ul className="mt-8 space-y-4">
              {qualifications.map((item) => (
                <li key={item.title} className="flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{item.title}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
                <Link href={whatsappUrl} passHref target="_blank" rel="noopener noreferrer">
                    <Button size="lg">
                        Agendar Consulta com o Especialista
                    </Button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
