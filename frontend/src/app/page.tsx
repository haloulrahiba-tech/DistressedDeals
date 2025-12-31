'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/layout/hero';
import { FilterBar } from '@/components/listings/filter-bar';
import { ListingCard } from '@/components/listings/listing-card';
import { VerificationSidebar } from '@/components/shared/verification-sidebar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

export default function Home() {
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
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <FilterBar filters={filters} setFilters={setFilters} />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-tight">Active distress exits ({filteredListings.length})</h2>
              <div className="flex gap-2 text-sm">
                <span className="text-muted-foreground">Sort by:</span>
                <button className="font-semibold text-primary underline underline-offset-4">Most Discounted</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]">
              {filteredListings.length > 0 ? (
                filteredListings.map(listing => (
                  <ListingCard key={listing.id} {...listing} />
                ))
              ) : (
                <div className="col-span-full py-20 text-center border-2 border-dashed rounded-2xl">
                  <p className="text-muted-foreground font-medium">No listings match your current filters.</p>
                  <Button variant="link" onClick={() => setFilters({ location: 'all', propertyType: 'all', priceRange: 'all', minDiscount: 0 })}>
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>

            <div className="pt-10 pb-20 text-center border-t">
              <h3 className="text-2xl font-bold mb-4">Don’t chase listings. Get notified when real opportunities appear.</h3>
              <p className="text-muted-foreground mb-8">Join 1,200+ active investors receiving instant alerts.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="px-8 font-bold">Join Buyer Alerts</Button>
                <Link href="/list-property">
                  <Button size="lg" variant="outline" className="px-8 font-bold text-primary">List a Property Privately</Button>
                </Link>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <VerificationSidebar />
          </aside>
        </div>
      </div>

      <footer className="border-t py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground font-medium">© 2025 UAE Distress Deals. All rights reserved.</p>
            <div className="flex gap-8 text-sm text-muted-foreground font-bold uppercase tracking-tighter">
              <Link href="/legal" className="hover:text-primary transition-colors">Privacy & Terms</Link>
              <Link href="/how-it-works" className="hover:text-primary transition-colors">Methodology</Link>
              <Link href="/auth/login" className="hover:text-primary transition-colors">Investor Login</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
