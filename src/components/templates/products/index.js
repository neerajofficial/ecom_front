import React from 'react';
import styles from './style.module.css';

import ProductCard from './../../molecules/productCard'

const baseURL = process.env.REACT_APP_API_SERVER;

const Products = props => {
	const { products, admin, clicked, deleteItem, viewClicked } = props; return (
		<div className={styles.products}>
			{ products && products.map(product => (
        		<ProductCard
        			key={product._id}
        			admin={admin}
					src={baseURL+'/'+product.image} 
					prod_name={product.prod_name} 
					prod_price={product.prod_price}
					description={product.description}
					imageWrap="img__center"
					size="medium"
					clicked={(e) => clicked(e, product._id)}
					viewClicked={e => viewClicked(e, product._id)}
					deleteItem={e => deleteItem(e, product._id)} />
      		))}
		</div>
	)
}


export default Products