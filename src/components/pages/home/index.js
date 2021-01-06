import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from './../../../store/actions';

import Products from './../../templates/products';

const Home = props => {
	const { onLoad, products } = props;

	useEffect(() => {
		onLoad();
	}, [onLoad]);

	let history = useHistory();
	
	const viewClicked = (e, id) => {
		history.push(`/view-product/${id}`);
	}

	return (
		<div>
			<Products 
				products={products} 
				viewClicked={viewClicked} />
		</div>
	)
}

const mapStateToProps = state => {
	return {
		products: state.products.products,
		error: state.products.error
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLoad: () => dispatch(actions.fetchProducts())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);