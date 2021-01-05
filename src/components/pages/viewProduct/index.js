import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './../../../store/actions';
import styles from './style.module.css';

import Button from './../../atoms/button';
import Img from './../../img';
import TextBox from './../../textBox';

const baseURL = process.env.REACT_APP_API_SERVER;

const ViewProduct = props => {
	const { onLoad, product, ondeleteItem } = props;
	const id = props.match.params.id;
	const params = new URLSearchParams(props.location.search);
	const admin = params.get('admin');

	let history = useHistory();

	useEffect(() => {
		onLoad(id);
	}, [onLoad, id])

	const deleteItem = (e, id) => {
		ondeleteItem(id);	
	}

	const clicked = (e, id) => {
		history.push(`/add-product/${id}?edit=${true}`);
	}

	return (
		<div className={styles.viewCard}>
			{ admin 
				? (
				<React.Fragment>
				<div className={styles.edit}>
					<Button 
						onClick={e => clicked(e, product._id)}
						type="submit"
						theme="secondary"
						size="small"
						text="Edit" />
				</div>
				<div className={styles.deleteItem}>
					<Button 
						onClick={e => deleteItem(e, product._id)}
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
					src={baseURL+'/'+product.image} 
					alt={product.prod_name}
					imageWrap="img__center"
					size="medium" />
			</div>
			<div className={styles.price}>
				<TextBox 
					theme="darkBg"
					text={`₹ ${product.prod_price} `} />
			</div>
			<div className={styles.name}>
				<TextBox 
					theme="primary"
					text={product.prod_name} />
			</div>
			<div className={styles.description}>
				<TextBox 
					theme="secondary"
					text={product.description} />
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		product: state.products.product
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLoad: id => dispatch(actions.fetchProduct(id)),
		ondeleteItem: id => dispatch(actions.ondelete(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProduct);
