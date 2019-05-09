import React from "react";
import { Provider } from "react-redux"
import { Route } from 'react-router-dom'
import configureStore from '../configureStore'
import Editor from './Editor'
import { BrowserRouter } from "react-router-dom"

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Route path="/pokemons/:id?" component={Editor} />
      </BrowserRouter>
      </Provider>
      );
  }
}

export default App;