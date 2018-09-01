import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Main from './Main';
import History from './History';
import * as PicAPI from './PicturesAPI'

class App extends Component {
  state = {
    picture: {},
    loadedPic: []
  }

  componentDidMount() {
    this.getPic()
  }

  getPic() {
    PicAPI.get().then(picture => {
      this.setState(prevState => ({ 
        picture: picture,
        loadedPic: [...prevState.loadedPic, picture]
      }))
      console.log(this.state)
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
            picture={this.state.picture}
            loadPic={() => this.getPic()}
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
