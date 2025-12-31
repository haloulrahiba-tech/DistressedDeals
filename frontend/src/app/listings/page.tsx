'use client';

import { Navbar } from '@/components/layout/navbar';
import { FilterBar } from '@/components/listings/filter-bar';
import { ListingCard } from '@/components/listings/listing-card';
import { Button } from '@/components/ui/button';
import { Grid, Map as MapIcon, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

const MOCK_LISTINGS = [
    {
        id: '1',
        title: '2-Bedroom Luxury Apartment, Downtown Dubai',
        location: 'Opera District, Downtown Dubai',
        imageUrl: '/listings/downtown.png',
        emirate: 'dubai',
        propertyType: 'apartment',
        price: 1850000,
        marketPrice: 2200000,
        discount: 16,
        size: 1450,
        pricePerSqft: 1275,
        marketAvgPricePerSqft: 1520,
        sellerType: 'Owner',
        reason: 'Relocation'
    },
    {
        id: '2',
        title: '4-Bedroom Villa, Jumeirah Islands',
        location: 'Cluster 12, Jumeirah Islands',
        imageUrl: '/listings/jumeirah.png',
        emirate: 'dubai',
        propertyType: 'villa',
        price: 8500000,
        marketPrice: 10500000,
        discount: 19,
        size: 5400,
        pricePerSqft: 1574,
        marketAvgPricePerSqft: 1944,
        sellerType: 'Owner',
        reason: 'Liquidation'
    },
    {
        id: '3',
        title: '1-Bedroom Modern Apartment, Dubai Marina',
        location: 'Marina Gate, Dubai Marina',
        imageUrl: '/listings/marina.png',
        emirate: 'dubai',
        propertyType: 'apartment',
        price: 1350000,
        marketPrice: 1600000,
        discount: 15,
        size: 920,
        pricePerSqft: 1467,
        marketAvgPricePerSqft: 1739,
        sellerType: 'Agent',
        reason: 'Urgent Exit'
    },
    {
        id: '4',
        title: '5-Bedroom Signature Villa, Palm Jumeirah',
        location: 'Frond D, Palm Jumeirah',
        imageUrl: '/listings/palm.png',
        emirate: 'dubai',
        propertyType: 'villa',
        price: 24500000,
        marketPrice: 31000000,
        discount: 21,
        size: 7200,
        pricePerSqft: 3402,
        marketAvgPricePerSqft: 4305,
        sellerType: 'Owner',
        reason: 'Debt Settlement'
    },
    {
        id: '5',
        title: '3-Bedroom Modern Townhouse, Damac Hills',
        location: 'Silver Springs, Damac Hills',
        imageUrl: '/listings/townhouse.png',
        emirate: 'dubai',
        propertyType: 'townhouse',
        price: 2400000,
        marketPrice: 3000000,
        discount: 20,
        size: 2800,
        pricePerSqft: 857,
        marketAvgPricePerSqft: 1071,
        sellerType: 'Owner',
        reason: 'Moving Abroad'
    },
    {
        id: '6',
        title: '1-Bedroom Compact Apartment, JVC',
        location: 'Diamond Views, JVC',
        imageUrl: '/listings/jvc.png',
        emirate: 'dubai',
        propertyType: 'apartment',
        price: 850000,
        marketPrice: 1100000,
        discount: 23,
        size: 850,
        pricePerSqft: 1000,
        marketAvgPricePerSqft: 1294,
        sellerType: 'Owner',
        reason: 'Financial Need'
    },
    {
        id: '7',
        title: '4-Bedroom Beachfront Villa, Saadiyat Island',
        location: 'Saadiyat Beach Villas, Abu Dhabi',
        imageUrl: '/listings/saadiyat.png',
        emirate: 'abu-dhabi',
        propertyType: 'villa',
        price: 15500000,
        marketPrice: 22000000,
        discount: 30,
        size: 6200,
        pricePerSqft: 2500,
        marketAvgPricePerSqft: 3548,
        sellerType: 'Owner',
        reason: 'Asset Liquidation'
    },
    {
        id: '8',
        title: '2-Bedroom Skyline View Flat, Al Reem Island',
        location: 'Gate Towers, Al Reem Island',
        imageUrl: '/listings/alreem.png',
        emirate: 'abu-dhabi',
        propertyType: 'apartment',
        price: 1200000,
        marketPrice: 1600000,
        discount: 25,
        size: 1350,
        pricePerSqft: 888,
        marketAvgPricePerSqft: 1185,
        sellerType: 'Agent',
        reason: 'Distress Sale'
    },
    {
        id: '9',
        title: '3-Bedroom Luxury Penthouse, Business Bay',
        location: 'Canal Heights, Business Bay',
        imageUrl: '/listings/penthouse.png',
        emirate: 'dubai',
        propertyType: 'apartment',
        price: 4800000,
        marketPrice: 6500000,
        discount: 26,
        size: 3200,
        pricePerSqft: 1500,
        marketAvgPricePerSqft: 2031,
        sellerType: 'Owner',
        reason: 'Business Debt'
    },
    {
        id: '10',
        title: '4-Bedroom Family Villa, Arabian Ranches',
        location: 'Saheel, Arabian Ranches',
        imageUrl: '/listings/ranches.png',
        emirate: 'dubai',
        propertyType: 'villa',
        price: 5500000,
        marketPrice: 7200000,
        discount: 24,
        size: 4800,
        pricePerSqft: 1145,
        marketAvgPricePerSqft: 1500,
        sellerType: 'Owner',
        reason: 'Downsizing'
    },
    {
        id: '11',
        title: '2-Bedroom Sea View Apartment, Sharjah',
        location: 'Maryan Island, Sharjah',
        imageUrl: '/listings/sharjah.png',
        emirate: 'sharjah',
        propertyType: 'apartment',
        price: 950000,
        marketPrice: 1300000,
        discount: 27,
        size: 1400,
        pricePerSqft: 678,
        marketAvgPricePerSqft: 928,
        sellerType: 'Owner',
        reason: 'Urgent Exit'
    },
    {
        id: '12',
        title: 'Modern Studio Apartment, Meydan',
        location: 'Azizi Riviera, Meydan',
        imageUrl: '/listings/meydan.png',
        emirate: 'dubai',
        propertyType: 'apartment',
        price: 650000,
        marketPrice: 850000,
        discount: 24,
        size: 450,
        pricePerSqft: 1444,
        marketAvgPricePerSqft: 1888,
        sellerType: 'Owner',
        reason: 'Investment Exit'
    },
    {
        id: '13',
        title: '3-Bedroom Premium Villa, Dubai Hills',
        location: 'Club Villas, Dubai Hills Estate',
        imageUrl: '/listings/dubaihills.png',
        emirate: 'dubai',
        propertyType: 'villa',
        price: 3800000,
        marketPrice: 4900000,
        discount: 22,
        size: 3100,
        pricePerSqft: 1225,
        marketAvgPricePerSqft: 1580,
        sellerType: 'Owner',
        reason: 'Upgrading'
    },
    {
        id: '14',
        title: '2-Bedroom Royal Suite, Palm Jumeirah',
        location: 'Royal Atlantis, Palm Jumeirah',
        imageUrl: '/listings/palmsuite.png',
        emirate: 'dubai',
        propertyType: 'apartment',
        price: 7500000,
        marketPrice: 10000000,
        discount: 25,
        size: 2100,
        pricePerSqft: 3571,
        marketAvgPricePerSqft: 4761,
        sellerType: 'Agent',
        reason: 'Quick Liquidity'
    },
    {
        id: '15',
        title: '4-Bedroom Garden Townhouse, Villanova',
        location: 'Amaranta, Villanova',
        imageUrl: '/listings/villanova.png',
        emirate: 'dubai',
        propertyType: 'townhouse',
        price: 2200000,
        marketPrice: 2800000,
        discount: 21,
        size: 2400,
        pricePerSqft: 916,
        marketAvgPricePerSqft: 1166,
        sellerType: 'Owner',
        reason: 'Relocation'
    },
    {
        id: '16',
        title: '3-Bedroom Waterfront Flat, Yas Island',
        location: 'Water\'s Edge, Yas Island',
        imageUrl: '/listings/yasisland.png',
        emirate: 'abu-dhabi',
        propertyType: 'apartment',
        price: 1800000,
        marketPrice: 2500000,
        discount: 28,
        size: 1600,
        pricePerSqft: 1125,
        marketAvgPricePerSqft: 1562,
        sellerType: 'Owner',
        reason: 'Priced to Sell'
    }
];

export default function SearchResultsPage() {
    const [view, setView] = useState<'grid' | 'map'>('grid');
    const [filters, setFilters] = useState({
        location: 'all',
        propertyType: 'all',
        priceRange: 'all',
        minDiscount: 0
    });

    const filteredListings = MOCK_LISTINGS.filter(listing => {
        if (filters.location !== 'all' && listing.emirate !== filters.location) return false;
        if (filters.propertyType !== 'all' && listing.propertyType !== filters.propertyType) return false;
        if (listing.discount < filters.minDiscount) return false;

        if (filters.priceRange !== 'all') {
            const price = listing.price;
            if (filters.priceRange === '0-1m' && price > 1000000) return false;
            if (filters.priceRange === '1m-5m' && (price < 1000000 || price > 5000000)) return false;
            if (filters.priceRange === '5m-15m' && (price < 5000000 || price > 15000000)) return false;
            if (filters.priceRange === '15m-plus' && price < 15000000) return false;
        }

        return true;
    });

    return (
        <main className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />
            <FilterBar filters={filters} setFilters={setFilters} />

            <div className="flex-1 flex flex-col md:flex-row h-[calc(100vh-144px)] overflow-hidden">
                {/* Left Side: Results */}
                <div className={`flex-1 overflow-y-auto p-4 md:p-6 space-y-6 ${view === 'map' ? 'hidden md:block md:max-w-xl' : ''}`}>
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-xl font-bold">{filteredListings.length} Distress Exits Found</h1>
                        <div className="flex bg-muted p-1 rounded-lg">
                            <Button
                                variant={view === 'grid' ? 'secondary' : 'ghost'}
                                size="sm"
                                className="h-8 px-3"
                                onClick={() => setView('grid')}
                            >
                                <Grid className="w-4 h-4 mr-2" />
                                Grid
                            </Button>
                            <Button
                                variant={view === 'map' ? 'secondary' : 'ghost'}
                                size="sm"
                                className="h-8 px-3"
                                onClick={() => setView('map')}
                            >
                                <MapIcon className="w-4 h-4 mr-2" />
                                Map
                            </Button>
                        </div>
                    </div>

                    <div className={`grid gap-6 ${view === 'map' ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
                        {filteredListings.length > 0 ? (
                            <>
                                {filteredListings.map(listing => (
                                    <ListingCard key={listing.id} {...listing} />
                                ))}
                            </>
                        ) : (
                            <div className="col-span-full py-20 text-center border-2 border-dashed rounded-2xl">
                                <p className="text-muted-foreground font-medium">No listings match your current filters.</p>
                                <Button
                                    variant="link"
                                    onClick={() => setFilters({ location: 'all', propertyType: 'all', priceRange: 'all', minDiscount: 0 })}
                                >
                                    Clear all filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Side: Map (Mock) */}
                <div className={`flex-1 bg-muted relative ${view === 'grid' ? 'hidden' : 'block'}`}>
                    <div className="absolute inset-0 bg-[#e5e7eb] flex items-center justify-center">
                        <div className="text-center space-y-4">
                            <MapIcon className="w-12 h-12 text-primary/40 mx-auto" />
                            <p className="text-muted-foreground font-medium">Interactive Map Preview</p>
                            <p className="text-xs text-muted-foreground max-w-xs mx-auto">
                                In production, this will utilize Google Maps API with custom deal clusters.
                            </p>
                        </div>
                    </div>

                    {/* Mock Pins (Filtered visually) */}
                    {filteredListings.length > 0 && (
                        <>
                            <div className="absolute top-1/4 left-1/3 p-2 bg-primary text-white rounded-lg shadow-lg text-[10px] font-bold animate-bounce">
                                AED {(filteredListings[0].price / 1000000).toFixed(1)}M (-{filteredListings[0].discount}%)
                            </div>
                            {filteredListings.length > 1 && (
                                <div className="absolute top-1/2 left-1/2 p-2 bg-primary text-white rounded-lg shadow-lg text-[10px] font-bold animate-bounce [animation-delay:200ms]">
                                    AED {(filteredListings[1].price / 1000000).toFixed(1)}M (-{filteredListings[1].discount}%)
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}
