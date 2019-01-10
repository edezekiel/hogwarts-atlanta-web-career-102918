import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigTile from './PigTile.js'
// TODO: add Filter Component

class PigPen extends Component {
  render() {
    console.log(hogs)
    return (
      <div className="App">
        <h1>PigPen</h1>
          < Nav />
          < PigTile />
      </div>
    )
  }
}

export default PigPen;
