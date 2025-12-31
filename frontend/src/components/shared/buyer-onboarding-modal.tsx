'use client';

import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShieldCheck, Smartphone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

export function BuyerOnboardingModal({
    isOpen,
    onClose
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [step, setStep] = useState<'email' | 'otp' | 'success'>('email');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    const handleNext = () => {
        if (step === 'email') setStep('otp');
        else if (step === 'otp') setStep('success');
    };

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto focus next input
        if (value && index < 5) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[440px] p-0 overflow-hidden border-none shadow-2xl">
                <div className="bg-primary p-8 text-primary-foreground flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4">
                        {step === 'email' && <Mail className="w-7 h-7" />}
                        {step === 'otp' && <Smartphone className="w-7 h-7" />}
                        {step === 'success' && <CheckCircle2 className="w-7 h-7" />}
                    </div>
                    <DialogTitle className="text-2xl font-bold mb-2 text-white">
                        {step === 'email' && 'Get Institutional Alerts'}
                        {step === 'otp' && 'Verify Your Identity'}
                        {step === 'success' && "You're All Set"}
                    </DialogTitle>
                    <DialogDescription className="text-primary-foreground/80 text-sm">
                        {step === 'email' && 'Join 1,200+ cash buyers receiving verified distress deals.'}
                        {step === 'otp' && 'A 6-digit code has been sent to your mobile.'}
                        {step === 'success' && 'You will now receive early access to verified property exits.'}
                    </DialogDescription>
                </div>

                <div className="p-8 space-y-6">
                    {step === 'email' && (
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Email Address</Label>
                                <Input
                                    id="email"
                                    placeholder="name@company.com"
                                    className="h-12"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-xs uppercase tracking-widest font-bold text-muted-foreground">Phone Number (Required for OTP)</Label>
                                <div className="flex gap-2">
                                    <div className="w-20">
                                        <Input value="+971" readOnly className="h-12 bg-muted text-center font-bold" />
                                    </div>
                                    <Input
                                        id="phone"
                                        placeholder="50 123 4567"
                                        className="h-12 flex-1"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </div>
                            <Button className="w-full h-12 font-bold group" onClick={handleNext}>
                                Send Verification Code
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </div>
                    )}

                    {step === 'otp' && (
                        <div className="space-y-6">
                            <div className="flex justify-between gap-2">
                                {otp.map((digit, i) => (
                                    <Input
                                        key={i}
                                        id={`otp-${i}`}
                                        className="h-14 w-12 text-center text-xl font-bold border-2 focus:border-primary"
                                        maxLength={1}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(i, e.target.value)}
                                    />
                                ))}
                            </div>
                            <div className="text-center">
                                <button className="text-xs font-bold text-primary hover:underline">Resend Code in 45s</button>
                            </div>
                            <Button className="w-full h-12 font-bold" onClick={handleNext}>
                                Complete Verification
                            </Button>
                        </div>
                    )}

                    {step === 'success' && (
                        <div className="space-y-6">
                            <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-4">
                                <div className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <p className="text-xs font-medium leading-relaxed">Early Access: You will see deals 24 hours before free users.</p>
                                </div>
                                <div className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <p className="text-xs font-medium leading-relaxed">Title Deed Insights: Access verified market comparison reports.</p>
                                </div>
                            </div>
                            <Button className="w-full h-12 font-bold" onClick={onClose}>
                                Go to Dashboard
                            </Button>
                        </div>
                    )}

                    <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                        <ShieldCheck className="w-3 h-3" />
                        SECURE ACCESS BY UAE DISTRESS DEALS
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
