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
        date: this.getDate()
      }))
      console.log(this.state.date)
    })
  }

  // get the date and the time, when a picture was loaded
  getDate() {
    let date = new Date()
    let dd = date.getDate()
    let mm = date.getMonth() + 1
    let yyyy = date.getFullYear()
    let hh = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()

    return yyyy + '-' + (mm < 10 ? '0' + mm : mm) + '-' + (dd < 10 ? '0' + dd : dd) +
      ' ' + (hh < 10 ? '0' + hh : hh) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec)
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
