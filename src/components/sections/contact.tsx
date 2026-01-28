import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { MapPin, Phone, Clock } from "lucide-react";
import ContactForm from "@/components/contact-form";

export default function Location() {
  const mapImage = PlaceHolderImages.find(img => img.id === "contact-map");

  return (
    <section id="location" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-medium">Begin Your Transformation</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Schedule a consultation today. We are conveniently located in the heart of the city.
          </p>
        </div>
        <div className="mt-16">
          <Card className="overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-8">Book an Appointment</h3>
                <ContactForm />
              </div>
              <div className="relative min-h-[400px] lg:min-h-full">
                {mapImage && (
                  <Image
                    src={mapImage.imageUrl}
                    alt={mapImage.description}
                    fill
                    className="object-cover filter grayscale"
                    data-ai-hint={mapImage.imageHint}
                  />
                )}
                 <div className="absolute bottom-8 left-8 bg-background p-6 rounded-lg shadow-xl">
                    <h4 className="font-bold text-lg">Our Location</h4>
                    <address className="not-italic text-muted-foreground mt-2">
                        123 Luxury Avenue, Suite 101<br/>
                        Metropolis, 12345
                    </address>
                     <div className="flex items-center gap-4 mt-4 text-muted-foreground">
                        <Clock className="h-5 w-5 text-primary"/>
                        <span>Mon - Fri, 9am - 6pm</span>
                    </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
