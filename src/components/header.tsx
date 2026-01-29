'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { Menu, X } from "lucide-react";
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

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#why-us", label: "A Clínica" },
    { href: "#treatments", label: "Tratamentos" },
    { href: "#location", label: "Localização" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className={cn(
      "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <nav className="hidden md:flex items-center justify-center gap-8">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact" passHref className="hidden md:block">
              <Button>Agendar Avaliação</Button>
            </Link>
            <div className="md:hidden">
              {isClient && (
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Abrir menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full h-full bg-background/95 backdrop-blur-xl p-0">
                        <SheetHeader className="flex-row justify-between items-center p-4 border-b">
                             <SheetTitle className="sr-only">Menu Principal</SheetTitle>
                             <SheetDescription className="sr-only">Navegue pelas seções do site.</SheetDescription>
                             <Logo />
                             <SheetClose asChild>
                                <Button variant="ghost" size="icon">
                                    <X className="h-6 w-6" />
                                    <span className="sr-only">Fechar menu</span>
                                </Button>
                            </SheetClose>
                        </SheetHeader>
                        <nav className="flex flex-col items-center justify-center gap-4 pt-12 text-center h-full">
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
                             <Link href="#contact" passHref>
                                <Button onClick={() => setOpen(false)} size="lg" className="mt-8 w-full max-w-xs mx-auto h-12 text-lg">
                                  Agendar Avaliação
                                </Button>
                            </Link>
                        </nav>
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
