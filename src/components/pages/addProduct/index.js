import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import * as actions from './../../../store/actions';

import styles from './style.module.css';

import Button from './../../atoms/button';
import Input from './../../atoms/input';
import TextArea from './../../atoms/textArea';
import TextBox from './../../atoms/textBox';

const AddProduct = props => {
	const { addProduct, updateProduct, fetchProduct, product: fetchedProduct, token } = props;
	const params = new URLSearchParams(props.location.search);
	const editMode = params.get('edit')
	const prod_id = props.match.params.id;
	
	
	const [productForm, setProduct] = useState({
		prod_name: {
			value: '',
		},
		prod_price: {
			value: ''
		},
		description: {
			value: ''
		},
		image: {
		  	value: ''
		},
		user_id: {
		  	value: 'asa'
		}
	});

	const fetchForm = useCallback(product => {
		const newForm = {
			prod_name: {
				value: editMode === 'true' ? product.prod_name : ''
			},
			prod_price: {
				value: editMode === 'true' ? product.prod_price : ''
			},
			description: {
				value: editMode === 'true' ? product.description : ''
			},
			image: {
				value: editMode === 'true' ? product.image :''
			},
			user_id: {
				value: editMode === 'true' ? 'asa' : ''
			}	
		}
		setProduct(newForm);
	}, [editMode])

	useEffect(() => {
		if (editMode) {
			fetchProduct(prod_id);
		}
	}, [editMode, prod_id, fetchProduct])

	useEffect(() => {
		fetchForm(fetchedProduct)
	}, [fetchedProduct, fetchForm])
	

	const formHandler = (value, name, files) => {
		const newForm = { ...productForm };

		newForm[name]= {
			...productForm[name],
			value : files ? files[0] : value
		}

		setProduct(newForm);
	}

	const submit = e => {
		e.preventDefault();

		const product = {
			prod_name: productForm.prod_name.value,
			prod_price: productForm.prod_price.value,
			image: productForm.image.value,
			description: productForm.description.value,
			user_id: productForm.user_id.value
		}
		if (editMode) {
			updateProduct(prod_id, product, token);
		} else {
			addProduct(product, token);
		}
	}

	return (
		<div className={styles.add_Product}>
			<div className={styles.heading}>
				<TextBox 
					theme="heading"
					text="Add New Product" />
			</div>
			<div className={styles.form}>
				<div className={styles.input}>
					<Input 
						type="text"
						name="prod_name"
						placeholder="Name"
						value={productForm.prod_name.value}
						onChange={(e) => formHandler(e.target.value, e.target.name, e.target.files)} />
				</div>
				<div className={styles.input}>
					<Input 
						type="number"
						name="prod_price"
						placeholder="Price"
						step="0.01"
						min="0"
						value={productForm.prod_price.value}
						onChange={(e) => formHandler(e.target.value, e.target.name, e.target.files)} />
				</div>
				<div className={styles.input}>
					<Input 
						type="file"
						name="image"
						placeholder="Image"
						onChange={(e) => formHandler(e.target.value, e.target.name,  e.target.files)} />
				</div>
				<div className={styles.input}>
					<TextArea 
						name="description"
						placeholder="Description"
						value={productForm.description.value}
						clicked={(e) => formHandler(e.target.value, e.target.name,  e.target.files)} />
				</div>
			</div>
			<div className={styles.submit}>
				<Button 
					theme="primary"
					size="medium"
					text="Submit"
					onClick={submit} />
			</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		fetchProduct: id => dispatch(actions.fetchProduct(id)),
		addProduct: (product, token) => dispatch(actions.addProduct(product, token)),
		updateProduct: (prod_id, product, token) => dispatch(actions.updateProduct(prod_id, product, token))
	}
}

const mapStateToProps = state => {
	return {
		product: state.products.product,
		token: state.auth.token
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);