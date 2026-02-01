import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("relative block w-60 h-16", className)}>
      <Image
        src="https://whfdrrdozhyavyflgaxo.supabase.co/storage/v1/object/public/marcosguerra/Clinica_ortodontia.jpg"
        alt="Dr. Marcos Guerra Logo"
        fill
        className="object-contain"
        sizes="240px"
        priority
      />
    </Link>
  );
}
