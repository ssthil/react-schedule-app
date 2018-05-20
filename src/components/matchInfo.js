import React, { Component } from 'react';
import LeftSection from './leftSection';
import RightSection from './rightSection';

const styles = {
    marginFromList:{
        marginTop:15
    }
}

 class MatchInfo extends Component{

    getClassName = (result) => {
      switch(result) {
        case 'won':
          return 'won-color'
        case 'lose':
          return 'lose-color'
        case 'tied':
          return 'tied-color'
        default:
          break
      }
    }
     
    render() {
        return(
            <div className="row" style={styles.marginFromList}>
            
                {
                    this.props.info.map((match, i) => 
                        <div className="col-lg-6 col-sm-12 col-sm-12" key={i}>
                            <div className="list-group">
                                <a href="" className={`list-group-item list-group-item-action ${this.getClassName(match.result)}`} >
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