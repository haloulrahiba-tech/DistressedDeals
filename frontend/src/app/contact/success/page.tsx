'use client';

import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, ArrowRight, FileText, Send } from 'lucide-react';
import Link from 'next/link';

export default function InquirySuccessPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFB] text-[#1A1A1A]">
            <Navbar />

            <div className="container mx-auto px-4 pt-32 pb-32 flex justify-center text-center">
                <div className="max-w-xl space-y-8">
                    <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 mx-auto animate-bounce">
                        <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl font-black tracking-tight">Inquiry Logged Securely</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Your institutional interest has been transmitted to the verified owner.
                            A legal representative will contact you within **12 business hours** with the full MOU draft.
                        </p>
                    </div>

                    <Card className="border-dashed border-2 bg-muted/10">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-4 text-left">
                                <div className="w-12 h-12 rounded-xl bg-white border flex items-center justify-center text-primary shadow-sm">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Deal Reference</p>
                                    <p className="font-bold">#DIST-DXB-201-OPERA</p>
                                </div>
                                <div className="ml-auto text-right">
                                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Verification</p>
                                    <p className="font-bold text-emerald-600">Pending Reveal</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/listings">
                            <Button size="lg" className="w-full sm:w-auto h-14 font-black px-10 group">
                                View Similar Exits
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link href="/dashboard">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 font-black px-10 border-primary text-primary hover:bg-primary/5">
                                Track Inquiry in Dashboard
                            </Button>
                        </Link>
                    </div>

                    <div className="pt-8 flex items-center justify-center gap-6 text-[10px] uppercase font-bold tracking-widest text-muted-foreground opacity-50">
                        <div className="flex items-center gap-1.5"><ShieldCheck className="w-3 h-3" /> Fully Encrypted</div>
                        <div className="flex items-center gap-1.5"><Send className="w-3 h-3" /> SLA Tracked (12h)</div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function ShieldCheck({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
