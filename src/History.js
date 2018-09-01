import React, { Component } from 'react';
import './App.css';
import Picture from './Picture';

class History extends Component {
  render() {
    const { loadedPic } = this.props
    return (
      <div className="history">
				{loadedPic.map(pic => {
          <Picture
            picture={pic}
          />
        })}
      </div>
    );
  }
}

export default History;
