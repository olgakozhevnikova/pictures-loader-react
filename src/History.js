import React, { Component } from 'react';
import './App.css';
import Picture from './Picture';

class History extends Component {
  render() {
    const { pictures, date } = this.props
    console.log(pictures)
    return (
      <div className="history">
        <div className="sidebar">
          <span>История</span>
        </div>
        <div className="picture-list">
          {pictures.length > 0 && pictures.map(pic => (
            <Picture
              key={date.replace(/ /g,'')}
              picture={pic}
              date={date}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default History;
