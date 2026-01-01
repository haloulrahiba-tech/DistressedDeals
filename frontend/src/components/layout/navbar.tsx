'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { BuyerOnboardingModal } from '@/components/shared/buyer-onboarding-modal';

export function Navbar() {
    const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled
            ? 'bg-background/95 backdrop-blur border-b shadow-sm'
            : 'bg-transparent border-transparent'
            }`}>
            <div className="container flex h-16 items-center justify-between mx-auto px-4">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                            <Image
                                src="/logo-icon.png"
                                alt="UAE Distressed Deals Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className={`text-xl font-bold tracking-tight hidden md:block transition-colors ${isScrolled ? 'text-primary' : 'text-white'
                            }`}>UAE Distress Deals</span>
                    </Link>
                    <div className={`hidden md:flex items-center gap-2 text-sm font-medium transition-colors ${isScrolled ? 'text-muted-foreground' : 'text-white/80'
                        }`}>
                        <Link href="/listings" className={`px-3 py-2 rounded-md cursor-pointer transition-all ${isScrolled ? 'hover:bg-muted hover:text-primary' : 'hover:bg-white/10 hover:text-white'}`}>Listings</Link>
                        <Link href="/how-it-works" className={`px-3 py-2 rounded-md cursor-pointer transition-all ${isScrolled ? 'hover:bg-muted hover:text-primary' : 'hover:bg-white/10 hover:text-white'}`}>How It Works</Link>
                        <Link href="/pricing" className={`px-3 py-2 rounded-md cursor-pointer transition-all ${isScrolled ? 'hover:bg-muted hover:text-primary' : 'hover:bg-white/10 hover:text-white'}`}>Pricing</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className={`cursor-pointer hidden sm:flex transition-colors ${isScrolled ? '' : 'text-white hover:bg-white/10'
                        }`}>EN/AR</Button>
                    <Link href="/list-property">
                        <Button variant="outline" size="sm" className={`cursor-pointer transition-all ${isScrolled
                            ? 'border-primary/50 text-primary hover:bg-primary/5'
                            : 'border-white/50 text-primary hover:bg-white hover:text-black'
                            }`}>
                            List a Property
                        </Button>
                    </Link>
                    <Button size="sm" className="cursor-pointer" onClick={() => setIsOnboardingOpen(true)}>Get Deal Alerts</Button>
                </div>
            </div>
            <BuyerOnboardingModal
                isOpen={isOnboardingOpen}
                onClose={() => setIsOnboardingOpen(false)}
            />
        </nav>
    );
}
