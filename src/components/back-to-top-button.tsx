'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Button
      size="icon"
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-24 right-6 z-50 rounded-full w-14 h-14 bg-primary text-primary-foreground shadow-lg transition-opacity hover:bg-primary/90',
        isVisible ? 'opacity-100' : 'opacity-0',
        'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
      )}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="h-7 w-7" />
    </Button>
  );
}
