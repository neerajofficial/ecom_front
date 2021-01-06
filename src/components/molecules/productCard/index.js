import React from 'react';
import styles from './style.module.css';

import Button from './../../atoms/button';
import Img from './../../atoms/img';
import TextBox from './../../atoms/textBox';

const ProductCard = props => {
	const { src, prod_name, prod_price, description, imageWrap, size, admin, clicked, viewClicked, deleteItem } = props;

	return (
		<div className={styles.productCard}>
			{ admin 
				? (
				<React.Fragment>
				<div className={styles.edit}>
					<Button 
						onClick={clicked}
						type="submit"
						theme="secondary"
						size="small"
						text="Edit" />
				</div>
				<div className={styles.deleteItem}>
					<Button 
						onClick={deleteItem}
						type="submit"
						theme="secondary"
						size="small"
						text="Delete" />
				</div>
				</React.Fragment>
			)
				: null
			}
			
			<div className={styles.image}>
				<Img 
					src={src} 
					alt={prod_name}
					imageWrap={imageWrap}
					size={size} />
			</div>
			<div className={styles.name}>
				<TextBox 
					theme="primary"
					text={prod_name} />
			</div>
			<div className={styles.pview}>
				<div className={styles.view}>
					<Button 
						onClick={viewClicked}
						type="submit"
						theme="primary"
						size="small"
						text="View"
						admin={admin} />
				</div>
				<div className={styles.price}>
					<TextBox 
						theme="darkBg"
						text={`₹ ${prod_price} `} />
				</div>
			</div>
			<div className={styles.description}>
				<TextBox 
					theme="secondary"
					text={description} />
			</div>
		</div>
	)
}

export default ProductCard