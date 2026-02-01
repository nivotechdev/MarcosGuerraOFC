import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import WhatsAppFab from '@/components/whatsapp-fab';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['700', '800'],
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
    <html lang="pt-BR" className={`${inter.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
        <WhatsAppFab />
      </body>
    </html>
  );
}
