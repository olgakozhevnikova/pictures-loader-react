import React, { Component } from 'react';
import './App.css';

class Picture extends Component {
  render() {
    const { picture } = this.props
    return (
      <div className="picture">
				<img src={picture.original.url}/>
      </div>
    );
  }
}

export default Picture;
