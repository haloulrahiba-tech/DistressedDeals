'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Upload,
    CheckCircle2,
    ArrowRight,
    ArrowLeft,
    Building2,
    ShieldCheck,
    FileText
} from 'lucide-react';

type Step = 1 | 2 | 3 | 4;

export default function ListPropertyPage() {
    const [step, setStep] = useState<Step>(1);

    return (
        <main className="min-h-screen bg-background text-foreground pb-20">
            <Navbar />

            <div className="container mx-auto px-4 py-12 max-w-3xl">
                {/* Progress Tracker */}
                <div className="flex justify-between items-center mb-10 px-4">
                    {[1, 2, 3, 4].map((s) => (
                        <div key={s} className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                                }`}>
                                {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
                            </div>
                            <span className={`hidden sm:inline text-xs font-bold uppercase tracking-wider ${step >= s ? 'text-foreground' : 'text-muted-foreground'
                                }`}>
                                {s === 1 && 'Basic Info'}
                                {s === 2 && 'Financials'}
                                {s === 3 && 'Verification'}
                                {s === 4 && 'Preview'}
                            </span>
                            {s < 4 && <div className="hidden sm:block w-8 h-px bg-border mx-2" />}
                        </div>
                    ))}
                </div>

                <Card className="border-border shadow-lg">
                    <CardHeader className="p-8 pb-4">
                        <CardTitle className="text-2xl font-bold">
                            {step === 1 && 'Property Particulars'}
                            {step === 2 && 'Financial Metrics'}
                            {step === 3 && 'Title Deed & Verification'}
                            {step === 4 && 'Confirm & Submit'}
                        </CardTitle>
                        <CardDescription>
                            {step === 1 && 'Enter the core details of your asset.'}
                            {step === 2 && 'Provide the pricing and distress context.'}
                            {step === 3 && 'Upload the title deed to verify ownership.'}
                            {step === 4 && 'Review how investors will see your listing.'}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="p-8 pt-4 space-y-6">
                        {step === 1 && (
                            <div className="grid gap-6">
                                <div className="space-y-2">
                                    <Label className="uppercase text-[10px] tracking-widest font-bold text-muted-foreground">Property Title</Label>
                                    <Input placeholder="e.g. Luxury 2BR Opera District, Downtown" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label className="uppercase text-[10px] tracking-widest font-bold text-muted-foreground">Emirate</Label>
                                        <Select>
                                            <SelectTrigger><SelectValue placeholder="Select Emirate" /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="dubai">Dubai</SelectItem>
                                                <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="uppercase text-[10px] tracking-widest font-bold text-muted-foreground">Property Type</Label>
                                        <Select>
                                            <SelectTrigger><SelectValue placeholder="Select Type" /></SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="apartment">Apartment</SelectItem>
                                                <SelectItem value="villa">Villa</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="uppercase text-[10px] tracking-widest font-bold text-muted-foreground">Building / Community</Label>
                                    <Input placeholder="e.g. Address Sky Views" />
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <Label className="uppercase text-[10px] tracking-widest font-bold text-muted-foreground">Beds</Label>
                                        <Input type="number" placeholder="2" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="uppercase text-[10px] tracking-widest font-bold text-muted-foreground">Baths</Label>
                                        <Input type="number" placeholder="2" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="uppercase text-[10px] tracking-widest font-bold text-muted-foreground">Size (SQFT)</Label>
                                        <Input type="number" placeholder="1250" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="grid gap-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2 text-primary">
                                        <Label className="uppercase text-[10px] tracking-widest font-bold">Asking Price (AED)</Label>
                                        <Input placeholder="1,500,000" className="h-12 text-lg font-bold border-primary/50" />
                                    </div>
                                    <div className="space-y-2 text-muted-foreground">
                                        <Label className="uppercase text-[10px] tracking-widest font-bold">Resale Market Avg (AED)</Label>
                                        <Input placeholder="1,850,000" className="h-12" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label className="uppercase text-[10px] tracking-widest font-bold text-muted-foreground">Reason for Distress Sale</Label>
                                    <Select>
                                        <SelectTrigger><SelectValue placeholder="Select Reason" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="relocation">International Relocation</SelectItem>
                                            <SelectItem value="debt">Debt Settlement</SelectItem>
                                            <SelectItem value="liquidation">Business Liquidation</SelectItem>
                                            <SelectItem value="emergency">Family Emergency</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="uppercase text-[10px] tracking-widest font-bold text-muted-foreground">Seller Urgency Timeline</Label>
                                    <Select>
                                        <SelectTrigger><SelectValue placeholder="Select Timeline" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="7">Within 7 Days</SelectItem>
                                            <SelectItem value="30">Within 30 Days</SelectItem>
                                            <SelectItem value="60">Within 60 Days</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="uppercase text-[10px] tracking-widest font-bold text-muted-foreground">Detailed Financial Narrative</Label>
                                    <Textarea placeholder="Explain why this is a true distress deal for cash buyers..." className="min-h-[120px]" />
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="grid gap-8">
                                <div className="space-y-2">
                                    <Label className="uppercase text-[10px] tracking-widest font-bold text-muted-foreground">Title Deed Number</Label>
                                    <Input placeholder="e.g. 12345/2023" />
                                </div>

                                <div className="border-2 border-dashed border-muted rounded-2xl p-10 flex flex-col items-center text-center gap-4 bg-muted/10 hover:bg-muted/20 transition-colors cursor-pointer">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Upload className="w-8 h-8 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Upload Digital Title Deed</p>
                                        <p className="text-xs text-muted-foreground mt-1">PDF, JPG or PNG (Max 10MB)</p>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 space-y-4">
                                    <div className="flex gap-3">
                                        <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0" />
                                        <p className="text-xs font-medium leading-relaxed">
                                            All title deeds are verified against **Land Department** records within 24-48 hours.
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                                        <p className="text-xs font-medium leading-relaxed">
                                            Only verified owners or mandated agents can list distress deals on this platform.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 4 && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="p-6 rounded-2xl border bg-muted/20 space-y-6">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Selected Preview</h4>
                                            <h2 className="text-xl font-bold">Luxury 2BR Opera District, Downtown</h2>
                                        </div>
                                        <Badge className="bg-primary">16% Below Market</Badge>
                                    </div>

                                    <div className="grid grid-cols-2 gap-10 border-t pt-6">
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-1">Asking Price</p>
                                            <p className="text-2xl font-extrabold">1,500,000 <span className="text-xs">AED</span></p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-1">Market Benchmark</p>
                                            <p className="text-2xl font-extrabold text-muted-foreground strike opacity-50">1,850,000 <span className="text-xs">AED</span></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                                    <p className="text-xs font-bold text-amber-800">
                                        By submitting, you confirm you have the legal right to sell this property under the specified distress terms.
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="flex justify-between pt-6 border-t">
                            <Button
                                variant="ghost"
                                onClick={() => setStep((s) => Math.max(1, s - 1) as Step)}
                                disabled={step === 1}
                                className="font-bold"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back
                            </Button>
                            <Button
                                onClick={() => step < 4 ? setStep((s) => s + 1 as Step) : alert('Listing Submitted for Verification!')}
                                className="font-bold px-8"
                            >
                                {step === 4 ? 'Submit for Verification' : 'Continue'}
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}

function AlertTriangle({ className }: { className?: string }) {
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
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <path d="M12 9v4" />
            <path d="M12 17h.01" />
        </svg>
    );
}
