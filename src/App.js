import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Main from './Main';
import History from './History';
import * as PicAPI from './PicturesAPI'

class App extends Component {
  state = {
    pictures: [],
    date: ''
  }

  componentDidMount() {
    this.getPic()
  }

  getPic() {
    PicAPI.get().then(picture => {
      this.setState(prevState => ({
        pictures: [...prevState.pictures, picture],
        date: Date()
      }))
      console.log(this.state.date)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="navigation">
          <Link to="/">Главная</Link>
          <Link to="/history">История</Link>
        </div>
        {this.state.pictures.length > 0 && 
          <Route exact path="/" render={() => (
            <Main
              picture={this.state.pictures[this.state.pictures.length - 1]}
              loadPic={() => this.getPic()}
            />
          )}/>
        }
        <Route path="/history" render={() => (
          <History
            pictures={this.state.pictures}
            date={this.state.date}
          />
        )}/>
      </div>
    );
  }
}

export default App;
