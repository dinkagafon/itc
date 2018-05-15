import React, { Component } from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import StoresPage from './StoresPage';
import { Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Main} />
        <Route exact path="/stores" component={StoresPage} />
        <Footer />
      </div>
    );
  }
}

export default App;
