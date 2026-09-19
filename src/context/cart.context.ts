import { createContext } from 'react';
import type { Product } from '../interfaces/product.interface';

export interface CartItem extends Product {
	count: number;
}

export interface CartContextValue {
	items: CartItem[];
	addToCart: (product: Product) => void;
	increaseCount: (id: number) => void;
	decreaseCount: (id: number) => void;
	setCount: (id: number, count: number) => void;
	total: number;
}

export const CartContext = createContext<CartContextValue | undefined>(undefined);
