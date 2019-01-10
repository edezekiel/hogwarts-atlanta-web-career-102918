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
  'augustus_gloop': aug,
  'bay_of_pigs': bay,
  'cherub': che,
  'cherub': chr,
  'galaxy_note': gal,
  'leggo_my_eggo': leg,
  'mudblood': mud,
  'piggy_smalls': pig,
  'porkchop': por,
  'rainbowdash': rai,
  'sobriety': sob,
  'the_prosciutto_concern': the,
  'trouble': tro,
  'truffleshuffle': tru
}

export default class PigTile extends Component {
  render() {
    return (
      <h1>PigTile</h1>
    )
  }
}
