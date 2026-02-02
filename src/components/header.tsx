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

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappUrl = "https://wa.me/555432234237?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

  const navItems = [
    { href: "#specialist", label: "A Clínica" },
    { href: "#treatments", label: "Tratamentos" },
    { href: "#location", label: "Localização" },
  ];

  return (
    <header className={cn(
      "fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center",
      isScrolled ? "top-4" : "top-0"
    )}>
      <div className={cn(
        "container mx-auto px-4 transition-all duration-500 flex items-center justify-center",
        isScrolled 
          ? "max-w-4xl bg-white/80 backdrop-blur-xl border border-white/20 rounded-full shadow-lg h-16" 
          : "max-w-full bg-transparent h-20"
      )}>
        <div className="flex items-center justify-between w-full h-full px-4">
          <Logo variant={isScrolled ? "default" : "inverted"} className={cn("transition-all", isScrolled ? "w-28 md:w-32" : "w-32 md:w-40")} />
          
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                href={item.href} 
                className={cn(
                  "text-sm font-medium transition-colors",
                  isScrolled ? "text-primary hover:text-accent" : "text-white hover:text-accent"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href={whatsappUrl} passHref target="_blank" rel="noopener noreferrer" className="hidden md:block">
              <Button size={isScrolled ? "sm" : "default"} className="rounded-full">
                Agendar Agora
              </Button>
            </Link>
            
            <div className="md:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className={isScrolled ? "text-primary" : "text-white"}>
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full bg-white">
                        <SheetHeader className="mb-8 flex flex-row justify-between items-center">
                             <SheetTitle className="sr-only">Menu</SheetTitle>
                             <SheetDescription className="sr-only">Navegação principal</SheetDescription>
                             <Logo variant="default" />
                             <SheetClose asChild>
                                <Button variant="ghost" size="icon">
                                    <X className="h-6 w-6" />
                                </Button>
                             </SheetClose>
                        </SheetHeader>
                        <nav className="flex flex-col gap-4 text-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="text-2xl font-medium py-4 border-b text-primary"
                                >
                                    {item.label}
                                </Link>
                            ))}
                             <Link href={whatsappUrl} passHref target="_blank" rel="noopener noreferrer">
                                <Button onClick={() => setOpen(false)} size="lg" className="mt-8 w-full rounded-full">
                                  Agendar Avaliação
                                </Button>
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
