import React, { Component } from 'react';
import './App.css';

class Picture extends Component {
  render() {
    return (
      <div className="picture">
				<img src={this.props.picture.url}/>
      </div>
    );
  }
}

export default Picture;
