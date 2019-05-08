import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PokedexPage from '../containers/PokedexPage';
import PokemonPage from '../containers/PokemonPage';


const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => ("Home")} />
        <Route path="/pokemon" render={() => <PokedexPage greeting="Hello <3 " />}></Route>
      </Switch>
    </BrowserRouter>
);

export default Routes;