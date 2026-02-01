'use client';

import Link from 'next/link';
import WhatsappIcon from '@/components/icons/whatsapp-icon';

export default function WhatsAppFab() {
  const whatsappUrl = "https://wa.me/555432234237?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.";

  return (
    <Link 
      href={whatsappUrl} 
      passHref 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      aria-label="Fale conosco no WhatsApp"
    >
      <WhatsappIcon className="h-8 w-8" />
    </Link>
  );
}
