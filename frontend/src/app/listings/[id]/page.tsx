import { Navbar } from '@/components/layout/navbar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
    ArrowLeft,
    MapPin,
    Bed,
    Bath,
    Square,
    Share2,
    Heart,
    AlertTriangle,
    FileText,
    History,
    Info,
    ChevronRight,
    ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import { ListingGallery } from '@/components/listings/listing-gallery';
import { PriceComparisonChart } from '@/components/listings/price-comparison-chart';

const MOCK_LIST_DATA = {
    '1': {
        title: '2-Bedroom Luxury Apartment, Downtown Dubai',
        location: 'Opera District, Downtown Dubai',
        price: '1,850,000',
        marketPrice: '2,200,000',
        equity: '+350k',
        discount: '16%',
        size: '1,450',
        psf: '1,275',
        images: ['/listings/downtown.png']
    },
    '2': {
        title: '4-Bedroom Villa, Jumeirah Islands',
        location: 'Cluster 12, Jumeirah Islands',
        price: '8,500,000',
        marketPrice: '10,500,000',
        equity: '+2.0M',
        discount: '19%',
        size: '5,400',
        psf: '1,574',
        images: ['/listings/jumeirah.png']
    },
    '3': {
        title: '1-Bedroom Modern Apartment, Dubai Marina',
        location: 'Marina Gate, Dubai Marina',
        price: '1,350,000',
        marketPrice: '1,600,000',
        equity: '+250k',
        discount: '15%',
        size: '920',
        psf: '1,467',
        images: ['/listings/marina.png']
    },
    '4': {
        title: '5-Bedroom Signature Villa, Palm Jumeirah',
        location: 'Frond D, Palm Jumeirah',
        price: '24,500,000',
        marketPrice: '31,000,000',
        equity: '+6.5M',
        discount: '21%',
        size: '7,200',
        psf: '3,402',
        images: ['/listings/palm.png']
    },
    '5': {
        title: '3-Bedroom Modern Townhouse, Damac Hills',
        location: 'Silver Springs, Damac Hills',
        price: '2,400,000',
        marketPrice: '3,000,000',
        equity: '+600k',
        discount: '20%',
        size: '2,800',
        psf: '857',
        images: ['/listings/townhouse.png']
    },
    '6': {
        title: '1-Bedroom Compact Apartment, JVC',
        location: 'Diamond Views, JVC',
        price: '850,000',
        marketPrice: '1,100,000',
        equity: '+250k',
        discount: '23%',
        size: '850',
        psf: '1,000',
        images: ['/listings/jvc.png']
    },
    '7': {
        title: '4-Bedroom Beachfront Villa, Saadiyat Island',
        location: 'Saadiyat Beach Villas, Abu Dhabi',
        price: '15,500,000',
        marketPrice: '22,000,000',
        equity: '+6.5M',
        discount: '30%',
        size: '6,200',
        psf: '2,500',
        images: ['/listings/saadiyat.png']
    },
    '8': {
        title: '2-Bedroom Skyline View Flat, Al Reem Island',
        location: 'Gate Towers, Al Reem Island',
        price: '1,200,000',
        marketPrice: '1,600,000',
        equity: '+400k',
        discount: '25%',
        size: '1,350',
        psf: '888',
        images: ['/listings/alreem.png']
    },
    '9': {
        title: '3-Bedroom Luxury Penthouse, Business Bay',
        location: 'Canal Heights, Business Bay',
        price: '4,800,000',
        marketPrice: '6,500,000',
        equity: '+1.7M',
        discount: '26%',
        size: '3,200',
        psf: '1,500',
        images: ['/listings/penthouse.png']
    },
    '10': {
        title: '4-Bedroom Family Villa, Arabian Ranches',
        location: 'Saheel, Arabian Ranches',
        price: '5,500,000',
        marketPrice: '7,200,000',
        equity: '+1.7M',
        discount: '24%',
        size: '4,800',
        psf: '1,145',
        images: ['/listings/ranches.png']
    },
    '11': {
        title: '2-Bedroom Sea View Apartment, Sharjah',
        location: 'Maryan Island, Sharjah',
        price: '950,000',
        marketPrice: '1,300,000',
        equity: '+350k',
        discount: '27%',
        size: '1,400',
        psf: '678',
        images: ['/listings/sharjah.png']
    },
    '12': {
        title: 'Modern Studio Apartment, Meydan',
        location: 'Azizi Riviera, Meydan',
        price: '650,000',
        marketPrice: '850,000',
        equity: '+200k',
        discount: '24%',
        size: '450',
        psf: '1,444',
        images: ['/listings/meydan.png']
    },
    '13': {
        title: '3-Bedroom Premium Villa, Dubai Hills',
        location: 'Club Villas, Dubai Hills Estate',
        price: '3,800,000',
        marketPrice: '4,900,000',
        equity: '+1.1M',
        discount: '22%',
        size: '3,100',
        psf: '1,225',
        images: ['/listings/dubaihills.png']
    },
    '14': {
        title: '2-Bedroom Royal Suite, Palm Jumeirah',
        location: 'Royal Atlantis, Palm Jumeirah',
        price: '7,500,000',
        marketPrice: '10,000,000',
        equity: '+2.5M',
        discount: '25%',
        size: '2,100',
        psf: '3,571',
        images: ['/listings/palmsuite.png']
    },
    '15': {
        title: '4-Bedroom Garden Townhouse, Villanova',
        location: 'Amaranta, Villanova',
        price: '2,200,000',
        marketPrice: '2,800,000',
        equity: '+600k',
        discount: '21%',
        size: '2,400',
        psf: '916',
        images: ['/listings/villanova.png']
    },
    '16': {
        title: '3-Bedroom Waterfront Flat, Yas Island',
        location: 'Water\'s Edge, Yas Island',
        price: '1,800,000',
        marketPrice: '2,500,000',
        equity: '+700k',
        discount: '28%',
        size: '1,600',
        psf: '1,125',
        images: ['/listings/yasisland.png']
    }
};

