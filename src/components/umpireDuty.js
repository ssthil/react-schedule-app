import React, { Component } from 'react';

const styles = {
  marginFromList: {
    marginTop: 15
  }
}

const LeftSection = ({umpire}) => {
  return (
    <div className="left-content text-center">
      <h6>{umpire.gameCount}</h6>
      <h5 className="text-bold">{umpire.time}</h5>
    </div>
  )
}

const RightSection = props => {
  return (
    <div className="right-content">
      <h4>{props.team1} <span className="span-small">vs</span> {props.team2} <span className="align-right date">{props.date}</span> </h4>
      <div className="umpire">
        <span className="light-text">umpire: </span>{props.umpire} <span className="align-right">pitch: <span className="pitch">{props.pitch}</span></span>
      </div>
    </div>
  )
}

class UmpireDuty extends Component {
  render() {
    return (
      <div className="row" style={styles.marginFromList}>
        {
          this.props.umpireDutyInfo.map((umpire, i) =>
            <div className="col-lg-6 col-sm-12 col-sm-12" key={i}>
              <div className="list-group">
                <a href="" className='list-group-item list-group-item-action' style={{ borderTopColor: umpire.color }} >
                  <div className="justify-content-between">
                    <LeftSection umpire={umpire} />
                    <RightSection {...umpire}/>
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