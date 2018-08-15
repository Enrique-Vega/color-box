import React, { Component } from 'react';
import './App.css';
import './color-box.css';

class Colorbox extends Component {
  // constructor (props) {
  //   super (props)
  //   this.state = {
  //     currentColor: 0,
  //     colors: ["green", "blue", "yellow", "red", "purple", "white", "gray", "orange", "lightblue"]
  //   }
  // }


  // colorSwitcher(){
  //   console.log("clicked");
  //   //let colors = ["green", "blue", "yellow", "red", "purple", "white", "gray", "orange", "lightblue"];
  //   let newColor = this.state.currentColor;
  //   if(newColor < this.state.colors.length - 1){
  //     newColor++;
  //   } else {
  //     newColor = 0;
  //   }
  //   this.setState({currentColor: newColor});
  // }

  updateColor(){
    this.props.colorSwitcher();
  }


  render() {
    return (
      <div className="App">
        <div className="color-box" style={{backgroundColor: this.props.colors[this.props.currentColor]}} onClick={this.updateColor.bind(this)}>
        <p>{this.props.colors[this.props.currentColor]}</p>
        </div>
      </div>
    );
  }
}

export default Colorbox;
