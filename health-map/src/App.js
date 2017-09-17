/*global google*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputSlider from 'react-input-slider';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: 100.397, lng: 250.644, x: 10, y: 10 };
}


  render() {

    return (
        <div style = {{height: '100%' }}  >
        </div>

      );
    }

    handleChange = pos => {
      this.setState ({
        x: pos.x,
        y: pos.y
      });
    };

}
