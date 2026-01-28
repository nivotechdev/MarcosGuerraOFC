'use client';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhatsappButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="https://wa.me/5511987654321"
        target="_blank"
        rel="noopener noreferrer"
        passHref
      >
        <Button size="icon" className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE57] shadow-lg animate-pulse-whatsapp">
          <Phone className="w-7 h-7 text-white" />
          <span className="sr-only">Contato no WhatsApp</span>
        </Button>
      </Link>
    </div>
  );
}
