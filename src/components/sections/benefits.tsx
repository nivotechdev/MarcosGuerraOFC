import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Gem, Moon, ShieldCheck, Sparkles } from "lucide-react";

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
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">Nossos Tratamentos</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Conheça algumas de nossas especialidades, projetadas para oferecer o melhor cuidado para o seu sorriso.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto auto-rows-fr">
          {benefits.map((benefit) => (
            <Card
              key={benefit.title}
              className="text-center shadow-sm transition-all duration-300 flex flex-col group h-full bg-card border border-primary/20 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary"
            >
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-sans text-xl font-semibold">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}