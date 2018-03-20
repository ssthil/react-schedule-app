import React, { Component } from 'react';
import Images from '../images/images'

class LeftSection extends Component {

  renderFunction(result) {
    switch(result) {
      case 'won':
        return (<div className="left-content text-center won-color">
                <img src={Images.won} alt="won" height="50"/>
              </div>)
          break;
      case 'tied':
        return (<div className="left-content text-center tied-color">
            <img src={Images.tied} alt="tied" height="50"/>
          </div>)
          break;
      default:
        return (<div className="left-content text-center">
            <h6>{this.props.timeInfo.gameCount}</h6>
            <h5 className="text-bold">{this.props.timeInfo.time}</h5>
        </div>)
    }
  }
  render() {
      const ifMatchWon = this.props.timeInfo.result;
      return(
          <div>
          {/* { (ifMatchWon === 'won') ? (
              <div className="left-content text-center won-color">
                  <img src={Won} alt="won" height="50"/>
              </div>
              ) : (
              <div className="left-content text-center">
                  <h6>{this.props.timeInfo.gameCount}</h6>
                  <h5 className="text-bold">{this.props.timeInfo.time}</h5>
              </div>
          )} */}
          
          {
            this.renderFunction(ifMatchWon)
          }
          
          </div>
      )
  }
}

export default LeftSection;