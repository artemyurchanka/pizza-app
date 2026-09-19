import type { Product as ProductType } from '../../interfaces/product.interface';
import { useLoaderData } from 'react-router-dom';

export function Product() {
	const product = useLoaderData() as ProductType;

	return <>Product - {product.name}</>;
}
