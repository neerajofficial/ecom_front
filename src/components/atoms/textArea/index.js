import React from 'react';
import styles from './style.module.css';

const TextArea = props => {
	const { clicked, type, value, placeholder, ...otherprops } = props;

	return (
		<textarea 
			onChange={clicked}
			{...otherprops}
			className={styles.textArea}
			rows="5"
			placeholder={placeholder}
			value={value}>
		
		</textarea> 
	)
}

export default TextArea