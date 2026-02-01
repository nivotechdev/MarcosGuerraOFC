import Link from "next/link";
import Logo from "@/components/logo";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import WhatsappIcon from "../icons/whatsapp-icon";

export default function Footer() {
  const whatsappUrl = "https://wa.me/555432234237?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

  return (
    <footer className="bg-secondary text-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="md:col-span-2">
            <Logo className="mx-auto md:mx-0" />
            <p className="mt-4 text-sm text-muted-foreground max-w-sm mx-auto md:mx-0">
              Transformando sorrisos com tecnologia, arte e um cuidado genuinamente humano.
            </p>
             <div className="flex justify-center md:justify-start gap-2 mt-6">
                  <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" passHref>
                    <Button size="icon" variant="ghost" className="text-green-600 hover:text-green-700 hover:bg-green-600/10">
                        <WhatsappIcon className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="#" passHref><Button size="icon" variant="ghost" className="text-foreground hover:bg-primary/20 hover:text-primary"><Instagram /></Button></Link>
                  <Link href="#" passHref><Button size="icon" variant="ghost" className="text-foreground hover:bg-primary/20 hover:text-primary"><Facebook /></Button></Link>
                  <Link href="#" passHref><Button size="icon" variant="ghost" className="text-foreground hover:bg-primary/20 hover:text-primary"><Linkedin /></Button></Link>
              </div>
          </div>
          <div>
              <h4 className="font-semibold font-sans text-lg text-foreground">Navegação</h4>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li><Link href="#why-us" className="hover:text-primary transition-colors">A Clínica</Link></li>
                  <li><Link href="#treatments" className="hover:text-primary transition-colors">Tratamentos</Link></li>
                  <li><Link href="#location" className="hover:text-primary transition-colors">Localização</Link></li>
                  <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
          </div>
           <div>
              <h4 className="font-semibold font-sans text-lg text-foreground">Contato</h4>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 hover:text-primary transition-colors">
                    <WhatsappIcon className="h-4 w-4 text-green-600"/>
                    <span>(54) 3223-4237</span>
                  </a>
                </li>
                <li><a href="mailto:ortodontia.mguerra@gmail.com" className="hover:text-primary transition-colors">ortodontia.mguerra@gmail.com</a></li>
                <li className="text-wrap">Avenida Júlio de Castilhos, 2773 – Sala 302-B<br />Bairro São Pelegrino – Caxias do Sul – RS</li>
              </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 flex flex-col-reverse md:flex-row items-center justify-between text-sm text-muted-foreground border-t border-border/20">
           <p className="mt-4 md:mt-0">
            © {new Date().getFullYear()} Dr. Marcos Guerra Odontologia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
             <Link href="#" className="hover:text-primary transition-colors">Política de Privacidade</Link>
             <Link href="#" className="hover:text-primary transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
