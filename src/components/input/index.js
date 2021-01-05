import React from 'react';
import styles from './style.module.css';

const Input = props => {
	const { clicked, value, placeholder, ...otherprops } = props;

	return (
		<input 
			className={styles.input}
			type="text"
			onChange={clicked}
			{...otherprops}
			value={value}
			placeholder={placeholder} />
	)
}

export default Input