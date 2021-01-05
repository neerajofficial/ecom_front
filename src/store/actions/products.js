import * as actionTypes from './actionTypes';
import axiosInstance from './../../api';

const fetchingFailed = err => {
	return {
		type: actionTypes.FETCHING_ERROR,
		payload: err
	}
}

const setProducts = data => {
	return {
		type: actionTypes.SET_PRODUCTS,
		payload: data.products
	}
}

const setProduct = data => {
	return {
		type: actionTypes.SET_PRODUCT,
		payload: data.product
	}
}

export const fetchAuthProducts = token => {
	return (dispatch) => {
		axiosInstance({
			method: 'get',
			url: '/auth-products',
			headers: {
				Authorization: 'Bearer ' + token
			}
		})
		.then(resp => dispatch(setProducts(resp.data)))
		.catch(err => dispatch(fetchingFailed(err)))
	}
}

export const fetchProducts = () => {
	return (dispatch) => {
		axiosInstance.get('/products')
			.then(resp => dispatch(setProducts(resp.data)))
			.catch(err => dispatch(fetchingFailed(err)))
	}
}

export const addProduct = (product, token) => {
	const formData = new FormData();
	formData.append('prod_name', product.prod_name);
	formData.append('prod_price', product.prod_price);
	formData.append('image', product.image);
	formData.append('description', product.description);
	formData.append('user_id', product.user_id);

	return (dispatch) => {
		axiosInstance({
  			method: 'post',
  			url: '/add-product',
  			data: formData,
  			headers: {
				Authorization: 'Bearer ' + token
			}
		})
		.then(resp => {
			dispatch(setProducts(resp.data))
		})
		.catch(err => {
			console.log(err);
			dispatch(fetchingFailed(err))
		})
	}
}

export const fetchProduct = id => {
	return dispatch => {
		axiosInstance(`/product/${id}`)
			.then(resp => dispatch(setProduct(resp.data)))
			.catch(err => dispatch(fetchingFailed(err)))
	}
}

export const updateProduct = (prod_id, product, token) => {
	const formData = new FormData();
	formData.append('prod_name', product.prod_name);
	formData.append('prod_price', product.prod_price);
	formData.append('image', product.image);
	formData.append('description', product.description);
	formData.append('user_id', product.user_id);

	return (dispatch) => {
		axiosInstance({
  			method: 'put',
  			url: '/product/'+prod_id,
  			data: formData,
  			headers: {
				Authorization: 'Bearer ' + token
			}
		})
		.then(resp => {
			dispatch(setProducts(resp.data))
		})
		.catch(err => {
			console.log(err);
			dispatch(fetchingFailed(err))
		})
	}
}

export const ondelete = id => {
	return dispatch => {
		axiosInstance.delete(`/product/${id}`)
			.then(resp => {
				console.log(resp.message);
				// dispatch(setProducts(resp.data))
			})
			.catch(err => {
				console.log(err);
				dispatch(fetchingFailed(err))
			})
	}
}