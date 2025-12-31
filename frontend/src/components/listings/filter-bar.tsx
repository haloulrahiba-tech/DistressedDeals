'use client';

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface FilterBarProps {
    filters: {
        location: string;
        propertyType: string;
        priceRange: string;
        minDiscount: number;
    };
    setFilters: (filters: any) => void;
}

export function FilterBar({ filters, setFilters }: FilterBarProps) {
    return (
        <div className="sticky top-16 z-40 w-full border-b bg-background/95 backdrop-blur py-4">
            <div className="container mx-auto px-4 flex flex-wrap items-center gap-4">
                <div className="flex-1 min-w-[150px]">
                    <Select
                        value={filters.location}
                        onValueChange={(value) => setFilters({ ...filters, location: value })}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Location" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Locations</SelectItem>
                            <SelectItem value="dubai">Dubai</SelectItem>
                            <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
                            <SelectItem value="sharjah">Sharjah</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex-1 min-w-[150px]">
                    <Select
                        value={filters.propertyType}
                        onValueChange={(value) => setFilters({ ...filters, propertyType: value })}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Property Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Types</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="villa">Villa</SelectItem>
                            <SelectItem value="townhouse">Townhouse</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex-1 min-w-[150px]">
                    <Select
                        value={filters.priceRange}
                        onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Price Range" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">Any Price</SelectItem>
                            <SelectItem value="0-1m">AED 0 - 1M</SelectItem>
                            <SelectItem value="1m-5m">AED 1M - 5M</SelectItem>
                            <SelectItem value="5m-15m">AED 5M - 15M</SelectItem>
                            <SelectItem value="15m-plus">AED 15M+</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex-2 min-w-[200px] flex flex-col gap-2">
                    <div className="flex justify-between text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                        <span>Min Discount % ({filters.minDiscount}%)</span>
                        <span>0% - 50%+</span>
                    </div>
                    <Slider
                        value={[filters.minDiscount]}
                        onValueChange={(val) => setFilters({ ...filters, minDiscount: val[0] })}
                        max={50}
                        step={1}
                        className="py-1"
                    />
                </div>
            </div>
        </div>
    );
}
