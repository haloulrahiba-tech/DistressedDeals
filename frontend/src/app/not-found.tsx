'use client';

import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#FDFDFB] text-[#1A1A1A] flex items-center justify-center p-4">
            <div className="text-center space-y-10 max-w-lg">
                <div className="space-y-2">
                    <h1 className="text-[120px] font-black tracking-tighter text-primary leading-none opacity-20">404</h1>
                    <h2 className="text-4xl font-black tracking-tight mt-[-40px]">Listing Not Found</h2>
                    <p className="text-muted-foreground font-medium">
                        The distress deal you are looking for may have been fulfilled or liquidated. Our marketplace average listing duration is **under 4.2 days**.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/listings">
                        <Button size="lg" className="w-full sm:w-auto h-14 font-black px-10 bg-primary group">
                            Explore Active Exits
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 font-black px-10 group">
                            <Home className="mr-2 w-5 h-5" />
                            Return Home
                        </Button>
                    </Link>
                </div>

                <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground opacity-50">
                    Precision Real Estate Logistics
                </p>
            </div>
        </main>
    );
}
