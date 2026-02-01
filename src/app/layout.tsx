import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import WhatsAppFab from '@/components/whatsapp-fab';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: 'Dr. Marcos Guerra | Odontologia de Alta Performance',
  description: 'A Experiência que Você Exige, O Sorriso que Você Merece. Odontologia digital avançada para tratamentos rápidos, precisos e sem dor.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfairDisplay.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
        <WhatsAppFab />
      </body>
    </html>
  );
}
