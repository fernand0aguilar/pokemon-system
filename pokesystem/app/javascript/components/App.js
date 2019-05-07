import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from "react-redux"

import Pokemon from './Pokemon';

import configureStore from '../configureStore'
const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={(store)}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => ("Home!")} />
            <Route path="/pokemon" render={() => <Pokemon name="ditto" url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>);
  }
}

export default App
