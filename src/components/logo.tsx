
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string, variant?: 'default' | 'inverted' }) {
  return (
    <Link href="/" className={cn("relative block", className)}>
      <Image
        src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/marcosguerra/Design_sem_nome__3_-removebg-preview.png"
        alt="Dr. Marcos Guerra Logo"
        fill
        className="object-contain"
        style={{ imageRendering: '-webkit-optimize-contrast' } as React.CSSProperties}
        sizes="(max-width: 768px) 150px, 200px"
        priority
      />
    </Link>
  );
}
