import React, { Component } from 'react';
import './App.css';

class Picture extends Component {
  render() {
    const { picture, date } = this.props
    return (
      <div className="pic-wrap">
        <div className="pic">
          <img src={picture.preview_gif.url}/>
        </div>
        <div className="pic-info">
          <span>{picture.title}</span>
          <span>{date}</span>
        </div>
      </div>
    );
  }
}

export default Picture;
