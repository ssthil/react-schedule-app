import React, { Component } from 'react';

class RightSection extends Component {

  resultColor = (result) => {
    let actualClass;
    switch (result) {
      case 'won':
        actualClass = 'won-text'
        break;
      case 'lose':
        actualClass = 'lose-text'
        break;
      case 'tied':
        actualClass = 'tied-text'
        break;
      default:
        break
    }
    return <span className={actualClass}><span>{this.props.teamInfo.result}</span></span>
  }

  render() {
    const MatchResult = () => {
      if (this.props.teamInfo.result !== 'none') {
        return (
          <span>
            Result: {this.resultColor(this.props.teamInfo.result)} 
          </span>
        )
      } else {
        return (
          <span className="light-text">
            umpire: {this.props.teamInfo.umpire}
          </span>
        )
      }
    }
    return (
      <div className="right-content">
        <h4> <span className="span-small">vs</span> {this.props.teamInfo.opponent} <span className="align-right date">{this.props.teamInfo.date}</span> </h4>
        <div className="umpire">
          { MatchResult() }
          <span className="align-right">pitch: <span className="pitch">{this.props.teamInfo.pitch}</span>
          </span>
        </div>
      </div>
    )
  }
}

export default RightSection;