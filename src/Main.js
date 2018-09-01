import React, { Component } from 'react';
import './App.css';
import Picture from './Picture';

class Main extends Component {
  state = {
    picNumber: 0,
    picture: ''
  }

  // show new picture
  showPic() {
    this.setState({ picNumber: this.state.picNumber + 1 })
    const val = this.props.pictures[Object.keys(this.props.pictures)[this.state.picNumber]]
    this.setState({ picture: val })
    if (this.state.picNumber >= Object.keys(this.props.pictures).length -1) {
      this.setState({ picNumber: 0 })
    }
  }

  render() {
    return (
      <div className="main">
				<Picture
          picture={this.state.picture}
        />
				<button className="add-pic" onClick={() => this.showPic()}>Загрузить</button>
			</div>
    );
  }
}

export default Main;