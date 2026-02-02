
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
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "circOut" }}
          className="fixed left-0 right-0 z-50 top-6 flex justify-center pointer-events-none px-4"
        >
          <div className="w-full max-w-[95%] md:max-w-3xl bg-white/80 backdrop-blur-xl border border-white/20 rounded-full shadow-xl shadow-black/5 h-14 pointer-events-auto flex items-center overflow-hidden">
            <div className="flex items-center justify-between w-full h-full px-3 md:px-8 py-1">
              {/* Logo Container - Protagonist on Mobile */}
              <div className="flex-shrink-0 flex items-center max-w-[60%] md:max-w-none">
                <Logo className="w-32 md:w-48 h-12 md:h-12" />
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-10">
                {navItems.map((item) => (
                  <Link 
                    key={item.label} 
                    href={item.href} 
                    className="text-sm font-medium text-primary hover:text-accent transition-colors tracking-wide"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Action Group: Button + Menu - Compact on Mobile */}
              <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
                <Link href={whatsappUrl} passHref target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="sm" 
                    className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-3 md:px-6 h-8 md:h-9 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all shadow-sm"
                  >
                    Agendar
                  </Button>
                </Link>
                
                {/* Mobile Menu Trigger */}
                <div className="md:hidden flex items-center">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-primary h-8 w-8 p-0 hover:bg-transparent active:bg-transparent">
                                <Menu className="h-5 w-5" strokeWidth={1.5} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full bg-white border-none">
                            <SheetHeader className="mb-12 flex flex-row justify-between items-center">
                                 <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                                 <SheetDescription className="sr-only">Navegação principal da clínica</SheetDescription>
                                 <Logo className="w-36 h-14" />
                                 <SheetClose asChild>
                                    <Button variant="ghost" size="icon" className="text-primary">
                                        <X className="h-6 w-6" strokeWidth={1.5} />
                                    </Button>
                                 </SheetClose>
                            </SheetHeader>
                            <nav className="flex flex-col gap-6 text-left px-4">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="text-3xl font-serif font-bold py-2 text-primary active:text-accent transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                 <Link href={whatsappUrl} passHref target="_blank" rel="noopener noreferrer" className="mt-8">
                                    <Button onClick={() => setOpen(false)} size="lg" className="w-full h-14 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-xl hover:bg-primary/90">
                                      Agendar Agora
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
