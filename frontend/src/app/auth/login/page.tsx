'use client';

import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFB] text-[#1A1A1A]">
            <Navbar />

            <div className="container mx-auto px-4 pt-20 pb-32 flex justify-center">
                <Card className="w-full max-w-[450px] border shadow-2xl shadow-primary/5 bg-white">
                    <CardHeader className="space-y-2 text-center pb-8 border-b mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-2xl font-black tracking-tight">Access Terminal</CardTitle>
                        <CardDescription className="text-sm font-medium">Verify your identity to access secured distress deals.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Corporate Email</Label>
                            <Input id="email" type="email" placeholder="name@company.com" className="h-12 bg-muted/30 border-none focus-visible:ring-primary" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="phone" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Mobile Phone</Label>
                            </div>
                            <Input id="phone" type="tel" placeholder="+971 -- --- ----" className="h-12 bg-muted/30 border-none focus-visible:ring-primary" />
                        </div>

                        <Button className="w-full h-14 font-black text-lg bg-primary hover:bg-primary/90 transition-all group">
                            Request Access Code
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t"></span>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-white px-2 text-muted-foreground font-bold tracking-tighter italic">Secured by Twilio</span>
                            </div>
                        </div>

                        <p className="text-center text-xs text-muted-foreground">
                            New to the terminal? <Link href="/auth/register" className="text-primary font-bold hover:underline">Register for investor access</Link>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
