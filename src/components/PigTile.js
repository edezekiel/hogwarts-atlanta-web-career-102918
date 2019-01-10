import aug from '../hog-imgs/augustus_gloop.jpg'
import bay from '../hog-imgs/bay_of_pigs.jpg'
import che from '../hog-imgs/cherub.jpg'
import chr from '../hog-imgs/cherub.png'
import gal from '../hog-imgs/galaxy_note.jpg'
import leg from '../hog-imgs/leggo_my_eggo.jpg'
import mud from '../hog-imgs/mudblood.jpg'
import pig from '../hog-imgs/piggy_smalls.jpg'
import por from '../hog-imgs/porkchop.jpg'
import rai from '../hog-imgs/rainbowdash.jpg'
import sob from '../hog-imgs/sobriety.jpg'
import the from '../hog-imgs/the_prosciutto_concern.jpg'
import tro from '../hog-imgs/trouble.jpg'
import tru from '../hog-imgs/truffleshuffle.jpg'

import React, { Component } from 'react';

const pigMap = {
  'Augustus Gloop': aug,
  'Bay of Pigs': bay,
  'Cherub': che,
  'Cherub2': chr,
  'Galaxy Note': gal,
  'Leggo My Eggo': leg,
  'Mudblood': mud,
  'Piggy smalls': pig,
  'Porkchop': por,
  'Rainbowdash': rai,
  'Sobriety': sob,
  'The Prosciutto Concern': the,
  'Trouble': tro,
  'TruffleShuffle': tru
}

export default class PigTile extends Component {


  render() {
    console.log(this.props)
    return (
      <div className= "ui eight wide column"
            onClick={this.props.toggleDisplay}
      >
        <div className= "ui card">
          <div className="image">
            <img src={pigMap[`${this.props.name}`]} />
          </div>
          <div className="content">{this.props.name}</div>
        </div>
      </div>
    )
  }
}
