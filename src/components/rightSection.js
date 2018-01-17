import React, { Component } from 'react';

class RightSection extends Component {
    render() {
        return(
            <div className="right-content">
                <h4> <span className="span-small">vs</span> {this.props.teamInfo.opponent} <span className="align-right date">{this.props.teamInfo.date}</span> </h4>
                <div className="umpire">
                    <span className="light-text">umpire: </span>{this.props.teamInfo.umpire} <span className="align-right">pitch: <span className="pitch">{this.props.teamInfo.pitch}</span></span> 
                </div>
            </div>
        )
    }
}

export default RightSection ;