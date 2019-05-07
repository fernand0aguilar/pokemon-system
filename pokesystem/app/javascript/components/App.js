import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pokemon from './Pokemon';
export class Pokemon extends React.Component {
  render() {
    return (<BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => ("Home!")} />
        <Route path="/pokemon" render={() => <Pokemon name="ditto" url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" />}></Route>
      </Switch>
    </BrowserRouter>);
  }
}

export default App
