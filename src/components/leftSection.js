import React, { Component } from 'react';

class LeftSection extends Component {
    render() {
        return(
            <div className="left-content text-center">
                <h6>{this.props.timeInfo.gameCount}</h6>
                <h5 className="text-bold">{this.props.timeInfo.time}</h5>
            </div>
        )
    }
}

export default LeftSection;