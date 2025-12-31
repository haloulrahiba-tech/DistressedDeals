'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';


export function ListingGallery({ images = [] }: { images?: string[] }) {
    const [current, setCurrent] = useState(0);
    const displayImages = images.length > 0 ? images : ['/mock-property.png'];

    return (
        <div className="relative group rounded-2xl overflow-hidden bg-muted aspect-[16/9]">
            {/* Main Image */}
            <img
                src={displayImages[current]}
                alt="Property"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlays */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

            {/* Controls */}
            <button
                onClick={() => setCurrent((prev) => (prev - 1 + displayImages.length) % displayImages.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur hover:bg-white/40 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={() => setCurrent((prev) => (prev + 1) % displayImages.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur hover:bg-white/40 flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-6 flex gap-2">
                {displayImages.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
                    />
                ))}
            </div>

            <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-black/20 backdrop-blur hover:bg-black/40 flex items-center justify-center text-white transition-all">
                <Maximize2 className="w-5 h-5" />
            </button>
        </div>
    );
}
