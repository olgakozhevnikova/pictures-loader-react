import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Main from './Main';
import History from './History';
import * as PicAPI from './PicturesAPI'

class App extends Component {
  state = {
    pictures: ''
  }

  componentDidMount() {
    PicAPI.get().then(pictures => {
      this.setState({ pictures })
      console.log(this.state.pictures)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="navigation">
          <Link to="/">Главная</Link>
          <Link to="/history">История</Link>
        </div>
        <Route exact path="/" render={() => (
          <Main
            pictures={this.state.pictures}
          />
        )}/>
        <Route path="/history" render={() => (
          <History/>
        )}/>
      </div>
    );
  }
}

export default App;