export default function ListingDetailPage({ params }: { params: { id: string } }) {
    const listing = MOCK_LIST_DATA[params.id as keyof typeof MOCK_LIST_DATA] || MOCK_LIST_DATA['1'];

    return (
        <main className="min-h-screen bg-background text-foreground pb-20">
            <Navbar />

            <div className="container mx-auto px-4 py-6">
                {/* Breadcrumbs & Back */}
                <div className="flex items-center justify-between mb-6">
                    <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to deals
                    </Link>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="h-9 w-9">
                            <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="h-9 w-9">
                            <Heart className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Main Content (Left) */}
                    <div className="lg:col-span-8 space-y-8">
                        <section>
                            <div className="flex gap-2 mb-4">
                                <Badge className="bg-primary text-primary-foreground">Exceptional Deal</Badge>
                                <Badge variant="outline" className="border-primary text-primary">{listing.discount} Below Market</Badge>
                                <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200">Urgent Exit (30 Days)</Badge>
                            </div>
                            <h1 className="text-3xl font-extrabold tracking-tight mb-2">
                                {listing.title}
                            </h1>
                            <div className="flex items-center gap-1.5 text-muted-foreground mb-6">
                                <MapPin className="w-4 h-4" />
                                <span>{listing.location}</span>
                            </div>

                            <ListingGallery images={listing.images} />
                        </section>

                        {/* Financial Health & Price Context */}
                        <section className="p-8 rounded-2xl border bg-card/50 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <BarChart3 className="w-5 h-5 text-primary" />
                                    Financial Signal & Market Context
                                </h2>
                                <Badge variant="outline" className="text-[10px] uppercase tracking-wider font-bold">Verified by DLD Data</Badge>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="p-4 rounded-xl bg-muted/40">
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Asking Price</p>
                                    <p className="text-2xl font-bold">{listing.price} <span className="text-xs font-medium">AED</span></p>
                                </div>
                                <div className="p-4 rounded-xl bg-muted/40 border-l-4 border-primary">
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Market Benchmark</p>
                                    <p className="text-2xl font-bold text-primary">{listing.marketPrice} <span className="text-xs font-medium">AED</span></p>
                                </div>
                                <div className="p-4 rounded-xl bg-muted/40">
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Potential Equity</p>
                                    <p className="text-2xl font-bold text-emerald-600">{listing.equity} <span className="text-xs font-medium">AED</span></p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-base font-bold mb-2">Price Velocity vs. Market Average</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    This unit is priced {listing.discount} below comparable registered transactions in the area over the last 90 days.
                                </p>
                                <PriceComparisonChart />
                            </div>
                        </section>

                        {/* Details Grid */}
                        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="p-4 rounded-xl border flex flex-col items-center text-center gap-1">
                                <Bed className="w-5 h-5 text-muted-foreground" />
                                <span className="text-sm font-bold">2 Bedrooms</span>
                            </div>
                            <div className="p-4 rounded-xl border flex flex-col items-center text-center gap-1">
                                <Bath className="w-5 h-5 text-muted-foreground" />
                                <span className="text-sm font-bold">2 Bathrooms</span>
                            </div>
                            <div className="p-4 rounded-xl border flex flex-col items-center text-center gap-1">
                                <Square className="w-5 h-5 text-muted-foreground" />
                                <span className="text-sm font-bold">{listing.size} sqft</span>
                            </div>
                            <div className="p-4 rounded-xl border flex flex-col items-center text-center gap-1">
                                <BarChart3 className="w-5 h-5 text-muted-foreground" />
                                <span className="text-sm font-bold">{listing.psf} AED/sqft</span>
                            </div>
                        </section>

                        {/* Recent Area Sales (DLD Data) */}
                        <section className="space-y-6">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <History className="w-5 h-5 text-primary" />
                                Area Transaction History (DLD Official)
                            </h2>
                            <div className="rounded-xl border overflow-hidden">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-muted/50 text-muted-foreground font-bold text-[10px] uppercase tracking-widest border-b">
                                        <tr>
                                            <th className="px-6 py-4">Date</th>
                                            <th className="px-6 py-4">Unit Type</th>
                                            <th className="px-6 py-4">Size (sqft)</th>
                                            <th className="px-6 py-4">Price (AED)</th>
                                            <th className="px-6 py-4 text-right">AED/sqft</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {[
                                            { date: 'Dec 2025', type: '2 BR', size: '1,420', price: '2,150,000', psf: '1,514' },
                                            { date: 'Nov 2025', type: '2 BR', size: '1,450', price: '2,210,000', psf: '1,524' },
                                            { date: 'Oct 2025', type: '2 BR', size: '1,450', price: '2,180,000', psf: '1,503' },
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-muted/20 transition-colors">
                                                <td className="px-6 py-4 font-medium">{row.date}</td>
                                                <td className="px-6 py-4">{row.type}</td>
                                                <td className="px-6 py-4">{row.size}</td>
                                                <td className="px-6 py-4 font-bold">{row.price}</td>
                                                <td className="px-6 py-4 text-right text-muted-foreground font-mono">{row.psf}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-[10px] text-muted-foreground italic">
                                *All data is sourced directly from Dubai Land Department (DLD) open transaction records.
                            </p>
                        </section>

                        {/* Legal & Transfer Roadmap */}
                        <section className="space-y-6">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <ShieldCheck className="w-5 h-5 text-primary" />
                                Legal & Transfer Roadmap
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {[
                                    { step: '01', title: 'MOU / Form F', desc: 'Secure the deal with a 10% deposit check held by the agency.', time: 'Day 1' },
                                    { step: '02', title: 'NOC Application', desc: 'Request "No Objection Certificate" from the developer.', time: 'Day 3-7' },
                                    { step: '03', title: 'DLD Transfer', desc: 'Final transfer at registration trustee or DLD office.', time: 'Day 10-14' },
                                ].map((item, i) => (
                                    <div key={i} className="p-5 rounded-xl border bg-muted/10 relative">
                                        <div className="absolute top-4 right-4 text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded uppercase">{item.time}</div>
                                        <div className="text-2xl font-black text-primary/20 mb-2">{item.step}</div>
                                        <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Amenities */}
                        <section className="space-y-6">
                            <h2 className="text-xl font-bold">Building Facilities & Amenities</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4">
                                {[
                                    'Infinity Pool (Burj View)', 'State-of-the-Art Gym', '24/7 Concierge',
                                    'Dedicated Parking', 'Valet Service', 'Childrens Play Area',
                                    'Sauna & Steam Room', 'Yoga Studio', 'Business Center'
                                ].map((amenity, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                                        {amenity}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Description */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold">Seller Reasoning & Motivation</h2>
                            <div className="p-6 rounded-xl bg-orange-50 border border-orange-100 flex gap-4">
                                <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                                <div>
                                    <p className="text-sm font-bold text-orange-900 mb-1">Urgent Relocation Requirement</p>
                                    <p className="text-sm text-orange-800 leading-relaxed">
                                        The owner has been mandated to relocate internationally within 30 days. All legal documentation is ready for an immediate transfer. Cash buyers preferred for expedited processing.
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-xl font-bold pt-4">Property Description</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Experience unparalleled luxury in the heart of Downtown Dubai's most prestigious arts destination. This meticulously maintained 2-bedroom residence at the Opera District offers breathtaking views and premium finishes. The property features an open-plan living area, floor-to-ceiling windows, and high-end branded appliances. Positioned on a high floor, it minimizes noise while maximizing the iconic cityscape views.
                            </p>
                        </section>
                    </div>

                    {/* Sidebar (Right) */}
                    <div className="lg:col-span-4 space-y-6">
                        <Card className="sticky top-24 border-primary/20 shadow-lg shadow-primary/5">
                            <CardContent className="p-6 space-y-6">
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-2">Deal Availability</p>
                                    <div className="flex items-center gap-2 text-emerald-600 font-bold bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                                        <History className="w-4 h-4 animate-pulse" />
                                        Listing active for 48 hours
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-muted-foreground">Verification Strength</span>
                                        <span className="font-bold text-primary">98/100</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-muted rounded-full">
                                        <div className="h-full bg-primary rounded-full w-[98%]"></div>
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl bg-muted/30 space-y-3">
                                    <div className="flex items-center gap-3 text-sm">
                                        <ShieldCheck className="w-4 h-4 text-primary" />
                                        <span className="font-medium">Title Deed Verified</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <FileText className="w-4 h-4 text-primary" />
                                        <span className="font-medium">Mandated Seller Only</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <BarChart3 className="w-4 h-4 text-primary" />
                                        <span className="font-medium">Price vs DLD Benchmarked</span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <Link href="/contact/success">
                                        <Button className="w-full h-12 font-bold text-lg">Inquire via Portal</Button>
                                    </Link>
                                    <p className="text-[10px] text-center text-muted-foreground px-4">
                                        Identity verification required to reveal owner contact details for legal compliance.
                                    </p>
                                </div>

                                <div className="pt-4 border-t flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                                            <Bed className="w-4 h-4 text-muted-foreground" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-xs font-bold leading-none">Verified Owner</p>
                                            <p className="text-[10px] text-muted-foreground">ID #77218-DLD</p>
                                        </div>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                </div>
                            </CardContent>
                        </Card>

                        <div className="p-6 rounded-xl border bg-primary/5 space-y-4">
                            <h3 className="font-bold text-sm flex items-center gap-2">
                                <Info className="w-4 h-4 text-primary" />
                                Investment Insight
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                Annual rental yield for this layout in the Opera District currently averages **6.2%**. At the distress asking price, the projected gross yield increases to **7.4%**, making this a high-performing asset for a hold strategy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function BarChart3({ className }: { className?: string }) {
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
            <path d="M3 3v18h18" />
            <path d="M18 17V9" />
            <path d="M13 17V5" />
            <path d="M8 17v-3" />
        </svg>
    );
}
