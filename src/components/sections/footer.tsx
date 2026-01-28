import Link from "next/link";
import Logo from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>
          <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
             <div className="flex gap-4">
                <Link href="#" className="hover:text-primary transition-colors">Política de Privacidade</Link>
                <Separator orientation="vertical" className="h-5" />
                <Link href="#" className="hover:text-primary transition-colors">Termos de Uso</Link>
             </div>
             <p>© {new Date().getFullYear()} Sorriso Premium. Todos os direitos reservados.</p>
          </div>
          <div className="flex items-center justify-center md:justify-end gap-4">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span>Ambiente Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <span>LGPD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
