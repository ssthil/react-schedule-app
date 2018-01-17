import React, { Component } from 'react';
import Logo from '../images/ton.jpg'
class Header extends Component {
    
    render() {
        return(
            <div className="jumbotron">
                {/* <h3 className="display-3 title">{this.props.title}</h3> */}
                <div className="logoBg"><img src={Logo} height="80" alt="TON" /></div>
                <p className="lead description">{this.props.description}</p>
            </div>
        )
    }
}

export default Header;