'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { Menu, X, Instagram, Facebook, Linkedin } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import React from "react";
import { cn } from "@/lib/utils";
import WhatsappIcon from "@/components/icons/whatsapp-icon";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  const whatsappUrl = "https://wa.me/555432234237?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

  const navItems = [
    { href: "#specialist", label: "A Clínica" },
    { href: "#treatments", label: "Tratamentos" },
    { href: "#location", label: "Localização" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full border-b z-50 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo variant="default" />
          <nav className="hidden md:flex items-center justify-center gap-8">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-sm font-medium hover:text-accent transition-colors text-primary">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link href={whatsappUrl} passHref target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <Button>Agendar Avaliação</Button>
            </Link>
            <div className="md:hidden">
              {isClient && (
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/10">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Abrir menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full h-full bg-muted p-0 flex flex-col">
                        <SheetHeader className="flex-row justify-between items-center p-4 border-b">
                             <SheetTitle className="sr-only">
                               Menu Principal
                             </SheetTitle>
                             <SheetDescription className="sr-only">Navegue pelas seções do site.</SheetDescription>
                             <Logo variant="default" />
                             <SheetClose asChild>
                                <Button variant="ghost" size="icon" className="text-primary">
                                    <X className="h-6 w-6" />
                                    <span className="sr-only">Fechar menu</span>
                                </Button>
                            </SheetClose>
                        </SheetHeader>
                        <nav className="flex flex-col items-center justify-center gap-4 pt-12 text-center flex-grow">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="text-2xl font-medium text-foreground hover:text-primary transition-colors py-3 px-4 rounded-md"
                                >
                                    {item.label}
                                </Link>
                            ))}
                             <Link href={whatsappUrl} passHref target="_blank" rel="noopener noreferrer">
                                <Button onClick={() => setOpen(false)} size="lg" className="mt-8 w-full max-w-xs mx-auto h-12 text-lg">
                                  Agendar Avaliação Premium
                                </Button>
                            </Link>
                        </nav>
                        <div className="p-6 border-t">
                          <div className="flex justify-center gap-4">
                              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" passHref>
                                <Button size="icon" variant="ghost" className="text-primary hover:text-accent/80 hover:bg-primary/10">
                                    <WhatsappIcon className="h-5 w-5" />
                                </Button>
                              </Link>
                              <Link href="#" passHref><Button size="icon" variant="ghost" className="text-primary hover:bg-primary/20 hover:text-accent"><Instagram /></Button></Link>
                              <Link href="#" passHref><Button size="icon" variant="ghost" className="text-primary hover:bg-primary/20 hover:text-accent"><Facebook /></Button></Link>
                              <Link href="#" passHref><Button size="icon" variant="ghost" className="text-primary hover:bg-primary/20 hover:text-accent"><Linkedin /></Button></Link>
                          </div>
                        </div>
                    </SheetContent>
                </Sheet>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
