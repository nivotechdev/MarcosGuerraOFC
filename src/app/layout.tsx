import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import WhatsappButton from '@/components/whatsapp-button';

export const metadata: Metadata = {
  title: 'Sorriso Premium | Transforming Smiles, Elevating Lives',
  description: 'Advanced technology and unparalleled care for your dental health and perfect aesthetics.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <WhatsappButton />
        <Toaster />
      </body>
    </html>
  );
}
