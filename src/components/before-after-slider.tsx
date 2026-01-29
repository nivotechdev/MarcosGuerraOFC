'use client';

import Image from 'next/image';
import { GripVertical } from 'lucide-react';

type BeforeAfterSliderProps = {
  beforeImage: { src: string; alt: string, hint: string };
  afterImage: { src: string; alt: string, hint: string };
};

export default function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  // This is a static representation of a before/after slider.
  // For full interactivity, a library like 'react-compare-slider' would be used.
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-[4/3] overflow-hidden rounded-lg shadow-2xl">
      <div className="absolute inset-0 flex">
        <div className="relative w-1/2 h-full">
          <Image
            src={beforeImage.src}
            alt={beforeImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
            data-ai-hint={beforeImage.hint}
          />
          <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ANTES
          </div>
        </div>
        <div className="relative w-1/2 h-full">
          <Image
            src={afterImage.src}
            alt={afterImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
            data-ai-hint={afterImage.hint}
          />
          <div className="absolute top-4 right-4 bg-white/80 text-foreground px-3 py-1 rounded-full text-sm font-semibold">
            DEPOIS
          </div>
        </div>
      </div>

      {/* Divider line and handle */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-1.5 bg-white/80 backdrop-blur-sm cursor-ew-resize flex items-center justify-center">
        <div className="bg-white rounded-full p-2 shadow-lg">
          <GripVertical className="h-6 w-6 text-primary" />
        </div>
      </div>
    </div>
  );
}
