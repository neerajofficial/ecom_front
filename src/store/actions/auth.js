import axiosInstance from './../../api';
import * as actionTypes from './actionTypes';

const userLoggedIn = data => {
	return {
		type: actionTypes.USER_LOGGEDIN,
		payload: data
	}
}

const userCreated = message => {
	return  {
		type: actionTypes.USER_CREATED,
		payload: message
	}
}

const authError = message => {
	return {
		type: actionTypes.AUTH_ERROR,
		payload: message
	}
}

export const signup = user => {
	return dispatch => {
		axiosInstance({
  			method: 'put',
  			url: '/auth/signup',
  			data: user
		})
		.then(resp => {
			dispatch(userCreated(resp.message))
		})
		.catch(err => {
			dispatch(authError(err.message))
		})
	}
}

export const logout = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('userId');
	return {
		type: actionTypes.AUTH_LOGOUT
	}
}

export const login = user => {
	return dispatch => {
		axiosInstance.post('/auth/login', user)
		.then(resp => {
			localStorage.setItem('token',resp.data.token);
			localStorage.setItem('user_id',resp.data.user_id);
			dispatch(userLoggedIn(resp))
		})
		.catch(err => {
			console.log(err);
			dispatch(authError(err.message))
		})
	}
}

export const getAuth = () => {
	return dispatch => {
		const token = localStorage.getItem('token');
		if (!token) {
			dispatch(logout());
		} else {
			const token = localStorage.getItem('token');
			const user_id = localStorage.getItem('user_id');
			dispatch(userLoggedIn({token: token, user_id: user_id}));
		}
	}
}