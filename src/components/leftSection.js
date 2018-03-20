import React, { Component } from 'react';
import Images from '../images/images'

class LeftSection extends Component {

  wonContent = () => {
    return (
      <div className="left-content text-center won-color">
        <img src={Images.won} alt="won" height="50" />
      </div>
    )
  }

  tiedContent = () => {
    return (
      <div className="left-content text-center tied-color">
        <img src={Images.tied} alt="tied" height="50" />
      </div>
    )
  }

  scheduleContent = () => {
    return (
      <div className="left-content text-center">
        <h6>{this.props.timeInfo.gameCount}</h6>
        <h5 className="text-bold">{this.props.timeInfo.time}</h5>
      </div>
    )
  }

  renderFunction(result) {
    switch (result) {
      case 'won':
        return this.wonContent()
          
      case 'tied':
        return this.tiedContent()
        
      default:
        return this.scheduleContent()
    }
  }
  render() {
    const ifMatchWon = this.props.timeInfo.result;
    return (
      <div>
        {
          this.renderFunction(ifMatchWon)
        }
      </div>
    )
  }
}

export default LeftSection;