import React from "react";
import { Provider } from "react-redux"

import Header from "./Header";
import Footer from "./Footer";
import Routes from "./Routes";

import configureStore from '../configureStore'

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <main id="app">
          <Routes />
        </main>
        <Footer />
      </Provider>
      );
  }
}

export default App;