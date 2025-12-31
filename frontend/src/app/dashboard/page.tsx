'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import {
    Heart,
    Bell,
    Settings,
    Building2,
    MessageSquare,
    History,
    ShieldCheck,
    Zap,
    Clock
} from 'lucide-react';
import { ListingCard } from '@/components/listings/listing-card';

const MY_SAVED_DEALS = [
    {
        id: '1',
        title: '2-Bedroom Luxury Apartment, Downtown Dubai',
        location: 'Opera District, Downtown Dubai',
        price: 1850000,
        marketPrice: 2200000,
        discount: 16,
        size: 1450,
        pricePerSqft: 1275,
        marketAvgPricePerSqft: 1520,
        sellerType: 'Owner',
        reason: 'Relocation'
    }
];

const MY_LISTINGS = [
    {
        id: 'L-201',
        title: 'Modern Loft in Dubai Marina',
        status: 'Verified',
        price: '1,350,000 AED',
        views: 142,
        inquiries: 8,
        lastUpdate: '1h ago'
    },
    {
        id: 'L-205',
        title: 'Penthouse at Palm Jumeirah',
        status: 'Reviewing',
        price: '12,500,000 AED',
        views: 0,
        inquiries: 0,
        lastUpdate: 'Just now'
    }
];

export default function UserDashboard() {
    const [role, setRole] = useState<'buyer' | 'seller'>('buyer');

    return (
        <main className="min-h-screen bg-background text-foreground pb-20">
            <Navbar />

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                            KR
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">Kartikey Rai</h1>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">Premium Member</Badge>
                                <span>•</span>
                                <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Verified Investor</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-muted p-1 rounded-xl">
                        <Button
                            variant={role === 'buyer' ? 'secondary' : 'ghost'}
                            size="sm"
                            className="h-9 px-6 font-bold"
                            onClick={() => setRole('buyer')}
                        >
                            Buyer View
                        </Button>
                        <Button
                            variant={role === 'seller' ? 'secondary' : 'ghost'}
                            size="sm"
                            className="h-9 px-6 font-bold"
                            onClick={() => setRole('seller')}
                        >
                            Seller View
                        </Button>
                    </div>
                </div>

                <Tabs defaultValue="overview" className="space-y-8">
                    <TabsList className="bg-transparent border-b rounded-none w-full justify-start h-auto p-0 gap-8">
                        <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-4 font-bold">Overview</TabsTrigger>
                        <TabsTrigger value="activity" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-4 font-bold">
                            {role === 'buyer' ? 'Saved Deals' : 'My Listings'}
                        </TabsTrigger>
                        <TabsTrigger value="alerts" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-4 font-bold">Deal Alerts</TabsTrigger>
                        <TabsTrigger value="settings" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 pb-4 font-bold">Settings</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="border-border">
                                <CardContent className="p-6 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Global Watchlist</p>
                                        <Zap className="w-4 h-4 text-primary" />
                                    </div>
                                    <p className="text-3xl font-extrabold">{role === 'buyer' ? '12' : '442'}</p>
                                    <p className="text-[10px] text-muted-foreground">{role === 'buyer' ? 'Deals matching your criteria' : 'Total views on your properties'}</p>
                                </CardContent>
                            </Card>
                            <Card className="border-border">
                                <CardContent className="p-6 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Active Inquiries</p>
                                        <MessageSquare className="w-4 h-4 text-primary" />
                                    </div>
                                    <p className="text-3xl font-extrabold">{role === 'buyer' ? '4' : '28'}</p>
                                    <p className="text-[10px] text-muted-foreground">{role === 'buyer' ? 'Awaiting seller responses' : 'Qualified leads generated'}</p>
                                </CardContent>
                            </Card>
                            <Card className="border-border">
                                <CardContent className="p-6 space-y-2">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Avg Recovery</p>
                                        <History className="w-4 h-4 text-primary" />
                                    </div>
                                    <p className="text-3xl font-extrabold">{role === 'buyer' ? '18%' : '92%'}</p>
                                    <p className="text-[10px] text-muted-foreground">{role === 'buyer' ? 'Below market avg of your saved deals' : 'Verification accuracy score'}</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="lg:col-span-8 space-y-6">
                                <h3 className="text-lg font-bold">Recent Updates</h3>
                                {role === 'buyer' ? (
                                    <div className="grid gap-6">
                                        {MY_SAVED_DEALS.map(listing => (
                                            <div key={listing.id} className="flex gap-4 p-4 border rounded-xl hover:bg-muted/30 transition-colors">
                                                <div className="w-24 h-24 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                                                    <img src="/mock-property.png" alt="Property" className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-start mb-1">
                                                        <h4 className="font-bold text-sm">Price Drop: {listing.title}</h4>
                                                        <Badge className="bg-red-100 text-red-700 border-red-200 text-[10px]">- AED 50,000</Badge>
                                                    </div>
                                                    <p className="text-xs text-muted-foreground mb-3">{listing.location}</p>
                                                    <div className="flex gap-2">
                                                        <Button size="sm" className="h-7 text-[10px] font-bold">View Update</Button>
                                                        <Button size="sm" variant="outline" className="h-7 text-[10px] font-bold">Contact Owner</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {MY_LISTINGS.map(listing => (
                                            <div key={listing.id} className="flex items-center justify-between p-4 border rounded-xl">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                                        <Building2 className="w-5 h-5 text-muted-foreground" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-sm">{listing.title}</h4>
                                                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Status: {listing.status}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-6">
                                                    <div className="text-right hidden md:block">
                                                        <p className="text-[10px] uppercase font-bold text-muted-foreground mb-0.5">Views</p>
                                                        <p className="text-sm font-bold">{listing.views}</p>
                                                    </div>
                                                    {listing.status === 'Verified' ? (
                                                        <Badge className="bg-emerald-500">Live</Badge>
                                                    ) : (
                                                        <Badge variant="outline" className="animate-pulse border-amber-500 text-amber-500 font-bold">Pending Review</Badge>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="lg:col-span-4 space-y-6">
                                <Card className="border-border">
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-sm font-bold flex items-center gap-2">
                                            <Bell className="w-4 h-4 text-primary" />
                                            Alert Settings
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Active Subscriptions</p>
                                            <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                                                <p className="text-xs font-bold text-primary mb-1">Downtown Dubai • Under 2M AED</p>
                                                <p className="text-[10px] text-muted-foreground">Instant SMS & Email Alerts Active</p>
                                            </div>
                                        </div>
                                        <Button variant="outline" className="w-full text-[10px] h-8 font-bold uppercase tracking-widest">+ New Search Alert</Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    );
}
