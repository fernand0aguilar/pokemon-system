import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Routes from "./Routes";


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main id="app">
          <Routes />
        </main>
        <Footer />
      </React.Fragment>
      );
  }
}

export default App;