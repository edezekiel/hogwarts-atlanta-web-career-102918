import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigTile from './PigTile.js'
import PigDetail from './PigDetail.js'
// TODO: add Filter Component
// TODO: create a f to map over pig tile pictures

class PigPen extends Component {

  state = {displayTile: true}

  generatePigTiles = () => hogs.map((pig, idx) =>
      <PigTile
        key={idx}
        name={pig.name}
      />
    )

  generatePigDetails = () => hogs.map((pig, idx) =>
    <PigDetail
      key={idx}
      specialty={pig.specialty}
      greased={pig.greased}
      weight={pig['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
      medal={pig['highest medal achieved']}
    />
  )

  showPig = (truthTest) => {
    if (truthTest) {
      console.log(truthTest)
      return this.generatePigTiles()
    } else {
      return this.generatePigDetails()
    }
  }

  render() {
    return (
      <div className="ui container">
        <Nav />
        <div className="PigPen ui grid container">
          {this.showPig(this.state.displayTile)}
        </div>
      </div>
    )
  }
}

export default PigPen;
