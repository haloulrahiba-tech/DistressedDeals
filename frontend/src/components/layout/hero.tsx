'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/hero-poster.jpg"
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                >
                    <source src="/hero-bg.webm" type="video/webm" />
                    <source src="/hero-bg.mp4" type="video/mp4" />
                </video>
                {/* Gradient overlay for legibility - no blur */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </div>

            <div className="container relative z-10 mx-auto px-4 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-4 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-[10px] font-bold text-white uppercase tracking-widest mb-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Real-time Verified Distress Market
                    </div>
                    <h1 className="text-4xl md:text-7xl pt-4 pb-2 font-extrabold tracking-tight text-white drop-shadow-2xl">
                        Some Properties Don’t Wait for the Market <br className="hidden md:block" />
                    </h1>
                    <p className="text-lg md:text-xl text-white font-semibold max-w-2xl mx-auto px-4 py-2 rounded-lg bg-black/20 backdrop-blur-sm drop-shadow-lg">
                        Institutional-grade access to verified, market-benchmarked distress deals
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-wrap justify-center gap-4 py-4"
                >
                    <Button size="lg" className="px-8 font-extrabold text-base rounded-lg h-14 bg-primary hover:bg-primary/90 text-white border-none shadow-xl shadow-primary/40">
                        Get Instant Deal Alerts
                    </Button>
                    <Link href="/list-property">
                        <Button size="lg" variant="outline" className="px-8 font-extrabold text-base rounded-lg h-14 bg-white/5 border-white/40 text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md">
                            List a Property Privately
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
