import React, { Component } from 'react';
import './App.css';
import Picture from './Picture';

class Main extends Component {

  render() {
    const { picture, loadPic } = this.props
    return (
      <div className="main">
        {Object.keys(picture).length !==0 && (
          <Picture
            picture={picture}
          />
        )}
				<button className="add-pic" onClick={loadPic}>Загрузить</button>
			</div>
    );
  }
}

export default Main;