import * as actionTypes from './../actions/actionTypes';

const INITIAL_STATE = {
	products: [],
	product: {},
	error: null
}

const setProducts = (state, action) => {
	return {
		...state,
		products: action.payload
	}
}
const setProduct = (state, action) => {
	return {
		...state,
		product: action.payload
	}
}

const setError = (state, action) => {
	return {
		...state,
		error: action.payload
	}
}

const Products = (state = INITIAL_STATE, action) => { 
	switch(action.type) {
		case actionTypes.SET_PRODUCTS:
			return setProducts(state, action);
		case actionTypes.SET_PRODUCT:
			return setProduct(state, action);
		case actionTypes.FETCHING_ERROR:
			return setError(state, action);
		default:
			return state;
	}
}

export default Products;