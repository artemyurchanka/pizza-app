import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import styles from './ProductCard.module.css';
import type { ProductCardProps } from './ProductCard.props';

function ProductCard(props: ProductCardProps) {
	const { addToCart } = useCart();

	const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		event.stopPropagation();
		addToCart({
			id: props.id,
			name: props.title,
			price: props.price,
			image: props.image,
			ingredients: props.description.split(', '),
			rating: props.rating,
		});
	};

	return (
		<Link to={`/product/${props.id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div className={styles['head']}>
					<img className={styles['image']} src={props.image} alt={props.title} />
					<div className={styles['price']}>
						{props.price}&nbsp;<span className={styles['currency']}>₽</span>
					</div>
					<button
						className={styles['add-to-cart']}
						type="button"
						onClick={handleAddToCart}
					>
						<img src="/cart-button-icon.svg" alt="Добавить в корзину" />
					</button>
					<div className={styles['rating']}>
						{props.rating}&nbsp;
						<img src="/star-icon.svg" alt="" />
					</div>
				</div>
				<div className={styles['footer']}>
					<div className={styles['title']}>{props.title}</div>
					<div className={styles['desscription']}>{props.description}</div>
				</div>
			</div>
		</Link>
	);
}

export default ProductCard;
