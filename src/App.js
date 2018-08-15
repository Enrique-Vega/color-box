import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Colorbox from './color-box.js';

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      currentColor: 0,
      colors: ["green", "blue", "yellow", "red", "purple", "white", "gray", "orange", "lightblue"]
    }
  }

  colorSwitcher(){
    console.log("clicked");
    //let colors = ["green", "blue", "yellow", "red", "purple", "white", "gray", "orange", "lightblue"];
    let newColor = this.state.currentColor;
    if(newColor < this.state.colors.length - 1){
      newColor++;
    } else {
      newColor = 0;
    }
    this.setState({currentColor: newColor});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Color Box</h1>
        </header>
          <Colorbox currentColor={this.state.currentColor} colors={this.state.colors} colorSwitcher={this.colorSwitcher.bind(this)}/>
      </div>
    );
  }
}

export default App;
