import React from 'react'
import styles from './style.module.css';

import LoginForm from './../../organisms/loginForm';
import RegisterForm from './../../organisms/registerForm';
import TextBox from './../../atoms/textBox';

const Modal = props => {
	const { formSwitcher, formClicked } = props;
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