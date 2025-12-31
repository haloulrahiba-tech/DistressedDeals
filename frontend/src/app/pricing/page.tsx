import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { CheckCircle2, Zap, Shield, Building } from 'lucide-react';

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pb-20">
            <Navbar />

            <section className="py-32 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-[#1A1A1A]">
                        Investor-Grade Membership
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                        7-day free trial on all plans. Cancel anytime. No hidden brokerage fees.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Free */}
                        <Card className="border-border shadow-sm">
                            <CardHeader className="p-8 text-left">
                                <CardTitle className="text-xl font-bold">Free</CardTitle>
                                <CardDescription>Experience the market data</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-extrabold text-foreground">AED 0</span>
                                    <span className="text-muted-foreground ml-2">/ month</span>
                                </div>
                            </CardHeader>
                            <CardContent className="p-8 pt-0 space-y-4 text-left">
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span>View all verified listings</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span>Basic market benchmarks</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm opacity-40">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>Early access (24h)</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm opacity-40">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span>Instant deal alerts</span>
                                </div>
                            </CardContent>
                            <CardFooter className="p-8">
                                <Button variant="outline" className="w-full font-bold">Current Plan</Button>
                            </CardFooter>
                        </Card>

                        {/* Professional */}
                        <Card className="border-primary shadow-xl ring-2 ring-primary/20 scale-105 relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-4 py-1.5 uppercase tracking-widest rounded-bl-lg">
                                Most Popular
                            </div>
                            <CardHeader className="p-8 text-left">
                                <div className="flex items-center gap-2 mb-2 text-primary">
                                    <Zap className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Professional</span>
                                </div>
                                <CardTitle className="text-xl font-bold text-primary">Individual Investor</CardTitle>
                                <CardDescription>For serious private capital buyers</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-extrabold text-primary">AED 499</span>
                                    <span className="text-muted-foreground ml-2">/ month</span>
                                </div>
                            </CardHeader>
                            <CardContent className="p-8 pt-0 space-y-4 text-left">
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span className="font-bold">24-hour Early Access</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span>Instant SMS / Email Alerts</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span>Unlimited PDF Market Reports</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span>Direct Owner Contact Reveal</span>
                                </div>
                            </CardContent>
                            <CardFooter className="p-8">
                                <Button className="w-full font-bold text-lg h-12">Start 7-Day Free Trial</Button>
                            </CardFooter>
                        </Card>

                        {/* Institutional */}
                        <Card className="border-border shadow-sm">
                            <CardHeader className="p-8 text-left">
                                <CardTitle className="text-xl font-bold">Institutional</CardTitle>
                                <CardDescription>For funds and REO departments</CardDescription>
                                <div className="mt-4">
                                    <span className="text-4xl font-extrabold text-foreground">AED 1,999</span>
                                    <span className="text-muted-foreground ml-2">/ month</span>
                                </div>
                            </CardHeader>
                            <CardContent className="p-8 pt-0 space-y-4 text-left">
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span>Up to 10 user seats</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span>API access for market data</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span>Bulk acquisition tools</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-primary" />
                                    <span>Dedicated account manager</span>
                                </div>
                            </CardContent>
                            <CardFooter className="p-8">
                                <Button variant="outline" className="w-full font-bold">Contact Enterprise</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-32 border-t">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm leading-relaxed">
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg text-primary">How does the free trial work?</h3>
                            <p className="text-muted-foreground">Sign up for any paid plan and enjoy full access for 7 days. You won't be charged until the trial ends, and you can cancel anytime from your dashboard.</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg text-primary">How accurate is the price benchmarking?</h3>
                            <p className="text-muted-foreground">Our data is updated hourly using official Dubai Land Department (DLD) transaction records. We filter for comparable floor plans, views, and towers to ensure a true 1:1 comparison.</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg text-primary">Can I cancel my subscription?</h3>
                            <p className="text-muted-foreground">Yes. Our memberships are month-to-month with no long-term contracts. You can manage your subscription directly from your user profile settings.</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg text-primary">Do you take a commission?</h3>
                            <p className="text-muted-foreground">No. UAE Distress Deals is a pure subscription marketplace. We do not participate in commissions or brokerage fees, allowing for maximum transparency between buyers and sellers.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
