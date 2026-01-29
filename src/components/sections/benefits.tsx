import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Smile, Cpu } from "lucide-react";

const benefits = [
    {
        icon: Cpu,
        title: "Diagnóstico Preciso e Instantâneo",
        description: "Utilizamos scanners 3D e inteligência artificial para um plano de tratamento perfeito, com menos tempo na cadeira e mais certeza no resultado."
    },
    {
        icon: Smile,
        title: "Tratamento sem Ansiedade",
        description: "Com sedação consciente e um ambiente projetado para o seu conforto, transformamos o medo de dentista em uma experiência tranquila e relaxante."
    },
    {
        icon: CheckCircle,
        title: "Dentes Fixos em até 48 Horas",
        description: "Nosso protocolo de carga imediata permite a instalação de implantes e próteses fixas em tempo recorde, devolvendo seu sorriso rapidamente."
    },
    {
        icon: Shield,
        title: "Resultados Naturais e Duradouros",
        description: "Cada detalhe é esculpido para harmonizar com seu rosto, utilizando materiais biocompatíveis de última geração para um sorriso belo e perene."
    },
  ];

export default function Benefits() {
  return (
    <section id="treatments" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">Excelência em cada detalhe</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Não oferecemos apenas tratamentos. Entregamos resultados que transformam vidas através de quatro pilares fundamentais.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="text-center bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-2 flex flex-col border border-primary/20">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-3 rounded-full mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-sans text-xl font-semibold">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
