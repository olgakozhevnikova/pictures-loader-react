import React, { Component } from 'react';
import './App.css';
import Picture from './Picture';

class Main extends Component {
  render() {
    return (
      <div className="main">
				<Picture />
				<button className="add-pic">Загрузить</button>
			</div>
    );
  }
}

export default Main;