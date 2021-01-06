import React from 'react';
import styles from './style.module.css';

const SearchBox = props => {
	const { clicked, value, placeholder, ...otherprops } = props;

	return (
		<input 
			className={styles.searchBox}
			type="text"
			onChange={clicked}
			{...otherprops}
			value={value}
			placeholder={placeholder} />
	)
}

export default SearchBox