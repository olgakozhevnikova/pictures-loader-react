import React, { Component } from 'react';
import './App.css';
import Picture from './Picture';

class History extends Component {
  render() {
    const { pictures } = this.props
    console.log(pictures)
    return (
      <div className="history">
				{pictures.length > 0 && pictures.map(pic => (
          <Picture
            picture={pic}
          />
        ))}
      </div>
    );
  }
}

export default History;
