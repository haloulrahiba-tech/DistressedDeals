import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bookmark, MoveUpRight, Timer, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ListingCardProps {
    id: string;
    title: string;
    location: string;
    imageUrl: string;
    price: number;
    marketPrice: number;
    discount: number;
    size: number;
    pricePerSqft: number;
    marketAvgPricePerSqft: number;
    sellerType: string;
    reason: string;
}

export function ListingCard({
    id,
    title,
    location,
    imageUrl,
    price,
    marketPrice,
    discount,
    size,
    pricePerSqft,
    marketAvgPricePerSqft,
    sellerType,
    reason
}: ListingCardProps) {
    return (
        <Card className="overflow-hidden border-border group hover:border-primary/50 transition-all duration-300">
            <div className="relative h-48 w-full bg-muted">
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground z-10">
                    {discount}% Below Market
                </Badge>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur rounded-full p-1.5 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                    <Bookmark className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="w-full h-full relative">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>

            <CardContent className="p-5">
                <Link href={`/listings/${id}`}>
                    <h3 className="text-lg font-bold text-foreground mb-1 leading-tight group-hover:text-primary transition-colors cursor-pointer">
                        {title}
                    </h3>
                </Link>
                <p className="text-sm text-muted-foreground mb-4">{location}</p>

                <div className="flex justify-between items-end mb-4">
                    <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">Price (AED)</p>
                        <p className="text-xl font-bold text-foreground">
                            {price.toLocaleString()} <span className="text-xs font-normal text-muted-foreground ml-1">AED</span>
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-muted-foreground mb-0.5">Was AED {marketPrice.toLocaleString()}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 py-3 border-y border-border/50 text-sm mb-4">
                    <div>
                        <p className="text-xs text-muted-foreground mb-0.5">Price per sqft</p>
                        <div className="flex items-center gap-1.5 font-semibold text-foreground">
                            {pricePerSqft.toLocaleString()} AED
                            <span className="text-[10px] font-normal text-primary flex items-center gap-0.5">
                                <MoveUpRight className="w-2.5 h-2.5" />
                                (Market Avg: {marketAvgPricePerSqft})
                            </span>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-xs text-muted-foreground mb-0.5">Size</p>
                        <p className="font-semibold text-foreground">{size.toLocaleString()} sqft</p>
                    </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        <span>Seller Type: <span className="text-foreground font-medium">{sellerType}</span></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Timer className="w-3.5 h-3.5" />
                        <span>Reason: <span className="text-foreground font-medium">{reason}</span></span>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="p-5 pt-0 flex gap-2">
                <Link href={`/listings/${id}`} className="flex-1">
                    <Button className="w-full text-sm h-10">View Deal</Button>
                </Link>
                <Button variant="outline" size="icon" className="h-10 w-10">
                    <BarChart3 className="w-4 h-4" />
                </Button>
            </CardFooter>
        </Card>
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
