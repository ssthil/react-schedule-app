import React, { Component } from 'react';
import Won from '../images/won.png'

class LeftSection extends Component {
    render() {
        const ifMatchWon = this.props.timeInfo.result;
        return(
            <div>
            { (ifMatchWon === 'won') ?(
                <div className="left-content text-center won-color">
                    <img src={Won} alt="won" height="50"/>
                </div>
               ) : (
                <div className="left-content text-center">
                    <h6>{this.props.timeInfo.gameCount}</h6>
                    <h5 className="text-bold">{this.props.timeInfo.time}</h5>
                </div>
            )}
            </div>
        )
    }
}

export default LeftSection;