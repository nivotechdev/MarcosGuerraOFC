'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import React from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const navItems = [
    { href: "#specialist", label: "Especialista" },
    { href: "#treatments", label: "Tratamentos" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className={cn(
      "sticky top-0 left-0 right-0 z-[1000] bg-background/80 backdrop-blur-md",
      "border-b-2 border-primary"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <nav className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact" passHref className="hidden md:block">
              <Button>Agendar Avaliação</Button>
            </Link>
            <div className="md:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Abrir menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full h-screen bg-background/95 backdrop-blur-xl">
                        <SheetHeader className="flex-row justify-between items-center">
                            <SheetTitle className="sr-only">Menu Principal</SheetTitle>
                             <Logo />
                             <SheetClose asChild>
                                <Button variant="ghost" size="icon">
                                    <X className="h-6 w-6" />
                                    <span className="sr-only">Fechar menu</span>
                                </Button>
                            </SheetClose>
                        </SheetHeader>
                        <nav className="flex flex-col gap-4 pt-12 text-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="text-2xl font-medium text-foreground hover:text-primary transition-colors py-3 px-4 rounded-md hover:bg-accent/50"
                                >
                                    {item.label}
                                </Link>
                            ))}
                             <Link href="#contact" passHref>
                                <Button onClick={() => setOpen(false)} size="lg" className="mt-8 w-full max-w-xs mx-auto">Agendar Avaliação</Button>
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
