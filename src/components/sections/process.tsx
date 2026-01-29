import { Scan, Microscope, Award, Star } from "lucide-react";

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
        <section id="process" className="py-20 sm:py-32 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif text-foreground">
                        Nossa Abordagem: Precisa, Pessoal e Perfeita
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Sua transformação é um processo cuidadoso, onde cada etapa é planejada para entregar o melhor resultado com a melhor experiência.
                    </p>
                </div>
                <div className="relative mt-20 max-w-5xl mx-auto">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" aria-hidden="true" />

                    {processSteps.map((step, index) => (
                        <div key={index} className="relative mb-12 md:mb-20 last:mb-0">
                            <div className="flex md:items-center flex-col md:flex-row">
                                <div className="flex-1 md:text-right md:pr-12 mb-6 md:mb-0">
                                    <h3 className="text-xl font-semibold font-sans text-foreground mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>

                                <div className="absolute left-1/2 -translate-x-1/2 -top-4 md:static md:translate-x-0 bg-background flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center border-4 border-background">
                                        <step.icon className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                                
                                <div className="flex-1 md:pl-12 border-l-2 md:border-none border-border ml-8 md:ml-0 pl-10 md:pl-0 pb-6">
                                     {/* Empty div for spacing on desktop */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
