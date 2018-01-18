import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views

import MatchInfo from './matchInfo';
import UmpireDuty from './umpireDuty';

const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },

    matchInfoTab:{
        backgroundColor:'#3b487b',
        padding:10,
    },

    umpireDutyTab:{
        backgroundColor:'#1dadbb',
    }
  };

class TabSection extends Component {
    render () {
        return(
            <Tabs>
                <Tab label="Match Info" style={styles.matchInfoTab}>
                    <MatchInfo info={this.props.info}/>
                </Tab>
                <Tab label="Umpire Duty" style={styles.umpireDutyTab}>
                    <UmpireDuty umpireDutyInfo={this.props.umpireDutyInfo}/>
                </Tab>
            </Tabs>
        )
    }
}

export default TabSection;