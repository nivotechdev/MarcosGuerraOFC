import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ className, variant = 'default' }: { className?: string, variant?: 'default' | 'inverted' }) {
  return (
    <Link href="/" className={cn("relative block w-40 md:w-56 h-16", className)}>
      <Image
        src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/marcosguerra/cert.png"
        alt="Dr. Marcos Guerra Logo"
        fill
        className="object-contain"
        style={variant === 'inverted' ? { filter: 'brightness(0) invert(1)' } : {}}
        sizes="(max-width: 768px) 160px, 224px"
        priority
      />
    </Link>
  );
}
