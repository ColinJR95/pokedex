import React, { useState, useEffect } from 'react';
import CardList from '../../Components/CardList/CardList';
import Masterdex from './Masterdex'
import './App.scss';
import SearchBox from '../../Components/SearchBox/SearchBox';
import Pokemon from '../../Components/Pokemon/Pokemon'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import Activate from '../Auth/Activate';
import ResetPassword from '../Auth/ResetPassword';
import ResetPasswordConfirm from '../Auth/ResetPasswordConfirm';
import Layout from '../../hocs/Layout'
import Home from '../Auth/Home';

import {Provider} from 'react-redux'
import store from '../../store'



const App = () => (
  <Provider store={store}>
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon" 
          render={(props) => {
           return (localStorage.getItem('access')) ?
           <Masterdex {...props} /> 
           : <Home {...props} />
            }}/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/reset_password" component={ResetPassword} />
          <Route exact path="/password/reset/confirm/:uid/:token" component={ResetPasswordConfirm} />
          <Route exact path="/activate/:uid/:token" component={Activate} />
        </Switch>
      </Layout>
    </Router>
  </Provider>
);

export default App;