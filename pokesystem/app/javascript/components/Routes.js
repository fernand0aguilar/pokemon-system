import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux"
import configureStore from '../configureStore'

import PokedexPage from '../containers/PokedexPage';
import PokemonPage from '../containers/PokemonPage';


const store = configureStore();
const Routes = () => (
    <Provider store={(store)}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => ("Hello")} />
            <Route path="/pokemon" component={PokedexPage}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
);

export default Routes;