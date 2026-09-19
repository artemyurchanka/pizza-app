/* eslint-disable react-refresh/only-export-components */
import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { CartProvider } from './context/CartProvider';
import { Cart } from './pages/Cart/Cart';
import { Error as ErrorPage } from './pages/Error/error';
import './index.css';

const Menu = lazy(() => import('./pages/Menu/Menu').then((m) => ({ default: m.Menu })));

const router = createHashRouter([
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
