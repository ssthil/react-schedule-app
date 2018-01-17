import React, { Component } from 'react';
import LeftSection from './leftSection';
import RightSection from './rightSection';

 class MatchInfo extends Component{
     
    render() {
        return(
            <div className="row">
            
                {
                    this.props.info.map((match, i) => 
                        <div className="col-lg-4 col-sm-12 col-sm-12" key={i}>
                            <div className="list-group">
                                <a href="" className='list-group-item list-group-item-action' style={{borderTopColor: match.color}} >
                                    <div className="justify-content-between">
                                        <LeftSection timeInfo = {match}/>
                                        <RightSection teamInfo= {match}/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    )
                }

          </div>
        )
    }
}

export default MatchInfo;