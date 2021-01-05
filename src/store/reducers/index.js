import { combineReducers } from 'redux';

import Products from './products';
import Auth from './auth';

const Reducers = combineReducers({
	products: Products,
	auth: Auth
})

export default Reducers;