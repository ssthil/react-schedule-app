import React, { Component } from 'react';

class Header extends Component {
    
    render() {
        return(
            <div className="jumbotron">
                <h3 className="display-3">{this.props.title}</h3>
                <p className="lead">{this.props.description}</p>
            </div>
        )
    }
}

export default Header;