import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import * as actions from './../../../store/actions';
import styles from './style.module.css';

import Button from './../../atoms/button';
import Input from './../../atoms/input';
import TextBox from './../../atoms/textBox';

const RegisterForm = props => {
	const { signup, message } = props;

	const [registerForm, setRegister] = useState({
		email: {
			value: ''
		},
		username: {
			value: ''
		},
		profile: {
			value: ''
		},
		password: {
			value: ''
		}
	});

	const changeHandler = (value, name, files) => {
		const newForm = { ...registerForm };

		newForm[name]= {
			...registerForm[name],
			value : files ? files[0] : value
		}

		setRegister(newForm);
	}

	const register = e => {
		e.preventDefault();
		const user = {
			username: registerForm.username.value,
			email: registerForm.email.value,
			profile: registerForm.profile.value,
			password: registerForm.password.value
		}
		signup(user);
	}

	useEffect(() => {
		if (!message) return;
		alert(message);
	}, [message])

	return (
		<div className={styles.registerForm}>
			<div className={styles.heading}>
				<TextBox
					text="Create New Account" 
					theme="heading" />
			</div>
			<form className={styles.form} method="put" onSubmit={register} encType="multipart/form-data" >
				<div className={styles.input}>
					<Input 
						type="file"
						name="profile"
						placeholder="Profile"
						onChange={e => changeHandler(e.target.value, e.target.name, e.target.files)} />
					<Input 
						type="email"
						name="email"
						placeholder="Email"
						value={registerForm.email.value}
						onChange={e => changeHandler(e.target.value, e.target.name, e.target.files)} />
				</div>
				<div className={styles.input}>
					<Input 
						type="text"
						name="username"
						placeholder="Username"
						value={registerForm.username.value}
						onChange={e => changeHandler(e.target.value, e.target.name, e.target.files)} />
				</div>
				<div className={styles.input}>
					<Input 
						type="password"
						name="password"
						placeholder="Password"
						value={registerForm.password.value}
						onChange={e => changeHandler(e.target.value, e.target.name, e.target.files)} />
				</div>
				<div className={styles.submit}>
					<Button 
						onClick={register}
						type="submit"
						theme="primary"
						size="medium"
						text="Submit" />
				</div>
			</form>
			
		</div>
	)
}

const mapStateToProps = state => {
	return {
		message: state.auth.message
	}
}


const mapDispatchToProps = dispatch => {
	return {
		signup: user => dispatch(actions.signup(user))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);