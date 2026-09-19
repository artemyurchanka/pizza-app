import { type ChangeEvent } from 'react';
import Heading from '../../components/Heading/Heading';
import { useCart } from '../../hooks/useCart';
import styles from './Cart.module.css';

export function Cart() {
	const { items, increaseCount, decreaseCount, setCount, total } = useCart();

	const handleCountChange = (id: number, event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		if (value === '') {
			return;
		}

		const count = Number.parseInt(value, 10);

		if (Number.isNaN(count)) {
			return;
		}

		setCount(id, count);
	};

	return (
		<>
			<Heading>Корзина</Heading>
			{items.length === 0 ? (
				<div className={styles.empty}>Корзина пуста</div>
			) : (
				<>
					<div className={styles.list}>
						{items.map((item) => (
							<div key={item.id} className={styles.item}>
								<img className={styles.image} src={item.image} alt={item.name} />
								<div className={styles.info}>
									<div className={styles.title}>{item.name}</div>
									<div className={styles.price}>
										{item.price * item.count}&nbsp;
										<span className={styles.currency}>₽</span>
									</div>
								</div>
								<div className={styles.counter}>
									<button
										className={styles.button}
										type="button"
										aria-label="Уменьшить количество"
										onClick={() => decreaseCount(item.id)}
									>
										-
									</button>
									<input
										className={styles.countInput}
										type="number"
										min={1}
										value={item.count}
										onChange={(event) => handleCountChange(item.id, event)}
									/>
									<button
										className={styles.button}
										type="button"
										aria-label="Увеличить количество"
										onClick={() => increaseCount(item.id)}
									>
										+
									</button>
								</div>
							</div>
						))}
					</div>
					<div className={styles.total}>
						Итого: {total}&nbsp;<span className={styles['total-currency']}>₽</span>
					</div>
					<button className={styles['order-button']} type="button">
						Оформить заказ
					</button>
				</>
			)}
		</>
	);
}
