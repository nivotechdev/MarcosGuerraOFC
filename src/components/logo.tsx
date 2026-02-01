import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ className, variant = 'default' }: { className?: string, variant?: 'default' | 'inverted' }) {
  return (
    <Link href="/" className={cn("relative block w-36 md:w-52 h-20", className)}>
      <Image
        src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/marcosguerra/Design_sem_nome__3_-removebg-preview.png"
        alt="Dr. Marcos Guerra Logo"
        fill
        className="object-contain"
        style={variant === 'inverted' ? { filter: 'brightness(0) invert(1)' } : {}}
        sizes="(max-width: 768px) 144px, 208px"
        priority
      />
    </Link>
  );
}
