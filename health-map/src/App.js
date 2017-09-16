/*global google*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleMap from './google_map';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: -34.397, lng: 150.644 };
  }


  render() {

    return (
        <div style = {{height: '85%' }}>
        Map me!
        <button onClick={()=> this.setState({lat: 40.7128, lng: -74.005 })} >
        New york
        </button>

        <GoogleMap lat={this.state.lat} lng={this.state.lng} />

        </div>

    );
  }
}
