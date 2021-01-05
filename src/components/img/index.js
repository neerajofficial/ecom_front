import React from 'react'
import styles from './style.module.css';

const Img = props => {
	const { src, alt, imageWrap, size } = props;

	return (
		<div className={styles[imageWrap]}>
			<img 
				className={styles[size]}
				src={src}
				alt={alt} />
		</div>
	)
}

export default Img