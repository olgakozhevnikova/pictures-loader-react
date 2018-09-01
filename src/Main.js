import React, { Component } from 'react';
import './App.css';

class Main extends Component {

  render() {
    const { picture, loadPic } = this.props
    return (
      <div className="main">
        <div className="sidebar">
          <span>Главная</span>
        </div>
        <div className="main-content">
          <div className="picture">
            <img src={picture.original.webp}/>
          </div>
          <div className="button">
            <button className="add-pic" onClick={loadPic}>Загрузить</button>
          </div>
        </div>
			</div>
    );
  }
}

export default Main;