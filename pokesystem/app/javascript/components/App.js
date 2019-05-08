import React from "react";
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import Header from "./Header";
import Footer from "./Footer";
import Routes from "./Routes";

import configureStore from '../configureStore'

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <main id="app">
            <Routes />
          </main>
          <Footer />
        </BrowserRouter>
      </Provider>
      );
  }
}

export default App;