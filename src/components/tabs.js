import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';

import MatchInfo from './matchInfo';
import UmpireDuty from './umpireDuty';
import RulesInfo from './rulesInfo';

const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },

    matchInfoTab:{
        backgroundColor:'#3b487b',
        paddingTop:10,
        paddingBottom:10,
    },

    umpireDutyTab:{
        backgroundColor:'#1dadbb', 
    },

    rulesTab:{
        backgroundColor:'#f3772f'
    }
    
  };

class TabSection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex:0
        }
    }

    handleChange = (value) =>{
        this.setState({
            slideIndex: value
        })
    }
    render () { 
        return(
            <div>
            <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
                <Tab label="Match Info" style={styles.matchInfoTab} value={0} />    
                <Tab label="Umpire Duty" style={styles.umpireDutyTab} value={1} />   
                <Tab label="Rules &amp; Format" style={styles.rulesTab} value={2} />
            </Tabs>
            <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
                <MatchInfo info={this.props.info}/>
                <UmpireDuty umpireDutyInfo={this.props.umpireDutyInfo}/>
                <RulesInfo /> 
            </SwipeableViews>
            </div>
        )
    }
}

export default TabSection;