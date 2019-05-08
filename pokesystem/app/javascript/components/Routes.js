import React from 'react';
import {Switch, Route } from 'react-router-dom';

import PokedexPage from '../containers/PokedexPage';
import PokemonPage from '../containers/PokemonPage';
import NotFound from '../components/NotFound';

const Routes = () => (
    <Switch>
      <Route exact path="/" render={() => <PokedexPage greeting="Hello <3 "></PokedexPage>}></Route>
      <Route exact path="/pokemons/:id" component={PokemonPage}/>
      <Route path="*" component={NotFound}/>
    </Switch>
);

export default Routes;