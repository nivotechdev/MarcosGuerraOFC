import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Award, GraduationCap, Users } from "lucide-react";

export default function SpecialistSection() {
  const specialistImage = PlaceHolderImages.find(img => img.id === "specialist-photo");

  const achievements = [
    { icon: Award, text: "Over 15 years of experience" },
    { icon: GraduationCap, text: "PhD from international institutions" },
    { icon: Users, text: "Patient-centric philosophy" },
  ];

  return (
    <section id="specialist" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
             <h2 className="font-headline text-3xl md:text-4xl font-medium">The Specialist</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="max-w-md mx-auto md:mx-0">
             {specialistImage && (
              <Image
                src={specialistImage.imageUrl}
                alt={specialistImage.description}
                width={500}
                height={600}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={specialistImage.imageHint}
              />
            )}
          </div>
          <div className="text-center md:text-left bg-secondary p-8 rounded-lg shadow-md">
            <h3 className="font-headline text-3xl font-medium">
              Dr. Evelyn Reed, PhD
            </h3>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Dr. Reed combines a rigorous scientific approach with a keen artistic eye to deliver unparalleled results. Her commitment to continuous education in the latest digital dentistry techniques ensures every patient receives the most effective care available.
            </p>
            <div className="mt-8 space-y-4">
              {achievements.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <item.icon className="h-6 w-6 text-primary" />
                  <span className="text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
