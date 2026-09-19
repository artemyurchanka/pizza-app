/* eslint-disable react-refresh/only-export-components */
import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import axios from 'axios';
import { Layout } from './components/Layout/Layout';
import { CartProvider } from './context/CartProvider';
import { Cart } from './pages/Cart/Cart';
import { Error as ErrorPage } from './pages/Error/error';
import { PREFIX } from './helpers/API';
import type { Product } from './interfaces/product.interface';
import './index.css';

const Menu = lazy(() => import('./pages/Menu/Menu').then((m) => ({ default: m.Menu })));
const ProductPage = lazy(() =>
	import('./components/Product/Product').then((m) => ({ default: m.Product }))
);

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: (
					<Suspense fallback={<>Загрузка...</>}>
						<Menu />
					</Suspense>
				),
			},
			{
				path: 'cart',
				element: <Cart />,
			},
			{
				path: 'product/:id',
				element: (
					<Suspense fallback={<>Загрузка...</>}>
						<ProductPage />
					</Suspense>
				),
				loader: async ({ params }) => {
					const response = await axios.get<Product>(`${PREFIX}/products/${params.id}`);
					return response.data;
				},
			},
			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<CartProvider>
			<RouterProvider router={router} />
		</CartProvider>
	</StrictMode>
);
