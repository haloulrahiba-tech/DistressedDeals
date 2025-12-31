'use client';

import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    BarChart3,
    CheckCircle2,
    Clock,
    FileText,
    ShieldAlert,
    ExternalLink,
    Search,
    Users,
    Building2,
    TrendingDown
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const PENDING_REVIEWS = [
    {
        id: 'V-8821',
        property: '2BR Sky Views, Downtown',
        owner: 'Arjun M.',
        discount: '18%',
        submitted: '2h ago',
        sla: 'Normal',
        type: 'Title Deed'
    },
    {
        id: 'V-8819',
        property: 'Villa Cluster 5, Jumeirah',
        owner: 'Sarah K.',
        discount: '12%',
        submitted: '22h ago',
        sla: 'Expiring',
        type: 'Title Deed'
    },
    {
        id: 'V-8815',
        property: 'Studio Marina Gate',
        owner: 'Khalid A.',
        discount: '22%',
        submitted: '44h ago',
        sla: 'Overdue',
        type: 'Financial Proof'
    }
];

export default function AdminDashboard() {
    return (
        <main className="min-h-screen bg-background text-foreground pb-20">
            <Navbar />

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight">Admin Portal</h1>
                        <p className="text-muted-foreground text-sm">Marketplace Oversight & Verification Queue</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">Download Reports</Button>
                        <Button size="sm">System Settings</Button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                    <Card className="border-border">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Queue Size</p>
                                <p className="text-3xl font-extrabold">24</p>
                                <div className="flex items-center gap-1 text-[10px] text-primary mt-1">
                                    <TrendingDown className="w-3 h-3" />
                                    <span>-12% from yesterday</span>
                                </div>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Clock className="w-6 h-6" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-border">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Avg SLA</p>
                                <p className="text-3xl font-extrabold">18.4h</p>
                                <p className="text-[10px] text-muted-foreground mt-1 tracking-tight">Limit: 48.0h</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                <CheckCircle2 className="w-6 h-6" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-border">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Active Deals</p>
                                <p className="text-3xl font-extrabold">142</p>
                                <p className="text-[10px] text-muted-foreground mt-1 tracking-tight">AED 210M Total GMV</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <Building2 className="w-6 h-6" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="border-border">
                        <CardContent className="p-6 flex items-center justify-between">
                            <div>
                                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Premium Users</p>
                                <p className="text-3xl font-extrabold">882</p>
                                <p className="text-[10px] text-muted-foreground mt-1 tracking-tight">+14 new today</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                                <Users className="w-6 h-6" />
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Queue (Left) */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-xl font-bold">Verification Queue</h2>
                            <div className="relative w-64">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input placeholder="Search ID or Owner..." className="pl-9 h-9 text-xs" />
                            </div>
                        </div>

                        <Card className="p-0 border-border overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-muted/50 text-muted-foreground uppercase text-[10px] font-bold tracking-widest">
                                        <tr>
                                            <th className="px-6 py-4">Verification ID</th>
                                            <th className="px-6 py-4">Property & Owner</th>
                                            <th className="px-6 py-4">Type</th>
                                            <th className="px-6 py-4">Submitted</th>
                                            <th className="px-6 py-4">SLA Status</th>
                                            <th className="px-6 py-4">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-border">
                                        {PENDING_REVIEWS.map((review) => (
                                            <tr key={review.id} className="hover:bg-muted/30 transition-colors">
                                                <td className="px-6 py-4 font-mono text-xs font-bold">{review.id}</td>
                                                <td className="px-6 py-4">
                                                    <p className="font-bold text-foreground">{review.property}</p>
                                                    <p className="text-xs text-muted-foreground">{review.owner}</p>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Badge variant="outline" className="text-[10px] font-bold">{review.type}</Badge>
                                                </td>
                                                <td className="px-6 py-4 text-muted-foreground">{review.submitted}</td>
                                                <td className="px-6 py-4">
                                                    {review.sla === 'Normal' && <Badge className="bg-emerald-500">Normal</Badge>}
                                                    {review.sla === 'Expiring' && <Badge className="bg-amber-500">Expiring</Badge>}
                                                    {review.sla === 'Overdue' && <Badge className="bg-red-500 animate-pulse">Overdue</Badge>}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <Button size="sm" variant="ghost" className="h-8 group">
                                                        Review
                                                        <ExternalLink className="w-3 h-3 ml-2 group-hover:text-primary" />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-4 bg-muted/20 border-t flex justify-center">
                                <Button variant="link" size="sm" className="text-xs text-muted-foreground uppercase font-bold tracking-widest">View Full Archive</Button>
                            </div>
                        </Card>
                    </div>

                    {/* System Alerts (Right) */}
                    <div className="lg:col-span-4 space-y-6">
                        <Card className="border-border">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-bold flex items-center gap-2">
                                    <ShieldAlert className="w-4 h-4 text-red-500" />
                                    Security & Fraud Alerts
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="p-3 rounded-lg border-l-4 border-red-500 bg-red-50/50 space-y-1">
                                    <p className="text-xs font-extrabold text-red-900">Duplicate Listing Detected</p>
                                    <p className="text-[10px] text-red-800 leading-relaxed">
                                        ID #V-8822 matches Title Deed of active Listing #L-3310.
                                    </p>
                                </div>
                                <div className="p-3 rounded-lg border-l-4 border-amber-500 bg-amber-50/50 space-y-1">
                                    <p className="text-xs font-extrabold text-amber-900">High Discount Alert</p>
                                    <p className="text-[10px] text-amber-800 leading-relaxed">
                                        Listing #L-3315 claims 45% discount. Manual price check required.
                                    </p>
                                </div>
                                <Button variant="outline" className="w-full text-[10px] h-8 font-bold uppercase tracking-widest text-muted-foreground">Clear All Alerts</Button>
                            </CardContent>
                        </Card>

                        <Card className="border-border bg-primary text-primary-foreground">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-bold flex items-center gap-2 text-white">
                                    <BarChart3 className="w-4 h-4" />
                                    Network Performance
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] uppercase font-bold text-white/70">
                                        <span>Alert Delivery Speed</span>
                                        <span>1.2s</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/20 rounded-full">
                                        <div className="h-full bg-white rounded-full w-[94%]"></div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-[10px] uppercase font-bold text-white/70">
                                        <span>Server Load</span>
                                        <span>14%</span>
                                    </div>
                                    <div className="h-1 w-full bg-white/20 rounded-full">
                                        <div className="h-full bg-white rounded-full w-[14%]"></div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    );
}
