import React from 'react';
import styles from './style.module.css';

const Input = props => {
	const { type, placeholder, ...otherprops } = props;

	return (
		<input 
			className={styles.input}
			type={type}
			{...otherprops}
			placeholder={placeholder} />
	)
}

export default Input