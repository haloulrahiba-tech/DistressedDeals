'use client';

import { Navbar } from '@/components/layout/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function LegalPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFB] text-[#1A1A1A] pb-24">
            <Navbar />

            <div className="container mx-auto px-4 pt-20">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-5xl font-black tracking-tight">Policies & Terms</h1>
                        <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs">Last Updated: December 2025</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                        <div className="md:col-span-4">
                            <div className="sticky top-24 space-y-2">
                                <button className="w-full text-left p-4 rounded-xl font-bold bg-primary text-white shadow-lg">Terms of Service</button>
                                <button className="w-full text-left p-4 rounded-xl font-bold text-muted-foreground hover:bg-muted/30 transition-all">Privacy Policy</button>
                                <button className="w-full text-left p-4 rounded-xl font-bold text-muted-foreground hover:bg-muted/30 transition-all">Data Verification SLA</button>
                                <button className="w-full text-left p-4 rounded-xl font-bold text-muted-foreground hover:bg-muted/30 transition-all">Investment Disclaimer</button>
                            </div>
                        </div>

                        <div className="md:col-span-8 space-y-10 text-muted-foreground leading-relaxed">
                            <section className="space-y-4">
                                <h2 className="text-2xl font-black text-[#1A1A1A]">1. Platform Scope</h2>
                                <p>
                                    UAE Distress Deals is a data-driven marketplace facilitating connections between motivated property sellers and qualified cash buyers. We do not act as a real estate brokerage nor do we partake in transaction commissions.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-black text-[#1A1A1A]">2. Verification Integrity</h2>
                                <p>
                                    While we utilize Dubai Land Department (DLD) open records to verify titles and transaction history, users are mandated to perform their own due diligence through licensed legal counsel before entering into an MOU (Form F).
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-black text-[#1A1A1A]">3. Premium Membership</h2>
                                <p>
                                    Premium access provides a 24-hour temporary information embargo for listed distress assets. This period is intended to provide institutional and professional buyers with sufficient time for data analysis.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-2xl font-black text-[#1A1A1A]">4. Data Privacy</h2>
                                <p>
                                    Corporate emails and mobile numbers are strictly used for identity verification via Twilio and internal deal routing. We do not sell user data to secondary lead aggregates.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
