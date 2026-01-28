import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-headline font-semibold text-foreground transition-colors hover:text-primary">
      Precision Dentistry
    </Link>
  );
}
