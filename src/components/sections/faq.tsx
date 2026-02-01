import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "O tratamento dói?",
    answer: "Nossa prioridade é o seu conforto. Utilizamos técnicas de sedação consciente e anestesia local de última geração para garantir que seu tratamento seja o mais indolor e tranquilo possível. Muitos de nossos pacientes relatam não sentir absolutamente nada."
  },
  {
    question: "Aceitam convênios para reembolso?",
    answer: "Não atendemos convênios diretamente, mas fornecemos toda a documentação e laudos necessários para que você possa solicitar o reembolso junto ao seu plano de saúde. Nossa equipe está à disposição para auxiliar nesse processo."
  },
  {
    question: "Quanto tempo dura um implante dentário?",
    answer: "Com os cuidados adequados e manutenções regulares, um implante dentário pode durar a vida toda. Trabalhamos com as melhores marcas do mundo (como Straumann) e tecnologia de ponta para garantir a máxima longevidade e sucesso do seu tratamento."
  },
  {
    question: "Quanto tempo leva o tratamento completo?",
    answer: "O tempo de tratamento varia conforme a complexidade de cada caso. Graças à nossa tecnologia de planejamento digital e protocolos otimizados, como a carga imediata, conseguimos reduzir significativamente o tempo total em comparação com métodos tradicionais."
  },
]

export default function Faq() {
  return (
    <section className="py-20 sm:py-32 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-primary">
            Dúvidas Frequentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Respostas claras para suas perguntas mais importantes.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-accent/30">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline text-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pt-2">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
