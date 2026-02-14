'use client';

import Link from 'next/link';
import WhatsappIcon from '@/components/icons/whatsapp-icon';

export default function WhatsAppFab() {
  const whatsappUrl = "https://wa.me/5554991696666";

  return (
    <Link 
      href={whatsappUrl} 
      passHref 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#25D366]/90 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      aria-label="Fale conosco no WhatsApp"
    >
      <WhatsappIcon className="h-8 w-8" />
    </Link>
  );
}
