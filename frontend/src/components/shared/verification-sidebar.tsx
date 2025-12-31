import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export function VerificationSidebar() {
    return (
        <div className="hidden lg:block space-y-6">
            <div className="sticky top-40 p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Why these deals are different
                </h3>

                <ul className="space-y-4 text-sm mb-6">
                    <li className="flex gap-3">
                        <div className="mt-1">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                            <p className="font-semibold">Direct Owner/Distress Seller Vetted</p>
                            <p className="text-muted-foreground text-xs">We talk directly to owners to verify their intent and urgency.</p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <div className="mt-1">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                            <p className="font-semibold">Title Deed Verified</p>
                            <p className="text-muted-foreground text-xs">Proof of ownership required for every listing on the platform.</p>
                        </div>
                    </li>
                    <li className="flex gap-3">
                        <div className="mt-1">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                            <p className="font-semibold">Market Valuation Analysis</p>
                            <p className="text-muted-foreground text-xs">Based on actual transaction data from the Land Department.</p>
                        </div>
                    </li>
                </ul>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <Info className="w-4 h-4 text-primary" />
                        <p className="text-xs font-bold text-primary uppercase">Benchmark Disclaimer</p>
                    </div>
                    <p className="text-[11px] leading-relaxed text-muted-foreground">
                        Market benchmarks are derived from public transaction data. "Below Market" indicators represent current discounts vs. recent comparable sales.
                    </p>
                </div>

                <Button className="w-full font-bold py-6">Get Instant Alerts</Button>
            </div>
        </div>
    );
}
