import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("relative block w-48 h-12", className)}>
      <Image
        src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/marcosguerra/Clinica_ortodontia.webp"
        alt="Dr. Marcos Guerra Logo"
        fill
        className="object-contain"
        sizes="192px"
        priority
      />
    </Link>
  );
}
