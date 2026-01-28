import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";

export default function Header() {
  const navItems = [
    { href: "#specialist", label: "Specialist" },
    { href: "#treatments", label: "Treatments" },
    { href: "#clinic", label: "Clinic" },
    { href: "#location", label: "Location" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#location" passHref>
              <Button>Book Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
