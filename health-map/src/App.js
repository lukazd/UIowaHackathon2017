

import React, { Component } from 'react';
import VolumeSlider from './rangeslider.js';
import './App.css';
import Slider from 'react-rangeslider';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: 100.397, lng: 250.644, x: 10, y: 10 };
}


  render() {

    return (
        <div style = {{height: '10%' }}  >

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
