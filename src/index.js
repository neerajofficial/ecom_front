import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import Store from './store';
import App from './App';

ReactDOM.render(
	<Provider store={Store}>
 		<React.StrictMode>
 		<Router>
 			<App />
 		</Router>
  		</React.StrictMode>
  	</Provider>,
  document.getElementById('root')
);