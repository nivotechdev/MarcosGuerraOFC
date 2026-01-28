import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smile, ScanLine } from "lucide-react";

// Custom inline SVG for a Tooth icon (as it's not in lucide-react)
const ToothIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6.204 13.911c-1.121.326-1.577 1.62-1.12 2.682.458 1.063 1.773 1.543 2.894 1.218" />
    <path d="M17.796 13.911c1.121.326 1.577 1.62 1.12 2.682-.458 1.063-1.773 1.543-2.894 1.218" />
    <path d="M8.22 21c-.818-1.049-.818-2.51 0-3.558" />
    <path d="M15.78 21c.818-1.049.818-2.51 0-3.558" />
    <path d="M12.983 4.545c.823 1.048.823 2.507 0 3.555" />
    <path d="M11.017 4.545c-.823 1.048-.823 2.507 0 3.555" />
    <path d="M7.05 7.199c-1.122-.326-2.437.154-2.895 1.218C3.7 9.479 4.155 10.773 5.276 11.1" />
    <path d="M16.95 7.199c1.122-.326 2.437.154 2.895 1.218.457 1.062.002 2.356-1.119 2.682" />
    <path d="M12 21v-3.5" />
    <path d="M12 8V3" />
    <path d="M7.5 17.5a4.5 4.5 0 0 1 9 0" />
    <path d="M5.276 11.1c.144.042.292.079.444.111" />
    <path d="M18.28 11.1c-.144.042-.292.079-.444.111" />
  </svg>
);

// Custom inline SVG for a Dental Implant icon
const ImplantIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 12c-2 3-5.5 3-5.5 3s-1.5-1.5-2.5-3c-1-1.5-1.5-3.5-1-5 .5-1.5 1-2.5 1-2.5s3.5 1 5 3c1.5 2 2.5 5 2.5 5Z" />
    <path d="m14 14-2.5 2.5" />
    <path d="M6 18c-1.5-1.5-2-3.5-2-5.5 0-2.5.5-4 1-5.5" />
    <path d="M10 12c-1-1-1.5-2.5-1-4" />
    <path d="m4.5 13.5-1-1" />
    <path d="M12 22v-3" />
    <path d="M12 11V9" />
    <path d="m3.5 7.5 1-1" />
  </svg>
);


const treatments = [
  {
    icon: ToothIcon,
    title: "Lentes de Contato Dental",
    description: "Restaure a forma e a cor do seu sorriso com facetas ultrafinas, aplicadas com precisão digital para um resultado natural e duradouro.",
  },
  {
    icon: ImplantIcon,
    title: "Implantes Dentários",
    description: "Recupere a função e a estética com implantes de titânio biocompatíveis. Uma solução definitiva, segura e com aparência natural.",
  },
  {
    icon: Smile,
    title: "Harmonização Orofacial",
    description: "Realce a beleza do seu rosto e sorriso com procedimentos minimamente invasivos que equilibram e rejuvenescem suas feições.",
  },
  {
    icon: ScanLine,
    title: "Ortodontia Digital",
    description: "Alinhadores transparentes e planejamento 100% digital para corrigir seu sorriso de forma discreta, confortável e previsível.",
  },
];

export default function Treatments() {
  return (
    <section id="tratamentos" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Tratamentos de Vanguarda</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Combinamos arte e a mais alta tecnologia para oferecer soluções personalizadas para o seu sorriso.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map((treatment, index) => (
            <Card key={index} className="text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary transition-colors duration-300">
                  <treatment.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle className="pt-4">{treatment.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{treatment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
