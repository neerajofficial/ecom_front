import React from 'react'
import styles from './style.module.css';

const Backdrop = props => {
	const { clicked } = props;
	return (
		<div onClick={clicked} className={styles.backdrop}>
			&nbsp;
		</div>
	)
}

export default Backdrop