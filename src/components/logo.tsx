import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ className, variant = 'default' }: { className?: string, variant?: 'default' | 'inverted' }) {
  return (
    <Link href="/" className={cn("relative block w-60 h-16", className)}>
      <Image
        src="https://images-ext-1.discordapp.net/external/BvJ6rhBe4CWFEECdk53cYJS9PLmXSc-d7xy1Z68o18E/https/fcukvizlaiabepwsjfjo.supabase.co/storage/v1/object/public/Clicina%2520dentista/Imagens/Clinica%2520ortodontia%2520%281%29.png?format=webp&quality=lossless"
        alt="Dr. Marcos Guerra Logo"
        fill
        className="object-contain"
        style={variant === 'inverted' ? { filter: 'brightness(0) invert(1)' } : {}}
        sizes="240px"
        priority
      />
    </Link>
  );
}
