import React, { Component } from 'react';

const styles = {
    marginFromList:{
        marginTop:15
    }
}

class UmpireDuty extends Component {
    render() {
        return(
            <div className="row" style={styles.marginFromList}>
                {
                    this.props.umpireDutyInfo.map((umpire, i) => 
                    <div className="col-lg-6 col-sm-12 col-sm-12" key={i}>
                        <div className="list-group">
                            <a href="" className='list-group-item list-group-item-action' style={{borderTopColor: umpire.color}} >
                                <div className="justify-content-between">
                                <div className="left-content text-center">
                                    <h6>{umpire.gameCount}</h6>
                                    <h5 className="text-bold">{umpire.time}</h5>
                                </div>
                                <div className="right-content">
                                    <h4>{umpire.team1} <span className="span-small">vs</span> {umpire.team2} <span className="align-right date">{umpire.date}</span> </h4>
                                    <div className="umpire">
                                        <span className="light-text">umpire: </span>{umpire.umpire} <span className="align-right">pitch: <span className="pitch">{umpire.pitch}</span></span> 
                                    </div>
                                </div>
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

export default UmpireDuty;