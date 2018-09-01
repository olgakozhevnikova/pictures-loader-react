import React, { Component } from 'react';
import './App.css';
import Picture from './Picture';

class History extends Component {
  render() {
    const { pictures, date } = this.props
    console.log(pictures)
    return (
      <div className="history">
				{pictures.length > 0 && pictures.map(pic => (
          <Picture
            picture={pic}
            date={date}
          />
        ))}
      </div>
    );
  }
}

export default History;
