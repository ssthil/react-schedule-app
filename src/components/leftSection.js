import React, { Component } from 'react';
import Images from '../images/images'

class LeftSection extends Component {

  won = () => {
    return Images.won
  }

  lose = () => {
    return Images.lose
  }

  tied = () => {
    return Images.tied
  }

  resultContent = (result) => {
    let actualContent;
    switch (result) {
      case 'won':

        return actualContent = <img src={this.won()} alt="won" height="50" />

      case 'lose':

        return actualContent = <img src={this.lose()} alt="lose" height="50" />

      case 'tied':
        return actualContent = <img src={this.tied()} alt="tied" height="50" />

      default:
        return actualContent = <h5 className="text-bold">{this.props.timeInfo.time}</h5>
    } 
    // eslint-disable-next-line
    return actualContent;
  }

  render() {
    const ifMatchWon = this.props.timeInfo.result;
    return (

      <div className="left-content text-center">
        {this.resultContent(ifMatchWon)}
      </div>

    )
  }
}

export default LeftSection;