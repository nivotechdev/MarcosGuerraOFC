
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
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
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
    <AnimatePresence>
      {isScrolled && (
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="fixed left-0 right-0 z-50 top-4 flex justify-center pointer-events-none"
        >
          <div className="container mx-auto px-4 flex items-center justify-center max-w-4xl bg-white/80 backdrop-blur-xl border border-white/20 rounded-full shadow-lg h-16 pointer-events-auto">
            <div className="flex items-center justify-between w-full h-full px-6">
              <Logo className="w-24 md:w-28" />
              
              <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <Link 
                    key={item.label} 
                    href={item.href} 
                    className="text-sm font-semibold text-[#0F172A] hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                <Link href={whatsappUrl} passHref target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="rounded-full bg-[#0F172A] text-white hover:bg-[#0F172A]/90">
                    Agendar Agora
                  </Button>
                </Link>
                
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-[#0F172A]">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full bg-white">
                            <SheetHeader className="mb-8 flex flex-row justify-between items-center">
                                 <SheetTitle className="sr-only">Menu</SheetTitle>
                                 <SheetDescription className="sr-only">Navegação principal</SheetDescription>
                                 <Logo />
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
                                        className="text-2xl font-medium py-4 border-b text-[#0F172A]"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                 <Link href={whatsappUrl} passHref target="_blank" rel="noopener noreferrer">
                                    <Button onClick={() => setOpen(false)} size="lg" className="mt-8 w-full rounded-full bg-[#0F172A] text-white">
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
        </motion.header>
      )}
    </AnimatePresence>
  );
}
