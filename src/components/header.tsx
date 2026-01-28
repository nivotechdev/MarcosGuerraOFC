'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import React from "react";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const navItems = [
    { href: "#specialist", label: "Especialista" },
    { href: "#treatments", label: "Tratamentos" },
    { href: "#clinic", label: "Clínica" },
    { href: "#contact", label: "Contato" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-[1000] bg-background/80 backdrop-blur-sm">
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
              <Button>Agendar Consulta</Button>
            </Link>
            <div className="md:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Abrir menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <nav className="flex flex-col gap-8 pt-16">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <Link href="#contact" passHref>
                                <Button onClick={() => setOpen(false)} size="lg" className="mt-8">Agendar Consulta</Button>
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
