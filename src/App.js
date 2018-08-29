import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Main from './Main';
import History from './History';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation">
          <Link to="/">Главная</Link>
          <Link to="/history">История</Link>
        </div>
        <Route exact path="/" render={() => (
          <Main/>
        )}/>
        <Route path="/history" render={() => (
          <History/>
        )}/>
      </div>
    );
  }
}

export default App;
