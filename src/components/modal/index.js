import React from 'react'
import styles from './style.module.css';

import LoginForm from './../loginForm';
import RegisterForm from './../registerForm';
import TextBox from './../textBox';

const Modal = props => {
	const { clicked, heading, formSwitcher, formClicked, ...otherProps } = props;
	return (
		<div className={styles.modal}>
			<div className={styles.main}>
			{ formSwitcher 
				? <LoginForm />
				: <RegisterForm />
			}
			</div>
			<div className={styles.switch}>
				<TextBox 
					theme="highlight"
					text="Click to Login"
					onClick={formClicked} />
			</div>
		</div>
	)
}

export default Modal