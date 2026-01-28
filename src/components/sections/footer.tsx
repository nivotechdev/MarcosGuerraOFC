import Link from "next/link";
import Logo from "@/components/logo";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <Logo className="text-background hover:text-primary" />
            <p className="mt-4 text-sm text-background/70 max-w-xs mx-auto md:mx-0">
                Odontologia de alta performance por Dr. Marcos Guerra.
            </p>
          </div>
          <div>
              <h4 className="font-semibold font-headline text-lg">Links Rápidos</h4>
              <ul className="mt-4 space-y-2 text-background/70">
                  <li><Link href="#specialist" className="hover:text-primary transition-colors">Especialista</Link></li>
                  <li><Link href="#treatments" className="hover:text-primary transition-colors">Tratamentos</Link></li>
                  <li><Link href="#clinic" className="hover:text-primary transition-colors">Clínica</Link></li>
                  <li><Link href="#contact" className="hover:text-primary transition-colors">Contato</Link></li>
              </ul>
          </div>
           <div>
              <h4 className="font-semibold font-headline text-lg">Siga-nos</h4>
              <div className="flex justify-center md:justify-start gap-4 mt-4">
                  <Link href="#" passHref><Button size="icon" variant="ghost" className="hover:bg-primary/20 hover:text-primary"><Instagram /></Button></Link>
                  <Link href="#" passHref><Button size="icon" variant="ghost" className="hover:bg-primary/20 hover:text-primary"><Facebook /></Button></Link>
                  <Link href="#" passHref><Button size="icon" variant="ghost" className="hover:bg-primary/20 hover:text-primary"><Twitter /></Button></Link>
              </div>
          </div>
        </div>
        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-background/70">
          <div className="flex items-center gap-6">
             <Link href="#" className="hover:text-primary transition-colors">Política de Privacidade</Link>
             <Link href="#" className="hover:text-primary transition-colors">Termos de Uso</Link>
          </div>
          <p className="mt-4 md:mt-0">
            © {new Date().getFullYear()} Marcos Guerra. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
