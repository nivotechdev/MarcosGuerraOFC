import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/contact-form";

export default function ContactSection() {
  const mapImage = PlaceHolderImages.find(img => img.id === "contact-map-blue");

  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-medium">Begin Your Transformation</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Schedule a consultation today. We are conveniently located.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
                <h3 className="font-headline text-2xl font-semibold mb-6">Contact Details</h3>
                <div className="space-y-6 text-foreground/80">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1"/>
                        <address className="not-italic">
                            123 Luxury Avenue, Suite 101<br/>
                            Metropolis, 12345
                        </address>
                    </div>
                     <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-primary mt-1"/>
                        <span>(123) 456-7890</span>
                    </div>
                     <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-primary mt-1"/>
                        <span>contact@sorrisopremium.com</span>
                    </div>
                    <div className="flex items-start gap-4">
                        <Clock className="h-6 w-6 text-primary mt-1"/>
                        <div>
                            <p className="font-semibold text-foreground">Opening Hours</p>
                            <p>Mon - Fri: 9am - 6pm</p>
                            <p>Sat: 10am - 4pm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-3 bg-background p-8 md:p-12 rounded-lg shadow-lg">
                <h3 className="font-headline text-2xl font-semibold mb-8">Book an Appointment</h3>
                <ContactForm />
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
