import Link from "next/link";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
             <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-primary transition-colors">Terms of Use</Link>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Precision Dentistry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
