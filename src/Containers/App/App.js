import React, { useState, useEffect } from 'react';
import CardList from '../../Components/CardList/CardList';
import Masterdex from './Masterdex'
import './App.scss';
import SearchBox from '../../Components/SearchBox/SearchBox';
import Pokemon from '../../Components/Pokemon/Pokemon'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';




const App = () => (
  <Router>
  <Switch>
    <Route exact path="/" render={(props) => <Masterdex {...props} />} />
    <Route
      exact
      path="/:pokemonId"
      render={(props) => <Pokemon {...props} />}
    />
  </Switch>
  </Router>
);

export default App;