import React, { useState } from 'react'
import { connect } from 'react-redux';
import * as actions from './../../store/actions';
import styles from './style.module.css';

import Button from './../button';
import Input from './../input';
import TextBox from './../textBox';

const LoginForm = props => {
	const { login, message } = props;

	const [loginForm, setLogin] = useState({
		username: {
			value: ''
		},
		password: {
			value: ''
		}
	});

	const changeHandler = e => {
		const value = e.target.value;
		const name = e.target.name;

		const newForm = { ...loginForm };

		newForm[name]= {
			...loginForm[name],
			value : value
		}

		setLogin(newForm);
	}

	const loginHandler = e => {
		e.preventDefault();
		const user = {
			username: loginForm.username.value,
			password: loginForm.password.value
		}
		login(user);
	}

	return (
		<div className={styles.loginForm}>
			<div className={styles.heading}>
				<TextBox
					text="Login" 
					theme="heading" />
			</div>
			<form className={styles.form} method="POST" onSubmit={loginHandler} >
				<div className={styles.input}>
					<Input 
						type="text"
						name="username"
						placeholder="Username"
						value={loginForm.username.value}
						onChange={e => changeHandler(e)} />
				</div>
				<div className={styles.input}>
					<Input 
						type="password"
						name="password"
						placeholder="Password"
						value={loginForm.password.value}
						onChange={e => changeHandler(e)}  />
				</div>
				<div className={styles.submit}>
					<Button 
						onClick={loginHandler}
						type="submit"
						theme="primary"
						size="medium"
						text="Submit" />
				</div>
			</form>
			<span>{message}</span>
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
		login: user => dispatch(actions.login(user))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);