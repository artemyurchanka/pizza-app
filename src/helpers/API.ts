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