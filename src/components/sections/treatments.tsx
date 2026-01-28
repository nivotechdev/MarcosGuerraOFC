import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Icons
const ThinImplantIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 10V20M12 20H15M12 20H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 14H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const ThinVeneerIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V14C20 15.1046 19.1046 16 18 16H14L12 19L10 16H6C4.89543 16 4 15.1046 4 14V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const ThinBracesIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M7 8H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M7 16H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 5C9 5 7 8 7 12C7 16 9 19 9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 5C15 5 17 8 17 12C17 16 15 19 15 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const ThinBotoxIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 6L12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 21V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 8L16 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 8L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M9 12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 12L16 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 12L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M18 17C18 19.2091 15.3137 21 12 21C8.68629 21 6 19.2091 6 17C6 14.7909 8.68629 13 12 13C15.3137 13 18 14.7909 18 17Z" stroke="currentColor" strokeWidth="1.5"/></svg>);
const ThinSparkleIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 3L13.65 8.35L19 10L13.65 11.65L12 17L10.35 11.65L5 10L10.35 8.35L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 19L6 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 19L18 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);
const ThinScanIcon = (props: React.SVGProps<SVGSVGElement>) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 8V6C4 4.89543 4.89543 4 6 4H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 16V18C4 19.1046 4.89543 20 6 20H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 4H18C19.1046 4 20 4.89543 20 6V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 20H18C19.1046 20 20 19.1046 20 18V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>);

const treatments = [
    { icon: ThinImplantIcon, title: "Implantes Dentários", description: "Recupere sua segurança ao comer e falar com uma solução permanente e de aparência natural." },
    { icon: ThinVeneerIcon, title: "Lentes de Contato de Porcelana", description: "Transforme seu sorriso com mínima intervenção, utilizando lâminas de porcelana ultrafinas e personalizadas." },
    { icon: ThinBracesIcon, title: "Invisalign", description: "Conquiste dentes perfeitamente alinhados de forma discreta e eficiente com alinhadores transparentes de última geração." },
    { icon: ThinBotoxIcon, title: "Harmonização Facial", description: "Realce sua beleza natural com melhorias sutis que harmonizam suas características e complementam seu novo sorriso." },
    { icon: ThinSparkleIcon, title: "Clareamento Dental", description: "Ilumine seu sorriso de forma segura e eficaz com nossos tratamentos de clareamento profissionais." },
    { icon: ThinScanIcon, title: "Design Digital do Sorriso", description: "Visualize e participe da criação do seu futuro sorriso com nossa avançada tecnologia de simulação 3D." },
  ];

export default function Treatments() {
  return (
    <section id="treatments" className="py-20 px-5 sm:py-28 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-medium">Nossos Tratamentos de Assinatura</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Combinamos arte e tecnologia para fornecer soluções personalizadas para o seu sorriso ideal.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {treatments.map((treatment) => (
            <Card key={treatment.title} className="text-left bg-secondary shadow-[0_4px_20px_rgba(10,46,61,0.05)] transition-shadow duration-300 flex flex-col hover:shadow-xl">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-md mb-4 self-start">
                    <treatment.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline text-2xl">{treatment.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/80">{treatment.description}</p>
              </CardContent>
              <div className="p-6 pt-0">
                  <Button variant="link" asChild className="p-0 h-auto font-semibold text-primary hover:text-primary/80">
                      <Link href="#contact">Saiba Mais <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
