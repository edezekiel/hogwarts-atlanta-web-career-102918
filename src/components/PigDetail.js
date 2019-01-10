import React, { Component } from 'react';


export default class PigDetail extends Component {
  render() {
    console.log(this.props)
    return (
      <div className= "ui eight wide column">
        <div className= "ui card">
          <div className="content">Hi there</div>
        </div>
      </div>
    )
  }
}
