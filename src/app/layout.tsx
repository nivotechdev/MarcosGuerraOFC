import type {Metadata, Viewport} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import WhatsappButton from '@/components/whatsapp-button';
import BackToTopButton from '@/components/back-to-top-button';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Sorriso Premium | Transformando Sorrisos, Elevando Vidas',
  description: 'Tecnologia avançada e cuidado incomparável para a sua saúde dentária e estética perfeita.',
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
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="font-body antialiased">
        {children}
        <WhatsappButton />
        <BackToTopButton />
        <Toaster />
      </body>
    </html>
  );
}
