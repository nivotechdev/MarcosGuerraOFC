import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import WhatsappButton from '@/components/whatsapp-button';
import BackToTopButton from '@/components/back-to-top-button';

export const metadata: Metadata = {
  title: 'Sorriso Premium | Transformando Sorrisos, Elevando Vidas',
  description: 'Tecnologia avançada e cuidado incomparável para a sua saúde dentária e estética perfeita.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <WhatsappButton />
        <BackToTopButton />
        <Toaster />
      </body>
    </html>
  );
}
