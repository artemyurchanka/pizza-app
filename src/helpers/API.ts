import axios from 'axios';
import data from '../../data/data.json';
import type { Product } from '../interfaces/product.interface';

export const PREFIX = '/api';

const STATIC_DATA = import.meta.env.PROD;

export async function getProducts(): Promise<Product[]> {
	if (STATIC_DATA) {
		return data.products;
	}

	const { data: products } = await axios.get<Product[]>(`${PREFIX}/products`);
	return products;
}

export async function getProduct(id: number): Promise<Product> {
	if (STATIC_DATA) {
		const product = data.products.find((item) => item.id === id);

		if (!product) {
			throw new Error(`Блюдо с id ${id} не найдено`);
		}

		return product;
	}

	const { data: product } = await axios.get<Product>(`${PREFIX}/products/${id}`);
	return product;
}