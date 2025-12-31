export type UserRole = 'buyer' | 'seller' | 'agent' | 'admin';

export interface User {
  id: string;
  email: string;
  phone?: string;
  role: UserRole;
  languagePreference: 'en' | 'ar';
  emailVerified: boolean;
  phoneVerified: boolean;
  titleDeedVerified: boolean;
  isPremium: boolean;
  premiumExpiresAt?: Date;
  createdAt: Date;
}

export type PropertyType = 'villa' | 'apartment' | 'townhouse' | 'commercial' | 'land';
export type ListingStatus = 'pending' | 'active' | 'sold' | 'rejected' | 'expired';
export type DealGrade = 'good' | 'great' | 'exceptional';
export type DistressCategory = 
  | 'foreclosure' 
  | 'financial_hardship' 
  | 'divorce_settlement' 
  | 'urgent_relocation' 
  | 'estate_sale' 
  | 'debt_settlement' 
  | 'business_liquidation';

export interface Listing {
  id: string;
  userId: string;
  titleEn: string;
  titleAr?: string;
  descriptionEn: string;
  descriptionAr?: string;
  propertyType: PropertyType;
  bedrooms?: number;
  bathrooms?: number;
  sizeSqft?: number;
  emirate: string;
  area: string;
  latitude?: number;
  longitude?: number;
  distressCategory: DistressCategory;
  askingPrice: number;
  marketPrice?: number;
  discountPercentage?: number;
  dealGrade?: DealGrade;
  deedNumber: string;
  status: ListingStatus;
  publishedAt?: Date;
  createdAt: Date;
}

export interface Inquiry {
  id: string;
  listingId: string;
  buyerId: string;
  sellerId: string;
  message: string;
  status: 'new' | 'replied' | 'closed';
  createdAt: Date;
}
