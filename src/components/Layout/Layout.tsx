import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import cn from 'classnames';

export function Layout() {
	return (
		<div className={styles['layout']}>
			<div className={styles['slidebar']}>
				<div className={styles['user']}>
					<img className={styles['avatar']} src="/avayar.svg" alt="" />
					<div className={styles['name']}>Антон Ларичев</div>
					<div className={styles['email']}>alari@ya.ru</div>
				</div>
				<div className={styles['menu']}>
					<NavLink
						to="/"
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles.active]: isActive,
							})
						}
					>
						<img src="/menu-icon.svg" alt="" />
						Меню
					</NavLink>
					<NavLink
						to="/cart"
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles.active]: isActive,
							})
						}
					>
						<img src="/cart-icon.svg" alt="" />
						Корзина
					</NavLink>
				</div>
				<button className={styles['exit']}>
					<img src="/exit-icon.svg" alt="" />
					Выход
				</button>
			</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
}
