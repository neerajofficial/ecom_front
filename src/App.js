import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import { Switch, Route, Redirect } from 'react-router-dom';

import AddProduct from './components/pages/addProduct';
import AdminProducts from './components/pages/adminProducts';
import Home from './components/pages/home';
import ViewProduct from './components/pages/viewProduct';

import Backdrop from './components/backdrop';
import Modal from './components/modal';
import Navigation from './components/navigation';

const App = props => {
  const { checkauth, redirect, logout, token } = props;

  const [auth, setToken] = useState(false); 
  const [showModal, setShow] = useState(false);
  const [formStatus, setForm] = useState(true);

  useEffect(() => {
    checkauth();
  }, [checkauth])

  useEffect(() => {
    if (redirect) {
      setShow(false);
      setToken(true);
    } else{
      setToken(false);
    }
      
  }, [redirect, token])

  const modalClick = () => {
    setShow(!showModal);
  }

  const formClicked = () => {
    setForm(!formStatus);
  }

  const loginModal = () => {
    setShow(true);
  }

  const logoutHandler = () => {
    logout();
  }

  return (
    <React.Fragment>
      { showModal ?
        <React.Fragment>
          <Backdrop clicked={modalClick} />
          <Modal 
            formSwitcher={formStatus}
            formClicked={formClicked}
            clicked={modalClick} />
        </React.Fragment>
      : null
      }
      <Navigation
        auth={auth}
        login={loginModal}
        logout={logoutHandler} />
      {
        auth 
        ? <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/my-products" component={AdminProducts} />
          <Route exact path="/add-product" component={AddProduct} />
          <Route path="/add-product/:id" component={AddProduct} />
          <Route exact path="/view-product/:id" component={ViewProduct} />
          <Redirect to="/home" /> 
        </Switch>
        : <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/view-product/:id" component={ViewProduct} />
          <Redirect to="/home" /> 
        </Switch>
      }
      
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    // user_id: state.auth.user_id,
    token: state.auth.token,
    redirect: state.auth.redirect
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkauth: () => dispatch(actions.getAuth()),
    logout: () => dispatch(actions.logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);