import cn from 'classnames';
import styles from './Heading.module.css';
import type { HeadingProps } from './Heading.props';

function Heading({ children, className, ...props }: HeadingProps) {
	return (
		<h1 className={cn(styles.heading, className)} {...props}>
			{children}
		</h1>
	);
}

export default Heading;
