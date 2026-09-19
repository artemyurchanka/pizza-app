import { useMemo, useState, type ReactNode } from 'react';
import type { Product } from '../interfaces/product.interface';
import { CartContext, type CartItem } from './cart.context';

export function CartProvider({ children }: { children: ReactNode }) {
	const [items, setItems] = useState<CartItem[]>([]);

	const addToCart = (product: Product) => {
		setItems((currentItems) => {
			const existingItem = currentItems.find((item) => item.id === product.id);

			if (existingItem) {
				return currentItems.map((item) =>
					item.id === product.id ? { ...item, count: item.count + 1 } : item
				);
			}

			return [...currentItems, { ...product, count: 1 }];
		});
	};

	const increaseCount = (id: number) => {
		setItems((currentItems) =>
			currentItems.map((item) =>
				item.id === id ? { ...item, count: item.count + 1 } : item
			)
		);
	};

	const decreaseCount = (id: number) => {
		setItems((currentItems) =>
			currentItems
				.map((item) =>
					item.id === id ? { ...item, count: item.count - 1 } : item
				)
				.filter((item) => item.count > 0)
		);
	};

	const setCount = (id: number, count: number) => {
		const normalizedCount = Math.floor(count);

		if (normalizedCount <= 0) {
			setItems((currentItems) => currentItems.filter((item) => item.id !== id));
			return;
		}

		setItems((currentItems) =>
			currentItems.map((item) =>
				item.id === id ? { ...item, count: normalizedCount } : item
			)
		);
	};

	const total = useMemo(
		() => items.reduce((sum, item) => sum + item.price * item.count, 0),
		[items]
	);

	return (
		<CartContext.Provider value={{ items, addToCart, increaseCount, decreaseCount, setCount, total }}>
			{children}
		</CartContext.Provider>
	);
}
