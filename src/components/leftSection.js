import React, { Component } from 'react';
import Images from '../images/images'

class LeftSection extends Component {

  won=()=>{
    return Images.won
  }

  lose=()=>{
    return Images.lose
  }

  tied=()=>{
    return Images.tied
  }

  resultContent = (result) => {
    switch(result){
      case 'won':
        return(
          <div className={`left-content text-center`}>
            <img src={this.won()} alt="won" height="50" />
          </div>
        )
      case 'lose':
        return(
          <div className={`left-content text-center`}>
            <img src={this.lose()} alt="lose" height="50" />
          </div>
        )
      case 'tied':
        return(
          <div className={`left-content text-center`}>
            <img src={this.tied()} alt="tied" height="50" />
          </div>
        )
      default:
        break

    }
  }

  scheduleContent = () => {
    return (
      <div className="left-content text-center">
        <h6>{this.props.timeInfo.gameCount}</h6>
        <h5 className="text-bold">{this.props.timeInfo.time}</h5>
      </div>
    )
  }

  render() {
    const ifMatchWon = this.props.timeInfo.result;
    return (
      <div>
        {
          this.resultContent(ifMatchWon)
        }
      </div>
    )
  }
}

export default LeftSection;