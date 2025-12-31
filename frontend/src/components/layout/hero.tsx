'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative pt-20 pb-16 bg-[#FDFDFB] border-b overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

            <div className="container relative mx-auto px-4 text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-4 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest mb-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Real-time Verified Distress Market
                    </div>
                    <h1 className="text-4xl md:text-6xl pt-4 pb-2 font-extrabold tracking-tight text-[#1A1A1A]">
                        Verified Time-Sensitive <br className="hidden md:block" />
                        Property Exits in the UAE
                    </h1>
                    <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                        Institutional-grade access to owner-verified, market-benchmarked distress deals.
                        No spam. No hype. Just verified mathematics.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="flex flex-wrap justify-center gap-4 py-4"
                >
                    <Button size="lg" className="px-8 font-extrabold text-base rounded-lg h-14 bg-primary hover:bg-primary/90">
                        Get Instant Deal Alerts
                    </Button>
                    <Button size="lg" variant="outline" className="px-8 font-extrabold text-base rounded-lg h-14 border-primary text-primary hover:bg-primary/5">
                        List a Property Privately
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
