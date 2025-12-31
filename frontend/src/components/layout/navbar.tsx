'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { BuyerOnboardingModal } from '@/components/shared/buyer-onboarding-modal';

export function Navbar() {
    const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
                        <span className="text-xl font-bold tracking-tight text-primary hidden md:block">UAE Distress Deals</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        <Link href="/listings" className="hover:text-primary transition-colors">Listings</Link>
                        <Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link>
                        <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="hidden sm:flex">EN/AR</Button>
                    <Link href="/list-property">
                        <Button variant="outline" size="sm">List a Property</Button>
                    </Link>
                    <Button size="sm" onClick={() => setIsOnboardingOpen(true)}>Get Deal Alerts</Button>
                </div>
            </div>
            <BuyerOnboardingModal
                isOpen={isOnboardingOpen}
                onClose={() => setIsOnboardingOpen(false)}
            />
        </nav>
    );
}
