import { Scan, Microscope, Award, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const processSteps = [
    {
        icon: Scan,
        title: "1. Diagnóstico e Planejamento 3D",
        description: "Iniciamos com um mapeamento digital completo do seu sorriso, usando tecnologia 3D para um diagnóstico preciso e um plano de tratamento sem surpresas."
    },
    {
        icon: Microscope,
        title: "2. Design do Sorriso",
        description: "Você participa ativamente da criação do seu novo sorriso. Juntos, desenhamos a forma, cor e alinhamento ideais, garantindo um resultado que reflete sua personalidade."
    },
    {
        icon: Award,
        title: "3. Execução de Excelência",
        description: "Com o planejamento aprovado, nossos especialistas executam o tratamento com precisão técnica, habilidade artística e foco total no seu conforto e segurança."
    },
    {
        icon: Star,
        title: "4. Acompanhamento Premium",
        description: "Seu tratamento não termina na cadeira. Oferecemos um acompanhamento dedicado para garantir a adaptação perfeita e a longevidade do seu novo sorriso."
    }
];


export default function Process() {
    return (
        <section id="process" className="py-20 sm:py-32 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                        Nossa Abordagem: Precisa, Pessoal e Perfeita
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Sua transformação é um processo cuidadoso, onde cada etapa é planejada para entregar o melhor resultado com a melhor experiência.
                    </p>
                </div>

                {/* Mobile-first timeline */}
                <div className="mt-16 max-w-lg mx-auto md:hidden">
                    <ul className="space-y-12">
                        {processSteps.map((step, index) => (
                            <li key={index} className="relative flex items-start gap-6">
                                {index < processSteps.length - 1 && (
                                    <div className="absolute left-8 top-8 h-full w-px bg-border -translate-x-1/2" aria-hidden="true" />
                                )}
                                <div className="flex-shrink-0 relative z-10 bg-secondary">
                                    <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center border-4 border-secondary">
                                        <step.icon className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                                <div className="pt-1 flex-1">
                                    <h3 className="text-xl font-semibold font-sans text-foreground mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Desktop timeline */}
                <div className="relative mt-20 max-w-5xl mx-auto hidden md:block">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" aria-hidden="true" />
                    {processSteps.map((step, index) => (
                        <div key={index} className="relative mb-20 last:mb-0">
                            <div className={cn("flex items-center", { "flex-row-reverse": index % 2 !== 0 })}>
                                <div className="w-1/2 px-12">
                                     <div className={cn({ "text-right": index % 2 === 0, "text-left": index % 2 !== 0 })}>
                                        <h3 className="text-xl font-semibold font-sans text-foreground mb-2">{step.title}</h3>
                                        <p className="text-muted-foreground">{step.description}</p>
                                    </div>
                                </div>
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center border-4 border-secondary">
                                        <step.icon className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                                <div className="w-1/2 px-12">
                                    {/* Spacer */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
