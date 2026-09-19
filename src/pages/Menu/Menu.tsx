import { useEffect, useState, type ChangeEvent } from 'react';
import { AxiosError } from 'axios';
import Heading from '../../components/Heading/Heading';
import Search from '../../components/Search/Search';
import { getProducts } from '../../helpers/API';
import type { Product } from '../../interfaces/product.interface';
import { MenuList } from './MenuList/MenuList';
import styles from './Menu.module.css';

export function Menu() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | undefined>();
	const [filter, setFilter] = useState('');

	useEffect(() => {
		const loadMenu = async () => {
			try {
				setProducts(await getProducts());
				setError(undefined);
			} catch (e) {
				console.error(e);
				if (e instanceof AxiosError) {
					setError(e.message);
				}
			} finally {
				setIsLoading(false);
			}
		};

		loadMenu();
	}, []);

	const filteredProducts = products.filter((product) => {
		const query = filter.trim().toLowerCase();
		if (!query) {
			return true;
		}

		return (
			product.name.toLowerCase().includes(query) ||
			product.ingredients.some((ingredient) => ingredient.toLowerCase().includes(query))
		);
	});

	return (
		<>
			<div className={styles['head']}>
				<Heading>Меню</Heading>
				<Search
					placeholder="Введите блюдо или состав"
					value={filter}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)}
				/>
			</div>
			<div>
				{error && <>{error}</>}
				{!isLoading && <MenuList products={filteredProducts} />}
				{isLoading && <>Загружаем продукты...</>}
			</div>
		</>
	);
}
