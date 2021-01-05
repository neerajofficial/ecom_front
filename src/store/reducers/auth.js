import * as actionTypes from './../actions/actionTypes';

const INITIAL_STATE = {
	token: null,
	user_id: null,
	message: null,
	redirect: false
}

const userAuth = (state, action) => {
	return {
		...state,
		token: action.payload.token,
		user_id: action.payload.user_id,
		redirect: true
	}
}

const authLogout = (state, action) => {
	return {
		...state,
		token: null,
		user_id: null,
		redirect: false
	}
}

const userCreated = (state, action) => {
	return {
		...state,
		message: action.payload
	}
}

const authError = (state, action) => {
	return {
		...state,
		message: action.payload
	}
}

const Auth = (state = INITIAL_STATE, action) => { 
	switch(action.type) {
		case actionTypes.USER_CREATED:
			return userCreated(state, action);
		case actionTypes.USER_LOGGEDIN:
			return userAuth(state, action);
		case actionTypes.AUTH_ERROR:
			return authError(state, action);
		case actionTypes.AUTH_LOGOUT: 
			return authLogout(state, action);
		default:
			return state;
	}
}

export default Auth;