import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Gem, Moon, ShieldCheck, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const benefits = [
    {
        icon: Award,
        title: "Ortodontia – Aparelhos autoligados",
        description: "Alinhe seu sorriso com aparelhos autoligados modernos, que oferecem um tratamento mais rápido, confortável e discreto."
    },
    {
        icon: ShieldCheck,
        title: "Profilaxia dentária",
        description: "A prevenção é o melhor cuidado. Mantenha seu sorriso saudável com nossa limpeza dental profissional, removendo placa e tártaro."
    },
    {
        icon: Sparkles,
        title: "Clareamentos",
        description: "Obtenha um sorriso mais branco e radiante com nossas técnicas de clareamento dental, seguras e com resultados surpreendentes."
    },
    {
        icon: Moon,
        title: "Placas de bruxismo",
        description: "Proteja seus dentes contra o desgaste do bruxismo. Confeccionamos placas personalizadas para seu conforto e segurança noturna."
    },
    {
        icon: Gem,
        title: "Restaurações e facetas de resina",
        description: "Recupere a estética e função dos dentes com restaurações e facetas de resina, que mimetizam a aparência natural do seu sorriso."
    }
  ];

export default function Benefits() {
  return (
    <section id="treatments" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">Nossos Tratamentos</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Conheça algumas de nossas especialidades, projetadas para oferecer o melhor cuidado para o seu sorriso.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit) => {
            const isMainService = benefit.title === "Clareamentos";
            return (
              <Card
                key={benefit.title}
                className={cn(
                  "relative text-center shadow-sm transition-all duration-300 flex flex-col",
                  isMainService
                    ? "bg-primary text-primary-foreground shadow-2xl md:scale-105 z-10 md:col-span-2"
                    : "bg-card border border-primary/20 hover:shadow-lg hover:-translate-y-2"
                )}
              >
                {isMainService && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 border-primary bg-background text-primary font-bold">
                    MAIS PROCURADO
                  </Badge>
                )}
                <CardHeader className="items-center">
                  <div className={cn(
                      "bg-primary/10 p-3 rounded-full mb-4",
                      isMainService && "bg-white/20"
                  )}>
                    <benefit.icon className={cn("h-8 w-8 text-primary", isMainService && "text-white")} />
                  </div>
                  <CardTitle className="font-sans text-xl font-semibold">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className={cn(isMainService ? "text-primary-foreground/90" : "text-muted-foreground")}>
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
