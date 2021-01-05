import React from 'react';
import styles from './style.module.css';

const Button = props => {
	const { theme, size, text, ...otherProps } = props;
	
	const classProps = [styles.button, styles[theme], styles[size]].join(' ');

	return (
		<button 
			className={classProps} 
			{...otherProps} >
				{text}
		</button>
	)
}

export default Button