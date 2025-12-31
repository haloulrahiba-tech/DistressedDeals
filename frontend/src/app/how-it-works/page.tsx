import { Navbar } from '@/components/layout/navbar';
import { Badge } from '@/components/ui/badge';
import {
    CheckCircle2,
    ShieldCheck,
    BarChart3,
    Search,
    FileText,
    Zap,
    Target,
    Handshake
} from 'lucide-react';

export default function HowItWorksPage() {
    return (
        <main className="min-h-screen bg-background text-foreground pb-20">
            <Navbar />

            {/* Title Section */}
            <section className="py-32 bg-muted/30 border-b">
                <div className="container mx-auto px-4 text-center">
                    <Badge className="mb-4 bg-primary text-primary-foreground uppercase tracking-widest px-4 py-1">Transparency First</Badge>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">How It Works</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Eliminating noise and hype. We use mathematics and legal verification to connect motivated sellers with qualified capital.
                    </p>
                </div>
            </section>

            {/* The Core Process */}
            <div className="container mx-auto px-4 py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-32">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold tracking-tight py-3">For Cash Buyers</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    icon: <Search className="w-5 h-5" />,
                                    title: "Identify Undervalued Assets",
                                    desc: "Our engine scans the market and compares asking prices against real-time Dubai Land Department (DLD) transaction benchmarks."
                                },
                                {
                                    icon: <ShieldCheck className="w-5 h-5" />,
                                    title: "Legal Identity Verification",
                                    desc: "Every listing is cross-referenced with Title Deeds. You only see properties with verified ownership and clear intent to sell."
                                },
                                {
                                    icon: <Zap className="w-5 h-5" />,
                                    title: "Instant Opportunity Alerts",
                                    desc: "Premium members receive SMS/Email notifications within 60 seconds of a verified distress exit hitting the marketplace."
                                }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{step.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-8 rounded-3xl bg-muted border flex items-center justify-center aspect-square md:aspect-auto md:h-[400px]">
                        <div className="text-center space-y-4">
                            <BarChart3 className="w-20 h-20 text-primary/20 mx-auto" />
                            <p className="font-bold text-xl">DLD Data Benchmarking</p>
                            <p className="text-sm text-muted-foreground max-w-xs">We process over 10,000 monthly transactions to calculate true market value.</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center flex-row-reverse">
                    <div className="lg:order-last space-y-8">
                        <h2 className="text-3xl font-bold tracking-tight py-3">For Property Owners</h2>
                        <div className="space-y-6">
                            {[
                                {
                                    icon: <FileText className="w-5 h-5" />,
                                    title: "List Privately & Securely",
                                    desc: "Avoid the public market circus. List your property privately and only interact with verified cash-ready investors."
                                },
                                {
                                    icon: <Target className="w-5 h-5" />,
                                    title: "Target Direct Capital",
                                    desc: "Forget looky-loos. Your listing is broadcasted to institutional funds and private equity buyers specifically seeking distress terms."
                                },
                                {
                                    icon: <Handshake className="w-5 h-5" />,
                                    title: "Close in Record Time",
                                    desc: "Focus on transactions, not negotiations. Our marketplace is optimized for immediate exits and 7-14 day closings."
                                }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{step.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="p-8 rounded-3xl bg-muted border flex items-center justify-center aspect-square md:aspect-auto md:h-[400px]">
                        <div className="text-center space-y-4">
                            <ShieldCheck className="w-20 h-20 text-primary/20 mx-auto" />
                            <p className="font-bold text-xl">Verification Engine</p>
                            <p className="text-sm text-muted-foreground max-w-xs">Manual SLA-driven Title Deed verification ensures listing integrity.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
