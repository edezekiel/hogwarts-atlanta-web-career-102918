import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigTile from './PigTile.js'
// TODO: add Filter Component
// TODO: create a f to map over pig tile pictures

class PigPen extends Component {

  generatePigTiles = () => hogs.map((pig, idx) =>
      <PigTile
          key={idx}
          name={pig.name}
          specialty={pig.specialty}
          greased={pig.greased}
          weight={pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
          medal={pig['highest medal achieved']}
        />
    )


  render() {

    return (
      <div className="ui container">
        <Nav />
        <div className="PigPen ui grid container">
          {this.generatePigTiles()}
        </div>
      </div>
    )
  }
}

export default PigPen;
