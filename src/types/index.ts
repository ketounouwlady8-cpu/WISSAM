export type ProductCategory = 
  | 'all'
  | 'electroportatif'
  | 'sans-fil-20v'
  | 'coffrets-main'
  | 'soudure-plomberie'
  | 'batiment-nettoyage'
  | 'epi-securite';

export interface Product {
  id: string;
  name: string;
  code: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  power?: string;
  voltage?: string;
  description: string;
  features: string[];
  inStock: boolean;
  isPromo?: boolean;
  image: string;
  tag?: string;
  warrantyMonths?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerOrderInfo {
  fullName: string;
  phone: string;
  city: string;
  deliveryType: 'retrait' | 'livraison';
  notes?: string;
}
