import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("text-2xl font-serif font-semibold text-foreground transition-colors hover:text-primary tracking-wide", className)}>
      Marcos Guerra
    </Link>
  );
}
