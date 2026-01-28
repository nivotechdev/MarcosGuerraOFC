import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <nav className="flex items-center gap-4">
            <Link href="#contato" passHref>
              <Button>Agendar Consulta de Avaliação</Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
