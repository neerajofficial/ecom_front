import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style.module.css';

import logo from './../../assets/icons/logo.svg';
import Button from './../button';
import Img from './../img';
import SearchBox from './../searchBox';

const Navigation = props => {
	const { auth, login, logout } = props;

	return (
		<div className={styles.navigation}>
			<div className={styles.logo}>
				<Img 
					src={logo} 
					alt="logo" 
					imageWrap="img__left"
					size="small" />
			</div>
			<div className={styles.navLinks}>
			{
				auth
				? <ul>
					<NavLink 
						to="/home" 
						className={styles.navLink}
						activeClassName={styles.active}>
							<li>Home</li>
					</NavLink>
					<NavLink 
						to="/my-products" 
						className={styles.navLink}
						activeClassName={styles.active}>
							<li>My Products</li>
					</NavLink>
					<NavLink 
						to="/add-product" 
						className={styles.navLink}
						activeClassName={styles.active}>
							<li>Add Product</li>
					</NavLink>
				</ul>	
				: <ul>
					<NavLink 
						to="/home" 
						className={styles.navLink}
						activeClassName={styles.active}>
							<li>Home</li>
					</NavLink>
				</ul>	
			}		
			</div>
			<div className={styles.searchBox}>
				<SearchBox
				placeholder="Search Product" />
			</div>
			{
				auth
				? <div className={styles.actions}>
					<Button 
						onClick={logout}
						theme="secondary"
						size="medium"
						text="Logout" />
				</div>
				: <div className={styles.actions}>
					<Button 
						onClick={login}
						theme="primary"
						size="medium"
						text="Login" />
				</div>
			}
		</div>
	)
}

export default Navigation