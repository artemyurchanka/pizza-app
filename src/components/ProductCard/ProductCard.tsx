import { useCart } from '../../hooks/useCart';
import styles from './ProductCard.module.css';
import type { ProductCardProps } from './ProductCard.props';

function ProductCard(props: ProductCardProps) {
	const { addToCart } = useCart();

	const handleAddToCart = () => {
		addToCart({
			id: props.id,
			name: props.title,
			price: props.price,
			image: props.image,
			ingredients: props.description.split(', '),
			rating: props.rating,
			weight: props.weight,
		});
	};

	return (
		<div className={styles['card']}>
			<div className={styles['head']}>
				<img className={styles['image']} src={props.image} alt={props.title} />
				<div className={styles['price']}>
					{props.price}&nbsp;<span className={styles['currency']}>₽</span>
				</div>
				<button
					className={styles['add-to-cart']}
					type="button"
					aria-label={`Добавить ${props.title} в корзину`}
					onClick={handleAddToCart}
				>
					<img src={`${import.meta.env.BASE_URL}cart-button-icon.svg`} alt="Добавить в корзину" />
				</button>
				<div className={styles['rating']}>
					{props.rating}&nbsp;
					<img src={`${import.meta.env.BASE_URL}star-icon.svg`} alt="" />
				</div>
			</div>
			<div className={styles['footer']}>
				<div className={styles['title']}>{props.title}</div>
				<div className={styles['desscription']}>{props.description}</div>
				<div className={styles['weight']}>{props.weight} г</div>
			</div>
		</div>
	);
}

export default ProductCard;
