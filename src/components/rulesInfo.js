import React, { Component } from 'react';

const styles = {
  redText: {
    color: 'red'
  },

  lightRedText: {
    color: '#f73962'
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 14
  },
  marginFromList: {
    marginTop: 15
  }
}

const Format = () => {
  return (
    <div>
      <h4>Format</h4>
      <ul>
        <li>Saturday - 28 teams, 2 groups of 14 team each.</li>
        <li>Top 4 Teams in each group qualify for Pre-Quarter Final.</li>
        <li>Total 394 matches -22 weeks of league</li>
      </ul>
    </div>
  )
}

const Rules = () => {
  return (
    <div>
      <h4>Rules</h4>
      <ul>
        <li>Each bowler can bowl max 3 overs.</li>
        <li>No runners / substitutes are allowed.</li>
        <li>First power play - First 3 overs (Mandatory). During power play only 2
fielders are permitted outside 30-yard circle.</li>
        <li>2nd power play - 3 continuous overs any time from 4th to 15th overs. Only 3 fielders are
permitted outside 30-yard circle.</li>
        <li style={styles.lightRedText}>After power play, there should not be more than 5 fielders outside the 30-yard
circle at any point in time. At the instant of delivery, there may not be more than
5 fieldsmen on the leg side (bowler not counted).</li>
        <li style={styles.redText}>All No-balls shall be penalized with an extra l run and a Free hit.</li>
        <li>3 minutes break at the end of power play. Fielding captain and umpires to
check on the batting side who are late and take final count of batting side

5

during the break.</li>
        <li>No more additions on fielding and batting will be allowed from 6th over
onwards.</li>
        <li>Matches shall be started on time. Any delay of more than 10 minutes from the
start time, the teams shall play with reduced over.</li>
      </ul>
      <p style={styles.boldText}>Those who create unruly scenes and show violence in the field shall be
barred from future tournaments. It’s the captain’s responsibility to
control his players.</p>
    </div>
  )
}

class RulesInfo extends Component {
  
  render() {
    return (
      <div style={styles.marginFromList}>
        <Format />
        <Rules />
        <p>
          Find more: <a href="http://www.sclcricketsg.com/format-rules" rel='noopener noreferrer' target="_blank">http://www.sclcricketsg.com/format-rules</a>
        </p>
      </div>
    )
  }
}

export default RulesInfo;