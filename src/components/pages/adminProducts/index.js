import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './../../../store/actions';

import Products from './../../products';

const AdminProducts = props => {
	const { checkauth, onLoad, ondelete, products, token } = props;
	let history = useHistory();
	const admin = "true";

	useEffect(() => {
		checkauth()
	}, [checkauth]);

	useEffect(() => {
		onLoad(token);
	}, [onLoad, token]);

	const clicked = (e, id) => {
		history.push(`/add-product/${id}?edit=${true}`);
	}
	
	const viewClicked = (e, id) => {
		history.push(`/view-product/${id}?admin=true`);
	}

	const deleteItem = (e, id) => {
		ondelete(id);
	}

	return (
		<div>
			<Products 
				clicked={clicked}
				admin={admin} 
				products={products}
				deleteItem={deleteItem}
				viewClicked={viewClicked} />
		</div>
	)
}

const mapStateToProps = state => {
	return {
		products: state.products.products,
		error: state.products.error,
		token: state.auth.token
	}
}

const mapDispatchToProps = dispatch => {
	return {
		checkauth: () => dispatch(actions.getAuth()),
		onLoad: (token) => dispatch(actions.fetchAuthProducts(token)),
		ondelete: id => dispatch(actions.ondelete(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProducts);