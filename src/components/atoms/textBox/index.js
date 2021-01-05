import React from 'react'
import styles from './style.module.css'

const TextBox = props => {
	const { text, theme, ...otherProps } = props;

	return (
		<div 
			className={styles[theme]} 
			{...otherProps}>
				{text}
		</div>
	)
}

export default TextBox