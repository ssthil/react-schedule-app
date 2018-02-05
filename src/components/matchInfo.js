import React, { Component } from 'react';
import LeftSection from './leftSection';
import RightSection from './rightSection';

const styles = {
    marginFromList:{
        marginTop:15
    }
}

 class MatchInfo extends Component{
     
    render() {
        return(
            <div className="row" style={styles.marginFromList}>
            
                {
                    this.props.info.map((match, i) => 
                        <div className="col-lg-6 col-sm-12 col-sm-12" key={i}>
                            <div className="list-group">
                                <a href="" className={"list-group-item list-group-item-action" + ( match.inprogress ==='yes' ? ' animated-brd':'')} style={{borderTopColor: (match.result === 'won') ? match.wonColor : match.color}} >
                                    <div className="justify-content-between ">
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