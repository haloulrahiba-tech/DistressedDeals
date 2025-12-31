'use client';

import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShieldCheck, ArrowRight, UserCircle2, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
    return (
        <main className="min-h-screen bg-[#FDFDFB] text-[#1A1A1A]">
            <Navbar />

            <div className="container mx-auto px-4 pt-20 pb-32 flex justify-center">
                <Card className="w-full max-w-[550px] border shadow-2xl shadow-primary/5 bg-white">
                    <CardHeader className="space-y-2 text-center pb-8 border-b mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                            <UserCircle2 className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-2xl font-black tracking-tight">Investor Registration</CardTitle>
                        <CardDescription className="text-sm font-medium">Join 1,200+ qualified investors receiving real-time distress signals.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="firstName" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">First Name</Label>
                                <Input id="firstName" placeholder="Kartikey" className="h-12 bg-muted/30 border-none focus-visible:ring-primary" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Last Name</Label>
                                <Input id="lastName" placeholder="Rai" className="h-12 bg-muted/30 border-none focus-visible:ring-primary" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Corporate Email</Label>
                            <Input id="email" type="email" placeholder="name@company.com" className="h-12 bg-muted/30 border-none focus-visible:ring-primary" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="investorType" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Investor Type</Label>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl border-2 border-primary/20 bg-primary/5 flex flex-col items-center gap-2 cursor-pointer hover:border-primary transition-all">
                                    <UserCircle2 className="w-5 h-5 text-primary" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Individual</span>
                                </div>
                                <div className="p-4 rounded-xl border-2 border-transparent bg-muted/30 flex flex-col items-center gap-2 cursor-pointer hover:border-primary/20 transition-all">
                                    <Building2 className="w-5 h-5 text-muted-foreground" />
                                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Institutional</span>
                                </div>
                            </div>
                        </div>

                        <Button className="w-full h-14 font-black text-lg bg-primary hover:bg-primary/90 transition-all group">
                            Create Investor Account
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <p className="text-center text-xs text-muted-foreground">
                            Already registered? <Link href="/auth/login" className="text-primary font-bold hover:underline">Access Terminal</Link>
                        </p>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
